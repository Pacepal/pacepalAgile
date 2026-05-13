# 9. ANEXOS

Este bloque agrupa la documentación complementaria del proyecto PacePal. Cada anexo
amplía o detalla un aspecto concreto de la memoria principal que no cabe de forma
completa en el cuerpo del documento sin hacerlo excesivamente denso. Los anexos
pueden consultarse de forma independiente o como referencia durante la defensa.

La documentación complementaria abarca el manual de usuario, las pruebas realizadas,
el análisis de referentes del sector, los wireframes completos, la guía de estilos,
el backlog con historias de usuario, el inventario de figuras y evidencias, y la
organización del trabajo a lo largo de los sprints.

| Anexo | Contenido                      | Función dentro de la memoria                    |
| ----- | ------------------------------ | ----------------------------------------------- |
| 9.1   | Manual de usuario              | Cómo usar PacePal en cada rol y entorno         |
| 9.2   | Pruebas realizadas             | Tabla de casos de prueba con evidencias         |
| 9.3   | Análisis de la competencia     | Comparativa de referentes del sector            |
| 9.4   | Bocetos y wireframes completos | Listado completo de wireframes desktop y mobile |
| 9.5   | Guía de estilos                | Sistema visual y normas de diseño del proyecto  |
| 9.6   | Material complementario        | Backlog, figuras, Agile y trazabilidad técnica  |

---

## 9.1. Manual de usuario

Este apartado describe cómo utilizar PacePal según el rol del usuario y el entorno de
ejecución, ya sea en local con XAMPP o a través del cliente publicado en GitHub Pages.

### Uso como visitante

1. Abrir la aplicación desde la URL local (`http://localhost/pacepal`) o desde la URL
   publicada en GitHub Pages.
2. Consultar la portada para entender qué es PacePal y qué ofrece.
3. Navegar por el menú principal hacia **Actividades**, **Rutas** o **Tienda**.
4. Abrir el detalle de una actividad, ruta o producto para ver toda la información
   disponible.
5. Si se quiere participar o comprar, acceder al formulario de registro.

### Uso como usuario registrado

1. Acceder al formulario de **Registro** desde la cabecera o la landing.
2. Rellenar nombre, email, contraseña (con confirmación) y DNI. Los campos adicionales
   son opcionales.
3. Iniciar sesión con email y contraseña.
4. Consultar el **Perfil** personal desde la cabecera o el menú de usuario para ver
   los datos y el historial de pedidos.
5. Entrar en **Actividades** y hacer clic en una para ver su detalle. Pulsar **Unirse**
   si hay plazas disponibles.
6. Pulsar **Crear actividad** en la página de detalle de una ruta para organizar una
   nueva salida sobre esa ruta.
7. Navegar a **Tienda**, usar el buscador para encontrar un producto, entrar en su
   detalle y pulsar **Añadir al carrito**.
8. Acceder al **Carrito** para revisar la selección, ajustar cantidades y pulsar
   **Finalizar pedido**.
9. Pulsar **Cerrar sesión** en el menú de usuario cuando se termine la interacción.

### Uso como administrador

1. Iniciar sesión con una cuenta con rol `admin`.
2. Acceder al **Panel de administración** desde el menú de usuario.
3. Revisar los bloques disponibles: **Usuarios**, **Productos**, **Rutas**,
   **Actividades**, **Pedidos** y **Reportes**.
4. Crear, editar o eliminar recursos según el flujo soportado por la API y el panel.

> El acceso al panel de administración está protegido por rol. Si se intenta acceder
> sin credenciales de administrador, el sistema bloquea la entrada y muestra un
> mensaje de error controlado.

### Ejecución local con XAMPP

Para ejecutar PacePal con todas las funcionalidades activas:

1. Instalar XAMPP e iniciar los servicios Apache y MySQL desde el panel de control.
2. Copiar el proyecto en la carpeta `htdocs` de XAMPP.
3. Importar el esquema de la base de datos desde phpMyAdmin usando `db/schema.sql` y
   `db/pacepal.sql`.
4. Acceder a `http://localhost/pacepal` en el navegador.
5. Para el cliente React, instalar las dependencias con `npm install` y arrancar con
   `npm run dev`. El cliente se sirve en el puerto que Vite indique (normalmente 5173).

### Uso del cliente publicado en GitHub Pages

En la versión publicada en GitHub Pages, el cliente funciona en **modo demo**:

- La autenticación simula respuestas sin conectar a la API real.
- El carrito funciona con datos de ejemplo.
- Las cookies se gestionan con persistencia en `localStorage`.
- Las secciones de rutas, actividades y tienda cargan datos del fallback demo.

Para probar todas las funcionalidades con datos reales es necesario ejecutar el proyecto
en local con XAMPP.

### Limitaciones conocidas

| Situación                                    | Comportamiento                                                                                | Solución                                                   |
| -------------------------------------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| API no disponible (GitHub Pages)             | El cliente usa fallback demo con datos estáticos                                              | Ejecutar en local con XAMPP                                |
| Sin audio integrado en la página de contacto | Los archivos de audio existen pero la integración final no está cerrada en la rama de entrega | Pendiente como mejora futura                               |
| Filtros avanzados de actividades             | Algunos filtros del backlog original no se implementaron en su totalidad                      | Funcionalidad básica disponible; mejora futura documentada |
| Pruebas Postman                              | Requieren entorno local activo con la API corriendo                                           | Seguir la guía de instalación local                        |

---

## 9.2. Pruebas realizadas

Este apartado detalla las pruebas realizadas sobre PacePal a lo largo del proyecto.
Se incluyen pruebas funcionales manuales, verificación de la API, pruebas automatizadas
con Selenium y comprobación de la colección Postman.

### Pruebas manuales funcionales

| ID    | Prueba                                | Qué se comprobó                                                   | Resultado                | Evidencia / figura asociada                                              |
| ----- | ------------------------------------- | ----------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------ |
| PF-01 | Registro con datos inválidos          | Bloqueo de envío y mensajes de error coherentes                   | Correcto                 | `tests/funcionales/01-registro-incorrecto.md`                            |
| PF-02 | Registro con datos válidos            | Alta de cuenta y acceso posterior                                 | Correcto                 | `tests/funcionales/02-registro-correcto.md`                              |
| PF-03 | Login incorrecto                      | Mensaje de error sin revelar datos internos                       | Correcto                 | `tests/funcionales/03-login-incorrecto.md`                               |
| PF-04 | Login correcto                        | Acceso correcto y cambio de estado de sesión                      | Correcto                 | `tests/funcionales/04-login-correcto.md`                                 |
| PF-05 | Logout y limpieza de sesión           | Estado invitado restaurado; sesión limpia en servidor             | Correcto                 | `tests/react-sprint-3/README.md`                                         |
| PF-06 | Validación condicional del formulario | La tarjeta de preview aparece y desaparece según estado del campo | Correcto                 | `tests/funcionales/05-tarjeta-aparece-desaparece.md`                     |
| PF-07 | Buscador dinámico de productos        | Galería se actualiza sin recargar; estado vacío controlado        | Correcto                 | `tests/funcionales/06-buscador-productos.md`                             |
| PF-08 | Carrito React                         | Contador, subtotal y total recalculados; pedido generado          | Correcto                 | `tests/react-sprint-3/07-carrito.md`                                     |
| PF-09 | Gestión de actividades                | Estado actualizado; plazas coherentes; API responde               | Correcto                 | `tests/funcionales/08-actividades.md`                                    |
| PF-10 | Perfil de usuario                     | Datos del usuario y pedidos asociados visibles                    | Correcto                 | `tests/funcionales/09-perfil.md`                                         |
| PF-11 | Panel de administración               | Carga de usuarios, productos, rutas, actividades y pedidos        | Correcto                 | `tests/funcionales/10-admin.md`                                          |
| PF-12 | API REST con Postman                  | Respuestas `status:ok` y códigos HTTP correctos en la colección   | Parcialmente documentado | `docs/evidencias/dwes/postman1.png`, `postman2.png`                      |
| PF-13 | Sesión y conexión local API-BD        | Respuesta JSON válida en `/api/session` y `/api/health`           | Correcto                 | `docs/evidencias/despliegue/sprint-3/05-api-session-localhost-admin.png` |
| PF-14 | Despliegue local con XAMPP            | Entorno operativo y accesible; phpMyAdmin con BD pacepal activa   | Correcto                 | `docs/evidencias/despliegue/sprint-3/`                                   |
| PF-15 | Cliente React en GitHub Pages         | Cliente navega con fallback demo; cookies persistentes            | Correcto                 | `tests/react-sprint-3/README.md`                                         |

