# Portada

[PENDIENTE DE APORTAR: nombre del centro]

- Ciclo formativo: Desarrollo de Aplicaciones Web (2.º DAW)
- Módulo / Proyecto: Proyecto Agile Intermodular
- Título del proyecto: PacePal
- Aplicación: PacePal
- Empresa / equipo: Treecore Studio
- Autoría verificada en memoria beta: Pablo Sevillano Aparicio y Alejandro Pacheco
- Tutor/a: [PENDIENTE DE APORTAR]
- Fecha de entrega: [PENDIENTE DE APORTAR]

[INSERTAR FIGURA: logotipo principal de PacePal — ruta sugerida: `docs/03-diw/media/logo.png`]

# Resumen y Abstract

<!-- Fuente: README.md, docs/01-requisitos/01-definicion-proyecto.md, docs/requisitos-normalizados/01_resumen_global_proyecto.md, js/App.jsx, src/api/index.php -->

## Resumen

PacePal es una aplicación web desarrollada como proyecto Agile Intermodular de 2.º de DAW. Su objetivo es facilitar que una persona pueda descubrir rutas ya registradas en el sistema, crear actividades deportivas sobre esas rutas, unirse a planes organizados por otros usuarios y gestionar una pequeña tienda de productos vinculados al proyecto. La aplicación integra trabajo de diseño de interfaces, desarrollo cliente, desarrollo servidor, despliegue y sostenibilidad dentro de un único repositorio y una única propuesta de producto.

El proyecto ha evolucionado por sprints. En la primera fase se definieron la identidad visual, la landing y los formularios de registro y login. En la segunda se añadieron carrito, buscador AJAX, listados dinámicos, base de datos, sesiones, roles y API REST en PHP. En la tercera se migró el cliente a React con Vite, se mantuvo la conexión con la API real en local y se documentó un fallback demo para GitHub Pages, además de añadir vídeo integrado en la tienda y microinteracciones visuales. También se documentó el despliegue local con XAMPP y la validación del entorno mediante capturas técnicas.

A nivel técnico, el proyecto utiliza HTML5, CSS3, Bootstrap, Bootstrap Icons, JavaScript, React/JSX, PHP, PDO, JSON, MySQL/MariaDB, XAMPP, GitHub y Postman. La documentación existente en el repositorio permite defender la mayor parte de la memoria final con evidencias reales. Donde no se han localizado diagramas o capturas concretas, este borrador lo marca expresamente como pendiente de aportar.

## Abstract

PacePal is a web application built as an intermodular Agile project for the second year of the DAW programme. Its goal is to help users discover predefined routes, create group activities on those routes, join community plans and interact with a small product catalogue connected to the project concept. The application combines interface design, client-side development, server-side development, deployment and sustainability within a single repository.

The project was developed incrementally through sprints. Sprint 1 focused on the visual identity, landing page and authentication forms. Sprint 2 added AJAX search, cart logic, dynamic listings, a relational database, PHP sessions, roles and a REST API. Sprint 3 migrated the client to React with Vite, kept the real PHP API for local execution, documented a demo fallback for GitHub Pages, and added video-based UX improvements plus local deployment evidence with XAMPP.

The current repository provides enough real evidence to prepare a technical report that is reviewable and defendable. Missing diagrams or final captures are explicitly marked as pending instead of being invented.

# Índice automático

[PENDIENTE DE APORTAR: generar índice automático al maquetar la versión final en ODT/DOCX/PDF.]

# Índice de figuras / ilustraciones

[PENDIENTE DE APORTAR: generar índice automático de figuras al maquetar la versión final. Ver propuesta de figuras en `docs/documentacion-final/04_indice_figuras_tablas_evidencias.md`.]

# Índice de tablas si procede

[PENDIENTE DE APORTAR: generar índice automático de tablas al maquetar la versión final.]

# 1. INTRODUCCIÓN

## 1.1. Objetivos

<!-- Fuente: docs/01-requisitos/01-definicion-proyecto.md, docs/02-agile/02-historias-usuario-v1.md, README.md -->

PacePal nace como una aplicación web orientada a actividades deportivas en comunidad. La idea principal es que las rutas no las cree el usuario final, sino que ya existan en el sistema, y que lo que se organice sobre ellas sean actividades concretas con fecha, hora, nivel y plazas. Esto permite que el producto se centre en la coordinación del grupo, la constancia y la convivencia, en lugar de convertirse en un simple listado abierto de recorridos sin control.

### Objetivo general

Desarrollar una aplicación web intermodular, funcional y documentada, capaz de gestionar rutas, actividades, comunidad, sesiones de usuario y una tienda básica, integrando frontend, backend, base de datos, pruebas y despliegue dentro de una misma solución defendible para un proyecto de 2.º DAW.

### Objetivos específicos

- Permitir la navegación pública por el contenido principal del proyecto: inicio, actividades, rutas, tienda, contacto, política de cookies y sección About.
- Implementar registro y login con validaciones, persistencia en base de datos y control de sesiones.
- Diferenciar permisos de invitado, usuario registrado y administrador.
- Permitir que un usuario cree actividades sobre rutas existentes y que otros usuarios se unan o abandonen esas actividades.
- Ofrecer un catálogo de productos con detalle, búsqueda, carrito y generación de pedidos.
- Construir una API REST en PHP con respuestas JSON y acceso a base de datos mediante PDO.
- Mantener una experiencia responsive y razonablemente accesible, documentando las revisiones realizadas.
- Dejar el proyecto preparado para defensa técnica con pruebas funcionales, evidencias visuales y despliegue local documentado.

## 1.2. Motivación

<!-- Fuente: docs/01-requisitos/01-definicion-proyecto.md, docs/03-diw/sprint-1/01-tendencias-competencia.md, docs/07-sostenibilidad/Idea de negocio sostenible Alejandro Pacheco y Pablo Sevillano.pdf -->

La motivación de PacePal combina tres necesidades que aparecen de forma clara en la documentación inicial del proyecto. La primera es la dificultad de mantener constancia individual cuando la actividad física depende solo de la iniciativa personal. La segunda es la falta de espacios intermedios entre las aplicaciones puramente deportivas y los grupos informales sin estructura. La tercera es el interés del equipo por dar al producto un enfoque sostenible real, no solo decorativo, incorporando una línea de tienda y comunicación relacionada con materiales reciclados y hábitos responsables.

El proyecto también responde a una motivación académica clara: construir una única aplicación en la que DIW, DWEC, DWES, despliegue y sostenibilidad no trabajen como entregas aisladas, sino como partes de un producto común. Por eso la memoria debe reflejar no solo lo implementado, sino también cómo se ha coordinado el trabajo por sprints y qué evidencias reales hay detrás de cada bloque.

# 2. TECNOLOGÍAS Y HERRAMIENTAS UTILIZADAS

<!-- Fuente: package.json, vite.config.js, index.html, src/api/index.php, db/schema.sql, README.md, docs/04-dwec/sprint-3/cliente-react-github-pages.md -->

