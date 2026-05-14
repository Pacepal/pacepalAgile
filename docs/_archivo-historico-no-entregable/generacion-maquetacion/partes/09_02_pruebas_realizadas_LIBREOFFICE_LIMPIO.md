# 9.2. Pruebas realizadas

Este apartado recoge las pruebas funcionales del proyecto PacePal organizadas con
criterio de defendibilidad para la memoria final. Se cubren los siguientes bloques:
registro y autenticación, buscador y carrito, actividades, perfil, administración,
cookies, despliegue local y GitHub Pages, API REST, Postman, Selenium, accesibilidad,
responsive y multimedia.

Las pruebas se documentan solo cuando existe una captura visual o una evidencia
trazable que las respalde. Cuando la captura no existe, se indica de forma explícita
como **Pendiente** con instrucciones para generarla.

Los archivos `.md` de la carpeta `tests/` son documentación de trazabilidad técnica
interna: describen el flujo, los pasos y los resultados esperados. Son valiosos como
referencia, pero no sustituyen a una captura visual en la memoria formal.

---

## 9.2.1. Criterio de validación de evidencias

| Estado de evidencia          | Significado                                                                                     |
| ---------------------------- | ----------------------------------------------------------------------------------------------- |
| Captura existente            | Imagen real verificada en el repositorio. La prueba es defendible tal cual.                     |
| Evidencia parcial            | Existe una captura relacionada que no cubre el paso específico. Aceptable con nota aclaratoria. |
| Pendiente de captura         | No hay imagen. Requiere captura antes de cerrar la memoria.                                     |
| Script existente sin captura | El script de prueba automatizada existe pero no hay evidencia de su ejecución correcta.         |
| No incluir                   | La funcionalidad no está implementada o no se puede demostrar con criterio honesto.             |

Reglas aplicadas en todo el documento:

- Los archivos `.md` de `tests/` son trazabilidad técnica, no evidencia visual final.
- Las capturas de respuestas JSON desde el navegador demuestran que el endpoint responde; **no son capturas de Postman**.
- Las capturas reales de Postman son únicamente `postman1.png` y `postman2.png`.
- El audio de la página de contacto no está integrado en el JSX de la rama de entrega; no se documenta como funcionalidad activa.
- El sistema de reportes está parcialmente implementado; no se cierra como funcionalidad completa.
- Ninguna prueba se marca como "Correcto" si no hay captura que lo respalde.

---

## 9.2.2. Tabla maestra de pruebas revisadas

