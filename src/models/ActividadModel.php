<?php

declare(strict_types=1);

// Modelo de actividades — CRUD + gestión de participaciones

class ActividadModel
{
    private PDO $pdo;

    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    // ===== LISTADO Y DETALLE =====

    public function getAllActividades(): array
    {
        $sql = 'SELECT id_actividad, id_ruta, id_usuario_creador, fecha, hora, nivel, plazas_max, descripcion, estado
                FROM actividades
                ORDER BY id_actividad ASC';

        $stmt = $this->pdo->query($sql);
        return $stmt->fetchAll();
    }

    public function getActividadById(int $idActividad): ?array
    {
        $sql = 'SELECT id_actividad, id_ruta, id_usuario_creador, fecha, hora, nivel, plazas_max, descripcion, estado
                FROM actividades
                WHERE id_actividad = :id_actividad
                LIMIT 1';

        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(['id_actividad' => $idActividad]);

        $actividad = $stmt->fetch();
        return $actividad === false ? null : $actividad;
    }

    // ===== CREAR ACTIVIDAD =====

    public function createActividad(array $data): int
    {
        $sql = 'INSERT INTO actividades (id_ruta, id_usuario_creador, fecha, hora, nivel, plazas_max, descripcion, estado)
                VALUES (:id_ruta, :id_usuario_creador, :fecha, :hora, :nivel, :plazas_max, :descripcion, :estado)';

        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            'id_ruta' => $data['id_ruta'],
            'id_usuario_creador' => $data['id_usuario_creador'],
            'fecha' => $data['fecha'] ?? null,
            'hora' => $data['hora'] ?? null,
            'nivel' => $data['nivel'] ?? null,
            'plazas_max' => $data['plazas_max'] ?? null,
            'descripcion' => $data['descripcion'] ?? null,
            'estado' => $data['estado'] ?? 'activa',
        ]);

        // Devuelve el ID insertado
        return (int) $this->pdo->lastInsertId();
    }

    // JOIN con rutas y usuarios para la vista de detalle
    public function getActividadConRuta(int $idActividad): ?array
    {
        $sql = 'SELECT a.id_actividad, a.id_ruta, a.id_usuario_creador, a.fecha, a.hora, a.nivel,
                       a.plazas_max, a.descripcion, a.estado,
                       r.nombre AS ruta_nombre, r.ubicacion AS ruta_ubicacion, r.distancia AS ruta_distancia,
                       r.dificultad AS ruta_dificultad, r.imagen AS ruta_imagen,
                       u.nombre AS creador_nombre
                FROM actividades a
                JOIN rutas r ON r.id_ruta = a.id_ruta
                JOIN usuarios u ON u.id_usuario = a.id_usuario_creador
                WHERE a.id_actividad = :id_actividad
                LIMIT 1';

        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(['id_actividad' => $idActividad]);

        $row = $stmt->fetch();

        return $row === false ? null : $row;
    }

    // ===== PARTICIPACIONES =====

    public function getParticipantes(int $idActividad): array
    {
        $sql = 'SELECT u.id_usuario, u.nombre
                FROM participaciones p
                JOIN usuarios u ON u.id_usuario = p.id_usuario
                WHERE p.id_actividad = :id_actividad
                ORDER BY p.fecha_union ASC';

        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(['id_actividad' => $idActividad]);

        return $stmt->fetchAll();
    }

    public function countParticipantes(int $idActividad): int
    {
        $sql = 'SELECT COUNT(*) FROM participaciones WHERE id_actividad = :id_actividad';

        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(['id_actividad' => $idActividad]);

        return (int) $stmt->fetchColumn();
    }

    public function isParticipante(int $idUsuario, int $idActividad): bool
    {
        $sql = 'SELECT COUNT(*) FROM participaciones WHERE id_usuario = :id_usuario AND id_actividad = :id_actividad';

        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            'id_usuario' => $idUsuario,
            'id_actividad' => $idActividad
        ]);

        return ((int) $stmt->fetchColumn()) > 0;
    }

    public function joinActividad(int $idUsuario, int $idActividad): void
    {
        $sql = 'INSERT INTO participaciones (id_usuario, id_actividad) VALUES (:id_usuario, :id_actividad)';

        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            'id_usuario' => $idUsuario,
            'id_actividad' => $idActividad
        ]);
    }

    public function leaveActividad(int $idUsuario, int $idActividad): void
    {
        $sql = 'DELETE FROM participaciones WHERE id_usuario = :id_usuario AND id_actividad = :id_actividad';

        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            'id_usuario' => $idUsuario,
            'id_actividad' => $idActividad
        ]);
    }

    // ===== ACTUALIZAR / ELIMINAR =====

    public function updateActividad(int $idActividad, array $data): void
    {
        $sql = 'UPDATE actividades SET fecha = :fecha, hora = :hora, nivel = :nivel,
                       plazas_max = :plazas_max, descripcion = :descripcion, estado = :estado
                WHERE id_actividad = :id_actividad';

        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            'fecha' => $data['fecha'] ?? null,
            'hora' => $data['hora'] ?? null,
            'nivel' => $data['nivel'] ?? null,
            'plazas_max' => $data['plazas_max'] ?? null,
            'descripcion' => $data['descripcion'] ?? null,
            'estado' => $data['estado'] ?? 'activa',
            'id_actividad' => $idActividad,
        ]);
    }

    // borramos primero las participaciones porque tienen FK a actividades
    public function deleteActividad(int $idActividad): void
    {
        $sql = 'DELETE FROM participaciones WHERE id_actividad = :id_actividad';
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(['id_actividad' => $idActividad]);

        $sql2 = 'DELETE FROM actividades WHERE id_actividad = :id_actividad';
        $stmt2 = $this->pdo->prepare($sql2);
        $stmt2->execute(['id_actividad' => $idActividad]);
    }
}
