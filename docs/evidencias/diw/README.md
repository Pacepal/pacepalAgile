# Evidencias · DIW

Esta carpeta recoge las **evidencias del módulo DIW (Diseño de Interfaces Web)** del proyecto PacePal.

Las capturas y materiales incluidos documentan el proceso seguido durante los distintos sprints del desarrollo, permitiendo justificar las decisiones de diseño tomadas durante el proyecto.

---

# Sprint 1 · Análisis de competencia y definición visual

### Objetivo del sprint

El objetivo de este sprint fue analizar interfaces reales de plataformas similares para identificar patrones de diseño útiles para PacePal.

Se estudiaron especialmente aspectos como:

- organización de la navegación
- jerarquía visual de la información
- patrones de descubrimiento de actividades
- estructura de contenido en aplicaciones orientadas a comunidad

### Documentación relacionada

Los resultados de este análisis se desarrollan en los siguientes documentos del proyecto:

- `docs/03-diw/sprint-1/01-tendencias-competencia.md`
- `docs/03-diw/sprint-1/03-guia-estilos.md`
- `docs/03-diw/sprint-1/03-wireframes.md`
- `docs/03-diw/sprint-1/04-boceto-final.md`

### Evidencias visuales

Las capturas utilizadas durante el análisis se encuentran en:

docs/evidencias/diw/sprint-1/

Archivos incluidos:

- `meetup-interfaz.png`
- `strava-interfaz.png`
- `komoot-interfaz.png`

Estas capturas permiten visualizar cómo resuelven otras plataformas la organización de actividades, la navegación entre secciones y la presentación de la información al usuario.

### Plataformas analizadas

**Meetup**

Se analizó principalmente su forma de organizar eventos y facilitar el descubrimiento de actividades dentro de una comunidad.

**Strava**

Se estudió su enfoque centrado en la actividad deportiva, la visibilidad de la comunidad y la forma en la que se muestran las actividades realizadas por los usuarios.

**Komoot**

Se tomó como referencia la presentación de rutas y el flujo orientado a la planificación de actividades al aire libre.

---

# Sprint 2 · Accesibilidad WCAG

### Objetivo del sprint

En este sprint se realizó la revisión de accesibilidad de la landing page desarrollada en el sprint anterior.

El objetivo fue comprobar que la interfaz cumple los criterios básicos de accesibilidad definidos en **WCAG 2.1 nivel A**, combinando revisión manual del código con herramientas automáticas de auditoría.

### Documento asociado

La auditoría completa de accesibilidad se documenta en:

`docs/03-diw/sprint-2/01-accesibilidad-wcag.md`

### Evidencias generadas

Las capturas obtenidas durante la evaluación se encuentran en:

`docs/evidencias/diw/sprint-2/`

Archivos incluidos:

- `lighthouse-accesibilidad.png`
- `wave-analisis.png`

### Resultados de la evaluación

La auditoría realizada con **Lighthouse (Chrome DevTools)** muestra resultados positivos en todas las métricas analizadas:

- **Rendimiento:** 96
- **Accesibilidad:** 100
- **Buenas prácticas:** 100
- **SEO:** 100

Estos resultados indican que la página presenta una estructura accesible y optimizada, con una correcta jerarquía de contenidos y buenas prácticas de desarrollo.

La evaluación con **WAVE Web Accessibility Evaluation Tool** confirma estos resultados:

- **0 errores de accesibilidad detectados**
- **0 errores de contraste**
- **3 alertas menores**
- **20 elementos estructurales identificados**
- **25 elementos ARIA detectados**

La herramienta reconoce correctamente la estructura semántica del documento (`header`, `nav`, `main`, `footer`) así como la jerarquía de encabezados (`h1`, `h2`, `h3`), la presencia de textos alternativos en imágenes y el uso de atributos ARIA para mejorar la navegación.

En conjunto, los resultados obtenidos indican que la interfaz desarrollada cumple adecuadamente los criterios de **accesibilidad WCAG 2.1 nivel A** evaluados durante este sprint.
