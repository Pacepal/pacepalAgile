# 02 · Esqueleto de la memoria final

Este documento no es todavía la memoria completa. Su objetivo es dejar controlada la estructura final, las fuentes por apartado y los huecos que todavía deben señalarse como pendientes.

## Elementos iniciales

### Portada

<!-- Fuente: docs/plantillaDocumentacionProyecto.md y docs/pacepal.pdf -->

- **Objetivo del apartado:** identificar formalmente el proyecto, el ciclo, el centro, el equipo y la fecha.
- **Fuentes que se van a usar:** `docs/plantillaDocumentacionProyecto.md`, `docs/pacepal.pdf`, datos finales del alumno/equipo.
- **Evidencias necesarias:** nombre del centro, ciclo DAW, módulo/proyecto, logotipo de PacePal, nombre del equipo, autoría, tutor/a y fecha.
- **Notas de redacción:** en Markdown se dejará como portada provisional; la portada maquetada se cerrará en ODT/DOCX.
- **Pendientes:** tutor/a, fecha exacta de entrega, logotipo de empresa si se quiere usar.

### Resumen y Abstract

<!-- Fuente: README.md, docs/01-requisitos/01-definicion-proyecto.md, docs/requisitos-normalizados/01_resumen_global_proyecto.md -->

- **Objetivo del apartado:** resumir qué es PacePal, qué resuelve, cómo se ha construido y cuál es el resultado real.
- **Fuentes que se van a usar:** `README.md`, `docs/01-requisitos/01-definicion-proyecto.md`, código real y memoria beta solo como apoyo.
- **Evidencias necesarias:** stack real, módulos implicados, funcionalidades principales y estado actual del proyecto.
- **Notas de redacción:** resumen breve, defendible y sin tono publicitario.
- **Pendientes:** ninguno crítico.

### Índice automático

<!-- Fuente: docs/plantillaDocumentacionProyecto.md -->

- **Objetivo del apartado:** dejar preparado el índice final del documento.
- **Fuentes que se van a usar:** estructura oficial de la plantilla.
- **Evidencias necesarias:** estilos de título homogéneos.
- **Notas de redacción:** en Markdown solo se deja el marcador; la generación será en el procesador de textos.
- **Pendientes:** generación automática final en ODT/DOCX.

### Índice de figuras / ilustraciones

<!-- Fuente: docs/03-diw/wireframes, docs/evidencias, docs/03-diw/media -->

- **Objetivo del apartado:** listar figuras, diagramas, capturas y wireframes que se insertarán.
- **Fuentes que se van a usar:** `docs/03-diw/wireframes/`, `docs/evidencias/`, `docs/03-diw/media/`.
- **Evidencias necesarias:** numeración coherente y pie de figura claro.
- **Notas de redacción:** usar solo imágenes existentes en el repo.
- **Pendientes:** índice automático final en ODT/DOCX.

### Índice de tablas

<!-- Fuente: propia memoria -->

- **Objetivo del apartado:** listar tablas relevantes de planificación, tecnologías, requisitos, pruebas y glosario.
- **Fuentes que se van a usar:** las tablas que se redactarán en el borrador.
- **Evidencias necesarias:** numeración y títulos consistentes.
- **Notas de redacción:** solo tendrá sentido si se mantienen las tablas previstas.
- **Pendientes:** generación automática final.

## 1. INTRODUCCIÓN

### 1.1 Objetivos

<!-- Fuente: docs/01-requisitos/01-definicion-proyecto.md y docs/02-agile/02-historias-usuario-v1.md -->

- **Objetivo del apartado:** fijar el objetivo general y los objetivos específicos del proyecto.
- **Fuentes que se van a usar:** `docs/01-requisitos/01-definicion-proyecto.md`, `docs/02-agile/02-historias-usuario-v1.md`, `README.md`.
- **Evidencias necesarias:** coherencia con funcionalidades reales del código actual.
- **Notas de redacción:** separar objetivo general de objetivos específicos y evitar repetir requisitos completos.
- **Pendientes:** ninguno crítico.

### 1.2 Motivación

<!-- Fuente: docs/01-requisitos/01-definicion-proyecto.md y docs/03-diw/sprint-1/01-tendencias-competencia.md -->

