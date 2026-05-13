# 10 — Inventario global de capturas y evidencias visuales — PacePal

> **Fecha de elaboración:** 2026-05-11  
> **Rama:** `sprint-3-react-jsx`  
> **Metodología:** Revisión comparativa de TODAS las fuentes visuales del proyecto.  
> **Regla principal:** Las capturas manuales anteriores tienen prioridad si son más claras, más completas y más defendibles que las nuevas automatizadas.  
> **Restricciones:** No se borra ningún archivo. No se mueve ningún archivo. No se renombra ningún archivo. Solo se clasifica y documenta.

---

## Criterio de uso en la memoria final

> **Las imágenes, capturas, diagramas y wireframes NO se insertarán todas en el cuerpo principal de la memoria.**  
> El cuerpo principal debe quedar limpio y profesional. Solo se citarán las figuras más representativas mediante **referencias internas clicables** del tipo `[Ver Figura B2](#fig-b2-arquitectura)`.  
> Las evidencias visuales van organizadas en **Anexos visuales** al final del documento (Anexos A a G).  
> La planificación completa de qué figuras van al cuerpo y cuáles solo al anexo se detalla en:  
> **`docs/documentacion-final/11_plan_anexos_visuales_y_referencias.md`**

### Correcciones de nomenclatura obligatorias (Tarea 5)

Las siguientes clasificaciones erróneas deben evitarse en toda la documentación:

| Clasificación INCORRECTA                                                                     | Clasificación CORRECTA                                                            |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| "Evidencia Postman" para `capturas-finales/06-postman/api-get-*.png`                         | **API directa desde navegador**                                                   |
| "Consola DevTools" o "DevTools Console" para `capturas-finales/07-consola/consola-app-*.png` | **Aplicación cargada en navegador**                                               |
| "DevTools Network" para `capturas-finales/07-consola/api-get-*.png`                          | **Respuesta API directa**                                                         |
| "Botón de voz visible" para `accesibilidad-boton-voz.png`                                    | **Landing page con admin logueado** (no muestra botón de voz)                     |
| "Audio demostrado" para `multimedia-audio-contacto.png`                                      | **Archivo de audio localizado; evidencia visual de `<audio controls>` pendiente** |
| "Navegación por voz demostrada"                                                              | **Funcionalidad implementada en código; evidencia visual pendiente**              |
| `docs/documentación-final/` (con acento)                                                     | `docs/documentacion-final/` (sin acento)                                          |
| Rutas `.mmd` en diagramas                                                                    | Usar rutas `.png` reales en `docs/documentacion-final/figuras/`                   |

---

---

## TAREA 1 — Inventario global de evidencias visuales

La tabla siguiente cubre **todas** las fuentes visuales del proyecto, no solo las capturas nuevas.

### 1.1 Capturas nuevas automatizadas — `docs/documentacion-final/capturas-finales/`