| ID    | Prueba                                | Qué se comprueba                                                          | Estado de evidencia          | Evidencia principal                                                                                                       |
| ----- | ------------------------------------- | ------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| PF-01 | Registro con datos inválidos          | Formulario bloqueado; mensajes de error en cada campo incorrecto          | Captura existente            | `docs/evidencias/dwec/sprint-1/registro-error.png`                                                                        |
| PF-02 | Registro con datos válidos            | Alta de cuenta; DNI validado; acceso posterior correcto                   | Captura existente            | `docs/evidencias/dwec/sprint-1/registro-correcto.png`, `dniEvidencia.png`, `sprint-3/Nuevos-usuarios.png`                 |
| PF-03 | Login incorrecto                      | Error controlado; sin revelar datos internos                              | Captura existente            | `docs/evidencias/dwec/sprint-1/login-error.png`                                                                           |
| PF-04 | Login correcto                        | Sesión iniciada; estado de usuario cambia en cabecera                     | Captura existente            | `sprint-1/login-correcto.png`, `capturas-finales/02-react/react-login.png`, `react-post-login.png`                        |
| PF-05 | Logout y limpieza de sesión           | Estado invitado restaurado; sesión eliminada en servidor                  | Captura existente            | `capturas-finales/02-react/react-logout.png`                                                                              |
| PF-06 | Validación condicional del formulario | Tarjeta de vista previa aparece y desaparece según estado del campo       | Captura existente            | `sprint-1/registro-validacionEnVivo.png`, `tarjeta-visible.png`, `sprint-3/Formulario_React.png`                          |
| PF-07 | Buscador dinámico con resultados      | Galería se actualiza sin recargar; resultados coincidentes visibles       | Captura existente            | `capturas-finales/02-react/react-buscador-resultados.png`, `sprint-3/productos-buscador.png`                              |
| PF-08 | Buscador dinámico sin resultados      | Estado vacío controlado; mensaje visible sin error de consola             | Captura existente            | `capturas-finales/02-react/react-buscador-sin-resultados.png`, `sprint-3/Buscador_sin_resultados.png`                     |
| PF-09 | Carrito: añadir producto              | Confirmación visible; contador de carrito incrementa                      | Captura existente            | `docs/evidencias/dwec/sprint-3/Carrito_añadir_React.png`                                                                  |
| PF-10 | Carrito: modificar cantidad           | Cantidad actualizada; subtotal y total recalculados                       | Evidencia parcial            | `capturas-finales/02-react/react-carrito-con-producto.png`, `react-carrito-contador.png` (no muestra el cambio en acción) |
| PF-11 | Carrito: eliminar producto            | Producto retirado; total actualizado; estado vacío si no quedan productos | Pendiente de captura         | Sin captura. Ver sección 9.2.4.                                                                                           |
| PF-12 | Carrito: finalizar pedido             | Pedido generado; carrito vaciado; confirmación visible                    | Evidencia parcial            | `react-carrito-total.png` (muestra el total, no la pantalla de confirmación del pedido)                                   |
| PF-13 | Crear actividad                       | Formulario válido; actividad visible en listado tras el alta              | Pendiente de captura         | Sin captura. Ver sección 9.2.4.                                                                                           |
| PF-14 | Unirse a actividad                    | Plazas reducidas; confirmación de inscripción visible                     | Pendiente de captura         | Sin captura. Ver sección 9.2.4.                                                                                           |
| PF-15 | Abandonar actividad                   | Plazas liberadas; botón de estado actualizado                             | Pendiente de captura         | Sin captura. Ver sección 9.2.4.                                                                                           |
| PF-16 | Perfil de usuario                     | Datos del usuario visibles; sin mezcla con otros usuarios                 | Captura existente            | `capturas-finales/02-react/react-perfil-usuario.png`, `sprint-3/Perfil-React.png`                                         |
| PF-17 | Historial de pedidos                  | Pedidos del usuario listados en la pantalla de perfil                     | Evidencia parcial            | `react-perfil-usuario.png` (no hay captura específica del bloque de pedidos). Ver sección 9.2.4.                          |
| PF-18 | Panel de administración con rol admin | Panel carga con datos; acceso solo con rol admin                          | Captura existente            | `capturas-finales/02-react/react-panel-admin.png`, `sprint-3/Perfil_usuario_admin.png`                                    |
| PF-19 | Bloqueo acceso al panel sin rol admin | Intento sin permisos bloqueado; mensaje de error controlado               | Pendiente de captura         | Sin captura. Ver sección 9.2.4.                                                                                           |
| PF-20 | Gestión de productos desde admin      | CRUD de productos operativo desde el panel                                | Evidencia parcial            | `react-panel-admin.png` (muestra el panel, no la acción concreta de gestión de productos)                                 |
| PF-21 | Gestión de rutas desde admin          | Sección de rutas accesible y operativa en el panel                        | Pendiente de captura         | Sin captura. Ver sección 9.2.4.                                                                                           |
| PF-22 | Gestión de actividades desde admin    | Sección de actividades accesible y operativa en el panel                  | Pendiente de captura         | Sin captura. Ver sección 9.2.4.                                                                                           |
| PF-23 | Gestión de pedidos desde admin        | Pedidos listados con sus estados en el panel                              | Pendiente de captura         | Sin captura. Ver sección 9.2.4.                                                                                           |
| PF-24 | Sistema de reportes                   | Reporte creado; trazabilidad registrada                                   | Evidencia parcial            | `Regresion_cookies_preferencias.png` (regresión general; no cubre el flujo de reportes). Ver sección 9.2.4.               |
| PF-25 | Cookies: aceptar todas                | Banner visible; preferencias guardadas al aceptar                         | Evidencia parcial            | `sprint-3/Regresion_cookies_preferencias.png` (estado tras interacción; no muestra el banner inicial)                     |
| PF-26 | Cookies: rechazar no necesarias       | Solo cookies esenciales activas; preferencia persistente                  | Evidencia parcial            | Misma captura de regresión; no muestra el flujo de rechazo de forma aislada                                               |
| PF-27 | GitHub Pages con fallback demo        | Cliente React navega sin API real; interfaz funcional                     | Evidencia parcial            | `sprint-3/08-github-pages-publicacion-https.png` (muestra el despliegue, no el fallback en acción). Ver sección 9.2.4.    |
| PF-28 | Despliegue local con XAMPP            | XAMPP activo con Apache y MySQL; app accesible en localhost               | Captura existente            | `sprint-3/01-xampp-dashboard-localhost.png`, `capturas-finales/01-despliegue/despliegue-app-localhost.png`                |
| PF-29 | phpMyAdmin con base de datos pacepal  | BD `pacepal` visible con tablas del esquema                               | Captura existente            | `sprint-3/03-phpmyadmin-bd-pacepal.png`, `capturas-finales/01-despliegue/despliegue-phpmyadmin-bbdd-pacepal.png`          |
| PF-30 | API healthcheck                       | Endpoint `/api/health` responde JSON `status:ok` en local                 | Captura existente            | `capturas-finales/06-postman/api-get-health.png` (captura desde navegador)                                                |
| PF-31 | API session                           | Endpoint `/api/session` devuelve datos del usuario autenticado            | Captura existente            | `06-postman/api-get-session.png`, `sprint-3/05-api-session-localhost-admin.png`                                           |
| PF-32 | API productos                         | Endpoint `/api/productos` devuelve listado JSON                           | Captura existente            | `06-postman/api-get-productos-raw.png`, `07-consola/api-get-productos.png`                                                |
| PF-33 | API detalle de producto               | Endpoint `/api/productos/{id}` devuelve JSON del producto                 | Captura existente            | `06-postman/api-get-producto-detalle.png`, `02-react/react-detalle-producto.png`                                          |
| PF-34 | Postman runner colección              | Colección ejecutada con resultados reales del runner                      | Captura existente            | `docs/evidencias/dwes/postman1.png`, `postman2.png`                                                                       |
| PF-35 | Selenium: flujo de registro           | Script automatizado pasa el flujo completo de registro                    | Script existente sin captura | Script: `tests/selenium/test-registro.js`. Sin captura de ejecución. Ver sección 9.2.4.                                   |
| PF-36 | Selenium: buscador de productos       | Script automatizado verifica que el buscador devuelve resultados          | Script existente sin captura | Script: `tests/selenium/test-buscador.js`. Sin captura de ejecución. Ver sección 9.2.4.                                   |
| PF-37 | Accesibilidad Lighthouse              | Puntuación 100 en la auditoría de accesibilidad de la landing             | Captura existente            | `docs/evidencias/diw/sprint-2/lighthouse-accesibilidad.png`                                                               |
| PF-38 | Accesibilidad WAVE                    | 0 errores en el análisis WAVE del alcance auditado                        | Captura existente            | `docs/evidencias/diw/sprint-2/wave-analisis.png`                                                                          |
| PF-39 | Contraste WCAG                        | Ratios de contraste correctos en los elementos auditados                  | Captura existente            | `docs/evidencias/diw/sprint-2/WCAG_Contrast_Checker.png`                                                                  |
| PF-40 | Foco visible por teclado              | Navegación por teclado con foco diferenciado y visible                    | Captura existente            | `capturas-finales/05-accesibilidad/accesibilidad-foco-teclado.png`                                                        |
| PF-41 | Vídeo integrado en tienda             | Elemento `<video controls>` visible y funcional en la tienda              | Captura existente            | `capturas-finales/04-multimedia/multimedia-video-tienda.png`                                                              |
| PF-42 | Responsive desktop / tablet / mobile  | Layout correcto en tres breakpoints; sin desbordamiento visual            | Captura existente            | `03-responsive/responsive-desktop-landing.png`, `responsive-tablet-landing.png`, `responsive-mobile-landing.png`          |