| Tecnología / herramienta                     | Evidencia en el repositorio                                                                                                        | Uso real en PacePal                                                                                                    |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| HTML5                                        | `index.html`, plantillas legacy y estructura semántica revisada en DIW                                                             | Estructura base de la aplicación, semántica, formularios y soporte de accesibilidad                                    |
| CSS3                                         | `css/`, `css/react.css`, guía de estilos DIW                                                                                       | Maquetación responsive, identidad visual, estados, microinteracciones y ajustes por sección                            |
| Bootstrap 5.3.3                              | CDN en `index.html` y `scripts/vite-index.template.html`                                                                           | Utilidades de layout, tablas, espaciado y parte del estilo de formularios y alertas                                    |
| Bootstrap Icons 1.11.3                       | CDN en `index.html` y guía de estilos                                                                                              | Iconografía de interfaz y apoyo visual en varios bloques                                                               |
| JavaScript                                   | `js/`, formularios, tienda legacy, hooks y servicios                                                                               | Validaciones, lógica cliente, peticiones AJAX/fetch, SPA hash-routing y manejo de estado                               |
| React 18.3.1                                 | `package.json`, `js/App.jsx`, `pages/`, `js/components/`, `js/hooks/`                                                              | Cliente principal del Sprint 3: composición de pantallas, estado y renderizado del escaparate React                    |
| Vite 5.4.10                                  | `package.json`, `vite.config.js`, `scripts/`                                                                                       | Entorno de desarrollo, build y preview del cliente React                                                               |
| PHP                                          | `src/api/index.php`, `src/controllers/`                                                                                            | Backend de la API REST, gestión de sesiones, reglas de negocio y acceso al servidor                                    |
| PDO                                          | `docs/05-dwes/sprint-2/arquitectura-backend.md`, `src/models/`, `src/config/database.php`                                          | Acceso a MySQL/MariaDB con consultas preparadas                                                                        |
| JSON                                         | API en `src/api/index.php`, colección Postman, ficheros `js/data/*.json`                                                           | Formato de intercambio entre frontend y backend; fallback demo cuando no hay API                                       |
| MySQL / MariaDB                              | `db/schema.sql`, `db/pacepal.sql`, `db/seed.sql`                                                                                   | Persistencia de usuarios, artículos, rutas, actividades, pedidos, participaciones y reportes                           |
| XAMPP                                        | `docs/despliegue/INSTALACION_LOCAL_XAMPP.md`, evidencias de despliegue Sprint 3                                                    | Entorno local con Apache, PHP, MySQL/MariaDB y phpMyAdmin                                                              |
| Git y GitHub                                 | estructura del repo, ramas y evidencias de workflow en `tests/react-sprint-3/README.md`                                            | Versionado, colaboración y publicación del cliente React                                                               |
| GitHub Pages                                 | `docs/04-dwec/sprint-3/cliente-react-github-pages.md`, `docs/evidencias/despliegue/sprint-3/08-github-pages-publicacion-https.png` | Publicación estática del cliente React con fallback demo                                                               |
| Postman                                      | `tests/postman/pacepal.postman_collection.json`, `docs/05-dwes/sprint-2/pruebas-postman.md`                                        | Pruebas manuales y semi-automatizadas de la API REST                                                                   |
| Selenium WebDriver                           | `tests/selenium/`                                                                                                                  | Automatización puntual de pruebas funcionales de registro y buscador                                                   |
| VS Code                                      | `docs/01-requisitos/01-definicion-proyecto.md`                                                                                     | Entorno de desarrollo citado y coherente con la estructura del repositorio                                             |
| Herramienta de prototipado (`Figma o Canva`) | citada en `docs/01-requisitos/01-definicion-proyecto.md`; evidencias exportadas en `docs/03-diw/wireframes/`                       | La evidencia verificable actual son los wireframes exportados PNG; el archivo fuente de prototipado no está en el repo |
| Lighthouse, WAVE y WCAG Contrast Checker     | `docs/03-diw/sprint-2/01-accesibilidad-wcag.md`, `docs/evidencias/diw/sprint-2/`                                                   | Auditoría formal de accesibilidad de la landing                                                                        |

### Observación técnica importante sobre la estructura actual

Parte de la documentación histórica de Sprint 3 habla de una carpeta `frontend-react/`. Sin embargo, la rama actual `sprint-3-react-jsx` integra el cliente React en la raíz del proyecto con `js/`, `pages/`, `src/`, `assets/` y Vite. En esta memoria se prioriza la estructura real del repositorio actual y se interpreta `frontend-react/...` como una referencia histórica de transición, no como la estructura vigente.

# 3. ESTIMACIÓN DE RECURSOS Y PLANIFICACIÓN

<!-- Fuente: docs/02-agile/01-scrum-base.md, docs/02-agile/roadmap-global.md, docs/02-agile/02-historias-usuario-v1.md, docs/evidencias/01-sprint0/ -->

PacePal se ha organizado con un enfoque Scrum educativo. Eso no significa reproducir un marco empresarial completo, sino trabajar con una cadencia sencilla, roles claros, backlog, revisión por sprint y una política de evidencias desde el inicio. En la documentación de Sprint 0 se dejan fijados Product Owner, Scrum Master y equipo de desarrollo, así como la necesidad de que cada incremento tenga pruebas, capturas y trazabilidad suficiente para defensa.

La planificación real del proyecto se puede resumir en cinco bloques: arranque y definición inicial, diseño visual e identidad, ampliación funcional cliente-servidor, migración del cliente a React con mejoras UX y validación de despliegue. Los recursos empleados han sido principalmente software ya disponible en el entorno del aula o en el equipo local: VS Code, Git/GitHub, XAMPP, Node.js, Vite, Bootstrap, Postman y navegadores de prueba.

## Recursos principales

| Recurso                       | Uso dentro del proyecto                                                 | Evidencia                                                    |
| ----------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------ |
| Equipo de desarrollo          | Implementación de diseño, cliente, servidor, despliegue y documentación | `docs/02-agile/01-scrum-base.md`                             |
| Repositorio GitHub            | Versionado y organización del trabajo por sprints                       | estructura del repo y `tests/react-sprint-3/README.md`       |
| XAMPP                         | Ejecución local de Apache, PHP y MySQL/MariaDB                          | `docs/despliegue/INSTALACION_LOCAL_XAMPP.md`                 |
| Vite + Node.js                | Desarrollo y build del cliente React                                    | `package.json`, `vite.config.js`                             |
| phpMyAdmin                    | Importación y validación de la base de datos                            | evidencias de despliegue Sprint 3                            |
| Postman                       | Pruebas de endpoints de la API                                          | `tests/postman/`, `docs/05-dwes/sprint-2/pruebas-postman.md` |
| Herramientas de accesibilidad | Auditoría formal de landing                                             | `docs/evidencias/diw/sprint-2/`                              |

## 3.1. Diagrama de Gantt

<!-- Fuente: docs/02-agile/roadmap-global.md y docs/requisitos-normalizados/07_sprint_1_requisitos.md, 08_sprint_2_requisitos.md, 09_sprint_3_requisitos.md -->

[PENDIENTE DE APORTAR: si se quiere una figura Gantt exportada, conviene generarla a partir de esta tabla base y añadirla como imagen final.]

| Fase / tarea principal                       | Sprint 0 | Sprint 1 | Sprint 2 | Sprint 3 | Cierre |
| -------------------------------------------- | -------- | -------- | -------- | -------- | ------ |
| Definición del proyecto y alcance            | X        |          |          |          |        |
| Scrum base, backlog y evidencias             | X        |          |          |          |        |
| Investigación de competencia y tendencias    |          | X        |          |          |        |
| Guía de estilos y wireframes                 |          | X        | X        |          |        |
| Landing page y formularios iniciales         |          | X        |          |          |        |
| Aplicación completa responsive               |          |          | X        |          |        |
| Accesibilidad y usabilidad                   |          |          | X        | X        |        |
| API REST, base de datos, sesiones y roles    |          |          | X        | X        |        |
| Buscador AJAX, carrito y listados dinámicos  |          |          | X        | X        |        |
| Migración del cliente a React                |          |          |          | X        |        |
| Vídeo en tienda y microinteracciones         |          |          |          | X        |        |
| Validación de despliegue local y publicación |          |          |          | X        | X      |
| Consolidación documental final               |          |          |          | X        | X      |