- **Objetivo del apartado:** explicar el problema que se quiere resolver y por qué se eligió este proyecto.
- **Fuentes que se van a usar:** definición del proyecto, tendencias/competencia y enfoque sostenible.
- **Evidencias necesarias:** problema de constancia individual, necesidad de comunidad, seguridad y enfoque sostenible.
- **Notas de redacción:** tono realista, sin sobredimensionar impacto.
- **Pendientes:** ninguno crítico.

## 2. TECNOLOGÍAS Y HERRAMIENTAS UTILIZADAS

<!-- Fuente: package.json, vite.config.js, index.html, src/api/index.php, db/schema.sql, README.md -->

- **Objetivo del apartado:** explicar el stack real y para qué se usa cada tecnología.
- **Fuentes que se van a usar:** configuración, código, README y documentación técnica de módulos.
- **Evidencias necesarias:** React/Vite, HTML5, CSS3, Bootstrap, Bootstrap Icons, JavaScript, PHP, PDO, JSON, MySQL/MariaDB, XAMPP, Git/GitHub, GitHub Pages, Postman, VS Code y herramientas de accesibilidad si están documentadas.
- **Notas de redacción:** no listar tecnologías que no estén verificadas en el repo o en documentación actual.
- **Pendientes:** aclarar en la redacción que `Figma o Canva` aparecen citadas como herramientas previstas, pero la evidencia directa son los wireframes exportados PNG.

## 3. ESTIMACIÓN DE RECURSOS Y PLANIFICACIÓN

<!-- Fuente: docs/02-agile/01-scrum-base.md, docs/02-agile/roadmap-global.md, docs/requisitos-normalizados/01_resumen_global_proyecto.md -->

- **Objetivo del apartado:** explicar cómo se organizó el trabajo por sprints, roles y fases.
- **Fuentes que se van a usar:** Scrum base, roadmap global, requisitos normalizados y evidencia de Sprint 0.
- **Evidencias necesarias:** roles, fases, backlog, tablero, sprints y evidencias del repo.
- **Notas de redacción:** la planificación se puede mostrar con tabla base porque no existe Gantt final exportado.
- **Pendientes:** fechas exactas del equipo si se quieren insertar.

### 3.1 Diagrama de Gantt

<!-- Fuente: docs/02-agile/roadmap-global.md -->

- **Objetivo del apartado:** representar el orden lógico de análisis, diseño, desarrollo, pruebas y despliegue.
- **Fuentes que se van a usar:** roadmap global y organización por sprints.
- **Evidencias necesarias:** secuencia Sprint 0, Sprint 1, Sprint 2, Sprint 3 y cierre.
- **Notas de redacción:** si no se aporta una figura externa, usar tabla-Gantt base en Markdown.
- **Pendientes:** figura Gantt exportada si el alumno decide crearla aparte.

## 4. DESARROLLO DE LA PRÁCTICA

### 4.1 Requisitos

<!-- Fuente: docs/02-agile/02-historias-usuario-v1.md, docs/requisitos-normalizados/03_diw_requisitos.md, 04_dwec_cliente_requisitos.md, 05_dwes_servidor_requisitos.md, 06_despliegue_requisitos.md -->

- **Objetivo del apartado:** sintetizar requisitos funcionales, no funcionales y modelado relevante.
- **Fuentes que se van a usar:** historias de usuario, requisitos normalizados, código real y modelo de datos.
- **Evidencias necesarias:** funcionalidades visibles en `js/App.jsx`, endpoints en `src/api/index.php`, esquema en `db/schema.sql`, roles y evidencias de accesibilidad.
- **Notas de redacción:** distinguir claramente entre requisitos y mejoras futuras.
- **Pendientes:** diagrama de casos de uso y diagrama de clases visual.

#### Requerimientos funcionales

<!-- Fuente: docs/02-agile/02-historias-usuario-v1.md, js/App.jsx, src/api/index.php -->

- **Objetivo del apartado:** listar lo que pueden hacer invitado, usuario y admin.
- **Fuentes que se van a usar:** historias de usuario, roles de acceso, código y tests.
- **Evidencias necesarias:** navegación pública, login/registro, perfil, tienda, carrito, actividades, rutas, admin, API, cookies y despliegue.
- **Notas de redacción:** usar una tabla con identificadores propios de memoria (`RF-01`, `RF-02`, etc.).
- **Pendientes:** ninguno crítico.

#### Requerimientos no funcionales

<!-- Fuente: docs/03-diw/sprint-2/01-accesibilidad-wcag.md, docs/03-diw/sprint-2/05-inspeccion-usabilidad.md, vite.config.js, src/api/index.php -->

