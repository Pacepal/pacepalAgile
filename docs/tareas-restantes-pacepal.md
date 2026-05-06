# Tareas restantes PacePal

> Documento vivo.
> Este documento resume el estado real de PacePal, tareas pendientes, porcentaje de avance y plan de acción.
> Fuente principal: `docs/requisitos-normalizados/`.
> Fuentes oficiales originales: `docs/00-material/`.
> Rúbrica documental: `docs/rubrica.md`.
> No sustituye a los PDFs originales.
> Auditoría realizada solo con fuentes locales del repositorio.

## 0. Regla de actualización

- Este documento debe actualizarse cada vez que se cierre una tarea con evidencia local verificable.
- Cada tarea cerrada debe moverse a la sección `Tareas cerradas` con su evidencia exacta.
- No se puede subir el porcentaje global si no existe evidencia real en código, documentación, tests o capturas locales.
- No se pueden añadir tareas sin prioridad, área, motivo y criterio de aceptación.
- Si se detecta duplicidad documental, debe resolverse en una tarea específica y controlada; no improvisando cambios de estructura.
- Las referencias remotas o públicas pueden figurar como documentadas, pero no cuentan como evidencia verificada en esta auditoría local.

## 1. Fuentes revisadas

| Fuente                      | Ruta                                          | Tipo                        | Uso en auditoría                                             | Estado                     |
| --------------------------- | --------------------------------------------- | --------------------------- | ------------------------------------------------------------ | -------------------------- |
| Definición funcional previa | `docs/01-requisitos/`                         | Markdown legacy             | Comparar solape con normalización y rescatar contenido único | Parcial                    |
| Requisitos normalizados     | `docs/requisitos-normalizados/`               | Markdown normalizado        | Fuente principal para alcance, trazabilidad y sprints        | Revisado                   |
| PDFs originales             | `docs/00-material/`                           | PDF oficial                 | Fuente oficial de contraste; no tocar                        | Revisado                   |
| Rúbrica documental          | `docs/rubrica.md`                             | Markdown                    | Criterio real de evaluación documental                       | Revisado                   |
| README raíz                 | `README.md`                                   | Markdown                    | Estado global, demo documentada y coherencia con repo        | Revisado con incoherencias |
| Código cliente              | `js/`, `pages/`, `css/`                       | Código local                | Verificar implementación real DIW y DWEC                     | Revisado                   |
| Código servidor             | `src/`, `db/`                                 | Código local                | Verificar API, sesiones, roles y modelo de datos             | Revisado                   |
| Tests locales               | `tests/`                                      | Markdown, Postman, Selenium | Medir cobertura y evidencia verificable                      | Parcial                    |
| Evidencias                  | `docs/evidencias/`                            | Capturas y README           | Verificar soporte real a defensa                             | Parcial                    |
| Multimedia local            | `img/`, `docs/03-diw/media/`                  | Imágenes y vídeo local      | Verificar recursos para vídeo/anuncio y Sprint 3 DIW         | Parcial                    |
| Despliegue                  | `docs/06-daw/`, `docs/evidencias/despliegue/` | Markdown y capturas         | Verificar documentación local de despliegue                  | Pendiente                  |

### Comparación de estructuras de requisitos

| Carpeta                         | Existe | Función aparente                                   | Contenido principal                                                   | Duplicidad detectada                                                       | Recomendación                                                                                           |
| ------------------------------- | ------ | -------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `docs/01-requisitos/`           | Sí     | Definición funcional temprana del producto         | `01-definicion-proyecto.md` con concepto, reglas de negocio y módulos | Solape parcial con `01_resumen_global_proyecto.md` y requisitos por sprint | Mantener temporalmente como fuente complementaria, no como carpeta principal de requisitos normalizados |
| `docs/requisitos-normalizados/` | Sí     | Normalización estructurada de requisitos oficiales | Índice, resumen global, rúbrica, módulos y sprints 1/2/3              | Solapa con la definición inicial, pero es más completa y sistemática       | Mantener como fuente principal para el equipo y la auditoría técnica                                    |
| `docs/00-material/`             | Sí     | Fuente oficial original                            | PDFs oficiales por módulo y sprint                                    | No es duplicidad; es la fuente primaria immutable                          | Mantener intacta como contrato original                                                                 |

### Decisión recomendada sobre requisitos

- La carpeta principal que debe mantenerse como fuente normalizada es `docs/requisitos-normalizados/`.
- `docs/01-requisitos/` no debe seguir creciendo como estructura paralela de requisitos normalizados.
- El archivo `docs/01-requisitos/01-definicion-proyecto.md` contiene contenido útil y único sobre concepto, reglas de negocio y alcance funcional temprano; no debe perderse.
- La estructura que conviene evitar es mantener dos carpetas con función casi equivalente para requisitos de proyecto, porque genera dos fuentes de verdad para futuras revisiones técnicas.
- Acción recomendada para fase posterior, sin ejecutarla ahora: fusionar el contenido único de `docs/01-requisitos/01-definicion-proyecto.md` dentro de la documentación principal o reclasificarlo explícitamente como documento conceptual histórico, dejando `docs/requisitos-normalizados/` como única referencia normalizada.

## 2. Estado general de PacePal