# 4. DESARROLLO DE LA PRÁCTICA

## 4.1. Requisitos

### Requerimientos funcionales

<!-- Fuente: docs/02-agile/02-historias-usuario-v1.md, docs/05-dwes/sprint-2/roles-acceso.md, js/App.jsx, src/api/index.php -->

| ID    | Requerimiento funcional real                                                                                                                                 | Evidencia principal                                                                                             |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| RF-01 | El sistema debe permitir navegar por inicio, actividades, rutas, tienda, about, contacto y política de cookies sin necesidad de iniciar sesión.              | `js/App.jsx`, `README.md`                                                                                       |
| RF-02 | El sistema debe permitir registrar usuarios con nombre, email, contraseña, confirmación y DNI, además de otros campos opcionales.                            | `docs/04-dwec/sprint-1/01-formularios-login-register.md`, `src/api/index.php`                                   |
| RF-03 | El sistema debe permitir iniciar y cerrar sesión manteniendo el estado del usuario.                                                                          | `docs/02-agile/02-historias-usuario-v1.md`, `src/api/index.php`, `tests/tests.md`                               |
| RF-04 | El sistema debe diferenciar invitado, usuario y administrador y bloquear el acceso a acciones sensibles según el rol.                                        | `docs/05-dwes/sprint-2/roles-acceso.md`, `src/api/index.php`                                                    |
| RF-05 | El usuario debe poder consultar el listado de actividades y acceder a su detalle.                                                                            | `js/App.jsx`, `pages/actividades/`, `tests/funcionales/08-actividades.md`                                       |
| RF-06 | El usuario autenticado debe poder crear una actividad sobre una ruta existente.                                                                              | `pages/actividades/CreateActivityPage.jsx`, `src/api/index.php`                                                 |
| RF-07 | El usuario autenticado debe poder unirse o abandonar una actividad.                                                                                          | `pages/actividades/ActivityDetailPage.jsx`, `src/api/index.php`                                                 |
| RF-08 | El sistema debe mostrar el catálogo de rutas y el detalle de cada ruta.                                                                                      | `pages/rutas/`, `src/api/index.php`                                                                             |
| RF-09 | El sistema debe mostrar un catálogo de productos, permitir búsquedas y acceder al detalle de producto.                                                       | `pages/tienda/ShopPage.jsx`, `pages/tienda/ProductDetailPage.jsx`, `tests/funcionales/06-buscador-productos.md` |
| RF-10 | El usuario debe poder añadir productos al carrito, cambiar cantidades, eliminar artículos y generar un pedido.                                               | `tests/react-sprint-3/07-carrito.md`, `src/api/index.php`                                                       |
| RF-11 | El usuario autenticado debe poder consultar su perfil y su historial de pedidos.                                                                             | `pages/usuario/ProfilePage.jsx`, `tests/funcionales/09-perfil.md`                                               |
| RF-12 | El administrador debe poder gestionar usuarios, productos, rutas, actividades, pedidos y reportes.                                                           | `pages/admin/AdminPage.jsx`, `tests/funcionales/10-admin.md`                                                    |
| RF-13 | La aplicación debe exponer una API REST en PHP con respuestas JSON para productos, rutas, actividades, pedidos, sesión, usuarios y cookies.                  | `src/api/index.php`, `docs/05-dwes/sprint-2/endpoints-api.md`                                                   |
| RF-14 | El sistema debe registrar la base de datos de usuarios, rutas, actividades, pedidos, artículos, participaciones y reportes.                                  | `db/schema.sql`, `db/pacepal.sql`                                                                               |
| RF-15 | El sistema debe gestionar el consentimiento de cookies y mantener evidencias visibles en local y en fallback demo publicado.                                 | `src/api/index.php`, `docs/04-dwec/sprint-3/decision-fallback-github-pages.md`                                  |
| RF-16 | El proyecto debe poder ejecutarse en local con XAMPP y, en el caso del cliente React, publicarse también en GitHub Pages con comportamiento de demostración. | `docs/despliegue/INSTALACION_LOCAL_XAMPP.md`, `docs/04-dwec/sprint-3/cliente-react-github-pages.md`             |

### Requerimientos no funcionales

<!-- Fuente: docs/03-diw/sprint-2/01-accesibilidad-wcag.md, docs/03-diw/sprint-2/05-inspeccion-usabilidad.md, package.json, vite.config.js, src/api/index.php, docs/despliegue/react-api-bd-xampp.md -->

| ID     | Requerimiento no funcional                                                                              | Justificación / evidencia                                                                       |
| ------ | ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| RNF-01 | La interfaz debe ser responsive y usable en móvil y escritorio.                                         | Wireframes desktop/mobile, `css/estilos.css`, `css/react.css` y documentación DIW de responsive |
| RNF-02 | La landing debe cumplir como mínimo WCAG 2.1 nivel A en el alcance auditado.                            | `docs/03-diw/sprint-2/01-accesibilidad-wcag.md`                                                 |
| RNF-03 | Los formularios deben usar labels, mensajes de error y feedback comprensible.                           | `pages/formulario/ContactPage.jsx`, documentación DWEC Sprint 1                                 |
| RNF-04 | El código cliente debe estar modularizado por páginas, hooks, servicios y componentes.                  | `js/`, `pages/`, `js/components/`, `js/hooks/`                                                  |
| RNF-05 | El backend debe separar router, controladores, modelos y configuración.                                 | `src/api/`, `src/controllers/`, `src/models/`, `src/config/`                                    |
| RNF-06 | Las consultas a base de datos deben hacerse mediante PDO y prepared statements.                         | documentación DWES y estructura real de modelos                                                 |
| RNF-07 | La aplicación debe mostrar errores controlados cuando la API o la conexión no estén disponibles.        | `js/services/api.js`, pruebas React y despliegue                                                |
| RNF-08 | El entorno local debe ser reproducible con XAMPP, phpMyAdmin y Node.js.                                 | `docs/despliegue/INSTALACION_LOCAL_XAMPP.md`                                                    |
| RNF-09 | El cliente React debe compilar correctamente con Vite.                                                  | `package.json`, build validado en documentación de pruebas                                      |
| RNF-10 | Las imágenes y recursos visuales deben estar optimizados para web y reutilizarse de forma coherente.    | DIW Sprint 2, `img/`, `docs/04-dwec/sprint-3/ficha-producto-rediseno-imagenes.md`               |
| RNF-11 | El proyecto debe mantener trazabilidad documental entre requisitos, implementación, prueba y evidencia. | `docs/requisitos-normalizados/`, `docs/evidencias/`, `tests/`                                   |

### Diagrama de casos de uso

<!-- Fuente: docs/02-agile/02-historias-usuario-v1.md y docs/05-dwes/sprint-2/roles-acceso.md -->

Tras revisar el repositorio y la documentación beta (`docs/pacepal.pdf`, `docs/pacepalDocumenacion.pdf` y `docs/pacepal.odt`), no se ha localizado una figura histórica final ya exportada con este diagrama. Sí existe, en cambio, base documental suficiente para reconstruirlo con trazabilidad desde historias de usuario, roles y rutas reales del sistema.

[INSERTAR FIGURA: diagrama de casos de uso reconstruido de PacePal — ruta sugerida: `docs/documentacion-final/figuras/diagrama-casos-uso-pacepal.mmd`]

