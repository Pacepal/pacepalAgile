# Desarrollo Web en Entorno Cliente (DWEC)

Este documento recoge todo lo que hemos trabajado en la parte de cliente de PacePal, desde la validación de formularios hasta la integración con la API y la gestión dinámica de la web. Aquí explicamos cómo hemos organizado el JavaScript, por qué lo hemos hecho así y qué sentido tiene dentro del proyecto.

## ¿Cómo hemos planteado la parte de cliente?

Desde el principio, nos propusimos que todo el contenido dinámico de PacePal se generase con JavaScript puro, usando solo `document.createElement` y `appendChild`. Así evitamos problemas de seguridad y tenemos el control total del DOM. No usamos `innerHTML` para nada importante.

La estructura de los scripts está pensada para que cada página tenga su propio módulo JS, y las validaciones de formularios estén centralizadas. Todo lo que tiene que ver con interacción de usuario, navegación, renderizado de listas, tienda, rutas, actividades y carrito, lo hemos hecho en JS modular y sin frameworks.

---

## Sprint 1 — Formularios y validaciones

En el primer sprint nos centramos en montar los formularios de registro y login, con validaciones en tiempo real y lógica condicional (por ejemplo, el campo de tarjeta solo aparece si hace falta). Todo el feedback de errores y aciertos se muestra al momento, y las reglas de validación están en un archivo aparte para poder reutilizarlas.

Documentos clave:

- [01 - Formularios de login y registro](sprint-1/01-formularios-login-register.md)
- [02 - Validaciones JavaScript](sprint-1/02-validaciones-js.md)
- [03 - Integración con DIW](sprint-1/03-integracion-con-diw.md)
- [04 - Preparación del backend desde cliente](sprint-1/04-preparacion-backend.md)
- [05 - Tests funcionales del Sprint 1](sprint-1/05-tests-funcionales.md)

---

## Sprint 2 — Contenido dinámico y consumo de API

En el segundo sprint dimos el salto a que toda la web funcionase de forma dinámica: la tienda, los listados de rutas y actividades, el carrito, los detalles de cada elemento y la gestión de sesión. Todo esto se conecta con la API REST hecha en PHP, así que cada acción del usuario (añadir al carrito, buscar, filtrar, apuntarse a una actividad, etc.) se hace con peticiones `fetch` y respuestas en JSON.

Cada funcionalidad tiene su propio archivo JS y la lógica está separada por páginas. Así, si hay que cambiar algo, solo tocamos el módulo correspondiente. Además, la navbar y el estado de usuario se actualizan en tiempo real según la sesión.

Documentos clave:

- [01 - Tienda dinámica](sprint-2/01-tienda-dinamica.md)
- [02 - Buscador de productos](sprint-2/02-buscador-ajax.md)
- [03 - Carrito dinámico](sprint-2/03-carrito-dinamico.md)
- [04 - Listados de rutas y actividades](sprint-2/04-listados-rutas-actividades.md)
- [05 - Navbar dinámica y gestión de sesión](sprint-2/05-navbar-dinamica-y-sesion.md)
- [06 - Páginas de detalle dinámicas](sprint-2/06-detalles-dinamicos.md)
- [07 - Integración API: DWEC–DWES](sprint-2/07-integracion-api-dwec-dwes.md)
- [08 - Tests funcionales del Sprint 2](sprint-2/08-tests-funcionales-sprint-2.md)
