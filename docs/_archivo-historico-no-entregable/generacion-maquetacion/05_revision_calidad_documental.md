# 05 · Revisión de calidad documental

## Estado general

Este paquete documental deja preparada una memoria revisable y trazable en Markdown, pero todavía no debe considerarse cerrada como versión definitiva para entrega. La base es sólida porque está apoyada en requisitos normalizados, documentación modular, código real, pruebas y evidencias del propio repositorio. Los huecos que quedan son principalmente documentales y visuales, no de invención de contenido.

## Checklist de la plantilla oficial

| Elemento de la plantilla                  | Estado      | Observación                                                                                                                           |
| ----------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Portada                                   | `parcial`   | Está preparada como portada provisional, pero faltan tutor/a, fecha final y datos exactos del centro si no se quieren dejar genéricos |
| Resumen                                   | `completo`  | Redactado en el borrador                                                                                                              |
| Abstract                                  | `completo`  | Redactado en el borrador                                                                                                              |
| Índice automático                         | `pendiente` | Solo se puede cerrar al exportar a ODT/DOCX                                                                                           |
| Índice de figuras                         | `parcial`   | Existe índice operativo, pero falta automatizarlo al maquetar                                                                         |
| Índice de tablas                          | `parcial`   | Existe listado previsto, pero falta automatizarlo al maquetar                                                                         |
| 1. Introducción                           | `completo`  | Objetivos y motivación redactados con trazabilidad                                                                                    |
| 2. Tecnologías y herramientas             | `completo`  | Stack documentado desde código y configuración real                                                                                   |
| 3. Estimación de recursos y planificación | `completo`  | Redactado en texto y con tabla base                                                                                                   |
| 3.1 Diagrama de Gantt                     | `completo`  | Existe diagrama Mermaid reconstruido; solo quedaría exportarlo a imagen si la maquetación final lo exige                              |
| 4.1 Requisitos funcionales                | `completo`  | Redactados y trazados a código y backlog                                                                                              |
| 4.1 Requisitos no funcionales             | `completo`  | Redactados y trazados a DIW, despliegue y arquitectura                                                                                |
| 4.1 Diagrama de casos de uso              | `completo`  | Resuelto con diagrama documental reconstruido y trazable a historias de usuario, roles y rutas reales                                 |
| 4.1 Diagrama de clases                    | `completo`  | Resuelto con diagrama de clases simplificado trazable a `src/api`, `src/controllers`, `src/models` y `db/schema.sql`                  |
| 4.1 Modelo conceptual de datos            | `completo`  | Hay texto, SQL y diagrama ER localizado                                                                                               |
| 4.2 Análisis                              | `completo`  | Redactado desde problema, arquitectura y evolución por sprints                                                                        |
| 4.3 Diseño                                | `completo`  | Diseño de interfaces, bocetos principales y pantallas documentados                                                                    |
| 5.1 Pruebas funcionales                   | `completo`  | Tabla de pruebas construida con fuentes reales                                                                                        |
| 5.2 Inspección de accesibilidad           | `completo`  | Alcance aclarado y evidencias citadas                                                                                                 |
| 5.3 Inspección de usabilidad              | `completo`  | Documento DIW integrado en el borrador                                                                                                |
| 6. Conclusiones                           | `completo`  | Objetivos alcanzados, conclusiones y propuestas de futuro redactadas                                                                  |
| 7. Glosario                               | `completo`  | Incluido en el borrador                                                                                                               |
| 8. Bibliografía y webgrafía               | `parcial`   | Hay listado válido, pero conviene revisar el formato de cita final                                                                    |
| 9.1 Manual de usuario                     | `completo`  | Incluido como anexo resumido                                                                                                          |
| 9.2 Pruebas realizadas                    | `completo`  | Anexo trazado a carpetas reales                                                                                                       |
| 9.3 Análisis de la competencia            | `completo`  | Anexo enlazado a DIW y capturas                                                                                                       |
| 9.4 Bocetos / Wireframes completos        | `completo`  | Anexo trazado a wireframes reales                                                                                                     |
| 9.5 Guía de estilos                       | `completo`  | Anexo trazado a guía y recursos visuales                                                                                              |

## Checklist de la rúbrica