| Actor              | Casos de uso principales                                                                                                                    |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Invitado           | Ver inicio, ver rutas, ver actividades, ver tienda, consultar detalle, abrir login y registro                                               |
| Usuario registrado | Iniciar sesión, cerrar sesión, crear actividad, unirse/salir de actividad, comprar, ver perfil, consultar pedidos, gestionar consentimiento |
| Administrador      | Gestionar usuarios, productos, rutas, actividades, pedidos y reportes                                                                       |
| Sistema            | Validar sesión, responder API, persistir datos, calcular carrito y pedidos, controlar roles                                                 |

### Diagrama de clases

<!-- Fuente: docs/05-dwes/sprint-2/arquitectura-backend.md, src/controllers/, src/models/, src/api/index.php -->

La misma búsqueda histórica confirma que tampoco se ha localizado un UML de clases final ya exportado. Para no inventar clases inexistentes ni dejar el requisito como un falso pendiente, se ha preparado un diagrama de clases simplificado basado en las clases PHP reales del backend y en sus relaciones principales con el dominio persistido.

[INSERTAR FIGURA: diagrama de clases simplificado de PacePal — ruta sugerida: `docs/documentacion-final/figuras/diagrama-clases-pacepal.mmd`]

[INSERTAR FIGURA: diagrama de componentes cliente-servidor de PacePal — ruta sugerida: `docs/documentacion-final/figuras/diagrama-componentes-pacepal.mmd`]

| Clase o bloque representado | Responsabilidad principal                                                  | Evidencia real                                      |
| --------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------- |
| Router API                  | Resolver método HTTP + ruta y delegar en controladores                     | `src/api/index.php`                                 |
| Controladores               | Validación, reglas de negocio, control de sesión/rol y composición de JSON | `src/controllers/`                                  |
| Modelos                     | Consultas a base de datos con PDO y persistencia de entidades              | `src/models/`                                       |
| Configuración               | Sesión, conexión de base de datos y parámetros de entorno                  | `src/config/`                                       |
| Dominio persistido          | Usuarios, rutas, actividades, artículos, pedidos y reportes del sistema    | `db/schema.sql`                                     |
| Cliente React               | Páginas, componentes, hooks y servicios que consumen la API                | `js/App.jsx`, `pages/`, `js/hooks/`, `js/services/` |

### Modelo conceptual de datos

<!-- Fuente: db/schema.sql, docs/05-dwes/sprint-2/modelo-relacional.md, docs/evidencias/dwes/diagramaER.png -->

[INSERTAR FIGURA: diagrama entidad-relación de PacePal — ruta sugerida: `docs/evidencias/dwes/diagramaER.png`]

El modelo de datos de PacePal está organizado alrededor de tres bloques funcionales: comunidad, actividades/rutas y tienda/pedidos. A eso se añade el bloque de moderación y reportes.

| Entidad           | Función dentro del sistema                                         | Relaciones clave                                                          |
| ----------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| `usuarios`        | Guarda la identidad, credenciales, rol y datos básicos del usuario | Se relaciona con actividades creadas, pedidos, participaciones y reportes |
| `rutas`           | Define los recorridos disponibles en el sistema                    | Se relaciona con actividades                                              |
| `actividades`     | Representa eventos concretos sobre rutas existentes                | Se relaciona con rutas, usuario creador y participaciones                 |
| `participaciones` | Une usuarios con actividades concretas                             | Relación N:M entre usuarios y actividades                                 |
| `categorias`      | Clasifica productos de la tienda                                   | Se relaciona con artículos                                                |
| `articulos`       | Catálogo de la tienda                                              | Se relaciona con categorías y detalle de pedido                           |
| `pedidos`         | Cabecera de compra realizada por un usuario                        | Se relaciona con usuarios y detalle de pedido                             |
| `detalle_pedido`  | Líneas del pedido con cantidad y precio unitario                   | Se relaciona con pedidos y artículos                                      |
| `reportes`        | Registro de incidencias o avisos                                   | Se relaciona con usuarios y opcionalmente con actividades                 |

## 4.2. Análisis

<!-- Fuente: docs/01-requisitos/01-definicion-proyecto.md, docs/05-dwes/sprint-2/arquitectura-backend.md, docs/04-dwec/sprint-3/decision-fallback-github-pages.md, docs/despliegue/react-api-bd-xampp.md -->

La solución planteada en PacePal intenta resolver un problema muy concreto: la diferencia entre consultar rutas o planes deportivos y coordinar realmente una actividad con otras personas. Para cubrir ese hueco, el proyecto separa dos conceptos que en otras plataformas suelen mezclarse: la ruta como recurso fijo del sistema y la actividad como quedada concreta creada por un usuario. Esa decisión aparece ya en la documentación inicial y condiciona todo lo demás: el modelo de datos, las pantallas, los permisos y la forma de presentar el producto.

Desde el punto de vista técnico, la aplicación se apoya en una arquitectura cliente-servidor. El frontend actual usa React con Vite y organiza la interfaz por páginas, componentes, hooks y servicios. El backend usa PHP, PDO y sesiones para autenticar usuarios, aplicar roles y devolver respuestas JSON consumidas por el cliente. Esta separación permite que el cliente mantenga una experiencia más dinámica, pero también obliga a documentar bien las diferencias entre el entorno local real y el entorno publicado en GitHub Pages.

La base de datos sostiene la coherencia del sistema. No solo guarda usuarios o productos, sino también la relación entre rutas, actividades, participaciones, pedidos y reportes. Esto hace que el proyecto tenga una complejidad suficiente para justificar un análisis técnico más allá de una simple landing o un escaparate estático.

Otro punto importante del análisis es la evolución del producto por sprints. El repositorio deja claro que no se hicieron proyectos separados por módulo, sino una misma aplicación que fue creciendo: primero identidad visual y formularios, después AJAX, carrito y API, y por último migración a React, mejora UX y validación de despliegue. Esa evolución explica por qué conviven documentación legacy y documentación de React, y también por qué algunas rutas históricas de la documentación ya no coinciden exactamente con la estructura final de la rama actual.

Por último, el proyecto incorpora una decisión técnica que conviene dejar clara en defensa: GitHub Pages no puede ejecutar PHP ni MySQL. Por eso el cliente publicado necesita un fallback demo controlado. Esa solución no sustituye al backend real, pero sí permite enseñar el cliente React en un hosting estático sin ocultar la limitación. En esta memoria se trata esa decisión como una adaptación técnica razonable, no como si fuera una implementación completa de servidor en producción.

## 4.3. Diseño

### Diseño de interfaces

<!-- Fuente: docs/03-diw/sprint-1/03-guia-estilos.md, docs/03-diw/media/, index.html -->

El diseño de PacePal busca un equilibrio entre limpieza visual, identidad deportiva y facilidad de lectura. La guía de estilos de DIW define una paleta basada en verdes oscuros y tonos lima, apoyada por blanco y grises suaves. Esa decisión encaja con el enfoque de naturaleza, actividad al aire libre y componente sostenible. La tipografía elegida para la implementación web es Inter, cargada desde Google Fonts, mientras que Bootstrap y Bootstrap Icons se usan como apoyo técnico para espaciados, tablas, utilidades y parte de la iconografía.

[INSERTAR FIGURA: paleta de color de PacePal — ruta sugerida: `docs/03-diw/media/paletaIdentidadVisual.png`]

[INSERTAR FIGURA: tipografía e identidad visual — ruta sugerida: `docs/03-diw/media/tipografiaIdentidadVisual.png`]