---

## 9.2.3. Evidencias visuales existentes agrupadas

Las imágenes de este apartado son archivos reales verificados en el repositorio.
Las rutas completas siguen el patrón `docs/evidencias/…` o `docs/documentacion-final/capturas-finales/…`.

### A) Registro, login y sesión

| Archivo                                                       | Qué demuestra                                      | Prueba |
| ------------------------------------------------------------- | -------------------------------------------------- | ------ |
| `docs/evidencias/dwec/sprint-1/registro-error.png`            | Formulario bloqueado con campos inválidos          | PF-01  |
| `docs/evidencias/dwec/sprint-1/tarjeta-incorrecta.png`        | Vista previa con datos incorrectos                 | PF-01  |
| `docs/evidencias/dwec/sprint-1/registro-correcto.png`         | Registro completado correctamente                  | PF-02  |
| `docs/evidencias/dwec/sprint-1/dniEvidencia.png`              | Validación del campo DNI                           | PF-02  |
| `docs/evidencias/dwec/sprint-3/Nuevos-usuarios.png`           | Nuevos usuarios registrados visibles en el sistema | PF-02  |
| `docs/evidencias/dwec/sprint-1/login-error.png`               | Error controlado con credenciales incorrectas      | PF-03  |
| `docs/evidencias/dwec/sprint-1/login-correcto.png`            | Login con credenciales válidas                     | PF-04  |
| `capturas-finales/02-react/react-login.png`                   | Pantalla de login del cliente React                | PF-04  |
| `capturas-finales/02-react/react-post-login.png`              | Interfaz tras login correcto en React              | PF-04  |
| `capturas-finales/02-react/react-logout.png`                  | Estado invitado tras logout                        | PF-05  |
| `docs/evidencias/dwec/sprint-1/registro-validacionEnVivo.png` | Validación en tiempo real del formulario           | PF-06  |
| `docs/evidencias/dwec/sprint-1/tarjeta-visible.png`           | Tarjeta de vista previa activa durante el relleno  | PF-06  |
| `docs/evidencias/dwec/sprint-1/tarjeta-correcta.png`          | Vista previa con datos válidos                     | PF-06  |
| `docs/evidencias/dwec/sprint-3/Formulario_React.png`          | Formulario de registro en el cliente React         | PF-06  |

### B) Tienda, buscador y carrito

