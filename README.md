# PacePal · Proyecto Agile DAW

Plataforma web para conectar personas y promover actividades deportivas en comunidad.

## Demo

- GitHub Pages: https://kampexiii.github.io/pacepalAgile/

## Objetivo

- Descubrir actividades deportivas cercanas.
- Organizar quedadas para correr o caminar.
- Conectar personas con intereses similares.
- Promover equipamiento deportivo sostenible.

## Tecnologías

Frontend:

- HTML5
- CSS3
- JavaScript
- Bootstrap
- Bootstrap Icons

Optimización:

- imágenes WebP
- `loading="lazy"`

Diseño:

- responsive mobile-first

## Estructura

**Generated:** 3/11/2026, 11:47:57 PM
**Root Path:** `c:\xampp\htdocs\proyectoAgilePacepal`

```
├── 📁 css
│   ├── 📁 actividades
│   │   ├── 🎨 cssestilosActividades.css
│   │   ├── 🎨 heroActividades.css
│   │   ├── 🎨 responsiveActividades.css
│   │   └── 🎨 seccionesActividades.css
│   ├── 📁 admin
│   │   ├── 🎨 cssestilosAdmin.css
│   │   ├── 🎨 heroAdmin.css
│   │   ├── 🎨 responsiveAdmin.css
│   │   └── 🎨 seccionesAdmin.css
│   ├── 📁 comun
│   │   ├── 🎨 cabecera.css
│   │   ├── 🎨 cookies.css
│   │   ├── 🎨 estilosGlobalPacepal.css
│   │   ├── 🎨 footer.css
│   │   └── 🎨 variables.css
│   ├── 📁 formulario
│   │   └── 🎨 formulario.css
│   ├── 📁 landing
│   │   ├── 🎨 cssestilosLanding.css
│   │   ├── 🎨 hero.css
│   │   ├── 🎨 responsiveLanding.css
│   │   └── 🎨 secciones.css
│   ├── 📁 rutas
│   │   ├── 🎨 cssestilosRutas.css
│   │   ├── 🎨 heroRutas.css
│   │   ├── 🎨 responsiveRutas.css
│   │   └── 🎨 seccionesRutas.css
│   ├── 📁 sobrenosotros
│   │   ├── 🎨 cssestilosSobrenosotros.css
│   │   ├── 🎨 hero.css
│   │   ├── 🎨 responsiveSobrenosotros.css
│   │   └── 🎨 secciones.css
│   ├── 📁 tienda
│   │   ├── 🎨 cssestilosTienda.css
│   │   ├── 🎨 heroTienda.css
│   │   ├── 🎨 responsiveTienda.css
│   │   └── 🎨 seccionesTienda.css
│   ├── 📁 usuario
│   │   ├── 🎨 cssestilosUsuario.css
│   │   ├── 🎨 heroUsuario.css
│   │   ├── 🎨 responsiveUsuario.css
│   │   └── 🎨 seccionesUsuario.css
│   └── 🎨 estilos.css
├── 📁 db
│   ├── 📄 schema.sql
│   └── 📄 seed.sql
├── 📁 docs
│   ├── 📁 00-material
│   │   ├── 📕 01 Sprint 3.pdf
│   │   ├── 📕 2do Sprint DWES.pdf
│   │   ├── 📕 DI1_ Análisis y Diseño de una Interfaz Web Interactiva.pdf
│   │   ├── 📕 DI1_Implementación Landing Page.pdf
│   │   ├── 📕 DI1_Investigación de Tendencias y Análisis de Competencia.pdf
│   │   ├── 📕 DI2_Diseño de la aplicación web.pdf
│   │   ├── 📕 DI2_Inspección y verificación de la usabilidad de la aplicación web Archivo.pdf
│   │   ├── 📕 DI2_Landing page accesible.pdf
│   │   ├── 📕 DI2_Optimización de imágenes en formato WebP y adaptación responsive Archivo.pdf
│   │   ├── 📕 DWEC1_IMPLEMENTACIÓNDELFORMULARIO.pdf
│   │   ├── 📕 DWEC2_BuscadorDeProducotosAjax.pdf
│   │   ├── 📕 DWEC2_IMPLEMENTACIÓNDELCARRITO.pdf
│   │   ├── 📕 Ejemplo guia de estilos 1.pdf
│   │   ├── 📕 Ejemplo guia de estilos 2.pdf
│   │   ├── 📕 Equipos Ágiles.pdf
│   │   ├── 📕 Masterclass scrum.pdf
│   │   ├── 📕 Programación del Proyecto Agile Intermodular 25-26.pdf
│   │   ├── 📕 Proyecto Final Mi burbuja de té - Cristina Pascua.pdf
│   │   ├── 📕 UD8_Guias de estilo.pptx.pdf
│   │   └── 📕 tarjeta-historia-usuario.pdf
│   ├── 📁 01-requisitos
│   │   └── 📝 01-definicion-proyecto.md
│   ├── 📁 02-agile
│   │   ├── 📝 01-scrum-base.md
│   │   ├── 📝 02-historias-usuario-v1.md
│   │   ├── 📝 03-notas-sprint0.md
│   │   ├── 📝 _hu_cards_preview.md
│   │   └── 📕 historias-usuario.pdf
│   ├── 📁 03-diw
│   │   ├── 📁 media
│   │   │   ├── 🖼️ logo.png
│   │   │   ├── 🖼️ pacepal_iconografia.png
│   │   │   ├── 🖼️ paleta.png
│   │   │   ├── 🖼️ paletaIdentidadVisual.png
│   │   │   ├── 🖼️ tarjetaActividadEjemplo.png
│   │   │   ├── 🖼️ tarjetaProductoEjemplo.png
│   │   │   └── 🖼️ tipografiaIdentidadVisual.png
│   │   ├── 📁 sprint-1
│   │   │   ├── 📝 01-tendencias-competencia.md
│   │   │   ├── 📕 01-tendencias-competencia.pdf
│   │   │   ├── 📝 03-guia-estilos.md
│   │   │   ├── 📕 03-guia-estilos.pdf
│   │   │   ├── 📝 03-wireframes.md
│   │   │   └── 📝 04-boceto-final.md
│   │   ├── 📁 sprint-2
│   │   │   ├── 📝 01-accesibilidad-wcag.md
│   │   │   ├── 📝 02-diseno-aplicacion.md
│   │   │   ├── 📝 03-roles-y-perfiles-usuario.md
│   │   │   ├── 📝 04-optimizacion-imagenes.md
│   │   │   └── 📝 05-inspeccion-usabilidad.md
│   │   ├── 📁 wireframes
│   │   │   ├── 🖼️ wireframe-about-desktop.png
│   │   │   ├── 🖼️ wireframe-about-mobile.png
│   │   │   ├── 🖼️ wireframe-actividad-detalle-desktop.png
│   │   │   ├── 🖼️ wireframe-actividad-detalle-mobile.png
│   │   │   ├── 🖼️ wireframe-actividades-desktop.png
│   │   │   ├── 🖼️ wireframe-actividades-mobile.png
│   │   │   ├── 🖼️ wireframe-admin-desktop.png
│   │   │   ├── 🖼️ wireframe-admin-mobile.png
│   │   │   ├── 🖼️ wireframe-landing-desktop.png
│   │   │   ├── 🖼️ wireframe-landing-mobile.png
│   │   │   ├── 🖼️ wireframe-producto-desktop.png
│   │   │   ├── 🖼️ wireframe-producto-mobile.png
│   │   │   ├── 🖼️ wireframe-ruta-detalle-desktop.png
│   │   │   ├── 🖼️ wireframe-ruta-detalle-mobile.png
│   │   │   ├── 🖼️ wireframe-rutas-desktop.png
│   │   │   ├── 🖼️ wireframe-rutas-mobile.png
│   │   │   ├── 🖼️ wireframe-tienda-desktop.png
│   │   │   └── 🖼️ wireframe-tienda-mobile.png
│   │   └── 📝 README.md
│   ├── 📁 04-dwec
│   │   ├── 📁 sprint-1
│   │   │   ├── 📝 01-formularios-login-register.md
│   │   │   ├── 📝 02-validaciones-js.md
│   │   │   ├── 📝 03-integracion-con-diw.md
│   │   │   ├── 📝 04-preparacion-backend.md
│   │   │   └── 📝 05-tests-funcionales.md
│   │   ├── 📁 sprint-2
│   │   │   ├── 📝 01-tienda-dinamica.md
│   │   │   ├── 📝 02-buscador-ajax.md
│   │   │   ├── 📝 03-carrito-dinamico.md
│   │   │   ├── 📝 04-listados-rutas-actividades.md
│   │   │   ├── 📝 05-navbar-dinamica-y-sesion.md
│   │   │   ├── 📝 06-detalles-dinamicos.md
│   │   │   ├── 📝 07-integracion-api-dwec-dwes.md
│   │   │   └── 📝 08-tests-funcionales-sprint-2.md
│   │   └── 📝 README.md
│   ├── 📁 05-dwes
│   │   ├── 📁 sprint-2
│   │   │   ├── 📝 arquitectura-backend.md
│   │   │   ├── 📝 endpoints-api.md
│   │   │   ├── 📝 modelo-relacional.md
│   │   │   ├── 📝 pruebas-postman.md
│   │   │   └── 📝 roles-acceso.md
│   │   └── 📝 README.md
│   ├── 📁 07-sostenibilidad
│   │   ├── 📁 concurso
│   │   │   ├── 🖼️ pacepalA3.png
│   │   │   ├── 🖼️ postalPacePalCaraA.png
│   │   │   └── 🖼️ postalPacePalCaraB.png
│   │   ├── 📕 ArquetipoClienteSevillanoPabloPachecoAlejandro.pdf
│   │   └── 📕 Idea de negocio sostenible Alejandro Pacheco y Pablo Sevillano.pdf
│   ├── 📁 dwes
│   │   └── 📝 pruebas-postman.md
│   └── 📁 evidencias
│       ├── 📁 01-sprint0
│       │   ├── 📝 README.md
│       │   ├── 🖼️ sprint0-arbol.png
│       │   └── 🖼️ sprint0-tablero.png
│       ├── 📁 despliegue
│       │   └── 📝 README.md
│       ├── 📁 diw
│       │   ├── 📁 sprint-1
│       │   │   ├── 🖼️ komoot-interfaz.png
│       │   │   ├── 🖼️ meetup-interfaz.png
│       │   │   └── 🖼️ strava-interfaz.png
│       │   ├── 📁 sprint-2
│       │   │   ├── 🖼️ WCAG_Contrast_Checker.png
│       │   │   ├── 🖼️ lighthouse-accesibilidad.png
│       │   │   └── 🖼️ wave-analisis.png
│       │   └── 📝 README.md
│       ├── 📁 dwec
│       │   ├── 📁 sprint-1
│       │   │   ├── 🖼️ dniEvidencia.png
│       │   │   ├── 🖼️ login-correcto.png
│       │   │   ├── 🖼️ login-error.png
│       │   │   ├── 🖼️ registro-correcto.png
│       │   │   ├── 🖼️ registro-error.png
│       │   │   ├── 🖼️ registro-validacionEnVivo.png
│       │   │   ├── 🖼️ tarjeta-correcta.png
│       │   │   ├── 🖼️ tarjeta-incorrecta.png
│       │   │   └── 🖼️ tarjeta-visible.png
│       │   └── 📝 README.md
│       ├── 📁 dwes
│       │   └── 📝 README.md
│       └── 📁 sostenibilidad
│           └── 📝 README.md
├── 📁 img
│   ├── 📁 about
│   │   ├── 🖼️ 1.webp
│   │   ├── 🖼️ comunidad-entrenamiento.webp
│   │   ├── 🖼️ comunidad-running-urbano.webp
│   │   ├── 🖼️ desarrollo-proyecto-pacepal.webp
│   │   ├── 🖼️ grupo-run-fin-actividad.webp
│   │   ├── 🖼️ organizar-actividad-running.webp
│   │   └── 🖼️ ruta-parque-ciudad.webp
│   ├── 📁 landing
│   │   └── 🖼️ hero.webp
│   ├── 📁 logo
│   │   ├── 📁 favicon
│   │   │   ├── 🖼️ apple-touch-icon.png
│   │   │   ├── 🖼️ apple-touch-icon.webp
│   │   │   ├── 🖼️ favicon-16x16.png
│   │   │   ├── 🖼️ favicon-16x16.webp
│   │   │   ├── 🖼️ favicon-32x32.png
│   │   │   ├── 🖼️ favicon-32x32.webp
│   │   │   └── 📄 favicon.ico
│   │   ├── 🖼️ logo.png
│   │   ├── 🖼️ logo.webp
│   │   ├── 🖼️ logotipoTrecore.png
│   │   └── 🖼️ logotipoTrecore.webp
│   ├── 📁 productos
│   │   ├── 🖼️ bastonesPacepal1.webp
│   │   ├── 🖼️ bastonesPacepal2.webp
│   │   ├── 🖼️ botellaPacepal1.webp
│   │   ├── 🖼️ botellaPacepal2.webp
│   │   ├── 🖼️ calcetinesPacepal1.webp
│   │   ├── 🖼️ calcetinesPacepal2.webp
│   │   ├── 🖼️ camisetaPacepal1.webp
│   │   ├── 🖼️ camisetaPacepal2.webp
│   │   ├── 🖼️ chalecoHidratacionPacepal1.webp
│   │   ├── 🖼️ chalecoHidratacionPacepal2.webp
│   │   ├── 🖼️ chaquetaPacepal1.webp
│   │   ├── 🖼️ chaquetaPacepal2.webp
│   │   ├── 🖼️ gorraPacepal1.webp
│   │   ├── 🖼️ gorraPacepal2.webp
│   │   ├── 🖼️ kitPpAaPAcepal1.webp
│   │   ├── 🖼️ kitPpAaPAcepal2.webp
│   │   ├── 🖼️ pantalonesPacepal1.webp
│   │   ├── 🖼️ pantalonesPacepal2.webp
│   │   ├── 🖼️ zapatillaPacepal1.webp
│   │   └── 🖼️ zapatillaPacepal2.webp
│   └── 📁 rutas
│       ├── 🖼️ canto_cochino.webp
│       ├── 🖼️ fuenfria.webp
│       ├── 🖼️ herreria.webp
│       ├── 🖼️ jarosa.webp
│       ├── 🖼️ penalara.webp
│       ├── 🖼️ purgatorio.webp
│       ├── 🖼️ retiro.webp
│       ├── 🖼️ schmidt.webp
│       └── 🖼️ siete_picos.webp
├── 📁 js
│   ├── 📁 actividades
│   │   ├── 📄 actividadDetalle.js
│   │   ├── 📄 actividades.js
│   │   └── 📄 crearActividad.js
│   ├── 📁 admin
│   │   └── 📄 panelAdmin.js
│   ├── 📁 formulario
│   │   ├── 📄 formularioLogin.js
│   │   ├── 📄 formularioRegistro.js
│   │   ├── 📄 ui.js
│   │   └── 📄 validaciones.js
│   ├── 📁 landing
│   │   └── 📄 main.js
│   ├── 📁 rutas
│   │   ├── 📄 rutaDetalle.js
│   │   └── 📄 rutas.js
│   ├── 📁 tienda
│   │   ├── 📄 carrito.js
│   │   ├── 📄 productoDetalle.js
│   │   └── 📄 productos.js
│   ├── 📁 usuario
│   │   └── 📄 perfil.js
│   ├── 📄 app.js
│   └── 📄 cookies.js
├── 📁 pages
│   ├── 📁 about
│   │   └── 🌐 about.html
│   ├── 📁 actividades
│   │   ├── 🐘 actividadDetalle.php
│   │   ├── 🐘 actividades.php
│   │   └── 🐘 crearActividad.php
│   ├── 📁 admin
│   │   └── 🐘 panelAdmin.php
│   ├── 📁 formulario
│   │   ├── 🐘 login.php
│   │   └── 🐘 register.php
│   ├── 📁 legal
│   │   └── 🐘 cookies.php
│   ├── 📁 rutas
│   │   ├── 🐘 rutaDetalle.php
│   │   └── 🐘 rutas.php
│   ├── 📁 tienda
│   │   ├── 🐘 carrito.php
│   │   ├── 🐘 producto.php
│   │   └── 🐘 tienda.php
│   └── 📁 usuario
│       └── 🐘 perfil.php
├── 📁 src
│   ├── 📁 api
│   │   └── 🐘 index.php
│   ├── 📁 config
│   │   └── 🐘 database.php
│   ├── 📁 controllers
│   │   ├── 🐘 ActividadController.php
│   │   ├── 🐘 AuthController.php
│   │   ├── 🐘 CookieController.php
│   │   ├── 🐘 PedidoController.php
│   │   ├── 🐘 ProductoController.php
│   │   ├── 🐘 ReporteController.php
│   │   ├── 🐘 RutaController.php
│   │   └── 🐘 UsuarioController.php
│   └── 📁 models
│       ├── 🐘 ActividadModel.php
│       ├── 🐘 PedidoModel.php
│       ├── 🐘 ProductoModel.php
│       ├── 🐘 ReporteModel.php
│       ├── 🐘 RutaModel.php
│       └── 🐘 UsuarioModel.php
├── 📁 tests
│   ├── 📁 funcionales
│   │   ├── 📝 01-registro-incorrecto.md
│   │   ├── 📝 02-registro-correcto.md
│   │   ├── 📝 03-login-incorrecto.md
│   │   ├── 📝 04-login-correcto.md
│   │   └── 📝 05-tarjeta-aparece-desaparece.md
│   ├── 📁 selenium
│   │   └── 📄 test-registro.js
│   └── 📝 tests.md
├── 📝 README.md
└── 🌐 index.html
```

