<?php

declare(strict_types=1);

$host = '127.0.0.1';
$dbname = 'pacepal';
$username = 'root';
$password = '';
$charset = 'utf8';
$ports = [3306, 3307, 3308];

$pdo = null;

foreach ($ports as $port) {
    $dsn = "mysql:host={$host};port={$port};dbname={$dbname};charset={$charset}";
    try {
        $pdo = new PDO($dsn, $username, $password, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]);
        break;
    } catch (PDOException $exception) {
        // Si no conecta en este puerto, prueba el siguiente
    }
}

if ($pdo === null) {
    http_response_code(500);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        'status' => 'error',
        'message' => 'Error de conexión con la base de datos. Ningún puerto disponible (3306, 3307, 3308).',
    ], JSON_UNESCAPED_UNICODE);

    exit;
}

return $pdo;