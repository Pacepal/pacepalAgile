# Tests · PacePal

> Los archivos `.md` de esta carpeta documentan los pasos, condiciones y resultados
> esperados de cada prueba. Son trazabilidad técnica interna.
> Las capturas visuales definitivas se organizan en `docs/evidencias/` y en
> `docs/documentacion-final/capturas-finales/`.

---

## 1. Sprint 1 DWEC — Formularios y autenticación

### 1.1. Pruebas funcionales manuales

- [Caso 01 · Registro incorrecto](funcionales/01-registro-incorrecto.md)
- [Caso 02 · Registro correcto](funcionales/02-registro-correcto.md)
- [Caso 03 · Login incorrecto](funcionales/03-login-incorrecto.md)
- [Caso 04 · Login correcto](funcionales/04-login-correcto.md)
- [Caso 05 · Tarjeta aparece/desaparece](funcionales/05-tarjeta-aparece-desaparece.md)

### 1.2. Prueba automatizada con Selenium

- Script: [selenium/test-registro.js](selenium/test-registro.js)
- Comando: `node tests/selenium/test-registro.js`
- Requisito: XAMPP activo, `chromedriver` en PATH

---

## 2. Sprint 2 y Sprint 3 — Tienda, carrito, actividades, perfil y administración

### 2.1. Pruebas funcionales React Sprint 3

- [Caso 06 · Buscador dinámico de productos](react-sprint-3/06-buscador-productos.md)
- [Caso 07 · Carrito](react-sprint-3/07-carrito.md)
- [Caso 08 · Actividades](react-sprint-3/08-actividades.md)
- [Caso 09 · Perfil de usuario](react-sprint-3/09-perfil.md)
- [Caso 10 · Panel de administración](react-sprint-3/10-admin.md)
- [Caso 11 · Escaparate: carga inicial React](react-sprint-3/11-escaparate-carga-inicial-react.md)
- [Caso 12 · Regresión: cookies, perfil y reportes](react-sprint-3/12-regresion-secundarios-cookies-perfil-reportes.md)

Véase también: [react-sprint-3/README.md](react-sprint-3/README.md)

### 2.2. Prueba automatizada con Selenium

- Script: [selenium/test-buscador.js](selenium/test-buscador.js)
- Comando: `node tests/selenium/test-buscador.js`
- Cubre: TC-01 (destacados), TC-02 (búsqueda por nombre), TC-04 (sin resultados), TC-07 (retorno a destacados)
- Requisito: XAMPP activo, `chromedriver` en PATH

---

## 3. DAW — Despliegue en entorno local con XAMPP

Módulo: Despliegue de Aplicaciones WEB. Corresponde a la HU-01 del sprint de despliegue.

No existen archivos `.md` de caso de prueba en `tests/` para este módulo. La verificación
se realizó directamente sobre el entorno y se documentó mediante capturas y archivos
técnicos en `docs/evidencias/despliegue/sprint-3/`.

### 3.1. Criterios de aceptación verificados

| ID     | Criterio                                                                         | Evidencia principal                                                                           |
| ------ | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| DEP-01 | Apache arrancado y operativo en XAMPP                                            | `01-xampp-dashboard-localhost.png`, `07-procesos-servicios.txt`                               |
| DEP-02 | phpMyAdmin accesible; BD `pacepal` importada con tablas del esquema              | `02-phpmyadmin-home.png`, `03-phpmyadmin-bd-pacepal.png`                                      |
| DEP-03 | Aplicación conectada a la BD; API responde JSON correcto                         | `04-app-localhost-home.png`, `05-api-session-localhost.png`, `12-healthcheck-localhost.txt`   |
| DEP-04 | Aplicación accesible desde `http://localhost`                                    | `01-xampp-dashboard-localhost.png`, `04-app-localhost-home.png`                               |
| DEP-05 | Puertos 80 (Apache) y 3306 (MySQL) activos y escuchando                          | `06-netstat-puertos.txt`, `07-procesos-servicios.txt`                                         |
| DEP-06 | Estructura de BD visible; ruta del proyecto correcta bajo `htdocs`; permisos ACL | `03-phpmyadmin-bd-pacepal.png`, `10-ruta-proyecto-htdocs.txt`, `11-permisos-proyecto-acl.txt` |
| DEP-07 | Publicación accesible en GitHub Pages con HTTPS                                  | `08-github-pages-publicacion-https.png`, `09-https-headers-github-pages.txt`                  |
| DEP-08 | Cabeceras HTTPS correctas; healthcheck de la API responde                        | `09-https-headers-github-pages.txt`, `12-healthcheck-localhost.txt`                           |

Inventario completo con trazabilidad: [`docs/evidencias/despliegue/sprint-3/README.md`](../docs/evidencias/despliegue/sprint-3/README.md)

### 3.2. Documentación técnica de despliegue

| Documento                                                                                     | Contenido                                                     |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [`docs/despliegue/INSTALACION_LOCAL_XAMPP.md`](../docs/despliegue/INSTALACION_LOCAL_XAMPP.md) | Guía paso a paso: clonar, importar BD, configurar PHP y React |
| [`docs/despliegue/react-api-bd-xampp.md`](../docs/despliegue/react-api-bd-xampp.md)           | Arquitectura React → API PHP → MySQL; URLs válidas en local   |
| [`docs/despliegue/rutas-react-xampp.md`](../docs/despliegue/rutas-react-xampp.md)             | Corrección de rutas para XAMPP y GitHub Pages                 |

---

## 4. API REST y Postman

- Colección: [postman/pacepal.postman_collection.json](postman/pacepal.postman_collection.json)
- Entorno local: [postman/pacepal-local.postman_environment.json](postman/pacepal-local.postman_environment.json)

La documentación de Postman se recoge en la memoria final y en las evidencias de DWES.

> **Nota:** Las capturas de respuestas JSON visualizadas desde el navegador son evidencia
> de que los endpoints responden correctamente, pero **no son capturas de Postman**.
> Las evidencias reales del runner de Postman son únicamente:
> `docs/evidencias/dwes/postman1.png` y `docs/evidencias/dwes/postman2.png`.

---

## 5. Evidencias gráficas

| Área             | Carpeta de evidencias                        | Contenido principal                                           |
| ---------------- | -------------------------------------------- | ------------------------------------------------------------- |
| DWEC             | `docs/evidencias/dwec/sprint-1/`             | Registro, login, validación en vivo, tarjeta de vista previa  |
| DWEC             | `docs/evidencias/dwec/sprint-3/`             | Buscador, carrito, perfil, admin, cookies, nuevos usuarios    |
| DWES             | `docs/evidencias/dwes/`                      | Runner real de Postman (`postman1.png`, `postman2.png`)       |
| DIW              | `docs/evidencias/diw/sprint-2/`              | Lighthouse, WAVE, WCAG Contrast Checker                       |
| Despliegue       | `docs/evidencias/despliegue/sprint-3/`       | XAMPP, phpMyAdmin, API session, GitHub Pages                  |
| Capturas finales | `docs/documentacion-final/capturas-finales/` | Despliegue, React, responsive, accesibilidad, multimedia, API |

---

## 6. Relación con la memoria final

El resumen formal de todas las pruebas, su estado de evidencia y las instrucciones de
montaje en LibreOffice se recogen en:

`docs/documentacion-final/maquetacion-final/partes/09_02_pruebas_realizadas_LIBREOFFICE_LIMPIO.md`
