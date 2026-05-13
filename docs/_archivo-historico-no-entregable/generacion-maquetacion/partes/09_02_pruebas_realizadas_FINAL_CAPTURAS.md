# 9.2. Pruebas realizadas

Este anexo recoge todas las pruebas funcionales del proyecto PacePal organizadas con
criterio de defendibilidad para la memoria final. Se incluyen pruebas de registro y
autenticación, buscador y carrito, actividades, perfil, administración, cookies,
despliegue local, API REST, Postman, Selenium, accesibilidad, responsive y multimedia.

Cada prueba indica si dispone de captura real, evidencia parcial o captura pendiente.
Los archivos `.md` de la carpeta `tests/` son trazabilidad técnica interna: describen
el flujo, los pasos y el resultado esperado, pero **no sustituyen a una captura visual**
en la memoria formal.

Las capturas de respuestas JSON visualizadas en el navegador son válidas como evidencia
de que el endpoint responde correctamente en local, pero **no deben presentarse como
capturas de Postman** ni etiquetarse como tal. Las capturas reales de Postman son
únicamente las que muestran la interfaz o el runner de Postman.

---

## 9.2.1. Criterio de validez de evidencias

Una prueba cuenta como documentada en la memoria final cuando reúne tres elementos:
descripción del flujo, resultado obtenido y captura visual que lo demuestre.

| Criterio          | Aplicación                                                                                     |
| ----------------- | ---------------------------------------------------------------------------------------------- |
| Captura existente | Imagen real disponible en el repositorio; la prueba es defendible tal cual.                    |
| Evidencia parcial | Existe una captura relacionada pero no demuestra el paso específico. Aceptable con aclaración. |
| Captura pendiente | No hay imagen. Se indica exactamente qué hay que capturar antes de cerrar la memoria.          |
| No incluir        | La funcionalidad no está implementada o la captura no puede hacerse con criterio honesto.      |

Reglas adicionales aplicadas en este documento:

- Los archivos `.md` de `tests/` son trazabilidad técnica, no evidencia visual.
- Las capturas de JSON desde el navegador son evidencia de API, no de Postman.
- Las capturas reales de Postman son solo `postman1.png` y `postman2.png`.
- El audio de contacto no está integrado en JSX; no se documenta como prueba funcional correcta.
- El sistema de reportes existe parcialmente; se marca según lo que la captura puede demostrar.

---

## 9.2.2. Tabla maestra de pruebas funcionales