---

_Generated by FileTree Pro Extension_

## Rutas clave

- Landing: `index.html`
- About: `pages/about/about.html`
- Registro: `pages/formulario/register.php`
- Login: `pages/formulario/login.php`
- Actividades: `pages/actividades/actividades.php`
- Rutas: `pages/rutas/rutas.php`
- Tienda: `pages/tienda/tienda.php`
- Perfil: `pages/usuario/perfil.php`
- Admin: `pages/admin/panelAdmin.php`
- Validaciones cliente: `js/formulario/validaciones.js`

## Sitemap web

| Sección           | Ruta                                     | Desde navbar |
| ----------------- | ---------------------------------------- | ------------ |
| Landing           | `index.html`                             | Logo PacePal |
| Actividades       | `pages/actividades/actividades.php`      | Sí           |
| Detalle actividad | `pages/actividades/actividadDetalle.php` | No           |
| Tienda            | `pages/tienda/tienda.php`                | Sí           |
| Detalle producto  | `pages/tienda/producto.php`              | No           |
| Rutas             | `pages/rutas/rutas.php`                  | Sí           |
| Detalle ruta      | `pages/rutas/rutaDetalle.php`            | No           |
| Sobre nosotros    | `pages/about/about.html`                 | Sí           |
| Login             | `pages/formulario/login.php`             | Sí           |
| Registro          | `pages/formulario/register.php`          | Sí           |
| Perfil usuario    | `pages/usuario/perfil.php`               | No           |
| Panel admin       | `pages/admin/panelAdmin.php`             | No           |

