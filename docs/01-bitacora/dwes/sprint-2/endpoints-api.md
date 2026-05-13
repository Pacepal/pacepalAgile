# Endpoints API REST — PacePal

Listado de endpoints disponibles en la API. Para reglas de sesión, roles y comprobaciones de seguridad consulta `arquitectura-backend.md`.

---

## Endpoints principales

### Autenticación y usuarios

- **POST /api/login** — Iniciar sesión
- **POST /api/register** — Registrar usuario
- **GET /api/usuario** — Datos del usuario logueado

### Productos y tienda

- **GET /api/productos** — Listar productos
- **GET /api/productos/{id}** — Detalle de producto
- **POST /api/carrito** — Añadir producto al carrito
- **GET /api/carrito** — Ver carrito
- **DELETE /api/carrito/{id}** — Quitar producto del carrito

### Rutas y actividades

- **GET /api/rutas** — Listar rutas
- **GET /api/rutas/{id}** — Detalle de ruta
- **GET /api/actividades** — Listar actividades
- **GET /api/actividades/{id}** — Detalle de actividad
- **POST /api/actividades** — Crear actividad
- **POST /api/actividades/{id}/unirse** — Unirse a actividad
- **POST /api/actividades/{id}/salir** — Salirse de actividad

### Pedidos

- **POST /api/pedidos** — Crear pedido
- **GET /api/pedidos** — Listar pedidos del usuario
- **GET /api/pedidos/{id}** — Detalle de pedido

### Reportes

- **POST /api/reportes** — Crear reporte
- **GET /api/reportes** — Listar reportes

### Admin

- **GET /api/admin/usuarios** — Listar usuarios
- **GET /api/admin/pedidos** — Listar todos los pedidos
- **GET /api/admin/reportes** — Listar todos los reportes

---

## Formato de las respuestas

Todas las respuestas son JSON. Ejemplo de error estándar:

```json
{
  "error": true,
  "mensaje": "No tienes permisos para acceder a este recurso."
}
```

---

## Notas

Las comprobaciones de sesión y permiso se describen en `arquitectura-backend.md`.
