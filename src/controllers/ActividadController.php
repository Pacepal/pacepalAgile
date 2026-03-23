<?php

declare(strict_types=1);

// Controlador de actividades — CRUD + join/leave para participaciones
require_once __DIR__ . '/../models/ActividadModel.php';

class ActividadController
{
    private ActividadModel $actividadModel;

    public function __construct(PDO $pdo)
    {
        $this->actividadModel = new ActividadModel($pdo);
    }

    // ===== LISTADO =====

    public function getActividades(): void
    {
        try {
            $actividades = $this->actividadModel->getAllActividades();

            $this->jsonResponse([
                'status' => 'ok',
                'data' => $actividades,
            ]);
        } catch (Throwable $exception) {

            $this->jsonResponse([
                'status' => 'error',
                'message' => 'No se pudieron obtener las actividades.',
            ], 500);
        }
    }

    // ===== CREAR ACTIVIDAD =====
    // Cualquier usuario logueado puede crear actividades
    public function createActividad(): void
    {
        $this->iniciarSesion();

        if (!$this->tieneRolUsuario()) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'Acceso no autorizado',
            ], 403);
            return;
        }

        $input = $this->getJsonInput();

        $idRuta = isset($input['id_ruta']) ? (int) $input['id_ruta'] : 0;
        $idUsuarioCreador = isset($_SESSION['usuario_id']) ? (int) $_SESSION['usuario_id'] : 0;
        if ($idRuta <= 0) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'El campo id_ruta es obligatorio.',
            ], 400);
            return;
        }

        if ($idUsuarioCreador <= 0) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'Acceso no autorizado',
            ], 400);
            return;
        }

        $data = [
            'id_ruta' => $idRuta,
            'id_usuario_creador' => $idUsuarioCreador,
            'fecha' => $input['fecha'] ?? null,
            'hora' => $input['hora'] ?? null,
            'nivel' => $input['nivel'] ?? null,
            'plazas_max' => isset($input['plazas_max']) ? (int) $input['plazas_max'] : null,
            'descripcion' => $input['descripcion'] ?? null,
            'estado' => $input['estado'] ?? 'activa',
        ];

        try {

            $idActividad = $this->actividadModel->createActividad($data);

            $this->jsonResponse([
                'status' => 'ok',
                'data' => [
                    'id_actividad' => $idActividad,
                ],
            ], 201);
        } catch (Throwable $exception) {

            $this->jsonResponse([
                'status' => 'error',
                'message' => 'No se pudo crear la actividad.',
            ], 500);
        }
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

    private function iniciarSesion(): void
    {
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }
    }

    // Verificar si el usuario tiene rol usuario o admin
    private function tieneRolUsuario(): bool
    {
        return isset($_SESSION['rol']) && ($_SESSION['rol'] === 'usuario' || $_SESSION['rol'] === 'admin');
    }

    // ===== DETALLE CON PARTICIPANTES =====

    public function getActividad(int $idActividad): void
    {
        try {

            $actividad = $this->actividadModel->getActividadConRuta($idActividad);

            if ($actividad === null) {
                $this->jsonResponse([
                    'status' => 'error',
                    'message' => 'Actividad no encontrada.'
                ], 404);
                return;
            }

            $participantes = $this->actividadModel->getParticipantes($idActividad);
            $actividad['participantes'] = $participantes;
            $actividad['num_participantes'] = count($participantes);

            $this->iniciarSesion();
            $idUsuario = isset($_SESSION['usuario_id']) ? (int) $_SESSION['usuario_id'] : 0;

            $actividad['usuario_participa'] =
                $idUsuario > 0 && $this->actividadModel->isParticipante($idUsuario, $idActividad);

            $actividad['es_creador'] =
                $idUsuario > 0 && $idUsuario === (int) $actividad['id_usuario_creador'];

            $this->jsonResponse([
                'status' => 'ok',
                'data' => $actividad
            ]);
        } catch (Throwable $exception) {

            $this->jsonResponse([
                'status' => 'error',
                'message' => 'No se pudo obtener la actividad.'
            ], 500);
        }
    }

    // ===== UNIRSE / ABANDONAR ACTIVIDAD =====

    public function joinActividad(int $idActividad): void
    {
        $this->iniciarSesion();

        if (!$this->tieneRolUsuario()) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'Acceso no autorizado.'
            ], 403);
            return;
        }

        $idUsuario = (int) $_SESSION['usuario_id'];

        // Verifica que exista
        $actividad = $this->actividadModel->getActividadById($idActividad);
        if ($actividad === null) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'Actividad no encontrada.'
            ], 404);
            return;
        }

        // comprobar que no esté ya apuntado
        if ($this->actividadModel->isParticipante($idUsuario, $idActividad)) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'Ya participas en esta actividad.'
            ], 409);
            return;
        }

        // control de plazas libres
        $plazasMax = (int) ($actividad['plazas_max'] ?? 0);
        if ($plazasMax > 0) {

            $numActual = $this->actividadModel->countParticipantes($idActividad);

            if ($numActual >= $plazasMax) {
                $this->jsonResponse([
                    'status' => 'error',
                    'message' => 'No quedan plazas disponibles.'
                ], 409);
                return;
            }
        }

        try {

            $this->actividadModel->joinActividad($idUsuario, $idActividad);

            $this->jsonResponse([
                'status' => 'ok',
                'message' => 'Te has unido a la actividad.'
            ], 201);
        } catch (Throwable $exception) {

            $this->jsonResponse([
                'status' => 'error',
                'message' => 'No se pudo unir a la actividad.'
            ], 500);
        }
    }

    public function leaveActividad(int $idActividad): void
    {
        $this->iniciarSesion();

        if (!$this->tieneRolUsuario()) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'Acceso no autorizado.'
            ], 403);
            return;
        }

        $idUsuario = (int) $_SESSION['usuario_id'];

        // Comprobar que esté inscrito antes de borrar
        if (!$this->actividadModel->isParticipante($idUsuario, $idActividad)) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'No participas en esta actividad.'
            ], 404);
            return;
        }

        try {

            $this->actividadModel->leaveActividad($idUsuario, $idActividad);

            $this->jsonResponse([
                'status' => 'ok',
                'message' => 'Has abandonado la actividad.'
            ]);
        } catch (Throwable $exception) {

            $this->jsonResponse([
                'status' => 'error',
                'message' => 'No se pudo abandonar la actividad.'
            ], 500);
        }
    }

    // ===== EDITAR / ELIMINAR =====
    // Solo el creador o un admin pueden tocar estas

    public function updateActividad(int $idActividad): void
    {
        $this->iniciarSesion();

        $idUsuario = isset($_SESSION['usuario_id']) ? (int) $_SESSION['usuario_id'] : 0;

        $actividad = $this->actividadModel->getActividadById($idActividad);

        if ($actividad === null) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'Actividad no encontrada.'
            ], 404);
            return;
        }

        // Solo creador o admin pueden editar
        $esCreador = $idUsuario === (int) $actividad['id_usuario_creador'];
        $esAdmin = isset($_SESSION['rol']) && $_SESSION['rol'] === 'admin';

        if (!$esCreador && !$esAdmin) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'No tienes permiso para editar esta actividad.'
            ], 403);
            return;
        }

        $input = $this->getJsonInput();

        // Datos actualizados
        $data = [
            'fecha' => $input['fecha'] ?? $actividad['fecha'],
            'hora' => $input['hora'] ?? $actividad['hora'],
            'nivel' => $input['nivel'] ?? $actividad['nivel'],
            'plazas_max' => isset($input['plazas_max']) ? (int) $input['plazas_max'] : $actividad['plazas_max'],
            'descripcion' => $input['descripcion'] ?? $actividad['descripcion'],
            'estado' => $input['estado'] ?? $actividad['estado'],
        ];

        try {

            $this->actividadModel->updateActividad($idActividad, $data);

            $this->jsonResponse([
                'status' => 'ok',
                'message' => 'Actividad actualizada.'
            ]);
        } catch (Throwable $exception) {

            $this->jsonResponse([
                'status' => 'error',
                'message' => 'No se pudo actualizar la actividad.'
            ], 500);
        }
    }

    public function deleteActividad(int $idActividad): void
    {
        $this->iniciarSesion();

        $idUsuario = isset($_SESSION['usuario_id']) ? (int) $_SESSION['usuario_id'] : 0;

        $actividad = $this->actividadModel->getActividadById($idActividad);

        if ($actividad === null) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'Actividad no encontrada.'
            ], 404);
            return;
        }

        // Solo creador o admin pueden eliminar
        $esCreador = $idUsuario === (int) $actividad['id_usuario_creador'];
        $esAdmin = isset($_SESSION['rol']) && $_SESSION['rol'] === 'admin';

        if (!$esCreador && !$esAdmin) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'No tienes permiso para eliminar esta actividad.'
            ], 403);
            return;
        }

        try {

            $this->actividadModel->deleteActividad($idActividad);

            $this->jsonResponse([
                'status' => 'ok',
                'message' => 'Actividad eliminada.'
            ]);
        } catch (Throwable $exception) {

            $this->jsonResponse([
                'status' => 'error',
                'message' => 'No se pudo eliminar la actividad.'
            ], 500);
        }
    }

    // ===== HELPERS =====

    private function jsonResponse(array $payload, int $statusCode = 200): void
    {
        http_response_code($statusCode);
        echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    }
}
