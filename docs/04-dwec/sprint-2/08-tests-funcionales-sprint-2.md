# 08 - Tests funcionales del Sprint 2

## ¿Qué hemos probado en este sprint?

En este sprint nos hemos centrado en comprobar que todo lo dinámico funciona de verdad: desde la carga de productos y rutas hasta la gestión del carrito y la sesión. No hemos usado scripts de test automáticos, pero sí hemos ido validando cada funcionalidad a mano mientras la desarrollábamos.

## ¿Cómo lo hemos validado?

Cada vez que subíamos una parte nueva, la probábamos como lo haría un usuario real:

- En la tienda, revisamos que los productos se cargan desde la API, el buscador filtra al vuelo y el botón de añadir al carrito responde bien.
- En el carrito, comprobamos que se actualiza en tiempo real, se pueden cambiar cantidades, borrar productos y finalizar el pedido sin recargar.
- En los listados de rutas y actividades, miramos que todo viene de la API y que los filtros y los enlaces a detalles funcionan.
- En las páginas de detalle, chequeamos que los datos cambian según el id de la URL y que los botones (unirse, abandonar, eliminar) hacen lo que toca.
- En la navbar y la sesión, probamos login, logout y que el estado del usuario se refleja al momento, bloqueando lo que no debe verse.
- En el panel de admin, solo el usuario admin puede ver y gestionar usuarios, rutas, actividades y reportes.

## Observaciones

Todo lo que hemos probado aquí es lo que ve el usuario en la web. Las pruebas de la API con Postman y los detalles de backend están documentados en el módulo DWES (`docs/dwes/pruebas-postman.md`).
