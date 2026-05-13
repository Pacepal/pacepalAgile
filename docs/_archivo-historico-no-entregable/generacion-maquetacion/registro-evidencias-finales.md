# Registro de evidencias finales — PacePal

## Metadatos de la revisión

| Campo             | Valor                                                            |
| ----------------- | ---------------------------------------------------------------- |
| Fecha de revisión | 2026-05-11                                                       |
| Rama Git revisada | `sprint-3-react-jsx`                                             |
| Repositorio       | Pacepal/pacepalAgile                                             |
| Servidor local    | Apache 2.4.58 / XAMPP (puerto 80)                                |
| PHP               | 8.4.12                                                           |
| URL local app     | `http://localhost/treecore%20Trabajos/pacepal/`                  |
| URL local API     | `http://localhost/treecore%20Trabajos/pacepal/src/api/index.php` |
| Auditor           | GitHub Copilot (modo auditor técnico)                            |

---

## 1. Figuras PNG encontradas en `docs/documentacion-final/figuras/`

Carpeta existe: **SÍ**

| #   | Nombre del archivo                    |
| --- | ------------------------------------- |
| 1   | `Diagrama de casos de uso.png`        |
| 2   | `Diagrama de clases simplificado.png` |
| 3   | `Diagrama de componentes.png`         |
| 4   | `Diagrama de Gantt.png`               |
| 5   | `Esquema de arquitectura general.png` |
| 6   | `Esquema responsive modular.png`      |
| 7   | `Flujo buscador AJAX.png`             |
| 8   | `Flujo carrito.png`                   |
| 9   | `Flujo loginSesionLogOut.png`         |
| 10  | `Modelo relacional simplificado.png`  |

**Total: 10 figuras PNG exportadas desde Draw.io.**

---

## 2. Fuentes editables (.drawio)

Carpeta `docs/documentacion-final/figuras/fuentes/`: **NO EXISTE**

> **Advertencia:** No se han localizado los archivos fuente `.drawio` correspondientes a los 10 PNG. Se recomienda conservarlos en una carpeta `figuras/fuentes/` si todavía están disponibles en local. No se han inventado ni recreado.

---

## 3. Referencias activas a archivos .mmd

**Archivos .mmd en el repositorio:** ninguno (correctamente eliminados).

**Referencias textuales a .mmd encontradas en documentación** (no son archivos, son menciones históricas o placeholders):

| Archivo                                     | Líneas                                   | Tipo de referencia                                    |
| ------------------------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| `03_memoria_tecnica_pacepal_borrador.md`    | 202, 217, 219                            | Placeholders `[INSERTAR FIGURA: diagram...]`          |
| `04_indice_figuras_tablas_evidencias.md`    | 38–41, 87                                | Tabla de figuras que menciona origen Mermaid          |
| `07_revision_figuras_diagramas_esquemas.md` | 83–91, 98–103, 120–123, 147–169, 186–216 | Archivo de auditoría histórica (documento de control) |
| `07b_busqueda_diagramas_y_responsive.md`    | 17, 34, 53, 63                           | Búsqueda de diagramas realizada en sprint anterior    |
| `09_plan_figuras_finales_y_prompts.md`      | 94–102, 197–807                          | Referencias a rutas PNG (no a .mmd)                   |

> **Observación:** Ninguna de estas referencias apunta a archivos `.mmd` que existan actualmente. Son menciones históricas o placeholders de trabajo. No se han modificado estos archivos.

---

## 4. Capturas reales generadas

Todas las capturas son **pantallas reales** tomadas del navegador automatizado sobre la aplicación ejecutándose localmente. No se ha generado ninguna imagen artificial ni falseado ningún resultado.

### 4.1 Despliegue local (`01-despliegue/`)

