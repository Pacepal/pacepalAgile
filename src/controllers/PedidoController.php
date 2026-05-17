<?php

declare(strict_types=1);

// El carrito vive en la sesión PHP hasta que se convierte en pedido persistido.
require_once __DIR__ . '/../models/PedidoModel.php';

class PedidoController
{
    private PedidoModel $pedidoModel;

    public function __construct(PDO $pdo)
    {
        $this->pedidoModel = new PedidoModel($pdo);
    }

    // ===== AÑADIR AL CARRITO =====

    public function addCarrito(): void
    {
        $this->iniciarSesion();

        // El carrito requiere sesión de usuario o administrador.
        if (!$this->tieneRolUsuario()) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'Acceso no autorizado',
            ], 403);
            return;
        }

        $input = $this->getJsonInput();

        $productoId = isset($input['producto_id']) ? (int) $input['producto_id'] : 0;
        $cantidad = isset($input['cantidad']) ? (int) $input['cantidad'] : 0;

        if ($productoId <= 0 || $cantidad <= 0) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'producto_id y cantidad son obligatorios y deben ser mayores que 0.',
            ], 400);
            return;
        }

        $articulo = $this->pedidoModel->getArticuloById($productoId);
        if ($articulo === null) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'El producto indicado no existe.',
            ], 404);
            return;
        }

        if (!isset($_SESSION['carrito']) || !is_array($_SESSION['carrito'])) {
            $_SESSION['carrito'] = [];
        }

        $cantidadActual = (int) ($_SESSION['carrito'][$productoId] ?? 0);
        $nuevaCantidad = $cantidadActual + $cantidad;

        // Se valida contra stock real antes de acumular unidades en sesión.
        $stockDisponible = (int) $articulo['stock'];
        if ($nuevaCantidad > $stockDisponible) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => "Stock insuficiente. Disponible: {$stockDisponible}, en carrito: {$cantidadActual}, solicitado: {$cantidad}.",
            ], 409);
            return;
        }

        $_SESSION['carrito'][$productoId] = $nuevaCantidad;

        $this->jsonResponse([
            'status' => 'ok',
            'data' => [
                'carrito' => $_SESSION['carrito'],
            ],
        ]);
    }

    // ===== VER CARRITO =====

    public function getCarrito(): void
    {
        $this->iniciarSesion();

        $carrito = $_SESSION['carrito'] ?? [];

        if (!is_array($carrito) || count($carrito) === 0) {
            $this->jsonResponse([
                'status' => 'ok',
                'data' => [
                    'items' => [],
                    'total' => 0,
                ],
            ]);
            return;
        }

        $items = [];
        $total = 0.0;

        foreach ($carrito as $idArticulo => $cantidad) {
            $idArticulo = (int) $idArticulo;
            $cantidad = (int) $cantidad;

            if ($idArticulo <= 0 || $cantidad <= 0) {
                continue;
            }

            $articulo = $this->pedidoModel->getArticuloById($idArticulo);
            if ($articulo === null) {
                continue;
            }

            $precio = (float) $articulo['precio'];
            $subtotal = $precio * $cantidad;
            $total += $subtotal;

            $items[] = [
                'id_articulo' => (int) $articulo['id_articulo'],
                'nombre' => $articulo['nombre'],
                'precio_unitario' => $precio,
                'cantidad' => $cantidad,
                'subtotal' => round($subtotal, 2),
                'imagen1' => $articulo['imagen1'],
                'imagen2' => $articulo['imagen2'],
            ];
        }

        $this->jsonResponse([
            'status' => 'ok',
            'data' => [
                'items' => $items,
                'total' => round($total, 2),
            ],
        ]);
    }

    // ===== CREAR PEDIDO =====
    // Convierte el carrito de sesión en un pedido persistido.
    public function crearPedido(): void
    {
        $this->iniciarSesion();

        if (!$this->tieneRolUsuario()) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'Acceso no autorizado',
            ], 403);
            return;
        }

        $idUsuario = isset($_SESSION['usuario_id']) ? (int) $_SESSION['usuario_id'] : 0;

        if ($idUsuario <= 0) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'Usuario no autenticado.',
            ], 401);
            return;
        }

        $carrito = $_SESSION['carrito'] ?? [];

        if (!is_array($carrito) || count($carrito) === 0) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'El carrito esta vacio.',
            ], 400);
            return;
        }

        $lineasPedido = [];
        $total = 0.0;
        foreach ($carrito as $idArticulo => $cantidad) {
            $idArticulo = (int) $idArticulo;
            $cantidad = (int) $cantidad;

            if ($idArticulo <= 0 || $cantidad <= 0) {
                continue;
            }

            $articulo = $this->pedidoModel->getArticuloById($idArticulo);
            if ($articulo === null) {
                continue;
            }

            // El stock se vuelve a comprobar antes de confirmar la compra.
            $stockDisponible = (int) $articulo['stock'];
            if ($stockDisponible < $cantidad) {
                $this->jsonResponse([
                    'status' => 'error',
                    'message' => "Stock insuficiente para \"{$articulo['nombre']}\". Disponible: {$stockDisponible}, solicitado: {$cantidad}.",
                ], 409);
                return;
            }

            $precioUnitario = (float) $articulo['precio'];
            $total += $precioUnitario * $cantidad;

            $lineasPedido[] = [
                'id_articulo' => $idArticulo,
                'cantidad' => $cantidad,
                'precio_unitario' => $precioUnitario,
            ];
        }

        if (count($lineasPedido) === 0) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'No hay productos validos en el carrito.',
            ], 400);
            return;
        }

        if ($total <= 0) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'El total del pedido debe ser mayor que 0.',
            ], 400);
            return;
        }

        try {
            $idPedido = $this->pedidoModel->createPedido($idUsuario, $lineasPedido, $total);

            // El carrito se limpia solo después de persistir el pedido.
            $_SESSION['carrito'] = [];

            $this->jsonResponse([
                'status' => 'ok',
                'data' => [
                    'id_pedido' => $idPedido,
                    'total' => round($total, 2),
                ],
            ], 201);
        } catch (RuntimeException $exception) {

            $this->jsonResponse([
                'status' => 'error',
                'message' => $exception->getMessage(),
            ], 409);
        } catch (Throwable $exception) {

            $this->jsonResponse([
                'status' => 'error',
                'message' => 'No se pudo crear el pedido.',
            ], 500);
        }
    }

    // ===== ADMIN: TODOS LOS PEDIDOS =====

    public function getAllPedidos(): void
    {
        $this->iniciarSesion();

        if (!$this->esAdmin()) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'Acceso restringido a administradores.',
            ], 403);
            return;
        }

        $pedidos = $this->pedidoModel->getAllPedidos();

        $this->jsonResponse([
            'status' => 'ok',
            'data' => $pedidos,
        ]);
    }

    // ===== QUITAR / ACTUALIZAR ITEMS DEL CARRITO =====

    public function removeCarritoItem(): void
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
        $productoId = isset($input['producto_id']) ? (int) $input['producto_id'] : 0;

        if ($productoId <= 0) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'producto_id es obligatorio y debe ser mayor que 0.',
            ], 400);
            return;
        }

        if (!isset($_SESSION['carrito']) || !is_array($_SESSION['carrito'])) {
            $_SESSION['carrito'] = [];
        }

        unset($_SESSION['carrito'][$productoId]);

        $this->jsonResponse([
            'status' => 'ok',
            'data' => [
                'carrito' => $_SESSION['carrito'],
            ],
        ]);
    }

    public function updateCarritoItem(): void
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
        $productoId = isset($input['producto_id']) ? (int) $input['producto_id'] : 0;
        $cantidad = isset($input['cantidad']) ? (int) $input['cantidad'] : 0;

        if ($productoId <= 0) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'producto_id es obligatorio y debe ser mayor que 0.',
            ], 400);
            return;
        }

        if (!isset($_SESSION['carrito']) || !is_array($_SESSION['carrito'])) {
            $_SESSION['carrito'] = [];
        }

        // Una cantidad no positiva equivale a retirar el producto.
        if ($cantidad <= 0) {
            unset($_SESSION['carrito'][$productoId]);
        } else {
            // La actualización no puede superar el stock actual.
            $articulo = $this->pedidoModel->getArticuloById($productoId);

            if ($articulo !== null) {
                $stockDisponible = (int) $articulo['stock'];

                if ($cantidad > $stockDisponible) {
                    $this->jsonResponse([
                        'status' => 'error',
                        'message' => "Stock insuficiente. Disponible: {$stockDisponible}, solicitado: {$cantidad}.",
                    ], 409);
                    return;
                }
            }

            $_SESSION['carrito'][$productoId] = $cantidad;
        }

        $this->jsonResponse([
            'status' => 'ok',
            'data' => [
                'carrito' => $_SESSION['carrito'],
            ],
        ]);
    }

    // ===== HELPERS =====

    private function iniciarSesion(): void
    {
        resumeSessionIfActive();
    }

    private function tieneRolUsuario(): bool
    {
        return isset($_SESSION['rol']) && ($_SESSION['rol'] === 'usuario' || $_SESSION['rol'] === 'admin');
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

    private function jsonResponse(array $payload, int $statusCode = 200): void
    {
        http_response_code($statusCode);
        echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    }
}
