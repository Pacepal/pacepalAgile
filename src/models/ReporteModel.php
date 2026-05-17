<?php

declare(strict_types=1);

// Acceso a reportes entre usuarios y actividades.

class ReporteModel
{
    private PDO $pdo;

    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    public function createReporte(array $data): int
    {
        $sql = 'INSERT INTO reportes (id_usuario_reporta, id_usuario_reportado, id_actividad, motivo, estado)
                VALUES (:id_usuario_reporta, :id_usuario_reportado, :id_actividad, :motivo, :estado)';

        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            'id_usuario_reporta' => $data['id_usuario_reporta'],
            'id_usuario_reportado' => $data['id_usuario_reportado'] ?? null,
            'id_actividad' => $data['id_actividad'] ?? null,
            'motivo' => $data['motivo'],
            'estado' => 'pendiente', // Estado inicial del flujo de revisión.
        ]);

        return (int) $this->pdo->lastInsertId();
    }

    // Incluye nombres de usuarios para que administración no dependa solo de IDs.
    public function getAllReportes(): array
    {
        $sql = 'SELECT r.id_reporte, r.id_usuario_reporta, r.id_usuario_reportado, r.id_actividad,
                       r.motivo, r.fecha, r.estado,
                       u1.nombre AS nombre_reporta,
                       u2.nombre AS nombre_reportado
                FROM reportes r
                JOIN usuarios u1 ON u1.id_usuario = r.id_usuario_reporta
                LEFT JOIN usuarios u2 ON u2.id_usuario = r.id_usuario_reportado
                ORDER BY r.id_reporte DESC';

        $stmt = $this->pdo->query($sql);
        return $stmt->fetchAll();
    }

    public function getReporteById(int $idReporte): ?array
    {
        $sql = 'SELECT id_reporte, id_usuario_reporta, id_usuario_reportado, id_actividad, motivo, fecha, estado
                FROM reportes
                WHERE id_reporte = :id_reporte
                LIMIT 1';

        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(['id_reporte' => $idReporte]);

        $reporte = $stmt->fetch();
        return $reporte === false ? null : $reporte;
    }

    public function updateEstado(int $idReporte, string $estado): void
    {
        $sql = 'UPDATE reportes SET estado = :estado WHERE id_reporte = :id_reporte';

        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            'estado' => $estado,
            'id_reporte' => $idReporte
        ]);
    }
}