| ID    | Prueba                                | Qué se comprueba                                                          | Resultado                  | Evidencia visual                                                                                                                                                                                                                                                                                                                                                      | Estado de evidencia |
| ----- | ------------------------------------- | ------------------------------------------------------------------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| PF-01 | Registro con datos inválidos          | Formulario bloqueado; mensajes de error en cada campo incorrecto          | Correcto                   | `docs/evidencias/dwec/sprint-1/registro-error.png`, `tarjeta-incorrecta.png`                                                                                                                                                                                                                                                                                          | Captura existente   |
| PF-02 | Registro con datos válidos            | Alta de cuenta; DNI validado; acceso posterior correcto                   | Correcto                   | `docs/evidencias/dwec/sprint-1/registro-correcto.png`, `dniEvidencia.png`, `docs/evidencias/dwec/sprint-3/Nuevos-usuarios.png`                                                                                                                                                                                                                                        | Captura existente   |
| PF-03 | Login incorrecto                      | Error controlado; sin revelar datos internos                              | Correcto                   | `docs/evidencias/dwec/sprint-1/login-error.png`                                                                                                                                                                                                                                                                                                                       | Captura existente   |
| PF-04 | Login correcto                        | Sesión iniciada; estado de usuario cambia en cabecera                     | Correcto                   | `docs/evidencias/dwec/sprint-1/login-correcto.png`, `docs/documentacion-final/capturas-finales/02-react/react-login.png`, `react-post-login.png`                                                                                                                                                                                                                      | Captura existente   |
| PF-05 | Logout y limpieza de sesión           | Estado invitado restaurado; sesión eliminada en servidor                  | Correcto                   | `docs/documentacion-final/capturas-finales/02-react/react-logout.png`                                                                                                                                                                                                                                                                                                 | Captura existente   |
| PF-06 | Validación condicional del formulario | Tarjeta de vista previa aparece y desaparece según estado del campo       | Correcto                   | `docs/evidencias/dwec/sprint-1/registro-validacionEnVivo.png`, `tarjeta-visible.png`, `tarjeta-correcta.png`, `docs/evidencias/dwec/sprint-3/Formulario_React.png`                                                                                                                                                                                                    | Captura existente   |
| PF-07 | Buscador dinámico con resultados      | Galería se actualiza sin recargar; resultados coincidentes visibles       | Correcto                   | `docs/documentacion-final/capturas-finales/02-react/react-buscador-resultados.png`, `docs/evidencias/dwec/sprint-3/productos-buscador.png`, `productos-filtrados.png`                                                                                                                                                                                                 | Captura existente   |
| PF-08 | Buscador dinámico sin resultados      | Estado vacío controlado; mensaje visible sin error                        | Correcto                   | `docs/documentacion-final/capturas-finales/02-react/react-buscador-sin-resultados.png`, `docs/evidencias/dwec/sprint-3/Buscador_sin_resultados.png`, `productos-no-encontrado.png`                                                                                                                                                                                    | Captura existente   |
| PF-09 | Carrito: añadir producto              | Confirmación visible; contador de carrito incrementa                      | Correcto                   | `docs/evidencias/dwec/sprint-3/Carrito_añadir_React.png`                                                                                                                                                                                                                                                                                                              | Captura existente   |
| PF-10 | Carrito: modificar cantidad           | Cantidad actualizada; subtotal y total recalculados                       | Correcto                   | `docs/documentacion-final/capturas-finales/02-react/react-carrito-con-producto.png`, `react-carrito-contador.png`                                                                                                                                                                                                                                                     | Evidencia parcial   |
| PF-11 | Carrito: eliminar producto            | Producto retirado; total actualizado; estado vacío si no quedan productos | Correcto (sin captura)     | CAPTURA PENDIENTE — Abrir la tienda en local, añadir un producto al carrito, entrar en el carrito y pulsar el botón de eliminar. Capturar el carrito vacío o con el producto eliminado. Guardar como: `docs/documentacion-final/capturas-finales/02-react/react-carrito-eliminado.png`                                                                                | Captura pendiente   |
| PF-12 | Carrito: finalizar pedido             | Pedido generado; carrito vaciado; confirmación visible                    | Correcto (sin captura)     | `docs/documentacion-final/capturas-finales/02-react/react-carrito-total.png` (muestra el total, no la confirmación del pedido) — CAPTURA PENDIENTE del paso de confirmación: guardar como `docs/documentacion-final/capturas-finales/02-react/react-pedido-confirmacion.png`                                                                                          | Evidencia parcial   |
| PF-13 | Crear actividad                       | Formulario válido; actividad visible en listado tras el alta              | Correcto (sin captura)     | CAPTURA PENDIENTE — Iniciar sesión, entrar en el detalle de una ruta, pulsar "Crear actividad", rellenar el formulario y guardar. Capturar la actividad visible en el listado. Guardar como: `docs/documentacion-final/capturas-finales/08-pruebas-pendientes/react-actividad-creada.png`                                                                             | Captura pendiente   |
| PF-14 | Unirse a actividad                    | Plazas reducidas; confirmación de inscripción visible                     | Correcto (sin captura)     | CAPTURA PENDIENTE — Iniciar sesión, entrar en una actividad con plazas disponibles y pulsar "Unirse". Capturar la confirmación visible en pantalla. Guardar como: `docs/documentacion-final/capturas-finales/08-pruebas-pendientes/react-actividad-unirse.png`                                                                                                        | Captura pendiente   |
| PF-15 | Abandonar actividad                   | Plazas liberadas; botón de estado actualizado                             | Correcto (sin captura)     | CAPTURA PENDIENTE — Estando inscrito en una actividad, pulsar "Abandonar". Capturar el estado del botón actualizado y el recuento de plazas. Guardar como: `docs/documentacion-final/capturas-finales/08-pruebas-pendientes/react-actividad-abandonar.png`                                                                                                            | Captura pendiente   |
| PF-16 | Perfil de usuario                     | Datos del usuario visibles; sin mezcla con otros usuarios                 | Correcto                   | `docs/documentacion-final/capturas-finales/02-react/react-perfil-usuario.png`, `docs/evidencias/dwec/sprint-3/Perfil-React.png`                                                                                                                                                                                                                                       | Captura existente   |
| PF-17 | Historial de pedidos                  | Pedidos del usuario listados en la pantalla de perfil                     | Correcto (parcial)         | `docs/documentacion-final/capturas-finales/02-react/react-perfil-usuario.png` (puede incluir historial si es visible en la misma pantalla; no hay captura específica del bloque de pedidos) — CAPTURA PENDIENTE si el historial está en sección separada. Guardar como: `docs/documentacion-final/capturas-finales/08-pruebas-pendientes/react-historial-pedidos.png` | Evidencia parcial   |
| PF-18 | Panel de administración con rol admin | Panel carga con datos; acceso solo con rol admin                          | Correcto                   | `docs/documentacion-final/capturas-finales/02-react/react-panel-admin.png`, `docs/evidencias/dwec/sprint-3/Perfil_usuario_admin.png`                                                                                                                                                                                                                                  | Captura existente   |
| PF-19 | Bloqueo acceso sin rol admin          | Intento sin permisos bloqueado; mensaje de error controlado               | Correcto (sin captura)     | CAPTURA PENDIENTE — Intentar acceder a `/admin` con un usuario sin rol admin (o sin sesión). Capturar el mensaje de acceso denegado o redirección. Guardar como: `docs/documentacion-final/capturas-finales/08-pruebas-pendientes/react-admin-bloqueado.png`                                                                                                          | Captura pendiente   |
| PF-20 | Gestión de productos desde admin      | CRUD de productos operativo desde el panel                                | Correcto (sin captura)     | `docs/documentacion-final/capturas-finales/02-react/react-panel-admin.png` (muestra el panel, no específicamente la gestión de productos en acción) — CAPTURA PENDIENTE de una acción concreta (editar o eliminar un producto). Guardar como: `docs/documentacion-final/capturas-finales/08-pruebas-pendientes/react-admin-productos.png`                             | Evidencia parcial   |
| PF-21 | Gestión de rutas desde admin          | Sección de rutas accesible y operativa en el panel                        | Correcto (sin captura)     | CAPTURA PENDIENTE — Acceder al panel admin y entrar en el bloque de rutas. Capturar el listado o una acción de edición. Guardar como: `docs/documentacion-final/capturas-finales/08-pruebas-pendientes/react-admin-rutas.png`                                                                                                                                         | Captura pendiente   |
| PF-22 | Gestión de actividades desde admin    | Sección de actividades accesible y operativa en el panel                  | Correcto (sin captura)     | CAPTURA PENDIENTE — Acceder al panel admin y entrar en el bloque de actividades. Capturar el listado. Guardar como: `docs/documentacion-final/capturas-finales/08-pruebas-pendientes/react-admin-actividades.png`                                                                                                                                                     | Captura pendiente   |
| PF-23 | Gestión de pedidos desde admin        | Pedidos listados con sus estados en el panel                              | Correcto (sin captura)     | CAPTURA PENDIENTE — Acceder al panel admin y entrar en el bloque de pedidos. Capturar el listado de pedidos con sus estados. Guardar como: `docs/documentacion-final/capturas-finales/08-pruebas-pendientes/react-admin-pedidos.png`                                                                                                                                  | Captura pendiente   |
| PF-24 | Sistema de reportes                   | Reporte creado; trazabilidad registrada en base de datos                  | Implementado parcial       | `docs/evidencias/dwec/sprint-3/Regresion_cookies_preferencias.png` (cubre regresión general, no el sistema de reportes específicamente) — CAPTURA PENDIENTE de un reporte creado o del listado de reportes en admin. Guardar como: `docs/documentacion-final/capturas-finales/08-pruebas-pendientes/react-sistema-reportes.png`                                       | Captura pendiente   |
| PF-25 | Cookies: aceptar todas                | Banner de cookies visible; preferencias guardadas al aceptar              | Correcto (parcial)         | `docs/evidencias/dwec/sprint-3/Regresion_cookies_preferencias.png` (muestra el estado de cookies tras interacción, no el banner inicial con acción de aceptar)                                                                                                                                                                                                        | Evidencia parcial   |
| PF-26 | Cookies: rechazar no necesarias       | Solo cookies esenciales activas; preferencia persistente                  | Correcto (parcial)         | `docs/evidencias/dwec/sprint-3/Regresion_cookies_preferencias.png` (misma captura de regresión; no muestra el flujo de rechazo aislado)                                                                                                                                                                                                                               | Evidencia parcial   |
| PF-27 | GitHub Pages con fallback demo        | Cliente React navega sin API real; login y carrito operativos con demo    | Correcto (parcial)         | `docs/evidencias/despliegue/sprint-3/08-github-pages-publicacion-https.png` (muestra el despliegue, no el fallback en acción) — CAPTURA PENDIENTE del cliente demo funcionando en GitHub Pages (ej. login con datos demo). Guardar como: `docs/documentacion-final/capturas-finales/08-pruebas-pendientes/github-pages-fallback-demo.png`                             | Evidencia parcial   |
| PF-28 | Despliegue local con XAMPP            | XAMPP activo con Apache y MySQL; aplicación accesible en localhost        | Correcto                   | `docs/evidencias/despliegue/sprint-3/01-xampp-dashboard-localhost.png`, `docs/documentacion-final/capturas-finales/01-despliegue/despliegue-app-localhost.png`, `docs/evidencias/despliegue/sprint-3/04-app-localhost-home.png`                                                                                                                                       | Captura existente   |
| PF-29 | phpMyAdmin con base de datos pacepal  | BD `pacepal` visible con tablas del esquema                               | Correcto                   | `docs/evidencias/despliegue/sprint-3/03-phpmyadmin-bd-pacepal.png`, `docs/documentacion-final/capturas-finales/01-despliegue/despliegue-phpmyadmin-bbdd-pacepal.png`                                                                                                                                                                                                  | Captura existente   |
| PF-30 | API healthcheck                       | Endpoint `/api/health` responde JSON `status:ok` en local                 | Correcto                   | `docs/documentacion-final/capturas-finales/06-postman/api-get-health.png` (captura desde navegador, no de Postman)                                                                                                                                                                                                                                                    | Captura existente   |
| PF-31 | API session                           | Endpoint `/api/session` devuelve datos del usuario autenticado            | Correcto                   | `docs/documentacion-final/capturas-finales/06-postman/api-get-session.png`, `docs/evidencias/despliegue/sprint-3/05-api-session-localhost-admin.png`, `05-api-session-localhost.png`                                                                                                                                                                                  | Captura existente   |
| PF-32 | API productos                         | Endpoint `/api/productos` devuelve listado JSON de productos              | Correcto                   | `docs/documentacion-final/capturas-finales/06-postman/api-get-productos-raw.png`, `docs/documentacion-final/capturas-finales/07-consola/api-get-productos.png`, `api-respuesta-get-productos.png`                                                                                                                                                                     | Captura existente   |
| PF-33 | API detalle de producto               | Endpoint `/api/productos/{id}` devuelve JSON del producto                 | Correcto                   | `docs/documentacion-final/capturas-finales/06-postman/api-get-producto-detalle.png`, `docs/documentacion-final/capturas-finales/02-react/react-detalle-producto.png`                                                                                                                                                                                                  | Captura existente   |
| PF-34 | Postman runner colección              | Colección ejecutada con resultados; evidencia real del runner             | Correcto                   | `docs/evidencias/dwes/postman1.png`, `docs/evidencias/dwes/postman2.png`                                                                                                                                                                                                                                                                                              | Captura existente   |
| PF-35 | Selenium: flujo de registro           | Script automatizado pasa el flujo completo de registro                    | Script existe; sin captura | CAPTURA PENDIENTE — Ejecutar `node tests/selenium/test-registro.js` con XAMPP activo. Capturar la consola con el resultado correcto (todos los pasos en verde). Guardar como: `docs/documentacion-final/capturas-finales/07-consola/selenium-registro-ok.png`                                                                                                         | Captura pendiente   |
| PF-36 | Selenium: buscador de productos       | Script automatizado verifica que el buscador devuelve resultados          | Script existe; sin captura | CAPTURA PENDIENTE — Ejecutar `node tests/selenium/test-buscador.js` con XAMPP activo. Capturar la consola con el resultado correcto. Guardar como: `docs/documentacion-final/capturas-finales/07-consola/selenium-buscador-ok.png`                                                                                                                                    | Captura pendiente   |
| PF-37 | Accesibilidad Lighthouse              | Puntuación 100 en la auditoría de accesibilidad de la landing             | Correcto                   | `docs/evidencias/diw/sprint-2/lighthouse-accesibilidad.png`                                                                                                                                                                                                                                                                                                           | Captura existente   |
| PF-38 | Accesibilidad WAVE                    | 0 errores en el análisis WAVE del alcance auditado                        | Correcto                   | `docs/evidencias/diw/sprint-2/wave-analisis.png`                                                                                                                                                                                                                                                                                                                      | Captura existente   |
| PF-39 | Contraste WCAG                        | Ratios de contraste correctos en los elementos auditados                  | Correcto                   | `docs/evidencias/diw/sprint-2/WCAG_Contrast_Checker.png`                                                                                                                                                                                                                                                                                                              | Captura existente   |
| PF-40 | Foco visible por teclado              | Navegación por teclado con foco diferenciado y visible                    | Correcto                   | `docs/documentacion-final/capturas-finales/05-accesibilidad/accesibilidad-foco-teclado.png`                                                                                                                                                                                                                                                                           | Captura existente   |
| PF-41 | Vídeo integrado en tienda             | Elemento `<video controls>` visible y funcional en la sección de tienda   | Correcto                   | `docs/documentacion-final/capturas-finales/04-multimedia/multimedia-video-tienda.png`                                                                                                                                                                                                                                                                                 | Captura existente   |
| PF-42 | Responsive desktop / tablet / mobile  | Layout correcto en tres breakpoints; sin desbordamiento ni rotura visual  | Correcto                   | `docs/documentacion-final/capturas-finales/03-responsive/responsive-desktop-landing.png`, `responsive-tablet-landing.png`, `responsive-mobile-landing.png`, `responsive-mobile-tienda.png`, `responsive-tablet-tienda.png`                                                                                                                                            | Captura existente   |