> **Sobre las evidencias de Postman:** Las capturas en
> `docs/documentacion-final/capturas-finales/06-postman/` muestran respuestas JSON
> accedidas directamente desde el navegador. No son capturas del runner de Postman.
> Las evidencias reales de Postman son `docs/evidencias/dwes/postman1.png` y
> `postman2.png`. Ambos tipos de evidencia son válidos y complementarios, pero no
> son intercambiables en la trazabilidad.

### Trazabilidad de archivos de prueba

| Archivo                                                                    | Flujo cubierto                                |
| -------------------------------------------------------------------------- | --------------------------------------------- |
| `tests/funcionales/01-registro-incorrecto.md`                              | Registro con datos inválidos                  |
| `tests/funcionales/02-registro-correcto.md`                                | Registro con datos válidos                    |
| `tests/funcionales/03-login-incorrecto.md`                                 | Login con credenciales erróneas               |
| `tests/funcionales/04-login-correcto.md`                                   | Login con credenciales válidas                |
| `tests/funcionales/05-tarjeta-aparece-desaparece.md`                       | Validación condicional del formulario         |
| `tests/funcionales/06-buscador-productos.md`                               | Buscador dinámico con y sin resultados        |
| `tests/react-sprint-3/07-carrito.md`                                       | Carrito: añadir, modificar, eliminar y pedido |
| `tests/funcionales/08-actividades.md`                                      | Crear actividad, unirse y abandonar           |
| `tests/funcionales/09-perfil.md`                                           | Perfil de usuario y pedidos                   |
| `tests/funcionales/10-admin.md`                                            | Panel de administración con rol admin         |
| `tests/react-sprint-3/11-escaparate-carga-inicial-react.md`                | Carga inicial del escaparate React            |
| `tests/react-sprint-3/12-regresion-secundarios-cookies-perfil-reportes.md` | Regresión: cookies, perfil y reportes         |

### Pruebas del cliente React (Sprint 3)

La verificación del cliente React está documentada en `tests/react-sprint-3/README.md`
y cubre los siguientes aspectos:

- Build con Vite y arranque en local sin errores de consola.
- Navegación por todas las pantallas principales sin errores.
- Buscador de productos con resultados y con mensaje de vacío.
- Carrito: añadir producto, cambiar cantidad, eliminar y finalizar pedido.
- Perfil e historial de pedidos de usuario autenticado.
- Panel de administración con datos cargados desde la API real.
- Cookies: banner visible, opciones de aceptar y rechazar, preferencias persistentes.
- Fallback demo en GitHub Pages: login, carrito y cookies sin API real.

### Pruebas con Postman

La colección Postman está en `tests/postman/pacepal.postman_collection.json` y el
entorno local en `tests/postman/pacepal-local.postman_environment.json`. Los flujos
cubiertos son:

- Login correcto e incorrecto.
- Obtención del catálogo de productos.
- Gestión de carrito y pedidos.
- Verificación de sesión activa y cierre de sesión.

Las evidencias del runner con los resultados de la colección están en
`docs/evidencias/dwes/postman1.png` y `docs/evidencias/dwes/postman2.png`.

### Pruebas automatizadas con Selenium

| Script                            | Flujo automatizado                                           |
| --------------------------------- | ------------------------------------------------------------ |
| `tests/selenium/test-registro.js` | Flujo completo de registro de usuario                        |
| `tests/selenium/test-buscador.js` | Buscador de productos con texto y verificación de resultados |

### Verificación de la API desde navegador

Las capturas siguientes corresponden a respuestas JSON de los endpoints accedidas
directamente desde el navegador. Son evidencia válida de la API funcional en entorno
local, pero no deben etiquetarse como capturas de Postman.

| Captura                                                    | Endpoint verificado                             |
| ---------------------------------------------------------- | ----------------------------------------------- |
| `capturas-finales/06-postman/api-get-health.png`           | `/api/health` — healthcheck del servidor        |
| `capturas-finales/06-postman/api-get-session.png`          | `/api/session` — estado de sesión activa        |
| `capturas-finales/06-postman/api-get-productos-raw.png`    | `/api/productos` — listado de productos en JSON |
| `capturas-finales/06-postman/api-get-producto-detalle.png` | `/api/productos/{id}` — detalle de producto     |

---

## 9.3. Análisis de la competencia

El análisis de referentes del sector se realizó durante el Sprint 1 del módulo DIW.
El objetivo fue tomar decisiones visuales y de experiencia de usuario con criterio real
de mercado, no por intuición.

Se estudiaron cuatro plataformas desde el mismo enfoque: cómo presentan la información,
cómo guían la acción del usuario y qué aciertos son trasladables a PacePal.

### Referentes analizados

**Strava**

Plataforma de seguimiento de actividad deportiva orientada al rendimiento. Es la referencia
más completa en cuanto a datos deportivos y comunidad activa alrededor de la actividad
física.

_Qué hace bien:_ Las métricas son protagonistas visuales. La comunidad se construye
alrededor de la actividad, no de los grupos. El sistema de estados y el feedback visual
son constantes y claros.

_Qué se aprendió para PacePal:_ Mostrar datos sin saturación; combinar señal visual y
texto corto en cada tarjeta; potenciar la sensación de progreso y pertenencia.

_Diferencia clave:_ Strava está orientado al alto rendimiento individual; PacePal se
centra en la actividad grupal accesible.

---

**Komoot**

Aplicación de planificación de rutas al aire libre con énfasis en la información técnica
de cada recorrido.

_Qué hace bien:_ Equilibrio entre mapa, datos técnicos y claridad visual. Lenguaje visual
limpio. Información técnica resumida con buena jerarquía.

_Qué se aprendió para PacePal:_ Evitar sobrecargar la pantalla de detalle de actividad;
usar elementos visuales de apoyo con función real; priorizar la lectura rápida para un
contexto de uso outdoor.

---

**Meetup**

Plataforma de organización de eventos y grupos presenciales, con un modelo de
creador/participante muy similar al concepto de actividad de PacePal.

_Qué hace bien:_ Ruta de decisión simple: listado → detalle → unirse. Fecha y ubicación
siempre en primer plano. CTA directo, sin pasos intermedios innecesarios.

_Qué se aprendió para PacePal:_ Reducir los clics necesarios para apuntarse a una
actividad; priorizar la respuesta a "qué, cuándo y dónde" en cada tarjeta; diseñar
tarjetas que puedan leerse en tres segundos.

---

**AllTrails**

Directorio de rutas con filtros por dificultad y perfil del usuario.

