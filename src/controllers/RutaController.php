<?php

declare(strict_types=1);

// Controlador de rutas; las escrituras quedan restringidas a administración.
require_once __DIR__ . '/../models/RutaModel.php';

class RutaController
{
    private RutaModel $rutaModel;

    public function __construct(PDO $pdo)
    {
        $this->rutaModel = new RutaModel($pdo);
    }

    // ===== LISTADO Y DETALLE =====

    public function getRutas(): void
    {
        try {
            $rutas = $this->rutaModel->getAllRutas();

            $this->jsonResponse([
                'status' => 'ok',
                'data' => $rutas,
            ]);
        } catch (Throwable $exception) {

            $this->jsonResponse([
                'status' => 'error',
                'message' => 'No se pudieron obtener las rutas.',
            ], 500);
        }
    }

    public function getRuta(int $idRuta): void
    {
        try {
            $ruta = $this->rutaModel->getRutaById($idRuta);

            if ($ruta === null) {
                $this->jsonResponse([
                    'status' => 'error',
                    'message' => 'Ruta no encontrada.'
                ], 404);
                return;
            }

            $this->jsonResponse([
                'status' => 'ok',
                'data' => $ruta
            ]);
        } catch (Throwable $exception) {

            $this->jsonResponse([
                'status' => 'error',
                'message' => 'No se pudo obtener la ruta.'
            ], 500);
        }
    }

    // ===== CREAR RUTA (solo admin) =====

    public function createRuta(): void
    {
        $this->iniciarSesion();

        if (!$this->esAdmin()) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'Acceso no autorizado.'
            ], 403);
            return;
        }

        $input = $this->getJsonInput();
        $nombre = trim((string) ($input['nombre'] ?? ''));

        if ($nombre === '') {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'El nombre es obligatorio.'
            ], 400);
            return;
        }

        try {
            $idRuta = $this->rutaModel->createRuta([
                'nombre' => $nombre,
                'descripcion' => $input['descripcion'] ?? null,
                'distancia' => isset($input['distancia']) ? (float) $input['distancia'] : null,
                'dificultad' => $input['dificultad'] ?? null,
                'desnivel' => isset($input['desnivel']) ? (int) $input['desnivel'] : null,
                'duracion' => $input['duracion'] ?? null,
                'ubicacion' => $input['ubicacion'] ?? null,
                'imagen' => $input['imagen'] ?? null,
            ]);

            $this->jsonResponse([
                'status' => 'ok',
                'data' => ['id_ruta' => $idRuta]
            ], 201);
        } catch (Throwable $exception) {

            $this->jsonResponse([
                'status' => 'error',
                'message' => 'No se pudo crear la ruta.'
            ], 500);
        }
    }

    // ===== ACTUALIZAR RUTA =====

    public function updateRuta(int $idRuta): void
    {
        $this->iniciarSesion();

        if (!$this->esAdmin()) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'Acceso no autorizado.'
            ], 403);
            return;
        }

        $ruta = $this->rutaModel->getRutaById($idRuta);
        if ($ruta === null) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'Ruta no encontrada.'
            ], 404);
            return;
        }

        $input = $this->getJsonInput();

        $nombre = trim((string) ($input['nombre'] ?? $ruta['nombre']));

        if ($nombre === '') {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'El nombre es obligatorio.'
            ], 400);
            return;
        }

        try {
            $this->rutaModel->updateRuta($idRuta, [
                'nombre' => $nombre,
                'descripcion' => $input['descripcion'] ?? $ruta['descripcion'],
                'distancia' => isset($input['distancia']) ? (float) $input['distancia'] : $ruta['distancia'],
                'dificultad' => $input['dificultad'] ?? $ruta['dificultad'],
                'desnivel' => isset($input['desnivel']) ? (int) $input['desnivel'] : $ruta['desnivel'],
                'duracion' => $input['duracion'] ?? $ruta['duracion'],
                'ubicacion' => $input['ubicacion'] ?? $ruta['ubicacion'],
                'imagen' => $input['imagen'] ?? $ruta['imagen'],
            ]);

            $this->jsonResponse([
                'status' => 'ok',
                'message' => 'Ruta actualizada.'
            ]);
        } catch (Throwable $exception) {

            $this->jsonResponse([
                'status' => 'error',
                'message' => 'No se pudo actualizar la ruta.'
            ], 500);
        }
    }

    // ===== ELIMINAR RUTA =====

    public function deleteRuta(int $idRuta): void
    {
        $this->iniciarSesion();

        if (!$this->esAdmin()) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'Acceso no autorizado.'
            ], 403);
            return;
        }

        $ruta = $this->rutaModel->getRutaById($idRuta);
        if ($ruta === null) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'Ruta no encontrada.'
            ], 404);
            return;
        }

        try {
            $this->rutaModel->deleteRuta($idRuta);

            $this->jsonResponse([
                'status' => 'ok',
                'message' => 'Ruta eliminada.'
            ]);
        } catch (Throwable $exception) {

            $this->jsonResponse([
                'status' => 'error',
                'message' => 'No se pudo eliminar la ruta.'
            ], 500);
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
        if (!array_key_exists('ok', $payload)) {
            $payload['ok'] = ($payload['status'] ?? '') !== 'error';
        }

        if (($payload['status'] ?? '') === 'error' && !array_key_exists('error', $payload)) {
            $payload['error'] = $payload['message'] ?? 'Error de API.';
        }

        http_response_code($statusCode);
        echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    }
}