| Área                                   | Estado                           | Resumen de auditoría local                                                                                                                                                                 |
| -------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Documentación                          | parcial                          | Hay mucha documentación útil, pero parte está desalineada con el código real, con README desactualizado y varios README de evidencias vacíos o incorrectos.                                |
| DIW                                    | parcial                          | Sprint 1 y 2 están bien documentados y con recursos visuales; Sprint 3 multimedia no aparece integrado en páginas o JS.                                                                    |
| DWEC / Cliente                         | parcial                          | Formularios, sesión, listados y carrito existen en JS modular; el buscador documentado es filtro local, no AJAX real; no existe migración a React.                                         |
| DWES / Servidor                        | parcial                          | Hay API REST en PHP, sesiones, roles, esquema SQL y capturas Postman locales; la documentación técnica no refleja siempre las rutas y el modelo reales.                                    |
| Despliegue                             | pendiente                        | `docs/06-daw/sprint-3/` está vacío y `docs/evidencias/despliegue/sprint-3/` no contiene evidencia local.                                                                                   |
| Sprint 1                               | implementado                     | Existe definición inicial, landing/documentación base, formularios con validación y tests manuales/Selenium.                                                                               |
| Sprint 2                               | parcial                          | Hay backend, carrito, listados y documentación amplia, pero faltan evidencias consistentes, parte de la documentación está desfasada y el buscador no cumple el nivel esperado de AJAX.    |
| Sprint 3                               | pendiente                        | No hay React local, no hay integración real de audio/vídeo en las vistas y el despliegue local no está documentado.                                                                        |
| Tests                                  | parcial                          | Hay pruebas funcionales manuales y un Selenium de registro; Postman local existe, pero hay capturas con fallos y falta cobertura sistemática de Sprint 2 y 3.                              |
| GitHub Pages / publicación             | pendiente                        | Solo hay enlaces documentados en README; no se verifica nada remoto en esta auditoría y queda pendiente de comprobación local/posterior.                                                   |
| Recursos multimedia para vídeo/anuncio | documentado pero no implementado | Existen `img/landing/pacepalTienda.mp4`, `docs/03-diw/media/pacepal_video_base_20s.mp4` y piezas de concurso, pero no hay integración visible en vistas ni trazabilidad clara al Sprint 3. |

## 3. Porcentaje de avance actual

| Área                                                    | Peso | Avance interno | Ponderado | Evidencia                                                                                                                                                                 |
| ------------------------------------------------------- | ---: | -------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Documentación técnica global                            |  15% |            70% |     10,50 | Árbol documental amplio, roadmap y requisitos normalizados; README raíz desactualizado y varios README de evidencias inconsistentes.                                      |
| Requisitos y trazabilidad Sprint 1/2/3                  |  10% |            70% |      7,00 | Existen los 10 archivos normalizados y documentación por sprint; sigue habiendo solape con `docs/01-requisitos/` y falta trazabilidad directa requisito-código-evidencia. |
| DIW: diseño, responsive, accesibilidad, multimedia      |  10% |            60% |      6,00 | Wireframes, guía visual, accesibilidad y media local sí; audio/vídeo/animaciones del Sprint 3 no aparecen integrados en código.                                           |
| DWEC: formulario y validaciones                         |  10% |            85% |      8,50 | `js/formulario/`, `tests/funcionales/`, `tests/selenium/test-registro.js` y páginas PHP muestran implementación real.                                                     |
| DWEC: carrito / selección temporal                      |  10% |            75% |      7,50 | `js/tienda/carrito.js`, `js/tienda/productos.js` y `src/controllers/PedidoController.php` implementan flujo base; faltan evidencias sólidas de Sprint 2.                  |
| DWEC: buscador dinámico / AJAX                          |  10% |            35% |      3,50 | La propia documentación (`docs/04-dwec/sprint-2/02-buscador-ajax.md`) reconoce un filtro local en memoria, sin búsqueda remota ni paginación.                             |
| Sprint 3: migración/arquitectura/interactividad exigida |  15% |            15% |      2,25 | Hay recursos multimedia locales y base JS/PHP previa, pero no hay `package.json`, React local ni integración DIW Sprint 3 verificable.                                    |
| DWES: servidor, API, sesiones, roles, BBDD              |  10% |            75% |      7,50 | `src/api/index.php`, controladores, modelos y `db/schema.sql` existen; documentación y evidencias presentan contradicciones y pruebas parciales.                          |
| Tests funcionales y evidencias                          |   5% |            35% |      1,75 | Sprint 1 sí; Sprint 2 y Sprint 3 tienen vacíos, y Postman local muestra fallos en parte de la colección.                                                                  |
| Despliegue / publicación                                |   5% |            15% |      0,75 | Hay carpetas previstas, pero `docs/06-daw/sprint-3/` y `docs/evidencias/despliegue/sprint-3/` siguen vacías; publicación remota no se audita aquí.                        |

**Porcentaje total estimado:** **55,25 / 100**

## 3.1 Lectura del porcentaje

El porcentaje global de **55,25 / 100** no representa únicamente el avance de código del proyecto, sino el cumplimiento defendible frente a requisitos, rúbrica, documentación, evidencias, pruebas y Sprint 3.

Por eso se separan varias lecturas:

| Métrica                           | Estado estimado | Lectura                                                                                                 |
| --------------------------------- | --------------: | ------------------------------------------------------------------------------------------------------- |
| Producto funcional hasta Sprint 1 |            Alto | Formularios, validaciones y base documental tienen evidencias suficientes.                              |
| Producto funcional hasta Sprint 2 |      Medio-alto | Carrito, tienda, API y parte de servidor existen, pero faltan pruebas y coherencia documental completa. |
| Sprint 3                          |            Bajo | No hay adaptación local verificable a la arquitectura exigida ni integración multimedia cerrada.        |
| Documentación/rúbrica             |           Media | Hay mucha documentación, pero todavía hay contradicciones y apartados pendientes de alineación.         |
| Evidencias y pruebas              |      Baja-media | Existen evidencias parciales, pero no cubren todavía todos los flujos clave.                            |
| Cumplimiento global defendible    |          55,25% | Valor conservador basado solo en evidencia local verificable.                                           |

Conclusión: PacePal no está "al 55% de código", sino al **55,25% de cumplimiento global defendible** en esta auditoría local.

Lectura operativa complementaria:

- La base de Sprint 1 y buena parte de Sprint 2 existe.
- El proyecto no está listo para cerrarse como Sprint 3 completo.
- El porcentaje no sube por tener PDFs o normalización; la mayor pérdida está en adaptación Sprint 3, pruebas/evidencias y despliegue.

## 4. Orden recomendado de ejecución P0

