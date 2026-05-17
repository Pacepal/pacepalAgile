# Modelo relacional — PacePal

Resumen del modelo: tablas y relaciones necesarias para soportar usuarios, actividades, rutas, tienda y pedidos.

---

## Tablas principales

- **usuarios**: id, nombre, email, password, dni, rol
- **categorias**: id, nombre
- **articulos**: id, nombre, descripcion, precio, stock, id_categoria
- **rutas**: id, nombre, descripcion, distancia, dificultad
- **actividades**: id, id_ruta, id_usuario_creador, fecha, ritmo_min, ritmo_max, nivel_min, nivel_max
- **participaciones**: id_usuario, id_actividad
- **pedidos**: id, id_usuario, fecha, total
- **detalle_pedido**: id_pedido, id_articulo, cantidad, precio_unitario
- **reportes**: id, id_usuario, tipo, descripcion, fecha

---

## Relaciones clave

- Un usuario puede tener muchos pedidos y participar en muchas actividades.
- Una actividad pertenece a una ruta y tiene un usuario creador.
- Un pedido puede tener varios artículos (detalle_pedido).
- Un reporte lo crea un usuario y puede estar asociado a una actividad, ruta o pedido.

---

## Notas

Scripts SQL: `/db/schema.sql` y `/db/seed.sql`. Este documento enumera tablas y relaciones; para restricciones y DDL ver `schema.sql`.
