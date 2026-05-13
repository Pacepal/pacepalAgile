USE pacepal;

-- =========================
-- CATEGORIAS
-- =========================

INSERT INTO categorias (nombre, descripcion) VALUES
('Zapatillas', 'Calzado deportivo sostenible para running y trail'),
('Ropa deportiva', 'Ropa técnica ligera para actividades al aire libre'),
('Accesorios', 'Complementos deportivos reutilizables y sostenibles');

-- =========================
-- USUARIO ADMIN
-- =========================

INSERT INTO usuarios (nombre, dni, email, password, rol)
VALUES ('Administrador PacePal', '00000000A', 'admin@pacepal.com', '$2y$12$TDbAEXT8Gj0Mc5pyYN2OEeK9mV0/zoi822wqRequ1dnnwkd1o5pJy', 'admin');

-- =========================
-- PRODUCTOS (10)
-- =========================

INSERT INTO articulos (nombre, descripcion, precio, stock, imagen1, imagen2, id_categoria) VALUES

('Zapatillas deportivas PacePal',
'Zapatillas deportivas ligeras para entrenamiento, running urbano y uso diario.',
89.90, 25,
'img/productos/zapatillaPacepal1.webp',
'img/productos/zapatillaPacepal2.webp',
1),

('Camiseta deportiva PacePal',
'Camiseta técnica transpirable pensada para actividades deportivas y entrenamiento al aire libre.',
29.90, 50,
'img/productos/camisetaPacepal1.webp',
'img/productos/camisetaPacepal2.webp',
2),

('Chaqueta deportiva PacePal',
'Chaqueta ligera y cómoda para proteger del viento y del frío en actividades deportivas.',
59.90, 20,
'img/productos/chaquetaPacepal1.webp',
'img/productos/chaquetaPacepal2.webp',
2),

('Pantalones deportivos PacePal',
'Pantalones deportivos ligeros, cómodos y adaptados a entrenamiento, running y rutas.',
34.90, 30,
'img/productos/pantalonesPacepal1.webp',
'img/productos/pantalonesPacepal2.webp',
2),

('Calcetines deportivos PacePal',
'Calcetines deportivos transpirables con ajuste cómodo para caminar, correr o entrenar.',
12.90, 60,
'img/productos/calcetinesPacepal1.webp',
'img/productos/calcetinesPacepal2.webp',
2),

('Chaleco de hidratación PacePal',
'Chaleco técnico de hidratación ideal para trail, senderismo y actividades de resistencia.',
49.90, 18,
'img/productos/chalecoHidratacionPacepal1.webp',
'img/productos/chalecoHidratacionPacepal2.webp',
3),

('Botella deportiva reutilizable PacePal',
'Botella reutilizable de acero inoxidable para mantener la hidratación durante cualquier actividad.',
14.90, 60,
'img/productos/botellaPacepal1.webp',
'img/productos/botellaPacepal2.webp',
3),

('Gorra deportiva PacePal',
'Gorra deportiva ligera y transpirable para proteger del sol durante entrenamientos y rutas.',
19.90, 45,
'img/productos/gorraPacepal1.webp',
'img/productos/gorraPacepal2.webp',
3),

('Bastones de senderismo PacePal',
'Bastones ligeros y resistentes para rutas de senderismo, trekking y montaña.',
39.90, 22,
'img/productos/bastonesPacepal1.webp',
'img/productos/bastonesPacepal2.webp',
3),

('Kit deportivo PacePal',
'Kit compacto de accesorios deportivos y organización para salidas, entrenamientos y rutas.',
24.90, 15,
'img/productos/kitPpAaPAcepal1.webp',
'img/productos/kitPpAaPAcepal2.webp',
3);
-- =========================
-- RUTAS (9)
-- =========================

INSERT INTO rutas (nombre, descripcion, distancia, dificultad, desnivel, duracion, ubicacion, imagen) VALUES

('Ruta Embalse de La Jarosa',
'Ruta circular alrededor del embalse de La Jarosa en Guadarrama.',
7.5, 'fácil', 120, '2h',
'Guadarrama',
'img/rutas/jarosa.webp'),

('Ruta Parque del Retiro',
'Ruta urbana ideal para running dentro del Parque del Retiro.',
5.0, 'fácil', 20, '1h',
'Madrid',
'img/rutas/retiro.webp'),

('Ruta Laguna de Peñalara',
'Ruta de montaña hasta la Laguna Grande de Peñalara.',
6.0, 'medio', 250, '3h',
'Sierra de Guadarrama',
'img/rutas/penalara.webp'),

('Ruta Siete Picos',
'Ascenso clásico a los Siete Picos desde el Puerto de Navacerrada.',
9.5, 'dificil', 450, '4h',
'Sierra de Guadarrama',
'img/rutas/siete_picos.webp'),

('Ruta Camino Schmidt',
'Sendero histórico entre Navacerrada y el Valle de la Fuenfría.',
8.0, 'medio', 300, '3h',
'Cercedilla',
'img/rutas/schmidt.webp'),

('Ruta Cascadas del Purgatorio',
'Ruta popular hasta las cascadas del Purgatorio en Rascafría.',
12.0, 'medio', 350, '4h',
'Rascafría',
'img/rutas/purgatorio.webp'),

('Ruta Canto Cochino',
'Ruta de senderismo en La Pedriza con paisajes graníticos.',
10.0, 'medio', 400, '4h',
'La Pedriza',
'img/rutas/canto_cochino.webp'),

('Ruta Bosque de la Herrería',
'Ruta sencilla por el bosque cercano al Monasterio de El Escorial.',
6.5, 'fácil', 150, '2h',
'San Lorenzo de El Escorial',
'img/rutas/herreria.webp'),

('Ruta Valle de la Fuenfría',
'Ruta clásica de senderismo por el Valle de la Fuenfría.',
11.0, 'medio', 420, '4h',
'Cercedilla',
'img/rutas/fuenfria.webp');