1. P0-01 — Cerrar la brecha de Sprint 3 en cliente y arquitectura
2. P0-02 — Integrar multimedia DIW Sprint 3 con trazabilidad real
3. P0-03 — Documentar y evidenciar despliegue local
4. P0-04 — Alinear documentación crítica y rúbrica con el código real
5. P0-05 — Consolidar pruebas y evidencias mínimas para defensa

Motivo del orden:

- Primero deben cerrarse los huecos de cumplimiento obligatorio que hoy no existen en código o integración local.
- Después debe cerrarse el despliegue local, porque es requisito de Sprint 3 y además genera evidencias para defensa.
- Solo cuando el producto y el despliegue estén alineados tiene sentido corregir la documentación crítica y rematar las evidencias mínimas de evaluación.

## 5. P0 - Bloqueantes para entrega/defensa

### P0-01 - Cerrar Sprint 3 de cliente y arquitectura

**Estado:** pendiente  
**Área:** DWEC  
**Prioridad:** P0  
**Bloquea entrega:** sí  
**Bloquea defensa:** sí

**Problema detectado:**  
Los requisitos normalizados y el PDF de Sprint 3 exigen una arquitectura React obligatoria con componentes reutilizables en formato `.jsx`, manteniendo el comportamiento ya existente: escaparate/galería, carga desde API, buscador por nombre y descripción, carrito con añadir, cantidades, contador, eliminar y total, y formularios de registro/login con validaciones. En local no existe `package.json`, no hay estructura React y el frontend sigue siendo HTML/PHP + JavaScript vanilla. La aplicación actual sirve como referencia funcional y base de regresión, pero no sustituye el entregable React de Sprint 3.

> Esta tarea no debe ejecutarse de golpe. React no es opcional. La decisión técnica de ubicación ya queda cerrada en P0-01A; lo siguiente será crear solo la base React/Vite en `frontend-react/`, y después migrar por bloques galería, buscador, carrito, formularios y documentación.

**Decisión técnica P0-01A:**

- se aprueba `frontend-react/` como ubicación del frontend React obligatorio de Sprint 3;
- será una app React/Vite aislada dentro del mismo repositorio;
- usará componentes reutilizables en formato `.jsx`;
- consumirá la API PHP real existente como fuente principal;
- la aplicación PHP + JavaScript vanilla actual se mantiene intacta como referencia funcional y base de regresión;
- JavaScript vanilla no se acepta como sustituto del entregable React;
- no se migrará todo el proyecto de golpe: primero base React/Vite, después migraciones funcionales por bloques.

**Qué se debe hacer:**

- ejecutar la decisión ya aprobada de ubicar el cliente React/JSX en `frontend-react/` sin duplicar de forma permanente la aplicación histórica;
- implementar una base React obligatoria con componentes reutilizables en formato `.jsx` y conexión con la API existente;
- mantener la paridad funcional con escaparate, búsqueda, carrito y formularios afectados;
- conservar la aplicación PHP + JavaScript vanilla como referencia funcional sin romperla ni usarla como sustituto del entregable React;
- documentar la arquitectura elegida, la relación con la API actual y la estrategia de validación;
- verificar que la migración no rompa las funcionalidades previas.

**Subtareas de P0-01:**

| Subtarea                                            | Estado    | Alcance inmediato                                                                                                  |
| --------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------ |
| `P0-01A - Decisión de ubicación React/JSX`          | cerrada   | Se aprueba `frontend-react/` como app React/Vite aislada con componentes `.jsx`, API PHP real y app PHP/JS intacta |
| `P0-01B - Crear base React/Vite en frontend-react/` | cerrada   | Base React/Vite creada en `frontend-react/` con componentes `.jsx`, hooks y servicios placeholder, sin migrar aun funcionalidades |
| `P0-01C - Migrar galería y carga desde API`         | pendiente | Llevar escaparate/productos al nuevo cliente React consumiendo la API real                                         |
| `P0-01D - Migrar buscador por nombre y descripción` | pendiente | Reimplementar el buscador exigido en React manteniendo paridad funcional                                           |
| `P0-01E - Migrar carrito`                           | pendiente | Llevar alta, contador, cantidades, borrado y total al cliente React                                                |
| `P0-01F - Migrar formulario de registro/login`      | pendiente | Llevar autenticación y validaciones al cliente React                                                               |
| `P0-01G - Documentar arquitectura y evidencias`     | pendiente | Explicar la convivencia entre legado y React y dejar pruebas de funcionamiento                                     |

**Archivos implicados:**

| Archivo/ruta                                                 | Acción             | Motivo                                                                    |
| ------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------- |
| `docs/requisitos-normalizados/04_dwec_cliente_requisitos.md` | revisar            | Confirmar el alcance exacto de Sprint 3 antes de ejecutar trabajo técnico |
| `js/tienda/productos.js`                                     | revisar            | Punto de partida del escaparate actual                                    |
| `js/tienda/carrito.js`                                       | revisar            | Flujo actual de carrito que debe mantenerse                               |
| `src/api/index.php`                                          | revisar            | API actual que debe seguir siendo consumida                               |
| `frontend-react/`                                            | crear más adelante | Ubicación aprobada para la app React/Vite aislada exigida por Sprint 3    |

**Criterio de aceptación:**

- [ ] Existe una implementación local trazable de Sprint 3 en React con componentes `.jsx`.
- [ ] La nueva arquitectura mantiene escaparate/galería, carga desde API, buscador por nombre y descripción, carrito y formularios sin regresiones visibles.
- [ ] La aplicación PHP/JS actual sigue intacta y usable como referencia funcional.
- [ ] La documentación explica arquitectura React, componentes, consumo de API y estrategia de integración.

**Evidencias necesarias:**

- capturas;
- tests;
- grabaciones;
- README;
- commits;
- documentación.

### P0-02 - Integrar multimedia DIW Sprint 3 con trazabilidad real

**Estado:** pendiente  
**Área:** DIW  
**Prioridad:** P0  
**Bloquea entrega:** sí  
**Bloquea defensa:** sí