A nivel de estructura, la interfaz se apoya en una navegación clara, tarjetas de contenido, llamadas a la acción visibles y bloques diferenciados. El diseño de la landing se construyó para explicar rápido qué es PacePal, qué tipo de actividades ofrece y por qué merece confianza. En las páginas internas se mantiene la misma lógica: información importante arriba, detalles después y acciones claras al final.

### Bocetos principales

<!-- Fuente: docs/03-diw/wireframes/ y docs/03-diw/sprint-1/04-boceto-final.md -->

Los wireframes exportados permiten documentar tanto la primera visión del producto como la ampliación a una aplicación completa.

[INSERTAR FIGURA: wireframe landing desktop — ruta sugerida: `docs/03-diw/wireframes/wireframe-landing-desktop.png`]

[INSERTAR FIGURA: wireframe landing mobile — ruta sugerida: `docs/03-diw/wireframes/wireframe-landing-mobile.png`]

[INSERTAR FIGURA: wireframe actividades desktop — ruta sugerida: `docs/03-diw/wireframes/wireframe-actividades-desktop.png`]

[INSERTAR FIGURA: wireframe tienda desktop — ruta sugerida: `docs/03-diw/wireframes/wireframe-tienda-desktop.png`]

[INSERTAR FIGURA: wireframe admin desktop — ruta sugerida: `docs/03-diw/wireframes/wireframe-admin-desktop.png`]

La evidencia disponible permite ver que el equipo trabajó pantallas para escritorio y móvil, no solo la landing inicial. Esto refuerza el bloque de diseño y la parte responsive del proyecto.

### Funcionamiento de pantallas principales

<!-- Fuente: js/App.jsx, pages/, tests/react-sprint-3/, docs/04-dwec/README.md -->

| Pantalla             | Objetivo principal                                                                        | Funcionamiento resumido                                                         | Evidencia                                                         |
| -------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Inicio               | Presentar la propuesta de valor y mostrar acceso rápido a secciones y contenido destacado | El usuario entra por la landing, visualiza propuesta, CTA y contenido destacado | `index.html`, `pages/landing/HomePage.jsx`                        |
| Actividades          | Consultar actividades existentes y su estado                                              | Muestra tarjetas/listado y permite navegar a detalle                            | `pages/actividades/ActivitiesPage.jsx`, pruebas de actividades    |
| Detalle de actividad | Ver datos completos y realizar acciones sobre la actividad                                | Permite unirse, abandonar o eliminar según rol y estado de sesión               | `pages/actividades/ActivityDetailPage.jsx`, API real              |
| Rutas                | Consultar rutas disponibles                                                               | Lista rutas y permite entrar a detalle                                          | `pages/rutas/RoutesPage.jsx`                                      |
| Detalle de ruta      | Mostrar descripción, dificultad, distancia y acceso a crear actividad                     | Resume la ruta y enlaza con la creación de actividad                            | `pages/rutas/RouteDetailPage.jsx`                                 |
| Tienda               | Explorar catálogo y buscar productos                                                      | Combina buscador, vídeo integrado y paginación del escaparate                   | `pages/tienda/ShopPage.jsx`                                       |
| Detalle de producto  | Ver galería, descripción, precio y añadir al carrito                                      | Permite seleccionar cantidad y añadir al carrito                                | `pages/tienda/ProductDetailPage.jsx`                              |
| Carrito              | Revisar compra y generar pedido                                                           | Muestra líneas, cantidades, total y checkout                                    | `pages/tienda/CartPage.jsx`, `tests/react-sprint-3/07-carrito.md` |
| Perfil               | Consultar y editar datos personales e historial de pedidos                                | Cambia según sesión real o demo y muestra pedidos del usuario                   | `pages/usuario/ProfilePage.jsx`, pruebas de perfil                |
| Admin                | Gestionar usuarios, productos, rutas, actividades, reportes y pedidos                     | Panel protegido por rol `admin`                                                 | `pages/admin/AdminPage.jsx`, pruebas admin                        |
| Contacto             | Recoger dudas o incidencias mediante formulario                                           | Valida campos, muestra mensajes y mantiene estructura accesible                 | `pages/formulario/ContactPage.jsx`                                |
| Cookies              | Explicar y gestionar consentimiento                                                       | Ofrece navegación a política y lógica de consentimiento/fallback                | `pages/legal/CookiesPage.jsx`, documentación React Sprint 3       |

### Diseño responsive, multimedia y experiencia de usuario

<!-- Fuente: docs/03-diw/sprint-2/01-accesibilidad-wcag.md, docs/03-diw/sprint-3/DI8-DI9-DI10_UX_Interactividad.md, pages/tienda/ShopPage.jsx -->

El diseño responsive de PacePal se ha trabajado de forma modular, con hojas CSS específicas por sección y archivos responsive independientes para actividades, administración, landing, rutas, sobre nosotros, tienda y usuario. En la implementación legacy, `css/estilos.css` importa de forma explícita `responsiveLanding.css`, `responsiveTienda.css`, `responsiveRutas.css`, `responsiveActividades.css`, `responsiveUsuario.css` y `responsiveAdmin.css`. En el cliente React, `js/main.jsx` carga `css/react.css`, que añade reglas responsive propias e incorpora `sobrenosotros/responsiveSobrenosotros.css`. Por tanto, el responsive forma parte de la implementación real del proyecto; lo que puede quedar pendiente son capturas finales por dispositivo, no el trabajo responsive en sí.

Sobre esa base responsive, el proyecto también documenta la accesibilidad de la landing, la integración de vídeo en tienda y las microinteracciones suaves en Sprint 3. En el código actual sí está localizada la integración del vídeo en `ShopPage.jsx` y el archivo `img/landing/pacepalTienda.mp4`.

[INSERTAR FIGURA: vídeo integrado en la tienda — ruta sugerida: `img/landing/pacepalTienda.mp4`]

En cambio, el bloque de audio del Sprint 3 necesita un matiz importante. Los archivos `img/audio/pacepal-contacto.mp3` e `img/audio/pacepal-contacto.ogg` existen en el repositorio, pero en la revisión del código actual no se ha localizado la integración visible de un elemento `<audio>` dentro de las páginas JSX de la rama actual. Por eso esta memoria no lo presenta como funcionalidad cerrada, sino como evidencia parcial.

[PENDIENTE DE APORTAR: captura final y localización exacta del bloque de audio integrado en la versión actual, o dejar constancia de que quedó preparado pero no montado en la rama final.]

# 5. PRUEBAS

## 5.1. Pruebas funcionales

<!-- Fuente: tests/tests.md, tests/funcionales/, tests/react-sprint-3/, tests/postman/, docs/evidencias/despliegue/sprint-3/README.md -->

