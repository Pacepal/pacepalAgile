<?php

declare(strict_types=1);

// Modelo de productos — accede a la tabla articulos

class ProductoModel
{
    private PDO $pdo;

    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    public function getAllProductos(): array
    {
        $sql = 'SELECT id_articulo, nombre, descripcion, precio, stock, imagen1, imagen2, id_categoria
                FROM articulos
                ORDER BY id_articulo ASC';

        $stmt = $this->pdo->query($sql);
        return $stmt->fetchAll();
    }

    public function getProductoById(int $idArticulo): ?array
    {
        $sql = 'SELECT id_articulo, nombre, descripcion, precio, stock, imagen1, imagen2, id_categoria
                FROM articulos
                WHERE id_articulo = :id_articulo
                LIMIT 1';

        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(['id_articulo' => $idArticulo]);

        $producto = $stmt->fetch();

        // Si no existe, devolver null
        return $producto === false ? null : $producto;
    }
}