**Problema detectado:**  
Hay recursos multimedia locales (`img/landing/pacepalTienda.mp4`, `docs/03-diw/media/pacepal_video_base_20s.mp4`), pero no aparecen referenciados en páginas, JS o documentación operativa de Sprint 3. Tampoco hay evidencia local de audio integrado y solo se observan animaciones menores de transición/cookies.

**Qué se debe hacer:**

- decidir qué pieza audiovisual será la oficial para Sprint 3;
- integrar vídeo y, si aplica, audio/animaciones según el alcance real del PDF;
- documentar dónde se usa cada recurso y con qué objetivo UX;
- generar evidencia visual local de funcionamiento responsive.

**Archivos implicados:**

| Archivo/ruta                                   | Acción  | Motivo                                                  |
| ---------------------------------------------- | ------- | ------------------------------------------------------- |
| `docs/03-diw/README.md`                        | editar  | Debe reflejar Sprint 3 y no quedarse en Sprint 1/2      |
| `docs/03-diw/media/pacepal_video_base_20s.mp4` | revisar | Recurso local existente pendiente de trazabilidad       |
| `img/landing/pacepalTienda.mp4`                | revisar | Recurso local existente pendiente de integración        |
| `pages/`                                       | revisar | No hay evidencia textual de etiquetas `video` o `audio` |
| `docs/evidencias/diw/sprint-3/`                | crear   | No existe evidencia local específica de Sprint 3 DIW    |

**Criterio de aceptación:**

- [ ] El recurso multimedia aparece integrado en la interfaz local.
- [ ] Existe documentación Sprint 3 DIW alineada con el recurso usado.
- [ ] Hay capturas o grabación local que prueban su funcionamiento.

**Evidencias necesarias:**

- capturas;
- grabaciones;
- documentación;
- recursos multimedia documentados.

### P0-03 - Documentar y evidenciar despliegue local

**Estado:** pendiente  
**Área:** despliegue  
**Prioridad:** P0  
**Bloquea entrega:** sí  
**Bloquea defensa:** sí

**Problema detectado:**  
`docs/06-daw/sprint-3/` está vacío y `docs/evidencias/despliegue/sprint-3/` también. El requisito de despliegue local en XAMPP no tiene documentación ni evidencia local verificable.

**Qué se debe hacer:**

- documentar instalación/configuración local reproducible;
- registrar evidencias de Apache, puertos, phpMyAdmin, BBDD y acceso local;
- dejar trazado el flujo de validación del entorno local;
- enlazar esta parte con README y documentación global.

**Archivos implicados:**

| Archivo/ruta                           | Acción                           | Motivo                                                            |
| -------------------------------------- | -------------------------------- | ----------------------------------------------------------------- |
| `docs/06-daw/sprint-3/`                | crear archivos dentro            | La carpeta existe, pero no contiene documentación                 |
| `docs/evidencias/despliegue/sprint-3/` | crear índice y añadir evidencias | La carpeta existe, pero no contiene capturas ni README útil       |
| `docs/evidencias/despliegue/README.md` | editar                           | Ahora mismo reconoce ausencia de evidencias                       |
| `README.md`                            | editar                           | Debe reflejar ejecución local real cuando exista la guía correcta |

**Criterio de aceptación:**

- [ ] Existe guía local de despliegue reproducible.
- [ ] Hay evidencias locales técnicas suficientes para la defensa.
- [ ] La documentación de despliegue enlaza con README y evidencias.

**Evidencias necesarias:**

- capturas;
- logs;
- README;
- documentación;
- validaciones del entorno local.

### P0-04 - Alinear documentación crítica y rúbrica con el código real

**Estado:** pendiente  
**Área:** documentación  
**Prioridad:** P0  
**Bloquea entrega:** no  
**Bloquea defensa:** sí

**Problema detectado:**  
Hay desalineaciones graves entre documentación y código real. El README raíz tiene ruta antigua y árbol desfasado. `docs/05-dwes/sprint-2/endpoints-api.md` no coincide con el router real. `docs/05-dwes/sprint-2/modelo-relacional.md` no coincide del todo con `db/schema.sql`. `docs/evidencias/dwes/README.md` niega evidencias que sí existen. La rúbrica ya está incorporada a `docs/requisitos-normalizados/02_rubrica_documentacion.md`, pero falta propagar esa precisión a la documentación operativa del proyecto.

**Qué se debe hacer:**

- revisar README raíz frente al estado real del repositorio;
- corregir documentación técnica de endpoints, modelo de datos y evidencias;
- asegurar que la memoria/documentación cubra los apartados de la rúbrica con referencias reales;
- eliminar contradicciones entre README de evidencias y contenido real.

**Archivos implicados:**

| Archivo/ruta                                               | Acción  | Motivo                                                                     |
| ---------------------------------------------------------- | ------- | -------------------------------------------------------------------------- |
| `README.md`                                                | editar  | Contiene ruta antigua y referencias que no describen bien el estado actual |
| `docs/05-dwes/sprint-2/endpoints-api.md`                   | editar  | Documenta endpoints que no coinciden con `src/api/index.php`               |
| `docs/05-dwes/sprint-2/modelo-relacional.md`               | editar  | Resume campos/relaciones que no coinciden plenamente con `db/schema.sql`   |
| `docs/evidencias/dwes/README.md`                           | editar  | Dice que no hay evidencias, pero sí hay imágenes locales                   |
| `docs/requisitos-normalizados/02_rubrica_documentacion.md` | revisar | Ya incorpora `docs/rubrica.md`; debe mantenerse como referencia central    |

**Criterio de aceptación:**

- [ ] La documentación crítica coincide con el código y la estructura reales.
- [ ] La defensa puede seguir una trazabilidad clara entre requisito, código y evidencia.
- [ ] No quedan contradicciones obvias entre README, docs técnicas y evidencias locales.

**Evidencias necesarias:**

- README;
- documentación;
- capturas;
- pruebas locales;
- trazabilidad documental.

### P0-05 - Consolidar pruebas y evidencias mínimas para defensa

**Estado:** parcial  
**Área:** tests  
**Prioridad:** P0  
**Bloquea entrega:** no  
**Bloquea defensa:** sí

