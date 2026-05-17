# 07b · Búsqueda de diagramas y revisión del responsive

## 1. Alcance de la revisión

Esta revisión se ha hecho para cerrar dos pendientes concretos de la memoria final sin asumir que algo no existe solo porque no apareciera en una primera pasada:

1. Localizar, si existían, un diagrama de casos de uso y un diagrama de clases reutilizables desde documentación previa o beta.
2. Corregir el enfoque del responsive para reflejar que PacePal sí tiene trabajo responsive modular implementado en CSS, aunque puedan faltar capturas finales por dispositivo.

La comprobación se ha apoyado en búsqueda por texto y por extensiones del repositorio, lectura directa de documentación ya consolidada y revisión específica de `docs/pacepal.pdf`, `docs/pacepalDocumenacion.pdf` y `docs/pacepal.odt`.

## 2. Método de búsqueda aplicado

### 2.1. Repositorio actual

- Búsqueda por palabras clave: `casos de uso`, `diagrama de clases`, `uml`, `diagram`, `drawio`, `plantuml`, `componentes`, `arquitectura`, `responsive`.
- Búsqueda por extensiones y nombres típicos de diagramado: `.drawio`, `.puml`, `.plantuml`, `.mmd`, `.svg`, `.png`, `.jpg`, `.pdf`, `.odt`.
- Revisión de `docs/documentacion-final/03_memoria_tecnica_pacepal_borrador.md`, `04_indice_figuras_tablas_evidencias.md`, `05_revision_calidad_documental.md` y `07_revision_figuras_diagramas_esquemas.md`.

### 2.2. Documentación beta

- Extracción de texto de `docs/pacepal.pdf` y `docs/pacepalDocumenacion.pdf` con `pdftotext`.
- Comprobación de metadatos con `pdfinfo`.
- Búsqueda explícita en ambos PDF de `diagrama`, `figura`, `casos de uso`, `diagrama de clases`, `uml`, `modelo relacional`, `arquitectura` y `componentes`.
- Inspección de `docs/pacepal.odt` como ZIP: listado de `Pictures/*` y búsqueda textual en `content.xml`.

## 3. Resultado sobre el diagrama de casos de uso

### 3.1. Lo que sí se ha localizado

- Historias de usuario y casos funcionales en `docs/02-agile/02-historias-usuario-v1.md`.
- Roles y permisos en `docs/05-dwes/sprint-2/roles-acceso.md`.
- Rutas reales y endpoints en `src/api/index.php`.
- Diagrama documental reconstruido ya existente en `docs/documentacion-final/figuras/diagrama-casos-uso-pacepal.mmd`.

### 3.2. Lo que no se ha localizado como figura histórica final

- No ha aparecido un archivo fuente original tipo `.drawio`, `.puml` o equivalente.
- En `docs/pacepal.pdf` y `docs/pacepalDocumenacion.pdf` sí aparecen bloques de arquitectura, modelo relacional y guía de componentes, pero no se han localizado menciones explícitas ni pies de figura para un diagrama de casos de uso.
- En `docs/pacepal.odt` se han localizado 42 imágenes incrustadas, pero la búsqueda textual en `content.xml` no ha devuelto referencias explícitas a un diagrama de casos de uso.

### 3.3. Conclusión documental

No se ha localizado un diagrama histórico final de casos de uso reutilizable tal cual desde la documentación beta. Sí existe base documental suficiente para mantener como válido el diagrama reconstruido en Mermaid, porque está trazado a historias de usuario, roles y rutas reales del sistema.

## 4. Resultado sobre el diagrama de clases

### 4.1. Lo que sí se ha localizado

- Clases PHP reales en `src/controllers/` y `src/models/`.
- Instanciación real de controladores en `src/api/index.php`.
- Modelo relacional real en `db/schema.sql`.
- Diagrama de componentes ya existente en `docs/documentacion-final/figuras/diagrama-componentes-pacepal.mmd`.

### 4.2. Lo que no se ha localizado como figura histórica final

- No ha aparecido un UML de clases ya exportado en el repositorio.
- En `docs/pacepal.pdf` y `docs/pacepalDocumenacion.pdf` se localizan apartados como `14.1 Arquitectura del cliente y organización modular`, `16.1 Arquitectura del backend y flujo de datos`, `16.2 Diseño del modelo relacional`, `17.1 Arquitectura de la API y organización del backend` y `24.4 Guía de estilos y componentes`, pero no se ha localizado un apartado o pie de figura explícito de `diagrama de clases`.
- La revisión del ODT tampoco ha dado una referencia textual explícita a un diagrama de clases.

### 4.3. Conclusión documental

Tampoco se ha localizado un diagrama de clases histórico final reutilizable. Para no dejar el requisito en falso pendiente, se ha creado `docs/documentacion-final/figuras/diagrama-clases-pacepal.mmd`, un diagrama de clases simplificado y defendible a partir de:

- `src/api/index.php`
- `src/controllers/*.php`
- `src/models/*.php`
- `db/schema.sql`

La estrategia correcta para memoria final es conservar ambos niveles:

- diagrama de clases simplificado para cubrir el modelado solicitado por la plantilla y la rúbrica;
- diagrama de componentes cliente-servidor para representar mejor la arquitectura real actual.

## 5. Revisión del responsive

### 5.1. Evidencias localizadas en código

El responsive no debe tratarse como un trabajo dudoso o pendiente. El árbol CSS y las importaciones demuestran implementación modular real:

- `css/estilos.css` importa explícitamente `responsiveLanding.css`, `responsiveTienda.css`, `responsiveRutas.css`, `responsiveActividades.css`, `responsiveUsuario.css` y `responsiveAdmin.css`.
- Existe además `css/sobrenosotros/responsiveSobrenosotros.css`.
- `js/main.jsx` carga `css/react.css`.
- `css/react.css` añade reglas responsive propias y además importa `./sobrenosotros/responsiveSobrenosotros.css`.
- Los archivos responsive contienen `@media` reales para distintos breakpoints.

### 5.2. Evidencias localizadas en documentación

- Wireframes desktop/mobile en `docs/03-diw/wireframes/`.
- Referencias explícitas al responsive en `docs/03-diw/sprint-2/05-inspeccion-usabilidad.md`.
- Referencias a CSS responsive modular en `docs/04-dwec/sprint-2/01-tienda-dinamica.md` y `docs/04-dwec/sprint-2/04-listados-rutas-actividades.md`.
- Requisitos normalizados de DIW y Sprint 2/Sprint 3 con exigencia de versiones desktop/mobile y adaptación responsive real.

### 5.3. Formulación corregida para la memoria

El diseño responsive de PacePal se ha trabajado de forma modular, con hojas CSS específicas por sección y archivos responsive independientes para actividades, administración, landing, rutas, sobre nosotros, tienda y usuario. Las capturas finales por dispositivo se incorporan como evidencia visual, pero la adaptación responsive forma parte de la implementación real del proyecto.

## 6. Cierre operativo

La conclusión correcta para la memoria final es esta:

- diagrama de casos de uso: no localizado como figura histórica final, pero sí reconstruido documentalmente con base verificable;
- diagrama de clases: no localizado como figura histórica final, pero ya resuelto con un diagrama simplificado basado en clases PHP reales y dominio persistido;
- responsive: implementado de forma real y modular; lo pendiente, si se quiere reforzar la memoria, son capturas comparativas finales, no la implementación en sí.
