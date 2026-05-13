<?php

declare(strict_types=1);

// Modelo de usuarios — CRUD + búsquedas por email/DNI

class UsuarioModel
{
    private PDO $pdo;

    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    // ===== CREAR USUARIO =====

    public function createUsuario(array $data): int
    {
        $sql = 'INSERT INTO usuarios (
                    nombre,
                    dni,
                    email,
                    password,
                    sexo,
                    fecha_nacimiento,
                    direccion,
                    pais,
                    tarjeta,
                    notificaciones,
                    revista,
                    rol
                ) VALUES (
                    :nombre,
                    :dni,
                    :email,
                    :password,
                    :sexo,
                    :fecha_nacimiento,
                    :direccion,
                    :pais,
                    :tarjeta,
                    :notificaciones,
                    :revista,
                    :rol
                )';

        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            'nombre' => $data['nombre'],
            'dni' => $data['dni'],
            'email' => $data['email'],
            'password' => $data['password'],
            'sexo' => $data['sexo'] ?? null,
            'fecha_nacimiento' => $data['fecha_nacimiento'] ?? null,
            'direccion' => $data['direccion'] ?? null,
            'pais' => $data['pais'] ?? null,
            'tarjeta' => $data['tarjeta'] ?? null,
            'notificaciones' => $data['notificaciones'] ?? 0,
            'revista' => $data['revista'] ?? 0,
            'rol' => $data['rol'] ?? 'usuario',
        ]);

        return (int) $this->pdo->lastInsertId();
    }

    // ===== CONSULTAS =====

    // Obtener usuario por email (usado en login)
    public function getUsuarioByEmail(string $email): ?array
    {
        $sql = 'SELECT id_usuario, nombre, dni, email, password, sexo, fecha_nacimiento, direccion, pais, tarjeta, notificaciones, revista, rol, fecha_registro
                FROM usuarios
                WHERE email = :email
                LIMIT 1';

        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(['email' => $email]);

        $usuario = $stmt->fetch();

        // Si no existe, devolver null
        return $usuario === false ? null : $usuario;
    }

    // Obtener usuario por ID
    public function getUsuarioById(int $idUsuario): ?array
    {
        $sql = 'SELECT id_usuario, nombre, dni, email, sexo, fecha_nacimiento, direccion, pais, tarjeta, notificaciones, revista, rol, fecha_registro
                FROM usuarios
                WHERE id_usuario = :id_usuario
                LIMIT 1';

        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(['id_usuario' => $idUsuario]);

        $usuario = $stmt->fetch();

        return $usuario === false ? null : $usuario;
    }

    // Actualizar datos del perfil de usuario
    public function updateUsuario(int $idUsuario, array $data): void
    {
        $sql = 'UPDATE usuarios SET nombre = :nombre, sexo = :sexo, fecha_nacimiento = :fecha_nacimiento,
                       direccion = :direccion, pais = :pais, tarjeta = :tarjeta,
                       notificaciones = :notificaciones, revista = :revista
                WHERE id_usuario = :id_usuario';

        $stmt = $this->pdo->prepare($sql);

        $stmt->execute([
            'nombre' => $data['nombre'],
            'sexo' => $data['sexo'] ?? null,
            'fecha_nacimiento' => $data['fecha_nacimiento'] ?? null,
            'direccion' => $data['direccion'] ?? null,
            'pais' => $data['pais'] ?? null,
            'tarjeta' => $data['tarjeta'] ?? null,
            'notificaciones' => $data['notificaciones'] ?? 0,
            'revista' => $data['revista'] ?? 0,
            'id_usuario' => $idUsuario,
        ]);
    }

    // Obtener todos los usuarios (panel admin)
    public function getAllUsuarios(): array
    {
        $sql = 'SELECT id_usuario, nombre, dni, email, rol, fecha_registro
                FROM usuarios
                ORDER BY id_usuario ASC';

        $stmt = $this->pdo->query($sql);

        return $stmt->fetchAll();
    }

    // Actualizar usuario desde el panel de administración
    public function updateUsuarioAdmin(int $idUsuario, array $data): void
    {
        $sql = 'UPDATE usuarios SET nombre = :nombre, email = :email, rol = :rol
                WHERE id_usuario = :id_usuario';

        $stmt = $this->pdo->prepare($sql);

        $stmt->execute([
            'nombre' => $data['nombre'],
            'email' => $data['email'],
            'rol' => $data['rol'],
            'id_usuario' => $idUsuario,
        ]);
    }

    // Eliminar usuario
    public function deleteUsuario(int $idUsuario): void
    {
        $sql = 'DELETE FROM usuarios WHERE id_usuario = :id_usuario';

        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(['id_usuario' => $idUsuario]);
    }

    // Comprobar si un email ya existe en otro usuario
    public function emailExisteOtro(string $email, int $idExcluir): bool
    {
        $sql = 'SELECT COUNT(*) FROM usuarios WHERE email = :email AND id_usuario != :id_usuario';

        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            'email' => $email,
            'id_usuario' => $idExcluir
        ]);

        return (int) $stmt->fetchColumn() > 0;
    }

    // Comprobar si un DNI ya existe
    public function dniExiste(string $dni): bool
    {
        $sql = 'SELECT COUNT(*) FROM usuarios WHERE dni = :dni';

        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(['dni' => $dni]);

        return (int) $stmt->fetchColumn() > 0;
    }

    // Comprobar si un email ya existe
    public function emailExiste(string $email): bool
    {
        $sql = 'SELECT COUNT(*) FROM usuarios WHERE email = :email';

        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(['email' => $email]);

        return (int) $stmt->fetchColumn() > 0;
    }
}