_Qué hace bien:_ Filtros efectivos por dificultad, distancia y contexto. Información
útil antes de decidir el desplazamiento. Buen equilibrio entre exploración y precisión.

_Qué se aprendió para PacePal:_ Hacer que filtrar sea tan importante como buscar;
ofrecer contexto práctico en cada tarjeta antes de entrar al detalle.

---

### Comparativa

| Aspecto clave                                    | Meetup | Strava | Komoot | AllTrails | PacePal (objetivo) |
| ------------------------------------------------ | :----: | :----: | :----: | :-------: | :----------------: |
| Flujo rápido para unirse                         |   ✔    |   ✔    |   ◐    |     ◐     |         ✔          |
| Métricas claras                                  |   ◐    |   ✔    |   ✔    |     ✔     |         ✔          |
| Comunidad visible                                |   ✔    |   ✔    |   ◐    |     ◐     |         ✔          |
| Filtros robustos                                 |   ◐    |   ◐    |   ✔    |     ✔     |         ✔          |
| Diseño limpio y entendible                       |   ✔    |   ✔    |   ✔    |     ✔     |         ✔          |
| Accesible para usuarios no deportistas avanzados |   ✔    |   ✗    |   ◐    |     ◐     |         ✔          |

Leyenda: ✔ bien cubierto · ◐ parcial · ✗ fuera de alcance

### Decisiones aplicadas a PacePal

- **Tarjetas con datos clave en primer plano:** imagen, título, fecha, nivel, ritmo y
  plazas. Inspirado en el modelo de tarjeta de Strava y Komoot.
- **Diferenciación explícita entre ruta y actividad:** la ruta es un recurso del sistema;
  la actividad es un evento creado por un usuario sobre esa ruta. Esta separación responde
  directamente al modelo de Meetup.
- **Diseño limpio orientado a usuarios no especializados:** PacePal apunta a usuarios
  que buscan experiencia accesible y comunidad, no métricas de élite.
- **Mobile-first y navegación directa:** el usuario puede decidir y actuar en pocos
  pasos, sin curva de aprendizaje.
- **Uso equilibrado del color:** predominio de fondos limpios, verde oscuro como color
  de marca y verde lima como acento visual.

### Conclusiones del equipo

Strava fue la aplicación que más gustó visualmente, pero resultaba demasiado compleja
para el alcance del proyecto. Meetup es la que más se acerca al modelo de PacePal,
aunque no está enfocada en el deporte como núcleo. La propuesta de PacePal toma la
simplicidad de flujo de Meetup, la jerarquía de datos de Strava y la claridad de
detalle de Komoot, adaptadas a un alcance educativo y defensible.

---

## 9.4. Bocetos / Wireframes completos

Los wireframes completos del proyecto se incorporan aquí como listado técnico
completo. El cuerpo principal de la memoria solo incorpora los bocetos más
representativos. Corresponden al trabajo realizado durante el Sprint 1 del módulo
DIW y están almacenados en `docs/03-diw/wireframes/`.

Son diseño planificado, no capturas del producto final. Su función es evidenciar
que la estructura y jerarquía de cada pantalla se planificó antes del desarrollo.

Los wireframes están disponibles en dos formatos por pantalla: escritorio y móvil.
Esta doble versión es evidencia del enfoque mobile-first adoptado desde el primer sprint.

---

### Wireframes escritorio

| N.º | Pantalla                | Archivo                                                          |
| --- | ----------------------- | ---------------------------------------------------------------- |
| 1   | Landing (inicio)        | `docs/03-diw/wireframes/wireframe-landing-desktop.png`           |
| 2   | Listado de actividades  | `docs/03-diw/wireframes/wireframe-actividades-desktop.png`       |
| 3   | Detalle de actividad    | `docs/03-diw/wireframes/wireframe-actividad-detalle-desktop.png` |
| 4   | Listado de rutas        | `docs/03-diw/wireframes/wireframe-rutas-desktop.png`             |
| 5   | Detalle de ruta         | `docs/03-diw/wireframes/wireframe-ruta-detalle-desktop.png`      |
| 6   | Tienda                  | `docs/03-diw/wireframes/wireframe-tienda-desktop.png`            |
| 7   | Detalle de producto     | `docs/03-diw/wireframes/wireframe-producto-desktop.png`          |
| 8   | Sobre nosotros (about)  | `docs/03-diw/wireframes/wireframe-about-desktop.png`             |
| 9   | Panel de administración | `docs/03-diw/wireframes/wireframe-admin-desktop.png`             |

