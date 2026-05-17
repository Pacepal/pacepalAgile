# Anexo 9.6 — Historias de usuario y backlog

Este anexo incorpora el backlog completo del proyecto en formato resumido y defendible.
Como fuente de trabajo se utilizó el documento interno `docs/02-agile/02-historias-usuario-v1.md`,
elaborado en el Sprint 0.

El backlog incluye todas las historias de usuario definidas, con sus criterios de
prioridad, estimación y sprint de implementación. Las historias marcadas como
"backlog evolutivo" no se implementaron en el ciclo actual del proyecto y quedan
como propuesta de continuación.

---

## Criterios de prioridad y estimación

**Prioridad:** Alta · Media · Baja

**Estimación (Story Points):**

- 1 — muy pequeño
- 2 — pequeño
- 3 — medio
- 5 — grande
- 8 — muy grande (se divide si se puede)

---

## Backlog completo

| ID    | Historia                               | Validación (resumen)                                                                        | Valor                                         | Prioridad | Estimación | Sprint / Materia                   |
| ----- | -------------------------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------- | --------- | ---------- | ---------------------------------- |
| HU-01 | Registro con DNI                       | Formulario completo con DNI y email válidos, sin duplicados, alta correcta                  | Evita cuentas falsas; mejora convivencia      | Alta      | 5          | Sprint 1-2 / DWEC-DWES             |
| HU-02 | Inicio de sesión                       | Login correcto, error controlado sin revelar datos internos, sesión persistente al recargar | Base del control y la seguridad               | Alta      | 3          | Sprint 1-2 / DWEC-DWES             |
| HU-03 | Cerrar sesión                          | Cierre visible, sesión eliminada en servidor, bloqueo de pantallas protegidas               | Control básico de seguridad                   | Alta      | 2          | Sprint 1-2 / DWEC-DWES             |
| HU-04 | Roles y control de acceso              | Restricción de admin y endpoints por rol/sesión; error controlado si no autorizado          | Protección de funciones sensibles             | Alta      | 5          | Sprint 2 / DWES                    |
| HU-05 | Ver listado de actividades             | Listado con datos clave (ruta, fecha, nivel, ritmo, plazas) y acceso a detalle              | Pantalla principal del producto               | Alta      | 5          | Sprint 2-3 / DWEC                  |
| HU-06 | Filtrar actividades por nivel y ritmo  | Filtros aplicables, opción de limpiar, vacío controlado                                     | Mejora el ajuste usuario-actividad            | Alta      | 3          | Sprint 2 / DWEC                    |
| HU-07 | Filtrar actividades por fecha y plazas | Filtro temporal y de disponibilidad; plazas coherentes con apuntados                        | Mayor utilidad del listado                    | Media     | 3          | Sprint 2 / DWEC                    |
| HU-08 | Paginación de actividades              | Navegación por páginas sin romper filtros activos                                           | Escalabilidad del listado                     | Media     | 3          | Sprint 2 / DWEC                    |
| HU-09 | Buscador AJAX de actividades           | Búsqueda sin recarga; estado vacío sin ambigüedad                                           | Mejor experiencia de uso                      | Alta      | 5          | Sprint 2 / DWEC                    |
| HU-10 | Detalle de actividad                   | Datos completos, estado de sesión y acciones coherentes (unirse, abandonar, eliminar)       | Decisión informada antes de unirse            | Alta      | 3          | Sprint 2 / DWEC                    |
| HU-11 | Crear actividad sobre ruta existente   | Formulario validado; actividad visible en listado tras el alta                              | Activa la comunidad; diferencia PacePal       | Alta      | 5          | Sprint 2-3 / DWEC-DWES             |
| HU-12 | Unirse a actividad                     | Requiere sesión; controla plazas disponibles y duplicados                                   | Función central de comunidad                  | Alta      | 5          | Sprint 2-3 / DWEC-DWES             |
| HU-13 | Salir de actividad                     | Libera plazas y actualiza el estado correctamente                                           | Mantiene consistencia del sistema             | Alta      | 3          | Sprint 2-3 / DWEC-DWES             |
| HU-14 | Mis actividades                        | Separación entre actividades creadas y actividades en las que se participa                  | Orden personal del usuario                    | Media     | 3          | Sprint 3 / DWEC                    |
| HU-15 | Ver catálogo de rutas                  | Listado y detalle sin posibilidad de crear rutas nuevas                                     | Soporte para planificar actividades           | Media     | 3          | Sprint 2 / DWEC-DWES               |
| HU-16 | Ver detalle de ruta                    | Distancia, dificultad, zona e imagen legibles                                               | Reduce incertidumbre antes de crear actividad | Media     | 2          | Sprint 2 / DWEC                    |
| HU-17 | Reportar incidencia                    | Reporte con motivo, sesión obligatoria y trazabilidad en la BD                              | Mejora la convivencia en la comunidad         | Alta      | 5          | Sprint 2-3 / DWES                  |
| HU-18 | Avisos acumulables                     | Contador e historial de avisos internos del sistema                                         | Control preventivo de comportamiento          | Media     | 5          | Sprint 2-3 / DWES                  |
| HU-19 | Panel admin — reportes                 | Gestión de reportes por estados y nota de moderación                                        | Moderación efectiva y trazable                | Media     | 5          | Sprint 3 / DWES                    |
| HU-20 | Acciones de moderación                 | Advertir, limitar o bloquear usuario con historial registrado                               | Seguridad operacional de la plataforma        | Media     | 5          | Sprint 3 / DWES                    |
| HU-21 | Tienda de zapatillas sostenibles       | Catálogo con datos e imagen; carga desde API y BD                                           | Alineación con la propuesta sostenible        | Alta      | 5          | Sprint 2-3 / DWEC-DWES             |
| HU-22 | Detalle de producto                    | Información completa, materiales y botón de compra                                          | Compra informada y consciente                 | Media     | 3          | Sprint 2-3 / DWEC                  |
| HU-23 | Añadir y quitar del carrito            | Alta y baja de productos con persistencia de estado                                         | Base del flujo de compra                      | Alta      | 5          | Sprint 2-3 / DWEC                  |
| HU-24 | Contador y total del carrito           | Recuento visible; cantidades y total actualizados en tiempo real                            | Transparencia de la compra                    | Alta      | 5          | Sprint 2-3 / DWEC                  |
| HU-25 | Confirmar pedido                       | Login requerido; creación de pedido y vaciado del carrito                                   | Cierre funcional de la tienda                 | Media     | 5          | Sprint 2-3 / DWEC-DWES             |
| HU-26 | Puntos ecológicos y canje              | Saldo, canje y trazabilidad de puntos por compras                                           | Incentiva hábitos sostenibles                 | Baja      | 8          | Backlog evolutivo / Sostenibilidad |
| HU-27 | API REST rutas y actividades           | Endpoints JSON con errores controlados; validación de parámetros                            | Integración cliente-servidor                  | Alta      | 8          | Sprint 2-3 / DWES                  |
| HU-28 | API REST usuarios, reportes y tienda   | Registro, login, reportes, pedidos y control de rol por endpoint                            | Cierra el circuito funcional                  | Alta      | 8          | Sprint 2-3 / DWES                  |
| HU-29 | Documentación API + Postman            | Endpoints documentados y colección de pruebas ejecutable                                    | Evidencia técnica trazable                    | Alta      | 5          | Sprint 2-3 / DWES                  |
| HU-30 | Accesibilidad base                     | Navegación por teclado, foco visible, labels, errores y contraste                           | Calidad de uso y cumplimiento                 | Alta      | 3          | Sprint 1-2 / DIW                   |

---

## Resumen por prioridad

| Prioridad | Historias                                                               | Story Points totales |
| --------- | ----------------------------------------------------------------------- | -------------------- |
| Alta      | HU-01 a HU-05, HU-09 a HU-13, HU-17, HU-21, HU-23, HU-24, HU-27 a HU-30 | ~97                  |
| Media     | HU-06 a HU-08, HU-14 a HU-16, HU-18 a HU-20, HU-22, HU-25               | ~46                  |
| Baja      | HU-26                                                                   | 8                    |

> El backlog se gestionó durante el proyecto como lista viva: algunas historias se
> partieron en tareas más pequeñas durante la planificación del sprint, y otras se
> repriorizaron entre sprints en función de la carga de trabajo y las materias implicadas.
> Las historias del bloque "backlog evolutivo" quedan como propuesta de continuación del
> proyecto.
