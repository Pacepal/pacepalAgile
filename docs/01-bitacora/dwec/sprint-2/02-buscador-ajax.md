# 02 - Buscador de productos

## ¿Para qué sirve el buscador?

Queríamos que el usuario pudiera filtrar los productos de la tienda al momento, sin recargar ni esperar a que el servidor responda. El buscador funciona como un filtro local: lo que escribes se aplica directamente sobre las tarjetas que ya están en pantalla.

## ¿Cómo lo hemos montado?

El buscador está en `js/tienda/productos.js` y se engancha al input con ID `buscadorProductosInput` (en el HTML de `pages/tienda/tienda.php`). Cada vez que escribes o borras texto (evento `input`), el script:

1. Coge el valor del input y lo pasa a minúsculas.
2. Selecciona todas las tarjetas de producto dentro de `#lista-productos .tarjeta-producto`.
3. Busca el `h3` de cada tarjeta (el nombre).
4. Compara el texto del nombre (en minúsculas) con el filtro usando `indexOf`.
5. Si el nombre contiene el texto, la tarjeta se muestra (`display: ''`). Si no, se oculta (`display: 'none'`).

Todo esto pasa en tiempo real, así que el usuario ve los resultados al instante según va escribiendo.

## Detalles técnicos y límites

- El filtro solo se aplica en el cliente, no hace peticiones nuevas a la API.
- Solo busca por el nombre del producto (el `h3` de la tarjeta), no por descripción ni otros campos.
- No distingue mayúsculas/minúsculas.
- No hay debounce, pero como el número de productos es pequeño, no hace falta.
- Si no hay resultados, simplemente desaparecen las tarjetas (no sale mensaje de "sin resultados").

## Archivos relacionados

- `js/tienda/productos.js`
- `pages/tienda/tienda.php`
