# 01 - Tienda dinámica

## ¿Por qué lo hemos hecho así?

No queríamos una tienda estática donde hay que tocar el HTML cada vez que se añade un producto. El objetivo era que el catálogo se cargara solo desde la base de datos usando la API, y que todo el renderizado fuera en tiempo real con JavaScript. Así, si mañana subimos un producto nuevo, aparece directamente en la tienda sin hacer nada más.

## ¿Cómo funciona la tienda?

Toda la lógica está en `js/tienda/productos.js`, que se monta en `pages/tienda/tienda.php`. Al cargar la página, el script pide los productos destacados a la API (`GET /api/productos?destacados=1`). Si la respuesta trae productos, genera una tarjeta para cada uno y las mete en el contenedor `#lista-productos` usando un `DocumentFragment` para que vaya más rápido y no parpadee la interfaz. Si no hay productos, sale el mensaje "No hay productos disponibles.". Si la API falla, mostramos el error.

Cada tarjeta de producto la monta la función `crearTarjetaProducto(producto)`. El formato es el mismo que usamos en la landing (DIW): imagen, nombre, precio, sello de producción responsable, botón para añadir al carrito y enlace para ver el detalle. La imagen usa `loading="lazy"` para que la carga sea más fluida, y si el producto no tiene imagen, ponemos una por defecto.

## Añadir al carrito y feedback

El botón "Añadir al carrito" hace un `POST /api/carrito` con el id del producto y cantidad 1. Mientras se envía, el botón se desactiva y pone "Añadiendo...". Si va bien, sale "¡Añadido!" y se actualiza el contador del carrito en la navbar. Si falla, mostramos el error dos segundos y el botón vuelve a su estado original. Así el usuario sabe siempre qué está pasando.

## Enlace a detalle de producto

Cada tarjeta tiene un enlace "Ver producto" que lleva a `producto.php?id=X`. Ahí el usuario puede ver toda la info del artículo y elegir la cantidad que quiere comprar.

## Contenedor y rejilla responsive

Todo el catálogo se pinta dentro de un contenedor con clases `rejilla rejilla--productos` (definido en el HTML de `tienda.php`). El CSS reparte las columnas así:

- 1 columna en móvil
- 2 columnas desde 768px
- 3 columnas desde 992px

Así la tienda se adapta a cualquier pantalla y no hay que tocar nada si cambia el número de productos.

## Archivos relacionados

- `js/tienda/productos.js`
- `pages/tienda/tienda.php`
- `css/tienda/seccionesTienda.css`
- `css/tienda/responsiveTienda.css`
