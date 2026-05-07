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

    public function getAllProductos(int $limit = 1000, int $offset = 0): array
    {
        $sql = 'SELECT id_articulo, nombre, descripcion, precio, stock, imagen1, imagen2, id_categoria
                FROM articulos
                ORDER BY id_articulo ASC
                LIMIT :limit OFFSET :offset';

        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
        $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    public function getProductosDestacados(int $limit = 6): array
    {
        $sql = 'SELECT id_articulo, nombre, descripcion, precio, stock, imagen1, imagen2, id_categoria
                FROM articulos
                ORDER BY id_articulo ASC
                LIMIT :limit';

        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
        $stmt->execute();

        return $stmt->fetchAll();
    }

    public function buscarProductos(string $q, int $limit = 1000, int $offset = 0): array
    {
        $sql = 'SELECT id_articulo, nombre, descripcion, precio, stock, imagen1, imagen2, id_categoria
                FROM articulos
                WHERE nombre LIKE :q1 OR descripcion LIKE :q2
                ORDER BY id_articulo ASC
                LIMIT :limit OFFSET :offset';

        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':q1', '%' . $q . '%', PDO::PARAM_STR);
        $stmt->bindValue(':q2', '%' . $q . '%', PDO::PARAM_STR);
        $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
        $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
        $stmt->execute();

        return $stmt->fetchAll();
    }

    public function contarTodos(): int
    {
        return (int) $this->pdo->query('SELECT COUNT(*) FROM articulos')->fetchColumn();
    }

    public function contarBusqueda(string $q): int
    {
        $sql = 'SELECT COUNT(*) FROM articulos WHERE nombre LIKE :q1 OR descripcion LIKE :q2';
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':q1', '%' . $q . '%', PDO::PARAM_STR);
        $stmt->bindValue(':q2', '%' . $q . '%', PDO::PARAM_STR);
        $stmt->execute();
        return (int) $stmt->fetchColumn();
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
