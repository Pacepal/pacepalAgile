# Anexo 9.3 — Análisis de la competencia

El análisis de referentes del sector se realizó durante el Sprint 1 del módulo DIW. El
objetivo fue tomar decisiones visuales y de experiencia de usuario con criterio real de
mercado, no por intuición. Como fuente de trabajo se utilizó el documento interno
`docs/03-diw/sprint-1/01-tendencias-competencia.md`.

---

## Referentes analizados

Se estudiaron cuatro plataformas desde el mismo enfoque: cómo presentan la información,
cómo guían la acción del usuario y qué aciertos son trasladables a PacePal.

### Strava

Plataforma de seguimiento de actividad deportiva orientada al rendimiento. Es la referencia
más completa en cuanto a datos deportivos y comunidad activa alrededor de la actividad física.

**Qué hace bien:**

- Las métricas son protagonistas visuales: distancia, ritmo, desnivel.
- La comunidad se construye alrededor de la actividad, no de los grupos.
- El sistema de estados y el feedback visual son constantes y claros.

**Qué se aprendió para PacePal:**

- Mostrar datos sin saturación: priorizar los más relevantes para la decisión.
- Combinar señal visual y texto corto en cada tarjeta.
- Potenciar la sensación de progreso y pertenencia.

**Diferencia clave con PacePal:** Strava está orientado al alto rendimiento individual;
PacePal se centra en la actividad grupal accesible.

---

### Komoot

Aplicación de planificación de rutas al aire libre con énfasis en la información técnica
de cada recorrido.

**Qué hace bien:**

- Equilibrio entre mapa, datos técnicos y claridad visual.
- Lenguaje visual limpio y de referencia natural.
- Información técnica resumida con buena jerarquía.

**Qué se aprendió para PacePal:**

- Evitar sobrecargar la pantalla de detalle de actividad.
- Usar elementos visuales de apoyo con función real, no decorativa.
- Priorizar la lectura rápida para un contexto de uso outdoor.

---

### Meetup

Plataforma de organización de eventos y grupos presenciales, con un modelo de
creador/participante muy similar al concepto de actividad de PacePal.

**Qué hace bien:**

- Ruta de decisión simple: listado → detalle → unirse.
- Fecha y ubicación siempre visibles y en primer plano.
- CTA directo, sin pasos intermedios innecesarios.

**Qué se aprendió para PacePal:**

- Reducir los clics necesarios para apuntarse a una actividad.
- Priorizar la respuesta a "qué, cuándo y dónde" en cada tarjeta.
- Diseñar tarjetas que puedan leerse en tres segundos.

---

### AllTrails

Directorio de rutas con filtros por dificultad y perfil del usuario.

**Qué hace bien:**

- Filtros efectivos por dificultad, distancia y contexto.
- Información útil antes de decidir el desplazamiento.
- Buen equilibrio entre exploración y precisión.

**Qué se aprendió para PacePal:**

- Hacer que filtrar sea tan importante como buscar.
- Ofrecer contexto práctico en cada tarjeta antes de entrar al detalle.
- Evitar filtros redundantes o que generen confusión.

---

## Comparativa sintética

| Aspecto clave                                    | Meetup | Strava | Komoot | AllTrails | PacePal (objetivo) |
| ------------------------------------------------ | :----: | :----: | :----: | :-------: | :----------------: |
| Flujo rápido para unirse                         |   ✔    |   ✔    |   ◐    |     ◐     |         ✔          |
| Métricas claras                                  |   ◐    |   ✔    |   ✔    |     ✔     |         ✔          |
| Comunidad visible                                |   ✔    |   ✔    |   ◐    |     ◐     |         ✔          |
| Filtros robustos                                 |   ◐    |   ◐    |   ✔    |     ✔     |         ✔          |
| Diseño limpio y entendible                       |   ✔    |   ✔    |   ✔    |     ✔     |         ✔          |
| Accesible para usuarios no deportistas avanzados |   ✔    |   ✗    |   ◐    |     ◐     |         ✔          |

Leyenda: ✔ bien cubierto · ◐ parcial · ✗ fuera de alcance

---

## Decisiones de diseño derivadas del análisis

- **Tarjetas con datos clave en primer plano:** imagen, título, fecha, nivel, ritmo y plazas.
  Inspirado en el modelo de tarjeta de Strava y Komoot.
- **Diferenciación explícita entre ruta y actividad:** la ruta es un recurso del sistema;
  la actividad es un evento creado por un usuario sobre esa ruta. Esta separación responde
  directamente al modelo de Meetup.
- **Diseño limpio que no compite con plataformas de alto rendimiento:** PacePal apunta a
  usuarios que buscan experiencia accesible y comunidad, no métricas de élite.
- **Diseño mobile-first y navegación clara:** el usuario puede decidir y actuar en pocos
  pasos, sin curva de aprendizaje.
- **Regla cromática 60-30-10:** color base neutro, color de marca como apoyo estructural,
  color de acento reservado para las acciones clave.

---

## Opinión del equipo

Strava fue la aplicación que más gustó visualmente, pero resultaba demasiado compleja para
el alcance del proyecto. Meetup es la que más se acerca al modelo de PacePal, aunque no
está enfocada en el deporte como núcleo. La propuesta de PacePal toma la simplicidad de
flujo de Meetup, la jerarquía de datos de Strava y la claridad de detalle de Komoot,
adaptadas a un alcance educativo y defensible.
