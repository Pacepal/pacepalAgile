# PacePal — Memoria Final del Proyecto

> **Documento:** `docs/documentacion-final/12_memoria_final_para_maquetar.md`  
> **Rama:** `sprint-3-react-jsx`  
> **Fecha de cierre documental:** 2026-05-11  
> **Estado:** listo para maquetar en Word / LibreOffice Writer

---

## PORTADA

| Campo | Valor |
| ----- | ----- |
| Título principal | PACEPAL |
| Subtítulo | CFGS 2º DAW · Proyecto Agile Intermodular |
| Tipo de documento | Documentación General |
| Desarrollado por | Treecore Studio |
| Autores | Pablo Sevillano Aparicio<br>Alejandro Pacheco |
| Centro | IES Infanta Elena |
| Curso académico | 2025–2026 |
| Fecha de entrega | 11 de mayo de 2026 |
| Módulos implicados | DIW, DWEC, DWES, Despliegue y Sostenibilidad |
| Tutora | Sarah González Camacho |

![Logotipo de PacePal](../03-diw/media/logo.png)

---

## RESUMEN

PacePal es una aplicación web desarrollada como proyecto Agile Intermodular de 2.º de DAW. Su objetivo principal es facilitar que los usuarios descubran rutas deportivas ya registradas en el sistema, organicen actividades en grupo sobre esas rutas y gestionen una tienda de productos relacionados con el proyecto. La aplicación integra trabajo de diseño de interfaces, desarrollo cliente, desarrollo servidor, base de datos, despliegue y sostenibilidad en una propuesta de producto coherente.

El proyecto se ha desarrollado en cuatro fases principales. En la primera se definió la identidad visual, la landing y los formularios de registro y autenticación. En la segunda se añadieron el buscador dinámico, el carrito, los listados dinámicos, la base de datos relacional, las sesiones PHP, el control de roles y la API REST. En la tercera fase se migró el cliente a React con Vite, se mantuvo la conexión con la API real en local, se integró vídeo en la tienda, se añadieron microinteracciones y se documentó un fallback demo controlado para la publicación en GitHub Pages. Finalmente se validó el despliegue local con XAMPP y se consolidó toda la documentación del proyecto.

A nivel técnico, el proyecto utiliza HTML5, CSS3, Bootstrap 5, Bootstrap Icons, JavaScript, React, Vite, PHP, PDO, MySQL/MariaDB, XAMPP, Git, GitHub y GitHub Pages. La documentación final reúne evidencias reales suficientes para defender la memoria.

---

## ABSTRACT

PacePal is a web application developed as an intermodular Agile project within the second year of the DAW programme. Its main goal is to help users discover predefined routes stored in the system, create group activities on those routes, and interact with a small product catalogue connected to the project concept. The application integrates interface design, client-side development, server-side development, database management, deployment and sustainability within a single coherent project.

The project was built incrementally through sprints. Sprint 1 established the visual identity, landing page and authentication forms. Sprint 2 added AJAX-based search, cart logic, dynamic listings, a relational database, PHP sessions, role-based access control and a REST API. Sprint 3 migrated the client to React with Vite, kept the PHP API for local execution, integrated video in the shop page, documented a demo fallback for GitHub Pages, and validated local deployment with XAMPP. A final documentation phase closed the project for evaluation.

The final documentation includes enough real evidence to support a technical report that is reviewable and defensible.

---

## ÍNDICE AUTOMÁTICO

> **Nota para la maquetación:** insertar índice automático al exportar a ODT/DOCX con Word o LibreOffice Writer. Usar estilos de título jerárquicos para que el índice se genere correctamente.

---

## ÍNDICE DE FIGURAS

> **Nota para la maquetación:** insertar índice automático de figuras al exportar. Las figuras están referenciadas internamente con anclas HTML y definidas en el Anexo 9.7.

---

## ÍNDICE DE TABLAS

> **Nota para la maquetación:** insertar índice automático de tablas al exportar si la herramienta lo soporta.

---

# 1. INTRODUCCIÓN

## 1.1. Objetivos

PacePal nace como una aplicación web orientada a actividades deportivas en comunidad. La idea central es que las rutas ya existen en el sistema y que lo que los usuarios organizan sobre ellas son actividades concretas: una salida con fecha, hora, nivel y plazas. Esto permite que el producto se centre en la coordinación del grupo y en la constancia, en lugar de limitarse a un listado abierto de recorridos sin estructura.

### Objetivo general

Desarrollar una aplicación web intermodular, funcional y documentada, capaz de gestionar rutas, actividades, comunidad, sesiones de usuario y una tienda básica, integrando frontend, backend, base de datos, pruebas y despliegue dentro de una única solución defendible para un proyecto de 2.º DAW.

### Objetivos específicos

- Permitir la navegación pública por el contenido principal: inicio, actividades, rutas, tienda, contacto, política de cookies y sección About, sin necesidad de iniciar sesión.
- Implementar registro y autenticación con validaciones completas, persistencia en base de datos y control de sesiones PHP.
- Diferenciar claramente los permisos de invitado, usuario registrado y administrador, y bloquear el acceso a acciones sensibles según el rol.
- Permitir que un usuario cree actividades sobre rutas existentes y que otros usuarios se unan o abandonen esas actividades.
- Ofrecer un catálogo de productos con detalle, buscador dinámico, carrito y generación de pedidos.
- Construir una API REST en PHP con respuestas JSON y acceso a base de datos mediante PDO y consultas preparadas.
- Mantener una experiencia responsive y razonablemente accesible, con revisión documentada mediante Lighthouse, WAVE y criterios WCAG.
- Dejar el proyecto preparado para defensa técnica con pruebas funcionales, evidencias visuales y despliegue local documentado.

### Relación con el producto final

Todos los objetivos anteriores están implementados en la rama `sprint-3-react-jsx`. El cliente React cubre la navegación pública, la autenticación, el catálogo, el carrito, las actividades y el panel de administración. El backend PHP cubre la API REST, las sesiones, los roles y la persistencia en base de datos. La memoria recoge la trazabilidad de cada objetivo con evidencias reales.

---

## 1.2. Motivación

La motivación de PacePal surge de tres necesidades observadas al inicio del proyecto. La primera es la dificultad de mantener constancia en actividades físicas cuando la iniciativa depende exclusivamente de cada persona. La segunda es la falta de herramientas intermedias entre las aplicaciones puramente deportivas de alto rendimiento y los grupos informales de mensajería sin estructura ni seguimiento. La tercera es el interés del equipo por dar al producto un enfoque sostenible real, incorporando una línea de tienda y comunicación relacionada con hábitos responsables y materiales reciclados.

Desde el punto de vista académico, el proyecto responde también a la necesidad de construir una única aplicación donde DIW, DWEC, DWES, despliegue y sostenibilidad trabajen de forma integrada, no como entregas aisladas de cada módulo. Esa decisión es la que da sentido al enfoque intermodular y la que explica por qué la memoria debe reflejar tanto lo implementado como la coordinación por sprints.

En cuanto al problema que resuelve: PacePal permite que alguien descubra qué rutas hay disponibles cerca, que organice una salida sobre esa ruta con parámetros claros de nivel y ritmo, y que un grupo de personas se apunte o abandone esa actividad de forma ordenada. La tienda complementa la propuesta con productos relacionados con el deporte sostenible, cerrando un ecosistema de producto coherente.

---

# 2. TECNOLOGÍAS Y HERRAMIENTAS UTILIZADAS

| Tecnología / Herramienta   | Uso real en PacePal                                                                          | Justificación breve                                                                                                 | Módulo / Parte    |
| -------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------- |
| **HTML5**                  | Estructura semántica de todas las páginas, formularios y soporte de accesibilidad            | Base del web estándar; requerido por el módulo DIW y como capa estructural del proyecto                             | DIW, DWEC         |
| **CSS3**                   | Maquetación responsive, identidad visual, estados, microinteracciones y ajustes por sección  | Necesario para la guía de estilos y el diseño visual modular                                                        | DIW, DWEC         |
| **Bootstrap 5.3.3**        | Utilidades de layout, tablas, espaciado, alertas y apoyo visual en formularios               | Agiliza el desarrollo y se integra con la guía de estilos del proyecto                                              | DIW, DWEC         |
| **Bootstrap Icons 1.11.3** | Iconografía de interfaz en botones, navegación y tarjetas                                    | Coherencia visual; sistema ligero compatible con Bootstrap                                                          | DIW               |
| **JavaScript**             | Validaciones, lógica cliente, peticiones AJAX/fetch, hash-routing legacy y manejo de estado  | Módulo central de DWEC; base del comportamiento dinámico                                                            | DWEC              |
| **React 18.3.1**           | Cliente principal del Sprint 3: componentes, estado, páginas y hooks                         | Permite una SPA moderna y defendible como migración desde el cliente JavaScript legacy                              | DWEC, Sprint 3    |
| **Vite 5.4.10**            | Entorno de desarrollo y build del cliente React                                              | Rápido, moderno y compatible con la estructura del proyecto                                                         | DWEC, Despliegue  |
| **PHP**                    | Backend de la API REST, gestión de sesiones, roles y acceso al servidor                      | Módulo central de DWES; permite construir el backend sin framework externo                                          | DWES              |
| **PDO**                    | Acceso a MySQL/MariaDB con consultas preparadas y parámetros enlazados                       | Capa de abstracción segura que evita inyección SQL directa                                                          | DWES              |
| **JSON**                   | Formato de intercambio entre frontend y backend; base del fallback demo                      | Estándar para APIs REST; compatible con fetch() en el cliente                                                       | DWEC, DWES        |
| **MySQL / MariaDB**        | Persistencia de usuarios, rutas, actividades, pedidos, artículos, participaciones y reportes | Base de datos relacional adecuada para el modelo de datos del proyecto                                              | DWES              |
| **XAMPP**                  | Entorno local con Apache, PHP, MySQL/MariaDB y phpMyAdmin                                    | Solución integrada para ejecutar el proyecto en local sin configuración compleja                                    | Despliegue        |
| **Git y GitHub**           | Versionado, ramas por sprint y colaboración del equipo                                       | Imprescindible para el trabajo Agile por sprints                                                                    | Agile, Despliegue |
| **GitHub Pages**           | Publicación estática del cliente React compilado                                             | Permite publicar el cliente sin servidor de pago; requiere fallback demo documentado                                | Despliegue        |
| **Postman**                | Pruebas manuales de la API REST: login, productos, carrito, pedidos y sesión                 | Herramienta estándar para validar APIs; se utilizó una colección de pruebas del proyecto                            | DWES, Pruebas     |
| **Selenium WebDriver**     | Automatización puntual de pruebas de registro y buscador                                     | Cobertura básica de pruebas automatizadas en el proyecto                                                            | Pruebas           |
| **Lighthouse**             | Auditoría de rendimiento, accesibilidad, SEO y buenas prácticas                              | Herramienta oficial de Chrome; puntuación 100 en accesibilidad documentada                                          | DIW               |
| **WAVE**                   | Análisis de accesibilidad orientado a errores y alertas                                      | Complemento al informe Lighthouse; sin errores en el alcance auditado                                               | DIW               |
| **WCAG Contrast Checker**  | Verificación de ratios de contraste de color                                                 | Parte de la auditoría de accesibilidad DIW Sprint 2                                                                 | DIW               |
| **Draw.io**                | Creación de diagramas técnicos, esquemas de arquitectura, Gantt, flujos funcionales, diagramas de componentes y modelo relacional simplificado | Se utilizó para generar los diagramas finales incluidos en la memoria y exportados como PNG en el anexo de figuras. Es una herramienta defendible porque permite explicar visualmente la planificación, arquitectura, flujos y base de datos del proyecto | Documentación, Agile, DWEC, DWES |
| **Visual Studio Code**     | Entorno de desarrollo principal                                                              | Coherente con el stack del proyecto y el flujo de trabajo del equipo                                                | Transversal       |
| **Figma, Canva, Photoshop y Pincel** | Prototipado, composición visual, edición de recursos gráficos, apoyo en wireframes, identidad visual y pruebas de generación/edición de material visual | Se usaron como herramientas de apoyo visual durante el diseño y preparación de recursos. Figma y Canva ayudaron en prototipado/composición, Photoshop en edición gráfica y Pincel como apoyo complementario desde VS Code. No fueron el núcleo técnico del desarrollo, sino apoyo para DIW y documentación visual | DIW, Documentación |