---

## 9.2.3. Capturas existentes verificadas

Todas las imágenes de este apartado son archivos reales presentes en el repositorio.
Su existencia ha sido verificada explorando los directorios de evidencias.

### A) Cliente React — autenticación y formularios

| Código | Archivo                                                                   | Qué demuestra                                               | Dónde insertar en LibreOffice   |
| ------ | ------------------------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------- |
| A01    | `docs/evidencias/dwec/sprint-1/registro-error.png`                        | Formulario de registro bloqueado con campos inválidos       | PF-01, sección de autenticación |
| A02    | `docs/evidencias/dwec/sprint-1/tarjeta-incorrecta.png`                    | Vista previa del formulario con datos incorrectos           | PF-01                           |
| A03    | `docs/evidencias/dwec/sprint-1/registro-correcto.png`                     | Registro completado correctamente                           | PF-02                           |
| A04    | `docs/evidencias/dwec/sprint-1/dniEvidencia.png`                          | Validación del campo DNI en el formulario de registro       | PF-02                           |
| A05    | `docs/evidencias/dwec/sprint-3/Nuevos-usuarios.png`                       | Nuevos usuarios registrados visibles en el sistema          | PF-02                           |
| A06    | `docs/evidencias/dwec/sprint-1/login-error.png`                           | Error controlado al introducir credenciales incorrectas     | PF-03                           |
| A07    | `docs/evidencias/dwec/sprint-1/login-correcto.png`                        | Login con credenciales válidas; sesión iniciada             | PF-04                           |
| A08    | `docs/documentacion-final/capturas-finales/02-react/react-login.png`      | Pantalla de login del cliente React                         | PF-04                           |
| A09    | `docs/documentacion-final/capturas-finales/02-react/react-post-login.png` | Estado de la interfaz tras login correcto                   | PF-04                           |
| A10    | `docs/documentacion-final/capturas-finales/02-react/react-logout.png`     | Logout completado; estado invitado restaurado               | PF-05                           |
| A11    | `docs/evidencias/dwec/sprint-1/registro-validacionEnVivo.png`             | Validación en vivo del formulario de registro               | PF-06                           |
| A12    | `docs/evidencias/dwec/sprint-1/tarjeta-visible.png`                       | Tarjeta de vista previa visible durante el llenado del form | PF-06                           |
| A13    | `docs/evidencias/dwec/sprint-1/tarjeta-correcta.png`                      | Tarjeta de vista previa con datos correctos                 | PF-06                           |
| A14    | `docs/evidencias/dwec/sprint-3/Formulario_React.png`                      | Formulario en el cliente React                              | PF-06                           |

