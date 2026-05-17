# 07 - Integración API: DWEC–DWES

## ¿Cómo conectamos el cliente con la API?

En este sprint nos centramos en que toda la parte de cliente (DWEC) hable directamente con la API REST en PHP (DWES). Cada vez que el usuario hace algo —buscar productos, ver detalles, apuntarse a una actividad, modificar el carrito, etc.— el JS lanza una petición `fetch` al endpoint que toca y pinta la respuesta en la web. Así todo el contenido es dinámico y siempre está sincronizado con la base de datos.

## ¿Cómo es la comunicación?

Usamos `fetch` nativo en todos los scripts, mandando y recibiendo JSON. Si la acción requiere sesión (por ejemplo, ver el carrito o apuntarse a una actividad), siempre ponemos `credentials: 'include'` para que la cookie de sesión viaje al servidor. El backend está montado con un router PHP (`src/api/index.php`) que reparte las peticiones a los controladores según la ruta.

## Endpoints que usamos desde JS

Cada funcionalidad tiene su endpoint y su script. Por ejemplo:

- `GET /api/productos?destacados=1` (productos.js): carga los productos destacados al entrar en la tienda.
- `GET /api/productos/{id}` (productoDetalle.js): muestra el detalle de un producto.
- `GET /api/rutas` (rutas.js, crearActividad.js): lista todas las rutas.
- `GET /api/rutas/{id}` (rutaDetalle.js): muestra el detalle de una ruta.
- `GET /api/actividades` (actividades.js): lista todas las actividades.
- `GET /api/actividades/{id}` (actividadDetalle.js): muestra el detalle de una actividad.
- `POST /api/actividad` (crearActividad.js): crea una nueva actividad.
- `POST /api/carrito` (productos.js, productoDetalle.js): añade un producto al carrito.
- `GET /api/carrito` (carrito.js, ui.js): muestra el contenido del carrito.
- `POST /api/login` (formularioLogin.js): inicia sesión.
- `POST /api/logout` (ui.js): cierra sesión.
- `GET /api/session` (ui.js, actividades.js): consulta el estado de sesión.

Y así con el resto de acciones (editar perfil, gestionar usuarios, reportes, cookies...). Cada script JS solo se encarga de su parte y pide a la API lo que necesita.

## ¿Qué formato tienen las respuestas?

La API siempre responde en JSON con este formato:

```json
{
  "status": "ok",
  "data": { ... }
}
```

Si hay error:

```json
{
  "status": "error",
  "message": "Descripción del error."
}
```

Siempre comprobamos que la respuesta sea `ok` antes de usar los datos. Si no, mostramos el mensaje de error al usuario.

## Cookies y consentimiento

El consentimiento de cookies lo gestionamos desde el servidor. El script `js/cookies.js` pide el estado a la API (`GET /api/cookies`) y guarda las preferencias con `POST /api/cookies`. El backend lo almacena como cookie HTTP para que se mantenga un año.

## Panel de administración

El panel de admin (`js/admin/panelAdmin.js`) hace todo el CRUD de usuarios, actividades, rutas y reportes. Antes de hacer nada, pide a la API el estado de sesión para comprobar que el usuario es admin. Si no lo es, muestra acceso restringido.

## Archivos clave

- `src/api/index.php` (router de la API)
- `js/cookies.js`
- `js/admin/panelAdmin.js`
- `js/formulario/ui.js`
- Todos los scripts de tienda, rutas y actividades