| ID    | Funcionalidad                                       | Precondición                                   | Pasos resumidos                                              | Resultado esperado                                                    | Resultado obtenido                                                                           | Evidencia / captura                                                                                           | Estado   |
| ----- | --------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | -------- |
| PF-01 | Registro incorrecto                                 | Formulario accesible                           | Introducir email inválido y contraseña débil                 | El sistema bloquea el envío y muestra errores                         | Documentado como correcto en caso funcional                                                  | `tests/funcionales/01-registro-incorrecto.md`                                                                 | correcto |
| PF-02 | Registro correcto                                   | Formulario accesible                           | Rellenar registro con datos válidos                          | Se crea la cuenta y se redirige o inicia sesión                       | Documentado como correcto                                                                    | `tests/funcionales/02-registro-correcto.md`                                                                   | correcto |
| PF-03 | Login incorrecto                                    | Usuario no autenticado                         | Introducir credenciales erróneas                             | Mensaje de error sin acceso                                           | Documentado como correcto                                                                    | `tests/funcionales/03-login-incorrecto.md`                                                                    | correcto |
| PF-04 | Login correcto                                      | Usuario existente                              | Introducir credenciales válidas                              | Acceso correcto y cambio de estado                                    | Documentado como correcto                                                                    | `tests/funcionales/04-login-correcto.md`                                                                      | correcto |
| PF-05 | Logout y limpieza de sesión                         | Sesión real o demo activa                      | Iniciar sesión y cerrar sesión                               | El sistema vuelve a estado invitado y limpia sesión                   | Documentado en la validación React y en la API                                               | `tests/react-sprint-3/README.md`, `docs/evidencias/despliegue/sprint-3/05-api-session-localhost.png`          | correcto |
| PF-06 | Validación condicional del registro                 | Formulario de registro visible                 | Rellenar/borrar dirección y país                             | La tarjeta aparece o desaparece según la regla                        | Documentado como correcto                                                                    | `tests/funcionales/05-tarjeta-aparece-desaparece.md`                                                          | correcto |
| PF-07 | Buscador dinámico de productos                      | Tienda cargada con API o datos demo            | Buscar, vaciar, paginar y probar sin resultados              | La galería se actualiza sin recargar y gestiona estados vacíos        | Documentado como correcto                                                                    | `tests/funcionales/06-buscador-productos.md`, capturas DWEC Sprint 3                                          | correcto |
| PF-08 | Carrito React                                       | Cliente React operativo y sesión disponible    | Añadir, modificar cantidad, eliminar y finalizar pedido      | Contador, subtotal y total se recalculan sin recargar                 | Documentado como correcto                                                                    | `tests/react-sprint-3/07-carrito.md`, `docs/evidencias/dwec/sprint-3/Carrito-React.png`                       | correcto |
| PF-09 | Gestión de actividades                              | Usuario autenticado                            | Crear actividad, unirse o abandonar                          | Se actualiza el estado y la API responde correctamente                | Documentado como correcto                                                                    | `tests/funcionales/08-actividades.md`                                                                         | correcto |
| PF-10 | Perfil de usuario                                   | Sesión iniciada                                | Abrir perfil y revisar pedidos/datos                         | Se muestran datos del usuario y pedidos asociados                     | Documentado como correcto                                                                    | `tests/funcionales/09-perfil.md`, `docs/evidencias/dwec/sprint-3/Perfil-React.png`                            | correcto |
| PF-11 | Panel de administración                             | Sesión admin iniciada                          | Acceder al panel y revisar bloques de gestión                | Se cargan usuarios, reportes, actividades, productos, rutas y pedidos | Documentado como correcto                                                                    | `tests/funcionales/10-admin.md`, `docs/evidencias/dwec/sprint-3/Nuevos-usuarios.png`                          | correcto |
| PF-12 | API con Postman: login, productos, carrito y pedido | XAMPP y API operativos                         | Ejecutar colección Postman con entorno local                 | Respuestas `status=ok` y HTTP correctos                               | La colección incluye tests básicos; el documento manual mantiene algunas capturas pendientes | `tests/postman/pacepal.postman_collection.json`, `docs/evidencias/dwes/postman1.png`, `postman2.png`          | parcial  |
| PF-13 | Sesión y conexión local API-BD                      | XAMPP activo, BD importada                     | Consultar `/api/session` y `/api/health` desde localhost     | Respuesta JSON válida y conexión correcta                             | Documentado como correcto                                                                    | `docs/evidencias/despliegue/sprint-3/05-api-session-localhost-admin.png`, `12-healthcheck-localhost.txt`      | correcto |
| PF-14 | Despliegue local con XAMPP                          | Proyecto bajo `htdocs`, Apache y MySQL activos | Abrir panel XAMPP, phpMyAdmin y aplicación en localhost      | El entorno se ve operativo y accesible                                | Documentado como correcto                                                                    | `docs/evidencias/despliegue/sprint-3/README.md` y capturas 01-04                                              | correcto |
| PF-15 | Cliente React publicado                             | Build publicado en GitHub Pages                | Abrir URL publicada y probar cookies/login demo/carrito demo | El cliente publicado navega y conserva el fallback demo               | Documentado como correcto                                                                    | `tests/react-sprint-3/README.md`, `docs/evidencias/despliegue/sprint-3/08-github-pages-publicacion-https.png` | correcto |

### Observación sobre las pruebas de API

La colección Postman del repositorio sí es una evidencia real y ejecutable. Lo que no está completamente cerrado es la parte visual del documento manual `pruebas-postman.md`, porque mantiene varios placeholders de capturas. Por eso las pruebas de API se consideran funcionalmente verificadas, pero documentalmente mejorables.

## 5.2. Inspección de accesibilidad

<!-- Fuente: docs/03-diw/sprint-2/01-accesibilidad-wcag.md, docs/evidencias/diw/sprint-2/, pages/formulario/ContactPage.jsx -->

La evidencia formal de accesibilidad más sólida del repositorio es el informe de DIW Sprint 2. Ese informe declara un alcance centrado en la landing y verifica el cumplimiento del nivel objetivo WCAG 2.1 A mediante revisión manual y herramientas automáticas. Según el documento, la landing obtiene 100 en accesibilidad en Lighthouse, 0 errores en WAVE y ratios de contraste correctos para los elementos revisados.

[INSERTAR FIGURA: resultado Lighthouse accesibilidad — ruta sugerida: `docs/evidencias/diw/sprint-2/lighthouse-accesibilidad.png`]

[INSERTAR FIGURA: resultado WAVE — ruta sugerida: `docs/evidencias/diw/sprint-2/wave-analisis.png`]

[INSERTAR FIGURA: comprobación de contraste — ruta sugerida: `docs/evidencias/diw/sprint-2/WCAG_Contrast_Checker.png`]

Además de esa auditoría formal de la landing, el código actual aporta evidencias puntuales de buenas prácticas de accesibilidad en el cliente React, especialmente en formularios y navegación:

| Aspecto revisado                  | Evidencia real                                                                                     | Resultado                       |
| --------------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------- |
| HTML semántico en la landing      | Informe DIW Sprint 2                                                                               | Correcto en el alcance auditado |
| Idioma de la página               | `<html lang="es">` en `index.html`                                                                 | Correcto                        |
| Etiquetas asociadas a formularios | `pages/formulario/ContactPage.jsx` y formularios de autenticación                                  | Correcto                        |
| Mensajes de error visibles        | Formularios DWEC y React con mensajes bajo campo o mensaje general                                 | Correcto                        |
| Navegación por teclado            | Declarada como validada en informe DIW                                                             | Correcto en el alcance revisado |
| Contraste                         | Informe DIW con ratios registrados                                                                 | Correcto en el alcance revisado |
| ARIA y atributos de apoyo         | Formularios React con `aria-invalid` y `aria-describedby`; componentes DIW con ARIA cuando procede | Correcto de forma parcial       |
| Alt en imágenes                   | Verificado para la landing; presente en galerías y recursos de producto/ruta donde se ha revisado  | Parcialmente verificado         |

### Problemas detectados y mejoras aplicadas

- Durante la auditoría de la landing se detectó un problema de contraste en el subtítulo del hero y se corrigió oscureciendo el fondo.
- La documentación React Sprint 3 incorpora una regla para `prefers-reduced-motion`, lo que mejora la adaptación a usuarios sensibles al movimiento.
- La limitación actual es de alcance: no existe en el repo una auditoría formal completa de toda la SPA React equivalente al informe DIW de la landing.

