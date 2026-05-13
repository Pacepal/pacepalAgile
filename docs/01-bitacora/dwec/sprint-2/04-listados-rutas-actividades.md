# 04 - Listados de rutas y actividades

## ¿Por qué estos listados son clave en PacePal?

En PacePal, los listados de rutas y actividades son el punto de partida para que cualquier usuario decida dónde y con quién hacer deporte. No queríamos páginas estáticas: todo se genera al vuelo desde la API, así que si se crea una actividad o se añade una ruta, aparece directamente en el listado sin tocar el HTML.

## Listado de actividades

El listado de actividades se monta con el script `js/actividades/actividades.js` en la página `pages/actividades/actividades.php`. Al cargar, el script pide las actividades a la API (`GET /api/actividades`). Si hay resultados, genera una tarjeta por cada actividad y las mete en el contenedor usando un `DocumentFragment` para que vaya rápido y sin parpadeos. Si no hay actividades o la API falla, sale un mensaje claro.

Cada tarjeta muestra la info clave: nombre de la ruta, tipo, nivel, fecha, hora y plazas disponibles. El botón "Ver actividad" lleva al detalle. Si el usuario tiene sesión, también aparece el botón para crear actividad.

## Listado de rutas

El catálogo de rutas funciona igual: el script `js/rutas/rutas.js` se monta en `pages/rutas/rutas.php` y pide las rutas a la API (`GET /api/rutas`). Cada ruta se pinta como tarjeta con imagen, nombre, ubicación y distancia. El enlace "Ver detalle" lleva a la ficha completa de la ruta.

## Rejilla y responsividad

Ambos listados usan contenedores con clases de rejilla:

- Actividades: `rejilla rejilla--actividades`
- Rutas: `rejilla rejilla--productos`

El CSS reparte igual: 1 columna en móvil, 2 desde 768px, 3 desde 992px. Así todo se adapta a cualquier pantalla y no hay que tocar nada si se añaden más elementos.

## Archivos relacionados

- `js/actividades/actividades.js`
- `js/actividades/crearActividad.js`
- `js/rutas/rutas.js`
- `pages/actividades/actividades.php`
- `pages/rutas/rutas.php`
- `css/actividades/responsiveActividades.css`
- `css/rutas/responsiveRutas.css`