Navbar compartido renderizado desde: `js/formulario/ui.js`.

## Sprint 1 · DIW

Resumen breve:

- Diseño e implementación de la landing principal del proyecto.
- estructura visual responsive
- identidad gráfica definida mediante guía de estilos
- secciones principales: hero, actividades, tienda, beneficios, CTA y footer

Documentación principal:

- `docs/03-diw/sprint-1/01-tendencias-competencia.md`
- `docs/03-diw/sprint-1/03-guia-estilos.md`
- `docs/03-diw/sprint-1/04-boceto-final.md`
- `docs/03-diw/sprint-1/03-wireframes.md`
- `docs/03-diw/wireframes/`

Accesibilidad y calidad (Lighthouse aprox.):

| Métrica          | Puntuación |
| ---------------- | ---------- |
| Performance      | 95         |
| Accesibilidad    | 100        |
| Buenas prácticas | 100        |
| SEO              | 100        |

## Sprint 1 · DWEC

Funcionalidades implementadas:

- Formulario de registro.
- Formulario de login.
- Validaciones JavaScript en cliente.
- Validación de DNI y contraseña fuerte.
- Validación en tiempo real.
- Lógica condicional de tarjeta.

Pruebas y evidencias:

- Índice de tests: `tests/tests.md`
- Casos funcionales: `tests/funcionales/`
- Selenium: `tests/selenium/test-registro.js`
- Evidencias: `docs/evidencias/dwec/README.md`