| Criterio de rúbrica                 | Estado     | Observación                                                                                 |
| ----------------------------------- | ---------- | ------------------------------------------------------------------------------------------- |
| RUB-01 Elementos iniciales          | `parcial`  | Estructura creada, pero índices automáticos y portada final dependen de la maquetación      |
| RUB-02 Introducción                 | `completo` | Objetivos y motivación defendibles                                                          |
| RUB-03 Tecnologías y herramientas   | `completo` | Justificadas con fuentes del repo                                                           |
| RUB-04 Planificación y Gantt        | `completo` | Planificación clara y diagrama Mermaid de Gantt ya reconstruido                             |
| RUB-05 Requisitos y modelado        | `completo` | RF/RNF, casos de uso, clases simplificadas y modelo de datos quedan cubiertos               |
| RUB-06 Análisis                     | `completo` | Explica problema, solución y arquitectura sin inventar                                      |
| RUB-07 Diseño                       | `completo` | Wireframes, guía visual, responsive modular por secciones y pantallas principales cubiertos |
| RUB-08 Pruebas                      | `completo` | Pruebas funcionales, accesibilidad y usabilidad documentadas con fuentes reales             |
| RUB-09 Conclusiones                 | `completo` | Incluye objetivos alcanzados, valoración y mejoras futuras                                  |
| RUB-10 Anexos                       | `completo` | Hay anexos útiles y trazables                                                               |
| RUB-11 Glosario y bibliografía      | `parcial`  | Glosario listo; bibliografía necesita revisión final de formato                             |
| RUB-12 Calidad global del documento | `parcial`  | La base es fuerte, pero conviene cerrar pendientes visuales antes de exportar               |

## Checklist por módulo

### IPE / Empresa

| Control                          | Estado     | Observación                                                                   |
| -------------------------------- | ---------- | ----------------------------------------------------------------------------- |
| Definición de propuesta de valor | `completo` | Está clara en `docs/01-requisitos/01-definicion-proyecto.md`                  |
| Público objetivo                 | `completo` | Se puede defender desde la definición inicial y la memoria beta               |
| Enfoque de negocio               | `parcial`  | Hay posicionamiento y tienda sostenible, pero no un plan empresarial separado |
| Viabilidad / mantenimiento       | `parcial`  | La memoria beta lo trata; en el borrador actual aparece de forma resumida     |

### Sostenibilidad

| Control                             | Estado     | Observación                                                              |
| ----------------------------------- | ---------- | ------------------------------------------------------------------------ |
| Documentos específicos localizados  | `completo` | Hay PDFs y material gráfico en `docs/07-sostenibilidad/`                 |
| Integración en la memoria principal | `completo` | El borrador integra el enfoque sostenible en introducción y conclusiones |
| Evidencia visual utilizable         | `completo` | Hay material gráfico en `concurso/`                                      |

### DIW

| Control                          | Estado     | Observación                                                                                   |
| -------------------------------- | ---------- | --------------------------------------------------------------------------------------------- |
| Tendencias y competencia         | `completo` | Documentadas y con capturas reales                                                            |
| Wireframes y bocetos             | `completo` | Exportados en PNG, desktop/mobile                                                             |
| Responsive modular               | `completo` | `css/estilos.css` importa hojas responsive por sección y `css/react.css` añade reglas propias |
| Guía de estilos                  | `completo` | Documento y recursos localizados                                                              |
| Accesibilidad                    | `completo` | Informe formal localizado para la landing                                                     |
| Usabilidad                       | `completo` | Informe específico localizado                                                                 |
| Vídeo en tienda                  | `completo` | Implementación actual localizada en el código                                                 |
| Audio en contacto                | `parcial`  | Existen archivos de audio, pero no integración final confirmada en la rama actual             |
| Animaciones / microinteracciones | `completo` | Documentadas en Sprint 3 y coherentes con el cliente actual                                   |

### DWEC

| Control                    | Estado     | Observación                                                   |
| -------------------------- | ---------- | ------------------------------------------------------------- |
| Formularios y validaciones | `completo` | Documentados y probados                                       |
| Buscador AJAX              | `completo` | Documentado y probado                                         |
| Carrito                    | `completo` | Documentado y probado en legacy y React                       |
| Migración a React          | `completo` | Evidencia real en `js/App.jsx`, `pages/`, `js/hooks/`         |
| Tests funcionales          | `completo` | Carpetas de tests y README de validación Sprint 3 disponibles |

### DWES