**Problema detectado:**  
Sprint 1 tiene pruebas y evidencias razonables, pero Sprint 2 y Sprint 3 no están respaldados con el mismo nivel. Hay colección Postman local y capturas, pero una ejecución visible muestra varios fallos; faltan evidencias locales de carrito, actividades, admin y despliegue en su estado final.

**Qué se debe hacer:**

- completar o rehacer la colección local de pruebas con resultados coherentes;
- dejar evidencia local de funcionalidades clave de Sprint 2 y de todo lo que se cierre en Sprint 3;
- enlazar cada evidencia con su documento o tarea correspondiente;
- distinguir claramente pruebas pasadas, parciales y pendientes.

**Archivos implicados:**

| Archivo/ruta                                    | Acción  | Motivo                                                               |
| ----------------------------------------------- | ------- | -------------------------------------------------------------------- |
| `tests/tests.md`                                | editar  | Hoy se centra en Sprint 1 y no cubre el estado completo del proyecto |
| `tests/postman/pacepal.postman_collection.json` | revisar | Base local de pruebas API                                            |
| `docs/evidencias/dwes/postman1.png`             | revisar | Evidencia local de ejecución con fallos visibles                     |
| `docs/evidencias/dwes/postman2.png`             | revisar | Evidencia local adicional de Postman                                 |
| `tests/funcionales/`                            | ampliar | Ya existe para Sprint 1, pero faltan casos para Sprint 2 y Sprint 3  |

**Criterio de aceptación:**

- [ ] Existe cobertura mínima verificable para los bloques evaluables del proyecto.
- [ ] Las evidencias reflejan el estado real del código, sin placeholders.
- [ ] Las capturas y documentos permiten defender qué funciona, qué falla y qué queda pendiente.

**Evidencias necesarias:**

- tests;
- capturas;
- documentación;
- commits;
- grabaciones si procede.

## 6. P1 - Necesario antes de entrega seria

### P1-01 - Resolver la duplicidad controlada entre requisitos previos y requisitos normalizados

**Estado:** pendiente  
**Área:** documentación  
**Prioridad:** P1  
**Bloquea entrega:** no  
**Bloquea defensa:** no

**Problema detectado:**  
`docs/01-requisitos/01-definicion-proyecto.md` y `docs/requisitos-normalizados/` cumplen funciones cercanas pero no idénticas. Si no se resuelve la duplicidad en una fase posterior, el equipo o los mantenedores del proyecto pueden trabajar sobre dos fuentes de verdad.

**Qué se debe hacer:**

- identificar qué contenido del documento inicial sigue siendo único;
- decidir si se absorbe en la documentación principal o se reclasifica como documento histórico/conceptual;
- dejar una única ruta recomendada para requisitos normalizados.

**Archivos implicados:**

| Archivo/ruta                                                 | Acción  | Motivo                                                      |
| ------------------------------------------------------------ | ------- | ----------------------------------------------------------- |
| `docs/01-requisitos/01-definicion-proyecto.md`               | revisar | Contiene alcance funcional y reglas de negocio tempranas    |
| `docs/requisitos-normalizados/01_resumen_global_proyecto.md` | revisar | Documento global que ya cubre buena parte del marco oficial |
| `docs/tareas-restantes-pacepal.md`                           | editar  | Debe registrar la decisión y su seguimiento                 |

**Criterio de aceptación:**

- [ ] La decisión documental queda registrada y justificada.
- [ ] El contenido único no se pierde.
- [ ] Se evita una segunda fuente principal de requisitos.

**Evidencias necesarias:**

- documentación;
- trazabilidad entre carpetas;
- decisión registrada.

### P1-02 - Ampliar cobertura de pruebas automatizadas y manuales fuera de Sprint 1

**Estado:** pendiente  
**Área:** tests  
**Prioridad:** P1  
**Bloquea entrega:** no  
**Bloquea defensa:** no

**Problema detectado:**  
La automatización visible se concentra en el registro. Carrito, actividades, perfil, admin, reportes y consumo de API no tienen el mismo nivel de formalización en tests locales.

**Qué se debe hacer:**

- definir casos mínimos para carrito, actividad, perfil y admin;
- automatizar lo razonable y documentar manualmente lo demás;
- mantener resultados junto a evidencias y documentación técnica.

**Archivos implicados:**

| Archivo/ruta                                             | Acción  | Motivo                                                                           |
| -------------------------------------------------------- | ------- | -------------------------------------------------------------------------------- |
| `tests/selenium/test-registro.js`                        | revisar | Base de automatización existente                                                 |
| `tests/selenium/`                                        | ampliar | Ya existe una base de automatización, pero faltan pruebas de otros flujos        |
| `tests/funcionales/`                                     | ampliar | Ya existe para Sprint 1, pero faltan casos documentados para Sprint 2 y Sprint 3 |
| `docs/04-dwec/sprint-2/08-tests-funcionales-sprint-2.md` | editar  | Hoy reconoce validación manual genérica                                          |

**Criterio de aceptación:**

- [ ] Existen casos de prueba nuevos para los flujos principales de Sprint 2 y 3.
- [ ] Los resultados quedan guardados localmente.
- [ ] La documentación técnica enlaza con esos casos.

**Evidencias necesarias:**

- tests;
- capturas;
- documentación.

### P1-03 - Consolidar la trazabilidad de vídeo, anuncio y material multimedia

**Estado:** pendiente  
**Área:** multimedia  
**Prioridad:** P1  
**Bloquea entrega:** no  
**Bloquea defensa:** no

**Problema detectado:**  
Existen archivos multimedia locales y además enlaces externos documentados en README, pero no hay una trazabilidad clara que indique qué vídeo es base, cuál es entrega final, cuál pertenece al anuncio o al sprint, y cuál solo está documentado externamente.

**Qué se debe hacer:**

- inventariar los recursos multimedia locales;
- distinguir vídeo local, vídeo documentado externamente y piezas de concurso/sostenibilidad;
- enlazar cada recurso con el sprint o entregable al que corresponde.

