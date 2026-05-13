---
marp: true
title: PacePal · Tendencias y Competencia
description: Investigación DIW 2025–2026 y decisiones de diseño para PacePal
size: 16:9
paginate: true
header: PacePal · Tendencias y Competencia
footer: Proyecto Agile Intermodular · 2º DAW
style: |
  :root {
    --pp-green-dark: #2A400A;
    --pp-green-flash: #A1F227;
    --pp-text: #1E1E1E;
    --pp-muted: #5A6650;
    --pp-line: #D8DFD1;
  }

  section {
    font-family: Inter, "Segoe UI", Arial, sans-serif;
    background: #ffffff;
    color: var(--pp-text);
    font-size: 26px;
    line-height: 1.35;
    padding: 70px;
  }

  h1, h2, h3 {
    color: #111;
    margin: 0 0 14px;
    font-weight: 800;
  }

  h1::after,
  h2::after,
  h3::after {
    content: "";
    display: block;
    width: 120px;
    height: 5px;
    margin-top: 8px;
    background: var(--pp-green-flash);
  }

  p, li {
    font-size: 22px;
  }

  strong {
    color: var(--pp-green-dark);
  }

  .muted {
    color: var(--pp-muted);
    font-size: 20px;
  }

  .cols-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    align-items: start;
  }

  .box {
    border: 1px solid var(--pp-line);
    border-radius: 12px;
    padding: 16px 18px;
    background: #fafcf8;
  }

  .kpi {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-top: 12px;
  }

  .kpi > div {
    border: 1px solid var(--pp-line);
    border-radius: 10px;
    padding: 12px;
    background: #f7faef;
    font-size: 18px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
    font-size: 19px;
  }

  th,
  td {
    border: 1px solid #d8dfd1;
    padding: 9px;
    text-align: left;
    vertical-align: top;
  }

  th {
    background: var(--pp-green-dark);
    color: #fff;
  }

  tr:nth-child(even) td {
    background: #f6f9f2;
  }
---

# Investigación de Tendencias

## y Análisis de Competencia

**PacePal · Documento DIW**

<p class="muted">Objetivo: tomar decisiones visuales y de UX con criterio real de mercado, no por intuición.</p>

---

## Historia de Usuario

**Como** diseñador de interfaces web  
**Quiero** investigar tendencias actuales y analizar la competencia  
**Para poder** crear una propuesta visual moderna, coherente y defendible para PacePal.

<div class="box">
Resultado esperado: una guía práctica que traduzca investigación en reglas concretas de diseño y maquetación.
</div>

---

# 1. Enfoque de investigación

## Qué hemos analizado

- Patrones de diseño digital en productos deportivos y de comunidad (2025–2026).
- Experiencias reales de alta adopción: Meetup, Strava, Komoot y AllTrails.
- Criterios de evaluación: claridad, jerarquía visual, velocidad de decisión, accesibilidad y confianza.

<div class="kpi">
  <div><strong>4</strong><br>productos de referencia</div>
  <div><strong>5</strong><br>criterios comparables</div>
  <div><strong>1</strong><br>objetivo: decisiones aplicables</div>
</div>

---

# 2. Tendencias en Diseño Web

### (2025 – 2026)

La tendencia dominante no es “hacerlo más bonito”, sino **hacerlo más comprensible y más útil en menos tiempo**.

En productos de actividad física, la interfaz ganadora cumple tres cosas:

- informa rápido,
- reduce dudas antes de apuntarse,
- mantiene confianza durante todo el flujo.

---

## 2.1 Minimalismo funcional

- Más espacio en blanco, menos ruido visual.
- Jerarquía evidente: primero decisión, luego detalle.
- Tipografía y bloques con ritmo constante.

**Aplicación en PacePal**

- Tarjetas limpias con datos clave arriba.
- Menos elementos decorativos y más señal de acción.
- Un CTA principal por bloque.

---

## 2.2 Diseño centrado en datos

En apps deportivas, los usuarios comparan actividades por datos, no por texto largo.