| ID    | Archivo                                | Ruta completa                      | Tipo                    | Módulo              | Qué demuestra                                                                | Apartado memoria         | Origen                      | Estado                 | Observaciones                                                                                                                                                                                                                          |
| ----- | -------------------------------------- | ---------------------------------- | ----------------------- | ------------------- | ---------------------------------------------------------------------------- | ------------------------ | --------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CF-01 | despliegue-app-localhost.png           | capturas-finales/01-despliegue/    | Captura navegador       | Despliegue          | App PacePal accesible en localhost con XAMPP activo                          | §4 Despliegue            | Captura nueva automatizada  | Principal para memoria | Muestra landing sin login. Válida y limpia                                                                                                                                                                                             |
| CF-02 | despliegue-phpmyadmin.png              | capturas-finales/01-despliegue/    | Captura navegador       | Despliegue          | phpMyAdmin accesible en localhost                                            | §4 Despliegue            | Captura nueva automatizada  | Válida para anexo      | Complementa CF-01                                                                                                                                                                                                                      |
| CF-03 | despliegue-phpmyadmin-bbdd-pacepal.png | capturas-finales/01-despliegue/    | Captura navegador       | Despliegue / BBDD   | phpMyAdmin con BD pacepal y tablas                                           | §4 Despliegue            | Captura nueva automatizada  | Apoyo secundario       | La sidebar muestra otras BBDD del sistema (otros proyectos en XAMPP). La evidencia histórica DEP-03 es más limpia. No usar como principal                                                                                              |
| CF-04 | react-landing-desktop.png              | capturas-finales/02-react/         | Captura navegador       | Landing React       | Landing page desktop con admin logueado (Carrito, Admin, Perfil)             | §5 React / Funcionalidad | Captura nueva automatizada  | Principal para memoria | Captura limpia, muestra navbar con roles activos                                                                                                                                                                                       |
| CF-05 | react-tienda-productos.png             | capturas-finales/02-react/         | Captura navegador       | Tienda React        | Tienda con productos cargados desde API, vídeo integrado visible             | §5 React / Tienda        | Captura nueva automatizada  | Principal para memoria | Muestra también el elemento `<video>` — doble valor                                                                                                                                                                                    |
| CF-06 | react-detalle-producto.png             | capturas-finales/02-react/         | Captura navegador       | Tienda React        | Detalle de producto (Zapatillas deportivas) con imagen y descripción         | §5 React / Tienda        | Captura nueva automatizada  | Principal para memoria | Captura clara del detalle de producto                                                                                                                                                                                                  |
| CF-07 | react-buscador-resultados.png          | capturas-finales/02-react/         | Captura navegador       | Buscador React      | Buscador con resultados para "zapatillas"                                    | §5 React / Buscador      | Captura nueva automatizada  | Válida para memoria    | Comparable con DWEC-S3-03. Ambas demuestran la misma funcionalidad                                                                                                                                                                     |
| CF-08 | react-buscador-sin-resultados.png      | capturas-finales/02-react/         | Captura navegador       | Buscador React      | Buscador sin resultados ("zzz_inexistente")                                  | §5 React / Buscador      | Captura nueva automatizada  | Apoyo secundario       | La histórica DWEC-S3-08 (Buscador_sin_resultados.png) está más limpia y con usuario logueado. Usar histórica como principal                                                                                                            |
| CF-09 | react-carrito-con-producto.png         | capturas-finales/02-react/         | Captura navegador       | Carrito React       | Estado de la tienda tras intento de añadir — muestra botón "Error"           | §5 React / Carrito       | Captura nueva automatizada  | Revisar manualmente    | El botón "Error" indica fallo CORS 403 en el testing automatizado. NO demuestra el carrito funcionando. Las históricas DWEC-S3-09 y DWEC-S3-10 son superiores                                                                          |
| CF-10 | react-carrito-contador.png             | capturas-finales/02-react/         | Captura navegador       | Carrito React       | Header con área de carrito visible                                           | §5 React / Carrito       | Captura nueva automatizada  | Apoyo secundario       | Solo muestra el header. No demuestra carrito con producto                                                                                                                                                                              |
| CF-11 | react-carrito-total.png                | capturas-finales/02-react/         | Captura navegador       | Carrito React       | Página carrito con "Tu carrito está vacío" + "Acceso no autorizado"          | §5 React / Carrito       | Captura nueva automatizada  | Revisar manualmente    | Estado erróneo (sesión caducada entre capturas). NO usar como evidencia principal del carrito. Usar DWEC-S3-09                                                                                                                         |
| CF-12 | react-login.png                        | capturas-finales/02-react/         | Captura navegador       | Auth React          | Formulario de login React                                                    | §5 React / Auth          | Captura nueva automatizada  | Principal para memoria | Captura limpia del formulario de login                                                                                                                                                                                                 |
| CF-13 | react-post-login.png                   | capturas-finales/02-react/         | Captura navegador       | Auth React          | Redirección a perfil tras login exitoso con admin                            | §5 React / Auth          | Captura nueva automatizada  | Válida para memoria    | Complementa CF-12, demuestra el flujo completo de autenticación                                                                                                                                                                        |
| CF-14 | react-perfil-usuario.png               | capturas-finales/02-react/         | Captura navegador       | Perfil React        | Perfil admin con datos e historial de pedidos                                | §5 React / Perfil        | Captura nueva automatizada  | Principal para memoria | Muestra historial de pedidos — confirma que el carrito funcionó en sesiones reales. Mejor que la histórica DWEC-S3-14 para este propósito                                                                                              |
| CF-15 | react-panel-admin.png                  | capturas-finales/02-react/         | Captura navegador       | Admin React         | Panel de administración (#admin) con datos de gestión                        | §5 React / Admin         | Captura nueva automatizada  | Principal para memoria | Captura clara del panel admin                                                                                                                                                                                                          |
| CF-16 | react-logout.png                       | capturas-finales/02-react/         | Captura navegador       | Auth React          | Pantalla de login tras cerrar sesión (logout exitoso)                        | §5 React / Auth          | Captura nueva automatizada  | Válida para anexo      | Demuestra el flujo de logout                                                                                                                                                                                                           |
| CF-17 | responsive-desktop-landing.png         | capturas-finales/03-responsive/    | Captura navegador       | Responsive          | Landing en viewport 1280×900 (desktop)                                       | §6 Diseño / Responsive   | Captura nueva automatizada  | Principal para memoria | Demuestra layout desktop real                                                                                                                                                                                                          |
| CF-18 | responsive-tablet-landing.png          | capturas-finales/03-responsive/    | Captura navegador       | Responsive          | Landing en viewport 768×1024 (tablet)                                        | §6 Diseño / Responsive   | Captura nueva automatizada  | Principal para memoria | Demuestra adaptación tablet                                                                                                                                                                                                            |
| CF-19 | responsive-mobile-landing.png          | capturas-finales/03-responsive/    | Captura navegador       | Responsive          | Landing en viewport 390×844 (mobile)                                         | §6 Diseño / Responsive   | Captura nueva automatizada  | Válida para memoria    | Complementa los wireframes mobile existentes                                                                                                                                                                                           |
| CF-20 | responsive-tablet-tienda.png           | capturas-finales/03-responsive/    | Captura navegador       | Responsive          | Tienda en viewport 768×1024 (tablet)                                         | §6 Diseño / Responsive   | Captura nueva automatizada  | Válida para memoria    | Muestra grid de tienda en tablet                                                                                                                                                                                                       |
| CF-21 | responsive-mobile-tienda.png           | capturas-finales/03-responsive/    | Captura navegador       | Responsive          | Tienda en viewport 390×844 (mobile)                                          | §6 Diseño / Responsive   | Captura nueva automatizada  | Revisar manualmente    | El contenido aparece cortado en la parte derecha (overflow horizontal visible). Revisar si es problema del viewport de captura o problema real de responsive                                                                           |
| CF-22 | multimedia-video-tienda.png            | capturas-finales/04-multimedia/    | Captura navegador       | Multimedia          | Tienda con elemento `<video controls>` visible y barra de tiempo (0:00/0:08) | §7 Multimedia            | Captura nueva automatizada  | Principal para memoria | El reproductor de video SÍ es visible con controles. Evidencia válida y suficiente para la memoria                                                                                                                                     |
| CF-23 | multimedia-audio-contacto.png          | capturas-finales/04-multimedia/    | Captura navegador       | Multimedia          | Página de contacto (formulario)                                              | §7 Multimedia            | Captura nueva automatizada  | Repetir captura        | NO se ven controles `<audio>`. La captura muestra el formulario de contacto pero el reproductor de audio no es visible. Pendiente de captura manual                                                                                    |
| CF-24 | accesibilidad-boton-voz.png            | capturas-finales/05-accesibilidad/ | Captura navegador       | Accesibilidad       | —                                                                            | §8 Accesibilidad         | Captura nueva automatizada  | Mal clasificada        | La imagen muestra la landing page con admin logueado. NO hay botón de voz visible. Nombre incorrecto. Útil como captura de "landing con roles admin" pero NO como evidencia del botón de accesibilidad. Repetir captura del botón real |
| CF-25 | accesibilidad-foco-teclado.png         | capturas-finales/05-accesibilidad/ | Captura navegador       | Accesibilidad       | Foco visible por teclado (Tab) en elemento del header                        | §8 Accesibilidad         | Captura nueva automatizada  | Principal para memoria | Demuestra navegación por teclado con foco visible (outline)                                                                                                                                                                            |
| CF-26 | api-get-health.png                     | capturas-finales/06-postman/       | Respuesta API navegador | API REST            | GET /api/health — `{"status":"ok","connection":"ok"}`                        | §9 API DWES              | API directa desde navegador | Válida para memoria    | NOTA: no es Postman. Es respuesta JSON en navegador. Clasificar como "API directa desde navegador"                                                                                                                                     |
| CF-27 | api-get-producto-detalle.png           | capturas-finales/06-postman/       | Respuesta API navegador | API REST            | GET /api/productos/1 — detalle Zapatillas deportivas                         | §9 API DWES              | API directa desde navegador | Válida para memoria    | Misma nota: no es Postman. Válida como prueba funcional de la API                                                                                                                                                                      |
| CF-28 | api-get-productos-raw.png              | capturas-finales/06-postman/       | Respuesta API navegador | API REST            | GET /api/productos — listado JSON con paginación                             | §9 API DWES              | API directa desde navegador | Principal para memoria | La más representativa de la API. No es Postman                                                                                                                                                                                         |
| CF-29 | api-get-session.png                    | capturas-finales/06-postman/       | Respuesta API navegador | API REST            | GET /api/session — sesión admin activa                                       | §9 API DWES              | API directa desde navegador | Válida para memoria    | Demuestra sesión autenticada. No es Postman                                                                                                                                                                                            |
| CF-30 | api-get-productos.png                  | capturas-finales/07-consola/       | Captura navegador       | API REST / Consola  | Respuesta de endpoint con ruta posiblemente incorrecta                       | §9 API DWES              | Captura nueva automatizada  | Revisar manualmente    | Según el registro anterior, ruta no encontrada. Clasificar como "app cargada en navegador". No es DevTools Console                                                                                                                     |
| CF-31 | api-respuesta-get-productos.png        | capturas-finales/07-consola/       | Captura navegador       | API REST / Consola  | Mismo endpoint con ruta alternativa                                          | §9 API DWES              | Captura nueva automatizada  | Revisar manualmente    | Similar a CF-30. No es DevTools Console. Revisar si el endpoint responde correctamente                                                                                                                                                 |
| CF-32 | consola-app-inicio-sin-errores.png     | capturas-finales/07-consola/       | Captura navegador       | Landing / Auth      | Landing page con admin logueado (idéntico a CF-04 en contexto)               | §5 React / Landing       | Captura nueva automatizada  | Apoyo secundario       | Nombre engañoso: NO muestra DevTools Console. Es la app cargada. Reclasificar como "app cargada en navegador - landing admin logueado"                                                                                                 |
| CF-33 | consola-app-tienda-cargada.png         | capturas-finales/07-consola/       | Captura navegador       | Tienda / Multimedia | Tienda con video visible y admin logueado                                    | §5 React / Tienda        | Captura nueva automatizada  | Válida para memoria    | Nombre engañoso: NO muestra DevTools Console. Muestra la tienda con admin y el video. Útil como captura alternativa de la tienda con usuario autenticado                                                                               |

---

### 1.2 Diagramas finales — `docs/documentacion-final/figuras/`

| ID     | Archivo                             | Tipo                 | Módulo        | Qué demuestra                                  | Apartado memoria          | Origen                 | Estado                 |
| ------ | ----------------------------------- | -------------------- | ------------- | ---------------------------------------------- | ------------------------- | ---------------------- | ---------------------- |
| FIG-01 | Diagrama de casos de uso.png        | Diagrama UML         | Análisis      | Actores y casos de uso del sistema             | §2 Análisis / Requisitos  | Diagrama final Draw.io | Principal para memoria |
| FIG-02 | Diagrama de clases simplificado.png | Diagrama UML         | Arquitectura  | Entidades del dominio y relaciones             | §3 Arquitectura / Modelos | Diagrama final Draw.io | Principal para memoria |
| FIG-03 | Diagrama de componentes.png         | Diagrama UML         | Arquitectura  | Componentes React y su jerarquía               | §3 Arquitectura React     | Diagrama final Draw.io | Principal para memoria |
| FIG-04 | Diagrama de Gantt.png               | Gantt                | Gestión ágil  | Planificación temporal de sprints              | §1 Gestión / Agile        | Diagrama final Draw.io | Principal para memoria |
| FIG-05 | Esquema de arquitectura general.png | Esquema arquitectura | Arquitectura  | Stack completo: Apache+PHP+MySQL+React         | §3 Arquitectura general   | Diagrama final Draw.io | Principal para memoria |
| FIG-06 | Esquema responsive modular.png      | Esquema diseño       | Diseño / DIW  | Sistema modular de CSS responsive              | §6 Diseño / Responsive    | Diagrama final Draw.io | Principal para memoria |
| FIG-07 | Flujo buscador AJAX.png             | Diagrama flujo       | DWEC / API    | Flujo AJAX del buscador de productos           | §5 DWEC / Buscador        | Diagrama final Draw.io | Principal para memoria |
| FIG-08 | Flujo carrito.png                   | Diagrama flujo       | DWEC / Tienda | Flujo de gestión del carrito React             | §5 DWEC / Carrito         | Diagrama final Draw.io | Principal para memoria |
| FIG-09 | Flujo loginSesionLogOut.png         | Diagrama flujo       | Auth / DWES   | Flujo de autenticación: login, sesión y logout | §5 Auth / DWES            | Diagrama final Draw.io | Principal para memoria |
| FIG-10 | Modelo relacional simplificado.png  | Diagrama BD          | DWES / BBDD   | Modelo relacional de la BD pacepal             | §9 DWES / BBDD            | Diagrama final Draw.io | Principal para memoria |

---

### 1.3 Evidencias históricas — `docs/evidencias/`

#### Sprint 0

| ID      | Archivo             | Ruta                   | Tipo                | Módulo        | Qué demuestra                              | Apartado memoria | Origen                  | Estado           | Observaciones                                         |
| ------- | ------------------- | ---------------------- | ------------------- | ------------- | ------------------------------------------ | ---------------- | ----------------------- | ---------------- | ----------------------------------------------------- |
| HIST-01 | sprint0-arbol.png   | evidencias/01-sprint0/ | Captura herramienta | Gestión agile | Árbol de carpetas del proyecto en sprint 0 | §1 Gestión       | Captura manual anterior | Apoyo secundario | Valor histórico. No prioritaria para cuerpo principal |
| HIST-02 | sprint0-tablero.png | evidencias/01-sprint0/ | Captura herramienta | Gestión agile | Tablero Kanban/Scrum en sprint 0           | §1 Gestión       | Captura manual anterior | Apoyo secundario | Evidencia de metodología ágil                         |

#### Despliegue — Sprint 3

| ID     | Archivo                               | Ruta                            | Tipo                | Módulo             | Qué demuestra                                                  | Apartado memoria | Origen                  | Estado                     | Observaciones                                                                                                     |
| ------ | ------------------------------------- | ------------------------------- | ------------------- | ------------------ | -------------------------------------------------------------- | ---------------- | ----------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| DEP-01 | 01-xampp-dashboard-localhost.png      | evidencias/despliegue/sprint-3/ | Captura herramienta | Despliegue         | Panel de control XAMPP activo (Apache + MySQL)                 | §4 Despliegue    | Captura manual anterior | Principal para memoria     | Captura del XAMPP Control Panel que NO se puede obtener automáticamente desde navegador. Imprescindible           |
| DEP-02 | 02-phpmyadmin-home.png                | evidencias/despliegue/sprint-3/ | Captura navegador   | Despliegue         | Inicio de phpMyAdmin                                           | §4 Despliegue    | Captura manual anterior | Válida para anexo          | Complementa DEP-03                                                                                                |
| DEP-03 | 03-phpmyadmin-bd-pacepal.png          | evidencias/despliegue/sprint-3/ | Captura navegador   | Despliegue / BBDD  | BD pacepal con 9 tablas, 5 usuarios, 38 filas — sidebar limpia | §4 Despliegue    | Captura manual anterior | **PRINCIPAL para memoria** | Más limpia que CF-03: no expone otras BBDD del sistema. Usar esta como evidencia principal de la BD en phpMyAdmin |
| DEP-04 | 04-app-localhost-home.png             | evidencias/despliegue/sprint-3/ | Captura navegador   | Despliegue         | Landing page PacePal en localhost                              | §4 Despliegue    | Captura manual anterior | Apoyo secundario           | Duplica CF-01. CF-01 es suficiente como principal                                                                 |
| DEP-05 | 05-api-session-localhost-admin.png    | evidencias/despliegue/sprint-3/ | Captura navegador   | API / Auth         | Respuesta JSON de /api/session con admin activo                | §9 API           | Captura manual anterior | Válida para memoria        | Complementa CF-29. Ambas muestran la misma funcionalidad                                                          |
| DEP-06 | 05-api-session-localhost.png          | evidencias/despliegue/sprint-3/ | Captura navegador   | API / Auth         | Respuesta /api/session (sin admin)                             | §9 API           | Captura manual anterior | Apoyo secundario           | Variante de DEP-05 sin admin                                                                                      |
| DEP-07 | 08-github-pages-publicacion-https.png | evidencias/despliegue/sprint-3/ | Captura navegador   | Despliegue / HTTPS | GitHub Pages publicado con HTTPS activo                        | §4 Despliegue    | Captura manual anterior | Principal para memoria     | Demuestra despliegue en hosting externo con HTTPS. Evidencia única                                                |

#### Análisis de competencia — DIW Sprint 1

| ID        | Archivo             | Ruta                     | Tipo              | Módulo               | Qué demuestra                   | Apartado memoria  | Origen                  | Estado           |
| --------- | ------------------- | ------------------------ | ----------------- | -------------------- | ------------------------------- | ----------------- | ----------------------- | ---------------- |
| DIW-S1-01 | komoot-interfaz.png | evidencias/diw/sprint-1/ | Captura navegador | Análisis competencia | Interfaz de Komoot (referencia) | §6 DIW / Análisis | Captura manual anterior | Apoyo secundario |
| DIW-S1-02 | meetup-interfaz.png | evidencias/diw/sprint-1/ | Captura navegador | Análisis competencia | Interfaz de Meetup (referencia) | §6 DIW / Análisis | Captura manual anterior | Apoyo secundario |
| DIW-S1-03 | strava-interfaz.png | evidencias/diw/sprint-1/ | Captura navegador | Análisis competencia | Interfaz de Strava (referencia) | §6 DIW / Análisis | Captura manual anterior | Apoyo secundario |

#### Accesibilidad — DIW Sprint 2

| ID        | Archivo                      | Ruta                     | Tipo                | Módulo        | Qué demuestra                                                         | Apartado memoria | Origen                  | Estado                     | Observaciones                                                                                                  |
| --------- | ---------------------------- | ------------------------ | ------------------- | ------------- | --------------------------------------------------------------------- | ---------------- | ----------------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------- |
| DIW-S2-01 | lighthouse-accesibilidad.png | evidencias/diw/sprint-2/ | Captura herramienta | Accesibilidad | Lighthouse: Accesibilidad 100, SEO 100, Rendimiento 96, Prácticas 100 | §8 Accesibilidad | Captura manual anterior | **PRINCIPAL para memoria** | La captura más potente del proyecto en accesibilidad. No existe equivalente nuevo automatizado. Imprescindible |
| DIW-S2-02 | wave-analisis.png            | evidencias/diw/sprint-2/ | Captura herramienta | Accesibilidad | Análisis WAVE de la aplicación                                        | §8 Accesibilidad | Captura manual anterior | Principal para memoria     | Herramienta de evaluación WCAG. Complementa DIW-S2-01                                                          |
| DIW-S2-03 | WCAG_Contrast_Checker.png    | evidencias/diw/sprint-2/ | Captura herramienta | Accesibilidad | Contraste WCAG verificado con herramienta                             | §8 Accesibilidad | Captura manual anterior | Principal para memoria     | Evidencia de contraste AA/AAA. Herramienta real                                                                |

#### Validación formularios y autenticación — DWEC Sprint 1

| ID         | Archivo                       | Ruta                      | Tipo              | Módulo            | Qué demuestra                                  | Apartado memoria     | Origen                  | Estado                     |
| ---------- | ----------------------------- | ------------------------- | ----------------- | ----------------- | ---------------------------------------------- | -------------------- | ----------------------- | -------------------------- | ------------------------------------------------------------------------------------------- |
| DWEC-S1-01 | dniEvidencia.png              | evidencias/dwec/sprint-1/ | Captura navegador | Auth / Validación | Validación de campo DNI                        | §5 DWEC / Forms      | Captura manual anterior | Válida para memoria        |
| DWEC-S1-02 | login-correcto.png            | evidencias/dwec/sprint-1/ | Captura navegador | Auth              | Login exitoso                                  | §5 DWEC / Auth       | Captura manual anterior | Principal para memoria     |
| DWEC-S1-03 | login-error.png               | evidencias/dwec/sprint-1/ | Captura navegador | Auth              | Login con error (contraseña incorrecta)        | §5 DWEC / Auth       | Captura manual anterior | Principal para memoria     |
| DWEC-S1-04 | registro-correcto.png         | evidencias/dwec/sprint-1/ | Captura navegador | Auth              | Registro exitoso con mensaje de confirmación   | §5 DWEC / Auth       | Captura manual anterior | **Principal para memoria** | Muestra mensaje "Registro validado correctamente. Ahora puedes iniciar sesión." — muy claro |
| DWEC-S1-05 | registro-error.png            | evidencias/dwec/sprint-1/ | Captura navegador | Auth              | Registro con errores de validación             | §5 DWEC / Auth       | Captura manual anterior | Principal para memoria     |
| DWEC-S1-06 | registro-validacionEnVivo.png | evidencias/dwec/sprint-1/ | Captura navegador | Auth / Validación | Validación en vivo mientras el usuario escribe | §5 DWEC / Validación | Captura manual anterior | Principal para memoria     |
| DWEC-S1-07 | tarjeta-correcta.png          | evidencias/dwec/sprint-1/ | Captura navegador | Formulario / Pago | Tarjeta bancaria con datos correctos           | §5 DWEC / Forms      | Captura manual anterior | Válida para memoria        |
| DWEC-S1-08 | tarjeta-incorrecta.png        | evidencias/dwec/sprint-1/ | Captura navegador | Formulario / Pago | Tarjeta bancaria con datos incorrectos         | §5 DWEC / Forms      | Captura manual anterior | Válida para memoria        |
| DWEC-S1-09 | tarjeta-visible.png           | evidencias/dwec/sprint-1/ | Captura navegador | Formulario / Pago | Campo de número de tarjeta visible             | §5 DWEC / Forms      | Captura manual anterior | Válida para memoria        |

#### React funcional — DWEC Sprint 3

| ID         | Archivo                            | Ruta                      | Tipo              | Módulo                 | Qué demuestra                                                                                         | Apartado memoria   | Origen                  | Estado                                | Observaciones                                                                                                                               |
| ---------- | ---------------------------------- | ------------------------- | ----------------- | ---------------------- | ----------------------------------------------------------------------------------------------------- | ------------------ | ----------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| DWEC-S3-01 | productos-buscador.png             | evidencias/dwec/sprint-3/ | Captura navegador | Buscador React         | Buscador con resultados ("zapatillas") — tienda completa visible                                      | §5 DWEC / Buscador | Captura manual anterior | **Principal para memoria**            | Más completa que CF-07: muestra resultado con contexto de tienda completo                                                                   |
| DWEC-S3-02 | productos-filtrados.png            | evidencias/dwec/sprint-3/ | Captura navegador | Buscador React         | Productos filtrados por categoría                                                                     | §5 DWEC / Buscador | Captura manual anterior | Válida para memoria                   | Complementa DWEC-S3-01 mostrando filtrado por categoría                                                                                     |
| DWEC-S3-03 | productos-no-encontrado.png        | evidencias/dwec/sprint-3/ | Captura navegador | Buscador React         | Sin resultados para búsqueda no encontrada                                                            | §5 DWEC / Buscador | Captura manual anterior | Válida para memoria                   | Complementa DWEC-S3-08. Ambas muestran el mismo estado                                                                                      |
| DWEC-S3-04 | Productos-paginados2.png           | evidencias/dwec/sprint-3/ | Captura navegador | Tienda React           | Segunda página de productos (paginación funcional)                                                    | §5 DWEC / Tienda   | Captura manual anterior | Principal para memoria                | Evidencia única de paginación. No tiene equivalente nuevo                                                                                   |
| DWEC-S3-05 | Formulario_React.png               | evidencias/dwec/sprint-3/ | Captura navegador | Formulario React       | Formulario de contacto en React                                                                       | §5 DWEC / Forms    | Captura manual anterior | Principal para memoria                | Demuestra formulario React funcionando                                                                                                      |
| DWEC-S3-06 | Regresion_cookies_preferencias.png | evidencias/dwec/sprint-3/ | Captura navegador | Cookies / Preferencias | Test de regresión: cookies y preferencias funcionando                                                 | §5 DWEC / Cookies  | Captura manual anterior | Principal para memoria                | Evidencia única. No tiene equivalente nuevo                                                                                                 |
| DWEC-S3-07 | Nuevos-usuarios.png                | evidencias/dwec/sprint-3/ | Captura navegador | Admin React            | Panel admin mostrando gestión de nuevos usuarios                                                      | §5 DWEC / Admin    | Captura manual anterior | Principal para memoria                | Complementa CF-15. Muestra datos reales de usuarios                                                                                         |
| DWEC-S3-08 | Buscador_sin_resultados.png        | evidencias/dwec/sprint-3/ | Captura navegador | Buscador React         | Buscador sin resultados — usuario logueado, texto de búsqueda claro                                   | §5 DWEC / Buscador | Captura manual anterior | **Principal para memoria**            | Más limpia que CF-08: usuario logueado, encuadre centrado, sin distracción del video                                                        |
| DWEC-S3-09 | Carrito-React.png                  | evidencias/dwec/sprint-3/ | Captura navegador | Carrito React          | Carrito con producto real (Camiseta deportiva), cantidad, total 119.60 EUR y botón "Finalizar pedido" | §5 DWEC / Carrito  | Captura manual anterior | **PRINCIPAL DEFINITIVA para memoria** | La única captura que demuestra el carrito funcionando con producto, precio y total. CF-11 muestra estado vacío/error. Esta es insustituible |
| DWEC-S3-10 | Carrito_añadir_React.png           | evidencias/dwec/sprint-3/ | Captura navegador | Carrito React          | Confirmación "Añadido al carrito" tras acción del usuario                                             | §5 DWEC / Carrito  | Captura manual anterior | **Principal para memoria**            | Única evidencia del mensaje de confirmación de añadir al carrito. No tiene equivalente nuevo                                                |
| DWEC-S3-11 | Perfil-React.png                   | evidencias/dwec/sprint-3/ | Captura navegador | Perfil React           | Perfil de usuario regular con datos personales                                                        | §5 DWEC / Perfil   | Captura manual anterior | Apoyo secundario                      | Contiene datos personales reales de test. Para el cuerpo, CF-14 (admin con historial) es más completa                                       |
| DWEC-S3-12 | Perfil_usuario_admin.png           | evidencias/dwec/sprint-3/ | Captura navegador | Perfil React / Admin   | Perfil de usuario con rol admin visible                                                               | §5 DWEC / Perfil   | Captura manual anterior | Válida para memoria                   | Complementa CF-14. Muestra diferenciación de roles                                                                                          |

#### API y base de datos — DWES

| ID      | Archivo        | Ruta             | Tipo            | Módulo      | Qué demuestra                                                                  | Apartado memoria | Origen                  | Estado                                          | Observaciones                                                                                                 |
| ------- | -------------- | ---------------- | --------------- | ----------- | ------------------------------------------------------------------------------ | ---------------- | ----------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| DWES-01 | diagramaER.png | evidencias/dwes/ | Diagrama BD     | DWES / BBDD | Diagrama entidad-relación de la BD                                             | §9 DWES / BBDD   | Captura manual anterior | Principal para memoria                          | Complementa FIG-10. Puede ser la versión más detallada                                                        |
| DWES-02 | postman1.png   | evidencias/dwes/ | Captura Postman | API REST    | Ejecución de colección Postman: GET /api/productos OK, errores 403/401 en POST | §9 API / Postman | Captura manual anterior | **PRINCIPAL para memoria (única Postman real)** | Es la ÚNICA captura que muestra Postman real. Las capturas de 06-postman/ son API desde navegador, no Postman |
| DWES-03 | postman2.png   | evidencias/dwes/ | Captura Postman | API REST    | Segunda captura de ejecución Postman                                           | §9 API / Postman | Captura manual anterior | Principal para memoria                          | Complementa DWES-02. Postman real                                                                             |

---

### 1.4 Wireframes — `docs/03-diw/wireframes/`

| ID    | Archivo                                 | Tipo      | Módulo               | Qué demuestra                         | Apartado memoria    | Origen    | Estado                                                           |
| ----- | --------------------------------------- | --------- | -------------------- | ------------------------------------- | ------------------- | --------- | ---------------------------------------------------------------- |
| WF-01 | wireframe-landing-desktop.png           | Wireframe | DIW / Landing        | Diseño planificado de landing desktop | §6 DIW / Diseño     | Wireframe | Principal para memoria (uno de los más representativos)          |
| WF-02 | wireframe-landing-mobile.png            | Wireframe | DIW / Responsive     | Diseño planificado de landing mobile  | §6 DIW / Responsive | Wireframe | Principal para memoria (demuestra diseño responsive planificado) |
| WF-03 | wireframe-tienda-desktop.png            | Wireframe | DIW / Tienda         | Diseño planificado de tienda desktop  | §6 DIW / Diseño     | Wireframe | Principal para memoria (relevante para cuerpo)                   |
| WF-04 | wireframe-tienda-mobile.png             | Wireframe | DIW / Responsive     | Diseño planificado de tienda mobile   | §6 DIW / Responsive | Wireframe | Válida para anexo                                                |
| WF-05 | wireframe-admin-desktop.png             | Wireframe | DIW / Admin          | Diseño planificado del panel admin    | §6 DIW / Diseño     | Wireframe | Válida para anexo                                                |
| WF-06 | wireframe-admin-mobile.png              | Wireframe | DIW / Responsive     | Admin en mobile planificado           | §6 DIW / Responsive | Wireframe | Válida para anexo                                                |
| WF-07 | wireframe-about-desktop.png             | Wireframe | DIW / Sobre nosotros | Página sobre nosotros planificada     | §6 DIW / Diseño     | Wireframe | Válida para anexo                                                |
| WF-08 | wireframe-about-mobile.png              | Wireframe | DIW / Responsive     | Sobre nosotros mobile                 | §6 DIW / Responsive | Wireframe | Válida para anexo                                                |
| WF-09 | wireframe-actividades-desktop.png       | Wireframe | DIW / Actividades    | Listado actividades desktop           | §6 DIW / Diseño     | Wireframe | Válida para anexo                                                |
| WF-10 | wireframe-actividades-mobile.png        | Wireframe | DIW / Responsive     | Actividades mobile                    | §6 DIW / Responsive | Wireframe | Válida para anexo                                                |
| WF-11 | wireframe-actividad-detalle-desktop.png | Wireframe | DIW / Actividades    | Detalle actividad desktop             | §6 DIW / Diseño     | Wireframe | Válida para anexo                                                |
| WF-12 | wireframe-actividad-detalle-mobile.png  | Wireframe | DIW / Responsive     | Detalle actividad mobile              | §6 DIW / Responsive | Wireframe | Válida para anexo                                                |
| WF-13 | wireframe-rutas-desktop.png             | Wireframe | DIW / Rutas          | Listado rutas desktop                 | §6 DIW / Diseño     | Wireframe | Válida para anexo                                                |
| WF-14 | wireframe-rutas-mobile.png              | Wireframe | DIW / Responsive     | Rutas mobile                          | §6 DIW / Responsive | Wireframe | Válida para anexo                                                |
| WF-15 | wireframe-ruta-detalle-desktop.png      | Wireframe | DIW / Rutas          | Detalle ruta desktop                  | §6 DIW / Diseño     | Wireframe | Válida para anexo                                                |
| WF-16 | wireframe-ruta-detalle-mobile.png       | Wireframe | DIW / Responsive     | Detalle ruta mobile                   | §6 DIW / Responsive | Wireframe | Válida para anexo                                                |
| WF-17 | wireframe-producto-desktop.png          | Wireframe | DIW / Tienda         | Detalle producto desktop              | §6 DIW / Diseño     | Wireframe | Válida para anexo                                                |
| WF-18 | wireframe-producto-mobile.png           | Wireframe | DIW / Responsive     | Detalle producto mobile               | §6 DIW / Responsive | Wireframe | Válida para anexo                                                |

---

### 1.5 Recursos de identidad visual — `docs/03-diw/media/`

| ID       | Archivo                       | Tipo              | Módulo           | Qué demuestra                                | Apartado memoria     | Origen      | Estado                                      |
| -------- | ----------------------------- | ----------------- | ---------------- | -------------------------------------------- | -------------------- | ----------- | ------------------------------------------- |
| MEDIA-01 | logo.png                      | Recurso DIW       | Identidad visual | Logotipo oficial de PacePal                  | §6 DIW / Identidad   | Recurso DIW | Principal para memoria                      |
| MEDIA-02 | paletaIdentidadVisual.png     | Recurso DIW       | Identidad visual | Paleta de colores corporativa completa       | §6 DIW / Identidad   | Recurso DIW | Principal para memoria                      |
| MEDIA-03 | paleta.png                    | Recurso DIW       | Identidad visual | Paleta simplificada                          | §6 DIW / Identidad   | Recurso DIW | Apoyo secundario (MEDIA-02 es más completa) |
| MEDIA-04 | tipografiaIdentidadVisual.png | Recurso DIW       | Identidad visual | Tipografías corporativas con ejemplos        | §6 DIW / Identidad   | Recurso DIW | Principal para memoria                      |
| MEDIA-05 | pacepal_iconografia.png       | Recurso DIW       | Identidad visual | Sistema de iconografía de la aplicación      | §6 DIW / Identidad   | Recurso DIW | Principal para memoria                      |
| MEDIA-06 | tarjetaActividadEjemplo.png   | Recurso DIW       | Identidad visual | Ejemplo de tarjeta de actividad (componente) | §6 DIW / Componentes | Recurso DIW | Válida para memoria                         |
| MEDIA-07 | tarjetaProductoEjemplo.png    | Recurso DIW       | Identidad visual | Ejemplo de tarjeta de producto (componente)  | §6 DIW / Componentes | Recurso DIW | Válida para memoria                         |
| MEDIA-08 | escena1.png                   | Recurso DIW       | Identidad visual | Escena de identidad visual / branding        | §6 DIW / Branding    | Recurso DIW | Válida para anexo                           |
| MEDIA-09 | escena2.png                   | Recurso DIW       | Identidad visual | Escena de identidad visual / branding        | §6 DIW / Branding    | Recurso DIW | Válida para anexo                           |
| MEDIA-10 | escena3.png                   | Recurso DIW       | Identidad visual | Escena de identidad visual / branding        | §6 DIW / Branding    | Recurso DIW | Válida para anexo                           |
| MEDIA-11 | escena4.png                   | Recurso DIW       | Identidad visual | Escena de identidad visual / branding        | §6 DIW / Branding    | Recurso DIW | Válida para anexo                           |
| MEDIA-12 | pacepal_video_base_20s.mp4    | Video recurso DIW | Identidad visual | Video base corporativo de 20 segundos        | §7 Multimedia / DIW  | Recurso DIW | Apoyo secundario (no es captura estática)   |

---

### 1.6 Sostenibilidad — `docs/07-sostenibilidad/`

| ID      | Archivo                | Tipo              | Módulo         | Qué demuestra                             | Apartado memoria           | Origen                 | Estado            |
| ------- | ---------------------- | ----------------- | -------------- | ----------------------------------------- | -------------------------- | ---------------------- | ----------------- |
| SOST-01 | pacepalA3.png          | Material concurso | Sostenibilidad | Cartel A3 para concurso de sostenibilidad | §10 Sostenibilidad / Anexo | Recurso sostenibilidad | Válida para anexo |
| SOST-02 | postalPacePalCaraA.png | Material concurso | Sostenibilidad | Postal cara A para concurso               | §10 Sostenibilidad / Anexo | Recurso sostenibilidad | Válida para anexo |
| SOST-03 | postalPacePalCaraB.png | Material concurso | Sostenibilidad | Postal cara B para concurso               | §10 Sostenibilidad / Anexo | Recurso sostenibilidad | Válida para anexo |

---

### 1.7 Tests y pruebas — `tests/`

| ID      | Archivo                                              | Tipo               | Módulo       | Qué demuestra                                           | Apartado memoria       | Origen             | Estado                       |
| ------- | ---------------------------------------------------- | ------------------ | ------------ | ------------------------------------------------------- | ---------------------- | ------------------ | ---------------------------- |
| TEST-01 | tests/funcionales/\*.md (5 archivos)                 | Prueba documentada | DWEC / Tests | Casos de prueba funcionales: registro, login, tarjeta   | §11 Pruebas            | Prueba documentada | Principal para memoria       |
| TEST-02 | tests/react-sprint-3/\*.md (8 archivos)              | Prueba documentada | DWEC / React | Casos de prueba React: buscador, carrito, perfil, admin | §11 Pruebas            | Prueba documentada | Principal para memoria       |
| TEST-03 | tests/postman/pacepal.postman_collection.json        | Colección Postman  | API / DWES   | Colección Postman ejecutable con endpoints              | §9 API / Anexo         | Prueba documentada | Principal para anexo técnico |
| TEST-04 | tests/postman/pacepal-local.postman_environment.json | Config Postman     | API / DWES   | Entorno Postman para localhost                          | §9 API / Anexo         | Prueba documentada | Principal para anexo técnico |
| TEST-05 | tests/selenium/test-buscador.js                      | Script Selenium    | DWEC         | Script de prueba automática del buscador                | §11 Pruebas / Selenium | Prueba documentada | Válida para memoria          |
| TEST-06 | tests/selenium/test-registro.js                      | Script Selenium    | DWEC         | Script de prueba automática del registro                | §11 Pruebas / Selenium | Prueba documentada | Válida para memoria          |

---

## TAREA 2 — Comparación de capturas duplicadas o equivalentes

### 2.1 Tienda React con productos

| Criterio               | DWEC-S3-01 `productos-buscador.png` (hist.)                           | CF-05 `react-tienda-productos.png` (nueva)      |
| ---------------------- | --------------------------------------------------------------------- | ----------------------------------------------- |
| Contenido              | Tienda con buscador y productos con usuario logueado                  | Tienda con productos + video visible, sin login |
| Encuadre               | Completo, bien centrado                                               | Completo, muestra más contexto (video)          |
| Estado de login        | Usuario logueado                                                      | No logueado ("Iniciar sesión")                  |
| Valor adicional        | Muestra buscador integrado en tienda                                  | Muestra video integrado en tienda               |
| **Mejor para memoria** | **DWEC-S3-01** — usuario logueado, más natural                        | Válida como apoyo o para Multimedia §7          |
| **Mejor para anexo**   | Ambas válidas en sus contextos                                        | —                                               |
| Motivo                 | La captura con usuario logueado demuestra mejor el estado real de uso | —                                               |

### 2.2 Buscador con resultados

| Criterio               | DWEC-S3-01 `productos-buscador.png` (hist.)              | CF-07 `react-buscador-resultados.png` (nueva) |
| ---------------------- | -------------------------------------------------------- | --------------------------------------------- |
| Término buscado        | "zapatillas"                                             | "zapatillas"                                  |
| Resultados             | Productos filtrados visibles                             | Productos filtrados visibles                  |
| Login                  | Sí                                                       | No                                            |
| **Mejor para memoria** | **DWEC-S3-01**                                           | Apoyo secundario                              |
| Motivo                 | Usuario logueado, evidencia más completa del estado real | —                                             |

### 2.3 Buscador sin resultados

| Criterio               | DWEC-S3-08 `Buscador_sin_resultados.png` (hist.) | CF-08 `react-buscador-sin-resultados.png` (nueva) | DWEC-S3-03 `productos-no-encontrado.png` (hist.) |
| ---------------------- | ------------------------------------------------ | ------------------------------------------------- | ------------------------------------------------ |
| Término                | "xyzproductoinexistente"                         | "zzz_inexistente"                                 | Término no visible                               |
| Mensaje                | "No se encontraron productos…" claro             | "No se encontraron productos…"                    | Similar                                          |
| Login                  | Usuario logueado                                 | No logueado                                       | —                                                |
| Encuadre               | Centrado, limpio                                 | Incluye sección de video                          | —                                                |
| **Mejor para memoria** | **DWEC-S3-08**                                   | Apoyo secundario                                  | Apoyo secundario                                 |
| Motivo                 | Más limpia, usuario logueado, encuadre superior  | —                                                 | —                                                |

### 2.4 Carrito React

| Criterio               | DWEC-S3-09 `Carrito-React.png` (hist.)                                                         | DWEC-S3-10 `Carrito_añadir_React.png` (hist.)   | CF-09 `react-carrito-con-producto.png` (nueva) | CF-11 `react-carrito-total.png` (nueva)          |
| ---------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------- | ---------------------------------------------- | ------------------------------------------------ |
| Contenido              | Carrito con Camiseta deportiva, qty 4, total 119.60 EUR, botón Finalizar                       | Confirmación "Añadido al carrito."              | Tienda con botón "Error" en primer producto    | "Tu carrito está vacío" + "Acceso no autorizado" |
| Estado funcional       | CORRECTO — carrito con producto real                                                           | CORRECTO — flujo añadir                         | ERROR CORS 403                                 | SESIÓN CADUCADA / ERROR                          |
| **Mejor para memoria** | **DWEC-S3-09 PRINCIPAL** (único carrito real)                                                  | **DWEC-S3-10 PRINCIPAL** (único mensaje añadir) | NO usar como evidencia principal               | NO usar como evidencia principal                 |
| Motivo                 | Las nuevas capturas capturaron estados erróneos del carrito. Las históricas son insustituibles | —                                               | —                                              | —                                                |

### 2.5 Formulario y autenticación

| Criterio               | DWEC-S1-04 `registro-correcto.png` (hist.)                       | DWEC-S1-05 `registro-error.png` (hist.) | DWEC-S1-02 `login-correcto.png` (hist.) | CF-12 `react-login.png` (nueva)           |
| ---------------------- | ---------------------------------------------------------------- | --------------------------------------- | --------------------------------------- | ----------------------------------------- |
| Contenido              | Registro exitoso con mensaje                                     | Registro con errores                    | Login exitoso                           | Formulario login React                    |
| Completitud            | Mensaje de éxito claro                                           | Errores claros                          | Post-login                              | Solo formulario                           |
| **Mejor para memoria** | **Principal**                                                    | **Principal**                           | **Principal**                           | **Principal** (formulario React distinto) |
| Observación            | Distintos momentos del flujo. Todas necesarias y complementarias | —                                       | —                                       | CF-12 muestra la versión React del login  |

### 2.6 Perfil usuario

| Criterio               | DWEC-S3-11 `Perfil-React.png` (hist.)                                   | CF-14 `react-perfil-usuario.png` (nueva)                  | DWEC-S3-12 `Perfil_usuario_admin.png` (hist.) |
| ---------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------- |
| Usuario                | Regular (Alejandro Pacheco)                                             | Admin (admin@pacepal.com) con historial pedidos           | Admin con rol visible                         |
| Datos sensibles        | Nombre real, email, DNI — datos de test                                 | Email genérico admin                                      | Menor exposición                              |
| Historial pedidos      | No visible                                                              | Sí visible — confirma carrito                             | Parcial                                       |
| **Mejor para memoria** | Apoyo secundario                                                        | **CF-14 PRINCIPAL** (más completa, confirma carrito real) | Válida para memoria                           |
| Motivo                 | CF-14 muestra historial de pedidos, demostrando que el carrito funcionó | —                                                         | —                                             |

### 2.7 Panel Admin

| Criterio               | DWEC-S3-07 `Nuevos-usuarios.png` (hist.)                              | CF-15 `react-panel-admin.png` (nueva) |
| ---------------------- | --------------------------------------------------------------------- | ------------------------------------- |
| Contenido              | Listado usuarios nuevos con datos                                     | Panel admin con opciones de gestión   |
| Complementariedad      | Muestra datos de usuarios reales                                      | Muestra la interfaz del panel         |
| **Mejor para memoria** | **Ambas principales** — son complementarias                           | —                                     |
| Motivo                 | Una muestra la interfaz del panel, la otra muestra datos reales en él | —                                     |

### 2.8 phpMyAdmin — BD pacepal

| Criterio               | DEP-03 `03-phpmyadmin-bd-pacepal.png` (hist.)                             | CF-03 `despliegue-phpmyadmin-bbdd-pacepal.png` (nueva) |
| ---------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------ |
| Tablas                 | 9 tablas, 38 filas, 5 usuarios                                            | 9 tablas visibles, 2 usuarios                          |
| Sidebar                | Solo BD del proyecto — limpia                                             | Expone otras BBDD del sistema (otros proyectos)        |
| phpMyAdmin version     | Anterior                                                                  | Más actual                                             |
| **Mejor para memoria** | **DEP-03 PRINCIPAL**                                                      | Apoyo secundario o descartar                           |
| Motivo                 | DEP-03 no expone otros proyectos del sistema. Es más profesional y limpia |

### 2.9 Despliegue local — App en localhost

| Criterio               | DEP-04 `04-app-localhost-home.png` (hist.)                     | CF-01 `despliegue-app-localhost.png` (nueva) |
| ---------------------- | -------------------------------------------------------------- | -------------------------------------------- |
| Contenido              | Landing PacePal en localhost                                   | Landing PacePal en localhost                 |
| **Mejor para memoria** | Apoyo                                                          | **CF-01**                                    |
| Motivo                 | CF-01 es más reciente y muestra el estado final del despliegue |

### 2.10 Accesibilidad — Lighthouse vs capturas nuevas

| Criterio               | DIW-S2-01 `lighthouse-accesibilidad.png` (hist.)                                 | DIW-S2-02 `wave-analisis.png` (hist.) | CF-24 `accesibilidad-boton-voz.png` (nueva)        | CF-25 `accesibilidad-foco-teclado.png` (nueva) |
| ---------------------- | -------------------------------------------------------------------------------- | ------------------------------------- | -------------------------------------------------- | ---------------------------------------------- |
| Herramienta            | Lighthouse — puntuación 100                                                      | WAVE                                  | — (landing page, mal clasificada)                  | Foco teclado (Tab)                             |
| Valor de defensa       | Muy alto — puntuación objetiva                                                   | Alto — herramienta WCAG               | Nulo como accesibilidad                            | Medio — muestra outline de foco                |
| **Mejor para memoria** | **PRINCIPAL ABSOLUTA**                                                           | **Principal**                         | **No válida para accesibilidad** — repetir captura | Principal como evidencia de foco teclado       |
| Motivo                 | Lighthouse 100 es el argumento más sólido posible. Las nuevas no sustituyen esto | —                                     | —                                                  | —                                              |

### 2.11 API / Postman — Clasificación correcta

| Criterio               | DWES-02 `postman1.png` (hist.)     | DWES-03 `postman2.png` (hist.) | CF-26 a CF-29 (06-postman/) nuevas                        |
| ---------------------- | ---------------------------------- | ------------------------------ | --------------------------------------------------------- |
| Herramienta real       | Postman (aplicación cliente)       | Postman (aplicación cliente)   | Navegador web (no Postman)                                |
| Clasificación correcta | **Evidencia Postman real**         | **Evidencia Postman real**     | **API directa desde navegador**                           |
| **Mejor para memoria** | **PRINCIPAL — única Postman real** | **Principal**                  | Válidas como "API desde navegador" (no llamarlas Postman) |

---

## TAREA 3 — Clasificación de diagramas finales (`docs/documentacion-final/figuras/`)

| Archivo                                 | Apartado recomendado                       | Cuerpo o anexo   | Sustituye Mermaid                                | Renombrado futuro recomendado   | Fuente .drawio             |
| --------------------------------------- | ------------------------------------------ | ---------------- | ------------------------------------------------ | ------------------------------- | -------------------------- |
| **Diagrama de Gantt.png**               | §1 Gestión del proyecto / Metodología ágil | Cuerpo principal | Sí (si había Mermaid de Gantt)                   | `fig-01-gantt.png`              | Conservar obligatoriamente |
| **Diagrama de casos de uso.png**        | §2 Análisis / Especificación de requisitos | Cuerpo principal | Sí (sustituyó Mermaid `classDiagram` de actores) | `fig-02-casos-uso.png`          | Conservar obligatoriamente |
| **Diagrama de clases simplificado.png** | §3 Arquitectura / Modelo de datos          | Cuerpo principal | Sí                                               | `fig-03-clases.png`             | Conservar obligatoriamente |
| **Diagrama de componentes.png**         | §3 Arquitectura / Frontend React           | Cuerpo principal | Sí                                               | `fig-04-componentes-react.png`  | Conservar obligatoriamente |
| **Esquema de arquitectura general.png** | §3 Arquitectura / Stack tecnológico        | Cuerpo principal | Sí                                               | `fig-05-arquitectura.png`       | Conservar obligatoriamente |
| **Esquema responsive modular.png**      | §6 Diseño / CSS modular responsive         | Cuerpo principal | Sí                                               | `fig-06-responsive-modular.png` | Conservar obligatoriamente |
| **Flujo buscador AJAX.png**             | §5 DWEC / Buscador AJAX                    | Cuerpo principal | Sí (Mermaid `sequenceDiagram` de búsqueda)       | `fig-07-flujo-buscador.png`     | Conservar obligatoriamente |
| **Flujo carrito.png**                   | §5 DWEC / Carrito React                    | Cuerpo principal | Sí                                               | `fig-08-flujo-carrito.png`      | Conservar obligatoriamente |
| **Flujo loginSesionLogOut.png**         | §5 Auth / §9 DWES — Sesiones               | Cuerpo principal | Sí                                               | `fig-09-flujo-auth.png`         | Conservar obligatoriamente |
| **Modelo relacional simplificado.png**  | §9 DWES / Base de datos                    | Cuerpo principal | Sí (Mermaid `erDiagram`)                         | `fig-10-modelo-relacional.png`  | Conservar obligatoriamente |

> **Nota importante sobre fuentes .drawio:** No se han localizado los archivos fuente `.drawio` en el repositorio. Si existen en local, deben copiarse a `docs/documentacion-final/figuras/fuentes/` antes de finalizar el proyecto. Sin las fuentes, los diagramas no son editables.

> **Todos los 10 diagramas van al cuerpo principal de la memoria**, no a anexos, ya que cada uno cubre un apartado técnico distinto imprescindible.

---

## TAREA 4 — Clasificación de wireframes y diseños

### Wireframes para el CUERPO PRINCIPAL de la memoria (máximo 4)

Se recomienda incluir en el cuerpo solo los más representativos para no sobrecargar el texto:

| #   | Archivo                         | Justificación                                                |
| --- | ------------------------------- | ------------------------------------------------------------ |
| 1   | `wireframe-landing-desktop.png` | Página principal — más visible y representativa del proyecto |
| 2   | `wireframe-landing-mobile.png`  | Demuestra el diseño responsive planificado desde el inicio   |
| 3   | `wireframe-tienda-desktop.png`  | Módulo principal del proyecto (tienda con buscador)          |
| 4   | `wireframe-admin-desktop.png`   | Panel de administración — módulo técnicamente relevante      |

### Wireframes para ANEXOS

Todos los 14 wireframes restantes van a anexos organizados por vista:

- Sobre nosotros: desktop + mobile
- Actividades: desktop + mobile + detalle desktop + detalle mobile
- Rutas: desktop + mobile + detalle desktop + detalle mobile
- Tienda (detalle producto): desktop + mobile
- Admin: mobile
- Tienda: mobile

### Recursos de identidad visual para la memoria

| Recurso                         | Ubicación en memoria                 | Justificación                                                             |
| ------------------------------- | ------------------------------------ | ------------------------------------------------------------------------- |
| `logo.png`                      | §6 DIW — Identidad visual            | Logo oficial — imprescindible                                             |
| `paletaIdentidadVisual.png`     | §6 DIW — Identidad visual            | Paleta completa — más informativa que `paleta.png`                        |
| `tipografiaIdentidadVisual.png` | §6 DIW — Identidad visual            | Tipografías corporativas                                                  |
| `pacepal_iconografia.png`       | §6 DIW — Identidad visual            | Sistema de iconos                                                         |
| `tarjetaActividadEjemplo.png`   | §6 DIW — Componentes                 | Ejemplo de componente de tarjeta                                          |
| `tarjetaProductoEjemplo.png`    | §6 DIW — Componentes                 | Ejemplo de componente de tarjeta producto                                 |
| `escena1.png` – `escena4.png`   | Anexo — Material de identidad visual | Las escenas sirven de contexto de branding pero no para el cuerpo técnico |

---

## TAREA 5 — Clasificación de evidencias de accesibilidad

### Herramientas de evaluación (evidencias históricas — sprint 2)

| Evidencia                      | Herramienta                | Qué mide                                                          | Estado                 | Uso recomendado                        |
| ------------------------------ | -------------------------- | ----------------------------------------------------------------- | ---------------------- | -------------------------------------- |
| `lighthouse-accesibilidad.png` | Google Lighthouse          | Puntuaciones globales: Accesibilidad 100, SEO 100, Rendimiento 96 | **PRINCIPAL ABSOLUTA** | Cuerpo §8 — es el argumento más sólido |
| `wave-analisis.png`            | WAVE (WebAIM)              | Errores y alertas de accesibilidad WCAG                           | **Principal**          | Cuerpo §8 — complementa Lighthouse     |
| `WCAG_Contrast_Checker.png`    | Herramienta contraste WCAG | Ratio de contraste color/fondo (AA/AAA)                           | **Principal**          | Cuerpo §8 — evidencia de contraste     |

### Nuevas capturas de sprint 3

| Evidencia                        | Estado              | Clasificación correcta                                                                                                                                                         |
| -------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accesibilidad-boton-voz.png`    | **Mal clasificada** | Muestra landing page con admin logueado. NO muestra botón de accesibilidad por voz. Útil como "landing con roles" pero NO como evidencia de accesibilidad. **Repetir captura** |
| `accesibilidad-foco-teclado.png` | **Principal**       | Muestra foco visual por teclado (outline visible en elemento del header). Evidencia de navegación por teclado                                                                  |

### Sobre la "navegación por voz"

> **NOTA IMPORTANTE:** No se ha demostrado visualmente la navegación por voz mediante captura estática. La presencia del botón de accesibilidad en el código (implementado en `js/utils/accesibilidad.js` o similar) no es suficiente como evidencia visual.
>
> Clasificación correcta: **"Funcionalidad implementada en código, pero evidencia visual de activación de la voz pendiente o difícil de demostrar mediante captura estática."**
>
> Para la memoria: mencionar la implementación técnica y referir al código. No afirmar que se ha demostrado visualmente la voz si no hay captura de la voz activada con transcripción o feedback visible.

---

## TAREA 6 — Enfoque correcto de API y Postman

### Clasificación definitiva

| Captura                                                    | Clasificación CORRECTA                                                | Clasificación INCORRECTA a evitar |
| ---------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------- |
| `capturas-finales/06-postman/api-get-health.png`           | **API directa desde navegador** — respuesta JSON en tab del navegador | ~~Evidencia Postman~~             |
| `capturas-finales/06-postman/api-get-productos-raw.png`    | **API directa desde navegador**                                       | ~~Evidencia Postman~~             |
| `capturas-finales/06-postman/api-get-producto-detalle.png` | **API directa desde navegador**                                       | ~~Evidencia Postman~~             |
| `capturas-finales/06-postman/api-get-session.png`          | **API directa desde navegador**                                       | ~~Evidencia Postman~~             |
| `evidencias/dwes/postman1.png`                             | **Evidencia Postman real** — muestra Postman Runner con resultados    | ✅ Usar como Postman              |
| `evidencias/dwes/postman2.png`                             | **Evidencia Postman real**                                            | ✅ Usar como Postman              |

> **Nota sobre el nombre de la carpeta `06-postman/`:** La carpeta conserva el nombre histórico `06-postman`, pero las capturas concretas que contiene (`api-get-*.png`) corresponden a **API directa desde navegador**, no a Postman. El nombre de la carpeta no se modifica (restricción del proyecto), pero en la documentación deben citarse correctamente como "API directa desde navegador".

### Evidencias Postman pendientes

| Endpoint      | Método   | Estado           | Cómo obtener                                                               |
| ------------- | -------- | ---------------- | -------------------------------------------------------------------------- |
| /api/login    | POST     | Pendiente manual | Usar Postman con colección `tests/postman/pacepal.postman_collection.json` |
| /api/carrito  | POST     | Pendiente manual | Requiere sesión activa — usar Postman con cookie de sesión                 |
| /api/admin/\* | GET/POST | Pendiente manual | Requiere rol admin — usar Postman con sesión admin                         |

---

## TAREA 7 — Enfoque correcto de consola/DevTools

### Clasificación definitiva de capturas en `07-consola/`

| Captura                              | Clasificación CORRECTA                                           | Clasificación INCORRECTA a evitar   |
| ------------------------------------ | ---------------------------------------------------------------- | ----------------------------------- |
| `consola-app-inicio-sin-errores.png` | **App cargada en navegador** — landing page con admin logueado   | ~~DevTools Console sin errores~~    |
| `consola-app-tienda-cargada.png`     | **App cargada en navegador** — tienda con video y admin logueado | ~~DevTools Console tienda cargada~~ |
| `api-get-productos.png`              | **Respuesta API directa** (o ruta no encontrada) — revisar       | ~~DevTools Network~~                |
| `api-respuesta-get-productos.png`    | **Respuesta API directa** — revisar si endpoint responde bien    | ~~DevTools Network~~                |

> **Nota sobre el nombre de la carpeta `07-consola/`:** La carpeta conserva el nombre histórico. Las capturas que contiene son de la **aplicación cargada en el navegador** y de **respuestas API directas**, no de DevTools Console ni DevTools Network.

### Evidencias DevTools pendientes (requieren captura manual)

| Tipo             | Descripción                                                   | Cómo obtener                                            |
| ---------------- | ------------------------------------------------------------- | ------------------------------------------------------- |
| DevTools Console | Sin errores en consola al cargar la app                       | Chrome F12 > Console > cargar app > screenshot          |
| DevTools Network | Llamada GET /api/productos con código 200 y JSON en respuesta | Chrome F12 > Network > cargar tienda > click en request |

---

## TAREA 8 — Multimedia

### Vídeo

| Evidencia                        | Archivo referenciado            | Estado visual                                        | Clasificación                    |
| -------------------------------- | ------------------------------- | ---------------------------------------------------- | -------------------------------- |
| `multimedia-video-tienda.png`    | `img/landing/pacepalTienda.mp4` | **Vídeo visible con controles (0:00/0:08) — VÁLIDA** | Principal para §7 Multimedia     |
| `consola-app-tienda-cargada.png` | Mismo video en la tienda        | Vídeo visible con controles, con admin logueado      | Apoyo secundario para Multimedia |

> **Valoración del vídeo:** La captura `multimedia-video-tienda.png` muestra claramente el elemento `<video>` con controles de reproducción integrados en la sección de la tienda. **Es evidencia válida y suficiente**. No es necesario repetir esta captura, salvo para mostrar el video reproduciéndose (no en pausa 0:00).

### Audio

| Evidencia                       | Archivo referenciado                  | Estado visual                                                               | Clasificación       |
| ------------------------------- | ------------------------------------- | --------------------------------------------------------------------------- | ------------------- |
| `multimedia-audio-contacto.png` | `img/audio/pacepal-contacto.mp3/.ogg` | **Audio NO visible en la captura** — solo muestra el formulario de contacto | **Repetir captura** |

> **Diagnóstico audio:** La captura muestra el formulario de contacto pero los controles `<audio>` no son visibles. Puede ser que:
>
> - El reproductor de audio esté más abajo en la página (scroll necesario)
> - El elemento audio exista en el código pero no esté visible en la sección capturada
> - El audio esté en una sección diferente de la página de contacto
>
> **Acción recomendada:** Capturar manualmente la sección donde `<audio controls>` es visible. Si el audio existe como archivo (`pacepal-contacto.mp3`) pero no está integrado visiblemente en ninguna página en producción, documentar como: "Archivo de audio preparado (`pacepal-contacto.mp3`, `pacepal-contacto.ogg`). Integración como elemento `<audio controls>` pendiente de verificar en producción."

### Archivos multimedia en el proyecto

| Archivo                      | Ubicación            | Tipo             | Estado                                              |
| ---------------------------- | -------------------- | ---------------- | --------------------------------------------------- |
| `pacepalTienda.mp4`          | `img/landing/`       | Video — tienda   | Integrado en ShopPage.jsx, visible en captura CF-22 |
| `pacepal-contacto.mp3`       | `img/audio/`         | Audio — contacto | Archivo existe; integración visual no verificada    |
| `pacepal-contacto.ogg`       | `img/audio/`         | Audio — contacto | Archivo existe; integración visual no verificada    |
| `pacepal_video_base_20s.mp4` | `docs/03-diw/media/` | Video base DIW   | Material de identidad visual, no integrado en app   |

---

## TAREA 9 — Responsive

### Capturas de responsive nuevas

| Captura                          | Viewport | Contenido visible                        | Estado                                        |
| -------------------------------- | -------- | ---------------------------------------- | --------------------------------------------- |
| `responsive-desktop-landing.png` | 1280×900 | Landing completa                         | **Principal** — demuestra layout desktop      |
| `responsive-tablet-landing.png`  | 768×1024 | Landing adaptada tablet                  | **Principal** — demuestra adaptación tablet   |
| `responsive-mobile-landing.png`  | 390×844  | Landing en mobile                        | **Válida**                                    |
| `responsive-tablet-tienda.png`   | 768×1024 | Tienda en tablet                         | **Válida**                                    |
| `responsive-mobile-tienda.png`   | 390×844  | Tienda en mobile — **contenido cortado** | **Revisar** — hay overflow horizontal visible |

### Wireframes responsive

Los wireframes existentes en `docs/03-diw/wireframes/` demuestran el **diseño responsive planificado** (no la implementación real). Son evidencia de **diseño**, no de **funcionalidad**.

| Tipo de evidencia                   | Fuente                                    | Qué demuestra                                |
| ----------------------------------- | ----------------------------------------- | -------------------------------------------- |
| **Diseño responsive planificado**   | Wireframes (WF-01 a WF-18)                | La intención de diseño para cada breakpoint  |
| **Implementación responsive (CSS)** | `css/**/responsive*.css`, `css/react.css` | El CSS existe y define media queries         |
| **Evidencia visual responsive**     | Capturas `03-responsive/`                 | El comportamiento real a distintos viewports |

> **Regla aplicada:** Los wireframes NO sustituyen a capturas funcionales para demostrar responsive real. Pero sí sirven para demostrar la planificación del diseño y el proceso de trabajo en DIW. Se usan en §6 DIW para mostrar la metodología de diseño.

> **Sobre `responsive-mobile-tienda.png`:** El contenido aparece cortado en el lateral derecho. Esto puede indicar un overflow horizontal que debería corregirse en CSS, o un problema con el viewport del capturador. Antes de usar esta captura en la memoria, verificar visualmente en Chrome DevTools con Device Mode (390px). Si hay overflow real, es un issue de CSS a corregir. Si es artefacto del capturador, repetir captura.

---

## TAREA 10 — Sostenibilidad y material complementario

### Material de sostenibilidad

| Archivo                                              | Tipo                   | Recomendación                                                                                                            |
| ---------------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `pacepalA3.png`                                      | Cartel A3 concurso     | Válido para **Anexo Sostenibilidad**. No incluir en cuerpo técnico. Muestra participación en actividad de sostenibilidad |
| `postalPacePalCaraA.png`                             | Postal concurso cara A | Válido para **Anexo Sostenibilidad**. Material complementario de identidad de marca + sostenibilidad                     |
| `postalPacePalCaraB.png`                             | Postal concurso cara B | Válido para **Anexo Sostenibilidad**. Complementa cara A                                                                 |
| `ArquetipoClienteSevillanoPabloPachecoAlejandro.pdf` | Documento de negocio   | Válido para **Anexo Sostenibilidad** o referencia interna. No es imagen                                                  |
| `Idea de negocio sostenible [...].pdf`               | Documento de negocio   | Válido para **Anexo Sostenibilidad**. No es imagen                                                                       |

> **Regla aplicada:** Este material no va en el cuerpo técnico de la memoria. Pertenece al apartado de sostenibilidad o a un anexo específico de contexto del proyecto. El cartel A3 y las postales son evidencia de que el proyecto participó en un concurso de innovación/sostenibilidad, lo cual puede mencionarse en §10 si el apartado de sostenibilidad existe.

---

## TAREA 11 — Ver sección añadida al final del registro de evidencias

_(La actualización del archivo `registro-evidencias-finales.md` se documenta en el propio archivo al final de este proceso.)_

---

## TAREA 12 — Resumen final de la revisión comparativa

### Conteo global de archivos visuales revisados

| Categoría                                          | Cantidad                       |
| -------------------------------------------------- | ------------------------------ |
| Capturas nuevas automatizadas (capturas-finales/)  | **33**                         |
| Diagramas finales (figuras/)                       | **10**                         |
| Evidencias históricas — imágenes (evidencias/)     | **39**                         |
| Wireframes (03-diw/wireframes/)                    | **18**                         |
| Recursos de identidad visual (03-diw/media/)       | **12** (11 imágenes + 1 video) |
| Material sostenibilidad (07-sostenibilidad/)       | **3** imágenes + 2 PDFs        |
| Tests documentados (tests/)                        | **18** (docs + JSONs + JS)     |
| **TOTAL archivos visuales/documentales revisados** | **~133**                       |

### Estado de las evidencias

| Estado                 | Cantidad estimada | Descripción                                                                                          |
| ---------------------- | ----------------- | ---------------------------------------------------------------------------------------------------- |
| Principal para memoria | ~45               | Evidencias de primer nivel recomendadas para el cuerpo de la memoria                                 |
| Válida para anexo      | ~35               | Evidencias correctas pero secundarias, para anexos                                                   |
| Apoyo secundario       | ~20               | Duplicadas o menos relevantes, conservar pero no usar como principal                                 |
| Revisar manualmente    | **7**             | Capturas con posibles problemas: responsive-mobile-tienda, consola/_ (2), carrito/_ (2), api-get (2) |
| Repetir captura        | **3**             | accesibilidad-boton-voz, multimedia-audio-contacto, (captura DevTools Network)                       |
| Mal clasificada        | **1**             | accesibilidad-boton-voz — no muestra lo que dice mostrar                                             |
| Pendiente real         | **5**             | DevTools Console, DevTools Network, POST Postman (3 endpoints), audio controls visible               |

### Evidencias manuales que siguen pendientes

| #   | Evidencia               | Descripción                                                      | Prioridad |
| --- | ----------------------- | ---------------------------------------------------------------- | --------- |
| 1   | DevTools Console        | Chrome F12 > Console mostrando app sin errores críticos          | Alta      |
| 2   | DevTools Network        | Chrome F12 > Network con llamada GET /api/productos y código 200 | Alta      |
| 3   | POST /api/login         | Captura Postman con login exitoso (200 OK + sesión)              | Alta      |
| 4   | Audio visible           | `<audio controls>` visible en la página donde esté integrado     | Media     |
| 5   | Botón accesibilidad voz | Captura del botón de ayuda por voz visible en la interfaz        | Media     |
| 6   | POST /api/carrito       | Captura Postman añadiendo producto al carrito                    | Baja      |

### Documentos creados o actualizados en esta revisión

| Documento                                                    | Acción                                                                                       |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| `docs/documentacion-final/10_inventario_capturas_finales.md` | **Creado** — este documento                                                                  |
| `docs/documentacion-final/registro-evidencias-finales.md`    | **Actualizado** — sección añadida al final: "Revisión comparativa con evidencias históricas" |

---

## Resumen ejecutivo de las decisiones principales

| Tema                         | Decisión                                                                                                             |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Carrito**                  | Usar SIEMPRE las históricas `Carrito-React.png` y `Carrito_añadir_React.png`. Las nuevas capturaron estados erróneos |
| **phpMyAdmin**               | Usar `03-phpmyadmin-bd-pacepal.png` histórica. La nueva expone otras BBDD del sistema                                |
| **Lighthouse**               | `lighthouse-accesibilidad.png` histórica es la evidencia de accesibilidad más sólida del proyecto                    |
| **Postman real**             | Solo `postman1.png` y `postman2.png` son evidencia Postman. El resto son API desde navegador                         |
| **Consola**                  | Ninguna captura de `07-consola/` muestra DevTools. Son "app cargada en navegador"                                    |
| **Audio**                    | `multimedia-audio-contacto.png` no muestra audio. Pendiente de captura manual                                        |
| **Botón voz**                | `accesibilidad-boton-voz.png` está mal clasificada. No muestra ningún botón de voz                                   |
| **Vídeo**                    | `multimedia-video-tienda.png` SÍ es válida. Muestra `<video>` con controles visibles                                 |
| **Perfil**                   | `react-perfil-usuario.png` nueva es mejor (admin con historial pedidos confirma carrito)                             |
| **Responsive mobile tienda** | Revisar overflow. Puede ser issue CSS o artefacto del capturador                                                     |
| **Wireframes**               | Solo 4 al cuerpo principal. El resto a anexos                                                                        |
| **Sostenibilidad**           | Solo en anexo de sostenibilidad. No en cuerpo técnico                                                                |