| Archivo                                                       | Qué demuestra                                           | Prueba |
| ------------------------------------------------------------- | ------------------------------------------------------- | ------ |
| `capturas-finales/02-react/react-tienda-productos.png`        | Escaparate de productos cargado desde la API            | —      |
| `capturas-finales/02-react/react-buscador-resultados.png`     | Buscador con resultados filtrados                       | PF-07  |
| `docs/evidencias/dwec/sprint-3/productos-buscador.png`        | Buscador activo en la tienda                            | PF-07  |
| `docs/evidencias/dwec/sprint-3/productos-filtrados.png`       | Galería filtrada por término de búsqueda                | PF-07  |
| `capturas-finales/02-react/react-buscador-sin-resultados.png` | Estado vacío del buscador                               | PF-08  |
| `docs/evidencias/dwec/sprint-3/Buscador_sin_resultados.png`   | Mensaje "sin resultados" controlado                     | PF-08  |
| `docs/evidencias/dwec/sprint-3/productos-no-encontrado.png`   | Mensaje "no encontrado" en buscador                     | PF-08  |
| `docs/evidencias/dwec/sprint-3/Carrito_añadir_React.png`      | Confirmación de producto añadido al carrito             | PF-09  |
| `capturas-finales/02-react/react-carrito-con-producto.png`    | Carrito con producto y cantidad                         | PF-10  |
| `capturas-finales/02-react/react-carrito-contador.png`        | Contador de carrito con número de unidades              | PF-10  |
| `capturas-finales/02-react/react-carrito-total.png`           | Total calculado en el carrito (evidencia parcial PF-12) | PF-12  |
| `docs/evidencias/dwec/sprint-3/Productos-paginados2.png`      | Listado de productos paginado                           | —      |
| `capturas-finales/02-react/react-detalle-producto.png`        | Detalle de producto con datos e imagen                  | PF-33  |

### C) Actividades, perfil y administración

| Archivo                                                            | Qué demuestra                                          | Prueba |
| ------------------------------------------------------------------ | ------------------------------------------------------ | ------ |
| `capturas-finales/02-react/react-perfil-usuario.png`               | Pantalla de perfil del usuario autenticado             | PF-16  |
| `docs/evidencias/dwec/sprint-3/Perfil-React.png`                   | Perfil de usuario en React                             | PF-16  |
| `capturas-finales/02-react/react-panel-admin.png`                  | Panel de administración cargado con rol admin          | PF-18  |
| `docs/evidencias/dwec/sprint-3/Perfil_usuario_admin.png`           | Perfil con rol administrador visible                   | PF-18  |
| `docs/evidencias/dwec/sprint-3/Regresion_cookies_preferencias.png` | Estado de cookies tras interacción (regresión general) | PF-25  |

### D) API desde navegador

> Estas capturas demuestran que los endpoints responden JSON en entorno local con XAMPP.
> **No son capturas de Postman** y no deben etiquetarse como tal.

| Archivo                                                       | Endpoint verificado        | Prueba |
| ------------------------------------------------------------- | -------------------------- | ------ |
| `capturas-finales/06-postman/api-get-health.png`              | `/api/health`              | PF-30  |
| `capturas-finales/06-postman/api-get-session.png`             | `/api/session`             | PF-31  |
| `capturas-finales/06-postman/api-get-productos-raw.png`       | `/api/productos`           | PF-32  |
| `capturas-finales/06-postman/api-get-producto-detalle.png`    | `/api/productos/{id}`      | PF-33  |
| `capturas-finales/07-consola/api-get-productos.png`           | `/api/productos` (consola) | PF-32  |
| `capturas-finales/07-consola/api-respuesta-get-productos.png` | `/api/productos` (detalle) | PF-32  |

### E) Postman real

> Estas son las **únicas dos capturas que muestran el runner de Postman**. Solo estas
> pueden presentarse como evidencia de ejecución de la colección Postman.

| Archivo                             | Qué demuestra                                           | Prueba |
| ----------------------------------- | ------------------------------------------------------- | ------ |
| `docs/evidencias/dwes/postman1.png` | Runner de Postman con la colección de PacePal ejecutada | PF-34  |
| `docs/evidencias/dwes/postman2.png` | Segunda evidencia del runner de la colección de PacePal | PF-34  |

### F) Despliegue local y base de datos

| Archivo                                                                 | Qué demuestra                                      | Prueba |
| ----------------------------------------------------------------------- | -------------------------------------------------- | ------ |
| `evidencias/despliegue/sprint-3/01-xampp-dashboard-localhost.png`       | XAMPP con Apache y MySQL activos                   | PF-28  |
| `evidencias/despliegue/sprint-3/02-phpmyadmin-home.png`                 | phpMyAdmin accesible en local                      | PF-29  |
| `evidencias/despliegue/sprint-3/03-phpmyadmin-bd-pacepal.png`           | BD pacepal con tablas del esquema                  | PF-29  |
| `evidencias/despliegue/sprint-3/04-app-localhost-home.png`              | Aplicación PacePal en localhost                    | PF-28  |
| `evidencias/despliegue/sprint-3/05-api-session-localhost-admin.png`     | Endpoint `/api/session` con sesión de admin activa | PF-31  |
| `evidencias/despliegue/sprint-3/05-api-session-localhost.png`           | Endpoint `/api/session` con usuario estándar       | PF-31  |
| `evidencias/despliegue/sprint-3/08-github-pages-publicacion-https.png`  | Despliegue en GitHub Pages con HTTPS               | PF-27  |
| `capturas-finales/01-despliegue/despliegue-app-localhost.png`           | App en localhost (capturas finales)                | PF-28  |
| `capturas-finales/01-despliegue/despliegue-phpmyadmin-bbdd-pacepal.png` | phpMyAdmin con BD pacepal (capturas finales)       | PF-29  |

