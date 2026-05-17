<?php

declare(strict_types=1);

// Gestión de pedidos con transacciones y control de stock.

class PedidoModel
{
    private PDO $pdo;

    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    // FOR UPDATE bloquea el stock durante la compra para evitar ventas simultáneas.
    public function createPedido(int $idUsuario, array $productos, float $total, string $estado = 'pendiente'): int
    {
        $this->pdo->beginTransaction();

        try {
            foreach ($productos as $producto) {
                $idArticulo = $producto['id_articulo'] ?? $producto['id'];
                $cantidad = (int) $producto['cantidad'];

                $sqlStock = 'SELECT stock FROM articulos WHERE id_articulo = :id_articulo FOR UPDATE';
                $stmtStock = $this->pdo->prepare($sqlStock);
                $stmtStock->execute(['id_articulo' => $idArticulo]);
                $fila = $stmtStock->fetch();

                if ($fila === false) {
                    throw new RuntimeException("El artículo con id {$idArticulo} no existe.");
                }

                if ((int) $fila['stock'] < $cantidad) {
                    throw new RuntimeException(
                        "Stock insuficiente para el artículo {$idArticulo}. "
                            . "Disponible: {$fila['stock']}, solicitado: {$cantidad}."
                    );
                }
            }

            $sqlPedido = 'INSERT INTO pedidos (id_usuario, total, estado) VALUES (:id_usuario, :total, :estado)';
            $stmtPedido = $this->pdo->prepare($sqlPedido);
            $stmtPedido->execute([
                'id_usuario' => $idUsuario,
                'total' => $total,
                'estado' => $estado,
            ]);

            $idPedido = (int) $this->pdo->lastInsertId();

            $sqlDetalle = 'INSERT INTO detalle_pedido (id_pedido, id_articulo, cantidad, precio_unitario)
                           VALUES (:id_pedido, :id_articulo, :cantidad, :precio_unitario)';
            $stmtDetalle = $this->pdo->prepare($sqlDetalle);

            $sqlDescontar = 'UPDATE articulos SET stock = stock - :cantidad WHERE id_articulo = :id_articulo';
            $stmtDescontar = $this->pdo->prepare($sqlDescontar);

            foreach ($productos as $producto) {
                $idArticulo = $producto['id_articulo'] ?? $producto['id'];
                $cantidad = (int) $producto['cantidad'];

                $stmtDetalle->execute([
                    'id_pedido' => $idPedido,
                    'id_articulo' => $idArticulo,
                    'cantidad' => $cantidad,
                    'precio_unitario' => $producto['precio_unitario'],
                ]);

                $stmtDescontar->execute([
                    'cantidad' => $cantidad,
                    'id_articulo' => $idArticulo,
                ]);
            }

            $this->pdo->commit();
            return $idPedido;
        } catch (Throwable $exception) {
            $this->pdo->rollBack();
            throw $exception;
        }
    }

    public function getArticuloById(int $idArticulo): ?array
    {
        $sql = 'SELECT id_articulo, nombre, precio, stock, imagen1, imagen2
                FROM articulos
                WHERE id_articulo = :id_articulo
                LIMIT 1';

        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(['id_articulo' => $idArticulo]);

        $articulo = $stmt->fetch();
        return $articulo === false ? null : $articulo;
    }

    // LEFT JOIN conserva pedidos aunque todavía no tengan líneas asociadas.
    public function getPedidosUsuario(int $idUsuario): array
    {
        $sql = 'SELECT
                    p.id_pedido,
                    p.id_usuario,
                    p.fecha,
                    p.total,
                    p.estado,
                    d.id_detalle,
                    d.id_articulo,
                    d.cantidad,
                    d.precio_unitario
                FROM pedidos p
                LEFT JOIN detalle_pedido d ON d.id_pedido = p.id_pedido
                WHERE p.id_usuario = :id_usuario
                ORDER BY p.id_pedido DESC, d.id_detalle ASC';

        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(['id_usuario' => $idUsuario]);

        return $stmt->fetchAll();
    }

    // Vista administrativa con datos básicos del usuario comprador.
    public function getAllPedidos(): array
    {
        $sql = 'SELECT
                    p.id_pedido,
                    p.id_usuario,
                    u.nombre AS nombre_usuario,
                    u.email AS email_usuario,
                    p.fecha,
                    p.total,
                    p.estado
                FROM pedidos p
                LEFT JOIN usuarios u ON u.id_usuario = p.id_usuario
                ORDER BY p.id_pedido DESC';

        $stmt = $this->pdo->query($sql);
        return $stmt->fetchAll();
    }
}