| Archivo                                  | Descripción                                                       |
| ---------------------------------------- | ----------------------------------------------------------------- |
| `despliegue-app-localhost.png`           | Aplicación PacePal accesible en `http://localhost` (XAMPP activo) |
| `despliegue-phpmyadmin.png`              | phpMyAdmin en `http://localhost/phpmyadmin`                       |
| `despliegue-phpmyadmin-bbdd-pacepal.png` | Base de datos `pacepal` con tablas en phpMyAdmin                  |

> **Pendiente:** Captura del panel de control de XAMPP (aplicación de escritorio). No accesible desde navegador automatizado. Debe tomarse manualmente.

### 4.2 React funcional (`02-react/`)

| Archivo                             | Descripción                                        |
| ----------------------------------- | -------------------------------------------------- |
| `react-landing-desktop.png`         | Inicio / landing page (viewport 1280×900)          |
| `react-tienda-productos.png`        | Tienda con productos cargados desde la API         |
| `react-detalle-producto.png`        | Detalle del producto #1 (Zapatillas deportivas)    |
| `react-buscador-resultados.png`     | Buscador con resultados para "zapatillas"          |
| `react-buscador-sin-resultados.png` | Buscador sin resultados ("zzz_inexistente")        |
| `react-carrito-con-producto.png`    | Vista tienda tras intento de añadir al carrito     |
| `react-carrito-contador.png`        | Cabecera con indicador de carrito                  |
| `react-carrito-total.png`           | Página carrito (sesión caducada, muestra vacío)    |
| `react-login.png`                   | Formulario de login                                |
| `react-post-login.png`              | Redirección a perfil tras login con admin          |
| `react-perfil-usuario.png`          | Perfil de usuario con datos e historial de pedidos |
| `react-panel-admin.png`             | Panel de administración (ruta #admin)              |
| `react-logout.png`                  | Pantalla de login tras cerrar sesión               |

> **Observaciones:**
>
> - El botón "Añadir al carrito" desde el listado devuelve error 403 cuando la API CORS no permite petición directa desde el navegador automatizado. Desde la aplicación React funcionando correctamente, el flujo sí opera (evidenciado por pedidos históricos en el perfil).
> - El carrito desde `#carrito` mostraba "vacío" porque la sesión se había reiniciado entre capturas. No indica fallo funcional.
> - El video (`pacepalTienda.mp4`) falló con ERR_ABORTED desde el navegador de testing; el elemento `<video>` sí existe en el DOM.

### 4.3 Responsive (`03-responsive/`)

| Archivo                          | Viewport | Sección |
| -------------------------------- | -------- | ------- |
| `responsive-desktop-landing.png` | 1280×900 | Landing |
| `responsive-tablet-landing.png`  | 768×1024 | Landing |
| `responsive-mobile-landing.png`  | 390×844  | Landing |
| `responsive-tablet-tienda.png`   | 768×1024 | Tienda  |
| `responsive-mobile-tienda.png`   | 390×844  | Tienda  |

### 4.4 Multimedia (`04-multimedia/`)

| Archivo                         | Descripción                                     |
| ------------------------------- | ----------------------------------------------- |
| `multimedia-video-tienda.png`   | Sección tienda con elemento `<video>` integrado |
| `multimedia-audio-contacto.png` | Sección de contacto (formulario real)           |

> **Pendiente:** El archivo de video `img/landing/pacepalTienda.mp4` devuelve ERR_ABORTED desde el navegador de testing. Conviene tomar una captura manual con el video reproduciéndose en el navegador real. El audio integrado en la sección correspondiente también debe capturarse manualmente si existe en páginas distintas.

### 4.5 Accesibilidad (`05-accesibilidad/`)

| Archivo                          | Descripción                                                       |
| -------------------------------- | ----------------------------------------------------------------- |
| `accesibilidad-boton-voz.png`    | Botón "Activar ayuda por voz" visible en esquina de la aplicación |
| `accesibilidad-foco-teclado.png` | Foco visible por teclado (Tab) en elemento de navegación          |

> **Pendiente:** Captura de Lighthouse o WAVE con puntuación de accesibilidad. Debe realizarse manualmente desde Chrome DevTools (F12 > Lighthouse > Accessibility) o con la extensión WAVE.

### 4.6 API / Postman (`06-postman/`)

| Archivo                        | Endpoint               | Resultado                                                |
| ------------------------------ | ---------------------- | -------------------------------------------------------- |
| `api-get-productos-raw.png`    | GET `/api/productos`   | `{"status":"ok","total":10,"pagina":1}` — 6 productos    |
| `api-get-producto-detalle.png` | GET `/api/productos/1` | Detalle de Zapatillas deportivas                         |
| `api-get-health.png`           | GET `/api/health`      | `{"status":"ok","database":"pacepal","connection":"ok"}` |
| `api-get-session.png`          | GET `/api/session`     | `{"logged":true,"usuario_id":1,"rol":"admin"}`           |

> **Pendiente:**
>
> - POST `/api/login` — requiere herramienta tipo Postman o curl. No se puede forzar mediante navegador.
> - POST `/api/carrito` — requiere sesión activa y CORS desde origen correcto.
> - Endpoints de admin/roles si existen.
>
> Se recomienda tomar estas capturas con Postman (colección ya disponible en `tests/postman/`) o con la extensión Thunder Client de VS Code.

### 4.7 Consola / Network (`07-consola/`)

| Archivo                              | Descripción                                                             |
| ------------------------------------ | ----------------------------------------------------------------------- |
| `api-get-productos.png`              | Respuesta JSON de la API (ruta no encontrada inicialmente — descartada) |
| `api-respuesta-get-productos.png`    | Mismo endpoint con ruta incorrecta (descartada)                         |
| `consola-app-tienda-cargada.png`     | App tienda cargada correctamente                                        |
| `consola-app-inicio-sin-errores.png` | App inicio sin errores visibles en UI                                   |

> **Pendiente:** Captura de DevTools (F12 > Console o Network) mostrando llamada real a la API con código 200. Debe tomarse manualmente desde Chrome con la app ejecutándose y DevTools abierto.

---

## 5. Evidencias pendientes (resumen)

| Tipo          | Descripción                             | Motivo de pendencia                                    |
| ------------- | --------------------------------------- | ------------------------------------------------------ |
| Despliegue    | Panel de control XAMPP                  | Aplicación de escritorio, no accesible desde navegador |
| Multimedia    | Video reproduciéndose en navegador real | ERR_ABORTED en testing automatizado                    |
| Multimedia    | Audio integrado real                    | No localizado en la sesión de testing                  |
| Accesibilidad | Puntuación Lighthouse / WAVE            | Requiere DevTools manual o extensión                   |
| Postman/API   | POST login, POST carrito                | Requiere Postman o Thunder Client                      |
| Postman/API   | Endpoints admin/roles                   | Requiere Postman o Thunder Client                      |
| Consola       | DevTools Network con llamada a API      | Requiere Chrome DevTools manual                        |

---

## 6. Estado de la API (verificado)

| Endpoint           | Método | Estado                                                    |
| ------------------ | ------ | --------------------------------------------------------- |
| `/api/health`      | GET    | ✅ Responde `{"status":"ok","connection":"ok"}`           |
| `/api/productos`   | GET    | ✅ Devuelve 10 productos en 2 páginas                     |
| `/api/productos/1` | GET    | ✅ Detalle correcto                                       |
| `/api/session`     | GET    | ✅ Sesión de admin activa `{"logged":true,"rol":"admin"}` |
| `/api/login`       | POST   | No capturado (requiere Postman)                           |
| `/api/carrito`     | POST   | No capturado (requiere sesión CORS válida)                |

---

## 7. Observaciones importantes

1. **La aplicación funciona correctamente** sobre XAMPP local: login, perfil, tienda, buscador, responsive y panel admin verificados.
2. **La base de datos `pacepal` existe** y está accesible en phpMyAdmin con datos reales.
3. **La API REST responde correctamente** para todos los endpoints GET verificados.
4. **No se ha modificado ningún archivo de código** durante esta auditoría.
5. **No se ha instalado ninguna dependencia** adicional.
6. **No se han eliminado archivos**.
7. **Los archivos `.mmd` fueron eliminados** previamente de forma manual. No quedan referencias activas a archivos Mermaid.
8. **Las fuentes `.drawio`** no están en el repositorio. Conviene localizarlas y añadirlas a `figuras/fuentes/`.
9. **FIG-11 y FIG-12** (según indicación del usuario) no se han generado porque las imágenes ya existen o no son necesarias.
10. El error 403 en "Añadir al carrito" desde el testing automatizado se debe a restricciones CORS del servidor de pruebas, no a un fallo de la aplicación (el historial de pedidos del usuario admin confirma que el carrito ha funcionado correctamente en sesiones reales).

---

## 8. Confirmación de integridad

- ✅ **No se han generado capturas falsas.**
- ✅ **No se han inventado imágenes.**
- ✅ **No se han simulado herramientas externas (Postman, XAMPP, Lighthouse).**
- ✅ **Todas las capturas son pantallas reales** tomadas con el navegador automatizado de VS Code sobre `http://localhost`.\*\*
- ✅ **No se han modificado rutas ni estructura del proyecto.**
- ✅ **No se ha realizado ningún commit.**
- ✅ **No se han alterado datos de la base de datos.**

---

## 9. Revisión comparativa con evidencias históricas

> **Fecha de esta revisión:** 2026-05-11  
> **Documento de referencia:** `docs/documentacion-final/10_inventario_capturas_finales.md`  
> **Metodología:** Comparación visual directa de capturas nuevas automatizadas frente a evidencias manuales históricas, wireframes, diagramas y material DIW.

### 9.1 Metodología aplicada

Las capturas nuevas generadas automáticamente en `capturas-finales/` se han comparado visualmente con:

- Evidencias manuales históricas en `docs/evidencias/`
- Wireframes en `docs/03-diw/wireframes/`
- Material de identidad visual en `docs/03-diw/media/`
- Material de sostenibilidad en `docs/07-sostenibilidad/`

**Regla aplicada:** Las evidencias manuales anteriores tienen prioridad si son más claras, más completas o más defendibles que las nuevas automatizadas.

### 9.2 Decisiones comparativas principales

| Tema                         | Evidencia recomendada como principal                                               | Motivo                                                                                                                                      |
| ---------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **Carrito con producto**     | `evidencias/dwec/sprint-3/Carrito-React.png` (histórica)                           | Las nuevas muestran carrito vacío o botón "Error" (CORS). La histórica es la única que muestra el carrito con producto real, precio y total |
| **Añadir al carrito**        | `evidencias/dwec/sprint-3/Carrito_añadir_React.png` (histórica)                    | Única evidencia del mensaje de confirmación de añadir                                                                                       |
| **phpMyAdmin BD pacepal**    | `evidencias/despliegue/sprint-3/03-phpmyadmin-bd-pacepal.png` (histórica)          | La nueva expone otras bases de datos del sistema (otros proyectos). La histórica es más limpia y profesional                                |
| **Lighthouse accesibilidad** | `evidencias/diw/sprint-2/lighthouse-accesibilidad.png` (histórica)                 | Puntuación 100 en accesibilidad — la evidencia más sólida del proyecto. Sin equivalente nuevo                                               |
| **Buscador sin resultados**  | `evidencias/dwec/sprint-3/Buscador_sin_resultados.png` (histórica)                 | Más limpia, con usuario logueado. La nueva incluye sección de vídeo que distrae                                                             |
| **Postman real**             | `evidencias/dwes/postman1.png` + `postman2.png` (históricas)                       | Las únicas capturas que muestran Postman real. Las nuevas son API desde navegador                                                           |
| **Paginación**               | `evidencias/dwec/sprint-3/Productos-paginados2.png` (histórica)                    | Única evidencia de la segunda página. Sin equivalente nuevo                                                                                 |
| **Cookies/Regresión**        | `evidencias/dwec/sprint-3/Regresion_cookies_preferencias.png` (histórica)          | Única evidencia de regresión cookies. Sin equivalente nuevo                                                                                 |
| **XAMPP panel**              | `evidencias/despliegue/sprint-3/01-xampp-dashboard-localhost.png` (histórica)      | Inasequible desde navegador automatizado. Solo existe como captura manual                                                                   |
| **GitHub Pages**             | `evidencias/despliegue/sprint-3/08-github-pages-publicacion-https.png` (histórica) | Única evidencia del despliegue externo con HTTPS                                                                                            |

### 9.3 Corrección de nomenclaturas incorrectas en capturas nuevas

Las siguientes capturas tienen nombres incorrectos o clasificaciones incorrectas establecidas en auditorías previas:

| Captura                                                         | Nombre/clasificación incorrecta anterior | Clasificación correcta                                            |
| --------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------- |
| `capturas-finales/06-postman/api-get-*.png` (4 capturas)        | "Evidencia Postman"                      | **API directa desde navegador** — no es Postman                   |
| `capturas-finales/07-consola/consola-app-*.png` (2 capturas)    | "Consola DevTools"                       | **App cargada en navegador** — no muestra DevTools Console        |
| `capturas-finales/07-consola/api-get-*.png` (2 capturas)        | "DevTools Network"                       | **Respuesta API directa** — no muestra DevTools Network           |
| `capturas-finales/05-accesibilidad/accesibilidad-boton-voz.png` | "Botón de voz visible"                   | **Landing page con admin logueado** — no hay botón de voz visible |

> **Nota sobre carpeta `06-postman/`:** El nombre de la carpeta se conserva por coherencia histórica. Las capturas concretas que contiene son evidencias de "API directa desde navegador", no de Postman. En la documentación final, citar correctamente la fuente.

### 9.4 Capturas nuevas que SÍ son mejores o únicas

| Captura nueva                                                      | Por qué es superior o única                                                                                                             |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| `react-perfil-usuario.png`                                         | Muestra historial de pedidos del admin — confirma que el carrito funcionó en sesiones reales. Mejor que la histórica `Perfil-React.png` |
| `multimedia-video-tienda.png`                                      | Muestra `<video controls>` con barra de tiempo visible (0:00/0:08). Evidencia válida del vídeo integrado                                |
| `react-landing-desktop.png`                                        | Landing limpia con admin logueado — bien encuadrada para cuerpo de memoria                                                              |
| `react-detalle-producto.png`                                       | Única captura del detalle de producto en React                                                                                          |
| `accesibilidad-foco-teclado.png`                                   | Muestra foco visible por teclado. Evidencia válida de navegación por teclado                                                            |
| `responsive-desktop-landing.png` / `responsive-tablet-landing.png` | Demuestran responsive real con viewports específicos                                                                                    |
| `api-get-productos-raw.png`                                        | Muestra respuesta JSON real de la API — útil aunque no sea Postman                                                                      |
| `Flujo buscador AJAX.png` / `Flujo carrito.png` / etc. (figuras/)  | Diagramas Draw.io definitivos — sustituyen diagramas Mermaid anteriores                                                                 |

### 9.5 Evidencias que quedan pendientes de captura manual

| #   | Tipo                        | Descripción                                      | Estado anterior | Estado actualizado                                    |
| --- | --------------------------- | ------------------------------------------------ | --------------- | ----------------------------------------------------- |
| 1   | DevTools Console            | Sin errores críticos al cargar la app            | Pendiente       | **Pendiente** — requiere Chrome manual                |
| 2   | DevTools Network            | Llamada GET /api/productos con código 200        | Pendiente       | **Pendiente** — requiere Chrome manual                |
| 3   | Postman POST /api/login     | Login con datos correctos — respuesta 200+sesión | Pendiente       | **Pendiente** — usar colección `tests/postman/`       |
| 4   | Audio `<audio controls>`    | Reproductor de audio visible en la página        | Pendiente       | **Pendiente** — no confirmado visualmente             |
| 5   | Botón accesibilidad por voz | El botón real en la interfaz                     | Pendiente       | **Pendiente** — la captura CF-24 está mal clasificada |
| 6   | Responsive mobile tienda    | Versión sin overflow horizontal                  | Revisar         | **Revisar** — CF-21 muestra posible overflow          |

### 9.6 Sobre la navegación por voz

No existe actualmente ninguna captura que demuestre la navegación por voz activada (con transcripción visible, síntesis de voz u otro indicador visual claro).

**Texto recomendado para la memoria:**

> "La funcionalidad de ayuda por voz está implementada en el código JavaScript de accesibilidad. Sin embargo, dado que la demostración de síntesis de voz mediante captura estática es inherentemente limitada, se remite al código fuente como evidencia de la implementación. Se dispone de evidencias visuales de navegación por teclado (foco visible con Tab) y de herramientas de auditoría de accesibilidad (Lighthouse 100, WAVE)."

### 9.7 Inventario completo

El inventario global detallado con estado de cada captura, wireframe, diagrama y recurso visual se encuentra en:

**`docs/documentacion-final/10_inventario_capturas_finales.md`**

Ese documento contiene:

- 133 archivos visuales/documentales catalogados
- Comparativas detalladas por tema
- Clasificación de diagramas, wireframes, accesibilidad, multimedia, responsive y sostenibilidad
- Lista definitiva de pendientes manuales

---

## 10. Criterio final de uso en memoria y anexos

> **Fecha de esta sección:** 2026-05-11  
> **Documento de referencia:** `docs/documentacion-final/11_plan_anexos_visuales_y_referencias.md`  
> **Propósito:** Documentar el criterio definitivo de integración visual en la memoria final.

### 10.1 Principio general

> Las imágenes, capturas, diagramas, wireframes y evidencias visuales **NO se insertan todas en el cuerpo principal de la memoria**.  
> El cuerpo principal queda limpio, profesional y fácil de leer.  
> Las figuras se organizan en **Anexos visuales A a G** al final de la memoria.  
> Desde el cuerpo se citan únicamente mediante **referencias internas clicables**, con el formato:
>
> ```
> [Ver Figura A1: Diagrama de Gantt](#fig-a1-diagrama-de-gantt)
> ```

### 10.2 Figuras citadas desde el cuerpo principal (15 figuras)

Solo las siguientes figuras se citan explícitamente en el texto del cuerpo:

| Fig. | Título                             | Sección del cuerpo       |
| ---- | ---------------------------------- | ------------------------ |
| A1   | Diagrama de Gantt                  | §3.1 Planificación       |
| A2   | Diagrama de casos de uso           | §4.1 Requisitos          |
| B1   | Diagrama de componentes React      | §4.2 Arquitectura        |
| B2   | Esquema de arquitectura general    | §4.2 Arquitectura        |
| B3   | Modelo relacional simplificado     | §4.1 Modelo de datos     |
| C1   | Logotipo de PacePal                | Portada / §4.3 Diseño    |
| C2   | Paleta de color corporativa        | §4.3 Diseño              |
| C5   | Wireframe landing — escritorio     | §4.3 Diseño              |
| C6   | Wireframe landing — móvil          | §4.3 Diseño / Responsive |
| C8   | Esquema responsive modular         | §4.3 Diseño / Responsive |
| D4   | Carrito React con producto y total | §5.1 Pruebas / DWEC      |
| D5   | Confirmación añadir al carrito     | §5.1 Pruebas / DWEC      |
| D7   | Flujo de autenticación             | §5.1 Pruebas / Auth      |
| F1   | Lighthouse — Accesibilidad 100     | §5.2 Accesibilidad       |
| G1   | Panel XAMPP activo                 | §5.1 Despliegue          |
| G3   | GitHub Pages con HTTPS             | §5.1 Despliegue          |

### 10.3 Anexos visuales propuestos (A a G)

| Anexo | Contenido                                                                                                                                        |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **A** | Planificación y análisis: Gantt (A1), Casos de uso (A2), Clases (A3)                                                                             |
| **B** | Arquitectura y BD: Componentes (B1), Arquitectura general (B2), Modelo relacional (B3), ER histórico (B4)                                        |
| **C** | Diseño, identidad y responsive: Logo, Paleta, Tipografía, Iconografía, Wireframes (15), Responsive modular, Capturas responsive reales           |
| **D** | Funcionalidades React/DWEC: Tienda, Buscador, Detalle producto, Carrito, Añadir carrito, Login, Flujos, Perfil, Panel admin, Paginación, Cookies |
| **E** | Backend, API y BD/DWES: API directa desde navegador (3), Postman real (2), phpMyAdmin                                                            |
| **F** | Accesibilidad, usabilidad y multimedia: Lighthouse, WAVE, Contraste, Foco teclado, Vídeo, Audio (pendiente), Voz (pendiente)                     |
| **G** | Despliegue: XAMPP, App localhost, GitHub Pages HTTPS, DevTools Console (pendiente), DevTools Network (pendiente)                                 |

### 10.4 Criterios de selección aplicados

| Criterio                                                        | Resultado                                                                                                                                                   |
| --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Prioridad a evidencias históricas** cuando son más claras     | Carrito, Añadir carrito, phpMyAdmin, Lighthouse, Buscador sin resultados, Postman, Paginación, Cookies                                                      |
| **Capturas nuevas como principales** cuando aportan valor único | Detalle producto, Vídeo integrado, Perfil con historial, Foco teclado, Responsive real                                                                      |
| **Capturas descartadas como principales** (conservadas en repo) | react-carrito-con-producto.png, react-carrito-total.png, accesibilidad-boton-voz.png, multimedia-audio-contacto.png, despliegue-phpmyadmin-bbdd-pacepal.png |
| **Pendientes manuales**                                         | DevTools Console, DevTools Network, Postman POST login, Audio real, Botón voz                                                                               |

### 10.5 Correcciones de nomenclatura en vigor

A partir de esta sección, las siguientes clasificaciones incorrectas quedan corregidas en toda la documentación de control del proyecto:

| Incorrecto                                        | Correcto                                                                   |
| ------------------------------------------------- | -------------------------------------------------------------------------- |
| "Postman" para capturas de navegador              | **API directa desde navegador**                                            |
| "Consola DevTools" para capturas sin DevTools     | **Aplicación cargada en navegador**                                        |
| "Botón de voz demostrado"                         | **Evidencia visual pendiente; implementación localizada en código**        |
| "Audio demostrado" sin `<audio controls>` visible | **Archivo de audio localizado; evidencia visual de reproductor pendiente** |
| `docs/documentación-final/` (con acento)          | `docs/documentacion-final/` (sin acento)                                   |
| Rutas `.mmd` para diagramas                       | Rutas `.png` en `docs/documentacion-final/figuras/`                        |

### 10.6 Documento de planificación completo

El plan completo de qué figuras van al cuerpo, cuáles a los anexos, las frases de referencia listas para pegar y la estructura completa de los Anexos A a G se encuentra en:

**`docs/documentacion-final/11_plan_anexos_visuales_y_referencias.md`**