| Control                    | Estado     | Observación                                                                                |
| -------------------------- | ---------- | ------------------------------------------------------------------------------------------ |
| API REST en PHP            | `completo` | Router y controladores localizados                                                         |
| Base de datos relacional   | `completo` | Schema, SQL completo y diagrama ER localizados                                             |
| Sesiones y roles           | `completo` | Documentados y verificados por pruebas                                                     |
| Documentación de endpoints | `completo` | Existe documento, aunque puede ampliarse                                                   |
| Pruebas Postman            | `parcial`  | La colección existe y funciona; faltan algunas capturas específicas en el documento manual |

### Despliegue

| Control                                                  | Estado     | Observación                                                                                  |
| -------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------- |
| Instalación local con XAMPP                              | `completo` | Guía y evidencias localizadas                                                                |
| Validación de Apache, phpMyAdmin y localhost             | `completo` | Capturas y archivos técnicos disponibles                                                     |
| Healthcheck y sesión local                               | `completo` | Evidencia técnica localizada                                                                 |
| Publicación web                                          | `completo` | Cliente React documentado en GitHub Pages por HTTPS                                          |
| Despliegue final con dominio/SSL/monitorización avanzada | `parcial`  | Hay publicación HTTPS, pero no un despliegue completo tipo AWS documentado como cierre final |

### Digitalización

| Control                           | Estado     | Observación                                                                               |
| --------------------------------- | ---------- | ----------------------------------------------------------------------------------------- |
| Uso de Git/GitHub                 | `completo` | El proyecto está versionado y documenta workflows y ramas                                 |
| Evidencias de build y publicación | `completo` | Localizadas en documentación React y despliegue                                           |
| Trazabilidad documental           | `completo` | Esta carpeta `docs/documentacion-final/` la consolida                                     |
| Evidencias de automatización / CI | `parcial`  | Hay referencias a workflows completados, pero no se ha hecho un anexo específico de CI/CD |

## Problemas encontrados

1. Los diagramas históricos de casos de uso y clases no estaban localizados como figuras finales reutilizables; se han resuelto mediante reconstrucción documental trazable.
2. Si la memoria final se maqueta en Word o LibreOffice, puede ser necesario exportar a PNG o SVG los diagramas Mermaid de Gantt, casos de uso, clases y componentes.
3. La documentación de Postman necesita completar capturas en algunos casos del documento manual.
4. El audio de Sprint 3 no se puede dar por implementado visualmente sin una comprobación final adicional en la rama actual.
5. Parte de la documentación de Sprint 3 conserva rutas históricas `frontend-react/...` y conviene corregir esa explicación al pasar a Word/LibreOffice.
6. Índices automáticos y numeración de figuras/tablas siguen pendientes porque dependen del procesador de textos final.

## Mejoras recomendadas antes de exportar a ODT / DOCX / PDF

1. Completar la portada con tutor/a, centro y fecha final de entrega.
2. Exportar a PNG o SVG los diagramas Mermaid de Gantt, casos de uso, clases y componentes si la herramienta de maquetación final no incrusta Mermaid.
3. Mantener el diagrama de clases simplificado y el de componentes como pareja documental: uno cubre modelado, el otro explica mejor la arquitectura real.
4. Añadir las capturas Postman que faltan para que el anexo de API quede cerrado al 100 %.
5. Confirmar visualmente si el bloque de audio está integrado en la versión final; si no lo está, dejarlo explícitamente como pendiente y no como logro del sprint.
6. Revisar y unificar referencias antiguas a `frontend-react/...` con la estructura real actual del proyecto.
7. Aplicar numeración final a figuras, tablas y anexos desde el procesador de textos.
8. Generar índices automáticos de contenido, figuras y tablas en la versión exportable.

## Secciones que conviene revisar manualmente por el alumno antes de entregar

- Portada y datos institucionales.
- Abstract en inglés, por si se quiere ajustar tono o vocabulario.
- Bibliografía final, para homogeneizar formato de cita.
- Gantt, si se decide añadir figura en lugar de dejar solo la tabla base.
- Bloque de Sprint 3 DIW relacionado con el audio, para no afirmar más de lo que se puede enseñar.
- Numeración final de figuras y coherencia entre texto principal y anexos.
- Orden final de anexos en el documento maquetado.

---

**Conclusión de calidad:** la documentación ya es revisable, defendible y trazable. Lo que falta no obliga a rehacer el trabajo; obliga a cerrar bien la exportación visual de algunos diagramas, las capturas Postman pendientes y la comprobación final del bloque de audio.