### G) Accesibilidad

| Archivo                                                            | Qué demuestra                                 | Prueba |
| ------------------------------------------------------------------ | --------------------------------------------- | ------ |
| `docs/evidencias/diw/sprint-2/lighthouse-accesibilidad.png`        | Lighthouse 100 en accesibilidad de la landing | PF-37  |
| `docs/evidencias/diw/sprint-2/wave-analisis.png`                   | WAVE con 0 errores en el alcance auditado     | PF-38  |
| `docs/evidencias/diw/sprint-2/WCAG_Contrast_Checker.png`           | Ratios de contraste WCAG correctos            | PF-39  |
| `capturas-finales/05-accesibilidad/accesibilidad-foco-teclado.png` | Foco visible en navegación por teclado        | PF-40  |
| `capturas-finales/05-accesibilidad/accesibilidad-boton-voz.png`    | Botón de accesibilidad por voz en la interfaz | —      |

### H) Responsive

| Archivo                                                         | Qué demuestra         | Prueba |
| --------------------------------------------------------------- | --------------------- | ------ |
| `capturas-finales/03-responsive/responsive-desktop-landing.png` | Landing en escritorio | PF-42  |
| `capturas-finales/03-responsive/responsive-tablet-landing.png`  | Landing en tablet     | PF-42  |
| `capturas-finales/03-responsive/responsive-mobile-landing.png`  | Landing en móvil      | PF-42  |
| `capturas-finales/03-responsive/responsive-tablet-tienda.png`   | Tienda en tablet      | PF-42  |
| `capturas-finales/03-responsive/responsive-mobile-tienda.png`   | Tienda en móvil       | PF-42  |

### I) Multimedia

| Archivo                                                        | Qué demuestra                                                                                                                                        | Prueba |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| `capturas-finales/04-multimedia/multimedia-video-tienda.png`   | Elemento `<video controls>` visible y funcional en la sección de tienda                                                                              | PF-41  |
| `capturas-finales/04-multimedia/multimedia-audio-contacto.png` | Archivo de audio existente en el repositorio. **El reproductor `<audio>` no está integrado en JSX. No usar como evidencia de funcionalidad activa.** | —      |

### J) Consola y Selenium

| Archivo                                                          | Qué demuestra                                          | Prueba |
| ---------------------------------------------------------------- | ------------------------------------------------------ | ------ |
| `capturas-finales/07-consola/consola-app-inicio-sin-errores.png` | Consola limpia al iniciar la aplicación React          | —      |
| `capturas-finales/07-consola/consola-app-tienda-cargada.png`     | Consola sin errores con la tienda cargada y API activa | —      |
| `tests/selenium/test-registro.js` _(script, no captura)_         | Script de prueba automatizada del flujo de registro    | PF-35  |
| `tests/selenium/test-buscador.js` _(script, no captura)_         | Script de prueba automatizada del buscador             | PF-36  |

---

## 9.2.4. Capturas pendientes antes de cerrar la memoria

Las capturas siguientes no existen en el repositorio. Se ordenan por prioridad.
Crear la subcarpeta `docs/documentacion-final/capturas-finales/08-pruebas-pendientes/`
antes de guardar las que van allí.