Datos más consultados antes de elegir:

- distancia
- dificultad
- ritmo
- plazas disponibles
- punto y hora de encuentro

**Aplicación en PacePal**

- Estos datos se muestran siempre en la primera pantalla de cada actividad.

---

## 2.3 Mobile First real

- Flujos cortos y verticales.
- Acciones táctiles claras.
- Menú compacto y filtros progresivos.

**Aplicación en PacePal**

- Priorizar experiencia móvil en listado y detalle.
- Formularios de crear actividad en pasos simples.

---

## 2.4 Microinteracciones útiles

- Feedback inmediato al unirse, salir o filtrar.
- Estados de carga visibles.
- Confirmaciones claras sin interrumpir.

**Aplicación en PacePal**

- Mensajes de estado cortos y humanos.
- Cambios de estado visibles sin recargar página cuando sea posible.

---

## 2.5 Accesibilidad integrada

No es un “extra final”; es una condición de calidad desde diseño.

- Contraste suficiente.
- Focus visible por teclado.
- Etiquetas claras en formularios.
- Mensajes de error comprensibles.

**Objetivo para PacePal**

- Cumplimiento WCAG 2.1 nivel A como base mínima.

---

## 2.6 Confianza, seguridad y comunidad

Tendencia fuerte en plataformas sociales: más controles de convivencia y trazabilidad.

**Aplicación en PacePal**

- Registro con DNI como fricción positiva de confianza.
- Flujo de reportes claro y fácil de usar.
- Mensajes de normas visibles antes de participar.

---

# 3. Análisis de Competencia

Se analiza cada producto desde el mismo enfoque:

- cómo presenta la información,
- cómo guía la acción,
- qué aciertos podemos trasladar a PacePal.

---

## 3.1 Meetup

<div class="cols-2">
  <div class="box">
    <strong>Qué hace bien</strong>
    <ul>
      <li>Ruta de decisión simple: listado → detalle → unirse.</li>
      <li>Fecha y ubicación siempre visibles.</li>
      <li>CTA directo, sin rodeos.</li>
    </ul>
  </div>
  <div class="box">
    <strong>Qué aprender para PacePal</strong>
    <ul>
      <li>Reducir clics para apuntarse.</li>
      <li>Priorizar “qué, cuándo y dónde”.</li>
      <li>Diseñar tarjetas con lectura de 3 segundos.</li>
    </ul>
  </div>
</div>

---

## 3.2 Strava

<div class="cols-2">
  <div class="box">
    <strong>Qué hace bien</strong>
    <ul>
      <li>Métricas como protagonista visual.</li>
      <li>Comunidad activa alrededor de actividad deportiva.</li>
      <li>Sistema de estados y feedback constante.</li>
    </ul>
  </div>
  <div class="box">
    <strong>Qué aprender para PacePal</strong>
    <ul>
      <li>Mostrar datos sin saturación.</li>
      <li>Combinar señal visual y texto corto.</li>
      <li>Potenciar sensación de progreso y pertenencia.</li>
    </ul>
  </div>
</div>

---

## 3.3 Komoot

<div class="cols-2">
  <div class="box">
    <strong>Qué hace bien</strong>
    <ul>
      <li>Equilibrio entre mapa, técnica y claridad.</li>
      <li>Lenguaje visual limpio y natural.</li>
      <li>Información técnica resumida con buena jerarquía.</li>
    </ul>
  </div>
  <div class="box">
    <strong>Qué aprender para PacePal</strong>
    <ul>
      <li>Evitar sobrecargar el detalle de actividad.</li>
      <li>Usar visuales de apoyo con función real.</li>
      <li>Priorizar lectura rápida en contexto outdoor.</li>
    </ul>
  </div>
</div>

---

## 3.4 AllTrails