### B) Cliente React — buscador, carrito y perfil

| Código | Archivo                                                                                | Qué demuestra                               | Dónde insertar en LibreOffice |
| ------ | -------------------------------------------------------------------------------------- | ------------------------------------------- | ----------------------------- |
| B01    | `docs/documentacion-final/capturas-finales/02-react/react-buscador-resultados.png`     | Buscador con resultados filtrados           | PF-07                         |
| B02    | `docs/evidencias/dwec/sprint-3/productos-buscador.png`                                 | Buscador activo en la tienda                | PF-07                         |
| B03    | `docs/evidencias/dwec/sprint-3/productos-filtrados.png`                                | Galería filtrada por término de búsqueda    | PF-07                         |
| B04    | `docs/documentacion-final/capturas-finales/02-react/react-buscador-sin-resultados.png` | Estado vacío del buscador                   | PF-08                         |
| B05    | `docs/evidencias/dwec/sprint-3/Buscador_sin_resultados.png`                            | Sin resultados con mensaje controlado       | PF-08                         |
| B06    | `docs/evidencias/dwec/sprint-3/productos-no-encontrado.png`                            | Mensaje "no encontrado" en buscador         | PF-08                         |
| B07    | `docs/evidencias/dwec/sprint-3/Carrito_añadir_React.png`                               | Confirmación de producto añadido al carrito | PF-09                         |
| B08    | `docs/documentacion-final/capturas-finales/02-react/react-carrito-con-producto.png`    | Carrito con un producto y cantidad          | PF-10                         |
| B09    | `docs/documentacion-final/capturas-finales/02-react/react-carrito-contador.png`        | Contador de carrito con número de unidades  | PF-10                         |
| B10    | `docs/documentacion-final/capturas-finales/02-react/react-carrito-total.png`           | Total calculado en el carrito               | PF-12 (parcial)               |
| B11    | `docs/documentacion-final/capturas-finales/02-react/react-perfil-usuario.png`          | Pantalla de perfil del usuario autenticado  | PF-16, PF-17                  |
| B12    | `docs/evidencias/dwec/sprint-3/Perfil-React.png`                                       | Perfil de usuario en el cliente React       | PF-16                         |
| B13    | `docs/evidencias/dwec/sprint-3/Productos-paginados2.png`                               | Listado de productos paginado               | Sección React                 |
| B14    | `docs/documentacion-final/capturas-finales/02-react/react-tienda-productos.png`        | Escaparate de productos cargado desde API   | Sección React / tienda        |
| B15    | `docs/documentacion-final/capturas-finales/02-react/react-detalle-producto.png`        | Detalle de producto con datos e imagen      | PF-33                         |
| B16    | `docs/documentacion-final/capturas-finales/02-react/react-landing-desktop.png`         | Landing page del cliente React              | Sección React                 |

### C) API desde navegador

> Estas capturas demuestran que los endpoints responden JSON en el entorno local.
> **No son capturas de Postman** y no deben etiquetarse como tales.

| Código | Archivo                                                                                | Qué demuestra                                           | Dónde insertar en LibreOffice |
| ------ | -------------------------------------------------------------------------------------- | ------------------------------------------------------- | ----------------------------- |
| C01    | `docs/documentacion-final/capturas-finales/06-postman/api-get-health.png`              | Respuesta JSON de `/api/health` desde navegador         | PF-30                         |
| C02    | `docs/documentacion-final/capturas-finales/06-postman/api-get-session.png`             | Respuesta JSON de `/api/session` desde navegador        | PF-31                         |
| C03    | `docs/documentacion-final/capturas-finales/06-postman/api-get-productos-raw.png`       | Respuesta JSON de `/api/productos` desde navegador      | PF-32                         |
| C04    | `docs/documentacion-final/capturas-finales/06-postman/api-get-producto-detalle.png`    | Respuesta JSON de `/api/productos/{id}` desde navegador | PF-33                         |
| C05    | `docs/documentacion-final/capturas-finales/07-consola/api-get-productos.png`           | Captura de consola con respuesta de productos           | PF-32 / sección API           |
| C06    | `docs/documentacion-final/capturas-finales/07-consola/api-respuesta-get-productos.png` | Respuesta JSON detallada de productos                   | PF-32 / sección API           |

