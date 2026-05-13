# Requisitos Sprint 3

Estos Markdown son una version de consulta. La fuente oficial y vinculante sigue siendo el PDF original ubicado en `docs/00-material`.

## 1. Fuente original

- `Sprint 3 – UX + Interactividad.pdf`  
  Ruta exacta: `docs/00-material/diw/sprint-3/Sprint 3 – UX + Interactividad.pdf`  
  Tipo de documento: requisito oficial.
- `CLISprint3.pdf`  
  Ruta exacta: `docs/00-material/dwec/sprint-3/CLISprint3.pdf`  
  Tipo de documento: requisito oficial.
- `despliegue Sprint 3.pdf`  
  Ruta exacta: `docs/00-material/daw/sprint-3/despliegue Sprint 3.pdf`  
  Tipo de documento: requisito oficial.

## 2. Resumen ejecutivo

Sprint 3 se centra en calidad de experiencia, modernización de frontend y validación de despliegue. DIW exige audio, vídeo y animaciones con criterios de aceptación claros. DWEC migra el escaparate completo a React, manteniendo las funcionalidades previas. Despliegue valida el entorno local en XAMPP para pruebas internas, con criterios técnicos medibles y evidencias documentales.

## 3. Requisitos obligatorios

| ID | Requisito | Área | Obligatorio | Evidencia esperada |
|---|---|---|---|---|
| S3-01 | Integrar audio usando la etiqueta `audio`, activado por interacción del usuario, con controles visibles y al menos dos formatos. | DIW | Sí | Audio funcional y compatible en navegador. |
| S3-02 | Integrar vídeo usando la etiqueta `video`, con controles visibles, optimización y comportamiento responsive. | DIW | Sí | Vídeo reproducible en distintos dispositivos. |
| S3-03 | Aplicar animaciones suaves en botones, navegación y elementos visuales, sin resultar intrusivas. | DIW | Sí | Interfaz animada con buena experiencia de usuario. |
| S3-04 | Migrar la aplicación a React manteniendo galería, buscador, carrito y formulario ya existentes. | DWEC | Sí | Proyecto React con paridad funcional. |
| S3-05 | Organizar la aplicación React en componentes y gestionar estado para productos, búsqueda y carrito. | DWEC | Sí | Estructura `src/` y servicios/componentes. |
| S3-06 | Consumir el API desde React mediante `fetch` o `axios` y documentar arquitectura, componentes y gestión de estado. | DWEC | Sí | Código React y README explicativo. |
| S3-07 | Configurar y validar un entorno local con XAMPP, Apache, BBDD importada, proyecto en `htdocs` y acceso desde `localhost`. | DAW | Sí | Entorno local operativo y documentado. |
| S3-08 | Verificar conflictos de puertos/servicios, conexión aplicación-BD y evidencias técnicas de despliegue. | DAW | Sí | Capturas, logs, netstat y prueba de conexión. |

## 4. Recomendaciones

- En DIW, MP4 aparece como formato recomendado para vídeo, no como formato único obligatorio.
- En React no hace falta usar librerías avanzadas de estado; el PDF sugiere `useState` y `useEffect`.
- En despliegue, documentar con capturas y logs facilita cumplir la rúbrica incluso cuando existan otras pruebas equivalentes.

## 5. Entregables

| Entregable | Descripción | Ubicación esperada | Estado verificable |
|---|---|---|---|
| UX interactiva | Audio, vídeo y animaciones integradas en la interfaz. | Repositorio del proyecto | Verificable por comportamiento real. |
| Proyecto React | Frontend migrado a componentes React. | Nueva rama / proyecto React | Verificable por estructura y ejecución. |
| README React | Arquitectura, componentes, estado y ejecución del proyecto. | `README.md` | Verificable por contenido técnico. |
| Tests funcionales Sprint 3 | Validación de React y de multimedia según criterios del sprint. | Carpeta propia de tests / documentación | Verificable por scripts o grabaciones. |
| Entorno local desplegado | Aplicación funcionando en XAMPP con BBDD conectada. | Entorno local y documentación | Verificable por localhost, capturas y logs. |

## 6. Tests o validaciones exigidas

| Prueba | Qué debe comprobar | Evidencia |
|---|---|---|
| Audio | Reproducción funcional, controles y compatibilidad. | Demostración en navegador. |
| Vídeo | Reproducción, visualización responsive y carga correcta. | Demostración o capturas en distintos tamaños. |
| Animaciones | Fluidez, no intrusión y código organizado. | Revisión de interfaz y comportamiento. |
| React | Carga inicial, buscador, carrito y formulario tras la migración. | Scripts o exportaciones de pruebas funcionales. |
| Despliegue local | Apache, BBDD, localhost y conexión efectiva. | Capturas, logs y comprobaciones técnicas. |

## 7. Documentación exigida

- README: en React debe explicar arquitectura, componentes, estado e instrucciones de ejecución.
- Memoria: debe recoger decisiones de UX, migración tecnológica y despliegue local.
- Anexos: capturas, logs, evidencia multimedia, salida de verificaciones y estructura de componentes.
- Pruebas: tests funcionales de React y validaciones del entorno local.
- Vídeo: no se exige explícitamente un vídeo nuevo en los PDFs de Sprint 3 analizados, aunque la demostración visual puede ser necesaria para evidenciar UX y despliegue.
- Evidencias: capturas, pruebas, ramas nuevas, GitHub Pages y documentación de entorno local.

## 8. Relación con otros sprints

Sprint 3 no sustituye funcionalidades previas: las hereda y las refina. DIW añade calidad percibida, DWEC cambia la arquitectura de frontend manteniendo comportamiento y despliegue verifica que el sistema pueda ejecutarse de forma controlada antes de cualquier publicación final.

## 9. Riesgos de interpretación

- La migración a React puede entrar en tensión con la estructura histórica del proyecto si no se interpreta como evolución y no como duplicación permanente.
- El despliegue local en XAMPP puede parecer incompatible con objetivos globales de publicación final; lo más prudente es leerlo como fase interna previa.
- Los criterios “Definition of Done” de DIW son pruebas de aceptación del sprint y no equivalen por sí solos a toda la documentación del proyecto.

## 10. Checklist de cumplimiento

- [ ] Requisito obligatorio localizado
- [ ] Entregables identificados
- [ ] Tests identificados
- [ ] Documentación necesaria identificada
- [ ] Riesgos anotados