**Archivos implicados:**

| Archivo/ruta                                   | Acción  | Motivo                                        |
| ---------------------------------------------- | ------- | --------------------------------------------- |
| `README.md`                                    | editar  | Hoy solo documenta enlaces externos a YouTube |
| `docs/03-diw/media/pacepal_video_base_20s.mp4` | revisar | Posible base audiovisual del proyecto         |
| `img/landing/pacepalTienda.mp4`                | revisar | Vídeo local de tienda/landing                 |
| `docs/07-sostenibilidad/concurso/`             | revisar | Material visual complementario                |

**Criterio de aceptación:**

- [ ] El inventario multimedia local es claro.
- [ ] Los enlaces externos quedan marcados como documentados y no verificados.
- [ ] Cada recurso tiene propósito y ubicación trazables.

**Evidencias necesarias:**

- documentación;
- inventario de archivos;
- capturas si aplica.

### P1-04 - Revisar permisos y alcance admin frente a la documentación existente

**Estado:** pendiente  
**Área:** DWES  
**Prioridad:** P1  
**Bloquea entrega:** no  
**Bloquea defensa:** no

**Problema detectado:**  
La documentación de roles sugiere capacidades administrativas más amplias que las observables directamente en el router y controladores. Por ejemplo, se habla de CRUD de productos admin, pero el router local no expone ese bloque de forma equivalente.

**Qué se debe hacer:**

- revisar el alcance admin real del proyecto;
- corregir la documentación para que no prometa más de lo que existe;
- si falta funcionalidad considerada esencial, convertirla en tarea técnica explícita.

**Archivos implicados:**

| Archivo/ruta                            | Acción  | Motivo                                            |
| --------------------------------------- | ------- | ------------------------------------------------- |
| `docs/05-dwes/sprint-2/roles-acceso.md` | editar  | Describe capacidades admin que deben contrastarse |
| `src/api/index.php`                     | revisar | Fuente local real de rutas y permisos             |
| `js/admin/panelAdmin.js`                | revisar | Cliente admin real                                |
| `src/controllers/UsuarioController.php` | revisar | CRUD admin de usuarios                            |

**Criterio de aceptación:**

- [ ] La documentación de roles coincide con el backend real.
- [ ] El alcance admin queda defendible y sin sobrepromesas.
- [ ] Las carencias detectadas se convierten en tareas explícitas si procede.

**Evidencias necesarias:**

- documentación;
- revisión de código;
- capturas del panel admin si aplica.

## 7. P2 - Mejoras posteriores o no bloqueantes

| ID    | Tarea                                                                                   | Área          | Motivo                                                                             | Estado    |
| ----- | --------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------- | --------- |
| P2-01 | Limpiar README vacíos o mínimos de evidencias                                           | documentación | Hay README que no aportan trazabilidad real o están vacíos                         | pendiente |
| P2-02 | Normalizar nomenclatura y rutas históricas desfasadas en documentación                  | documentación | El README raíz refleja rutas antiguas y estructura previa                          | pendiente |
| P2-03 | Completar glosario, bibliografía y anexos globales                                      | documentación | La rúbrica los exige y no están claramente centralizados                           | pendiente |
| P2-04 | Añadir regresión de cookies, perfil y reportes                                          | tests         | Hay flujos implementados con baja evidencia formal                                 | pendiente |
| P2-05 | Preparar verificación posterior de publicación pública una vez cerrado el entorno local | despliegue    | La publicación existe solo como referencia documentada externa, no verificada aquí | pendiente |

## 8. Archivos implicados por tipo de acción

### Archivos a crear

| Archivo/ruta propuesta                                          | Área       | Prioridad | Función                                            |
| --------------------------------------------------------------- | ---------- | --------- | -------------------------------------------------- |
| `docs/06-daw/sprint-3/01-despliegue-local-xampp.md`             | despliegue | P0        | Guía reproducible del entorno local                |
| `docs/06-daw/sprint-3/02-validacion-localhost-bbdd.md`          | despliegue | P0        | Validación técnica del entorno local               |
| `docs/evidencias/despliegue/sprint-3/README.md`                 | despliegue | P0        | Índice de evidencias reales de despliegue          |
| `docs/evidencias/diw/sprint-3/README.md`                        | DIW        | P0        | Índice de evidencias multimedia e interactividad   |
| `tests/funcionales/06-carrito-sprint-2.md`                      | tests      | P0        | Caso funcional del carrito                         |
| `tests/funcionales/07-actividades-join-leave.md`                | tests      | P1        | Caso funcional de participación en actividades     |
| `pendiente de decidir ubicación — documentación React Sprint 3` | DWEC       | P0        | Explicar arquitectura cliente exigida por Sprint 3 |

### Archivos a editar

| Archivo/ruta real                                        | Área          | Prioridad | Qué habría que cambiar                                                                      |
| -------------------------------------------------------- | ------------- | --------- | ------------------------------------------------------------------------------------------- |
| `docs/tareas-restantes-pacepal.md`                       | documentación | P0        | Actualizar como documento vivo tras cada cierre de tarea                                    |
| `README.md`                                              | documentación | P0        | Actualizar ruta base, estado real, ejecución local y trazabilidad de recursos/documentación |
| `docs/05-dwes/sprint-2/endpoints-api.md`                 | DWES          | P0        | Alinear endpoints y métodos con `src/api/index.php`                                         |
| `docs/05-dwes/sprint-2/modelo-relacional.md`             | DWES          | P0        | Alinear modelo documental con `db/schema.sql` y evidencias reales                           |
| `docs/evidencias/dwes/README.md`                         | DWES          | P0        | Reflejar que sí existen evidencias locales y explicar su alcance                            |
| `docs/evidencias/despliegue/README.md`                   | despliegue    | P0        | Dejar de ser un placeholder y enlazar evidencias reales                                     |
| `docs/03-diw/README.md`                                  | DIW           | P0        | Incluir Sprint 3 multimedia y trazabilidad de recursos                                      |
| `docs/04-dwec/sprint-2/02-buscador-ajax.md`              | DWEC          | P0        | Ajustar el documento al comportamiento real o convertir la brecha en tarea explícita        |
| `docs/04-dwec/sprint-2/08-tests-funcionales-sprint-2.md` | tests         | P1        | Sustituir validación genérica por casos concretos y resultados                              |
| `docs/05-dwes/sprint-2/roles-acceso.md`                  | DWES          | P1        | Ajustar permisos y alcance admin a la implementación real                                   |

