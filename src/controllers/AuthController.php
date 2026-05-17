<?php

declare(strict_types=1);

// Controlador de autenticación — registro, login, sesión y logout
require_once __DIR__ . '/../models/UsuarioModel.php';

class AuthController
{

    private UsuarioModel $usuarioModel;

    public function __construct(PDO $pdo)
    {
        $this->usuarioModel = new UsuarioModel($pdo);
    }

    // ===== REGISTRO =====
    public function register(): void
    {
        $input = $this->getJsonInput();

        $nombre = trim((string) ($input['nombre'] ?? ''));
        $dni = strtoupper(trim((string) ($input['dni'] ?? '')));
        $email = trim((string) ($input['email'] ?? ''));
        $password = (string) ($input['password'] ?? '');

        if ($nombre === '' || $dni === '' || $email === '' || $password === '') {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'nombre, dni, email y password son obligatorios.',
            ], 400);
            return;
        }

        $data = [
            'nombre' => $nombre,
            'dni' => $dni,
            'email' => $email,
            'password' => password_hash($password, PASSWORD_DEFAULT),
            'sexo' => $input['sexo'] ?? null,
            'fecha_nacimiento' => $input['fecha_nacimiento'] ?? null,
            'direccion' => $input['direccion'] ?? null,
            'pais' => $input['pais'] ?? null,
            'tarjeta' => $input['tarjeta'] ?? null,
            'notificaciones' => !empty($input['notificaciones']) ? 1 : 0,
            'revista' => !empty($input['revista']) ? 1 : 0,
            'rol' => 'usuario', // el rol siempre es usuario al registrarse, los admin se crean a mano
        ];

        try {
            $idUsuario = $this->usuarioModel->createUsuario($data);

            $this->jsonResponse([
                'status' => 'ok',
                'data' => [
                    'id_usuario' => $idUsuario,
                    'email' => $email,
                ],
            ], 201);
        } catch (Throwable $exception) {

            $this->jsonResponse([
                'status' => 'error',
                'message' => 'No se pudo registrar el usuario.',
            ], 500);
        }
    }

    // ===== LOGIN =====
    public function login(): void
    {
        $input = $this->getJsonInput();

        $email = trim((string) ($input['email'] ?? ''));
        $password = (string) ($input['password'] ?? '');

        if ($email === '' || $password === '') {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'email y password son obligatorios.',
            ], 400);
            return;
        }

        try {
            $usuario = $this->usuarioModel->getUsuarioByEmail($email);

            if ($usuario === null) {
                $this->jsonResponse([
                    'status' => 'error',
                    'message' => 'Credenciales incorrectas',
                ], 401);
                return;
            }

            $passwordValida = password_verify($password, (string) $usuario['password']);

            if (!$passwordValida) {
                $this->jsonResponse([
                    'status' => 'error',
                    'message' => 'Credenciales incorrectas',
                ], 401);
                return;
            }

            startFreshSession();

            $_SESSION['usuario_id'] = (int) $usuario['id_usuario'];
            $_SESSION['rol'] = (string) $usuario['rol'];

            unset($usuario['password']);

            $this->jsonResponse([
                'status' => 'ok',
                'usuario' => $usuario,
            ]);
        } catch (Throwable $exception) {

            $this->jsonResponse([
                'status' => 'error',
                'message' => 'No se pudo iniciar sesion.',
            ], 500);
        }
    }

    // ===== SESIÓN =====
    public function getSession(): void
    {
        // Solo reanuda si ya existe la cookie — no crea sesiones en páginas públicas
        resumeSessionIfActive();

        $usuarioId = isset($_SESSION['usuario_id']) ? (int) $_SESSION['usuario_id'] : 0;
        $rol = isset($_SESSION['rol']) ? (string) $_SESSION['rol'] : '';

        if ($usuarioId > 0) {
            $this->jsonResponse([
                'logged' => true,
                'usuario_id' => $usuarioId,
                'rol' => $rol,
            ]);
            return;
        }

        $this->jsonResponse([
            'logged' => false,
        ]);
    }

    // ===== LOGOUT =====
    public function logout(): void
    {
        // Reanuda solo si hay sesión activa; si no, no hace nada (no crea sesión)
        resumeSessionIfActive();

        // Destruye y elimina la cookie PHPSESSID solo si la sesión estaba activa
        destroySession();

        $this->jsonResponse([
            'status' => 'ok',
            'message' => 'Sesion cerrada.',
        ]);
    }

    private function iniciarSesion(): void
    {
        resumeSessionIfActive();
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
        exit;
    }
}