## 5.3. Inspección de usabilidad

<!-- Fuente: docs/03-diw/sprint-2/05-inspeccion-usabilidad.md -->

La inspección de usabilidad documentada se basó en dos técnicas: revisión heurística del equipo y prueba de navegación con un usuario externo. El objetivo no era hacer un estudio largo, sino comprobar si la estructura general de la aplicación resultaba clara sin necesidad de instrucciones detalladas.

| Aspecto                                  | Observación documentada                                                                  | Resultado                |
| ---------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------ |
| Claridad de navegación                   | El usuario identificó rápido el menú principal y pudo moverse entre secciones            | Positivo                 |
| Consistencia visual                      | Las páginas mantienen una identidad visual común basada en tipografía, paleta y tarjetas | Positivo                 |
| Comprensión del contenido                | La landing ayuda a entender la propuesta del producto                                    | Positivo                 |
| Localización del registro                | El usuario encontró la zona de registro sin dificultad                                   | Positivo                 |
| Diferenciación entre Rutas y Actividades | Hubo una duda inicial al interpretar ambos conceptos como lo mismo                       | Mejorable, pero resuelto |
| Adaptación a distintos dispositivos      | El diseño responsive está implementado de forma modular y la documentación lo respalda   | Positivo                 |

La observación más útil para defensa es precisamente la duda entre Rutas y Actividades. No es un fallo grave, pero sí una señal real de que dos conceptos cercanos pueden requerir texto de apoyo o mayor diferenciación en determinados puntos de la interfaz. Esa honestidad es preferible a presentar la usabilidad como perfecta.

# 6. CONCLUSIONES

## 6.1. Objetivos alcanzados

<!-- Fuente: cobertura funcional en código, documentación modular y tests -->

A nivel global, PacePal sí alcanza el objetivo de convertirse en un proyecto intermodular coherente. El repositorio demuestra que existe una aplicación funcional con frontend, backend, base de datos, pruebas y documentación técnica acumulada. También queda cubierto el objetivo de trabajar por sprints con trazabilidad suficiente para explicar qué se hizo en cada fase y por qué.

También se puede considerar alcanzado el objetivo de integrar módulos distintos en una única solución. DIW aporta wireframes, guía de estilos, accesibilidad y usabilidad. DWEC aporta formularios, validaciones, buscador, carrito y migración a React. DWES aporta API, sesiones, roles, base de datos y pruebas Postman. Despliegue aporta guía local con XAMPP y evidencias técnicas. Sostenibilidad aporta enfoque de producto, narrativa y material visual complementario.

Los objetivos que no pueden darse por cerrados al 100 % no son ya la existencia de diagramas, sino su cierre visual definitivo dentro del documento maquetado. En concreto, conviene exportar o incrustar bien las figuras Mermaid de Gantt, casos de uso y clases/componentes, además de completar algunas capturas Postman y, si se quiere afinar DIW Sprint 3, las capturas finales de audio y responsive por dispositivo.

## 6.2. Conclusiones del proyecto

<!-- Fuente: docs/02-agile/01-scrum-base.md, docs/04-dwec/sprint-3/decision-fallback-github-pages.md, docs/05-dwes/sprint-2/arquitectura-backend.md -->

El proyecto deja varias conclusiones técnicas claras. La primera es que la separación entre rutas y actividades da sentido propio al producto y evita que la aplicación se limite a enseñar información estática. La segunda es que la combinación de React en cliente y PHP/PDO en servidor ha permitido mantener una estructura relativamente limpia sin abandonar la base de trabajo anterior. La tercera es que el despliegue ha condicionado decisiones de arquitectura: publicar un cliente React en GitHub Pages obliga a documentar bien dónde acaba la demo y dónde empieza el backend real.

También es una conclusión importante que la documentación del repositorio no está vacía ni improvisada. Hay bastante material útil, pero está fragmentado por sprints y módulos. Por eso la memoria final no debe limitarse a copiar documentos antiguos, sino a reorganizarlos con un hilo técnico único y marcando de forma honesta lo que falta. Ese es precisamente el valor de esta versión en Markdown: hacer revisable el contenido antes de exportarlo a un formato final.

Desde el punto de vista de aprendizaje, el proyecto obliga a tocar problemas reales de integración: estructura del repositorio, paridad funcional entre legacy y React, sesiones, JSON, CORS local, instalación con XAMPP, fallback para hosting estático y consistencia documental. Para un proyecto de 2.º DAW, ese conjunto de problemas es razonable y defendible.

## 6.3. Propuestas de futuro

<!-- Fuente: docs/02-agile/roadmap-global.md, documentación React Sprint 3, riesgos documentales detectados -->

1. Añadir los diagramas que faltan a la documentación final: casos de uso, clases y un Gantt visual exportado.
2. Cerrar la parte documental de Postman con capturas específicas por caso relevante, aprovechando la colección ya existente.
3. Realizar una auditoría de accesibilidad completa sobre la SPA React, no solo sobre la landing.
4. Unificar la documentación histórica de Sprint 3 para que deje de mezclar rutas antiguas `frontend-react/...` con la estructura actual integrada en la raíz.
5. Completar una matriz manual de compatibilidad real entre navegadores para cookies, sesión demo y fallback publicado.
6. Si el proyecto se siguiera ampliando, separar todavía mejor el modo demo del modo API real para evitar ambigüedades en publicación y defensa.

# 7. GLOSARIO

<!-- Fuente: documentación técnica del repo y stack real verificado -->

| Término         | Definición aplicada a PacePal                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| API             | Interfaz de programación que en PacePal expone endpoints HTTP para productos, rutas, actividades, sesión, pedidos, usuarios y cookies |
| AJAX            | Técnica de petición asíncrona usada para cargar o filtrar información sin recargar la página                                          |
| Bootstrap       | Framework CSS usado como apoyo visual y de utilidades de layout                                                                       |
| CSS             | Lenguaje de estilos usado para maquetación, responsive, estados y guía visual del proyecto                                            |
| DOM             | Estructura del documento HTML que el cliente legacy y React manipulan para mostrar contenido                                          |
| Endpoint        | Ruta concreta de la API, por ejemplo `/api/login` o `/api/productos`                                                                  |
| Git             | Sistema de control de versiones usado para trabajar por ramas y commits                                                               |
| GitHub Pages    | Hosting estático usado para publicar el cliente React en modo demo                                                                    |
| JSON            | Formato de intercambio entre cliente y servidor y también base del fallback demo                                                      |
| MySQL / MariaDB | Sistema de base de datos relacional usado en local con XAMPP                                                                          |
| PDO             | Capa de acceso a base de datos de PHP utilizada en los modelos del backend                                                            |
| PHP             | Lenguaje del backend que resuelve endpoints, sesiones, controladores y conexión con la base de datos                                  |
| React           | Librería usada en Sprint 3 para reconstruir el cliente como SPA basada en componentes                                                 |
| Responsive      | Capacidad de la interfaz para adaptarse a distintos tamaños de pantalla                                                               |
| Scrum           | Marco de trabajo ágil simplificado que estructura el proyecto en backlog, sprints, revisiones y retrospectivas                        |
| Sesión          | Estado de autenticación del usuario mantenido en PHP o simulado en el fallback demo publicado                                         |
| SQL             | Lenguaje usado para definir tablas, claves y datos del esquema relacional                                                             |
| WCAG            | Criterios de accesibilidad web usados como referencia mínima en la auditoría DIW                                                      |
| XAMPP           | Entorno local que agrupa Apache, PHP, MySQL/MariaDB y phpMyAdmin                                                                      |

