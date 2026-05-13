CREATE DATABASE IF NOT EXISTS pacepal;
USE pacepal;

-- =========================
-- TABLA USUARIOS
-- =========================

CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    
    nombre VARCHAR(100) NOT NULL,
    
    dni CHAR(9) NOT NULL UNIQUE,
    
    email VARCHAR(150) NOT NULL UNIQUE,
    
    password VARCHAR(255) NOT NULL,
    
    sexo VARCHAR(20),
    fecha_nacimiento DATE,
    direccion VARCHAR(200),
    pais VARCHAR(100),
    tarjeta VARCHAR(30),
    
    notificaciones BOOLEAN DEFAULT FALSE,
    revista BOOLEAN DEFAULT FALSE,
    
    rol ENUM('usuario','admin') DEFAULT 'usuario',
    
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- =========================
-- TABLA CATEGORIAS
-- =========================

CREATE TABLE categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT
);

-- =========================
-- TABLA ARTICULOS (TIENDA)
-- =========================

CREATE TABLE articulos (
    id_articulo INT AUTO_INCREMENT PRIMARY KEY,
    
    nombre VARCHAR(150) NOT NULL,
    descripcion TEXT,
    
    precio DECIMAL(10,2) NOT NULL,
    
    stock INT DEFAULT 0,
    
    imagen1 VARCHAR(255),
    imagen2 VARCHAR(255),
    
    id_categoria INT NOT NULL,
    
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
);

-- =========================
-- TABLA RUTAS
-- =========================

CREATE TABLE rutas (
    id_ruta INT AUTO_INCREMENT PRIMARY KEY,
    
    nombre VARCHAR(150) NOT NULL,
    descripcion TEXT,
    
    distancia DECIMAL(5,2),
    
    dificultad VARCHAR(50),
    
    desnivel INT,
    
    duracion VARCHAR(50),
    
    ubicacion VARCHAR(150),
    
    imagen VARCHAR(255)
);

-- TABLA ACTIVIDADES --


CREATE TABLE actividades (
    id_actividad INT AUTO_INCREMENT PRIMARY KEY,
    
    id_ruta INT NOT NULL,
    
    id_usuario_creador INT NOT NULL,
    
    fecha DATE,
    
    hora TIME,
    
    nivel VARCHAR(50),
    
    plazas_max INT,
    
    descripcion TEXT,
    
    estado VARCHAR(50) DEFAULT 'activa',
    
    FOREIGN KEY (id_ruta) REFERENCES rutas(id_ruta),
    FOREIGN KEY (id_usuario_creador) REFERENCES usuarios(id_usuario)
);


-- TABLA PARTICIPACIONES --


CREATE TABLE participaciones (
    id_participacion INT AUTO_INCREMENT PRIMARY KEY,
    
    id_usuario INT NOT NULL,
    
    id_actividad INT NOT NULL,
    
    fecha_union DATETIME DEFAULT CURRENT_TIMESTAMP,

    UNIQUE (id_usuario, id_actividad),
    
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_actividad) REFERENCES actividades(id_actividad)
);


-- TABLA PEDIDOS --


CREATE TABLE pedidos (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    
    id_usuario INT,
    
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    total DECIMAL(10,2),
    
    estado VARCHAR(50),
    
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);


-- TABLA DETALLE_PEDIDO --


CREATE TABLE detalle_pedido (
    id_detalle INT AUTO_INCREMENT PRIMARY KEY,
    
    id_pedido INT,
    
    id_articulo INT,
    
    cantidad INT,
    
    precio_unitario DECIMAL(10,2),
    
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido),
    FOREIGN KEY (id_articulo) REFERENCES articulos(id_articulo)
);


-- TABLA REPORTES --


CREATE TABLE reportes (
    id_reporte INT AUTO_INCREMENT PRIMARY KEY,
    
    id_usuario_reporta INT NOT NULL,
    
    id_usuario_reportado INT,
    
    id_actividad INT,
    
    motivo TEXT,
    
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    estado VARCHAR(50) DEFAULT 'pendiente',
    
    FOREIGN KEY (id_usuario_reporta) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_usuario_reportado) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_actividad) REFERENCES actividades(id_actividad)
);