### D) Postman real

> Estas son las únicas capturas que muestran el runner de Postman. Son las evidencias
> válidas para defender la colección de Postman en la memoria.

| Código | Archivo                             | Qué demuestra                                           | Dónde insertar en LibreOffice |
| ------ | ----------------------------------- | ------------------------------------------------------- | ----------------------------- |
| D01    | `docs/evidencias/dwes/postman1.png` | Primera evidencia del runner de la colección de PacePal | PF-34                         |
| D02    | `docs/evidencias/dwes/postman2.png` | Segunda evidencia del runner de la colección de PacePal | PF-34                         |

### E) Despliegue local

| Código | Archivo                                                                                          | Qué demuestra                                          | Dónde insertar en LibreOffice |
| ------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------ | ----------------------------- |
| E01    | `docs/evidencias/despliegue/sprint-3/01-xampp-dashboard-localhost.png`                           | XAMPP operativo con Apache y MySQL activos             | PF-28                         |
| E02    | `docs/evidencias/despliegue/sprint-3/02-phpmyadmin-home.png`                                     | phpMyAdmin accesible en el entorno local               | PF-29                         |
| E03    | `docs/evidencias/despliegue/sprint-3/03-phpmyadmin-bd-pacepal.png`                               | Base de datos `pacepal` con tablas del esquema         | PF-29                         |
| E04    | `docs/evidencias/despliegue/sprint-3/04-app-localhost-home.png`                                  | Aplicación PacePal accesible en localhost              | PF-28                         |
| E05    | `docs/evidencias/despliegue/sprint-3/05-api-session-localhost-admin.png`                         | Endpoint `/api/session` con sesión de administrador    | PF-31                         |
| E06    | `docs/evidencias/despliegue/sprint-3/05-api-session-localhost.png`                               | Endpoint `/api/session` con sesión de usuario estándar | PF-31                         |
| E07    | `docs/evidencias/despliegue/sprint-3/08-github-pages-publicacion-https.png`                      | Despliegue en GitHub Pages con HTTPS                   | PF-27                         |
| E08    | `docs/documentacion-final/capturas-finales/01-despliegue/despliegue-app-localhost.png`           | App PacePal en localhost (versión capturas finales)    | PF-28                         |
| E09    | `docs/documentacion-final/capturas-finales/01-despliegue/despliegue-phpmyadmin-bbdd-pacepal.png` | phpMyAdmin con BD pacepal (versión capturas finales)   | PF-29                         |
| E10    | `docs/documentacion-final/capturas-finales/01-despliegue/despliegue-phpmyadmin.png`              | phpMyAdmin home (versión capturas finales)             | PF-29                         |

### F) Accesibilidad

| Código | Archivo                                                                                     | Qué demuestra                                 | Dónde insertar en LibreOffice |
| ------ | ------------------------------------------------------------------------------------------- | --------------------------------------------- | ----------------------------- |
| F01    | `docs/evidencias/diw/sprint-2/lighthouse-accesibilidad.png`                                 | Lighthouse 100 en accesibilidad de la landing | PF-37                         |
| F02    | `docs/evidencias/diw/sprint-2/wave-analisis.png`                                            | WAVE con 0 errores en el alcance auditado     | PF-38                         |
| F03    | `docs/evidencias/diw/sprint-2/WCAG_Contrast_Checker.png`                                    | Ratios de contraste WCAG correctos            | PF-39                         |
| F04    | `docs/documentacion-final/capturas-finales/05-accesibilidad/accesibilidad-foco-teclado.png` | Foco visible en navegación por teclado        | PF-40                         |
| F05    | `docs/documentacion-final/capturas-finales/05-accesibilidad/accesibilidad-boton-voz.png`    | Botón de accesibilidad por voz en la interfaz | Sección accesibilidad         |

### G) Responsive

| Código | Archivo                                                                                  | Qué demuestra                            | Dónde insertar en LibreOffice |
| ------ | ---------------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------- |
| G01    | `docs/documentacion-final/capturas-finales/03-responsive/responsive-desktop-landing.png` | Landing en escritorio sin desbordamiento | PF-42                         |
| G02    | `docs/documentacion-final/capturas-finales/03-responsive/responsive-tablet-landing.png`  | Landing en tablet                        | PF-42                         |
| G03    | `docs/documentacion-final/capturas-finales/03-responsive/responsive-mobile-landing.png`  | Landing en móvil                         | PF-42                         |
| G04    | `docs/documentacion-final/capturas-finales/03-responsive/responsive-mobile-tienda.png`   | Tienda en móvil                          | PF-42                         |
| G05    | `docs/documentacion-final/capturas-finales/03-responsive/responsive-tablet-tienda.png`   | Tienda en tablet                         | PF-42                         |

### H) Multimedia

| Código | Archivo                                                                                 | Qué demuestra                                                                                                                              | Dónde insertar en LibreOffice |
| ------ | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------- |
| H01    | `docs/documentacion-final/capturas-finales/04-multimedia/multimedia-video-tienda.png`   | Elemento `<video controls>` visible y funcional en la sección de tienda                                                                    | PF-41                         |
| H02    | `docs/documentacion-final/capturas-finales/04-multimedia/multimedia-audio-contacto.png` | Archivo de audio existente en el repositorio — **el reproductor no está integrado en JSX; no usar como evidencia de funcionalidad activa** | Solo contexto documental      |

### I) Consola y panel admin

| Código | Archivo                                                                                   | Qué demuestra                                          | Dónde insertar en LibreOffice |
| ------ | ----------------------------------------------------------------------------------------- | ------------------------------------------------------ | ----------------------------- |
| I01    | `docs/documentacion-final/capturas-finales/07-consola/consola-app-inicio-sin-errores.png` | Consola limpia al iniciar la aplicación React          | Sección build y despliegue    |
| I02    | `docs/documentacion-final/capturas-finales/07-consola/consola-app-tienda-cargada.png`     | Consola sin errores con la tienda cargada y API activa | Sección React / API           |
| I03    | `docs/documentacion-final/capturas-finales/02-react/react-panel-admin.png`                | Panel de administración con acceso restringido a admin | PF-18                         |
| I04    | `docs/evidencias/dwec/sprint-3/Perfil_usuario_admin.png`                                  | Perfil de usuario con rol administrador                | PF-18                         |
| I05    | `docs/evidencias/dwec/sprint-3/Regresion_cookies_preferencias.png`                        | Estado de preferencias de cookies tras interacción     | PF-25, PF-26                  |

