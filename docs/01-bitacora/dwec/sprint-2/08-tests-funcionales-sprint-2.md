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

## Pruebas funcionales del buscador dinámico (Sprint 2.2 DWEC)

Los siguientes casos se verificaron manualmente en `pages/tienda/tienda.php` con XAMPP activo:

| Caso | Acción | Resultado esperado | Resultado obtenido |
|------|--------|--------------------|--------------------|
| TC-01 | Abrir la tienda sin escribir nada | Se muestran los 6 productos destacados cargados desde `GET /api/productos?destacados=1` 
| TC-02 | Escribir "zapatilla" en el buscador | La galería se actualiza sin recargar con resultados de `GET /api/productos?q=zapatilla`
| TC-03 | Escribir "transpirable" (término de descripción) | Aparecen productos cuya descripción contiene "transpirable", sin estar en el nombre
| TC-04 | Escribir "xxxxxxxxxxx" (sin resultados) | Aparece el mensaje `No se encontraron productos para "xxxxxxxxxxx".`
| TC-05 | Escribir rápido varias letras seguidas | Solo se lanza una petición al parar de escribir (debounce 300 ms), no se rompe el estado
| TC-06 | Cambiar búsqueda antes de que llegue la respuesta | La petición anterior se cancela (`AbortController`), nunca se muestran resultados desordenados
| TC-07 | Pulsar "Ver destacados" durante una búsqueda | El input se vacía, el botón desaparece y la galería vuelve a los 6 destacados
| TC-08 | Borrar todo el texto del input manualmente | Mismo efecto que TC-07
| TC-09 | Buscar término con más de 6 resultados | Aparece la paginación debajo de la galería; al pulsar página 2 carga la siguiente sin recargar
| TC-10 | API no disponible (XAMPP parado) | Aparece el mensaje "No se pudieron cargar los productos."

## Archivos implicados

- `js/tienda/productos.js` — lógica AJAX, buscador, paginación, retorno a destacados
- `pages/tienda/tienda.php` — HTML del buscador y contenedor de paginación
- `src/controllers/ProductoController.php` — gestiona `?q=`, `?destacados=1`, `?page=`
- `src/models/ProductoModel.php` — SQL con LIKE, LIMIT/OFFSET y conteos

## Observaciones

Todo lo que hemos probado aquí es lo que ve el usuario en la web. Las pruebas de la API con Postman y los detalles de backend están documentados en el módulo DWES (`docs/dwes/pruebas-postman.md`).
