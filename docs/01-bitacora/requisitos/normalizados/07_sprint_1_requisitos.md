# Requisitos Sprint 1

Estos Markdown son una version de consulta. La fuente oficial y vinculante sigue siendo el PDF original ubicado en `docs/00-material`.

## 1. Fuente original

- `DI1_ Análisis y Diseño de una Interfaz Web Interactiva.pdf`  
  Ruta exacta: `docs/00-material/diw/sprint-1/DI1_ Análisis y Diseño de una Interfaz Web Interactiva.pdf`  
  Tipo de documento: requisito oficial.
- `DI1_Implementación Landing Page.pdf`  
  Ruta exacta: `docs/00-material/diw/sprint-1/DI1_Implementación Landing Page.pdf`  
  Tipo de documento: requisito oficial.
- `DI1_Investigación de Tendencias y Análisis de Competencia.pdf`  
  Ruta exacta: `docs/00-material/diw/sprint-1/DI1_Investigación de Tendencias y Análisis de Competencia.pdf`  
  Tipo de documento: requisito oficial.
- `DWEC1_IMPLEMENTACIÓNDELFORMULARIO.pdf`  
  Ruta exacta: `docs/00-material/dwec/sprint-1/DWEC1_IMPLEMENTACIÓNDELFORMULARIO.pdf`  
  Tipo de documento: requisito oficial.

## 2. Resumen ejecutivo

Sprint 1 define el producto y pone en pie la primera versión visible e interactiva. DIW fija el análisis del proyecto, el estudio de competencia y la implementación de una landing page profesional, responsive y documentada. DWEC añade registro y login con validaciones avanzadas, integrados dentro del diseño aprobado y preparados para la futura conexión con servidor.

## 3. Requisitos obligatorios

| ID | Requisito | Área | Obligatorio | Evidencia esperada |
|---|---|---|---|---|
| S1-01 | Definir propósito, usuario real, módulos, recursos, permisos, herramientas, tiempo, coste y perfiles del proyecto. | Análisis | Sí | Documento inicial del proyecto. |
| S1-02 | Estudiar tendencias y competencia para orientar la propuesta visual. | Investigación | Sí | Sección documental de tendencias y competencia. |
| S1-03 | Consolidar un boceto final de equipo con vista escritorio y móvil antes de implementar. | Diseño | Sí | Wireframes exportados y justificación. |
| S1-04 | Implementar una landing page completa, responsive y fiel al boceto, con CTA claro y estructura ordenada. | DIW | Sí | Landing funcional en repositorio. |
| S1-05 | Documentar el proyecto acumulado y añadir la nueva sección del boceto final. | Documentación | Sí | Documento global o README con enlaces. |
| S1-06 | Entregar un vídeo profesional de presentación de la landing y del repositorio. | Evidencia | Sí | Enlace o archivo accesible del vídeo. |
| S1-07 | Implementar formularios de registro y login con validaciones personalizadas, mensajes sin recarga y módulos JS separados. | DWEC | Sí | Formularios funcionales y código modular. |
| S1-08 | Preparar el código cliente para futura integración con backend, respetando diseño, estructura y jerarquía visual de DIW. | Integración | Sí | Código reutilizable e integrado en la landing. |

## 4. Recomendaciones

- Se recomienda estudiar la competencia como apoyo de diseño, no como patrón obligatorio exacto.
- Se recomienda seguir WCAG 2.0 para formularios en Sprint 1 cliente.
- Se recomienda realizar tests funcionales con Selenium, Katalon Recorder u otras herramientas similares.

## 5. Entregables

| Entregable | Descripción | Ubicación esperada | Estado verificable |
|---|---|---|---|
| Análisis del proyecto | Definición funcional y visual inicial. | Documentación del proyecto | Verificable por apartados de análisis. |
| Boceto final desktop/mobile | Wireframes consolidados de la landing. | Documentación del proyecto | Verificable por imágenes exportadas. |
| Landing implementada | Página responsive en HTML/CSS/JS o Bootstrap. | Repositorio del proyecto | Verificable por ejecución y estructura. |
| Formularios registro/login | Formularios integrados con validaciones avanzadas. | Repositorio del proyecto | Verificable por interacción real. |
| Vídeo de presentación | Presentación comercial/profesional del sprint. | Enlace o archivo accesible | Verificable por duración y contenido. |

## 6. Tests o validaciones exigidas

| Prueba | Qué debe comprobar | Evidencia |
|---|---|---|
| Review con cliente | Estado de la landing y adecuación a la necesidad del cliente. | Review y vídeo del sprint. |
| Validación responsive | Vista correcta en escritorio y móvil. | Demostración o capturas. |
| Validación de formularios | Errores, éxito sin recarga y campos obligatorios/opcionales. | Tests funcionales o capturas guiadas. |

## 7. Documentación exigida

- README: puede agrupar o enlazar documentación del sprint.
- Memoria: análisis, wireframes, decisiones de diseño y formularios integrados.
- Anexos: capturas, wireframes exportados y evidencias visuales.
- Pruebas: validaciones de formularios y responsive.
- Vídeo: obligatorio en la entrega DIW de la landing.
- Evidencias: estructura del repositorio y documentación acumulada.

## 8. Relación con otros sprints

Sprint 1 es la base de todo el proyecto. Define la identidad visual, el flujo de captación inicial y los primeros componentes interactivos. Los sprints posteriores amplían funcionalidades, pero mantienen como punto de partida el boceto, la landing y la integración inicial de formularios.

## 9. Riesgos de interpretación

- El análisis de competencia y tendencias no fija por sí solo entregables gráficos cerrados; debe cruzarse con la entrega concreta de landing.
- El vídeo de Sprint 1 es obligatorio y puede olvidarse si solo se mira la parte técnica de la landing.
- La preparación para backend en el formulario es un requisito de diseño técnico, aunque el backend aún no esté implementado en este sprint.

## 10. Checklist de cumplimiento

- [ ] Requisito obligatorio localizado
- [ ] Entregables identificados
- [ ] Tests identificados
- [ ] Documentación necesaria identificada
- [ ] Riesgos anotados