| Prioridad | ID    | Qué falta                                    | Ruta exacta recomendada                                                 | Cómo hacer la captura                                                                                                                                    |
| --------- | ----- | -------------------------------------------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Alta      | PF-12 | Confirmación de pedido generado              | `capturas-finales/02-react/react-pedido-confirmacion.png`               | Completar el carrito con al menos un producto y pulsar "Finalizar pedido". Capturar la pantalla o mensaje de confirmación del pedido.                    |
| Alta      | PF-19 | Bloqueo al panel admin sin rol               | `capturas-finales/08-pruebas-pendientes/react-admin-bloqueado.png`      | Con sesión de usuario sin rol admin (o sin sesión), intentar navegar a la ruta del panel admin. Capturar el mensaje de acceso denegado o la redirección. |
| Alta      | PF-35 | Consola con resultado de Selenium (registro) | `capturas-finales/07-consola/selenium-registro-ok.png`                  | Ejecutar `node tests/selenium/test-registro.js` con XAMPP activo. Capturar la consola con el resultado correcto (todos los pasos confirmados).           |
| Alta      | PF-36 | Consola con resultado de Selenium (buscador) | `capturas-finales/07-consola/selenium-buscador-ok.png`                  | Ejecutar `node tests/selenium/test-buscador.js` con XAMPP activo. Capturar la consola con el resultado correcto.                                         |
| Media     | PF-11 | Carrito: eliminar producto                   | `capturas-finales/02-react/react-carrito-eliminado.png`                 | Añadir un producto al carrito, entrar en el carrito y pulsar el botón de eliminar. Capturar el carrito vacío o con el producto retirado.                 |
| Media     | PF-13 | Actividad creada visible en el listado       | `capturas-finales/08-pruebas-pendientes/react-actividad-creada.png`     | Iniciar sesión, entrar en el detalle de una ruta, pulsar "Crear actividad", rellenar el formulario y guardar. Capturar la actividad en el listado.       |
| Media     | PF-14 | Confirmación de inscripción a actividad      | `capturas-finales/08-pruebas-pendientes/react-actividad-unirse.png`     | Iniciar sesión, entrar en una actividad con plazas disponibles y pulsar "Unirse". Capturar la confirmación visible en pantalla.                          |
| Media     | PF-21 | Listado de rutas en panel admin              | `capturas-finales/08-pruebas-pendientes/react-admin-rutas.png`          | Acceder al panel admin con cuenta de administrador y entrar en el bloque de rutas. Capturar el listado.                                                  |
| Media     | PF-22 | Listado de actividades en panel admin        | `capturas-finales/08-pruebas-pendientes/react-admin-actividades.png`    | Acceder al panel admin y entrar en el bloque de actividades. Capturar el listado.                                                                        |
| Media     | PF-23 | Pedidos con estados en panel admin           | `capturas-finales/08-pruebas-pendientes/react-admin-pedidos.png`        | Acceder al panel admin y entrar en el bloque de pedidos. Capturar el listado de pedidos con sus estados.                                                 |
| Media     | PF-27 | Fallback demo funcionando en GitHub Pages    | `capturas-finales/08-pruebas-pendientes/github-pages-fallback-demo.png` | Abrir la URL de GitHub Pages sin XAMPP activo. Hacer login con datos demo o navegar por la tienda. Capturar que la interfaz carga sin API real.          |
| Baja      | PF-15 | Abandonar actividad; plazas liberadas        | `capturas-finales/08-pruebas-pendientes/react-actividad-abandonar.png`  | Estando inscrito en una actividad, pulsar "Abandonar". Capturar el botón actualizado y el recuento de plazas.                                            |
| Baja      | PF-24 | Reporte creado o listado en admin            | `capturas-finales/08-pruebas-pendientes/react-sistema-reportes.png`     | Iniciar sesión, reportar a otro usuario, o acceder al panel admin y capturar el listado de reportes pendientes.                                          |

---

## 9.2.5. Bloque limpio para insertar en LibreOffice

Este bloque contiene las pruebas más representativas en formato listo para montar en
LibreOffice. No repite todas las pruebas de la tabla maestra. Los marcadores
`[INSERTAR FIGURA Pxx AQUÍ EN LIBREOFFICE]` indican dónde va cada imagen. Los números
de figura corresponden exactamente a los de la tabla maestra de pruebas (PF-01…PF-42).
Las figuras marcadas como **CAPTURA PENDIENTE** deben generarse antes de exportar a PDF.

---

### Registro e inicio de sesión

El formulario de registro valida cada campo en tiempo real. Si algún dato no cumple los
criterios (email, contraseña, DNI), el botón de envío queda bloqueado y se muestra el
mensaje de error correspondiente bajo cada campo.

