# Rúbrica de documentación

Estos Markdown son una versión de consulta. La fuente oficial y vinculante sigue siendo el material original del proyecto. En este caso, la rúbrica documental real está definida en `docs/09-entrega-final/referencias-evaluacion/rubrica.md` y se complementa con exigencias de evidencia descritas en los PDFs oficiales de `docs/00-material`.

## 1. Fuente original

- `docs/09-entrega-final/referencias-evaluacion/rubrica.md`  
  Ruta exacta: `docs/09-entrega-final/referencias-evaluacion/rubrica.md`  
  Tipo de documento: rúbrica documental real del proyecto.
- `Programación del Proyecto Agile Intermodular 25-26.pdf`  
  Ruta exacta: `docs/00-material/agile/Programación del Proyecto Agile Intermodular 25-26.pdf`  
  Tipo de documento: requisito oficial marco.
- `2do Sprint DWES.pdf`  
  Ruta exacta: `docs/00-material/dwes/sprint-2/2do Sprint DWES.pdf`  
  Tipo de documento: requisito oficial con criterios de documentación técnica y validación.
- `despliegue Sprint 3.pdf`  
  Ruta exacta: `docs/00-material/daw/sprint-3/despliegue Sprint 3.pdf`  
  Tipo de documento: requisito oficial con evidencias técnicas de despliegue.

## 2. Resumen ejecutivo

La rúbrica documental real del proyecto evalúa la documentación técnica sobre 10 puntos y distribuye la nota en 12 apartados: elementos iniciales, introducción, tecnologías, planificación, requisitos/modelado, análisis, diseño, pruebas, conclusiones, anexos, glosario/bibliografía y calidad global. Esta rúbrica debe leerse junto con los PDFs oficiales, porque los sprints de DWES y despliegue añaden evidencias obligatorias sobre API, pruebas, capturas, instalación y validación del entorno.

## 3. Requisitos obligatorios

| ID | Requisito | Área | Obligatorio | Evidencia esperada |
|---|---|---|---|---|
| RUB-01 | La documentación debe incluir portada o elementos iniciales, resumen, índice automático y listado de figuras si procede. | Documentación global | Sí | Documento final con estructura inicial completa. |
| RUB-02 | Deben explicarse objetivo general, objetivos específicos y motivación del proyecto. | Introducción | Sí | Apartado introductorio claro en memoria o README ampliado. |
| RUB-03 | Las tecnologías y herramientas deben documentarse y justificarse según su función real en el proyecto. | Tecnologías | Sí | Sección técnica con stack y justificación. |
| RUB-04 | Debe existir planificación con fases y diagrama de Gantt o equivalente verificable. | Gestión | Sí | Planificación documentada y cronograma. |
| RUB-05 | Deben definirse requisitos funcionales y no funcionales, además del modelado relevante. | Requisitos y modelado | Sí | Requisitos, diagramas o modelo de datos documentados. |
| RUB-06 | El análisis debe justificar el problema, la solución y la coherencia con los requisitos. | Análisis | Sí | Memoria analítica y trazabilidad con requisitos. |
| RUB-07 | El diseño debe incluir wireframes, flujo o decisiones visuales coherentes con el proyecto. | Diseño | Sí | Bocetos, wireframes, guía visual y decisiones UX/UI. |
| RUB-08 | La documentación debe incluir pruebas funcionales y, cuando aplique, accesibilidad y usabilidad. | Pruebas | Sí | Casos de prueba, capturas y resultados. |
| RUB-09 | Deben presentarse conclusiones, objetivos alcanzados y mejoras futuras razonables. | Cierre documental | Sí | Apartado final con cierre técnico y mejoras. |
| RUB-10 | Deben añadirse anexos útiles: manual, capturas, pruebas, bocetos y soporte complementario. | Anexos | Sí | Anexos organizados y referenciados. |
| RUB-11 | Deben incluirse glosario y bibliografía o fuentes correctamente citadas. | Fuentes | Sí | Sección de referencias y términos. |
| RUB-12 | La calidad global del documento debe ser profesional, coherente, ordenada y fácil de seguir. | Calidad global | Sí | Revisión global del documento completo. |
| RUB-13 | DWES exige repositorio organizado, documentación técnica clara, endpoints, validaciones y ejemplos verificables. | Documentación servidor | Sí | README, docs DWES, pruebas Postman y ejemplos JSON. |
| RUB-14 | Despliegue exige capturas y validaciones técnicas de Apache, puertos, phpMyAdmin, BBDD y localhost. | Evidencias despliegue | Sí | Capturas, logs, `netstat`, panel XAMPP y prueba local. |

