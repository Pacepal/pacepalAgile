# Resumen global del proyecto

Estos Markdown son una version de consulta. La fuente oficial y vinculante sigue siendo el PDF original ubicado en `docs/00-material`.

## 1. Fuente original

- `Programación del Proyecto Agile Intermodular 25-26.pdf`  
  Ruta exacta: `docs/00-material/agile/Programación del Proyecto Agile Intermodular 25-26.pdf`  
  Tipo de documento: requisito oficial.
- `Equipos Ágiles.pdf`  
  Ruta exacta: `docs/00-material/agile/Equipos Ágiles.pdf`  
  Tipo de documento: referencia.
- `Masterclass scrum.pdf`  
  Ruta exacta: `docs/00-material/agile/Masterclass scrum.pdf`  
  Tipo de documento: referencia.
- `tarjeta-historia-usuario.pdf`  
  Ruta exacta: `docs/00-material/agile/tarjeta-historia-usuario.pdf`  
  Tipo de documento: plantilla.

## 2. Resumen ejecutivo

El documento marco del proyecto intermodular define un módulo oficial y obligatorio de 2.º de DAW, con evaluación independiente, trabajo por sprints y enfoque Scrum educativo. El producto final debe ser funcional, documentado, accesible y desplegable, integrando aportaciones de interfaces, cliente, servidor, despliegue y sostenibilidad. Los otros PDFs de la carpeta `agile` sirven como apoyo metodológico y no deben convertirse en requisitos obligatorios si el documento marco no los exige expresamente.

## 3. Requisitos obligatorios

| ID | Requisito | Área | Obligatorio | Evidencia esperada |
|---|---|---|---|---|
| GP-01 | El proyecto intermodular es obligatorio para todo el alumnado, con independencia de los módulos superados. | Gobernanza | Sí | Participación del equipo y entrega integrada del proyecto. |
| GP-02 | La evaluación del proyecto es independiente del resto de módulos y genera calificación propia. | Evaluación | Sí | Entrega final y defensa evaluable. |
| GP-03 | El trabajo debe desarrollarse con enfoque ágil basado principalmente en Scrum educativo. | Metodología | Sí | Roles, sprints, planificación, revisión y retrospectiva documentados. |
| GP-04 | El producto final debe ser funcional, documentado, accesible y desplegable. | Producto final | Sí | Aplicación operativa, documentación técnica y evidencias de despliegue. |
| GP-05 | DIW debe aportar prototipos para móvil, tablet y escritorio, guía de estilos, maquetación responsive y criterios WCAG. | Interfaces | Sí | Wireframes/prototipos, guía de estilos y maquetación accesible. |
| GP-06 | DWEC debe aportar formularios con validaciones, listado dinámico, carrito, buscador AJAX y código modular. | Cliente | Sí | Implementación funcional en frontend y documentación asociada. |
| GP-07 | DWES debe aportar script SQL, API REST en PHP con JSON, sesiones, control por roles y documentación de endpoints con pruebas. | Servidor | Sí | Carpeta `db`, API funcional, documentación técnica y pruebas de API. |
| GP-08 | Despliegue debe aportar publicación del proyecto y validación del entorno final. | Despliegue | Sí | Evidencias del entorno desplegado y documentación del proceso. |
| GP-09 | Todo el alumnado debe participar activamente en el desarrollo completo de la aplicación. | Evaluación | Sí | Evidencias de trabajo y defensa final. |
| GP-10 | La presentación final se realizará en mayo, con segunda convocatoria en junio para mejora o recuperación. | Entrega | Sí | Defensa final del proyecto y documentación preparada. |

## 4. Recomendaciones

- Las herramientas colaborativas citadas en el documento marco, como Trello, GitHub o Notion, aparecen como ejemplos de soporte y no como lista cerrada obligatoria.
- Los PDFs `Equipos Ágiles.pdf` y `Masterclass scrum.pdf` aportan contexto metodológico y buenas prácticas, pero no sustituyen al documento marco.
- La `tarjeta-historia-usuario.pdf` debe tratarse como plantilla de apoyo, no como obligación literal de formato salvo indicación expresa en otro PDF oficial.

## 5. Entregables

| Entregable | Descripción | Ubicación esperada | Estado verificable |
|---|---|---|---|
| Proyecto integrado | Producto funcional que combine interfaces, cliente, servidor y despliegue. | Repositorio del proyecto | Verificable por estructura, ejecución y defensa. |
| Documentación técnica | Memoria y anexos técnicos de módulos, endpoints, pruebas y decisiones. | `docs/` o equivalente documental del repositorio | Verificable por presencia y trazabilidad con los sprints. |
| Evidencias ágiles | Roles, planificación, revisiones, retrospectivas y seguimiento. | Documentación del proyecto | Verificable por actas, tablero o anexos. |
| Evidencias de continuidad en FFE | Commits, pull requests y documentación técnica breve. | Repositorio y anexos | Verificable por historial y capturas. |
| Presentación/defensa final | Exposición del producto y argumentación técnica. | Entrega final / enlace / aula | Verificable por vídeo, defensa o material de presentación. |

## 6. Tests o validaciones exigidas

| Prueba | Qué debe comprobar | Evidencia |
|---|---|---|
| Revisión por sprint | Cumplimiento de objetivos incrementales y coherencia entre módulos. | Revisión, retrospectiva o acta del sprint. |
| Validación del producto final | Funcionalidad, usabilidad, accesibilidad, diseño y despliegue. | Aplicación operativa y defensa final. |
| Seguimiento FFE | Mejora funcional, técnica y documental tras febrero. | Commits, pull requests y documentación breve. |

## 7. Documentación exigida

- README: debe explicar el proyecto, su estructura y cómo ejecutar o revisar los distintos módulos.
- Memoria: debe recoger la integración del trabajo interdisciplinar y las decisiones técnicas relevantes.
- Anexos: deben incluir evidencias ágiles, capturas, pruebas y material complementario.
- Pruebas: deben documentarse las verificaciones de frontend, backend y despliegue exigidas por los módulos.
- Vídeo: varios sprints exigen vídeo actualizado o defensa/presentación del trabajo.
- Evidencias: el documento marco menciona commits, pull requests y documentación técnica breve como evidencias verificables.

## 8. Relación con otros sprints

Este documento es el marco de todos los sprints. No sustituye requisitos específicos de DIW, DWEC, DWES o despliegue, sino que fija el mínimo integrado que cada sprint debe ir completando y manteniendo. También introduce una posible ampliación durante FFE para consolidar el producto antes de la presentación final.

## 9. Riesgos de interpretación

- Los ejemplos de herramientas colaborativas no deben tratarse como lista obligatoria cerrada.
- El documento global exige despliegue y, en su tabla de entregables, menciona AWS; ese requisito debe cruzarse con el PDF específico de despliegue para evitar interpretar que el despliegue local lo sustituye.
- Los PDFs de apoyo de `agile` no son el contrato principal de requisitos.
- La distribución horaria por módulos aclara alcance, pero no reemplaza los PDFs específicos de sprint.

## 10. Checklist de cumplimiento

- [ ] Requisito obligatorio localizado
- [ ] Entregables identificados
- [ ] Tests identificados
- [ ] Documentación necesaria identificada
- [ ] Riesgos anotados