<?php

declare(strict_types=1);

// Modelo de rutas — CRUD sobre la tabla rutas

class RutaModel
{
    private PDO $pdo;

    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    public function getAllRutas(): array
    {
        $sql = 'SELECT id_ruta, nombre, descripcion, distancia, dificultad, desnivel, duracion, ubicacion, imagen
                FROM rutas
                ORDER BY id_ruta ASC';

        $stmt = $this->pdo->query($sql);
        return $stmt->fetchAll();
    }

    public function getRutaById(int $idRuta): ?array
    {
        $sql = 'SELECT id_ruta, nombre, descripcion, distancia, dificultad, desnivel, duracion, ubicacion, imagen
                FROM rutas
                WHERE id_ruta = :id_ruta
                LIMIT 1';

        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(['id_ruta' => $idRuta]);

        $ruta = $stmt->fetch();
        return $ruta === false ? null : $ruta;
    }

    public function createRuta(array $data): int
    {
        $sql = 'INSERT INTO rutas (nombre, descripcion, distancia, dificultad, desnivel, duracion, ubicacion, imagen)
                VALUES (:nombre, :descripcion, :distancia, :dificultad, :desnivel, :duracion, :ubicacion, :imagen)';

        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            'nombre' => $data['nombre'],
            'descripcion' => $data['descripcion'] ?? null,
            'distancia' => $data['distancia'] ?? null,
            'dificultad' => $data['dificultad'] ?? null,
            'desnivel' => $data['desnivel'] ?? null,
            'duracion' => $data['duracion'] ?? null,
            'ubicacion' => $data['ubicacion'] ?? null,
            'imagen' => $data['imagen'] ?? null,
        ]);

        return (int) $this->pdo->lastInsertId();
    }

    public function updateRuta(int $idRuta, array $data): void
    {
        $sql = 'UPDATE rutas SET nombre = :nombre, descripcion = :descripcion, distancia = :distancia,
                       dificultad = :dificultad, desnivel = :desnivel, duracion = :duracion,
                       ubicacion = :ubicacion, imagen = :imagen
                WHERE id_ruta = :id_ruta';

        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            'nombre' => $data['nombre'],
            'descripcion' => $data['descripcion'] ?? null,
            'distancia' => $data['distancia'] ?? null,
            'dificultad' => $data['dificultad'] ?? null,
            'desnivel' => $data['desnivel'] ?? null,
            'duracion' => $data['duracion'] ?? null,
            'ubicacion' => $data['ubicacion'] ?? null,
            'imagen' => $data['imagen'] ?? null,
            'id_ruta' => $idRuta,
        ]);
    }

    public function deleteRuta(int $idRuta): void
    {
        $sql = 'DELETE FROM rutas WHERE id_ruta = :id_ruta';

        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(['id_ruta' => $idRuta]);
    }
}