## 4. Recomendaciones

- No usar `docs/09-entrega-final/referencias-evaluacion/rubrica.md` como sustituto de los requisitos de sprint; debe emplearse como criterio de evaluación documental.
- Contrastar cada apartado de la rúbrica con las evidencias reales del repositorio antes de darlo por cumplido.
- Mantener la trazabilidad entre requisito, implementación, prueba y evidencia visual para no perder puntuación en defensa.

## 5. Entregables

| Entregable | Descripción | Ubicación esperada | Estado verificable |
|---|---|---|---|
| Memoria técnica principal | Documento con introducción, requisitos, análisis, diseño, pruebas, conclusiones y anexos. | `docs/` | Verificable por estructura y contenido. |
| README técnico | Instrucciones de instalación, uso, demo y estructura del proyecto. | Raíz del repositorio | Verificable por presencia y actualización. |
| Requisitos y trazabilidad | Resumen normalizado y relación con sprints/módulos. | `docs/01-bitacora/requisitos/normalizados/` o carpeta equivalente seleccionada | Verificable por cobertura de requisitos. |
| Evidencias de pruebas | Capturas, casos de prueba, accesibilidad, usabilidad y validaciones. | `docs/evidencias/` y documentación por módulo | Verificable por capturas y resultados. |
| Evidencias de despliegue | XAMPP, Apache, puertos, phpMyAdmin, conexión BBDD y localhost. | Documentación de despliegue y evidencias | Verificable por material técnico real. |
| Material de apoyo a defensa | Vídeos, anexos, recursos multimedia y soporte visual. | `docs/`, `img/` y recursos enlazados | Verificable por archivos y referencias. |

## 6. Tests o validaciones exigidas

| Prueba | Qué debe comprobar | Evidencia |
|---|---|---|
| Validación documental | Que la memoria cubre los 12 apartados de la rúbrica con calidad suficiente. | Documento final revisable. |
| Validación funcional | Que las funcionalidades principales tienen pruebas o evidencias verificables. | Tests, capturas, vídeos o actas de prueba. |
| Validación de accesibilidad y usabilidad | Que DIW documenta accesibilidad, responsive y evaluación UX cuando se exige. | Lighthouse, WAVE, contrastes, revisión de usabilidad. |
| Validación del backend | Que API, sesiones, roles, BBDD y validaciones están documentados y comprobables. | Postman, capturas, ejemplos y documentación DWES. |
| Validación del despliegue | Que el entorno local o publicado puede revisarse con evidencia técnica suficiente. | XAMPP, localhost, phpMyAdmin, puertos y logs. |

## 7. Documentación exigida

- Elementos iniciales completos: portada, resumen, índice y organización clara.
- Introducción con objetivos y motivación defendible.
- Tecnologías y herramientas explicadas con justificación.
- Planificación con cronograma o Gantt.
- Requisitos funcionales/no funcionales y modelado.
- Análisis del problema y de la solución adoptada.
- Diseño con wireframes, flujo y decisiones visuales.
- Pruebas funcionales, accesibilidad y usabilidad.
- Conclusiones, mejoras y cierre del proyecto.
- Anexos, glosario y bibliografía.
- Evidencias de backend, despliegue y defensa cuando el sprint lo exija.

## 8. Relación con otros sprints

Esta rúbrica atraviesa todo el proyecto: Sprint 1 aporta definición, análisis inicial y landing; Sprint 2 añade diseño completo, accesibilidad, carrito, AJAX, backend y pruebas; Sprint 3 añade interactividad multimedia, migración/arquitectura exigida y despliegue. Por eso la rúbrica debe cruzarse con cada sprint y no evaluarse como un documento aislado.

## 9. Riesgos de interpretación

- Confundir documentación existente con documentación suficiente para la rúbrica.
- Dar por válido un apartado por estar mencionado, aunque no tenga evidencia o desarrollo real.
- Separar demasiado la documentación por módulos y perder la visión global exigida por la rúbrica.
- Tratar los anexos o pruebas como opcionales cuando la rúbrica les da peso explícito.
- Evaluar la documentación solo contra los PDFs de sprint y olvidar `docs/09-entrega-final/referencias-evaluacion/rubrica.md`.

## 10. Checklist de cumplimiento

- [ ] `docs/09-entrega-final/referencias-evaluacion/rubrica.md` reflejado en esta normalización
- [ ] Apartados de la rúbrica identificados
- [ ] Entregables documentales identificados
- [ ] Tests y validaciones identificados
- [ ] Evidencias de despliegue identificadas
- [ ] Riesgos de interpretación anotados