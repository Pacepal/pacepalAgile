# Requisitos Sprint 2

Estos Markdown son una version de consulta. La fuente oficial y vinculante sigue siendo el PDF original ubicado en `docs/00-material`.

## 1. Fuente original

- `DI2_Diseño de la aplicación web.pdf`  
  Ruta exacta: `docs/00-material/diw/sprint-2/DI2_Diseño de la aplicación web.pdf`  
  Tipo de documento: requisito oficial.
- `DI2_Landing page accesible.pdf`  
  Ruta exacta: `docs/00-material/diw/sprint-2/DI2_Landing page accesible.pdf`  
  Tipo de documento: requisito oficial.
- `DI2_Optimización de imágenes en formato WebP y adaptación responsive Archivo.pdf`  
  Ruta exacta: `docs/00-material/diw/sprint-2/DI2_Optimización de imágenes en formato WebP y adaptación responsive Archivo.pdf`  
  Tipo de documento: requisito oficial.
- `DI2_Inspección y verificación de la usabilidad de la aplicación web Archivo.pdf`  
  Ruta exacta: `docs/00-material/diw/sprint-2/DI2_Inspección y verificación de la usabilidad de la aplicación web Archivo.pdf`  
  Tipo de documento: requisito oficial.
- `DWEC2_IMPLEMENTACIÓNDELCARRITO.pdf`  
  Ruta exacta: `docs/00-material/dwec/sprint-2/DWEC2_IMPLEMENTACIÓNDELCARRITO.pdf`  
  Tipo de documento: requisito oficial.
- `DWEC2_BuscadorDeProducotosAjax.pdf`  
  Ruta exacta: `docs/00-material/dwec/sprint-2/DWEC2_BuscadorDeProducotosAjax.pdf`  
  Tipo de documento: requisito oficial.
- `2do Sprint DWES.pdf`  
  Ruta exacta: `docs/00-material/dwes/sprint-2/2do Sprint DWES.pdf`  
  Tipo de documento: requisito oficial.

## 2. Resumen ejecutivo

Sprint 2 transforma la landing en una aplicación web funcional, accesible y apoyada en backend. DIW exige diseño completo de páginas, perfiles de usuario, WCAG 2.1 A, optimización WebP e inspección de usabilidad. DWEC añade carrito y buscador AJAX con pruebas funcionales. DWES incorpora persistencia, sesiones, roles, API REST y documentación técnica del servidor.

## 3. Requisitos obligatorios

| ID | Requisito | Área | Obligatorio | Evidencia esperada |
|---|---|---|---|---|
| S2-01 | La aplicación debe incluir al menos HOME, galería, módulo de gestión y página About. | DIW | Sí | Wireframes y aplicación alineada con esas secciones. |
| S2-02 | Cada página de la aplicación debe existir en versión desktop y mobile. | DIW | Sí | Prototipos o bocetos por página y dispositivo. |
| S2-03 | Deben definirse perfiles Invitado, Cliente y Administrador. | DIW | Sí | Diseño/documentación de vistas y tratamiento de datos. |
| S2-04 | La landing y la aplicación deben cumplir como mínimo WCAG 2.1 nivel A, con HTML semántico, ARIA cuando proceda y herramientas de comprobación. | Accesibilidad | Sí | Informe, capturas y comprobaciones. |
| S2-05 | Deben convertirse fotografías a WebP y generarse versiones mobile/desktop respetando maquetas. | DIW | Sí | Recursos optimizados y evidencia de uso. |
| S2-06 | Debe añadirse un apartado específico de inspección de usabilidad en la documentación del proyecto. | DIW | Sí | Sección documental de usabilidad. |
| S2-07 | El carrito debe permitir añadir, contar, visualizar, eliminar productos y calcular total. | DWEC | Sí | Carrito funcional integrado en la interfaz. |
| S2-08 | El buscador debe cargar destacados, consultar un API por AJAX, filtrar por nombre/descripcion y paginar si es necesario. | DWEC | Sí | Galería dinámica y peticiones AJAX. |
| S2-09 | Las pruebas funcionales de carrito y buscador deben almacenarse en carpeta propia del repositorio. | DWEC | Sí | Scripts, grabaciones o exportaciones. |
| S2-10 | El backend debe implementar modelo relacional, sesiones, roles, carrito/pedidos y API REST en PHP con JSON. | DWES | Sí | `src/`, `db/`, endpoints y documentación técnica. |
| S2-11 | La entrega de servidor debe incluir documentación técnica, README y ejemplos de llamadas a la API. | DWES | Sí | `docs/`, `README.md` y ejemplos JSON. |
| S2-12 | El repositorio final del sprint debe mantener estructura organizada, documentación ampliada y evidencias de pruebas. | Integración | Sí | Repositorio coherente y trazable. |

