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
            $q             = isset($_GET['q']) ? trim((string) $_GET['q']) : '';
            $soloDestacados = isset($_GET['destacados']) && ($_GET['destacados'] === '1' || $_GET['destacados'] === 'true');
            $porPagina     = 6;
            $pagina        = max(1, (int) ($_GET['page'] ?? 1));
            $offset        = ($pagina - 1) * $porPagina;

            if ($q !== '') {
                $total    = $this->productoModel->contarBusqueda($q);
                $productos = $this->productoModel->buscarProductos($q, $porPagina, $offset);
            } elseif ($soloDestacados) {
                $productos = $this->productoModel->getProductosDestacados(6);
                $total     = count($productos);
            } else {
                $total    = $this->productoModel->contarTodos();
                $productos = $this->productoModel->getAllProductos($porPagina, $offset);
            }

            $this->jsonResponse([
                'status'     => 'ok',
                'data'       => $productos,
                'total'      => $total,
                'pagina'     => $pagina,
                'por_pagina' => $porPagina,
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
