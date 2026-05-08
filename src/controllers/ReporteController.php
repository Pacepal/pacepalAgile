<?php

declare(strict_types=1);

// Controlador de reportes — crear reportes + gestión desde admin
require_once __DIR__ . '/../models/ReporteModel.php';

class ReporteController
{
    private ReporteModel $reporteModel;

    public function __construct(PDO $pdo)
    {
        $this->reporteModel = new ReporteModel($pdo);
    }

    // ===== CREAR REPORTE =====

    public function createReporte(): void
    {
        $this->iniciarSesion();

        if (!$this->estaLogado()) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'No autenticado.'
            ], 401);
            return;
        }

        $input = $this->getJsonInput();

        // Validar motivo del reporte
        $motivo = trim((string) ($input['motivo'] ?? ''));
        if ($motivo === '') {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'El motivo es obligatorio.'
            ], 400);
            return;
        }

        $data = [
            'id_usuario_reporta' => (int) $_SESSION['usuario_id'],
            'id_usuario_reportado' => isset($input['id_usuario_reportado']) ? (int) $input['id_usuario_reportado'] : null,
            'id_actividad' => isset($input['id_actividad']) ? (int) $input['id_actividad'] : null,
            'motivo' => $motivo,
        ];

        try {
            $idReporte = $this->reporteModel->createReporte($data);

            $this->jsonResponse([
                'status' => 'ok',
                'data' => ['id_reporte' => $idReporte]
            ], 201);
        } catch (Throwable $exception) {

            $this->jsonResponse([
                'status' => 'error',
                'message' => 'No se pudo crear el reporte.'
            ], 500);
        }
    }

    // ===== LISTAR REPORTES (solo admin) =====

    public function getReportes(): void
    {
        $this->iniciarSesion();

        if (!$this->esAdmin()) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'Acceso no autorizado.'
            ], 403);
            return;
        }

        try {
            $reportes = $this->reporteModel->getAllReportes();

            $this->jsonResponse([
                'status' => 'ok',
                'data' => $reportes
            ]);
        } catch (Throwable $exception) {

            $this->jsonResponse([
                'status' => 'error',
                'message' => 'No se pudieron obtener los reportes.'
            ], 500);
        }
    }

    // ===== ACTUALIZAR ESTADO =====
    // Los estados posibles: pendiente, revisado, resuelto, descartado

    public function updateReporte(int $idReporte): void
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
        $estado = trim((string) ($input['estado'] ?? ''));

        $estadosValidos = ['pendiente', 'revisado', 'resuelto', 'descartado'];

        if (!in_array($estado, $estadosValidos, true)) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'Estado no valido.'
            ], 400);
            return;
        }

        $reporte = $this->reporteModel->getReporteById($idReporte);

        if ($reporte === null) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'Reporte no encontrado.'
            ], 404);
            return;
        }

        try {
            $this->reporteModel->updateEstado($idReporte, $estado);

            $this->jsonResponse([
                'status' => 'ok',
                'message' => 'Reporte actualizado.'
            ]);
        } catch (Throwable $exception) {

            $this->jsonResponse([
                'status' => 'error',
                'message' => 'No se pudo actualizar el reporte.'
            ], 500);
        }
    }

    private function iniciarSesion(): void
    {
        resumeSessionIfActive();
    }

    private function estaLogado(): bool
    {
        return isset($_SESSION['usuario_id']) && (int) $_SESSION['usuario_id'] > 0;
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

    // Enviar respuesta JSON
    private function jsonResponse(array $payload, int $statusCode = 200): void
    {
        http_response_code($statusCode);
        echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    }
}