## 4. Recomendaciones

- En accesibilidad se recomienda revisar material del aula y plugins automáticos, sin sustituir la comprobación manual necesaria.
- En el carrito se recomienda usar selectores CSS para el acceso al DOM.
- En el buscador, el API puede ser real o simulado; esa flexibilidad no elimina la obligación de usar AJAX.
- Los ejemplos de tablas del PDF de DWES son orientativos y deben adaptarse al dominio real del proyecto.

## 5. Entregables

| Entregable | Descripción | Ubicación esperada | Estado verificable |
|---|---|---|---|
| Diseño completo de la aplicación | Bocetos y prototipos de todas las páginas en desktop/mobile. | Documentación del proyecto | Verificable por prototipos completos. |
| Informe de accesibilidad | Revisión de la landing y aplicación bajo WCAG 2.1 A. | Documento global o anexos | Verificable por informe y evidencias. |
| Recursos WebP | Fotografías optimizadas con variantes por dispositivo. | Recursos del proyecto | Verificable por archivos y uso. |
| Inspección de usabilidad | Apartado específico con métodos de verificación. | Documento global | Verificable por sección dedicada. |
| Carrito y buscador | Implementaciones cliente de Sprint 2.1 y 2.2. | Nuevas ramas del repositorio | Verificable por comportamiento y README. |
| Backend y BBDD | Código PHP, modelo relacional y API REST. | `src/`, `db/`, `docs/` | Verificable por estructura y pruebas. |
| Pruebas funcionales y técnicas | Evidencias de cliente y servidor. | Carpetas de tests y documentación | Verificable por scripts/capturas. |

## 6. Tests o validaciones exigidas

| Prueba | Qué debe comprobar | Evidencia |
|---|---|---|
| Accesibilidad | Cumplimiento mínimo de WCAG 2.1 A. | Herramientas, plugins e informe final. |
| Usabilidad | Que la aplicación sea usable e intuitiva antes de producción. | Sección de inspección de usabilidad. |
| Carrito | Añadir, visualizar, eliminar y calcular total. | Scripts o grabaciones de pruebas. |
| Buscador AJAX | Carga inicial, búsqueda con/sin resultados y paginación. | Scripts, exportaciones o capturas. |
| Backend | Registro, sesiones, roles, API y persistencia en BBDD. | Pruebas técnicas, ejemplos JSON y capturas. |

## 7. Documentación exigida

- README: funcionamiento del carrito/buscador, API usado y, en servidor, instalación y uso.
- Memoria: diseño completo, accesibilidad, usabilidad, integración cliente-servidor y decisiones técnicas.
- Anexos: capturas, diagrama relacional, endpoints, resultados de pruebas y evidencias visuales.
- Pruebas: scripts o exportaciones funcionales de cliente y pruebas de servidor/API.
- Vídeo: los sprints de cliente arrastran la exigencia de repositorio final con vídeo actualizado.
- Evidencias: publicación en GitHub Pages, historias de usuario actualizadas, documentación ampliada y estado de la base de datos cuando se pruebe.

## 8. Relación con otros sprints

Sprint 2 amplía Sprint 1 sin romper su base visual. Toma la landing ya creada, la convierte en aplicación completa y añade soporte servidor. Sprint 3 heredará estas funcionalidades, tanto para la migración a React como para el despliegue.

## 9. Riesgos de interpretación

- DWEC indica que en Sprint 2 se evalúa comportamiento funcional y no diseño/accesibilidad, pero DIW sí mantiene exigencias de accesibilidad y diseño en paralelo.
- El PDF de servidor incorpora rúbrica y ejemplos técnicos en el mismo documento; conviene no confundir ambos tipos de contenido.
- La publicación en GitHub Pages exigida en cliente puede convivir con otros objetivos de despliegue posteriores; revisar la secuencia si se evalúa el proyecto completo.

## 10. Checklist de cumplimiento

- [ ] Requisito obligatorio localizado
- [ ] Entregables identificados
- [ ] Tests identificados
- [ ] Documentación necesaria identificada
- [ ] Riesgos anotados