- **Objetivo del apartado:** documentar accesibilidad, usabilidad, responsive, modularidad, seguridad básica, mantenibilidad y compatibilidad local.
- **Fuentes que se van a usar:** informes DIW, configuración Vite, API y estructura modular del proyecto.
- **Evidencias necesarias:** informe WCAG, usabilidad, CORS local, prepared statements, build de Vite y assets optimizados.
- **Notas de redacción:** no atribuir rendimiento o seguridad avanzada no demostrada.
- **Pendientes:** ninguno crítico.

#### Diagrama de casos de uso

<!-- Fuente: docs/02-agile/02-historias-usuario-v1.md y docs/05-dwes/sprint-2/roles-acceso.md -->

- **Objetivo del apartado:** reflejar actores y acciones principales.
- **Fuentes que se van a usar:** roles y backlog funcional.
- **Evidencias necesarias:** actores invitado, usuario, administrador y sistema.
- **Notas de redacción:** si no se aporta figura, dejar el hueco marcado como pendiente y describir actores en texto.
- **Pendientes:** figura final no localizada.

#### Diagrama de clases

<!-- Fuente: docs/05-dwes/sprint-2/arquitectura-backend.md, src/controllers/, src/models/ -->

- **Objetivo del apartado:** mostrar la organización lógica del backend.
- **Fuentes que se van a usar:** arquitectura backend y carpetas reales de controladores/modelos.
- **Evidencias necesarias:** router API, controladores, modelos y configuración.
- **Notas de redacción:** si no existe diagrama visual, resumir primero la arquitectura real y marcar la figura pendiente.
- **Pendientes:** figura final no localizada.

#### Modelo conceptual de datos

<!-- Fuente: db/schema.sql, docs/05-dwes/sprint-2/modelo-relacional.md, docs/evidencias/dwes/diagramaER.png -->

- **Objetivo del apartado:** explicar entidades, relaciones y restricciones principales.
- **Fuentes que se van a usar:** esquema SQL, modelo relacional y diagrama ER.
- **Evidencias necesarias:** tablas y claves foráneas del sistema real.
- **Notas de redacción:** resumir; el SQL completo debe ir a anexos si hace falta.
- **Pendientes:** ninguno crítico.

### 4.2 Análisis

<!-- Fuente: docs/01-requisitos/01-definicion-proyecto.md, docs/04-dwec/sprint-3/decision-fallback-github-pages.md, docs/05-dwes/sprint-2/arquitectura-backend.md -->

- **Objetivo del apartado:** justificar por qué la solución final adopta una arquitectura con frontend, API, base de datos y roles.
- **Fuentes que se van a usar:** definición de proyecto, arquitectura backend, documentación React y despliegue.
- **Evidencias necesarias:** separación cliente-servidor, datos persistentes, control de roles, fallback demo y evolución por sprints.
- **Notas de redacción:** conectar problema, solución y limitaciones reales del despliegue.
- **Pendientes:** ninguno crítico.

### 4.3 Diseño

<!-- Fuente: docs/03-diw/sprint-1/03-guia-estilos.md, docs/03-diw/sprint-1/04-boceto-final.md, docs/03-diw/wireframes/, docs/03-diw/media/ -->

- **Objetivo del apartado:** explicar la identidad visual, navegación, pantallas principales y decisiones UX.
- **Fuentes que se van a usar:** guía de estilos, boceto final, wireframes y evidencias del cliente actual.
- **Evidencias necesarias:** wireframes, paleta, tipografía, iconografía, capturas y componentes reales.
- **Notas de redacción:** usar pocas figuras en el cuerpo y derivar el resto a anexos.
- **Pendientes:** ninguno crítico.

#### Diseño de interfaces

<!-- Fuente: docs/03-diw/sprint-1/03-guia-estilos.md y index.html -->

- **Objetivo del apartado:** explicar paleta, tipografías, componentes, Bootstrap y coherencia visual.
- **Fuentes que se van a usar:** guía de estilos, recursos media, index.html y CSS del proyecto.
- **Evidencias necesarias:** paleta, tipografía, iconografía y componentes reutilizados.
- **Notas de redacción:** aclarar que se usa Bootstrap como apoyo, no como sustituto del diseño propio.
- **Pendientes:** ninguno crítico.

#### Bocetos principales

