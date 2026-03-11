# 03 - Carrito dinámico

## ¿Por qué lo hemos montado así?

Queríamos que el usuario pudiera gestionar su compra de forma fluida, sin recargar la página ni perder el estado del carrito al navegar. Por eso, todo el flujo del carrito lo controlamos desde JavaScript, hablando con la API para cada operación y pintando los cambios al vuelo.

## ¿Cómo funciona el carrito?

Toda la lógica está en `js/tienda/carrito.js`, que se monta en `pages/tienda/carrito.php`. Al cargar la página, el script pide el carrito a la API (`GET /api/carrito`). Si hay productos, los pinta en el contenedor; si está vacío, sale el mensaje y un enlace para volver a la tienda.

Cada producto se muestra con su imagen, nombre, precio, cantidad y subtotal. El usuario puede cambiar la cantidad (input numérico), eliminar productos (botón con icono de papelera) o finalizar el pedido. Todo esto se hace con peticiones a la API (`PUT`, `DELETE`, `POST`) y, cuando la operación va bien, se recarga el carrito para que los datos estén siempre actualizados.

## Operaciones disponibles

- **Modificar cantidad:** Al cambiar el número, mandamos un `PUT /api/carrito` con el id y la nueva cantidad. Si va bien, se recarga el carrito y se recalculan los totales.
- **Eliminar producto:** El botón de la papelera manda un `DELETE /api/carrito` con el id del producto. Si va bien, se recarga el carrito y sale el mensaje de confirmación.
- **Finalizar pedido:** El botón "Finalizar pedido" manda un `POST /api/pedido`. Si el pedido se crea, vaciamos el carrito, mostramos el id del pedido y damos opción de ver el historial o seguir comprando.

Después de cada operación, llamamos a `actualizarContadorCarrito()` (en `ui.js`) para que el badge del carrito en la navbar esté siempre al día.

## Gestión de errores y feedback

Si algo falla (API, conexión, etc.), mostramos el mensaje en el contenedor `#mensaje-carrito` con estilos de Bootstrap (`text-success` o `text-danger`). Así el usuario sabe si la operación ha ido bien o no.

## Historial de pedidos

Además del carrito, en la página de perfil se puede ver el historial de pedidos. El script `js/usuario/perfil.js` pide los pedidos a la API y los pinta como tarjetas con id, fecha, total, estado y líneas de detalle.

## Archivos relacionados

- `js/tienda/carrito.js`
- `pages/tienda/carrito.php`
- `js/formulario/ui.js` (para el contador del carrito)
- `js/usuario/perfil.js` (historial de pedidos)