<div class="cols-2">
  <div class="box">
    <strong>Qué hace bien</strong>
    <ul>
      <li>Filtros efectivos por dificultad y contexto.</li>
      <li>Información útil antes de decidir desplazamiento.</li>
      <li>Buen equilibrio entre exploración y precisión.</li>
    </ul>
  </div>
  <div class="box">
    <strong>Qué aprender para PacePal</strong>
    <ul>
      <li>Hacer que filtrar sea tan importante como buscar.</li>
      <li>Ofrecer contexto práctico en cada tarjeta.</li>
      <li>Evitar filtros redundantes o confusos.</li>
    </ul>
  </div>
</div>

---

## 3.5 Comparativa sintética

| Aspecto clave              | Meetup | Strava | Komoot | AllTrails | PacePal (objetivo) |
| -------------------------- | :----: | :----: | :----: | :-------: | :----------------: |
| Flujo rápido para unirse   |   ✔    |   ✔    |   ◐    |     ◐     |         ✔          |
| Métricas claras            |   ◐    |   ✔    |   ✔    |     ✔     |         ✔          |
| Comunidad visible          |   ✔    |   ✔    |   ◐    |     ◐     |         ✔          |
| Filtros robustos           |   ◐    |   ◐    |   ✔    |     ✔     |         ✔          |
| Diseño limpio y entendible |   ✔    |   ✔    |   ✔    |     ✔     |         ✔          |

---

## 3.6 Evidencias visuales del analisis

Capturas guardadas en:

- `docs/evidencias/diw/sprint-1/meetup-interfaz.png`
- `docs/evidencias/diw/sprint-1/strava-interfaz.png`
- `docs/evidencias/diw/sprint-1/komoot-interfaz.png`

Estas evidencias demuestran:

- estructura de navegacion
- organizacion de actividades
- jerarquia visual
- UX de plataformas reales

| Plataforma | Que analizamos                |
| ---------- | ----------------------------- |
| Meetup     | organizacion de eventos       |
| Strava     | enfoque deportivo y comunidad |
| Komoot     | presentacion de rutas         |

## Opinión personal

- Strava fue la aplicación que más nos gusto, pero era demasiado compleja para lo que queriamos realizar
- Meetup es la aplicación que más se parece a nuestra idea, pero no está enfocada en el deporte como tal.

---

# 4. Decisiones para PacePal

## Diseño visual (normas aplicables)

- Base limpia con foco en legibilidad.
- Color de acento reservado para acciones clave.
- Regla cromática 60-30-10 en composición de interfaz.
- Una jerarquía visual por pantalla: principal, secundario, apoyo.

---

## 4.1 Estructura de interfaz

- Home tipo landing con bloques bien definidos.
- Listado de actividades con filtros visibles.
- Detalle de actividad con datos clave arriba.
- Menú lateral de filtros en desktop, patrón vertical en móvil.

<div class="box">
Meta UX: que una persona entienda “si esta actividad es para mí” en menos de 10 segundos.
</div>

---

## 4.2 Interacción y feedback

- Buscador y filtros con respuesta inmediata.
- Confirmaciones claras al unirse/salir/crear/reportar.
- Estados vacíos útiles (sin culpar al usuario).
- Mensajes directos, sin texto técnico innecesario.

---

## 4.3 Accesibilidad y calidad

- Contraste validado en componentes principales.
- Navegación por teclado en elementos interactivos.
- Labels y errores comprensibles en formularios.
- Evitar depender solo del color para transmitir estado.

---

# 5. Riesgos y límites del análisis

- El contexto académico limita alcance de pruebas masivas con usuarios.
- Algunas referencias del mercado tienen más madurez y recursos.
- No se replica la complejidad de plataformas globales: se prioriza una versión coherente y mantenible.

**Conclusión práctica:** el objetivo no es copiar productos grandes, sino adoptar sus patrones útiles y adaptarlos al alcance real de PacePal.

---

# Conclusión

La investigación confirma un criterio claro para PacePal:

- **menos ruido, más decisión**,
- **más datos útiles, menos fricción**,
- **más confianza y accesibilidad desde el diseño**.

Con estas reglas, la propuesta visual resulta defendible técnicamente, coherente para el equipo y aplicable en el desarrollo web real del proyecto.

---