> **[INSERTAR FIGURA C5 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/wireframes/wireframe-landing-desktop.png`
> _Figura C5. Wireframe de la landing page de PacePal — escritorio. Sprint 1 DIW._

> **[INSERTAR WIREFRAME 2 ESCRITORIO AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/wireframes/wireframe-actividades-desktop.png`
> _Wireframe del listado de actividades — escritorio. Sprint 1 DIW._

> **[INSERTAR WIREFRAME 3 ESCRITORIO AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/wireframes/wireframe-actividad-detalle-desktop.png`
> _Wireframe del detalle de actividad — escritorio. Sprint 1 DIW._

> **[INSERTAR WIREFRAME 4 ESCRITORIO AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/wireframes/wireframe-rutas-desktop.png`
> _Wireframe del listado de rutas — escritorio. Sprint 1 DIW._

> **[INSERTAR WIREFRAME 5 ESCRITORIO AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/wireframes/wireframe-ruta-detalle-desktop.png`
> _Wireframe del detalle de ruta — escritorio. Sprint 1 DIW._

> **[INSERTAR FIGURA C7 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/wireframes/wireframe-tienda-desktop.png`
> _Figura C7. Wireframe de la tienda de PacePal — escritorio. Sprint 1 DIW._

> **[INSERTAR WIREFRAME 7 ESCRITORIO AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/wireframes/wireframe-producto-desktop.png`
> _Wireframe del detalle de producto — escritorio. Sprint 1 DIW._

> **[INSERTAR WIREFRAME 8 ESCRITORIO AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/wireframes/wireframe-about-desktop.png`
> _Wireframe de la sección Sobre nosotros — escritorio. Sprint 1 DIW._

> **[INSERTAR WIREFRAME 9 ESCRITORIO AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/wireframes/wireframe-admin-desktop.png`
> _Wireframe del panel de administración — escritorio. Sprint 1 DIW._

---

### Wireframes móvil

| N.º | Pantalla                | Archivo                                                         |
| --- | ----------------------- | --------------------------------------------------------------- |
| 1   | Landing (inicio)        | `docs/03-diw/wireframes/wireframe-landing-mobile.png`           |
| 2   | Listado de actividades  | `docs/03-diw/wireframes/wireframe-actividades-mobile.png`       |
| 3   | Detalle de actividad    | `docs/03-diw/wireframes/wireframe-actividad-detalle-mobile.png` |
| 4   | Listado de rutas        | `docs/03-diw/wireframes/wireframe-rutas-mobile.png`             |
| 5   | Detalle de ruta         | `docs/03-diw/wireframes/wireframe-ruta-detalle-mobile.png`      |
| 6   | Tienda                  | `docs/03-diw/wireframes/wireframe-tienda-mobile.png`            |
| 7   | Detalle de producto     | `docs/03-diw/wireframes/wireframe-producto-mobile.png`          |
| 8   | Sobre nosotros (about)  | `docs/03-diw/wireframes/wireframe-about-mobile.png`             |
| 9   | Panel de administración | `docs/03-diw/wireframes/wireframe-admin-mobile.png`             |

> **[INSERTAR FIGURA C6 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/wireframes/wireframe-landing-mobile.png`
> _Figura C6. Wireframe de la landing page de PacePal — móvil. Sprint 1 DIW._

> **[INSERTAR WIREFRAME 2 MÓVIL AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/wireframes/wireframe-actividades-mobile.png`
> _Wireframe del listado de actividades — móvil. Sprint 1 DIW._

> **[INSERTAR WIREFRAME 3 MÓVIL AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/wireframes/wireframe-actividad-detalle-mobile.png`
> _Wireframe del detalle de actividad — móvil. Sprint 1 DIW._

> **[INSERTAR WIREFRAME 4 MÓVIL AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/wireframes/wireframe-rutas-mobile.png`
> _Wireframe del listado de rutas — móvil. Sprint 1 DIW._

> **[INSERTAR WIREFRAME 5 MÓVIL AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/wireframes/wireframe-ruta-detalle-mobile.png`
> _Wireframe del detalle de ruta — móvil. Sprint 1 DIW._

> **[INSERTAR WIREFRAME 6 MÓVIL AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/wireframes/wireframe-tienda-mobile.png`
> _Wireframe de la tienda de PacePal — móvil. Sprint 1 DIW._

> **[INSERTAR WIREFRAME 7 MÓVIL AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/wireframes/wireframe-producto-mobile.png`
> _Wireframe del detalle de producto — móvil. Sprint 1 DIW._

> **[INSERTAR WIREFRAME 8 MÓVIL AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/wireframes/wireframe-about-mobile.png`
> _Wireframe de la sección Sobre nosotros — móvil. Sprint 1 DIW._

> **[INSERTAR WIREFRAME 9 MÓVIL AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/wireframes/wireframe-admin-mobile.png`
> _Wireframe del panel de administración — móvil. Sprint 1 DIW._

---

### Notas sobre los wireframes

- Los wireframes se crearon en Sprint 1 como planificación visual antes del desarrollo.
  No deben interpretarse como el aspecto final del producto.
- La pantalla de carrito no tiene wireframe independiente: se diseñó integrada en el
  flujo de tienda y producto.
- Los wireframes de registro y login se planificaron directamente sobre el formulario
  durante el Sprint 1 de DWEC.
- Los wireframes son de baja-media fidelidad y muestran estructura de contenidos y
  jerarquía visual, no los colores ni la tipografía definitivos.

---

## 9.5. Guía de estilos

La guía de estilos de PacePal define los criterios visuales, de interfaz y de contenido
para mantener coherencia en todas las pantallas. Como fuente de trabajo se utilizó el
documento interno elaborado en el Sprint 1 del módulo DIW.

---

### Identidad visual

PacePal tiene una identidad visual clara y funcional: conecta visualmente con el entorno
natural y la actividad al aire libre, sin sobrecargar la interfaz con elementos decorativos.
La paleta, la tipografía y los iconos están elegidos para maximizar la legibilidad y la
coherencia entre pantallas.

> **[INSERTAR FIGURA C1 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/media/logo.png`
> _Figura C1. Logotipo principal de PacePal._

---

### Paleta cromática

> **[INSERTAR FIGURA C2 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/media/paletaIdentidadVisual.png`
> _Figura C2. Paleta de color corporativa de PacePal._

| Token de color      | Valor                           | Uso                                                        |
| ------------------- | ------------------------------- | ---------------------------------------------------------- |
| `--color-primary`   | Verde oscuro (`#2A400A`)        | Color de marca, cabecera, botones primarios, pie de página |
| `--color-accent`    | Verde lima (`#A1F227`)          | Acentos, CTA secundarios, destacados, subrayados de título |
| `--color-bg`        | Blanco (`#FFFFFF`)              | Fondos principales de sección y documento                  |
| `--color-bg-soft`   | Gris muy claro                  | Fondos de sección alternos, tarjetas, cajas de código      |
| `--color-text`      | Negro / gris oscuro (`#1E1E1E`) | Texto principal en todas las pantallas                     |
| `--color-text-soft` | Gris medio (`#5F6B55`)          | Texto secundario, labels, subtítulos, pie de figura        |

El color se aplica con criterio de equilibrio visual: predominan los fondos limpios
(blanco y gris claro), el verde oscuro se usa como color de marca en cabecera, pie
de página y botones primarios, y el verde lima se reserva como acento para destacados
y llamadas a la acción.

---

### Tipografía

> **[INSERTAR FIGURA C3 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/media/tipografiaIdentidadVisual.png`
> _Figura C3. Sistema tipográfico de PacePal._

- **Fuente principal:** Inter (cargada desde Google Fonts).
- **Usos:** títulos, subtítulos, cuerpo de texto, etiquetas y botones.
- **Pesos:** 400 para cuerpo, 600 para subtítulos y labels, 700 para títulos y botones.
- **Tamaño base:** 16 px; ajuste responsivo con clases Bootstrap o `rem`.
- **Altura de línea:** 1.5 para lectura cómoda en bloque de texto.

Bootstrap 5 complementa con sus clases de utilidades (`fw-bold`, `text-muted`, `fs-*`)
para ajustes puntuales sin romper la coherencia tipográfica.

---

### Iconografía

> **[INSERTAR FIGURA C4 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/media/pacepal_iconografia.png`
> _Figura C4. Sistema de iconografía de PacePal basado en Bootstrap Icons._

- **Sistema principal:** Bootstrap Icons (v1.11.3).
- **Usos:** botones de acción, navegación, tarjetas de actividad y producto,
  formularios y estados.
- **Tamaño base:** 1 rem; variaciones puntuales hasta 1.5 rem para iconos de énfasis.
- **Color:** hereda el color del elemento padre; en botones sigue la paleta cromática.

---

### Jerarquía visual y espaciado

- Sistema de espaciado basado en múltiplos de 4 px y 8 px.
- Márgenes y paddings coherentes con las utilidades `m-*` y `p-*` de Bootstrap 5.
- Separación visual entre bloques de sección: mínimo 48 px en escritorio, reducido a
  24 px en móvil.
- Jerarquía tipográfica clara: `H1` para títulos de página, `H2` para secciones,
  `H3` para subsecciones y párrafos de apoyo.

---

### Componentes principales

**Botones**

| Variante      | Uso                                       | Fondo                       | Texto        |
| ------------- | ----------------------------------------- | --------------------------- | ------------ |
| Primario      | Acción principal, envío de formulario     | Verde oscuro (`#2A400A`)    | Blanco       |
| Secundario    | Acción alternativa, cancelar, ver detalle | Contorno verde o gris claro | Verde oscuro |
| Peligro       | Eliminar, acción destructiva              | Rojo Bootstrap (`#dc3545`)  | Blanco       |
| Deshabilitado | Estado no activo                          | Gris claro                  | Gris medio   |

**Formularios**

- Campos con borde claro; el borde cambia al verde primario en `:focus`.
- Labels visibles siempre sobre o junto al campo; nunca solo placeholder.
- Mensajes de error bajo el campo en color de alerta; mensajes de confirmación en verde.
- Campos obligatorios indicados con asterisco visible y accesible.
- Formularios con `<label for>` asociado a cada campo y mensajes de error vinculados
  con `aria-describedby`.

**Tarjetas**

- Bordes redondeados (`border-radius: 8–12 px`) y sombra suave.
- Estructura: imagen arriba → título → descripción resumida → botón de acción.
- En listado de actividades: datos clave (fecha, nivel, ritmo, plazas) visibles sin
  entrar al detalle.

**Navegación**

- Barra superior fija con logo a la izquierda y menú a la derecha.
- En escritorio: menú horizontal con enlaces de texto e iconos opcionales.
- En móvil: menú hamburger colapsable (Bootstrap `navbar-collapse`).
- Acceso a perfil, carrito y sesión mediante iconos en el extremo derecho.

---

### Imágenes y multimedia

- Formato JPG o PNG; optimizadas para web.
- Ratio de aspecto coherente: 4:3 en tarjetas de listado, 16:9 en hero y banners.
- Siempre con atributo `alt` descriptivo y significativo.
- La sección de tienda integra un vídeo (`<video controls>`) como recurso multimedia.

---

### Normas de voz y tono

- Segunda persona del singular en llamadas a la acción: "Únete", "Regístrate",
  "Ver ruta".
- Tono cercano, directo y activo; sin lenguaje corporativo ni tecnicismos
  innecesarios en la UI.
- Los textos informativos son breves y van directamente al punto.
- Los mensajes de error son claros y no revelan datos técnicos internos al usuario.

---

### Accesibilidad aplicada al diseño

- Contraste de color revisado con WCAG Contrast Checker; ratios adecuados para los
  elementos auditados.
- Foco visible para navegación por teclado (outline diferenciado, no eliminado).
- HTML semántico: `<main>`, `<nav>`, `<header>`, `<footer>`, `<section>`, `<article>`.
- Textos alternativos en todas las imágenes de contenido.
- Respeto por la preferencia `prefers-reduced-motion` en el cliente React.

La auditoría formal de la landing (Lighthouse 100, WAVE 0 errores, WCAG Contrast Checker)
se documenta en el apartado de pruebas de la memoria. Las evidencias están en
`docs/evidencias/diw/sprint-2/`.

---

## 9.6. Material complementario de PacePal

Este bloque agrupa la documentación que no pertenece estrictamente a los apartados
9.1–9.5 pero que sí aporta valor técnico y de proceso al proyecto.

---

### 9.6.1. Historias de usuario y backlog

El backlog completo del proyecto se elaboró en el Sprint 0 y se gestionó como lista
viva a lo largo de todos los sprints. Las historias marcadas como "backlog evolutivo"
no se implementaron en el ciclo actual y quedan como propuesta de continuación.

**Criterios de estimación (Story Points):**
1 — muy pequeño · 2 — pequeño · 3 — medio · 5 — grande · 8 — muy grande

| ID    | Historia                                                                               | Validación (resumen)                                                          | Valor                        | Prioridad | SP  | Sprint / Materia                       |
| ----- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ---------------------------- | --------- | --- | -------------------------------------- |
| HU-01 | Como usuario quiero registrarme con DNI para acceder a la plataforma                   | Formulario completo con DNI y email válidos, sin duplicados, alta correcta    | Evita cuentas falsas         | Alta      | 5   | Sprint 1-2 / DWEC-DWES                 |
| HU-02 | Como usuario quiero iniciar sesión para acceder a mis datos y funciones                | Login correcto, error controlado, sesión persistente al recargar              | Base de la seguridad         | Alta      | 3   | Sprint 1-2 / DWEC-DWES                 |
| HU-03 | Como usuario quiero cerrar sesión para proteger mi cuenta                              | Cierre visible; sesión eliminada en servidor; bloqueo de pantallas protegidas | Control de seguridad         | Alta      | 2   | Sprint 1-2 / DWEC-DWES                 |
| HU-04 | Como sistema quiero controlar el acceso por roles para proteger funciones sensibles    | Restricción de admin y endpoints por rol/sesión; error controlado             | Protección de datos          | Alta      | 5   | Sprint 2 / DWES                        |
| HU-05 | Como usuario quiero ver el listado de actividades con datos clave para decidir         | Listado con ruta, fecha, nivel, ritmo, plazas y acceso a detalle              | Pantalla principal           | Alta      | 5   | Sprint 2-3 / DWEC                      |
| HU-06 | Como usuario quiero filtrar actividades por nivel y ritmo para ajustar la búsqueda     | Filtros aplicables, opción de limpiar, vacío controlado                       | Mejora el ajuste             | Alta      | 3   | Sprint 2 / DWEC                        |
| HU-07 | Como usuario quiero filtrar actividades por fecha y plazas disponibles                 | Filtro temporal y de disponibilidad; plazas coherentes                        | Mayor utilidad               | Media     | 3   | Sprint 2 / DWEC                        |
| HU-08 | Como usuario quiero paginar el listado de actividades sin perder filtros               | Navegación por páginas sin romper filtros activos                             | Escalabilidad                | Media     | 3   | Sprint 2 / DWEC                        |
| HU-09 | Como usuario quiero buscar actividades sin recargar la página                          | Búsqueda sin recarga; estado vacío sin ambigüedad                             | Mejor experiencia            | Alta      | 5   | Sprint 2 / DWEC                        |
| HU-10 | Como usuario quiero ver el detalle de una actividad para tomar una decisión informada  | Datos completos; acciones coherentes según estado de sesión                   | Decisión informada           | Alta      | 3   | Sprint 2 / DWEC                        |
| HU-11 | Como usuario quiero crear una actividad sobre una ruta existente                       | Formulario validado; actividad visible en listado tras el alta                | Activa la comunidad          | Alta      | 5   | Sprint 2-3 / DWEC-DWES                 |
| HU-12 | Como usuario quiero unirme a una actividad existente                                   | Requiere sesión; controla plazas y duplicados                                 | Función central              | Alta      | 5   | Sprint 2-3 / DWEC-DWES                 |
| HU-13 | Como usuario quiero salir de una actividad a la que me apunté                          | Libera plazas y actualiza el estado correctamente                             | Consistencia                 | Alta      | 3   | Sprint 2-3 / DWEC-DWES                 |
| HU-14 | Como usuario quiero ver separadas mis actividades creadas de las que participo         | Separación entre creadas y en las que se participa                            | Orden personal               | Media     | 3   | Sprint 3 / DWEC                        |
| HU-15 | Como usuario quiero ver el catálogo de rutas para planificar actividades               | Listado y detalle sin posibilidad de crear rutas nuevas                       | Soporte para actividades     | Media     | 3   | Sprint 2 / DWEC-DWES                   |
| HU-16 | Como usuario quiero ver el detalle de una ruta con distancia y dificultad              | Datos legibles; imagen incluida                                               | Reduce incertidumbre         | Media     | 2   | Sprint 2 / DWEC                        |
| HU-17 | Como usuario quiero reportar una incidencia sobre otro usuario                         | Reporte con motivo; sesión obligatoria; trazabilidad en BD                    | Mejora convivencia           | Alta      | 5   | Sprint 2-3 / DWES                      |
| HU-18 | Como sistema quiero acumular avisos sobre un usuario para tomar medidas                | Contador e historial de avisos internos                                       | Control preventivo           | Media     | 5   | Sprint 2-3 / DWES                      |
| HU-19 | Como administrador quiero gestionar reportes pendientes                                | Gestión por estados y nota de moderación                                      | Moderación trazable          | Media     | 5   | Sprint 3 / DWES                        |
| HU-20 | Como administrador quiero aplicar acciones sobre un usuario problemático               | Advertir, limitar o bloquear con historial registrado                         | Seguridad operacional        | Media     | 5   | Sprint 3 / DWES                        |
| HU-21 | Como usuario quiero ver el catálogo de la tienda de zapatillas sostenibles             | Catálogo con datos e imagen; carga desde API y BD                             | Propuesta sostenible         | Alta      | 5   | Sprint 2-3 / DWEC-DWES                 |
| HU-22 | Como usuario quiero ver el detalle de un producto con materiales y precio              | Información completa y botón de compra                                        | Compra informada             | Media     | 3   | Sprint 2-3 / DWEC                      |
| HU-23 | Como usuario quiero añadir y quitar productos del carrito                              | Alta y baja con persistencia de estado                                        | Base de la compra            | Alta      | 5   | Sprint 2-3 / DWEC                      |
| HU-24 | Como usuario quiero ver el contador y el total del carrito actualizados                | Recuento visible; cantidades y total en tiempo real                           | Transparencia                | Alta      | 5   | Sprint 2-3 / DWEC                      |
| HU-25 | Como usuario quiero confirmar un pedido desde el carrito                               | Login requerido; creación de pedido y vaciado del carrito                     | Cierre de la tienda          | Media     | 5   | Sprint 2-3 / DWEC-DWES                 |
| HU-26 | Como usuario quiero acumular puntos ecológicos por mis compras y canjearlos            | Saldo, canje y trazabilidad                                                   | Incentiva sostenibilidad     | Baja      | 8   | **Backlog evolutivo** / Sostenibilidad |
| HU-27 | Como sistema quiero exponer una API REST para rutas y actividades                      | Endpoints JSON; errores controlados; validación de parámetros                 | Integración cliente-servidor | Alta      | 8   | Sprint 2-3 / DWES                      |
| HU-28 | Como sistema quiero exponer una API REST para usuarios, reportes y tienda              | Registro, login, reportes, pedidos y control de rol                           | Circuito funcional           | Alta      | 8   | Sprint 2-3 / DWES                      |
| HU-29 | Como equipo queremos documentar la API y tener una colección Postman ejecutable        | Endpoints documentados y colección con pruebas                                | Evidencia trazable           | Alta      | 5   | Sprint 2-3 / DWES                      |
| HU-30 | Como usuario quiero que la aplicación sea accesible desde teclado y con buen contraste | Navegación por teclado, foco visible, labels, contraste                       | Calidad y cumplimiento       | Alta      | 3   | Sprint 1-2 / DIW                       |

**Resumen por prioridad**

| Prioridad | Uso en el proyecto                                                                   |
| --------- | ------------------------------------------------------------------------------------ |
| Alta      | Funcionalidades principales necesarias para que PacePal sea utilizable y defendible. |
| Media     | Mejoras relevantes para completar la experiencia de usuario y administración.        |
| Baja      | Funcionalidades evolutivas que quedan fuera del alcance cerrado.                     |

---

### 9.6.2. Figuras, diagramas y evidencias visuales

Este apartado es el inventario de control de todas las figuras del proyecto. Las imágenes
se insertan en los apartados donde se citan (secciones 3–6 y anexos 9.4–9.5). Esta tabla
sirve como referencia de trazabilidad durante el montaje en LibreOffice: permite localizar
cada archivo, saber dónde debe aparecer en el documento y qué pie de figura usar.

Antes de exportar a PDF se debe comprobar visualmente que todas las imágenes se han
insertado correctamente. Las figuras están agrupadas por bloque temático.

---

**Bloque A — Planificación y organización**

| Código | Título              | Archivo                                                                | Dónde se inserta          | Pie sugerido                                                            |
| ------ | ------------------- | ---------------------------------------------------------------------- | ------------------------- | ----------------------------------------------------------------------- |
| A1     | Diagrama de Gantt   | `docs/documentacion-final/figuras/Diagrama de Gantt.png`               | Sección 3 — Planificación | Figura A1. Diagrama de Gantt de PacePal organizado por sprints.         |
| A2     | Casos de uso        | `docs/documentacion-final/figuras/Diagrama de casos de uso.png`        | Sección 4.1 — Requisitos  | Figura A2. Diagrama de casos de uso con los cuatro actores del sistema. |
| A3     | Clases simplificado | `docs/documentacion-final/figuras/Diagrama de clases simplificado.png` | Sección 4.2 — Análisis    | Figura A3. Diagrama de clases simplificado del dominio de PacePal.      |

---

**Bloque B — Arquitectura y modelo de datos**

| Código | Título                  | Archivo                                                                | Dónde se inserta | Pie sugerido                                                                   |
| ------ | ----------------------- | ---------------------------------------------------------------------- | ---------------- | ------------------------------------------------------------------------------ |
| B1     | Diagrama de componentes | `docs/documentacion-final/figuras/Diagrama de componentes.png`         | Sección 4.2      | Figura B1. Diagrama de componentes del cliente React y el backend PHP.         |
| B2     | Arquitectura general    | `docs/documentacion-final/figuras/Esquema de arquitectura general.png` | Sección 4.2      | Figura B2. Arquitectura general del proyecto: React, API PHP y MySQL.          |
| B3     | Modelo relacional       | `docs/documentacion-final/figuras/Modelo relacional simplificado.png`  | Sección 4.2      | Figura B3. Modelo relacional simplificado con las nueve entidades principales. |

---

**Bloque C — Diseño e identidad visual**

| Código | Título                       | Archivo                                                           | Dónde se inserta        | Pie sugerido                                                     |
| ------ | ---------------------------- | ----------------------------------------------------------------- | ----------------------- | ---------------------------------------------------------------- |
| C1     | Logotipo                     | `docs/03-diw/media/logo.png`                                      | Sección 4.3 / Anexo 9.5 | Figura C1. Logotipo principal de PacePal.                        |
| C2     | Paleta cromática             | `docs/03-diw/media/paletaIdentidadVisual.png`                     | Sección 4.3 / Anexo 9.5 | Figura C2. Paleta de color corporativa de PacePal.               |
| C3     | Tipografía                   | `docs/03-diw/media/tipografiaIdentidadVisual.png`                 | Sección 4.3 / Anexo 9.5 | Figura C3. Sistema tipográfico de PacePal: fuente Inter.         |
| C4     | Iconografía                  | `docs/03-diw/media/pacepal_iconografia.png`                       | Sección 4.3 / Anexo 9.5 | Figura C4. Iconografía de PacePal basada en Bootstrap Icons.     |
| C5     | Wireframe landing escritorio | `docs/03-diw/wireframes/wireframe-landing-desktop.png`            | Anexo 9.4               | Figura C5. Wireframe landing PacePal — escritorio. Sprint 1 DIW. |
| C6     | Wireframe landing móvil      | `docs/03-diw/wireframes/wireframe-landing-mobile.png`             | Anexo 9.4               | Figura C6. Wireframe landing PacePal — móvil. Sprint 1 DIW.      |
| C7     | Wireframe tienda escritorio  | `docs/03-diw/wireframes/wireframe-tienda-desktop.png`             | Anexo 9.4               | Figura C7. Wireframe de la tienda de PacePal — escritorio.       |
| C8     | Responsive modular           | `docs/documentacion-final/figuras/Esquema responsive modular.png` | Sección 4.3             | Figura C8. Esquema del sistema responsive modular de PacePal.    |

---

**Bloque D — Pruebas funcionales del cliente React**

| Código | Título                  | Archivo                                                                            | Dónde se inserta      | Pie sugerido                                                           |
| ------ | ----------------------- | ---------------------------------------------------------------------------------- | --------------------- | ---------------------------------------------------------------------- |
| D1     | Landing desktop React   | `docs/documentacion-final/capturas-finales/02-react/react-landing-desktop.png`     | Sección 5             | Figura D1. Landing de PacePal en el cliente React. Sprint 3.           |
| D2     | Tienda con productos    | `docs/documentacion-final/capturas-finales/02-react/react-tienda-productos.png`    | Sección 5             | Figura D2. Escaparate de productos cargado desde la API. Sprint 3.     |
| D3     | Buscador con resultados | `docs/documentacion-final/capturas-finales/02-react/react-buscador-resultados.png` | Sección 5 / Anexo 9.2 | Figura D3. Buscador dinámico con resultados filtrados.                 |
| D4     | Carrito React           | `docs/evidencias/dwec/sprint-3/Carrito-React.png`                                  | Sección 5 / Anexo 9.2 | Figura D4. Carrito React con producto, cantidad y total.               |
| D5     | Añadir al carrito       | `docs/evidencias/dwec/sprint-3/Carrito_añadir_React.png`                           | Sección 5             | Figura D5. Confirmación de "Añadido al carrito" en la interfaz React.  |
| D6     | Perfil de usuario       | `docs/documentacion-final/capturas-finales/02-react/react-perfil-usuario.png`      | Sección 5             | Figura D6. Pantalla de perfil de usuario autenticado.                  |
| D7     | Flujo autenticación     | `docs/documentacion-final/figuras/Flujo loginSesionLogOut.png`                     | Sección 4.2 / 5       | Figura D7. Flujo completo de autenticación: login, sesión y logout.    |
| D8     | Panel administración    | `docs/documentacion-final/capturas-finales/02-react/react-panel-admin.png`         | Sección 5             | Figura D8. Panel de administración con acceso restringido a rol admin. |

---

**Bloque E — API y base de datos**

| Código | Título              | Archivo                                                    | Dónde se inserta      | Pie sugerido                                                                   |
| ------ | ------------------- | ---------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------ |
| E1     | Flujo buscador AJAX | `docs/documentacion-final/figuras/Flujo buscador AJAX.png` | Sección 4.2           | Figura E1. Flujo del buscador dinámico AJAX de PacePal.                        |
| E2     | Flujo carrito       | `docs/documentacion-final/figuras/Flujo carrito.png`       | Sección 4.2           | Figura E2. Flujo de gestión del carrito: añadir, modificar y finalizar pedido. |
| E3     | Diagrama ER         | `docs/evidencias/dwes/diagramaER.png`                      | Sección 4.2           | Figura E3. Diagrama entidad-relación de la base de datos de PacePal.           |
| E4     | Postman runner 1    | `docs/evidencias/dwes/postman1.png`                        | Sección 5 / Anexo 9.2 | Figura E4. Runner de Postman con resultados de la colección de PacePal.        |
| E5     | Postman runner 2    | `docs/evidencias/dwes/postman2.png`                        | Sección 5 / Anexo 9.2 | Figura E5. Segunda evidencia del runner de la colección Postman.               |

> **Nota:** E4 y E5 son capturas reales del runner de Postman (`postman1.png`,
> `postman2.png`). Las capturas en `capturas-finales/06-postman/` son respuestas JSON
> visualizadas desde el navegador; son evidencia complementaria válida, pero no deben
> etiquetarse como figuras de Postman.

---

**Bloque F — Accesibilidad**

| Código | Título           | Archivo                                                                                     | Dónde se inserta | Pie sugerido                                                                    |
| ------ | ---------------- | ------------------------------------------------------------------------------------------- | ---------------- | ------------------------------------------------------------------------------- |
| F1     | Lighthouse 100   | `docs/evidencias/diw/sprint-2/lighthouse-accesibilidad.png`                                 | Sección 5.2      | Figura F1. Auditoría Lighthouse: puntuación 100 en accesibilidad. Sprint 2 DIW. |
| F2     | Análisis WAVE    | `docs/evidencias/diw/sprint-2/wave-analisis.png`                                            | Sección 5.2      | Figura F2. Resultado WAVE: 0 errores en el alcance auditado.                    |
| F3     | Contraste WCAG   | `docs/evidencias/diw/sprint-2/WCAG_Contrast_Checker.png`                                    | Sección 5.2      | Figura F3. Comprobación de contraste WCAG. Sprint 2 DIW.                        |
| F4     | Foco por teclado | `docs/documentacion-final/capturas-finales/05-accesibilidad/accesibilidad-foco-teclado.png` | Sección 5.2      | Figura F4. Foco visible por teclado en la interfaz de PacePal.                  |
| F5     | Botón por voz    | `docs/documentacion-final/capturas-finales/05-accesibilidad/accesibilidad-boton-voz.png`    | Sección 5.2      | Figura F5. Botón de accesibilidad por voz en la interfaz de PacePal.            |

---

**Bloque G — Despliegue**

| Código | Título                 | Archivo                                                                     | Dónde se inserta | Pie sugerido                                                                            |
| ------ | ---------------------- | --------------------------------------------------------------------------- | ---------------- | --------------------------------------------------------------------------------------- |
| G1     | XAMPP activo           | `docs/evidencias/despliegue/sprint-3/01-xampp-dashboard-localhost.png`      | Sección 6        | Figura G1. Panel de XAMPP operativo en entorno local. Apache y MySQL activos.           |
| G2     | phpMyAdmin con BD      | `docs/evidencias/despliegue/sprint-3/03-phpmyadmin-bd-pacepal.png`          | Sección 6        | Figura G2. phpMyAdmin mostrando la base de datos pacepal con sus tablas.                |
| G3     | GitHub Pages HTTPS     | `docs/evidencias/despliegue/sprint-3/08-github-pages-publicacion-https.png` | Sección 6        | Figura G3. Cliente React de PacePal publicado en GitHub Pages con HTTPS.                |
| G4     | Sesión API localhost   | `docs/evidencias/despliegue/sprint-3/05-api-session-localhost-admin.png`    | Sección 6        | Figura G4. Respuesta JSON del endpoint /api/session con sesión de administrador activa. |
| G5     | Responsive comparativa | `capturas-finales/03-responsive/` (desktop + tablet + mobile)               | Sección 4.3 / 6  | Figura G5. Comparativa responsive de la landing en escritorio, tablet y móvil.          |

> **Nota G5:** Esta figura requiere insertar tres imágenes seguidas con el mismo pie:
> `responsive-desktop-landing.png`, `responsive-tablet-landing.png` y
> `responsive-mobile-landing.png`. Ruta base: `docs/documentacion-final/capturas-finales/03-responsive/`.

---

### 9.6.3. Organización Agile y evolución del tablero

PacePal adoptó un marco Scrum adaptado al contexto educativo del Proyecto Agile
Intermodular de 2.º DAW. No se replica un Scrum empresarial completo, pero sí se
trabaja con los elementos esenciales: backlog priorizado, sprints con objetivos
definidos, roles asumidos por el equipo, evidencias documentadas desde el inicio
y retrospectiva al cierre de cada sprint.

**Roles del equipo**

| Rol                  | Responsabilidades                                                             | Cómo se aplicó                                                                      |
| -------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Product Owner        | Priorizar el backlog, decidir alcance de cada sprint, aceptar funcionalidades | Decidió el orden de historias; recortaba alcance sin arrastrar deuda sin documentar |
| Scrum Master         | Mantener el tablero, quitar bloqueos, asegurar evidencias desde el inicio     | Mantuvo el tablero actualizado; verificó que cada historia cerrada tenía evidencia  |
| Equipo de desarrollo | Construir el producto, dividir el trabajo, mantener el código integrado       | Ambos integrantes asumieron desarrollo full-stack; división por módulo y sprint     |

Los dos integrantes del equipo son Pablo Sevillano Aparicio y Alejandro Pacheco. Los
roles se asumieron de forma compartida y rotatoria según la carga de cada sprint.

**Sprints y objetivos**

| Sprint   | Materias                    | Objetivo principal                                                                                       |
| -------- | --------------------------- | -------------------------------------------------------------------------------------------------------- |
| Sprint 0 | Agile, transversal          | Definir el producto, el equipo, el backlog inicial y las reglas de evidencias                            |
| Sprint 1 | DIW, DWEC                   | Landing page, formularios, diseño visual, wireframes, guía de estilos, accesibilidad básica              |
| Sprint 2 | DIW, DWEC, DWES             | Accesibilidad formal, tienda dinámica, buscador AJAX, carrito, API REST, base de datos, sesiones y roles |
| Sprint 3 | DIW, DWEC, DWES, Despliegue | Migración a React con Vite, vídeo, fallback demo, despliegue local y GitHub Pages                        |
| Cierre   | Transversal, documentación  | Consolidación documental, revisión de calidad, memoria final                                             |

**Evolución del tablero**

| Etapa             | Herramienta / método               | Uso                                                     | Motivo del cambio                                                         | Resultado                                                  |
| ----------------- | ---------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Sprint 0          | Trello                             | Gestión inicial del backlog y primeras tareas           | Primera herramienta disponible; rápida de configurar                      | Tablero básico con historias iniciales priorizadas         |
| Sprint 1-2        | GitHub Projects (Kanban)           | Tablero Kanban integrado con el repositorio y las ramas | Mayor trazabilidad; commits vinculados a historias; flujo más profesional | Mejora en el seguimiento y en la calidad de las evidencias |
| Sprint 3 y cierre | GitHub Projects + ramas por sprint | Gestión del sprint final y documentación                | Consolidación del flujo: rama → commit → evidencia → cierre               | Trazabilidad completa entre código, pruebas y memoria      |

> No existe captura formal del tablero en ninguna de las etapas. La trazabilidad del
> trabajo se apoya en los commits de las ramas `sprint-1`, `sprint-2` y
> `sprint-3-react-jsx`, en las historias documentadas en `docs/02-agile/` y en las
> evidencias asociadas a cada sprint.

**Columnas del tablero**

| Columna       | Contenido                                       |
| ------------- | ----------------------------------------------- |
| Backlog       | Historias pendientes de planificar              |
| Sprint activo | Historias seleccionadas para el sprint en curso |
| En progreso   | Tareas en desarrollo activo                     |
| Revisión      | Tareas terminadas pendientes de verificar       |
| Hecho         | Tareas cerradas con evidencia asociada          |

**Retrospectiva Sprint 2 — aprendizajes clave**

Tras el Sprint 2, la revisión externa detectó tres aspectos de mejora que condicionaron
la organización del Sprint 3 y la estructura de esta memoria:

- **Prototipado poco visible:** los wireframes y bocetos existían en el repositorio pero
  no quedaban integrados de forma clara en la narrativa de entrega.
- **Defendibilidad del backend:** surgieron dudas sobre sesiones, cookies y estabilidad
  del servidor. La solución fue añadir evidencias técnicas concretas y documentarlas.
- **Justificación del proceso de diseño:** el resultado visual era correcto, pero faltaba
  explicar el recorrido desde el análisis de competencia hasta las decisiones concretas.

**Definición de "hecho"**

Una historia se considera cerrada cuando: cumple los criterios de validación definidos,
existe al menos una evidencia que lo demuestra, el código está integrado en la rama del
sprint y la documentación técnica asociada está en la carpeta `docs/` correcta.

---

### 9.6.4. Documentación técnica ampliada y trazabilidad

Este apartado cierra el soporte documental de la memoria. No repite el contenido de los
apartados anteriores; su función es mostrar de forma ordenada la documentación técnica
producida y la relación entre requisitos, implementación y prueba.

**Documentación interna producida**

| Área                      | Documentos principales                                                    | Carpeta                         |
| ------------------------- | ------------------------------------------------------------------------- | ------------------------------- |
| Agile y proceso           | Scrum base, historias de usuario, notas de sprint, retrospectiva Sprint 2 | `docs/02-agile/`                |
| Diseño e identidad visual | Guía de estilos, tendencias y competencia, identidad visual               | `docs/03-diw/`                  |
| DWEC — frontend           | Documentación de componentes, pruebas, evidencias Sprint 3                | `docs/04-dwec/`                 |
| DWES — backend            | Documentación de la API REST, Postman, diagrama ER, sesiones              | `docs/05-dwes/`                 |
| Despliegue                | Guía de instalación local XAMPP, publicación GitHub Pages, evidencias     | `docs/despliegue/`              |
| Requisitos normalizados   | Requisitos funcionales y no funcionales en formato normalizado            | `docs/requisitos-normalizados/` |
| Memoria final y figuras   | Partes por sección, figuras técnicas, capturas finales                    | `docs/documentacion-final/`     |

**Trazabilidad requisitos — pruebas — evidencias**

| Requisito / HU                    | Prueba asociada  | Evidencia                                                                        |
| --------------------------------- | ---------------- | -------------------------------------------------------------------------------- |
| HU-01, HU-02, HU-03               | PF-01 a PF-05    | `tests/funcionales/01` a `05`, capturas React login/logout                       |
| HU-04                             | PF-11            | `tests/funcionales/10-admin.md`, `react-panel-admin.png`                         |
| HU-05, HU-06, HU-07, HU-09        | PF-07, PF-09     | `tests/funcionales/06`, `08`, buscador resultados/vacío                          |
| HU-11, HU-12, HU-13               | PF-09            | `tests/funcionales/08-actividades.md`                                            |
| HU-21, HU-22, HU-23, HU-24, HU-25 | PF-07, PF-08     | `tests/react-sprint-3/07-carrito.md`, carrito capturas                           |
| HU-27, HU-28, HU-29               | PF-12, PF-13     | `postman1.png`, `postman2.png`, capturas API desde navegador                     |
| HU-30                             | Auditoría formal | `lighthouse-accesibilidad.png`, `wave-analisis.png`, `WCAG_Contrast_Checker.png` |

**Backend y API REST**

La API REST está implementada en PHP con PDO en `src/api/`, `src/controllers/`,
`src/models/` y `src/config/`. Expone endpoints JSON para usuarios, actividades,
rutas, productos, carrito, pedidos, reportes y sesión. El control de acceso se
implementa por rol en cada endpoint. La base de datos MySQL usa el esquema definido
en `db/schema.sql` con nueve entidades principales.

**Despliegue**

El proyecto se despliega en dos entornos complementarios: local con XAMPP (funcionalidad
completa con API y base de datos) y GitHub Pages (cliente React estático con fallback
demo). La guía de instalación local y las evidencias de despliegue están en
`docs/despliegue/`.

**Accesibilidad**

La auditoría formal de accesibilidad se realizó en el Sprint 2 sobre la landing con
Lighthouse (100), WAVE (0 errores) y WCAG Contrast Checker. En el Sprint 3 se
extendió el trabajo de accesibilidad al cliente React con foco visible por teclado
y soporte a `prefers-reduced-motion`. La auditoría completa de la SPA React queda
como mejora futura documentada.

**Multimedia**

El proyecto integra un vídeo demostrativo en la sección de tienda mediante el elemento
`<video controls>`. Los archivos de audio preparados para la página de contacto
(`img/audio/pacepal-contacto.mp3` y `.ogg`) existen en el repositorio pero la
integración final no está cerrada en la rama de entrega; queda documentada como
mejora futura.

**Fallback demo**

El cliente React publicado en GitHub Pages funciona sin API real gracias a un mecanismo
de fallback que sirve datos de ejemplo cuando las peticiones HTTP fallan o el servidor
no está disponible. Esto permite demostrar la interfaz y la navegación sin necesidad
de levantar el entorno local completo.
