<?php

declare(strict_types=1);

// Controlador de usuarios — perfil propio + CRUD admin
require_once __DIR__ . '/../models/UsuarioModel.php';
require_once __DIR__ . '/../models/PedidoModel.php';

class UsuarioController
{
    private UsuarioModel $usuarioModel;
    private PedidoModel $pedidoModel;

    public function __construct(PDO $pdo)
    {
        $this->usuarioModel = new UsuarioModel($pdo);
        $this->pedidoModel = new PedidoModel($pdo);
    }

    // ===== PERFIL DEL USUARIO =====

    public function getPerfil(): void
    {
        $this->iniciarSesion();

        $idUsuario = isset($_SESSION['usuario_id']) ? (int) $_SESSION['usuario_id'] : 0;

        if ($idUsuario <= 0) {
            $this->jsonResponse(['status' => 'error', 'message' => 'No autenticado.'], 401);
            return;
        }

        try {
            $usuario = $this->usuarioModel->getUsuarioById($idUsuario);

            if ($usuario === null) {
                $this->jsonResponse(['status' => 'error', 'message' => 'Usuario no encontrado.'], 404);
                return;
            }

            $this->jsonResponse(['status' => 'ok', 'data' => $usuario]);
        } catch (Throwable $exception) {

            $this->jsonResponse(['status' => 'error', 'message' => 'Error al obtener el perfil.'], 500);
        }
    }

    public function updatePerfil(): void
    {
        $this->iniciarSesion();

        $idUsuario = isset($_SESSION['usuario_id']) ? (int) $_SESSION['usuario_id'] : 0;

        if ($idUsuario <= 0) {
            $this->jsonResponse(['status' => 'error', 'message' => 'No autenticado.'], 401);
            return;
        }

        $input = $this->getJsonInput();

        $nombre = trim((string) ($input['nombre'] ?? ''));

        if ($nombre === '') {
            $this->jsonResponse(['status' => 'error', 'message' => 'El nombre es obligatorio.'], 400);
            return;
        }

        $data = [
            'nombre' => $nombre,
            'sexo' => $input['sexo'] ?? null,
            'fecha_nacimiento' => $input['fecha_nacimiento'] ?? null,
            'direccion' => $input['direccion'] ?? null,
            'pais' => $input['pais'] ?? null,
            'tarjeta' => $input['tarjeta'] ?? null,
            'notificaciones' => !empty($input['notificaciones']) ? 1 : 0,
            'revista' => !empty($input['revista']) ? 1 : 0,
        ];

        try {
            $this->usuarioModel->updateUsuario($idUsuario, $data);

            $this->jsonResponse(['status' => 'ok', 'message' => 'Perfil actualizado.']);
        } catch (Throwable $exception) {

            $this->jsonResponse(['status' => 'error', 'message' => 'No se pudo actualizar el perfil.'], 500);
        }
    }

    // ===== PEDIDOS DEL USUARIO =====
    // Agrupa las filas del LEFT JOIN por id_pedido para devolver un array limpio

    public function getPedidosUsuario(): void
    {
        $this->iniciarSesion();

        $idUsuario = isset($_SESSION['usuario_id']) ? (int) $_SESSION['usuario_id'] : 0;

        if ($idUsuario <= 0) {
            $this->jsonResponse(['status' => 'error', 'message' => 'No autenticado.'], 401);
            return;
        }

        try {
            $rows = $this->pedidoModel->getPedidosUsuario($idUsuario);

            $pedidos = [];

            foreach ($rows as $row) {

                $idPedido = (int) $row['id_pedido'];

                if (!isset($pedidos[$idPedido])) {
                    $pedidos[$idPedido] = [
                        'id_pedido' => $idPedido,
                        'fecha' => $row['fecha'],
                        'total' => $row['total'],
                        'estado' => $row['estado'],
                        'lineas' => [],
                    ];
                }

                if ($row['id_detalle'] !== null) {
                    $pedidos[$idPedido]['lineas'][] = [
                        'id_articulo' => (int) $row['id_articulo'],
                        'cantidad' => (int) $row['cantidad'],
                        'precio_unitario' => (float) $row['precio_unitario'],
                    ];
                }
            }

            $this->jsonResponse([
                'status' => 'ok',
                'data' => array_values($pedidos)
            ]);
        } catch (Throwable $exception) {

            $this->jsonResponse(['status' => 'error', 'message' => 'No se pudieron obtener los pedidos.'], 500);
        }
    }

    // ===== CRUD ADMIN =====

    public function getAllUsuarios(): void
    {
        $this->iniciarSesion();

        if (!$this->esAdmin()) {
            $this->jsonResponse(['status' => 'error', 'message' => 'Acceso no autorizado.'], 403);
            return;
        }

        try {
            $usuarios = $this->usuarioModel->getAllUsuarios();

            $this->jsonResponse([
                'status' => 'ok',
                'data' => $usuarios
            ]);
        } catch (Throwable $exception) {

            $this->jsonResponse(['status' => 'error', 'message' => 'No se pudieron obtener los usuarios.'], 500);
        }
    }

