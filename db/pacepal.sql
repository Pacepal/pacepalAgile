-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-05-2026 a las 10:53:31
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pacepal`
--

CREATE DATABASE IF NOT EXISTS `pacepal` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `pacepal`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades`
--

CREATE TABLE `actividades` (
  `id_actividad` int(11) NOT NULL,
  `id_ruta` int(11) NOT NULL,
  `id_usuario_creador` int(11) NOT NULL,
  `fecha` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `nivel` varchar(50) DEFAULT NULL,
  `plazas_max` int(11) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `estado` varchar(50) DEFAULT 'activa'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `actividades`
--

INSERT INTO `actividades` (`id_actividad`, `id_ruta`, `id_usuario_creador`, `fecha`, `hora`, `nivel`, `plazas_max`, `descripcion`, `estado`) VALUES
(1, 1, 1, '2026-03-07', '10:00:00', 'principiante', 12, 'Ven a psarlo bien y a conocer gente.', 'activa'),
(2, 2, 2, '2026-03-31', '13:00:00', 'principiante', 4, 'Ven a conocer gente y a moverte', 'activa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
--

CREATE TABLE `articulos` (
  `id_articulo` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `stock` int(11) DEFAULT 0,
  `imagen1` varchar(255) DEFAULT NULL,
  `imagen2` varchar(255) DEFAULT NULL,
  `id_categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `articulos`
--

INSERT INTO `articulos` (`id_articulo`, `nombre`, `descripcion`, `precio`, `stock`, `imagen1`, `imagen2`, `id_categoria`) VALUES
(1, 'Zapatillas deportivas PacePal', 'Zapatillas deportivas ligeras para entrenamiento, running urbano y uso diario.', 89.90, 0, 'img/productos/zapatillaPacepal1.webp', 'img/productos/zapatillaPacepal2.webp', 1),
(2, 'Camiseta deportiva PacePal', 'Camiseta técnica transpirable pensada para actividades deportivas y entrenamiento al aire libre.', 29.90, 50, 'img/productos/camisetaPacepal1.webp', 'img/productos/camisetaPacepal2.webp', 2),
(3, 'Chaqueta deportiva PacePal', 'Chaqueta ligera y cómoda para proteger del viento y del frío en actividades deportivas.', 59.90, 20, 'img/productos/chaquetaPacepal1.webp', 'img/productos/chaquetaPacepal2.webp', 2),
(4, 'Pantalones deportivos PacePal', 'Pantalones deportivos ligeros, cómodos y adaptados a entrenamiento, running y rutas.', 34.90, 30, 'img/productos/pantalonesPacepal1.webp', 'img/productos/pantalonesPacepal2.webp', 2),
(5, 'Calcetines deportivos PacePal', 'Calcetines deportivos transpirables con ajuste cómodo para caminar, correr o entrenar.', 12.90, 60, 'img/productos/calcetinesPacepal1.webp', 'img/productos/calcetinesPacepal2.webp', 2),
(6, 'Chaleco de hidratación PacePal', 'Chaleco técnico de hidratación ideal para trail, senderismo y actividades de resistencia.', 49.90, 18, 'img/productos/chalecoHidratacionPacepal1.webp', 'img/productos/chalecoHidratacionPacepal2.webp', 3),
(7, 'Botella deportiva reutilizable PacePal', 'Botella reutilizable de acero inoxidable para mantener la hidratación durante cualquier actividad.', 14.90, 60, 'img/productos/botellaPacepal1.webp', 'img/productos/botellaPacepal2.webp', 3),
(8, 'Gorra deportiva PacePal', 'Gorra deportiva ligera y transpirable para proteger del sol durante entrenamientos y rutas.', 19.90, 45, 'img/productos/gorraPacepal1.webp', 'img/productos/gorraPacepal2.webp', 3),
(9, 'Bastones de senderismo PacePal', 'Bastones ligeros y resistentes para rutas de senderismo, trekking y montaña.', 39.90, 22, 'img/productos/bastonesPacepal1.webp', 'img/productos/bastonesPacepal2.webp', 3),
(10, 'Kit deportivo PacePal', 'Kit compacto de accesorios deportivos y organización para salidas, entrenamientos y rutas.', 24.90, 15, 'img/productos/kitPpAaPAcepal1.webp', 'img/productos/kitPpAaPAcepal2.webp', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id_categoria` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id_categoria`, `nombre`, `descripcion`) VALUES
(1, 'Zapatillas', 'Calzado deportivo sostenible para running y trail'),
(2, 'Ropa deportiva', 'Ropa técnica ligera para actividades al aire libre'),
(3, 'Accesorios', 'Complementos deportivos reutilizables y sostenibles');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_pedido`
--

CREATE TABLE `detalle_pedido` (
  `id_detalle` int(11) NOT NULL,
  `id_pedido` int(11) DEFAULT NULL,
  `id_articulo` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `precio_unitario` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `detalle_pedido`
--

INSERT INTO `detalle_pedido` (`id_detalle`, `id_pedido`, `id_articulo`, `cantidad`, `precio_unitario`) VALUES
(1, 1, 1, 1, 89.90),
(2, 2, 1, 2, 89.90),
(3, 3, 1, 1, 89.90),
(4, 4, 1, 24, 89.90);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `participaciones`
--

CREATE TABLE `participaciones` (
  `id_participacion` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_actividad` int(11) NOT NULL,
  `fecha_union` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `participaciones`
--

INSERT INTO `participaciones` (`id_participacion`, `id_usuario`, `id_actividad`, `fecha_union`) VALUES
(1, 2, 1, '2026-03-31 10:18:31');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id_pedido` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `fecha` datetime DEFAULT current_timestamp(),
  `total` decimal(10,2) DEFAULT NULL,
  `estado` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id_pedido`, `id_usuario`, `fecha`, `total`, `estado`) VALUES
(1, 1, '2026-03-06 21:54:50', 89.90, 'pendiente'),
(2, 1, '2026-03-06 22:22:11', 179.80, 'pendiente'),
(3, 1, '2026-03-23 12:04:41', 89.90, 'pendiente'),
(4, 2, '2026-03-31 10:15:34', 2157.60, 'pendiente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reportes`
--

CREATE TABLE `reportes` (
  `id_reporte` int(11) NOT NULL,
  `id_usuario_reporta` int(11) NOT NULL,
  `id_usuario_reportado` int(11) DEFAULT NULL,
  `id_actividad` int(11) DEFAULT NULL,
  `motivo` text DEFAULT NULL,
  `fecha` datetime DEFAULT current_timestamp(),
  `estado` varchar(50) DEFAULT 'pendiente'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rutas`
--

CREATE TABLE `rutas` (
  `id_ruta` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `distancia` decimal(5,2) DEFAULT NULL,
  `dificultad` varchar(50) DEFAULT NULL,
  `desnivel` int(11) DEFAULT NULL,
  `duracion` varchar(50) DEFAULT NULL,
  `ubicacion` varchar(150) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rutas`
--

INSERT INTO `rutas` (`id_ruta`, `nombre`, `descripcion`, `distancia`, `dificultad`, `desnivel`, `duracion`, `ubicacion`, `imagen`) VALUES
(1, 'Ruta Embalse de La Jarosa', 'Ruta circular alrededor del embalse de La Jarosa en Guadarrama.', 7.50, 'fácil', 120, '2h', 'Guadarrama', 'img/rutas/jarosa.webp'),
(2, 'Ruta Parque del Retiro', 'Ruta urbana ideal para running dentro del Parque del Retiro.', 5.00, 'fácil', 20, '1h', 'Madrid', 'img/rutas/retiro.webp'),
(3, 'Ruta Laguna de Peñalara', 'Ruta de montaña hasta la Laguna Grande de Peñalara.', 6.00, 'medio', 250, '3h', 'Sierra de Guadarrama', 'img/rutas/penalara.webp'),
(4, 'Ruta Siete Picos', 'Ascenso clásico a los Siete Picos desde el Puerto de Navacerrada.', 9.50, 'dificil', 450, '4h', 'Sierra de Guadarrama', 'img/rutas/siete_picos.webp'),
(5, 'Ruta Camino Schmidt', 'Sendero histórico entre Navacerrada y el Valle de la Fuenfría.', 8.00, 'medio', 300, '3h', 'Cercedilla', 'img/rutas/schmidt.webp'),
(6, 'Ruta Cascadas del Purgatorio', 'Ruta popular hasta las cascadas del Purgatorio en Rascafría.', 12.00, 'medio', 350, '4h', 'Rascafría', 'img/rutas/purgatorio.webp'),
(7, 'Ruta Canto Cochino', 'Ruta de senderismo en La Pedriza con paisajes graníticos.', 10.00, 'medio', 400, '4h', 'La Pedriza', 'img/rutas/canto_cochino.webp'),
(8, 'Ruta Bosque de la Herrería', 'Ruta sencilla por el bosque cercano al Monasterio de El Escorial.', 6.50, 'fácil', 150, '2h', 'San Lorenzo de El Escorial', 'img/rutas/herreria.webp'),
(9, 'Ruta Valle de la Fuenfría', 'Ruta clásica de senderismo por el Valle de la Fuenfría.', 11.00, 'medio', 420, '4h', 'Cercedilla', 'img/rutas/fuenfria.webp');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `dni` char(9) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `sexo` varchar(20) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `direccion` varchar(200) DEFAULT NULL,
  `pais` varchar(100) DEFAULT NULL,
  `tarjeta` varchar(30) DEFAULT NULL,
  `notificaciones` tinyint(1) DEFAULT 0,
  `revista` tinyint(1) DEFAULT 0,
  `rol` enum('usuario','admin') DEFAULT 'usuario',
  `fecha_registro` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `dni`, `email`, `password`, `sexo`, `fecha_nacimiento`, `direccion`, `pais`, `tarjeta`, `notificaciones`, `revista`, `rol`, `fecha_registro`) VALUES
(1, 'Administrador PacePal', '00000000A', 'admin@pacepal.com', '$2y$12$aXZdjLEVRod5JIVDMt75BurFxeZamJz1cdMXY7vKIkgBVt7iUCmfm', NULL, NULL, NULL, NULL, NULL, 0, 0, 'admin', '2026-03-06 15:40:32'),
(2, 'Usuario Demo', '11111111B', 'usuario.demo@example.com', '$2y$12$bYidc0gra5WhopmzgUuFd.3YjnBuFYAaKyq6ko357hNCHZ8kevgcy', 'hombre', '1990-08-10', 'Calle Demo 1', 'es', '0000 0000 0000 0000', 1, 1, 'usuario', '2026-03-31 10:13:32');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD PRIMARY KEY (`id_actividad`),
  ADD KEY `id_ruta` (`id_ruta`),
  ADD KEY `id_usuario_creador` (`id_usuario_creador`);

--
-- Indices de la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD PRIMARY KEY (`id_articulo`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `detalle_pedido`
--
ALTER TABLE `detalle_pedido`
  ADD PRIMARY KEY (`id_detalle`),
  ADD KEY `id_pedido` (`id_pedido`),
  ADD KEY `id_articulo` (`id_articulo`);

--
-- Indices de la tabla `participaciones`
--
ALTER TABLE `participaciones`
  ADD PRIMARY KEY (`id_participacion`),
  ADD UNIQUE KEY `id_usuario` (`id_usuario`,`id_actividad`),
  ADD KEY `id_actividad` (`id_actividad`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id_pedido`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `reportes`
--
ALTER TABLE `reportes`
  ADD PRIMARY KEY (`id_reporte`),
  ADD KEY `id_usuario_reporta` (`id_usuario_reporta`),
  ADD KEY `id_usuario_reportado` (`id_usuario_reportado`),
  ADD KEY `id_actividad` (`id_actividad`);

--
-- Indices de la tabla `rutas`
--
ALTER TABLE `rutas`
  ADD PRIMARY KEY (`id_ruta`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `dni` (`dni`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actividades`
--
ALTER TABLE `actividades`
  MODIFY `id_actividad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `articulos`
--
ALTER TABLE `articulos`
  MODIFY `id_articulo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `detalle_pedido`
--
ALTER TABLE `detalle_pedido`
  MODIFY `id_detalle` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `participaciones`
--
ALTER TABLE `participaciones`
  MODIFY `id_participacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id_pedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `reportes`
--
ALTER TABLE `reportes`
  MODIFY `id_reporte` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rutas`
--
ALTER TABLE `rutas`
  MODIFY `id_ruta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD CONSTRAINT `actividades_ibfk_1` FOREIGN KEY (`id_ruta`) REFERENCES `rutas` (`id_ruta`),
  ADD CONSTRAINT `actividades_ibfk_2` FOREIGN KEY (`id_usuario_creador`) REFERENCES `usuarios` (`id_usuario`);

--
-- Filtros para la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD CONSTRAINT `articulos_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`);

--
-- Filtros para la tabla `detalle_pedido`
--
ALTER TABLE `detalle_pedido`
  ADD CONSTRAINT `detalle_pedido_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `pedidos` (`id_pedido`),
  ADD CONSTRAINT `detalle_pedido_ibfk_2` FOREIGN KEY (`id_articulo`) REFERENCES `articulos` (`id_articulo`);

--
-- Filtros para la tabla `participaciones`
--
ALTER TABLE `participaciones`
  ADD CONSTRAINT `participaciones_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `participaciones_ibfk_2` FOREIGN KEY (`id_actividad`) REFERENCES `actividades` (`id_actividad`);

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Filtros para la tabla `reportes`
--
ALTER TABLE `reportes`
  ADD CONSTRAINT `reportes_ibfk_1` FOREIGN KEY (`id_usuario_reporta`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `reportes_ibfk_2` FOREIGN KEY (`id_usuario_reportado`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `reportes_ibfk_3` FOREIGN KEY (`id_actividad`) REFERENCES `actividades` (`id_actividad`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
