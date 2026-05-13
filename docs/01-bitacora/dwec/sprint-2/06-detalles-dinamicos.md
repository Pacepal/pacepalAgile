# 06 - Páginas de detalle dinámicas

## ¿Por qué montamos los detalles así?

Queríamos que al entrar al detalle de un producto, ruta o actividad, el usuario viera siempre la información actualizada, sin recargar ni tocar HTML a mano. Por eso, cada página de detalle pide los datos a la API usando el id de la URL y pinta todo al vuelo con JavaScript.

## Detalle de producto

El script `js/tienda/productoDetalle.js` se monta en `pages/tienda/producto.php` y pinta sobre `#detalle-producto`. Al cargar, coge el id de la URL, pide el producto a la API y muestra nombre, imágenes, descripción, precio, stock, selector de cantidad y el botón para añadir al carrito. Al añadir, sale el mensaje de confirmación y se actualiza el contador de la navbar.

## Detalle de ruta

El script `js/rutas/rutaDetalle.js` se monta en `pages/rutas/rutaDetalle.php` y pinta sobre `#detalle-ruta`. Al cargar, coge el id de la URL, pide la ruta a la API y muestra nombre, imagen, descripción, ubicación, distancia, dificultad, desnivel y duración. Hay enlaces para crear actividad en esa ruta y para volver al listado.

## Detalle de actividad

El script `js/actividades/actividadDetalle.js` se monta en `pages/actividades/actividadDetalle.php` y pinta sobre `#detalle-actividad`. Al cargar, coge el id de la URL y pide la actividad a la API (con credenciales para saber el rol). Muestra toda la info: ruta asociada, organizador, fecha, hora, nivel, plazas, estado, descripción y participantes.

Según el rol y la participación, salen los botones de unirse, abandonar o eliminar (si eres el creador). Todas las acciones mandan peticiones a la API y recargan la vista para que todo esté al día.

## Patrón común

Todas las páginas de detalle siguen el mismo patrón: coger el id de la URL, pedir los datos a la API, montar la vista con `createElement` y mostrar solo lo que toca. Así todo es dinámico y fácil de mantener.

## Archivos relacionados

- `js/tienda/productoDetalle.js`
- `js/rutas/rutaDetalle.js`
- `js/actividades/actividadDetalle.js`
- `pages/tienda/producto.php`
- `pages/rutas/rutaDetalle.php`
- `pages/actividades/actividadDetalle.php`