# 8. BIBLIOGRAFÍA Y WEBGRAFÍA

<!-- Fuente: docs/00-material, docs/rubrica.md, docs/03-diw/sprint-2/01-accesibilidad-wcag.md -->

## Fuentes internas del proyecto

- `docs/rubrica.md`
- `docs/plantillaDocumentacionProyecto.md`
- `docs/requisitos-normalizados/01_resumen_global_proyecto.md`
- `docs/requisitos-normalizados/02_rubrica_documentacion.md`
- `docs/requisitos-normalizados/03_diw_requisitos.md`
- `docs/requisitos-normalizados/04_dwec_cliente_requisitos.md`
- `docs/requisitos-normalizados/05_dwes_servidor_requisitos.md`
- `docs/requisitos-normalizados/06_despliegue_requisitos.md`
- `docs/requisitos-normalizados/07_sprint_1_requisitos.md`
- `docs/requisitos-normalizados/08_sprint_2_requisitos.md`
- `docs/requisitos-normalizados/09_sprint_3_requisitos.md`
- `docs/00-material/agile/Programación del Proyecto Agile Intermodular 25-26.pdf`
- `docs/00-material/diw/sprint-1/*.pdf`
- `docs/00-material/diw/sprint-2/*.pdf`
- `docs/00-material/diw/sprint-3/Sprint 3 – UX + Interactividad.pdf`
- `docs/00-material/dwec/sprint-1/*.pdf`
- `docs/00-material/dwec/sprint-2/*.pdf`
- `docs/00-material/dwec/sprint-3/CLISprint3.pdf`
- `docs/00-material/dwes/sprint-2/2do Sprint DWES.pdf`
- `docs/00-material/daw/sprint-3/despliegue Sprint 3.pdf`

## Documentación oficial y recursos externos citados o coherentes con la evidencia del proyecto

- MDN Web Docs: HTML, CSS, JavaScript, Fetch API, formularios y accesibilidad.
- Documentación oficial de PHP: sesiones, JSON y PDO.
- Documentación oficial de Bootstrap 5 y Bootstrap Icons.
- W3C / WAI: WCAG 2.1 y material de técnicas de accesibilidad.
- Documentación oficial de MySQL/MariaDB.
- Documentación oficial de Postman.
- The Scrum Guide / material oficial de Scrum educativo usado como apoyo en clase.
- Material de accesibilidad y usabilidad del aula virtual citado en la documentación DIW.

# 9. ANEXOS

## 9.1. Manual de usuario

<!-- Fuente: README.md, tests/funcionales/, tests/react-sprint-3/ -->

### Uso básico como visitante

1. Abrir la aplicación desde la URL local o publicada.
2. Consultar la portada para entender el producto.
3. Entrar en `Actividades`, `Rutas` o `Tienda` desde la navegación principal.
4. Abrir el detalle de una actividad, ruta o producto para ver más información.
5. Si se desea participar o comprar, pasar al flujo de registro/login.

### Uso como usuario registrado

1. Registrarse desde el formulario correspondiente y validar los campos requeridos.
2. Iniciar sesión con email y contraseña.
3. Consultar el perfil personal y el historial de pedidos.
4. Crear una actividad sobre una ruta existente si se desea organizar una salida.
5. Unirse o abandonar actividades disponibles según convenga.
6. Buscar productos, añadirlos al carrito y generar un pedido.
7. Cerrar sesión cuando se termine la interacción.

### Uso como administrador

1. Iniciar sesión con una cuenta con rol `admin`.
2. Acceder al panel de administración.
3. Revisar usuarios, productos, rutas, actividades, pedidos y reportes.
4. Crear, editar o eliminar recursos según el flujo soportado por la API y el panel.

## 9.2. Pruebas realizadas

<!-- Fuente: tests/, tests/postman/, docs/evidencias/ -->

Material ampliado a enlazar o revisar durante la exportación:

- Casos manuales de Sprint 1: `tests/funcionales/01-registro-incorrecto.md` a `05-tarjeta-aparece-desaparece.md`.
- Casos manuales de flujos dinámicos: `tests/funcionales/06-buscador-productos.md` a `10-admin.md`.
- Verificación React Sprint 3: `tests/react-sprint-3/README.md` y casos `06` a `12`.
- Scripts de automatización: `tests/selenium/test-registro.js` y `tests/selenium/test-buscador.js`.
- Pruebas Postman: `tests/postman/pacepal.postman_collection.json` y entorno local asociado.
- Evidencias visuales: `docs/evidencias/` por áreas de DIW, DWEC, DWES y despliegue.

## 9.3. Análisis de la competencia

<!-- Fuente: docs/03-diw/sprint-1/01-tendencias-competencia.md y docs/evidencias/diw/sprint-1/ -->

La documentación de DIW usa varias referencias del sector para justificar decisiones visuales y de experiencia de usuario. Las evidencias visibles localizadas en el repositorio corresponden a:

- Strava
- Meetup
- Komoot

[INSERTAR FIGURA: referencia visual Strava — ruta sugerida: `docs/evidencias/diw/sprint-1/strava-interfaz.png`]

[INSERTAR FIGURA: referencia visual Meetup — ruta sugerida: `docs/evidencias/diw/sprint-1/meetup-interfaz.png`]

[INSERTAR FIGURA: referencia visual Komoot — ruta sugerida: `docs/evidencias/diw/sprint-1/komoot-interfaz.png`]

La utilidad de este anexo es mostrar de dónde salen decisiones como el uso de tarjetas, el peso de los datos antes del texto largo, la orientación mobile-first y la necesidad de diferenciar mejor conceptos como ruta y actividad.

## 9.4. Bocetos / Wireframes completos

<!-- Fuente: docs/03-diw/wireframes/ -->

Wireframes localizados para anexar o indexar:

- Landing: desktop y mobile.
- Actividades: desktop y mobile.
- Detalle de actividad: desktop y mobile.
- Rutas: desktop y mobile.
- Detalle de ruta: desktop y mobile.
- Tienda: desktop y mobile.
- Detalle de producto: desktop y mobile.
- About: desktop y mobile.
- Admin: desktop y mobile.

[PENDIENTE DE APORTAR: si se quiere, miniaturas o montaje conjunto de los wireframes en un anexo visual único.]

## 9.5. Guía de estilos

<!-- Fuente: docs/03-diw/sprint-1/03-guia-estilos.md y docs/03-diw/media/ -->

La guía de estilos ya existe como documento propio y conviene mantenerla como anexo técnico separado. Los materiales principales localizados son:

- `docs/03-diw/sprint-1/03-guia-estilos.md`
- `docs/03-diw/sprint-1/03-guia-estilos.pdf`
- `docs/03-diw/media/logo.png`
- `docs/03-diw/media/paleta.png`
- `docs/03-diw/media/paletaIdentidadVisual.png`
- `docs/03-diw/media/tipografiaIdentidadVisual.png`
- `docs/03-diw/media/pacepal_iconografia.png`
- `docs/03-diw/media/tarjetaActividadEjemplo.png`
- `docs/03-diw/media/tarjetaProductoEjemplo.png`

Su función dentro de la memoria es apoyar la parte de diseño sin cargar el cuerpo principal con demasiado detalle visual.

---

**Estado de este borrador:** revisable y defendible, pero no definitivo. Mantiene marcados como pendientes los diagramas y capturas que no se han localizado o que requieren cierre manual antes de exportar a ODT/DOCX/PDF.