<!-- Fuente: docs/03-diw/wireframes/ -->

- **Objetivo del apartado:** seleccionar los wireframes más representativos.
- **Fuentes que se van a usar:** wireframes desktop/mobile ya exportados.
- **Evidencias necesarias:** landing, actividades, rutas, tienda, admin y detalle si cabe.
- **Notas de redacción:** priorizar 4-6 figuras en el cuerpo.
- **Pendientes:** ninguno crítico.

#### Funcionamiento de pantallas principales

<!-- Fuente: js/App.jsx, pages/, tests/react-sprint-3/, docs/04-dwec/README.md -->

- **Objetivo del apartado:** explicar cómo se navega y qué hace cada pantalla principal.
- **Fuentes que se van a usar:** árbol de pantallas React, páginas JSX y tests manuales.
- **Evidencias necesarias:** home, actividades, rutas, tienda, carrito, perfil, admin, contacto y cookies.
- **Notas de redacción:** usar una tabla breve con objetivo y flujo.
- **Pendientes:** ninguno crítico.

## 5. PRUEBAS

### 5.1 Pruebas funcionales

<!-- Fuente: tests/tests.md, tests/funcionales/, tests/react-sprint-3/, tests/postman/, docs/evidencias/despliegue/sprint-3/README.md -->

- **Objetivo del apartado:** demostrar que las funcionalidades principales se han validado.
- **Fuentes que se van a usar:** casos manuales, Postman, evidencias de despliegue y pruebas React.
- **Evidencias necesarias:** registro, login, logout, buscador, carrito, actividades, perfil, admin, API, sesión, BBDD y despliegue local.
- **Notas de redacción:** mantener formato homogéneo con ID, precondición, pasos, resultado esperado, obtenido, evidencia y estado.
- **Pendientes:** ninguna prueba crítica sin fuente; sí faltan algunas capturas específicas de Postman en el documento manual.

### 5.2 Inspección de accesibilidad

<!-- Fuente: docs/03-diw/sprint-2/01-accesibilidad-wcag.md y pages/formulario/ContactPage.jsx -->

- **Objetivo del apartado:** recoger herramientas, alcance, resultados y mejoras aplicadas.
- **Fuentes que se van a usar:** informe WCAG, capturas DIW y componentes con labels/ARIA en código actual.
- **Evidencias necesarias:** Lighthouse, WAVE, contraste, HTML semántico, labels, alt y navegación por teclado.
- **Notas de redacción:** dejar claro que la auditoría formal localizada se centra en la landing y añadir observaciones verificadas del cliente actual.
- **Pendientes:** si se quiere una auditoría completa de toda la SPA, faltaría una nueva pasada específica.

### 5.3 Inspección de usabilidad

<!-- Fuente: docs/03-diw/sprint-2/05_inspeccion_usabilidad.md -->

- **Objetivo del apartado:** documentar facilidad de uso, claridad de navegación y observaciones detectadas.
- **Fuentes que se van a usar:** inspección heurística y prueba con usuario externo.
- **Evidencias necesarias:** tareas, resultados observados y mejora detectada sobre la diferencia entre rutas y actividades.
- **Notas de redacción:** breve, directa y sin vender la interfaz como perfecta.
- **Pendientes:** ninguno crítico.

## 6. CONCLUSIONES

### 6.1 Objetivos alcanzados

<!-- Fuente: cobertura funcional real en código, tests y docs -->

- **Objetivo del apartado:** indicar qué metas del proyecto sí están cubiertas.
- **Fuentes que se van a usar:** cobertura funcional del código, tests y documentación por sprints.
- **Evidencias necesarias:** funcionalidades completas, despliegue local documentado, publicación del cliente y anexos reales.
- **Notas de redacción:** no afirmar cumplimiento de diagramas no aportados.
- **Pendientes:** ninguno crítico.

### 6.2 Conclusiones del proyecto

<!-- Fuente: docs/02-agile/04-retro-sprint2-feedback.md, docs/04-dwec/sprint-3/decision-fallback-github-pages.md, docs/05-dwes/sprint-2/arquitectura-backend.md -->

- **Objetivo del apartado:** cerrar la memoria con una valoración técnica y de aprendizaje.
- **Fuentes que se van a usar:** retrospectiva, decisiones técnicas y trabajo real del repo.
- **Evidencias necesarias:** dificultades reales, coexistencia legacy/React, organización por sprints y valor del enfoque intermodular.
- **Notas de redacción:** tono honesto y defendible oralmente.
- **Pendientes:** ninguno crítico.

