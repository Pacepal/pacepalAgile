# Anexo 9.2 — Pruebas realizadas

Este anexo detalla las pruebas realizadas sobre PacePal a lo largo del proyecto, agrupadas
por tipo. Cada prueba incluye qué se probó, cómo se probó, el resultado obtenido y la
evidencia asociada.

---

## Pruebas manuales funcionales

| ID    | Qué se probó                        | Cómo se probó                                                  | Resultado esperado                                                | Resultado                | Evidencia                                                                | Estado |
| ----- | ----------------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------ | ------ |
| PF-01 | Registro con datos inválidos        | Prueba funcional manual en formulario de registro              | Bloqueo de envío y mensajes de error coherentes                   | Correcto                 | `tests/funcionales/01-registro-incorrecto.md`                            | ✅     |
| PF-02 | Registro con datos válidos          | Prueba funcional manual en formulario de registro              | Alta de cuenta y acceso posterior                                 | Correcto                 | `tests/funcionales/02-registro-correcto.md`                              | ✅     |
| PF-03 | Login incorrecto                    | Introducir credenciales incorrectas                            | Mensaje de error sin revelar datos internos                       | Correcto                 | `tests/funcionales/03-login-incorrecto.md`                               | ✅     |
| PF-04 | Login correcto                      | Introducir credenciales válidas                                | Acceso correcto y cambio de estado de sesión                      | Correcto                 | `tests/funcionales/04-login-correcto.md`                                 | ✅     |
| PF-05 | Logout y limpieza de sesión         | Iniciar sesión y cerrarla                                      | Estado invitado restaurado; sesión limpia en servidor             | Correcto                 | `tests/react-sprint-3/README.md`                                         | ✅     |
| PF-06 | Validación condicional del registro | Rellenar y borrar campo de dirección                           | La tarjeta de preview aparece y desaparece según estado del campo | Correcto                 | `tests/funcionales/05-tarjeta-aparece-desaparece.md`                     | ✅     |
| PF-07 | Buscador dinámico de productos      | Buscar texto, vaciar, paginar, probar sin resultados           | Galería se actualiza sin recargar; estado vacío controlado        | Correcto                 | `tests/funcionales/06-buscador-productos.md`                             | ✅     |
| PF-08 | Carrito React                       | Añadir, modificar cantidad, eliminar y finalizar pedido        | Contador, subtotal y total recalculados; pedido generado          | Correcto                 | `tests/react-sprint-3/07-carrito.md`                                     | ✅     |
| PF-09 | Gestión de actividades              | Crear actividad, unirse o abandonar sobre listado real         | Estado actualizado; plazas coherentes; API responde               | Correcto                 | `tests/funcionales/08-actividades.md`                                    | ✅     |
| PF-10 | Perfil de usuario                   | Abrir perfil como usuario autenticado                          | Datos del usuario y pedidos asociados visibles                    | Correcto                 | `tests/funcionales/09-perfil.md`                                         | ✅     |
| PF-11 | Panel de administración             | Acceder con cuenta admin y revisar bloques                     | Carga de usuarios, productos, rutas, actividades y pedidos        | Correcto                 | `tests/funcionales/10-admin.md`                                          | ✅     |
| PF-12 | API REST con Postman                | Runner de colección sobre entorno local                        | Respuestas `status:ok` y códigos HTTP correctos                   | Parcialmente documentado | `docs/evidencias/dwes/postman1.png`, `postman2.png`                      | ⚠️     |
| PF-13 | Sesión y conexión local API-BD      | Consultar `/api/session` y `/api/health` desde navegador       | Respuesta JSON válida y confirmación de conexión                  | Correcto                 | `docs/evidencias/despliegue/sprint-3/05-api-session-localhost-admin.png` | ✅     |
| PF-14 | Despliegue local con XAMPP          | Abrir XAMPP, phpMyAdmin y aplicación en localhost              | Entorno operativo y accesible; phpMyAdmin con BD pacepal          | Correcto                 | `docs/evidencias/despliegue/sprint-3/`                                   | ✅     |
| PF-15 | Cliente React en GitHub Pages       | Abrir URL publicada; probar cookies, login demo y carrito demo | Cliente navega con fallback demo; cookies persistentes            | Correcto                 | `tests/react-sprint-3/README.md`                                         | ✅     |

> **Aclaración sobre las evidencias de Postman:** Las capturas en
> `docs/documentacion-final/capturas-finales/06-postman/` muestran respuestas JSON
> accediendo directamente a los endpoints desde el navegador. No son capturas de Postman.
> Las evidencias reales de Postman (runner con resultados de la colección) son
> `docs/evidencias/dwes/postman1.png` y `postman2.png`. Ambos tipos de evidencia son
> válidos y complementarios, pero no son intercambiables.

---

## Trazabilidad de archivos de prueba

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

---

## Pruebas del cliente React (Sprint 3)

La verificación del cliente React está documentada en `tests/react-sprint-3/README.md` y
cubre los siguientes aspectos:

- Build con Vite y arranque en local sin errores de consola.
- Navegación por todas las pantallas principales sin errores.
- Buscador de productos con resultados y con mensaje de vacío.
- Carrito: añadir producto, cambiar cantidad, eliminar y finalizar pedido.
- Perfil e historial de pedidos de usuario autenticado.
- Panel de administración con datos cargados desde la API real.
- Cookies: banner visible, opciones de aceptar y rechazar, preferencias persistentes.
- Fallback demo en GitHub Pages: login, carrito y cookies sin API real.

---

## Pruebas con Postman

La colección Postman está en `tests/postman/pacepal.postman_collection.json` y el entorno
local en `tests/postman/pacepal-local.postman_environment.json`. Los flujos cubiertos son:

- Login correcto e incorrecto.
- Obtención del catálogo de productos.
- Gestión de carrito y pedidos.
- Verificación de sesión activa y cierre de sesión.

Las evidencias visuales de Postman con el runner y los resultados de la colección están en
`docs/evidencias/dwes/postman1.png` y `docs/evidencias/dwes/postman2.png`.

---

## Pruebas automatizadas con Selenium

Los scripts de automatización están en `tests/selenium/` y cubren:

| Script             | Flujo automatizado                                           |
| ------------------ | ------------------------------------------------------------ |
| `test-registro.js` | Flujo completo de registro de usuario                        |
| `test-buscador.js` | Buscador de productos con texto y verificación de resultados |

---

## Verificación de API directa desde navegador

Las capturas en `docs/documentacion-final/capturas-finales/06-postman/` corresponden a
respuestas JSON de los endpoints accedidas directamente desde el navegador. Son evidencia
válida de la API funcional en entorno local, pero no deben etiquetarse como capturas de
Postman.

| Captura                        | Endpoint verificado                             |
| ------------------------------ | ----------------------------------------------- |
| `api-get-health.png`           | `/api/health` — healthcheck del servidor        |
| `api-get-session.png`          | `/api/session` — estado de sesión activa        |
| `api-get-productos-raw.png`    | `/api/productos` — listado de productos en JSON |
| `api-get-producto-detalle.png` | `/api/productos/{id}` — detalle de producto     |