Comando Selenium:

- `node tests/selenium/test-registro.js`

## Sprint 2 · DIW

Resumen breve:

- Maquetación de páginas secundarias: tienda, rutas, about y perfil usuario.
- Responsive avanzado en todas las vistas (test en móvil real y emuladores).
- Ajustes de accesibilidad (contraste, navegación por teclado, roles ARIA).
- Optimización de imágenes y recursos (WebP, lazy load, compresión extra).
- Revisión de usabilidad con checklist y test de usuario real.

Documentación principal:

- `docs/03-diw/sprint-2/01-accesibilidad-wcag.md`
- `docs/03-diw/sprint-2/02-diseno-aplicacion.md`
- `docs/03-diw/sprint-2/03-roles-y-perfiles-usuario.md`
- `docs/03-diw/sprint-2/04-optimizacion-imagenes.md`
- `docs/03-diw/sprint-2/05-inspeccion-usabilidad.md`

Evidencias:

- `docs/evidencias/diw/sprint-2/`

## Sprint 2 · DWEC

Funcionalidades implementadas:

- Navbar y footer dinámicos según sesión (login/logout, admin, carrito).
- Carrito de la tienda en JS, persistente en sesión.
- Buscador de productos AJAX (filtro en vivo sin recargar).
- Listados dinámicos de rutas y actividades desde la API.
- Detalles de producto, ruta y actividad con carga dinámica.
- Integración completa con la API REST (fetch, JSON, control de errores).