### 6.3 Propuestas de futuro

<!-- Fuente: roadmap-global.md, pendientes detectados en pruebas y documentación -->

- **Objetivo del apartado:** recoger mejoras viables a corto/medio plazo.
- **Fuentes que se van a usar:** roadmap y riesgos documentales detectados.
- **Evidencias necesarias:** huecos reales y mejoras lógicas del producto.
- **Notas de redacción:** propuestas pequeñas, concretas y realistas.
- **Pendientes:** ninguno crítico.

## 7. GLOSARIO

<!-- Fuente: terminología real del repo -->

- **Objetivo del apartado:** definir términos técnicos usados en la memoria.
- **Fuentes que se van a usar:** documentos técnicos, código y stack real.
- **Evidencias necesarias:** términos como API, AJAX, PDO, WCAG, React, XAMPP, Scrum o sesión.
- **Notas de redacción:** definiciones cortas y ligadas al proyecto.
- **Pendientes:** redacción final del listado.

## 8. BIBLIOGRAFÍA Y WEBGRAFÍA

<!-- Fuente: docs/00-material, docs/rubrica.md y documentación oficial citada en DIW -->

- **Objetivo del apartado:** recopilar las fuentes internas y externas usadas.
- **Fuentes que se van a usar:** PDFs oficiales del proyecto, documentación oficial de tecnologías y recursos de apoyo realmente citados.
- **Evidencias necesarias:** URLs o referencias suficientemente identificables.
- **Notas de redacción:** separar fuentes del proyecto de documentación externa.
- **Pendientes:** consolidar formato final de cita.

## 9. ANEXOS

### 9.1 Manual de usuario

<!-- Fuente: README.md, tests/funcionales/, tests/react-sprint-3/ -->

- **Objetivo del apartado:** explicar cómo usar la aplicación por perfiles.
- **Fuentes que se van a usar:** flujos reales verificados en pruebas y README.
- **Evidencias necesarias:** navegación básica de invitado, usuario y admin.
- **Notas de redacción:** formato paso a paso breve.
- **Pendientes:** capturas extra si se quiere enriquecer el anexo.

### 9.2 Pruebas realizadas

<!-- Fuente: tests/, tests/postman/, docs/evidencias/ -->

- **Objetivo del apartado:** agrupar el material ampliado de validación.
- **Fuentes que se van a usar:** carpetas de tests, colección Postman, capturas de evidencias y despliegue.
- **Evidencias necesarias:** casos manuales, scripts, capturas y colecciones.
- **Notas de redacción:** no duplicar tablas completas del cuerpo si ya están resumidas.
- **Pendientes:** consolidar capturas de Postman faltantes si se desea cerrar al 100 %.

### 9.3 Análisis de la competencia

<!-- Fuente: docs/03-diw/sprint-1/01-tendencias-competencia.md y docs/evidencias/diw/sprint-1/ -->

- **Objetivo del apartado:** dejar ampliado el estudio de referencias y decisiones tomadas.
- **Fuentes que se van a usar:** documento DIW y capturas de la competencia.
- **Evidencias necesarias:** Strava, Meetup, Komoot y comparativa aplicada.
- **Notas de redacción:** resumen en el cuerpo, desarrollo ampliado aquí.
- **Pendientes:** ninguno crítico.

### 9.4 Bocetos / Wireframes completos

<!-- Fuente: docs/03-diw/wireframes/ -->

- **Objetivo del apartado:** reunir todos los wireframes exportados.
- **Fuentes que se van a usar:** carpeta global de wireframes.
- **Evidencias necesarias:** ficheros PNG desktop/mobile por pantalla.
- **Notas de redacción:** incluir un índice de archivos o mini catálogo.
- **Pendientes:** ninguno crítico.

### 9.5 Guía de estilos

<!-- Fuente: docs/03-diw/sprint-1/03-guia-estilos.md y docs/03-diw/media/ -->

- **Objetivo del apartado:** dejar íntegra la identidad visual de PacePal.
- **Fuentes que se van a usar:** guía de estilos y recursos gráficos.
- **Evidencias necesarias:** paleta, tipografía, componentes, iconografía y normas de uso.
- **Notas de redacción:** anexo técnico, no debe invadir el cuerpo principal.
- **Pendientes:** ninguno crítico.