---

## 9.2.4. Capturas pendientes que hay que generar

Las capturas siguientes no existen en el repositorio. Sin ellas, las pruebas
correspondientes tienen evidencia incompleta o inexistente en la memoria final.
Se listan por orden de urgencia.

| ID    | Prueba                             | Captura que falta                                                   | Ruta exacta recomendada                                                                          | Cómo hacer la captura                                                                                                                                         |
| ----- | ---------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PF-11 | Carrito: eliminar producto         | Producto retirado del carrito; estado vacío si procede              | `docs/documentacion-final/capturas-finales/02-react/react-carrito-eliminado.png`                 | Añadir un producto al carrito, entrar en el carrito y pulsar el botón de eliminar. Capturar el carrito con el producto eliminado o el estado vacío.           |
| PF-12 | Carrito: finalizar pedido          | Confirmación de pedido generado tras pulsar "Finalizar"             | `docs/documentacion-final/capturas-finales/02-react/react-pedido-confirmacion.png`               | Completar el carrito con al menos un producto, pulsar "Finalizar pedido" y capturar el mensaje o pantalla de confirmación del pedido.                         |
| PF-13 | Crear actividad                    | Actividad creada visible en el listado                              | `docs/documentacion-final/capturas-finales/08-pruebas-pendientes/react-actividad-creada.png`     | Iniciar sesión, entrar en el detalle de una ruta, pulsar "Crear actividad", rellenar el formulario y guardar. Capturar la actividad en el listado.            |
| PF-14 | Unirse a actividad                 | Confirmación de inscripción visible; plazas actualizadas            | `docs/documentacion-final/capturas-finales/08-pruebas-pendientes/react-actividad-unirse.png`     | Iniciar sesión, entrar en una actividad con plazas disponibles, pulsar "Unirse" y capturar la confirmación en pantalla.                                       |
| PF-15 | Abandonar actividad                | Botón de estado actualizado; plazas liberadas visibles              | `docs/documentacion-final/capturas-finales/08-pruebas-pendientes/react-actividad-abandonar.png`  | Estando inscrito en una actividad, pulsar "Abandonar" y capturar el estado del botón actualizado y el recuento de plazas.                                     |
| PF-19 | Bloqueo acceso sin rol admin       | Mensaje de acceso denegado o redirección al intentar entrar sin rol | `docs/documentacion-final/capturas-finales/08-pruebas-pendientes/react-admin-bloqueado.png`      | Con sesión de usuario sin rol admin (o sin sesión), intentar navegar a la ruta del panel de administración. Capturar el mensaje de error o la redirección.    |
| PF-21 | Gestión de rutas desde admin       | Listado de rutas en el panel de administración                      | `docs/documentacion-final/capturas-finales/08-pruebas-pendientes/react-admin-rutas.png`          | Acceder al panel admin con cuenta de administrador y entrar en el bloque de rutas. Capturar el listado.                                                       |
| PF-22 | Gestión de actividades desde admin | Listado de actividades en el panel de administración                | `docs/documentacion-final/capturas-finales/08-pruebas-pendientes/react-admin-actividades.png`    | Acceder al panel admin y entrar en el bloque de actividades. Capturar el listado.                                                                             |
| PF-23 | Gestión de pedidos desde admin     | Pedidos con sus estados listados en el panel                        | `docs/documentacion-final/capturas-finales/08-pruebas-pendientes/react-admin-pedidos.png`        | Acceder al panel admin y entrar en el bloque de pedidos. Capturar el listado de pedidos con sus estados.                                                      |
| PF-24 | Sistema de reportes                | Reporte creado o listado de reportes en admin                       | `docs/documentacion-final/capturas-finales/08-pruebas-pendientes/react-sistema-reportes.png`     | Iniciar sesión, entrar en el perfil de otro usuario y reportarlo, o acceder al panel admin y capturar el listado de reportes pendientes.                      |
| PF-27 | GitHub Pages con fallback demo     | Cliente React demo funcionando en GitHub Pages sin API real         | `docs/documentacion-final/capturas-finales/08-pruebas-pendientes/github-pages-fallback-demo.png` | Abrir la URL de GitHub Pages en el navegador sin XAMPP activo. Hacer login con datos demo o navegar por la tienda. Capturar que la interfaz funciona sin API. |
| PF-35 | Selenium: flujo de registro        | Consola con resultado correcto del script de registro               | `docs/documentacion-final/capturas-finales/07-consola/selenium-registro-ok.png`                  | Ejecutar `node tests/selenium/test-registro.js` con XAMPP activo. Capturar la consola con el resultado correcto (todos los pasos confirmados).                |
| PF-36 | Selenium: buscador de productos    | Consola con resultado correcto del script de buscador               | `docs/documentacion-final/capturas-finales/07-consola/selenium-buscador-ok.png`                  | Ejecutar `node tests/selenium/test-buscador.js` con XAMPP activo. Capturar la consola con el resultado correcto.                                              |

> Crear la subcarpeta `08-pruebas-pendientes/` dentro de
> `docs/documentacion-final/capturas-finales/` antes de guardar las capturas.

---

## 9.2.5. Pruebas de API y Postman

### API desde navegador

Las capturas siguientes muestran las respuestas JSON de los endpoints de PacePal
accedidas directamente desde el navegador. Demuestran que los endpoints responden
correctamente en el entorno local con XAMPP activo. **No son capturas de Postman**
y no deben etiquetarse como tal en la memoria.