Pruebas y evidencias:

- Índice de tests: `tests/tests.md`
- Casos funcionales: `tests/funcionales/`
- Selenium: `tests/selenium/test-registro.js`
- Evidencias: `docs/evidencias/dwec/README.md`

## Sprint 2 · DWES

Resumen breve:

- Implementación del backend PHP en MVC (controllers y models por entidad).
- API REST centralizada en `src/api/index.php` con rutas para todas las entidades.
- Gestión de sesiones PHP, roles y permisos (usuario/admin).
- Endpoints para login, registro, actividades, rutas, productos, pedidos y reportes.
- Control de stock y transacciones en pedidos (con `FOR UPDATE`).
- Validaciones backend independientes del frontend.
- Pruebas con Postman y evidencias de respuestas reales.

Documentación principal:

- `docs/05-dwes/sprint-2/arquitectura-backend.md`
- `docs/05-dwes/sprint-2/endpoints-api.md`
- `docs/05-dwes/sprint-2/modelo-relacional.md`
- `docs/05-dwes/sprint-2/pruebas-postman.md`
- `docs/05-dwes/sprint-2/roles-acceso.md`

Evidencias:

- `docs/evidencias/dwes/README.md`

## Resumen por próximos sprints

En cada sprint de cada asignatura se añadirá un resumen breve de lo realizado y su evidencia asociada en `docs/`.

## Proyecto académico

Desarrollado dentro del Proyecto Intermodular del ciclo DAW.

Equipo: Pablo Sevillano y Alejandro Pacheco (equipo [Treecore Studio](https://treecorestudio.es/)).

El objetivo es integrar diferentes módulos del ciclo en un único proyecto web completo.