### Archivos a revisar

| Archivo/ruta real                               | Área       | Prioridad | Qué hay que comprobar                                |
| ----------------------------------------------- | ---------- | --------- | ---------------------------------------------------- |
| `src/api/index.php`                             | DWES       | P0        | Rutas, métodos y coherencia con documentación        |
| `db/schema.sql`                                 | DWES       | P0        | Modelo real de tablas, campos y relaciones           |
| `src/controllers/AuthController.php`            | DWES       | P0        | Flujo real de login, sesión y logout                 |
| `src/controllers/PedidoController.php`          | DWEC/DWES  | P0        | Flujo de carrito y pedido en sesión/BD               |
| `js/tienda/productos.js`                        | DWEC       | P0        | Si el buscador es AJAX real o filtro local           |
| `js/tienda/carrito.js`                          | DWEC       | P0        | Cobertura del carrito y su consumo de API            |
| `js/admin/panelAdmin.js`                        | DWES       | P1        | Alcance real del panel admin                         |
| `tests/postman/pacepal.postman_collection.json` | tests      | P0        | Qué endpoints cubre y cómo deben quedar sus asserts  |
| `docs/evidencias/dwes/diagramaER.png`           | DWES       | P0        | Qué modelo refleja frente al `schema.sql` actual     |
| `docs/evidencias/dwes/postman1.png`             | tests      | P0        | Qué fallos reales muestra la prueba local            |
| `docs/evidencias/dwes/postman2.png`             | tests      | P0        | Qué parte del backend ya dispone de evidencia visual |
| `docs/03-diw/media/pacepal_video_base_20s.mp4`  | multimedia | P1        | Si es recurso base o evidencia final                 |
| `img/landing/pacepalTienda.mp4`                 | multimedia | P1        | Si forma parte del Sprint 3 o del anuncio            |

### Archivos que no deben tocarse

| Archivo/ruta                                                                                                     | Motivo                               |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| `docs/00-material/agile/Programación del Proyecto Agile Intermodular 25-26.pdf`                                  | Fuente oficial original              |
| `docs/00-material/agile/Equipos Ágiles.pdf`                                                                      | Material oficial o de apoyo original |
| `docs/00-material/agile/Masterclass scrum.pdf`                                                                   | Material oficial o de apoyo original |
| `docs/00-material/agile/tarjeta-historia-usuario.pdf`                                                            | Plantilla original de apoyo          |
| `docs/00-material/diw/sprint-1/DI1_ Análisis y Diseño de una Interfaz Web Interactiva.pdf`                       | Requisito oficial original           |
| `docs/00-material/diw/sprint-1/DI1_Implementación Landing Page.pdf`                                              | Requisito oficial original           |
| `docs/00-material/diw/sprint-1/DI1_Investigación de Tendencias y Análisis de Competencia.pdf`                    | Requisito oficial original           |
| `docs/00-material/diw/sprint-2/DI2_Diseño de la aplicación web.pdf`                                              | Requisito oficial original           |
| `docs/00-material/diw/sprint-2/DI2_Landing page accesible.pdf`                                                   | Requisito oficial original           |
| `docs/00-material/diw/sprint-2/DI2_Optimización de imágenes en formato WebP y adaptación responsive Archivo.pdf` | Requisito oficial original           |
| `docs/00-material/diw/sprint-2/DI2_Inspección y verificación de la usabilidad de la aplicación web Archivo.pdf`  | Requisito oficial original           |
| `docs/00-material/diw/sprint-3/Sprint 3 – UX + Interactividad.pdf`                                               | Requisito oficial original           |
| `docs/00-material/dwec/sprint-1/DWEC1_IMPLEMENTACIÓNDELFORMULARIO.pdf`                                           | Requisito oficial original           |
| `docs/00-material/dwec/sprint-2/DWEC2_IMPLEMENTACIÓNDELCARRITO.pdf`                                              | Requisito oficial original           |
| `docs/00-material/dwec/sprint-2/DWEC2_BuscadorDeProducotosAjax.pdf`                                              | Requisito oficial original           |
| `docs/00-material/dwec/sprint-3/CLISprint3.pdf`                                                                  | Requisito oficial original           |
| `docs/00-material/dwes/sprint-2/2do Sprint DWES.pdf`                                                             | Requisito oficial original           |
| `docs/00-material/daw/sprint-3/despliegue Sprint 3.pdf`                                                          | Requisito oficial original           |
| `docs/00-material/referencia/Ejemplo guia de estilos 1.pdf`                                                      | Referencia original                  |
| `docs/00-material/referencia/Ejemplo guia de estilos 2.pdf`                                                      | Referencia original                  |
| `docs/00-material/referencia/Proyecto Final Mi burbuja de té - Cristina Pascua.pdf`                              | Referencia original                  |
| `docs/00-material/referencia/UD8_Guias de estilo.pptx.pdf`                                                       | Referencia original                  |

## 9. Riesgos principales