| Captura                                                       | Endpoint verificado              | Lo que demuestra                                              |
| ------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------- |
| `capturas-finales/06-postman/api-get-health.png`              | `/api/health`                    | El servidor API está operativo en local                       |
| `capturas-finales/06-postman/api-get-session.png`             | `/api/session`                   | La sesión activa devuelve los datos del usuario               |
| `capturas-finales/06-postman/api-get-productos-raw.png`       | `/api/productos`                 | El catálogo de productos se sirve correctamente en JSON       |
| `capturas-finales/06-postman/api-get-producto-detalle.png`    | `/api/productos/{id}`            | El detalle de un producto concreto responde correctamente     |
| `capturas-finales/07-consola/api-get-productos.png`           | `/api/productos` (vista consola) | Respuesta de productos también desde la consola del navegador |
| `capturas-finales/07-consola/api-respuesta-get-productos.png` | `/api/productos` (detalle JSON)  | JSON de productos con estructura completa visible             |

También existe la captura `docs/evidencias/despliegue/sprint-3/05-api-session-localhost-admin.png`,
que muestra el endpoint `/api/session` con una sesión de administrador activa en local.

### Postman real

Las únicas evidencias reales del runner de Postman son:

- `docs/evidencias/dwes/postman1.png`
- `docs/evidencias/dwes/postman2.png`

La colección Postman existe en `tests/postman/pacepal.postman_collection.json` y el entorno
local en `tests/postman/pacepal-local.postman_environment.json`.

Para reforzar la defensa, conviene capturar el runner ejecutando al menos estos flujos
y guardar las capturas en `docs/documentacion-final/capturas-finales/06-postman/`:

| Flujo a capturar     | Nombre de archivo sugerido                |
| -------------------- | ----------------------------------------- |
| Login correcto       | `postman-runner-login-correcto.png`       |
| Login incorrecto     | `postman-runner-login-incorrecto.png`     |
| GET productos        | `postman-runner-get-productos.png`        |
| GET detalle producto | `postman-runner-get-producto-detalle.png` |
| POST crear pedido    | `postman-runner-crear-pedido.png`         |
| GET session activa   | `postman-runner-session.png`              |
| POST logout          | `postman-runner-logout.png`               |

---

## 9.2.6. Pruebas automatizadas con Selenium

Existen dos scripts de prueba automatizada en `tests/selenium/`:

| Script                            | Flujo automatizado                                           | Estado        | Captura asociada                                                                                                                                                                                                                 |
| --------------------------------- | ------------------------------------------------------------ | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tests/selenium/test-registro.js` | Flujo completo de registro de usuario                        | Script existe | CAPTURA PENDIENTE — Ejecutar `node tests/selenium/test-registro.js` con XAMPP activo y capturar la consola con resultado correcto. Guardar como: `docs/documentacion-final/capturas-finales/07-consola/selenium-registro-ok.png` |
| `tests/selenium/test-buscador.js` | Buscador de productos con texto y verificación de resultados | Script existe | CAPTURA PENDIENTE — Ejecutar `node tests/selenium/test-buscador.js` con XAMPP activo y capturar la consola con resultado correcto. Guardar como: `docs/documentacion-final/capturas-finales/07-consola/selenium-buscador-ok.png` |

Los scripts existen y son evidencia de que las pruebas automatizadas están planificadas
e implementadas. Sin la captura de su ejecución correcta, la prueba queda documentada
como "script existente" pero no como "prueba pasada con evidencia visual".

---

## 9.2.7. Bloque listo para insertar en LibreOffice

Esta sección es la versión limpia del apartado 9.2 para montar en LibreOffice.
Incluye las pruebas principales con sus capturas o marcadores de captura pendiente.
Los marcadores en formato `[INSERTAR FIGURA Pxx AQUÍ EN LIBREOFFICE]` indican dónde
debe ir cada imagen en el documento final.

---

### Registro e inicio de sesión

El formulario de registro valida en tiempo real cada campo. Si algún dato no cumple
los criterios (formato de email, longitud de contraseña, DNI válido), el botón de
envío permanece bloqueado y aparece el mensaje de error correspondiente bajo el campo.

> **[INSERTAR FIGURA P1 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/evidencias/dwec/sprint-1/registro-error.png`
> _Figura P1. Formulario de registro con campos inválidos y mensajes de error visibles._

El registro con datos correctos crea la cuenta y permite el acceso inmediato. El campo
de DNI dispone de validación específica que verifica el formato antes de permitir el alta.

