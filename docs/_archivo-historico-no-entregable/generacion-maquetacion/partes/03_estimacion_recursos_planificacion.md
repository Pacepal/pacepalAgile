# 3. ESTIMACIÓN DE RECURSOS Y PLANIFICACIÓN

PacePal se ha organizado con un enfoque Scrum educativo. No se replica un marco empresarial completo, pero sí se trabaja con cadencia sencilla, roles definidos, backlog priorizado, revisión por sprint y política de evidencias desde el inicio. Ese modelo de trabajo se refleja en la planificación por sprints, en la organización de las evidencias y en la trazabilidad entre requisitos, desarrollo y pruebas.

### Roles del equipo

| Rol                      | Responsabilidades en PacePal                                                                                                         |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Product Owner**        | Priorizar historias de usuario, decidir el alcance de cada sprint y aceptar funcionalidades según su criterio de aceptación          |
| **Scrum Master**         | Mantener el tablero organizado, cuidar que Scrum tenga sentido y asegurar que cada incremento tiene evidencias para defensa          |
| **Equipo de desarrollo** | Construir el producto, dividir el trabajo en tareas, mantener el código ordenado e integrar todos los módulos en la misma aplicación |

Los roles fueron asumidos por los dos integrantes del equipo: Pablo Sevillano Aparicio y Alejandro Pacheco.

### Tabla de planificación por sprints

| Sprint       | Materias implicadas         | Trabajo principal                                                                                                                                                      | Evidencias / documentos asociados                                                                                                                                        |
| ------------ | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Sprint 0** | Agile, IPE, transversal     | Definición del proyecto, análisis del producto, identidad del equipo, Scrum base, backlog inicial y reglas de evidencias                                               | `docs/02-agile/01-scrum-base.md`, `docs/02-agile/02-historias-usuario-v1.md`, `docs/01-requisitos/01-definicion-proyecto.md`, `docs/evidencias/01-sprint0/`              |
| **Sprint 1** | DIW, DWEC                   | Tendencias y competencia, guía de estilos, wireframes desktop y mobile, landing page, formularios de registro y login, accesibilidad básica                            | `docs/03-diw/sprint-1/`, `docs/03-diw/wireframes/`, `docs/04-dwec/sprint-1/`, `docs/evidencias/diw/sprint-1/`                                                            |
| **Sprint 2** | DIW, DWEC, DWES             | Accesibilidad formal (Lighthouse, WAVE, WCAG), usabilidad, tienda dinámica, buscador AJAX, carrito legacy, API REST en PHP, base de datos relacional, sesiones y roles | `docs/03-diw/sprint-2/`, `docs/04-dwec/sprint-2/`, `docs/05-dwes/sprint-2/`, `docs/evidencias/diw/sprint-2/`, `tests/funcionales/`                                       |
| **Sprint 3** | DIW, DWEC, DWES, Despliegue | Migración del cliente a React con Vite, vídeo en tienda, microinteracciones, fallback demo GitHub Pages, despliegue local con XAMPP, pruebas finales y documentación   | `docs/03-diw/sprint-3/`, `docs/04-dwec/sprint-3/`, `docs/despliegue/`, `tests/react-sprint-3/`, `docs/evidencias/despliegue/sprint-3/`, `docs/evidencias/dwec/sprint-3/` |
| **Cierre**   | Transversal, documentación  | Consolidación documental, revisión de calidad, plan de figuras y anexos, elaboración de memoria final                                                                  | `docs/documentacion-final/`                                                                                                                                              |

### Recursos principales del proyecto

| Recurso                                | Uso dentro del proyecto                                                 | Evidencia                                    |
| -------------------------------------- | ----------------------------------------------------------------------- | -------------------------------------------- |
| Equipo de desarrollo (2 personas)      | Implementación de diseño, cliente, servidor, despliegue y documentación | `docs/02-agile/01-scrum-base.md`             |
| Repositorio GitHub                     | Versionado y organización del trabajo por sprints                       | Estructura del repo y ramas                  |
| XAMPP (Apache, PHP, MySQL, phpMyAdmin) | Ejecución local del proyecto completo                                   | `docs/despliegue/INSTALACION_LOCAL_XAMPP.md` |
| Vite + Node.js                         | Desarrollo y build del cliente React                                    | `package.json`, `vite.config.js`             |
| Postman                                | Pruebas de endpoints de la API                                          | `tests/postman/`                             |
| Lighthouse, WAVE, WCAG Checker         | Auditoría formal de accesibilidad                                       | `docs/evidencias/diw/sprint-2/`              |
| Draw.io                                | Diagramas técnicos del proyecto                                         | `docs/documentacion-final/figuras/`          |

## 3.1. Diagrama de Gantt

La planificación del proyecto se puede visualizar en el Diagrama de Gantt exportado desde Draw.io, que muestra la distribución relativa de fases y tareas principales a lo largo de los cuatro sprints y el cierre documental. Los ejes representan las semanas de trabajo aproximadas; la duración real de cada sprint se ajustó a las entregas del calendario académico.

> **[INSERTAR IMAGEN EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/figuras/Diagrama de Gantt.png`
> Pie de figura sugerido: _Figura A1. Diagrama de Gantt — Planificación de PacePal por sprints._

El Gantt refleja que las fases no son completamente secuenciales: el diseño de interfaces y la accesibilidad se solapan con el desarrollo del backend, y la documentación avanza en paralelo con la implementación técnica desde el Sprint 2. Esa superposición es coherente con el modelo de trabajo Agile adoptado.