> **[INSERTAR FIGURA P1 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/evidencias/dwec/sprint-1/registro-error.png`
> _Figura P1. Formulario de registro con campos inválidos y mensajes de error visibles. (PF-01)_

> **[INSERTAR FIGURA P2 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/evidencias/dwec/sprint-1/registro-correcto.png`
> _Figura P2. Registro completado correctamente con DNI validado. (PF-02)_

El login con credenciales incorrectas muestra un mensaje de error sin revelar datos
técnicos internos. Con credenciales válidas, la sesión se inicia y la interfaz refleja
el estado autenticado en la cabecera.

> **[INSERTAR FIGURA P3 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/evidencias/dwec/sprint-1/login-error.png`
> _Figura P3. Error controlado al introducir credenciales incorrectas. (PF-03)_

> **[INSERTAR FIGURA P4 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/02-react/react-post-login.png`
> _Figura P4. Estado de la interfaz React tras login correcto. (PF-04)_

> **[INSERTAR FIGURA P5 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/02-react/react-logout.png`
> _Figura P5. Logout completado. El estado invitado se restaura correctamente. (PF-05)_

> **[INSERTAR FIGURA P6 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/evidencias/dwec/sprint-1/registro-validacionEnVivo.png`
> _Figura P6. Validación en tiempo real del formulario; tarjeta de vista previa activa. (PF-06)_

---

### Buscador dinámico de productos

El buscador filtra los productos sin recargar la página. Si no hay coincidencias, se
muestra un mensaje claro sin errores de consola.

> **[INSERTAR FIGURA P7 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/02-react/react-buscador-resultados.png`
> _Figura P7. Buscador dinámico con resultados filtrados. (PF-07)_

> **[INSERTAR FIGURA P8 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/02-react/react-buscador-sin-resultados.png`
> _Figura P8. Estado vacío del buscador con mensaje controlado. (PF-08)_

---

### Carrito y pedidos

Al pulsar "Añadir al carrito", el sistema muestra la confirmación visual y el contador
de la cabecera se incrementa. El carrito permite ajustar cantidades y recalcula el total
en tiempo real.

> **[INSERTAR FIGURA P9 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/evidencias/dwec/sprint-3/Carrito_añadir_React.png`
> _Figura P9. Confirmación de producto añadido al carrito. (PF-09)_

> **[INSERTAR FIGURA P10 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/02-react/react-carrito-con-producto.png`
> _Figura P10. Carrito React con producto, cantidad y total calculado. (PF-10)_

> **[INSERTAR FIGURA P12 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/02-react/react-pedido-confirmacion.png`
> _Figura P12. Confirmación visible tras finalizar el pedido. (PF-12)_
> **CAPTURA PENDIENTE** — Completar el carrito y pulsar "Finalizar pedido". Capturar la pantalla de confirmación. Guardar como: `capturas-finales/02-react/react-pedido-confirmacion.png`

---

### Actividades

El sistema permite crear actividades sobre rutas existentes, unirse a ellas y
abandonarlas. Las plazas se actualizan en tiempo real.

> **[INSERTAR FIGURA P13 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/08-pruebas-pendientes/react-actividad-creada.png`
> _Figura P13. Actividad creada por el usuario visible en el listado. (PF-13)_
> **CAPTURA PENDIENTE** — Crear una actividad sobre una ruta y capturar el listado con la nueva actividad.

> **[INSERTAR FIGURA P14 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/08-pruebas-pendientes/react-actividad-unirse.png`
> _Figura P14. Confirmación de inscripción a una actividad con plazas disponibles. (PF-14)_
> **CAPTURA PENDIENTE** — Pulsar "Unirse" en una actividad y capturar la confirmación visible.

---

### Perfil y panel de administración

El perfil muestra los datos del usuario autenticado. El acceso al panel de administración
está restringido por rol; un usuario sin permisos no puede entrar.

> **[INSERTAR FIGURA P16 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/02-react/react-perfil-usuario.png`
> _Figura P16. Perfil del usuario autenticado. (PF-16, PF-17)_

> **[INSERTAR FIGURA P17 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/02-react/react-panel-admin.png`
> _Figura P17. Panel de administración cargado con rol admin. (PF-18, PF-20)_

> **[INSERTAR FIGURA P18 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/08-pruebas-pendientes/react-admin-bloqueado.png`
> _Figura P18. Acceso al panel admin sin permisos: mensaje de error o redirección. (PF-19)_
> **CAPTURA PENDIENTE** — Intentar acceder a la ruta del panel sin sesión admin. Guardar como la ruta indicada.

---

### Cookies

El banner de cookies se muestra al primer acceso. La preferencia del usuario se guarda
y persiste en visitas posteriores.

> **[INSERTAR FIGURA P23 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/evidencias/dwec/sprint-3/Regresion_cookies_preferencias.png`
> _Figura P23. Estado de preferencias de cookies tras la interacción del usuario. (PF-25, PF-26)_

---

### Despliegue local y GitHub Pages

XAMPP está configurado con Apache y MySQL activos. La aplicación es accesible en
`http://localhost/pacepalAgile/` y la base de datos `pacepal` está importada y
operativa en phpMyAdmin. El cliente React se publicó adicionalmente en GitHub Pages
con HTTPS.

> **[INSERTAR FIGURA P24 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/evidencias/despliegue/sprint-3/08-github-pages-publicacion-https.png`
> _Figura P24. Cliente React publicado en GitHub Pages con HTTPS. (PF-27 — evidencia parcial: muestra la publicación activa, no el fallback demo en funcionamiento.)_

> **[INSERTAR FIGURA P25 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/evidencias/despliegue/sprint-3/01-xampp-dashboard-localhost.png`
> _Figura P25. XAMPP activo con Apache y MySQL; aplicación PacePal accesible en localhost. (PF-28)_

> **[INSERTAR FIGURA P26 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/evidencias/despliegue/sprint-3/03-phpmyadmin-bd-pacepal.png`
> _Figura P26. Base de datos pacepal con tablas del esquema importadas en phpMyAdmin. (PF-29)_

---

### API desde navegador

Las capturas siguientes demuestran que los endpoints responden correctamente en local.
Son evidencia válida de la API, pero **no deben etiquetarse como capturas de Postman**.

> **[INSERTAR FIGURA P27 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/06-postman/api-get-health.png`
> _Figura P27. Respuesta JSON del endpoint /api/health en local (visualizado desde el navegador). (PF-30)_

> **[INSERTAR FIGURA P28 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/evidencias/despliegue/sprint-3/05-api-session-localhost-admin.png`
> _Figura P28. Endpoint /api/session con sesión de administrador activa. (PF-31)_

> **[INSERTAR FIGURA P29 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/06-postman/api-get-productos-raw.png`
> _Figura P29. Endpoint /api/productos devolviendo listado JSON. (PF-32)_

> **[INSERTAR FIGURA P30 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/06-postman/api-get-producto-detalle.png`
> _Figura P30. Endpoint /api/productos/{id} con detalle de producto. (PF-33)_

---

### Postman real

> **[INSERTAR FIGURA P31 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/evidencias/dwes/postman1.png`
> _Figura P31. Runner de Postman con la colección de PacePal ejecutada. (PF-34)_

> **[INSERTAR FIGURA P32 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/evidencias/dwes/postman2.png`
> _Figura P32. Segunda evidencia del runner de la colección Postman. (PF-34)_

---

### Selenium

Los scripts de prueba automatizada existen y son evidencia de que las pruebas están
implementadas. Sin captura de su ejecución, la prueba queda documentada como "script
disponible" pero no como "prueba ejecutada y pasada".

> **[INSERTAR FIGURA P33 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/07-consola/selenium-registro-ok.png`
> _Figura P33. Consola con resultado correcto del script Selenium de registro. (PF-35)_
> **CAPTURA PENDIENTE** — Ejecutar `node tests/selenium/test-registro.js` con XAMPP activo y capturar la consola con el resultado correcto.

> **[INSERTAR FIGURA P34 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/07-consola/selenium-buscador-ok.png`
> _Figura P34. Consola con resultado correcto del script Selenium del buscador. (PF-36)_
> **CAPTURA PENDIENTE** — Ejecutar `node tests/selenium/test-buscador.js` con XAMPP activo y capturar la consola con el resultado correcto.

---

### Accesibilidad

La auditoría formal de accesibilidad sobre la landing obtuvo puntuación 100 en Lighthouse,
0 errores en WAVE y ratios de contraste correctos en el verificador WCAG.

> **[INSERTAR FIGURA P35 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/evidencias/diw/sprint-2/lighthouse-accesibilidad.png`
> _Figura P35. Lighthouse 100 en accesibilidad de la landing. Sprint 2 DIW. (PF-37)_

> **[INSERTAR FIGURA P36 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/evidencias/diw/sprint-2/wave-analisis.png`
> _Figura P36. Análisis WAVE: 0 errores en el alcance auditado. (PF-38)_

> **[INSERTAR FIGURA P37 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/evidencias/diw/sprint-2/WCAG_Contrast_Checker.png`
> _Figura P37. Verificación de contraste WCAG en los elementos principales. (PF-39)_

> **[INSERTAR FIGURA P38 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/05-accesibilidad/accesibilidad-foco-teclado.png`
> _Figura P38. Foco visible en navegación por teclado. (PF-40)_

---

### Multimedia

La sección de tienda integra un elemento `<video controls>` con el vídeo demostrativo
del producto. El archivo de audio para la página de contacto existe en el repositorio
pero no está integrado en el JSX de la rama de entrega; no se incluye como evidencia
de funcionalidad activa.

> **[INSERTAR FIGURA P39 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/04-multimedia/multimedia-video-tienda.png`
> _Figura P39. Elemento de vídeo visible y funcional en la sección de tienda. (PF-41)_

---

### Responsive

La interfaz se adapta sin desbordamientos a escritorio, tablet y móvil.

> **[INSERTAR FIGURA P40 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/03-responsive/responsive-desktop-landing.png`
> _Figura P40. Landing de PacePal en escritorio. (PF-42)_

> **[INSERTAR FIGURA P41 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/03-responsive/responsive-tablet-landing.png`
> _Figura P41. Landing de PacePal en tablet. (PF-42)_

> **[INSERTAR FIGURA P42 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/capturas-finales/03-responsive/responsive-mobile-landing.png`
> _Figura P42. Landing de PacePal en móvil. (PF-42)_

---

> **Nota de montaje:** Las figuras P12, P13, P14, P18, P33 y P34 son capturas pendientes.
> No eliminar sus marcadores antes de cerrar el documento; sirven de recordatorio durante
> el montaje. Insertarlas en cuanto se generen o sustituir el marcador por una nota
> aclaratoria antes de exportar a PDF.

---

## Resumen

| Métrica                        | Valor |
| ------------------------------ | ----- |
| Total de pruebas revisadas     | 42    |
| Pruebas con captura existente  | 24    |
| Pruebas con evidencia parcial  | 7     |
| Pruebas con captura pendiente  | 9     |
| Scripts existentes sin captura | 2     |

> **Advertencia final:** Las capturas en `capturas-finales/06-postman/` muestran
> respuestas JSON accedidas desde el navegador. Son evidencia válida de que los
> endpoints funcionan, pero **no son capturas de Postman**. Las únicas evidencias
> reales del runner de Postman son `docs/evidencias/dwes/postman1.png` y `postman2.png`.
> No confundir ambos tipos en el documento final ni durante la defensa.