> **[INSERTAR FIGURA P2 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/evidencias/dwec/sprint-1/registro-correcto.png`
> _Figura P2. Registro completado correctamente._

El login con credenciales incorrectas muestra un mensaje de error controlado sin revelar
información técnica interna. Con credenciales correctas, la sesión se inicia y la
interfaz refleja el estado autenticado.

> **[INSERTAR FIGURA P3 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/02-react/react-post-login.png`
> _Figura P3. Estado de la interfaz React tras login correcto._

> **[INSERTAR FIGURA P4 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/02-react/react-logout.png`
> _Figura P4. Logout completado. La sesión queda limpia y el estado invitado se restaura._

---

### Buscador dinámico de productos

El buscador de la tienda filtra los productos sin recargar la página. Los resultados
se actualizan en tiempo real según el término introducido. Si no hay coincidencias,
se muestra un mensaje claro sin errores de consola.

> **[INSERTAR FIGURA P5 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/02-react/react-buscador-resultados.png`
> _Figura P5. Buscador dinámico con resultados filtrados._

> **[INSERTAR FIGURA P6 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/02-react/react-buscador-sin-resultados.png`
> _Figura P6. Estado vacío del buscador con mensaje controlado._

---

### Carrito y pedidos

Al pulsar "Añadir al carrito", aparece la confirmación visual y el contador de la
cabecera se incrementa. El carrito permite ajustar cantidades y muestra el total
actualizado en tiempo real.

> **[INSERTAR FIGURA P7 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/evidencias/dwec/sprint-3/Carrito_añadir_React.png`
> _Figura P7. Confirmación de producto añadido al carrito._

> **[INSERTAR FIGURA P8 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/02-react/react-carrito-con-producto.png`
> _Figura P8. Carrito React con producto, cantidad y total._

> **[INSERTAR FIGURA P9 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/02-react/react-pedido-confirmacion.png`
> _Figura P9. Confirmación de pedido generado._
> **CAPTURA PENDIENTE** — Completar el carrito y finalizar el pedido. Capturar la confirmación visible. Guardar como: `docs/documentacion-final/capturas-finales/02-react/react-pedido-confirmacion.png`

---

### Perfil y panel de administración

La pantalla de perfil muestra los datos del usuario autenticado y su historial de pedidos.
El acceso al panel de administración está restringido por rol: un usuario sin permisos
de administrador no puede entrar.

> **[INSERTAR FIGURA P10 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/02-react/react-perfil-usuario.png`
> _Figura P10. Pantalla de perfil del usuario autenticado con historial de pedidos._

> **[INSERTAR FIGURA P11 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/02-react/react-panel-admin.png`
> _Figura P11. Panel de administración con acceso restringido al rol admin._

> **[INSERTAR FIGURA P12 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/08-pruebas-pendientes/react-admin-bloqueado.png`
> _Figura P12. Intento de acceso al panel admin sin permisos: mensaje de error o redirección._
> **CAPTURA PENDIENTE** — Intentar acceder a la ruta del panel sin sesión admin. Guardar como la ruta indicada.

---

### Actividades

El sistema permite crear actividades sobre rutas existentes, unirse a actividades
con plazas disponibles y abandonarlas. Las plazas se actualizan en tiempo real.

> **[INSERTAR FIGURA P13 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/08-pruebas-pendientes/react-actividad-creada.png`
> _Figura P13. Actividad creada por el usuario visible en el listado._
> **CAPTURA PENDIENTE** — Crear una actividad sobre una ruta y capturar el listado con la nueva actividad.

> **[INSERTAR FIGURA P14 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/08-pruebas-pendientes/react-actividad-unirse.png`
> _Figura P14. Confirmación de inscripción a una actividad con plazas disponibles._
> **CAPTURA PENDIENTE** — Unirse a una actividad y capturar la confirmación visible.

---

### Cookies

El banner de cookies se muestra al primer acceso. El usuario puede aceptar todas las
cookies o rechazar las no necesarias. La preferencia queda guardada y no vuelve a
aparecer el banner en visitas posteriores.

> **[INSERTAR FIGURA P15 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/evidencias/dwec/sprint-3/Regresion_cookies_preferencias.png`
> _Figura P15. Estado de preferencias de cookies tras la interacción del usuario._

---

### Despliegue local y API

XAMPP está configurado con Apache y MySQL activos. La aplicación es accesible en
`http://localhost/pacepal` y la base de datos `pacepal` está operativa en phpMyAdmin.

> **[INSERTAR FIGURA P16 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/evidencias/despliegue/sprint-3/01-xampp-dashboard-localhost.png`
> _Figura P16. Panel de XAMPP con Apache y MySQL activos._

> **[INSERTAR FIGURA P17 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/evidencias/despliegue/sprint-3/03-phpmyadmin-bd-pacepal.png`
> _Figura P17. phpMyAdmin con la base de datos pacepal y sus tablas._

> **[INSERTAR FIGURA P18 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/06-postman/api-get-health.png`
> _Figura P18. Respuesta JSON del healthcheck de la API en local (visualizado desde el navegador)._

> **[INSERTAR FIGURA P19 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/evidencias/despliegue/sprint-3/05-api-session-localhost-admin.png`
> _Figura P19. Respuesta JSON del endpoint /api/session con sesión de administrador activa._

---

### Postman

> **[INSERTAR FIGURA P20 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/evidencias/dwes/postman1.png`
> _Figura P20. Runner de Postman con la colección de PacePal ejecutada._

> **[INSERTAR FIGURA P21 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/evidencias/dwes/postman2.png`
> _Figura P21. Segunda evidencia del runner de Postman._

---

### Accesibilidad

La auditoría formal de accesibilidad sobre la landing obtuvo puntuación 100 en
Lighthouse, 0 errores en WAVE y ratios de contraste correctos en el verificador WCAG.

> **[INSERTAR FIGURA P22 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/evidencias/diw/sprint-2/lighthouse-accesibilidad.png`
> _Figura P22. Lighthouse 100 en accesibilidad de la landing. Sprint 2 DIW._

> **[INSERTAR FIGURA P23 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/evidencias/diw/sprint-2/wave-analisis.png`
> _Figura P23. Análisis WAVE: 0 errores en el alcance auditado._

> **[INSERTAR FIGURA P24 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/evidencias/diw/sprint-2/WCAG_Contrast_Checker.png`
> _Figura P24. Verificación de contraste WCAG._

> **[INSERTAR FIGURA P25 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/05-accesibilidad/accesibilidad-foco-teclado.png`
> _Figura P25. Foco visible en navegación por teclado en la interfaz de PacePal._

---

### Responsive

La interfaz de PacePal se adapta correctamente a escritorio, tablet y móvil sin
desbordamientos ni pérdida de funcionalidad.

> **[INSERTAR FIGURA P26 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/03-responsive/responsive-desktop-landing.png`
> _Figura P26. Landing de PacePal en escritorio._

> **[INSERTAR FIGURA P27 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/03-responsive/responsive-tablet-landing.png`
> _Figura P27. Landing de PacePal en tablet._

> **[INSERTAR FIGURA P28 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/03-responsive/responsive-mobile-landing.png`
> _Figura P28. Landing de PacePal en móvil._

---

### Multimedia

La sección de tienda integra un elemento `<video controls>` con el vídeo demostrativo
del producto. El archivo de audio para la página de contacto existe en el repositorio
pero no está integrado en el JSX de la rama de entrega.

> **[INSERTAR FIGURA P29 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/04-multimedia/multimedia-video-tienda.png`
> _Figura P29. Elemento de vídeo visible y funcional en la sección de tienda._

---

### Selenium

Los scripts de prueba automatizada existen en `tests/selenium/`. Las capturas de su
ejecución están pendientes de generar.

> **[INSERTAR FIGURA P30 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/07-consola/selenium-registro-ok.png`
> _Figura P30. Consola con resultado correcto del script Selenium de registro._
> **CAPTURA PENDIENTE** — Ejecutar `node tests/selenium/test-registro.js` y capturar la consola.

> **[INSERTAR FIGURA P31 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/07-consola/selenium-buscador-ok.png`
> _Figura P31. Consola con resultado correcto del script Selenium del buscador._
> **CAPTURA PENDIENTE** — Ejecutar `node tests/selenium/test-buscador.js` y capturar la consola.

---

> **Nota de montaje en LibreOffice:** Las figuras P9, P12, P13, P14, P30 y P31 son
> capturas pendientes. Pueden sustituirse por una nota explicativa o dejarse como
> marcadores hasta generarlas. No eliminar los marcadores antes de cerrar el documento
> final; sirven de recordatorio durante el montaje.