> **Nota sobre la estructura del repositorio:** la documentación histórica de Sprint 3 menciona en algunos puntos una carpeta `frontend-react/`. En la rama actual `sprint-3-react-jsx`, el cliente React está integrado en la raíz del proyecto con `js/`, `pages/`, `src/`, `assets/` y Vite. Esta memoria se basa en la estructura real vigente.

---

# 3. ESTIMACIÓN DE RECURSOS Y PLANIFICACIÓN

PacePal se ha organizado con un enfoque Scrum educativo. No se replica un marco empresarial completo, pero sí se trabaja con cadencia sencilla, roles definidos, backlog priorizado, revisión por sprint y política de evidencias desde el inicio. Ese modelo de trabajo se refleja en la planificación por sprints, en la organización de las evidencias y en la trazabilidad entre requisitos, desarrollo y pruebas.

### Roles del equipo

| Rol                      | Responsabilidades en PacePal                                                                                                         |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Product Owner**        | Priorizar historias de usuario, decidir el alcance de cada sprint y aceptar funcionalidades según su criterio de aceptación          |
| **Scrum Master**         | Mantener el tablero organizado, cuidar que Scrum tenga sentido y asegurar que cada incremento tiene evidencias para defensa          |
| **Equipo de desarrollo** | Construir el producto, dividir el trabajo en tareas, mantener el código ordenado e integrar todos los módulos en la misma aplicación |

Los roles fueron asumidos por los dos integrantes del equipo: Pablo Sevillano Aparicio y Alejandro Pacheco.

### Tabla de planificación por sprints

| Sprint       | Materias implicadas         | Trabajo principal                                                                                                                                                      | Evidencias / documentos asociados                                                                                                                                        |
| ------------ | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Sprint 0** | Agile, IPE, transversal     | Definición del proyecto, análisis del producto, identidad del equipo, Scrum base, backlog inicial y reglas de evidencias                                               | `docs/02-agile/01-scrum-base.md`, `docs/02-agile/02-historias-usuario-v1.md`, `docs/01-requisitos/01-definicion-proyecto.md`, `docs/evidencias/01-sprint0/`              |
| **Sprint 1** | DIW, DWEC                   | Tendencias y competencia, guía de estilos, wireframes desktop y mobile, landing page, formularios de registro y login, accesibilidad básica                            | `docs/03-diw/sprint-1/`, `docs/03-diw/wireframes/`, `docs/04-dwec/sprint-1/`, `docs/evidencias/diw/sprint-1/`                                                            |
| **Sprint 2** | DIW, DWEC, DWES             | Accesibilidad formal (Lighthouse, WAVE, WCAG), usabilidad, tienda dinámica, buscador AJAX, carrito legacy, API REST en PHP, base de datos relacional, sesiones y roles | `docs/03-diw/sprint-2/`, `docs/04-dwec/sprint-2/`, `docs/05-dwes/sprint-2/`, `docs/evidencias/diw/sprint-2/`, `tests/funcionales/`                                       |
| **Sprint 3** | DIW, DWEC, DWES, Despliegue | Migración del cliente a React con Vite, vídeo en tienda, microinteracciones, fallback demo GitHub Pages, despliegue local con XAMPP, pruebas finales y documentación   | `docs/03-diw/sprint-3/`, `docs/04-dwec/sprint-3/`, `docs/despliegue/`, `tests/react-sprint-3/`, `docs/evidencias/despliegue/sprint-3/`, `docs/evidencias/dwec/sprint-3/` |
| **Cierre**   | Transversal, documentación  | Consolidación documental, revisión de calidad, plan de figuras y anexos, elaboración de memoria final                                                                 | `docs/documentacion-final/`                                                                                                                                              |

### Recursos principales del proyecto

| Recurso                                | Uso dentro del proyecto                                                 | Evidencia                                    |
| -------------------------------------- | ----------------------------------------------------------------------- | -------------------------------------------- |
| Equipo de desarrollo (2 personas)      | Implementación de diseño, cliente, servidor, despliegue y documentación | `docs/02-agile/01-scrum-base.md`             |
| Repositorio GitHub                     | Versionado y organización del trabajo por sprints                       | Estructura del repo y ramas                  |
| XAMPP (Apache, PHP, MySQL, phpMyAdmin) | Ejecución local del proyecto completo                                   | `docs/despliegue/INSTALACION_LOCAL_XAMPP.md` |
| Vite + Node.js                         | Desarrollo y build del cliente React                                    | `package.json`, `vite.config.js`             |
| Postman                                | Pruebas de endpoints de la API                                          | `tests/postman/`                             |
| Lighthouse, WAVE, WCAG Checker         | Auditoría formal de accesibilidad                                       | `docs/evidencias/diw/sprint-2/`              |
| Draw.io                                | Diagramas técnicos del proyecto                                         | `docs/documentacion-final/figuras/`          |

---

## 3.1. Diagrama de Gantt

La planificación del proyecto se puede visualizar en el Diagrama de Gantt exportado desde Draw.io, que muestra la distribución relativa de fases y tareas principales a lo largo de los cuatro sprints y el cierre documental. Los ejes representan las semanas de trabajo aproximadas; la duración real de cada sprint se ajustó a las entregas del calendario académico.

