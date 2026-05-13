# Roadmap global (pasos ejecutables) — PacePal

Este documento recoge el listado completo y defendible de pasos a seguir desde el arranque (Sprint 0) hasta el cierre, organizado por fases y alineado con los sprints DIW / DWEC / DWES. Está pensado para pegar en la memoria y como checklist operativo.

A) Arranque Scrum + Base documental (Sprint 0)

- Crear repositorio compartido y estructura de carpetas/documentación.
- Definir roles Scrum: PO, SM, Dev Team.
- Decidir cadencia: duración sprint, reuniones (planning, daily, review, retro).
- Crear tablero (To Do / Doing / Review / Done) y norma de evidencias (commits, PRs, docs, capturas).
- Crear backlog inicial en formato Historia de Usuario (Como/Quiero/Para + validación/valor/prioridad/estimación).

B) Definición del producto (DI1) + Investigación

- Responder preguntas de definición: propósito, usuarios, módulos, multimedia, permisos, herramientas, coste/tiempo, perfiles.
- Definir elementos de interfaz: identificación, navegación, contenido e interacción.
- Investigación de tendencias/competencia: 3–5 referencias y patrones aplicables.

C) IPE2 (entregables mínimos)

- Análisis de entorno y público objetivo.
- Propuesta de valor del producto.
- Plan básico de comunicación y lanzamiento.
- Documentar estructura organizativa y roles.
- Reflexión sobre impacto económico y social.

D) DIW — Prototipos, guía de estilo, maquetación y accesibilidad

- Prototipar móvil/tablet/escritorio (papel y digital si procede).
- Boceto final de landing (desktop + móvil) y justificación de la elección.
- Implementar Landing Page (HTML/CSS/JS/Bootstrap) responsive.
- Crear Guía de estilos: paleta, tipografía, iconos, espaciado, formularios, voz/tono.
- Aplicar accesibilidad WCAG 2.1 nivel A (semántica, foco, contraste, ARIA, teclado).
- Generar informe de accesibilidad y grabar vídeo de presentación (OBS).

E) Evolución a aplicación web completa

- Definir app mínima: HOME, galería, módulo gestión, ABOUT.
- Prototipar todas las páginas (desktop + mobile).
- Definir comportamientos por perfil: Invitado / Cliente / Admin.
- Revisar accesibilidad WCAG 2.1 A en todas las páginas implementadas.
- Optimizar imágenes (WebP, versiones mobile/desktop).
- Añadir sección “Inspección de la Usabilidad” en la documentación.

F) DWEC (Cliente) — Formularios, carrito, buscador AJAX, listados dinámicos

- Integrar registro y login en frontend respetando DIW.
- Implementar validaciones JS modulares (ej. `validaciones.js`, `formulario.js`).
- Mostrar errores y mensajes de éxito sin recargar; estilos e iconos.
- Preparar puntos claros para futuras llamadas a servidor (fetch/API).
- Tests funcionales (Selenium u otro) en `/tests`.
- Implementar carrito vanilla JS (sin `innerHTML`): array de objetos, createElement/appendChild, contador en icono, ver/eliminar/total.
- Implementar buscador AJAX: cargar destacados, filtrar por nombre/desc, sin recargar; paginación si procede; gestionar “sin resultados”.
- Listado dinámico con detalle, filtros y paginación.

G) DWES (Servidor) — SQL, API REST, sesiones/roles, Postman

- Diseñar modelo relacional (usuarios, items, categorías, pedidos) y restricciones.
- Crear scripts SQL (creación + datos mínimos).
- Montar API REST en PHP (PDO + JSON) con endpoints mínimos: catálogo, detalle, login/register, carrito/pedido, PUT/DELETE.
- Implementar sesiones y control de acceso por roles.
- Documentar endpoints (OpenAPI o md claro) y pruebas con Postman.
- Entrega: `/src` (API), `/db` (SQL), `/docs` (ERD, endpoints, roles, capturas).

H) Despliegue, digitalización y sostenibilidad

- Despliegue en entorno (ej. AWS S3/EC2), dominio y SSL, medidas básicas de seguridad.
- Documentar proceso de despliegue (pasos reproducibles).
- Digitalización: evidencias de buenas prácticas (versionado, backups, docs).
- Sostenibilidad: memoria con accesibilidad, eficiencia y responsabilidad digital.

I) Cierre (calidad y defensa)

- Consolidar repositorio final (DIW + DWEC + DWES + docs + tests + vídeo + publicación).
- Preparar guion de defensa: funcionalidades, integración, decisiones de diseño, accesibilidad, despliegue y evidencias.

3. Entregables/evidencias iniciales (Sprint 0)

- `docs/01-bitacora/agile/roles.md` + captura del tablero.
- `docs/01-bitacora/requisitos/definicion-proyecto.md` (respuestas DI1).
- `docs/01-bitacora/agile/backlog.md` con historias en formato tarjeta.
- Commit claro: "Sprint0: definición + roles + backlog v1" (evidencia de versionado).

4. Errores típicos a evitar

- No empezar pantallas sin cerrar definición de usuario, módulos y backlog.
- No modularizar JS o usar frameworks prohibidos.
- Implementar carrito con `innerHTML` (prohibido en el enunciado).
- No dejar evidencias (commits/docs/tests) aunque funcione el código.

5. Qué hacer manualmente (necesario para defensa)

- Redactar 1 párrafo: qué es PacePal y para quién va dirigido.
- Contestar preguntas DI1 de forma coherente y defendible.

6. Qué puedo acelerar sin perjudicar la defensa

- Plantillas de los 3 documentos de Sprint 0 (definición, roles, backlog).
- Redacción inicial de 10–15 historias de usuario que el equipo revise y ajuste.

---

Si quieres, genero ahora las plantillas de Sprint 0 y 10–15 historias de usuario listas para pegar.
