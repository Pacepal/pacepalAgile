<?php

declare(strict_types=1);

// Controlador de productos — solo lectura, sin CRUD de admin por ahora
require_once __DIR__ . '/../models/ProductoModel.php';

class ProductoController
{
    private ProductoModel $productoModel;

    public function __construct(PDO $pdo)
    {
        $this->productoModel = new ProductoModel($pdo);
    }

    public function getProductos(): void
    {
        try {
            $productos = $this->productoModel->getAllProductos();

            $this->jsonResponse([
                'status' => 'ok',
                'data' => $productos,
            ]);
        } catch (Throwable $exception) {

            $this->jsonResponse([
                'status' => 'error',
                'message' => 'No se pudieron obtener los productos.',
            ], 500);
        }
    }

    public function getProducto(int $idArticulo): void
    {
        try {
            $producto = $this->productoModel->getProductoById($idArticulo);

            if ($producto === null) {
                $this->jsonResponse([
                    'status' => 'error',
                    'message' => 'Producto no encontrado.'
                ], 404);
                return;
            }

            $this->jsonResponse([
                'status' => 'ok',
                'data' => $producto
            ]);
        } catch (Throwable $exception) {

            $this->jsonResponse([
                'status' => 'error',
                'message' => 'No se pudo obtener el producto.'
            ], 500);
        }
    }

    // Función auxiliar para devolver respuestas JSON
    private function jsonResponse(array $payload, int $statusCode = 200): void
    {
        http_response_code($statusCode);
        echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    }
}