[Ver Figura A1: Diagrama de Gantt](#fig-a1-diagrama-de-gantt)

El Gantt refleja que las fases no son completamente secuenciales: el diseño de interfaces y la accesibilidad se solapan con el desarrollo del backend, y la documentación avanza en paralelo con la implementación técnica desde el Sprint 2. Esa superposición es coherente con el modelo de trabajo Agile adoptado.

---

# 4. DESARROLLO DE LA PRÁCTICA

## 4.1. Requisitos

### A) Requerimientos funcionales

Los requisitos funcionales del proyecto se han extraído de las historias de usuario y de la documentación de los sprints. Se organizan por módulo para facilitar la lectura y la trazabilidad durante la defensa.

**Navegación pública**

| ID    | Requisito funcional                                                                                                         | Evidencia                 |
| ----- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| RF-01 | El sistema permite navegar por inicio, actividades, rutas, tienda, about, contacto y política de cookies sin iniciar sesión | `js/App.jsx`, `README.md` |

**Rutas y actividades**

| ID    | Requisito funcional                                                                   | Evidencia                                                                     |
| ----- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| RF-05 | El usuario puede consultar el listado de actividades y acceder al detalle de cada una | `pages/actividades/ActivitiesPage.jsx`, `tests/funcionales/08-actividades.md` |
| RF-06 | El usuario autenticado puede crear una actividad sobre una ruta existente             | `pages/actividades/CreateActivityPage.jsx`, `src/api/index.php`               |
| RF-07 | El usuario autenticado puede unirse o abandonar una actividad                         | `pages/actividades/ActivityDetailPage.jsx`, `src/api/index.php`               |
| RF-08 | El sistema muestra el catálogo de rutas y el detalle de cada ruta                     | `pages/rutas/RoutesPage.jsx`, `src/api/index.php`                             |

**Tienda y carrito**

| ID    | Requisito funcional                                                                                      | Evidencia                                                                 |
| ----- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| RF-09 | El sistema muestra el catálogo de productos, permite búsquedas y acceso al detalle                       | `pages/tienda/ShopPage.jsx`, `tests/funcionales/06-buscador-productos.md` |
| RF-10 | El usuario puede añadir productos al carrito, cambiar cantidades, eliminar artículos y generar un pedido | `tests/react-sprint-3/07-carrito.md`, `src/api/index.php`                 |

**Autenticación y perfil**

| ID    | Requisito funcional                                                                               | Evidencia                                                                     |
| ----- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| RF-02 | El sistema permite registrar usuarios con nombre, email, contraseña, confirmación y DNI           | `docs/04-dwec/sprint-1/01-formularios-login-register.md`, `src/api/index.php` |
| RF-03 | El sistema permite iniciar y cerrar sesión manteniendo el estado del usuario                      | `src/api/index.php`, `tests/tests.md`                                         |
| RF-04 | El sistema diferencia invitado, usuario y administrador y bloquea acciones sensibles según el rol | `docs/05-dwes/sprint-2/roles-acceso.md`, `src/api/index.php`                  |
| RF-11 | El usuario autenticado puede consultar su perfil y su historial de pedidos                        | `pages/usuario/ProfilePage.jsx`, `tests/funcionales/09-perfil.md`             |

**Administración**

| ID    | Requisito funcional                                                                          | Evidencia                                                    |
| ----- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| RF-12 | El administrador puede gestionar usuarios, productos, rutas, actividades, pedidos y reportes | `pages/admin/AdminPage.jsx`, `tests/funcionales/10-admin.md` |

**API y base de datos**

| ID    | Requisito funcional                                                                                                          | Evidencia                                                     |
| ----- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| RF-13 | El sistema expone una API REST en PHP con respuestas JSON para todas las entidades principales                               | `src/api/index.php`, `docs/05-dwes/sprint-2/endpoints-api.md` |
| RF-14 | El sistema persiste usuarios, rutas, actividades, pedidos, artículos, participaciones y reportes en base de datos relacional | `db/schema.sql`, `db/pacepal.sql`                             |

**Accesibilidad y cookies**

| ID    | Requisito funcional                                                                                                                | Evidencia                                                                                           |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| RF-15 | El sistema gestiona el consentimiento de cookies y mantiene evidencias en local y en el fallback demo publicado                    | `src/api/index.php`, `docs/04-dwec/sprint-3/decision-fallback-github-pages.md`                      |
| RF-16 | El proyecto se ejecuta en local con XAMPP y el cliente React se publica también en GitHub Pages con comportamiento de demostración | `docs/despliegue/INSTALACION_LOCAL_XAMPP.md`, `docs/04-dwec/sprint-3/cliente-react-github-pages.md` |

---

### B) Requerimientos no funcionales

| ID     | Requerimiento no funcional                                                                        | Justificación / evidencia                                                         |
| ------ | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| RNF-01 | La interfaz es responsive y usable en móvil y escritorio                                          | Wireframes desktop/mobile, `css/estilos.css`, `css/react.css`, documentación DIW  |
| RNF-02 | La landing cumple WCAG 2.1 nivel A en el alcance auditado                                         | `docs/03-diw/sprint-2/01-accesibilidad-wcag.md`                                   |
| RNF-03 | Los formularios usan etiquetas `<label>`, mensajes de error y feedback comprensible               | `pages/formulario/ContactPage.jsx`, documentación DWEC Sprint 1                   |
| RNF-04 | El código cliente está modularizado por páginas, hooks, servicios y componentes                   | `js/`, `pages/`, `js/components/`, `js/hooks/`                                    |
| RNF-05 | El backend separa router, controladores, modelos y configuración                                  | `src/api/`, `src/controllers/`, `src/models/`, `src/config/`                      |
| RNF-06 | Las consultas a base de datos usan PDO y sentencias preparadas                                    | Documentación DWES y estructura de modelos                                        |
| RNF-07 | La aplicación muestra errores controlados cuando la API o la conexión no están disponibles        | `js/services/api.js`, pruebas React y despliegue                                  |
| RNF-08 | El entorno local es reproducible con XAMPP, phpMyAdmin y Node.js                                  | `docs/despliegue/INSTALACION_LOCAL_XAMPP.md`                                      |
| RNF-09 | El cliente React compila correctamente con Vite                                                   | `package.json`, build validado en documentación de pruebas                        |
| RNF-10 | Las imágenes y recursos visuales están optimizados para web y se reutilizan de forma coherente    | DIW Sprint 2, `img/`, `docs/04-dwec/sprint-3/ficha-producto-rediseno-imagenes.md` |
| RNF-11 | El proyecto mantiene trazabilidad documental entre requisitos, implementación, prueba y evidencia | `docs/requisitos-normalizados/`, `docs/evidencias/`, `tests/`                     |

---

### C) Historias de usuario

El backlog de historias de usuario se incorpora de forma resumida y defendible en el [Anexo 9.6: Historias de usuario y backlog](#anexo-96-historias-de-usuario-y-backlog). Como fuente de trabajo se utilizó el documento interno de historias de usuario elaborado durante el proyecto.

| ID        | Historia de usuario (síntesis)                                                                                                      | Validación clave                                                                             | Valor                                            | Prioridad | Estimación | Sprint / Materia       |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------ | --------- | ---------- | ---------------------- |
| **HU-01** | Como usuario nuevo, quiero registrarme con email, contraseña y DNI, para poder crear y unirme a actividades con una cuenta real     | Formulario completo; DNI y email válidos y únicos; cuenta creada correctamente               | Evita cuentas falsas y mejora la convivencia     | Alta      | 5          | Sprint 1 / DWEC        |
| **HU-02** | Como usuario registrado, quiero iniciar sesión con mi email y contraseña, para poder acceder a crear y unirme a actividades         | Login correcto; mensaje de error sin revelar datos internos; sesión persistente al recargar  | Base del control y la seguridad                  | Alta      | 3          | Sprint 1 / DWEC        |
| **HU-03** | Como usuario registrado, quiero cerrar sesión cuando quiera, para poder proteger mi cuenta en un ordenador compartido               | Botón visible; limpieza de sesión en servidor; acceso bloqueado tras cerrar                  | Control básico de seguridad                      | Alta      | 2          | Sprint 1 / DWEC-DWES   |
| **HU-04** | Como sistema, quiero diferenciar permisos de usuario y administrador, para poder proteger la moderación y la gestión                | Rutas admin protegidas; endpoints con validación de rol; error controlado si no autorizado   | Evita acceso no autorizado a funciones sensibles | Alta      | 5          | Sprint 2 / DWES        |
| **HU-05** | Como visitante, quiero ver un listado de actividades disponibles, para poder decidir si me registro o entro                         | Listado con tarjetas; datos de ruta, fecha, nivel, ritmo y plazas; detalle accesible         | Pantalla principal del producto                  | Alta      | 5          | Sprint 1-2 / DIW-DWEC  |
| **HU-10** | Como usuario, quiero entrar al detalle de una actividad, para poder ver toda la información antes de unirme                         | Detalle completo; plazas, normas, participantes; botones de acción según estado de sesión    | Evita errores al apuntarse                       | Alta      | 3          | Sprint 2 / DWEC        |
| **HU-11** | Como usuario autenticado, quiero unirme a una actividad con plazas disponibles, para poder participar en la salida                  | Botón unirse visible; plazas se descuentan; confirmación visible; API responde correctamente | Funcionalidad central del producto               | Alta      | 3          | Sprint 2 / DWEC-DWES   |
| **HU-14** | Como usuario autenticado, quiero crear una actividad sobre una ruta del sistema, para poder organizar una salida                    | Formulario completo; ruta elegible del sistema; actividad visible en el listado              | Diferencia PacePal de otras apps                 | Alta      | 5          | Sprint 2 / DWEC-DWES   |
| **HU-17** | Como usuario, quiero buscar productos por texto sin recargar, para poder encontrarlos rápido                                        | Campo visible; resultados actualizados sin recarga; estado vacío controlado                  | Mejora experiencia y cumple buscador dinámico    | Alta      | 5          | Sprint 2 / DWEC        |
| **HU-18** | Como usuario, quiero añadir productos al carrito, cambiar cantidades y eliminar artículos, para poder gestionar mi compra           | Carrito actualiza cantidades y total en tiempo real; eliminar funciona correctamente         | Base de la tienda funcional                      | Alta      | 8          | Sprint 2-3 / DWEC-DWES |
| **HU-20** | Como usuario autenticado, quiero ver mi perfil y mi historial de pedidos, para poder gestionar mi cuenta                            | Datos del usuario visibles; historial de pedidos listado                                     | Control de cuenta del usuario                    | Media     | 3          | Sprint 2-3 / DWEC-DWES |
| **HU-22** | Como administrador, quiero gestionar usuarios, productos, rutas, actividades, pedidos y reportes, para poder mantener la plataforma | Panel protegido por rol admin; bloques de gestión cargados desde la API                      | Imprescindible para la moderación                | Alta      | 8          | Sprint 2-3 / DWES      |
| **HU-25** | Como usuario, quiero gestionar mis preferencias de cookies, para poder controlar mi consentimiento                                  | Banner visible; opciones aceptar/rechazar; preferencias persistentes                         | Cumplimiento RGPD básico                         | Alta      | 3          | Sprint 3 / DWEC        |

> El backlog se incluye en esta memoria en formato resumido y defendible (Anexo 9.6). El documento interno de historias se utilizó como fuente de trabajo durante el desarrollo.

---

### D) Diagramas

Los diagramas técnicos del proyecto se han elaborado con Draw.io. Las referencias desde el cuerpo principal apuntan a los anexos donde se incluyen completos.

- [Ver Figura A2: Diagrama de casos de uso](#fig-a2-casos-de-uso) — actores, acciones y relaciones principales del sistema.
- [Ver Figura A3: Diagrama de clases simplificado](#fig-a3-clases) — entidades del dominio y su relación con los controladores y modelos PHP.
- [Ver Figura B3: Modelo relacional simplificado](#fig-b3-modelo-relacional) — tablas, claves primarias y relaciones del esquema de base de datos.

**Tabla resumen de actores y casos de uso**

| Actor              | Casos de uso principales                                                                                                                                        |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Invitado           | Ver inicio, ver rutas, ver actividades, ver tienda, consultar detalle, abrir registro y login                                                                   |
| Usuario registrado | Iniciar sesión, cerrar sesión, crear actividad, unirse o salir de actividad, buscar productos, añadir al carrito, generar pedido, ver perfil, gestionar cookies |
| Administrador      | Gestionar usuarios, productos, rutas, actividades, pedidos y reportes                                                                                           |
| Sistema            | Validar sesión, responder API, persistir datos, calcular carrito y pedidos, controlar roles                                                                     |

**Tabla resumen de entidades del modelo de datos**

| Entidad           | Función                                      | Relaciones clave                                        |
| ----------------- | -------------------------------------------- | ------------------------------------------------------- |
| `usuarios`        | Identidad, credenciales, rol y datos básicos | Actividades creadas, pedidos, participaciones, reportes |
| `rutas`           | Recorridos disponibles en el sistema         | Actividades                                             |
| `actividades`     | Eventos concretos sobre rutas existentes     | Rutas, usuario creador, participaciones                 |
| `participaciones` | Une usuarios con actividades                 | N:M entre usuarios y actividades                        |
| `categorias`      | Clasifica productos                          | Artículos                                               |
| `articulos`       | Catálogo de la tienda                        | Categorías, detalle de pedido                           |
| `pedidos`         | Cabecera de compra de un usuario             | Usuarios, detalle de pedido                             |
| `detalle_pedido`  | Líneas del pedido                            | Pedidos, artículos                                      |
| `reportes`        | Incidencias y avisos                         | Usuarios, actividades (opcional)                        |

---

## 4.2. Análisis

La solución planteada en PacePal responde a un problema concreto: la diferencia entre consultar información sobre rutas deportivas y coordinar realmente una actividad con otras personas. Para cubrir ese hueco, el proyecto separa dos conceptos que en otras plataformas suelen mezclarse: la ruta como recurso fijo del sistema, y la actividad como quedada concreta creada por un usuario sobre esa ruta. Esa decisión de diseño condiciona el modelo de datos, las pantallas, los permisos y la propuesta de valor del producto.

**Público objetivo:** personas que practican actividades físicas de forma ocasional o regular, que buscan motivación grupal, que no quieren la complejidad de plataformas de alto rendimiento, y que pueden estar interesadas en equipamiento deportivo con criterios de sostenibilidad.

**Propuesta de solución:** una aplicación web con frontend en React, backend en PHP y base de datos MySQL que cubre el ciclo completo de una actividad deportiva en comunidad: descubrir rutas, organizar actividades, unirse a planes de otros usuarios y comprar equipamiento relacionado.

**Flujo general de la aplicación:**

1. El visitante entra en la landing y navega por el contenido público.
2. Si quiere participar, se registra o inicia sesión.
3. Puede consultar rutas disponibles y ver sus características.
4. Puede crear una actividad sobre una ruta o unirse a actividades existentes.
5. Puede explorar la tienda, buscar productos, añadir al carrito y generar un pedido.
6. El administrador gestiona el contenido desde un panel protegido.

**Separación frontend / backend:**

El cliente React se comunica con el backend PHP a través de la API REST. El backend responde en JSON y no sirve HTML. Esta separación permite que el cliente pueda publicarse de forma estática en GitHub Pages, aunque sin backend PHP, lo que requiere el fallback demo documentado.

**Decisión de usar React en Sprint 3:**

La migración a React se justifica por la necesidad de demostrar competencia en el módulo DWEC de nivel avanzado: estado de componentes, hooks, servicios, composición de pantallas y gestión de flujos asíncronos. Técnicamente, también mejora la experiencia de usuario al evitar recargas completas y facilitar la modularidad del cliente.

**Decisión de mantener la API PHP + PDO:**

Se decidió no cambiar el backend porque el módulo DWES ya lo cubría con una implementación funcional y probada. Cambiar el backend habría supuesto duplicar trabajo sin beneficio evaluable.

**Decisión de fallback controlado en GitHub Pages:**

GitHub Pages no puede ejecutar PHP ni MySQL. El cliente React publicado necesita un modo demo controlado que simule respuestas cuando la API no está disponible. Esa solución no pretende sustituir al backend real, sino permitir enseñar el cliente en un hosting estático sin ocultar la limitación. En defensa se puede explicar claramente qué funciona en local y qué funciona en publicación.

**Coherencia entre requisitos, diseño e implementación:**

Los requisitos funcionales definidos en Sprint 0 se pueden trazar directamente al código de la rama actual, a las pruebas funcionales y a las evidencias incluidas en esta documentación final. Donde existe una divergencia (por ejemplo, algunos filtros de actividades que estaban en el backlog pero no se implementaron completamente), la documentación lo recoge de forma honesta en lugar de presentarlos como funcionalidades cerradas.

[Ver Figura B1: Diagrama de componentes](#fig-b1-componentes)  
[Ver Figura B2: Esquema de arquitectura general](#fig-b2-arquitectura)

---

## 4.3. Diseño

### Identidad visual de PacePal

El diseño de PacePal busca un equilibrio entre limpieza visual, identidad deportiva y facilidad de lectura. La guía de estilos se resume de forma autocontenida en el [Anexo 9.5: Guía de estilos](#anexo-95-guia-de-estilos), basada en el trabajo realizado durante el Sprint 1. En el cuerpo principal se incluye una síntesis de los elementos más importantes.

[Ver Figura C1: Logotipo de PacePal](#fig-c1-logo)

### Paleta cromática

La paleta principal de PacePal combina verde oscuro, verde lima y blanco, con gris suave como color de fondo y negro o gris oscuro para textos. Esa elección conecta visualmente con el entorno natural y la actividad al aire libre, y además ofrece contraste suficiente para cumplir los criterios de accesibilidad revisados.

[Ver Figura C2: Paleta de color](#fig-c2-paleta)

| Color                  | Función                                      | Observaciones                      |
| ---------------------- | -------------------------------------------- | ---------------------------------- |
| Verde oscuro principal | Color de marca, cabecera, botones primarios  | Base de la identidad visual        |
| Verde lima / acento    | Llamadas a la acción secundarias, destacados | Contraste con el verde oscuro      |
| Blanco                 | Fondos, texto sobre fondo oscuro             | Limpieza y legibilidad             |
| Gris suave             | Fondos de sección, tarjetas, separadores     | Jerarquía visual sin saturar       |
| Negro / gris oscuro    | Texto principal                              | Contraste óptimo sobre fondo claro |

### Tipografía

La tipografía principal en la implementación web es **Inter**, cargada desde Google Fonts. Se usa en todos los textos de la interfaz: títulos, cuerpos, etiquetas y botones. Su legibilidad en pantalla y su neutralidad hacen que encaje bien con el estilo del producto. Bootstrap complementa con sus clases de texto para jerarquía y espaciado.

### Iconografía

Se utiliza **Bootstrap Icons** como sistema de iconografía principal. Los iconos apoyan la navegación, los botones de acción y las tarjetas de actividad y producto. Su integración es ligera y coherente con Bootstrap 5.

### Elementos de interfaz

Los **botones** siguen la paleta cromática: botones primarios en verde oscuro, secundarios en contorno o gris, y de alerta en rojo. Los **formularios** usan labels visibles, campos con estados `:focus` diferenciados y mensajes de error debajo del campo correspondiente. Las **tarjetas** presentan el contenido con imagen, título, descripción resumida y botón de acción. La **navegación** es horizontal en escritorio y plegable (hamburger) en móvil.

### Diseño responsive

El diseño responsive de PacePal es modular. Cada sección de la aplicación tiene su propia hoja de estilos responsive: `responsiveLanding.css`, `responsiveTienda.css`, `responsiveRutas.css`, `responsiveActividades.css`, `responsiveUsuario.css` y `responsiveAdmin.css`. En el cliente React, `css/react.css` añade reglas responsive propias y carga `sobrenosotros/responsiveSobrenosotros.css`. El diseño se planificó desde el primer sprint con wireframes en ambos formatos.

[Ver Figura C5: Wireframe landing escritorio](#fig-c5-wireframe-landing-desktop)  
[Ver Figura C6: Wireframe landing móvil](#fig-c6-wireframe-landing-mobile)  
[Ver Figura C8: Esquema responsive modular](#fig-c8-responsive-modular)

### Accesibilidad aplicada al diseño

Las decisiones de diseño tienen en cuenta la accesibilidad desde el inicio: contraste de colores revisado según criterios WCAG, etiquetas asociadas a todos los campos de formulario, textos alternativos en imágenes, foco visible por teclado y semántica HTML correcta. La auditoría formal de la landing en Sprint 2 confirma el cumplimiento del nivel objetivo revisado.

### Voz y tono del producto

El tono de PacePal es cercano, directo y activo. Los textos de la interfaz evitan el lenguaje corporativo o excesivamente técnico. Se usa la segunda persona del singular para las llamadas a la acción y los mensajes de estado. El producto habla como un compañero de actividad, no como una plataforma empresarial.

### Wireframes y bocetos

Los wireframes completos de todas las pantallas, en formato desktop y mobile, se incluyen en el [Anexo 9.4: Bocetos y wireframes completos](#anexo-94-bocetos-y-wireframes). En el cuerpo se citan solo los wireframes más representativos.

### Pantallas principales y funcionamiento

| Pantalla             | Objetivo                                                       | Funcionamiento                                            | Evidencia                                  |
| -------------------- | -------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------ |
| Inicio (landing)     | Presentar la propuesta de valor y facilitar acceso a secciones | El usuario visualiza propuesta, CTA y contenido destacado | `pages/landing/HomePage.jsx`               |
| Actividades          | Consultar actividades existentes                               | Listado con tarjetas; acceso a detalle                    | `pages/actividades/ActivitiesPage.jsx`     |
| Detalle de actividad | Ver información completa y actuar sobre la actividad           | Unirse, abandonar o eliminar según rol y sesión           | `pages/actividades/ActivityDetailPage.jsx` |
| Rutas                | Consultar rutas disponibles                                    | Lista rutas; acceso a detalle                             | `pages/rutas/RoutesPage.jsx`               |
| Detalle de ruta      | Mostrar descripción, dificultad y distancia                    | Resume la ruta y enlaza a crear actividad                 | `pages/rutas/RouteDetailPage.jsx`          |
| Tienda               | Explorar catálogo y buscar productos                           | Buscador, vídeo integrado y paginación                    | `pages/tienda/ShopPage.jsx`                |
| Detalle de producto  | Ver galería, descripción y precio                              | Seleccionar cantidad y añadir al carrito                  | `pages/tienda/ProductDetailPage.jsx`       |
| Carrito              | Revisar compra y generar pedido                                | Actualiza cantidades, total y checkout                    | `pages/tienda/CartPage.jsx`                |
| Perfil               | Consultar y editar cuenta e historial                          | Datos del usuario y pedidos asociados                     | `pages/usuario/ProfilePage.jsx`            |
| Administración       | Gestionar todos los recursos del sistema                       | Panel protegido por rol `admin`                           | `pages/admin/AdminPage.jsx`                |
| Contacto             | Recoger dudas mediante formulario                              | Valida campos y muestra confirmación                      | `pages/formulario/ContactPage.jsx`         |
| Cookies              | Gestionar consentimiento                                       | Banner, opciones y persistencia                           | `pages/legal/CookiesPage.jsx`              |

### Multimedia y experiencia de usuario

En Sprint 3 se integró un vídeo en la página de tienda (`ShopPage.jsx`) usando un elemento `<video controls>`, con el archivo `img/landing/pacepalTienda.mp4`. Esta mejora aporta dinamismo a la presentación del catálogo y demuestra competencia en integración multimedia del módulo DIW.

Sobre el audio: existen los archivos `img/audio/pacepal-contacto.mp3` e `img/audio/pacepal-contacto.ogg` en el repositorio. Sin embargo, en la revisión del código de la rama actual no se ha localizado la integración definitiva de un elemento `<audio controls>` dentro de las páginas JSX. Esta memoria lo documenta honestamente como funcionalidad preparada pero no cerrada en la rama final de entrega.

---

# 5. PRUEBAS

## 5.1. Pruebas funcionales

La validación funcional del proyecto se ha realizado mediante pruebas manuales estructuradas, revisión de la colección Postman, verificación del cliente React en local con Vite y con la API real, y comprobación del comportamiento del fallback demo en GitHub Pages.

| ID    | Funcionalidad                           | Pasos resumidos                                                | Resultado esperado                                      | Resultado                | Evidencia                                                                            | Estado |
| ----- | --------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------ | ------ |
| PF-01 | Registro incorrecto                     | Introducir email inválido y contraseña débil                   | El sistema bloquea y muestra errores                    | Correcto                 | `tests/funcionales/01-registro-incorrecto.md`                                        | ✅     |
| PF-02 | Registro correcto                       | Rellenar registro con datos válidos                            | Cuenta creada; redirección o inicio de sesión           | Correcto                 | `tests/funcionales/02-registro-correcto.md`                                          | ✅     |
| PF-03 | Login incorrecto                        | Credenciales erróneas                                          | Mensaje de error sin acceso                             | Correcto                 | `tests/funcionales/03-login-incorrecto.md`                                           | ✅     |
| PF-04 | Login correcto                          | Credenciales válidas                                           | Acceso correcto y cambio de estado                      | Correcto                 | `tests/funcionales/04-login-correcto.md`                                             | ✅     |
| PF-05 | Logout y limpieza de sesión             | Iniciar y cerrar sesión                                        | Estado invitado; sesión limpia                          | Correcto                 | `tests/react-sprint-3/README.md`                                                     | ✅     |
| PF-06 | Validación condicional del registro     | Rellenar o borrar dirección                                    | La tarjeta aparece o desaparece                         | Correcto                 | `tests/funcionales/05-tarjeta-aparece-desaparece.md`                                 | ✅     |
| PF-07 | Buscador dinámico de productos          | Buscar, vaciar, paginar, probar sin resultados                 | Galería se actualiza sin recargar                       | Correcto                 | `tests/funcionales/06-buscador-productos.md`                                         | ✅     |
| PF-08 | Carrito React                           | Añadir, modificar, eliminar y finalizar pedido                 | Contador, subtotal y total recalculados                 | Correcto                 | `tests/react-sprint-3/07-carrito.md`                                                 | ✅     |
| PF-09 | Gestión de actividades                  | Crear actividad, unirse o abandonar                            | Estado actualizado; API responde correctamente          | Correcto                 | `tests/funcionales/08-actividades.md`                                                | ✅     |
| PF-10 | Perfil de usuario                       | Abrir perfil y revisar datos y pedidos                         | Datos del usuario y pedidos asociados                   | Correcto                 | `tests/funcionales/09-perfil.md`                                                     | ✅     |
| PF-11 | Panel de administración                 | Acceder al panel y revisar bloques de gestión                  | Usuarios, reportes, productos, rutas y pedidos cargados | Correcto                 | `tests/funcionales/10-admin.md`                                                      | ✅     |
| PF-12 | API con Postman                         | Ejecutar colección con entorno local                           | Respuestas `status=ok` y HTTP correctos                 | Parcialmente documentado | `tests/postman/pacepal.postman_collection.json`, `docs/evidencias/dwes/postman1.png` | ⚠️     |
| PF-13 | Sesión y conexión local API-BD          | Consultar `/api/session` y `/api/health`                       | Respuesta JSON válida y conexión correcta               | Correcto                 | `docs/evidencias/despliegue/sprint-3/05-api-session-localhost-admin.png`             | ✅     |
| PF-14 | Despliegue local con XAMPP              | Abrir XAMPP, phpMyAdmin y aplicación en localhost              | Entorno operativo y accesible                           | Correcto                 | `docs/evidencias/despliegue/sprint-3/`                                               | ✅     |
| PF-15 | Cliente React publicado en GitHub Pages | Abrir URL publicada; probar cookies, login demo y carrito demo | Cliente navega con fallback demo                        | Correcto                 | `tests/react-sprint-3/README.md`                                                     | ✅     |

[Ver Figura D4: Carrito React con producto y total](#fig-d4-carrito)  
[Ver Figura D5: Confirmación de añadir al carrito](#fig-d5-anadir-carrito)  
[Ver Figura D7: Flujo de autenticación](#fig-d7-flujo-auth)  
[Ver Figura G1: Panel XAMPP activo](#fig-g1-xampp)  
[Ver Figura G3: GitHub Pages publicado con HTTPS](#fig-g3-github-pages)

> **Aclaración importante sobre las pruebas de API:** Las capturas en `capturas-finales/06-postman/api-get-*.png` muestran respuestas JSON accediendo directamente a los endpoints desde el navegador; no son capturas de Postman. Las evidencias reales de Postman son `docs/evidencias/dwes/postman1.png` y `postman2.png`, que muestran el runner de Postman con resultados de la colección. Ambos tipos de evidencia son válidos y complementarios, pero no son intercambiables.

---

## 5.2. Inspección de accesibilidad

La evidencia formal de accesibilidad más sólida incluida en la documentación del proyecto es el informe de DIW Sprint 2. Su alcance es la landing de PacePal y verifica el cumplimiento del nivel objetivo WCAG 2.1 A mediante revisión manual y herramientas automáticas. El resultado es:

- **Lighthouse:** puntuación 100 en accesibilidad.
- **WAVE:** 0 errores.
- **WCAG Contrast Checker:** ratios de contraste correctos para los elementos revisados.

[Ver Figura F1: Resultado Lighthouse — accesibilidad 100](#fig-f1-lighthouse)

Las evidencias adicionales de accesibilidad (análisis WAVE, contraste WCAG y foco por teclado) se incluyen en [Figura F2: Análisis WAVE](#fig-f2-wave) y en las figuras de accesibilidad del [Anexo 9.7: Figuras, diagramas y evidencias visuales](#anexo-97-figuras-diagramas-evidencias).

| Aspecto revisado                  | Evidencia                                                               | Resultado                       |
| --------------------------------- | ----------------------------------------------------------------------- | ------------------------------- |
| HTML semántico en la landing      | Informe DIW Sprint 2                                                    | Correcto en el alcance auditado |
| Idioma de la página               | `<html lang="es">` en `index.html`                                      | Correcto                        |
| Etiquetas asociadas a formularios | `pages/formulario/ContactPage.jsx`, formularios de autenticación        | Correcto                        |
| Mensajes de error visibles        | Formularios DWEC y React con mensajes bajo el campo                     | Correcto                        |
| Navegación por teclado            | Declarada como validada en el informe DIW; foco visible documentado     | Correcto en el alcance revisado |
| Contraste                         | Informe DIW con ratios registrados                                      | Correcto en el alcance revisado |
| ARIA y atributos de apoyo         | Formularios React con `aria-invalid` y `aria-describedby`               | Parcialmente verificado         |
| Textos alternativos en imágenes   | Verificado para la landing; presente en galerías y recursos de producto | Parcialmente verificado         |

> **Nota sobre navegación por voz:** la ayuda por voz se documenta como funcionalidad implementada en el código del proyecto. La evidencia visual principal conservada corresponde al foco por teclado (tecla Tab con outline visible) y a las auditorías de accesibilidad formales. No existe una captura clara que demuestre la activación de un lector de pantalla durante la navegación.

**Problemas detectados y mejoras aplicadas:**

- Durante la auditoría de la landing se detectó un problema de contraste en el subtítulo del hero y se corrigió oscureciendo el fondo.
- El cliente React incorpora la regla `prefers-reduced-motion`, lo que mejora la adaptación a usuarios sensibles al movimiento.
- La limitación actual de alcance es que no existe en el repositorio una auditoría formal completa de toda la SPA React equivalente al informe DIW de la landing.

---

## 5.3. Inspección de usabilidad

La inspección de usabilidad se realizó con dos técnicas complementarias: revisión heurística interna del equipo y prueba de navegación con un usuario externo. El objetivo fue comprobar si la estructura general de la aplicación resultaba clara sin instrucciones adicionales. La fuente principal es `docs/03-diw/sprint-2/05-inspeccion-usabilidad.md`.

| Aspecto                                  | Observación                                                                       | Resultado                               |
| ---------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------- |
| Claridad de navegación                   | El usuario identificó el menú principal y se movió entre secciones sin dificultad | Positivo                                |
| Consistencia visual                      | Las páginas mantienen identidad común: tipografía, paleta, tarjetas y espaciado   | Positivo                                |
| Comprensión del contenido                | La landing explica la propuesta del producto con claridad                         | Positivo                                |
| Localización del registro                | El usuario encontró la zona de registro sin ayuda                                 | Positivo                                |
| Diferenciación entre Rutas y Actividades | Duda inicial al interpretar ambos conceptos como sinónimos                        | Mejorable — resuelto con texto de apoyo |
| Adaptación responsive                    | El diseño funciona en móvil y escritorio; la documentación lo respalda            | Positivo                                |

La observación más útil para la defensa es la duda entre Rutas y Actividades. Es un hallazgo honesto que muestra que se realizó una inspección real, no un informe sin crítica. La solución adoptada fue añadir texto explicativo en la pantalla de actividades para diferenciar ambos conceptos.

---

# 6. CONCLUSIONES

## 6.1. Objetivos alcanzados

PacePal alcanza el objetivo principal de convertirse en un proyecto intermodular coherente y defendible. La memoria recoge una aplicación funcional con frontend React, backend PHP, base de datos relacional, pruebas documentadas y evidencias técnicas acumuladas. También queda cubierto el objetivo de trabajar por sprints con trazabilidad suficiente para explicar qué se hizo en cada fase, por qué y con qué resultado.

**Por módulo:**

- **DIW:** guía de estilos, wireframes desktop y mobile, accesibilidad formal auditada con Lighthouse y WAVE, usabilidad documentada, vídeo integrado y diseño responsive modular.
- **DWEC:** formularios con validación, buscador AJAX, carrito funcional, migración a React con hooks y servicios, pruebas funcionales y cobertura automatizada básica con Selenium.
- **DWES:** API REST en PHP con PDO, sesiones, roles diferenciados, base de datos relacional con nueve entidades y pruebas con Postman.
- **Despliegue:** guía de instalación local con XAMPP, evidencias técnicas del entorno (Apache, phpMyAdmin, healthcheck, puertos, ACL), publicación del cliente React en GitHub Pages con HTTPS y fallback demo documentado.
- **Sostenibilidad:** enfoque de producto con narrativa sostenible, tienda con concepto de materiales responsables y material gráfico del proyecto.

---

## 6.2. Conclusiones del proyecto

El proyecto deja varias conclusiones técnicas claras.

La primera es que la separación entre rutas y actividades da sentido propio al producto y lo diferencia de un simple listado estático. Esa decisión de diseño, tomada en Sprint 0, ha condicionado positivamente todo el resto del desarrollo.

La segunda es que la combinación de React en el cliente y PHP/PDO en el servidor permite mantener una estructura razonablemente limpia sin abandonar la base de trabajo anterior. La migración no fue un cambio de tecnología por modas, sino una evolución técnica con justificación académica clara.

La tercera conclusión es que el despliegue condiciona decisiones de arquitectura. Publicar un cliente React en GitHub Pages obliga a pensar en la separación real entre frontend y backend, a documentar los límites del entorno y a explicar con honestidad qué se está enseñando en cada contexto.

La cuarta es sobre la documentación: durante el proyecto se generó material técnico valioso, fragmentado por sprints y módulos. La memoria final no es un volcado de esos documentos; es la reorganización de ese material con un hilo técnico único, honestidad sobre lo que falta y claridad sobre lo que sí está cerrado.

Desde el punto de vista del aprendizaje, el proyecto obliga a resolver problemas reales de integración: paridad funcional entre legacy y React, sesiones PHP, JSON, CORS en local, instalación con XAMPP, fallback para hosting estático y consistencia documental a lo largo de meses. Para un proyecto de 2.º DAW, ese conjunto de problemas es razonable y completamente defendible.

---

## 6.3. Propuestas de futuro

1. **Despliegue backend real:** migrar la API PHP a un servidor con soporte de PHP y MySQL para eliminar la dependencia del fallback demo en producción.
2. **Auditoría de accesibilidad completa sobre la SPA React:** el informe actual cubre la landing; una auditoría completa de la aplicación daría mayor solidez al bloque de accesibilidad.
3. **Mejoras de pruebas automatizadas:** ampliar la cobertura de Selenium y añadir pruebas de integración de la API que verifiquen flujos completos.
4. **Panel de administración más completo:** añadir estadísticas, filtros avanzados y exportación de datos.
5. **Integración final del audio en contacto:** cerrar la integración del elemento `<audio controls>` en la página de contacto, que tiene los archivos preparados pero no está montada en la rama final.
6. **Mejoras UX adicionales:** incorporar notificaciones en tiempo real, mejora del flujo de pedido y optimización de imágenes con formatos modernos (WebP, AVIF).
7. **Compatibilidad multi-navegador documentada:** validar Chrome, Edge, Firefox y Brave manualmente antes de futuras entregas.

---

# 7. GLOSARIO

| Término                 | Definición en el contexto de PacePal                                                                                                                                                                 |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **API REST**            | Interfaz de programación que expone endpoints HTTP para acceder y manipular recursos del sistema (productos, rutas, actividades, sesión, pedidos, usuarios y cookies) devolviendo respuestas en JSON |
| **AJAX**                | Técnica de petición asíncrona usada para cargar o filtrar información sin recargar la página completa; aplicada en el buscador de productos                                                          |
| **Backend**             | Parte del sistema que ejecuta PHP, accede a la base de datos y gestiona sesiones; no visible directamente por el usuario final                                                                       |
| **Backlog**             | Lista priorizada de historias de usuario y tareas del proyecto; gestionada y actualizada por el Product Owner a lo largo de los sprints                                                              |
| **CRUD**                | Conjunto de operaciones básicas sobre datos: Create (crear), Read (leer), Update (actualizar), Delete (eliminar); implementadas en los controladores del backend                                     |
| **Endpoint**            | Ruta concreta de la API, por ejemplo `/api/login`, `/api/productos` o `/api/actividades`, que acepta un método HTTP concreto y devuelve una respuesta JSON                                           |
| **Fallback**            | Comportamiento alternativo del cliente cuando el backend no está disponible; en PacePal, el cliente publicado en GitHub Pages usa datos JSON estáticos como demo                                     |
| **Frontend**            | Parte del sistema que el usuario ve y con la que interactúa directamente; implementada en HTML, CSS, JavaScript y React                                                                              |
| **Historia de usuario** | Descripción breve de una funcionalidad desde la perspectiva del usuario, con formato "Como... quiero... para poder..." y criterios de validación asociados                                           |
| **JSON**                | Formato de texto para intercambio de datos entre el cliente y el servidor; también base del modo fallback demo del proyecto                                                                          |
| **Lighthouse**          | Herramienta de auditoría de Google Chrome que evalúa rendimiento, accesibilidad, SEO y buenas prácticas de una página web                                                                            |
| **PDO**                 | PHP Data Objects; capa de abstracción para acceso a base de datos en PHP que permite usar consultas preparadas y previene inyección SQL                                                              |
| **React**               | Librería de JavaScript usada en Sprint 3 para construir el cliente como SPA basada en componentes reutilizables                                                                                      |
| **Responsive**          | Capacidad de la interfaz para adaptarse a distintos tamaños de pantalla; implementada de forma modular con hojas CSS por sección                                                                     |
| **Rol**                 | Nivel de permisos de un usuario dentro del sistema: invitado, usuario registrado o administrador                                                                                                     |
| **Scrum**               | Marco de trabajo ágil adaptado educativamente en PacePal con backlog, sprints, revisiones y retrospectivas simplificadas                                                                             |
| **Sesión**              | Estado de autenticación del usuario mantenido en el servidor PHP mediante `$_SESSION`; simulado en el fallback demo publicado                                                                        |
| **Sprint**              | Período de trabajo delimitado con objetivos claros, revisión de entregables y actualización del backlog; PacePal tiene cuatro sprints más la fase de cierre                                          |
| **Vite**                | Herramienta de desarrollo y build para proyectos JavaScript modernos; usada para desarrollar y compilar el cliente React                                                                             |
| **WAVE**                | Herramienta de análisis de accesibilidad web de WebAIM que detecta errores y alertas en el HTML de una página                                                                                        |
| **WCAG**                | Web Content Accessibility Guidelines; conjunto de criterios de accesibilidad del W3C usados como referencia en la auditoría DIW                                                                      |

---

# 8. BIBLIOGRAFÍA Y WEBGRAFÍA

## Documentación del proyecto (fuentes internas)

- `docs/rubrica.md` — Rúbrica de evaluación del Proyecto Agile Intermodular
- `docs/plantillaDocumentacionProyecto.md` — Plantilla oficial de estructura de la memoria
- `docs/01-requisitos/01-definicion-proyecto.md` — Definición inicial del proyecto y propuesta de valor
- `docs/02-agile/01-scrum-base.md` — Scrum base y reglas de evidencias
- `docs/02-agile/02-historias-usuario-v1.md` — Historias de usuario y backlog
- `docs/03-diw/sprint-1/03-guia-estilos.md` — Guía de estilos y sistema de diseño
- `docs/03-diw/sprint-2/01-accesibilidad-wcag.md` — Informe de accesibilidad formal
- `docs/03-diw/sprint-2/05-inspeccion-usabilidad.md` — Inspección de usabilidad
- `docs/04-dwec/sprint-3/cliente-react-github-pages.md` — Cliente React y publicación en GitHub Pages
- `docs/04-dwec/sprint-3/decision-fallback-github-pages.md` — Decisión de fallback demo
- `docs/05-dwes/sprint-2/arquitectura-backend.md` — Arquitectura del backend
- `docs/05-dwes/sprint-2/endpoints-api.md` — Documentación de endpoints
- `docs/despliegue/INSTALACION_LOCAL_XAMPP.md` — Guía de instalación local
- `db/schema.sql` — Esquema completo de la base de datos
- `README.md` — Resumen técnico del proyecto

## Material docente

- `docs/00-material/agile/Programación del Proyecto Agile Intermodular 25-26.pdf`
- `docs/00-material/diw/` — Materiales del módulo DIW (sprints 1, 2 y 3)
- `docs/00-material/dwec/` — Materiales del módulo DWEC (sprints 1, 2 y 3)
- `docs/00-material/dwes/sprint-2/2do Sprint DWES.pdf`
- `docs/00-material/daw/sprint-3/despliegue Sprint 3.pdf`

## Documentación oficial y recursos externos

- **MDN Web Docs** — HTML, CSS, JavaScript, Fetch API, formularios y accesibilidad: https://developer.mozilla.org
- **Documentación oficial de PHP** — Sesiones, PDO y JSON: https://www.php.net/docs.php
- **Documentación oficial de React** — Componentes, hooks y estado: https://react.dev
- **Documentación oficial de Vite** — Configuración y build: https://vitejs.dev/guide/
- **Documentación oficial de Bootstrap 5** — Grid, utilidades y componentes: https://getbootstrap.com/docs/5.3/
- **Bootstrap Icons** — Iconografía: https://icons.getbootstrap.com
- **W3C / WAI** — WCAG 2.1 y técnicas de accesibilidad: https://www.w3.org/WAI/WCAG21/quickref/
- **Google Lighthouse** — Documentación oficial: https://developer.chrome.com/docs/lighthouse/
- **WAVE / WebAIM** — Herramienta de análisis de accesibilidad: https://wave.webaim.org
- **Documentación de MySQL** — SQL y modelo relacional: https://dev.mysql.com/doc/
- **Documentación de GitHub Pages** — Publicación estática: https://docs.github.com/en/pages
- **Postman Learning Center** — Colecciones y entornos: https://learning.postman.com

---

# 9. ANEXOS

---

<a id="anexo-91-manual-de-usuario"></a>
## Anexo 9.1 — Manual de usuario

### Uso como visitante

1. Abrir la aplicación desde la URL local (`http://localhost/pacepal`) o desde la URL publicada en GitHub Pages.
2. Consultar la portada para entender qué es PacePal y qué ofrece.
3. Navegar por el menú principal hacia **Actividades**, **Rutas** o **Tienda**.
4. Abrir el detalle de una actividad, ruta o producto para ver toda la información disponible.
5. Si se quiere participar o comprar, ir al formulario de registro.

### Uso como usuario registrado

1. Acceder al formulario de **Registro** desde la cabecera o la landing.
2. Rellenar nombre, email, contraseña (con confirmación) y DNI. Los campos adicionales son opcionales.
3. Iniciar sesión con email y contraseña.
4. Consultar el **Perfil** personal desde la cabecera o el menú de usuario para ver los datos y el historial de pedidos.
5. Entrar en **Actividades** y hacer clic en una para ver su detalle. Pulsar **Unirse** si hay plazas disponibles.
6. Pulsar **Crear actividad** en la página de detalle de una ruta para organizar una nueva salida.
7. Navegar a **Tienda**, usar el buscador para encontrar un producto, entrar en su detalle y pulsar **Añadir al carrito**.
8. Acceder al **Carrito** para revisar la selección, ajustar cantidades y pulsar **Finalizar pedido**.
9. Pulsar **Cerrar sesión** en el menú de usuario cuando se termine la interacción.

### Uso como administrador

1. Iniciar sesión con una cuenta con rol `admin`.
2. Acceder al **Panel de administración** desde el menú de usuario.
3. Revisar los bloques disponibles: **Usuarios**, **Productos**, **Rutas**, **Actividades**, **Pedidos** y **Reportes**.
4. Crear, editar o eliminar recursos según el flujo soportado por la API y el panel.

### Notas sobre el entorno publicado

En la versión publicada en GitHub Pages, el cliente funciona en modo demo: la autenticación y el carrito simulan respuestas sin conectar a la API real. Para probar todas las funcionalidades con datos reales, es necesario ejecutar el proyecto en local con XAMPP siguiendo la guía `docs/despliegue/INSTALACION_LOCAL_XAMPP.md`.

---

<a id="anexo-92-pruebas-realizadas"></a>
## Anexo 9.2 — Pruebas realizadas

### Pruebas manuales funcionales

Las pruebas manuales se resumen en esta memoria y cubren los flujos principales del producto. La siguiente tabla recoge de forma defendible qué se probó, cómo se probó, el resultado obtenido y la evidencia asociada:

| Caso | Qué se probó | Cómo se probó | Resultado esperado | Evidencia visual asociada | Estado |
| ---- | ------------ | ------------- | ------------------ | ------------------------- | ------ |
| PF-01 | Registro con datos inválidos | Prueba funcional manual en formulario de registro | Bloqueo de envío y mensajes de error coherentes | Figura D7 (flujo auth) y registro funcional en `tests/funcionales/01-registro-incorrecto.md` | Correcto |
| PF-02 | Registro con datos válidos | Prueba funcional manual en formulario de registro | Alta de cuenta y acceso posterior | Figura D7 y registro funcional en `tests/funcionales/02-registro-correcto.md` | Correcto |
| PF-03 | Login incorrecto/correcto | Prueba funcional manual y verificación de sesión | Error controlado en credenciales inválidas y acceso con válidas | Figura D7 y registros `03-login-incorrecto.md`, `04-login-correcto.md` | Correcto |
| PF-04 | Buscador dinámico de productos | Interacción sobre tienda y validación con/sin resultados | Filtrado inmediato sin recarga y mensajes coherentes | Registro funcional `06-buscador-productos.md` | Correcto |
| PF-05 | Carrito React | Añadir, modificar, eliminar y finalizar | Totales y estado del carrito coherentes | [Figura D4](#fig-d4-carrito) y [Figura D5](#fig-d5-anadir-carrito) | Correcto |
| PF-06 | Actividades (crear/unirse/abandonar) | Flujo funcional sobre listado y detalle de actividad | Persistencia de participación y actualización de plazas | Registro funcional `08-actividades.md` | Correcto |
| PF-07 | Perfil y pedidos | Navegación de usuario autenticado | Visualización de datos personales e historial | Registro funcional `09-perfil.md` | Correcto |
| PF-08 | Panel de administración | Validación de acceso por rol y gestión básica | Acceso restringido a admin y carga de datos | Registro funcional `10-admin.md` | Correcto |
| PF-09 | API REST con Postman | Runner de colección y entorno local | Respuestas JSON y estado HTTP coherentes | Figura E4 y Figura E5 | Correcto |
| PF-10 | API REST directa en navegador | Consulta de endpoints GET para validación técnica | Respuestas JSON válidas desde backend local | Capturas de validación en `docs/documentacion-final/capturas-finales/06-postman/` | Correcto |
| PF-11 | Accesibilidad de landing | Auditoría Lighthouse y WAVE | Sin errores críticos en el alcance auditado | [Figura F1](#fig-f1-lighthouse) y [Figura F2](#fig-f2-wave) | Correcto |
| PF-12 | Despliegue local/publicación | Verificación de XAMPP local y GitHub Pages | Entorno local operativo y publicación HTTPS activa | [Figura G1](#fig-g1-xampp) y [Figura G3](#fig-g3-github-pages) | Correcto |

Tabla de trazabilidad de archivos de prueba:

| Archivo                            | Flujo cubierto                                |
| ---------------------------------- | --------------------------------------------- |
| `01-registro-incorrecto.md`        | Registro con datos inválidos                  |
| `02-registro-correcto.md`          | Registro con datos válidos                    |
| `03-login-incorrecto.md`           | Login con credenciales erróneas               |
| `04-login-correcto.md`             | Login con credenciales válidas                |
| `05-tarjeta-aparece-desaparece.md` | Validación condicional del formulario         |
| `06-buscador-productos.md`         | Buscador dinámico con y sin resultados        |
| `07-carrito.md`                    | Carrito: añadir, modificar, eliminar y pedido |
| `08-actividades.md`                | Crear actividad, unirse y abandonar           |
| `09-perfil.md`                     | Perfil de usuario y pedidos                   |
| `10-admin.md`                      | Panel de administración con rol admin         |

### Pruebas del cliente React (Sprint 3)

La verificación del cliente React está documentada en `tests/react-sprint-3/README.md` y cubre:

- Build con Vite y arranque en local.
- Navegación por todas las pantallas sin errores de consola.
- Buscador de productos con resultados y sin resultados.
- Carrito: añadir producto, cambiar cantidad, eliminar y finalizar pedido.
- Perfil e historial de pedidos.
- Panel de administración con datos cargados desde la API.
- Cookies: banner, aceptar, rechazar y persistencia.
- Fallback demo en GitHub Pages: login, carrito y cookies sin API real.

### Pruebas con Postman

La colección Postman está en `tests/postman/pacepal.postman_collection.json` y el entorno local en `tests/postman/pacepal-local.postman_environment.json`. Cubre:

- Login correcto e incorrecto.
- Obtención de productos.
- Carrito y pedidos.
- Sesión activa y cierre de sesión.

Las evidencias visuales de Postman (runner con resultados) están en `docs/evidencias/dwes/postman1.png` y `postman2.png`.

### Pruebas automatizadas con Selenium

Los scripts de automatización están en `tests/selenium/` y cubren:

- `test-registro.js` — Flujo de registro de usuario.
- `test-buscador.js` — Buscador de productos.

### Verificación de API directa desde navegador

Las capturas en `docs/documentacion-final/capturas-finales/06-postman/` muestran respuestas JSON de los endpoints accediendo directamente desde el navegador (no desde Postman). Son evidencias válidas de la API funcional, pero no deben llamarse "capturas Postman".

---

<a id="anexo-93-analisis-competencia"></a>
## Anexo 9.3 — Análisis de la competencia

El análisis de referentes del sector se realizó en el Sprint 1 del módulo DIW y está documentado en `docs/03-diw/sprint-1/01-tendencias-competencia.md`. Se examinaron tres plataformas:

**Strava** — Plataforma de seguimiento de actividad deportiva de alto rendimiento. Referencia para la visualización de datos de ruta, uso de tarjetas de actividad y la importancia del componente social.

**Komoot** — Aplicación de planificación de rutas al aire libre. Referencia para la presentación de la información de ruta: distancia, dificultad, perfil de elevación y puntos de interés.

**Meetup** — Plataforma de organización de eventos y grupos. Referencia para el modelo de actividades grupales: plazas, confirmación de asistencia, descripción del evento y sistema de creador/participante.

**Decisiones de diseño inspiradas en el análisis:**

- Uso de tarjetas con imagen, título, datos clave y botón de acción (inspirado en Strava y Komoot).
- Diferenciación explícita entre ruta (recurso del sistema) y actividad (evento creado por usuario) como respuesta al modelo de Meetup.
- Diseño limpio y legible que no intenta competir con plataformas de alto rendimiento, sino ofrecer una experiencia más accesible.
- Importancia del diseño mobile-first y la navegación clara sin curva de aprendizaje.

---

<a id="anexo-94-bocetos-y-wireframes"></a>
## Anexo 9.4 — Bocetos y wireframes completos

Los wireframes completos del proyecto se incorporan en este anexo como listado técnico verificable. Como fuente de trabajo se utilizó `docs/03-diw/wireframes/`. Son diseño planificado, no capturas del producto final.

**Wireframes desktop:**

- `wireframe-landing-desktop.png`
- `wireframe-actividades-desktop.png`
- `wireframe-actividad-detalle-desktop.png`
- `wireframe-rutas-desktop.png`
- `wireframe-ruta-detalle-desktop.png`
- `wireframe-tienda-desktop.png`
- `wireframe-producto-desktop.png`
- `wireframe-about-desktop.png`
- `wireframe-admin-desktop.png`

**Wireframes mobile:**

- `wireframe-landing-mobile.png`
- `wireframe-actividades-mobile.png`
- `wireframe-actividad-detalle-mobile.png`
- `wireframe-rutas-mobile.png`
- `wireframe-ruta-detalle-mobile.png`
- `wireframe-tienda-mobile.png`
- `wireframe-producto-mobile.png`
- `wireframe-about-mobile.png`
- `wireframe-admin-mobile.png`

---

<a id="anexo-95-guia-de-estilos"></a>
## Anexo 9.5 — Guía de estilos

La guía de estilos del proyecto se resume en este anexo para que la memoria sea autocontenida. Como fuente de trabajo se utilizó `docs/03-diw/sprint-1/03-guia-estilos.md`.

### Paleta cromática

| Token               | Color               | Uso                                         |
| ------------------- | ------------------- | ------------------------------------------- |
| `--color-primary`   | Verde oscuro        | Color de marca, cabecera, botones primarios |
| `--color-accent`    | Verde lima          | Acentos, CTA secundarios, destacados        |
| `--color-bg`        | Blanco              | Fondos principales                          |
| `--color-bg-soft`   | Gris muy claro      | Fondos de sección alternos, tarjetas        |
| `--color-text`      | Negro / gris oscuro | Texto principal                             |
| `--color-text-soft` | Gris medio          | Texto secundario, labels, subtítulos        |

### Tipografía

- **Fuente principal:** Inter (Google Fonts)
- **Tamaños:** jerárquicos con `h1` a `h6` y clases de Bootstrap
- **Pesos:** 400 (cuerpo), 600 (subtítulos), 700 (títulos)
- **Línea base:** 1.5 para lectura cómoda

### Iconografía

- **Sistema principal:** Bootstrap Icons
- **Uso:** botones de acción, navegación, tarjetas, formularios
- **Tamaño base:** 1rem, con variaciones puntuales para iconos de énfasis

### Espaciado

- Sistema de espaciado basado en múltiplos de 4px / 8px
- Márgenes y paddings coherentes con las utilidades de Bootstrap 5
- Separación visual entre bloques mediante `padding` de sección

### Botones

| Variante      | Uso                                   | Color de fondo        |
| ------------- | ------------------------------------- | --------------------- |
| Primario      | Acción principal, envío de formulario | Verde oscuro          |
| Secundario    | Acción alternativa, cancelar          | Contorno verde o gris |
| Peligro       | Eliminar, acción destructiva          | Rojo                  |
| Deshabilitado | Estado no activo                      | Gris claro            |

### Formularios

- Campos con borde claro; color de borde cambia en `:focus` al verde primario
- Labels visibles siempre (nunca solo placeholder)
- Mensajes de error debajo del campo en color de alerta
- Mensajes de confirmación en verde o con icono positivo

### Tarjetas

- Bordes redondeados, sombra suave
- Imagen arriba (si aplica), título, descripción resumida y botón de acción abajo
- Tamaño coherente en grid responsive

### Navegación

- Barra superior fija con logo a la izquierda y menú a la derecha
- En móvil: menú hamburger colapsable
- Estado activo indicado por subrayado o color diferenciado

### Imágenes

- Formato JPG/PNG; optimizadas para web
- Ratio de aspecto coherente en tarjetas (4:3 o 16:9 según sección)
- Siempre con atributo `alt` descriptivo

### Voz y tono

- Segunda persona del singular en llamadas a la acción
- Tono cercano, directo y activo
- Sin lenguaje corporativo ni tecnicismos innecesarios en la UI
- Los textos informativos son breves y van al punto

### Accesibilidad y calidad de uso

- Contraste de color revisado con WCAG Contrast Checker
- Foco visible para navegación por teclado
- HTML semántico en toda la estructura
- Textos alternativos en todas las imágenes
- Formularios con etiquetas asociadas y mensajes de error legibles

---

<a id="anexo-96-historias-de-usuario-y-backlog"></a>
## Anexo 9.6 — Historias de usuario y backlog

Este anexo incorpora un resumen defendible del backlog con los campos clave. Como fuente de trabajo se utilizó `docs/02-agile/02-historias-usuario-v1.md`.

| ID | Historia | Validación (resumen) | Valor | Prioridad | Estimación | Sprint/Materia |
| -- | -------- | -------------------- | ----- | --------- | ---------- | -------------- |
| HU-01 | Registro con DNI | Formulario con DNI/email válidos, sin duplicados, alta correcta | Evita cuentas falsas | Alta | 5 | Sprint 1-2 / DWEC-DWES |
| HU-02 | Inicio de sesión | Login correcto, error controlado, sesión persistente | Base de seguridad | Alta | 3 | Sprint 1-2 / DWEC-DWES |
| HU-03 | Cerrar sesión | Cierre visible, sesión eliminada, bloqueo de pantallas protegidas | Seguridad básica | Alta | 2 | Sprint 1-2 / DWEC-DWES |
| HU-04 | Roles y control de acceso | Restricción de admin y endpoints por rol/sesión | Protección de funciones sensibles | Alta | 5 | Sprint 2 / DWES |
| HU-05 | Ver listado de actividades | Listado con datos clave y detalle accesible | Pantalla principal del producto | Alta | 5 | Sprint 2-3 / DWEC |
| HU-06 | Filtrar por nivel y ritmo | Filtros aplicables, limpieza y vacío controlado | Mejora ajuste usuario-actividad | Alta | 3 | Sprint 2 / DWEC |
| HU-07 | Filtrar por fecha y plazas | Filtro temporal y de disponibilidad coherente | Mayor utilidad del listado | Media | 3 | Sprint 2 / DWEC |
| HU-08 | Paginación de actividades | Navegación por páginas sin romper filtros | Escalabilidad del listado | Media | 3 | Sprint 2 / DWEC |
| HU-09 | Buscador AJAX actividades | Búsqueda sin recarga y sin resultados ambiguos | Mejor experiencia de uso | Alta | 5 | Sprint 2 / DWEC |
| HU-10 | Detalle de actividad | Datos completos, estado y acciones según sesión | Decisión informada antes de unirse | Alta | 3 | Sprint 2 / DWEC |
| HU-11 | Crear actividad sobre ruta existente | Formulario validado y alta visible en listado | Activa la comunidad | Alta | 5 | Sprint 2-3 / DWEC-DWES |
| HU-12 | Unirse a actividad | Requiere sesión, controla plazas y duplicados | Función central de comunidad | Alta | 5 | Sprint 2-3 / DWEC-DWES |
| HU-13 | Salir de actividad | Libera plazas y actualiza estado correctamente | Mantiene consistencia | Alta | 3 | Sprint 2-3 / DWEC-DWES |
| HU-14 | Mis actividades | Separa creadas/apuntadas y facilita gestión | Orden personal del usuario | Media | 3 | Sprint 3 / DWEC |
| HU-15 | Ver catálogo de rutas | Listado y detalle sin creación de rutas por usuario | Soporte para planificar actividades | Media | 3 | Sprint 2 / DWEC-DWES |
| HU-16 | Ver detalle de ruta | Distancia, dificultad, zona e imagen legibles | Reduce incertidumbre | Media | 2 | Sprint 2 / DWEC |
| HU-17 | Reportar incidencia | Reporte con motivo, trazabilidad y sesión obligatoria | Mejora convivencia | Alta | 5 | Sprint 2-3 / DWES |
| HU-18 | Avisos acumulables | Contador e historial de avisos internos | Control preventivo | Media | 5 | Sprint 2-3 / DWES |
| HU-19 | Panel admin reportes | Gestión por estados y nota de moderación | Moderación efectiva | Media | 5 | Sprint 3 / DWES |
| HU-20 | Acciones de moderación | Advertir, limitar o bloquear con historial | Seguridad operacional | Media | 5 | Sprint 3 / DWES |
| HU-21 | Tienda de zapatillas sostenibles | Catálogo con datos e imagen, carga desde API/BD | Alineación con sostenibilidad | Alta | 5 | Sprint 2-3 / DWEC-DWES |
| HU-22 | Detalle de producto | Información completa, materiales y botón de compra | Compra informada | Media | 3 | Sprint 2-3 / DWEC |
| HU-23 | Añadir/quitar carrito | Alta y baja de productos con persistencia de estado | Base del flujo de compra | Alta | 5 | Sprint 2-3 / DWEC |
| HU-24 | Contador y total carrito | Recuento visible, cantidades y total en tiempo real | Transparencia de compra | Alta | 5 | Sprint 2-3 / DWEC |
| HU-25 | Confirmar pedido | Login requerido, creación de pedido y vaciado de carrito | Cierre funcional de tienda | Media | 5 | Sprint 2-3 / DWEC-DWES |
| HU-26 | Puntos ecológicos y canje | Saldo, canje y trazabilidad de puntos | Incentiva hábitos sostenibles | Baja | 8 | Backlog evolutivo / Sostenibilidad |
| HU-27 | API REST rutas/actividades | Endpoints JSON con errores controlados | Integración cliente-servidor | Alta | 8 | Sprint 2-3 / DWES |
| HU-28 | API REST usuarios/reportes/tienda | Registro, login, reportes, pedidos y control de rol | Cierra circuito funcional | Alta | 8 | Sprint 2-3 / DWES |
| HU-29 | Documentación API + Postman | Endpoints documentados y colección de pruebas | Evidencia técnica trazable | Alta | 5 | Sprint 2-3 / DWES |
| HU-30 | Accesibilidad base | Teclado, foco, labels, errores y contraste | Calidad de uso y cumplimiento | Alta | 3 | Sprint 1-2 / DIW |

---

<a id="anexo-97-figuras-diagramas-evidencias"></a>
## Anexo 9.7 — Figuras, diagramas y evidencias visuales

Las figuras siguientes se incluyen al final para mantener limpio el cuerpo principal de la memoria. Desde los apartados anteriores se accede a ellas mediante referencias internas. En la versión final maquetada en Word/LibreOffice, estas referencias deberán convertirse en referencias cruzadas o marcadores internos para que funcionen correctamente en el PDF.

> Las figuras se agrupan en bloques A-G. Desde el cuerpo principal se cita cada figura con una referencia interna clicable. Aquí se insertan las imágenes completas con su pie de figura.

---

### BLOQUE A — Planificación y organización del proyecto

---

#### Figura A1 — Diagrama de Gantt del proyecto

<a id="fig-a1-diagrama-de-gantt"></a>

![Diagrama de Gantt de PacePal](figuras/Diagrama%20de%20Gantt.png)

**Pie de figura:** Diagrama de Gantt de PacePal organizado por sprints y fase de cierre documental. Elaborado con Draw.io a partir de la planificación real del proyecto.

---

#### Figura A2 — Diagrama de casos de uso

<a id="fig-a2-casos-de-uso"></a>

![Diagrama de casos de uso de PacePal](figuras/Diagrama%20de%20casos%20de%20uso.png)

**Pie de figura:** Diagrama de casos de uso con los cuatro actores del sistema (invitado, usuario registrado, administrador y sistema) y las interacciones principales. Elaborado con Draw.io.

---

#### Figura A3 — Diagrama de clases simplificado

<a id="fig-a3-clases"></a>

![Diagrama de clases simplificado de PacePal](figuras/Diagrama%20de%20clases%20simplificado.png)

**Pie de figura:** Diagrama de clases simplificado del dominio de PacePal. Muestra las entidades principales del backend PHP y sus relaciones. Elaborado con Draw.io.

---

### BLOQUE B — Arquitectura y modelo de datos

---

#### Figura B1 — Diagrama de componentes

<a id="fig-b1-componentes"></a>

![Diagrama de componentes de PacePal](figuras/Diagrama%20de%20componentes.png)

**Pie de figura:** Diagrama de componentes del cliente React y del backend PHP, mostrando la separación entre páginas, hooks, servicios, API, controladores, modelos y base de datos. Elaborado con Draw.io.

---

#### Figura B2 — Esquema de arquitectura general

<a id="fig-b2-arquitectura"></a>

![Esquema de arquitectura general de PacePal](figuras/Esquema%20de%20arquitectura%20general.png)

**Pie de figura:** Esquema de la arquitectura general del proyecto, con el cliente React (local y GitHub Pages), la API PHP y la base de datos MySQL en el entorno local con XAMPP. Elaborado con Draw.io.

---

#### Figura B3 — Modelo relacional simplificado

<a id="fig-b3-modelo-relacional"></a>

![Modelo relacional simplificado de PacePal](figuras/Modelo%20relacional%20simplificado.png)

**Pie de figura:** Modelo relacional simplificado del esquema de base de datos de PacePal, con las nueve entidades principales y sus relaciones clave. Elaborado con Draw.io.

---

### BLOQUE C — Diseño e identidad visual

---

#### Figura C1 — Logotipo de PacePal

<a id="fig-c1-logo"></a>

![Logotipo principal de PacePal](../03-diw/media/logo.png)

**Pie de figura:** Logotipo principal de la identidad visual de PacePal. Recurso oficial del proyecto, localizado en `docs/03-diw/media/logo.png`.

---

#### Figura C2 — Paleta de color corporativa

<a id="fig-c2-paleta"></a>

![Paleta de color de PacePal](../03-diw/media/paletaIdentidadVisual.png)

**Pie de figura:** Paleta cromática principal de PacePal con los colores de marca, acento, fondo y texto. Extraída de la guía de estilos de DIW.

---

#### Figura C3 — Tipografía e identidad visual

<a id="fig-c3-tipografia"></a>

![Tipografía e identidad visual de PacePal](../03-diw/media/tipografiaIdentidadVisual.png)

**Pie de figura:** Sistema tipográfico de PacePal: fuente Inter en sus variantes de peso y tamaño aplicadas a la interfaz.

---

#### Figura C5 — Wireframe landing — escritorio

<a id="fig-c5-wireframe-landing-desktop"></a>

![Wireframe landing escritorio PacePal](../03-diw/wireframes/wireframe-landing-desktop.png)

**Pie de figura:** Wireframe de la landing page de PacePal en versión escritorio. Diseño planificado en Sprint 1 del módulo DIW.

---

#### Figura C6 — Wireframe landing — móvil

<a id="fig-c6-wireframe-landing-mobile"></a>

![Wireframe landing móvil PacePal](../03-diw/wireframes/wireframe-landing-mobile.png)

**Pie de figura:** Wireframe de la landing page de PacePal en versión móvil. Demuestra el diseño responsive planificado desde el primer sprint.

---

#### Figura C8 — Esquema responsive modular

<a id="fig-c8-responsive-modular"></a>

![Esquema responsive modular de PacePal](figuras/Esquema%20responsive%20modular.png)

**Pie de figura:** Esquema del sistema responsive modular de PacePal, con hojas CSS independientes por sección. Elaborado con Draw.io para documentar la arquitectura CSS del proyecto.

---

### BLOQUE D — Pruebas funcionales del cliente

---

#### Figura D4 — Carrito React con producto y total

<a id="fig-d4-carrito"></a>

![Carrito React de PacePal con producto y total](../evidencias/dwec/sprint-3/Carrito-React.png)

**Pie de figura:** Carrito React de PacePal con la Camiseta deportiva, cantidad 4, precio unitario y total calculado. Captura de validación del módulo DWEC Sprint 3.

---

#### Figura D5 — Confirmación de añadir al carrito

<a id="fig-d5-anadir-carrito"></a>

![Confirmación añadir al carrito en PacePal React](../evidencias/dwec/sprint-3/Carrito_añadir_React.png)

**Pie de figura:** Mensaje de confirmación "Añadido al carrito" visible en la interfaz React de PacePal. Evidencia de la funcionalidad de alta al carrito desde la galería de productos.

---

#### Figura D7 — Flujo de autenticación

<a id="fig-d7-flujo-auth"></a>

![Flujo de login, sesión y logout en PacePal](figuras/Flujo%20loginSesionLogOut.png)

**Pie de figura:** Diagrama del flujo completo de autenticación en PacePal: login, mantenimiento de sesión y logout. Elaborado con Draw.io.

---

### BLOQUE E — API y base de datos

---

#### Figura E4 — Postman — runner con resultados (evidencia 1)

<a id="fig-e4-postman1"></a>

![Postman runner con resultados de PacePal](../evidencias/dwes/postman1.png)

**Pie de figura:** Runner de Postman ejecutando la colección de PacePal con resultados de las pruebas de la API. Evidencia real de Postman (no captura del navegador).

---

#### Figura E5 — Postman — segunda ejecución (evidencia 2)

<a id="fig-e5-postman2"></a>

![Postman segunda ejecución PacePal](../evidencias/dwes/postman2.png)

**Pie de figura:** Segunda evidencia visual de las pruebas de la colección Postman de PacePal.

---

### BLOQUE F — Accesibilidad

---

#### Figura F1 — Resultado Lighthouse — accesibilidad 100

<a id="fig-f1-lighthouse"></a>

![Resultado Lighthouse accesibilidad PacePal](../evidencias/diw/sprint-2/lighthouse-accesibilidad.png)

**Pie de figura:** Resultado de la auditoría Lighthouse sobre la landing de PacePal: puntuación 100 en accesibilidad. Evidencia de la auditoría formal DIW Sprint 2.

---

#### Figura F2 — Análisis WAVE

<a id="fig-f2-wave"></a>

![Análisis WAVE de la landing de PacePal](../evidencias/diw/sprint-2/wave-analisis.png)

**Pie de figura:** Resultado del análisis WAVE sobre la landing de PacePal: 0 errores en el alcance auditado.

---

#### Figura F3 — Contraste WCAG

<a id="fig-f3-contraste"></a>

![Comprobación de contraste WCAG de PacePal](../evidencias/diw/sprint-2/WCAG_Contrast_Checker.png)

**Pie de figura:** Comprobación de contraste WCAG realizada durante la auditoría de accesibilidad DIW Sprint 2. Ratios de contraste correctos para los elementos revisados.

---

### BLOQUE G — Despliegue

---

#### Figura G1 — Panel XAMPP activo en localhost

<a id="fig-g1-xampp"></a>

![Panel XAMPP activo en localhost PacePal](../evidencias/despliegue/sprint-3/01-xampp-dashboard-localhost.png)

**Pie de figura:** Panel de XAMPP operativo durante la validación del entorno local de PacePal. Apache y MySQL activos; acceso a phpMyAdmin confirmado.

---

#### Figura G3 — GitHub Pages publicado con HTTPS

<a id="fig-g3-github-pages"></a>

![Cliente React PacePal publicado en GitHub Pages con HTTPS](../evidencias/despliegue/sprint-3/08-github-pages-publicacion-https.png)

**Pie de figura:** Cliente React de PacePal publicado en GitHub Pages con HTTPS. Evidencia del despliegue externo del Sprint 3.

---

> **Fin del Anexo 9.7**

---

## PENDIENTES EXCLUSIVOS PARA WORD / LIBREOFFICE

Las siguientes acciones solo se pueden cerrar al exportar a ODT/DOCX:

| Tarea                     | Descripción                                                                              |
| ------------------------- | ---------------------------------------------------------------------------------------- |
| **Índice automático**     | Generar índice usando los estilos de título jerárquicos del procesador de textos         |
| **Índice de figuras**     | Generar índice de figuras usando los títulos de imagen o los pies de figura              |
| **Índice de tablas**      | Generar índice de tablas si la herramienta lo permite                                    |
| **Numeración de páginas** | Añadir numeración; verificar que la portada queda excluida                               |
| **Revisión visual**       | Comprobar que las imágenes se insertan correctamente y con el tamaño adecuado            |
| **Ajuste de estilos**     | Verificar que los títulos, tablas y párrafos siguen la plantilla oficial                 |
| **Imágenes embebidas y referencias** | Al maquetar, todas las imágenes enlazadas en Markdown deben insertarse como imágenes embebidas en el documento final, no como vínculos externos. Las referencias internas deben convertirse en referencias cruzadas o marcadores internos para que funcionen dentro del PDF exportado. |
| **Exportación a PDF**     | Generar PDF final para entrega                                                           |

---

_Documento generado el 2026-05-11 a partir del borrador técnico y los documentos de apoyo del proyecto. No contiene inventarios de auditoría ni menciones a herramientas de IA. Todo el contenido está trazado a código, pruebas o documentación real de PacePal._
