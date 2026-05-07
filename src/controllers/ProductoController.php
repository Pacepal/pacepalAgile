<?php

declare(strict_types=1);

// Controlador de productos — lectura publica y CRUD de admin
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

    public function createProducto(): void
    {
        $this->iniciarSesion();

        if (!$this->esAdmin()) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'Acceso no autorizado.',
            ], 403);
            return;
        }

        $input = $this->getJsonInput();
        $data = $this->buildProductData($input);

        if (isset($data['error'])) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => $data['error'],
            ], 400);
            return;
        }

        try {
            $idArticulo = $this->productoModel->createProducto($data);

            $this->jsonResponse([
                'status' => 'ok',
                'message' => 'Producto creado.',
                'data' => ['id_articulo' => $idArticulo],
            ], 201);
        } catch (Throwable $exception) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'No se pudo crear el producto.',
            ], 500);
        }
    }

    public function updateProducto(int $idArticulo): void
    {
        $this->iniciarSesion();

        if (!$this->esAdmin()) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'Acceso no autorizado.',
            ], 403);
            return;
        }

        $producto = $this->productoModel->getProductoById($idArticulo);

        if ($producto === null) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'Producto no encontrado.',
            ], 404);
            return;
        }

        $input = array_merge($producto, $this->getJsonInput());
        $data = $this->buildProductData($input);

        if (isset($data['error'])) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => $data['error'],
            ], 400);
            return;
        }

        try {
            $this->productoModel->updateProducto($idArticulo, $data);

            $this->jsonResponse([
                'status' => 'ok',
                'message' => 'Producto actualizado.',
            ]);
        } catch (Throwable $exception) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'No se pudo actualizar el producto.',
            ], 500);
        }
    }

    public function deleteProducto(int $idArticulo): void
    {
        $this->iniciarSesion();

        if (!$this->esAdmin()) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'Acceso no autorizado.',
            ], 403);
            return;
        }

        $producto = $this->productoModel->getProductoById($idArticulo);

        if ($producto === null) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'Producto no encontrado.',
            ], 404);
            return;
        }

        try {
            $this->productoModel->deleteProducto($idArticulo);

            $this->jsonResponse([
                'status' => 'ok',
                'message' => 'Producto eliminado.',
            ]);
        } catch (Throwable $exception) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'No se pudo eliminar el producto. Puede estar asociado a pedidos existentes.',
            ], 409);
        }
    }

    private function iniciarSesion(): void
    {
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }
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

    private function buildProductData(array $input): array
    {
        $nombre = trim((string) ($input['nombre'] ?? ''));
        $descripcion = trim((string) ($input['descripcion'] ?? ''));
        $precio = filter_var($input['precio'] ?? null, FILTER_VALIDATE_FLOAT);
        $stock = filter_var($input['stock'] ?? 0, FILTER_VALIDATE_INT);
        $idCategoria = filter_var($input['id_categoria'] ?? null, FILTER_VALIDATE_INT);

        if ($nombre === '') {
            return ['error' => 'El nombre es obligatorio.'];
        }

        if ($precio === false || $precio < 0) {
            return ['error' => 'El precio debe ser un numero positivo.'];
        }

        if ($stock === false || $stock < 0) {
            return ['error' => 'El stock debe ser un entero positivo.'];
        }

        if ($idCategoria === false || $idCategoria <= 0) {
            return ['error' => 'La categoria es obligatoria.'];
        }

        return [
            'nombre' => $nombre,
            'descripcion' => $descripcion !== '' ? $descripcion : null,
            'precio' => $precio,
            'stock' => $stock,
            'imagen1' => $this->normalizeOptionalPath($input['imagen1'] ?? null),
            'imagen2' => $this->normalizeOptionalPath($input['imagen2'] ?? null),
            'id_categoria' => $idCategoria,
        ];
    }

    private function normalizeOptionalPath(mixed $path): ?string
    {
        $value = trim((string) ($path ?? ''));
        return $value !== '' ? $value : null;
    }

    // Función auxiliar para devolver respuestas JSON
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