| Riesgo                                                                   | Impacto | Prioridad | Mitigación                                                                                                |
| ------------------------------------------------------------------------ | ------- | --------- | --------------------------------------------------------------------------------------------------------- |
| Requisitos mal interpretados                                             | Alto    | P0        | Trabajar siempre desde `docs/requisitos-normalizados/` y contrastar con `docs/00-material/`               |
| Sprint 3 entendido como nuevas features y no como adaptación             | Alto    | P0        | Mantener paridad funcional y documentar la migración como evolución del producto                          |
| Funcionalidades anteriores rotas al adaptar cliente                      | Alto    | P0        | Revisión de regresión sobre formularios, carrito, listados y sesión                                       |
| Tests ausentes o incompletos                                             | Alto    | P0        | Completar casos locales y resultados guardados en repo                                                    |
| Documentación no alineada con rúbrica                                    | Alto    | P0        | Usar `docs/rubrica.md` y `docs/requisitos-normalizados/02_rubrica_documentacion.md` como base de revisión |
| Despliegue no verificable                                                | Alto    | P0        | Crear guía local y evidencias técnicas reproducibles                                                      |
| Assets multimedia ubicados pero no documentados                          | Medio   | P1        | Inventario multimedia con propósito, sprint y evidencia                                                   |
| Vídeo/anuncio sin integración clara                                      | Medio   | P1        | Decidir pieza oficial y relacionarla con DIW o sostenibilidad                                             |
| Ausencia de trazabilidad entre requisitos, código y evidencias           | Alto    | P0        | Mantener este backlog y corregir docs críticas                                                            |
| Duplicidad entre `docs/01-requisitos/` y `docs/requisitos-normalizados/` | Medio   | P1        | Resolver en tarea controlada y posterior                                                                  |
| Equipo trabajando sobre dos fuentes de verdad distintas                  | Alto    | P1        | Declarar una sola fuente principal: `docs/requisitos-normalizados/`                                       |

## 10. Checklist final de aceptación

### Auditoría y documentación base

- [x] Requisitos normalizados revisados.
- [x] `docs/01-requisitos/` revisado.
- [x] `docs/requisitos-normalizados/` revisado.
- [x] Decisión recomendada sobre carpeta única de requisitos documentada.
- [x] PDFs originales localizados.
- [x] Rúbrica real aplicada.
- [x] Sprint 1 revisado.
- [x] Sprint 2 revisado.
- [x] Sprint 3 revisado.
- [x] Porcentaje calculado con evidencias.
- [x] P0 definidos.
- [x] P1 definidos.
- [x] P2 definidos.
- [x] Archivos implicados identificados.
- [x] Tests pendientes identificados.
- [x] Evidencias pendientes identificadas.
- [x] Recursos multimedia documentados.
- [x] No se ha modificado código.
- [x] No se han movido, borrado ni renombrado carpetas.

### Cierre real del proyecto

- [ ] Despliegue local documentado y evidenciado.
- [ ] Publicación externa verificada, si finalmente aplica.
- [ ] README/documentación alineados.
- [ ] Sprint 3 cliente implementado y evidenciado.
- [ ] Multimedia DIW Sprint 3 integrada y evidenciada.
- [ ] Pruebas mínimas de defensa completadas.

## 11. Tareas cerradas

| Tarea                                       | Estado  | Evidencia                                                                                                                             | Nota                                                                                                                                                                                        |
| ------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `P0-01B - Crear base React/Vite en frontend-react/` | cerrada | `frontend-react/package.json`, `frontend-react/src/main.jsx`, `frontend-react/src/App.jsx`, `frontend-react/README.md` | Base React/Vite creada con componentes `.jsx`, hooks y servicios placeholder, sin migrar todavia galeria, buscador, carrito ni formularios. |
| `P0-01A - Decisión de ubicación React/JSX`  | cerrada | `docs/tareas-restantes-pacepal.md`                                                                                                    | Se decide crear `frontend-react/` como app React/Vite aislada, usando componentes `.jsx`, consumiendo la API PHP real y manteniendo la app PHP/JS actual intacta como referencia funcional. |
| Sprint 0: base documental y backlog inicial | cerrada | `docs/02-agile/03-notas-sprint0.md`, `docs/evidencias/01-sprint0/sprint0-tablero.png`, `docs/evidencias/01-sprint0/sprint0-arbol.png` | Existe trazabilidad local del arranque del proyecto                                                                                                                                         |
| Definición funcional inicial del proyecto   | cerrada | `docs/01-requisitos/01-definicion-proyecto.md`                                                                                        | Documento funcional amplio, aunque ya no debe ser la fuente principal normalizada                                                                                                           |
| Wireframes base de la aplicación            | cerrada | `docs/03-diw/sprint-1/03-wireframes.md`, `docs/03-diw/wireframes/`                                                                    | Evidencia local clara del diseño inicial                                                                                                                                                    |
| Validaciones y pruebas base de formularios  | cerrada | `tests/funcionales/`, `tests/selenium/test-registro.js`, `docs/evidencias/dwec/sprint-1/`                                             | Sprint 1 DWEC tiene soporte real suficiente                                                                                                                                                 |
| Auditoría de accesibilidad de Sprint 2      | cerrada | `docs/03-diw/sprint-2/01-accesibilidad-wcag.md`, `docs/evidencias/diw/sprint-2/`                                                      | Hay capturas locales y documento específico                                                                                                                                                 |
| Normalización de requisitos y rúbrica       | cerrada | `docs/requisitos-normalizados/00_indice_requisitos.md` a `09_sprint_3_requisitos.md`                                                  | La base normalizada ya existe y la rúbrica real está incorporada                                                                                                                            |

## 12. Conclusión de auditoría

- Porcentaje actual: **55,25 / 100**.
- Principales bloqueos P0: adaptación real de Sprint 3 en cliente, integración multimedia DIW, despliegue local documentado y trazabilidad crítica entre documentación y código.
- Siguiente paso recomendado: cerrar primero P0-01, P0-02 y P0-03 antes de intentar pulir publicación o mejoras cosméticas.
- Advertencias para defensa: no presentar Sprint 3 como completado; no vender el buscador actual como AJAX pleno; no apoyar la defensa en README o docs técnicas que hoy contradicen el código real.
- Qué no debe hacerse todavía: no reorganizar carpetas, no fusionar documentación en caliente y no usar evidencias remotas o enlaces externos como prueba de cumplimiento.
- Recomendación final sobre carpetas de requisitos: mantener `docs/requisitos-normalizados/` como fuente principal y tratar `docs/01-requisitos/01-definicion-proyecto.md` como documento complementario o histórico hasta resolver su integración en una fase posterior.