    // Crear usuario desde panel admin — comprobamos DNI y email duplicados antes de insertar
    public function createUsuarioAdmin(): void
    {
        $this->iniciarSesion();

        if (!$this->esAdmin()) {
            $this->jsonResponse(['status' => 'error', 'message' => 'Acceso no autorizado.'], 403);
            return;
        }

        $input = $this->getJsonInput();

        $nombre = trim((string) ($input['nombre'] ?? ''));
        $dni = trim((string) ($input['dni'] ?? ''));
        $email = trim((string) ($input['email'] ?? ''));
        $password = trim((string) ($input['password'] ?? ''));
        $rol = trim((string) ($input['rol'] ?? 'usuario'));

        if ($nombre === '' || $dni === '' || $email === '' || $password === '') {
            $this->jsonResponse(['status' => 'error', 'message' => 'Nombre, DNI, email y password son obligatorios.'], 400);
            return;
        }

        if (!in_array($rol, ['usuario', 'admin'], true)) {
            $rol = 'usuario';
        }

        if ($this->usuarioModel->dniExiste($dni)) {
            $this->jsonResponse(['status' => 'error', 'message' => 'El DNI ya esta registrado.'], 409);
            return;
        }

        if ($this->usuarioModel->emailExiste($email)) {
            $this->jsonResponse(['status' => 'error', 'message' => 'El email ya esta registrado.'], 409);
            return;
        }

        try {
            $idUsuario = $this->usuarioModel->createUsuario([
                'nombre' => $nombre,
                'dni' => $dni,
                'email' => $email,
                'password' => password_hash($password, PASSWORD_DEFAULT),
                'rol' => $rol,
            ]);

            $this->jsonResponse([
                'status' => 'ok',
                'data' => ['id_usuario' => $idUsuario]
            ], 201);
        } catch (Throwable $exception) {

            $this->jsonResponse(['status' => 'error', 'message' => 'No se pudo crear el usuario.'], 500);
        }
    }

    public function updateUsuarioAdmin(int $idUsuario): void
    {
        $this->iniciarSesion();

        if (!$this->esAdmin()) {
            $this->jsonResponse(['status' => 'error', 'message' => 'Acceso no autorizado.'], 403);
            return;
        }

        $usuario = $this->usuarioModel->getUsuarioById($idUsuario);

        if ($usuario === null) {
            $this->jsonResponse(['status' => 'error', 'message' => 'Usuario no encontrado.'], 404);
            return;
        }

        $input = $this->getJsonInput();

        $nombre = trim((string) ($input['nombre'] ?? $usuario['nombre']));
        $email = trim((string) ($input['email'] ?? $usuario['email']));
        $rol = trim((string) ($input['rol'] ?? $usuario['rol']));

        if ($nombre === '' || $email === '') {
            $this->jsonResponse(['status' => 'error', 'message' => 'Nombre y email son obligatorios.'], 400);
            return;
        }

        if (!in_array($rol, ['usuario', 'admin'], true)) {
            $rol = 'usuario';
        }

        if ($this->usuarioModel->emailExisteOtro($email, $idUsuario)) {
            $this->jsonResponse(['status' => 'error', 'message' => 'El email ya esta en uso por otro usuario.'], 409);
            return;
        }

        try {
            $this->usuarioModel->updateUsuarioAdmin($idUsuario, [
                'nombre' => $nombre,
                'email' => $email,
                'rol' => $rol,
            ]);

            $this->jsonResponse(['status' => 'ok', 'message' => 'Usuario actualizado.']);
        } catch (Throwable $exception) {

            $this->jsonResponse(['status' => 'error', 'message' => 'No se pudo actualizar el usuario.'], 500);
        }
    }

    // no te puedes borrar a ti mismo, eso sería un desastre
    public function deleteUsuario(int $idUsuario): void
    {
        $this->iniciarSesion();

        if (!$this->esAdmin()) {
            $this->jsonResponse(['status' => 'error', 'message' => 'Acceso no autorizado.'], 403);
            return;
        }

        $adminId = isset($_SESSION['usuario_id']) ? (int) $_SESSION['usuario_id'] : 0;

        if ($idUsuario === $adminId) {
            $this->jsonResponse(['status' => 'error', 'message' => 'No puedes eliminarte a ti mismo.'], 400);
            return;
        }

        $usuario = $this->usuarioModel->getUsuarioById($idUsuario);

        if ($usuario === null) {
            $this->jsonResponse(['status' => 'error', 'message' => 'Usuario no encontrado.'], 404);
            return;
        }

        try {
            $this->usuarioModel->deleteUsuario($idUsuario);

            $this->jsonResponse(['status' => 'ok', 'message' => 'Usuario eliminado.']);
        } catch (Throwable $exception) {

            $this->jsonResponse(['status' => 'error', 'message' => 'No se pudo eliminar el usuario.'], 500);
        }
    }

    // ===== HELPERS =====

    private function iniciarSesion(): void
    {
        resumeSessionIfActive();
    }

    private function esAdmin(): bool
    {
        return isset($_SESSION['rol']) && $_SESSION['rol'] === 'admin';
    }

    private function getJsonInput(): array
    {
        $rawBody = file_get_contents('php://input');

        if ($rawBody === false || trim($rawBody) === '') {
            return [];
        }

        $data = json_decode($rawBody, true);

        return is_array($data) ? $data : [];
    }

    private function jsonResponse(array $payload, int $statusCode = 200): void
    {
        http_response_code($statusCode);
        echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    }
}
