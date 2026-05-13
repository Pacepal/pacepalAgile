---
marp: true
title: S0 · Historias de usuario v1 · PacePal
size: 16:9
paginate: true
style: |
  :root {
    --bg: #f3f5f7;
    --card: #ffffff;
    --line: #8fb8d9;
    --stroke: #bccada;
    --title: #0B2A56;
    --text: #1f2d3a;
  }

  section {
    background: var(--bg);
    color: var(--text);
    font-family: "Segoe UI", Arial, sans-serif;
    padding: 24px 34px;
    box-sizing: border-box;
  }

  h1, h2, h3, p {
    margin: 0;
  }

  .cover {
    width: 88%;
    margin: 0 auto;
    min-height: 78%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid var(--stroke);
    border-radius: 14px;
    background: var(--card);
    box-shadow: 0 6px 20px rgba(0,0,0,0.08);
    padding: 36px 44px;
    box-sizing: border-box;
  }

  .cover h1 {
    color: var(--title);
    font-size: 44px;
    margin-bottom: 14px;
  }

  .cover p {
    font-size: 26px;
    line-height: 1.35;
    margin-top: 8px;
  }

  .card {
    width: 88%;
    height: 85%;
    margin: 0 auto;
    background: var(--card);
    border: 1px solid var(--stroke);
    border-radius: 14px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.08);
    overflow: hidden;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  .header-row {
    display: grid;
    grid-template-columns: 30% 70%;
    border-bottom: 1px solid var(--stroke);
    background: #f7fafc;
  }

  .header-row .field {
    padding: 14px 16px;
    font-size: 20px;
    color: var(--title);
    font-weight: 700;
  }

  .header-row .field + .field {
    border-left: 1px solid var(--stroke);
  }

  .body-main {
    padding: 12px 14px 8px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 8px;
  }

  .field {
    display: grid;
    grid-template-columns: 160px 1fr;
    align-items: start;
    gap: 8px;
  }

  .label {
    font-size: 20px;
    font-weight: 700;
    color: var(--title);
    padding-top: 4px;
  }

  .lined {
    min-height: 56px;
    border-radius: 6px;
    padding: 8px 10px;
    box-sizing: border-box;
    background: #ffffff;
    border: 1px dashed #c8d5e3;
  }

  .lined p {
    margin: 0;
    font-size: 18px;
    line-height: 1.35;
  }

  .hu-bottom {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    padding: 10px 14px 14px;
  }

  .box {
    border: 1px solid var(--stroke);
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
    height: 100%;
    background: #fbfdff;
    display: flex;
    flex-direction: column;
  }

  .validation-box {
    min-height: 230px;
  }

  .meta-box {
    min-height: 230px;
    display: grid;
    grid-template-rows: repeat(3, minmax(72px, 1fr));
    gap: 6px;
    overflow: hidden;
  }

  .box h4 {
    margin: 0 0 6px;
    color: var(--title);
    font-size: 20px;
    letter-spacing: 0.2px;
  }

  .box .lined {
    min-height: 0;
    flex: 1;
  }

  .box ul {
    margin: 0;
    padding-left: 18px;
    font-size: 15px;
    line-height: 1.3;
  }

  .box li {
    margin: 2px 0;
    break-inside: avoid;
  }

  .validation-box ul.long {
    columns: 2;
    column-gap: 20px;
  }

  .validation-box ul {
    font-size: 14px;
    line-height: 1.25;
  }

  .meta-group {
    border: 1px solid #d9e3ee;
    border-radius: 8px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    min-height: 0;
  }

  .meta-group h4 {
    margin-bottom: 4px;
    font-size: 18px;
  }

  .meta-group .lined {
    min-height: 52px;
    display: flex;
    align-items: flex-start;
    overflow: hidden;
    word-break: break-word;
  }

  .meta-group .lined p {
    margin: 0;
    font-size: 15px;
    line-height: 1.25;
  }
---

<div class="cover">
  <h1>S0 · Historias de usuario  · PacePal</h1>
  <p><strong>Archivo:</strong> docs/02-agile/02-historias-usuario-v1.md</p>
  <p><strong>Fecha:</strong> 2026-03-03</p>
  <p><strong>Versión:</strong> 1.0</p>
</div>

---

<div class="card">
  <div class="header-row">
    <div class="field"><strong>ID:</strong> HU-01</div>
    <div class="field"><strong>TÍTULO:</strong> Registro con DNI</div>
  </div>

  <div class="body-main">
    <div class="field">
      <div class="label">CÓMO</div>
      <div class="lined"><p>usuario nuevo</p></div>
    </div>
    <div class="field">
      <div class="label">QUIERO</div>
      <div class="lined"><p>registrarme con email, contraseña y DNI</p></div>
    </div>
    <div class="field">
      <div class="label">PARA PODER</div>
      <div class="lined"><p>crear y unirme a actividades con una cuenta real</p></div>
    </div>
  </div>

  <div class="hu-bottom">
    <div class="box validation-box">
      <h4>VALIDACIÓN</h4>
      <div class="lined">
          <ul class="long">
            <li>el formulario pide nombre, email, contraseña, confirmar contraseña, DNI</li>
            <li>DNI obligatorio y con formato válido</li>
            <li>email obligatorio y con formato válido</li>
            <li>no se permite email duplicado</li>
            <li>no se permite DNI duplicado</li>
            <li>la contraseña tiene longitud mínima y confirmación igual</li>
            <li>si todo está bien, se crea la cuenta y se inicia sesión o se redirige a login con mensaje claro</li>
          </ul>
      </div>
    </div>

<div class="box meta-box">
<div class="meta-group">
<h4>VALOR</h4>
<div class="lined"><p>evita cuentas falsas y mejora convivencia</p></div>
</div>
<div class="meta-group">
<h4>PRIORIDAD</h4>
<div class="lined"><p>Alta</p></div>
</div>
<div class="meta-group">
<h4>ESTIMACIÓN</h4>
<div class="lined"><p>5</p></div>
</div>
</div>

  </div>
</div>

---

<div class="card">
  <div class="header-row">
    <div class="field"><strong>ID:</strong> HU-02</div>
    <div class="field"><strong>TÍTULO:</strong> Inicio de sesión</div>
  </div>

  <div class="body-main">
    <div class="field">
      <div class="label">CÓMO</div>
      <div class="lined"><p>usuario registrado</p></div>
    </div>
    <div class="field">
      <div class="label">QUIERO</div>
      <div class="lined"><p>iniciar sesión con mi email y contraseña</p></div>
    </div>
    <div class="field">
      <div class="label">PARA PODER</div>
      <div class="lined"><p>acceder a crear actividades y unirme a otras</p></div>
    </div>
  </div>

  <div class="hu-bottom">
    <div class="box validation-box">
      <h4>VALIDACIÓN</h4>
      <div class="lined">
          <ul>
            <li>login con email y contraseña</li>
            <li>si no coincide, mensaje claro y no revela datos internos</li>
            <li>al iniciar sesión se ve el estado de usuario conectado</li>
            <li>se mantiene la sesión al recargar</li>
          </ul>
      </div>
    </div>

<div class="box meta-box">
<div class="meta-group">
<h4>VALOR</h4>
<div class="lined"><p>es la base del control y la seguridad</p></div>
</div>
<div class="meta-group">
<h4>PRIORIDAD</h4>
<div class="lined"><p>Alta</p></div>
</div>
<div class="meta-group">
<h4>ESTIMACIÓN</h4>
<div class="lined"><p>3</p></div>
</div>
</div>

  </div>
</div>

---

<div class="card">
  <div class="header-row">
    <div class="field"><strong>ID:</strong> HU-03</div>
    <div class="field"><strong>TÍTULO:</strong> Cerrar sesión</div>
  </div>

  <div class="body-main">
    <div class="field">
      <div class="label">CÓMO</div>
      <div class="lined"><p>usuario registrado</p></div>
    </div>
    <div class="field">
      <div class="label">QUIERO</div>
      <div class="lined"><p>cerrar sesión cuando quiera</p></div>
    </div>
    <div class="field">
      <div class="label">PARA PODER</div>
      <div class="lined"><p>proteger mi cuenta en un ordenador compartido</p></div>
    </div>
  </div>

  <div class="hu-bottom">
    <div class="box validation-box">
      <h4>VALIDACIÓN</h4>
      <div class="lined">
          <ul>
            <li>botón cerrar sesión visible</li>
            <li>al cerrar sesión vuelve a estado invitado</li>
            <li>se limpian datos de sesión en servidor</li>
            <li>no se puede acceder a pantallas protegidas tras cerrar sesión</li>
          </ul>
      </div>
    </div>

<div class="box meta-box">
<div class="meta-group">
<h4>VALOR</h4>
<div class="lined"><p>control básico de seguridad</p></div>
</div>
<div class="meta-group">
<h4>PRIORIDAD</h4>
<div class="lined"><p>Alta</p></div>
</div>
<div class="meta-group">
<h4>ESTIMACIÓN</h4>
<div class="lined"><p>2</p></div>
</div>
</div>

  </div>
</div>

---

<div class="card">
  <div class="header-row">
    <div class="field"><strong>ID:</strong> HU-04</div>
    <div class="field"><strong>TÍTULO:</strong> Roles y control de acceso</div>
  </div>

  <div class="body-main">
    <div class="field">
      <div class="label">CÓMO</div>
      <div class="lined"><p>sistema</p></div>
    </div>
    <div class="field">
      <div class="label">QUIERO</div>
      <div class="lined"><p>diferenciar permisos de usuario y admin</p></div>
    </div>
    <div class="field">
      <div class="label">PARA PODER</div>
      <div class="lined"><p>proteger moderación, reportes y gestión</p></div>
    </div>
  </div>

  <div class="hu-bottom">
    <div class="box validation-box">
      <h4>VALIDACIÓN</h4>
      <div class="lined">
          <ul>
            <li>usuario normal no puede entrar a admin</li>
            <li>endpoints admin protegidos por sesión y rol</li>
            <li>si se intenta acceder sin permisos, se bloquea y se muestra error controlado</li>
            <li>el rol se mantiene en sesión</li>
          </ul>
      </div>
    </div>

<div class="box meta-box">
<div class="meta-group">
<h4>VALOR</h4>
<div class="lined"><p>evita que cualquiera toque lo sensible</p></div>
</div>
<div class="meta-group">
<h4>PRIORIDAD</h4>
<div class="lined"><p>Alta</p></div>
</div>
<div class="meta-group">
<h4>ESTIMACIÓN</h4>
<div class="lined"><p>5</p></div>
</div>
</div>

  </div>
</div>

---

<div class="card">
  <div class="header-row">
    <div class="field"><strong>ID:</strong> HU-05</div>
    <div class="field"><strong>TÍTULO:</strong> Ver listado de actividades</div>
  </div>

  <div class="body-main">
    <div class="field">
      <div class="label">CÓMO</div>
      <div class="lined"><p>usuario invitado</p></div>
    </div>
    <div class="field">
      <div class="label">QUIERO</div>
      <div class="lined"><p>ver un listado de actividades disponibles</p></div>
    </div>
    <div class="field">
      <div class="label">PARA PODER</div>
      <div class="lined"><p>decidir si me interesa registrarme o entrar</p></div>
    </div>
  </div>

  <div class="hu-bottom">
    <div class="box validation-box">
      <h4>VALIDACIÓN</h4>
      <div class="lined">
          <ul>
            <li>se muestra listado con tarjetas o filas</li>
            <li>cada actividad muestra ruta, fecha, hora, nivel, ritmo, plazas</li>
            <li>si no hay actividades, se muestra lista vacía con mensaje claro</li>
            <li>hay acceso al detalle de una actividad</li>
          </ul>
      </div>
    </div>

<div class="box meta-box">
<div class="meta-group">
<h4>VALOR</h4>
<div class="lined"><p>pantalla principal del producto</p></div>
</div>
<div class="meta-group">
<h4>PRIORIDAD</h4>
<div class="lined"><p>Alta</p></div>
</div>
<div class="meta-group">
<h4>ESTIMACIÓN</h4>
<div class="lined"><p>5</p></div>
</div>
</div>

  </div>
</div>

---

<div class="card">
  <div class="header-row">
    <div class="field"><strong>ID:</strong> HU-06</div>
    <div class="field"><strong>TÍTULO:</strong> Filtrar actividades por nivel y ritmo</div>
  </div>

  <div class="body-main">
    <div class="field">
      <div class="label">CÓMO</div>
      <div class="lined"><p>usuario</p></div>
    </div>
    <div class="field">
      <div class="label">QUIERO</div>
      <div class="lined"><p>filtrar actividades por nivel y por ritmo</p></div>
    </div>
    <div class="field">
      <div class="label">PARA PODER</div>
      <div class="lined"><p>ver solo lo que encaja conmigo</p></div>
    </div>
  </div>

  <div class="hu-bottom">
    <div class="box validation-box">
      <h4>VALIDACIÓN</h4>
      <div class="lined">
          <ul>
            <li>filtro nivel con novato, intermedio, avanzado</li>
            <li>filtro ritmo con suave, medio, rápido</li>
            <li>el listado se actualiza con los filtros</li>
            <li>existe opción de limpiar filtros y volver al listado completo</li>
            <li>si el filtro deja cero resultados, se muestra mensaje claro</li>
          </ul>
      </div>
    </div>

<div class="box meta-box">
<div class="meta-group">
<h4>VALOR</h4>
<div class="lined"><p>reduce errores y evita apuntarse a cosas que no tocan</p></div>
</div>
<div class="meta-group">
<h4>PRIORIDAD</h4>
<div class="lined"><p>Alta</p></div>
</div>
<div class="meta-group">
<h4>ESTIMACIÓN</h4>
<div class="lined"><p>3</p></div>
</div>
</div>

  </div>
</div>

---

<div class="card">
  <div class="header-row">
    <div class="field"><strong>ID:</strong> HU-07</div>
    <div class="field"><strong>TÍTULO:</strong> Filtrar actividades por fecha y plazas</div>
  </div>

  <div class="body-main">
    <div class="field">
      <div class="label">CÓMO</div>
      <div class="lined"><p>usuario</p></div>
    </div>
    <div class="field">
      <div class="label">QUIERO</div>
      <div class="lined"><p>filtrar actividades por fecha y por plazas disponibles</p></div>
    </div>
    <div class="field">
      <div class="label">PARA PODER</div>
      <div class="lined"><p>encontrar algo que sea viable y no esté lleno</p></div>
    </div>
  </div>

  <div class="hu-bottom">
    <div class="box validation-box">
      <h4>VALIDACIÓN</h4>
      <div class="lined">
          <ul>
            <li>filtro por rango o selector de fecha</li>
            <li>filtro para mostrar solo actividades con plazas</li>
            <li>la información de plazas es coherente con el número de apuntados</li>
          </ul>
      </div>
    </div>

<div class="box meta-box">
<div class="meta-group">
<h4>VALOR</h4>
<div class="lined"><p>hace el listado más útil y real</p></div>
</div>
<div class="meta-group">
<h4>PRIORIDAD</h4>
<div class="lined"><p>Media</p></div>
</div>
<div class="meta-group">
<h4>ESTIMACIÓN</h4>
<div class="lined"><p>3</p></div>
</div>
</div>

  </div>
</div>

---

<div class="card">
  <div class="header-row">
    <div class="field"><strong>ID:</strong> HU-08</div>
    <div class="field"><strong>TÍTULO:</strong> Paginación del listado de actividades</div>
  </div>

  <div class="body-main">
    <div class="field">
      <div class="label">CÓMO</div>
      <div class="lined"><p>usuario</p></div>
    </div>
    <div class="field">
      <div class="label">QUIERO</div>
      <div class="lined"><p>paginar el listado si hay muchas actividades</p></div>
    </div>
    <div class="field">
      <div class="label">PARA PODER</div>
      <div class="lined"><p>navegar sin un scroll infinito</p></div>
    </div>
  </div>

  <div class="hu-bottom">
    <div class="box validation-box">
      <h4>VALIDACIÓN</h4>
      <div class="lined">
          <ul>
            <li>paginación con siguiente y anterior</li>
            <li>número de página visible</li>
            <li>al filtrar o buscar, la paginación se comporta bien</li>
            <li>al cambiar de página no se rompe el filtro activo</li>
          </ul>
      </div>
    </div>

<div class="box meta-box">
<div class="meta-group">
<h4>VALOR</h4>
<div class="lined"><p>el sistema aguanta crecimiento sin volverse incómodo</p></div>
</div>
<div class="meta-group">
<h4>PRIORIDAD</h4>
<div class="lined"><p>Media</p></div>
</div>
<div class="meta-group">
<h4>ESTIMACIÓN</h4>
<div class="lined"><p>3</p></div>
</div>
</div>

  </div>
</div>

---

<div class="card">
  <div class="header-row">
    <div class="field"><strong>ID:</strong> HU-09</div>
    <div class="field"><strong>TÍTULO:</strong> Buscador AJAX de actividades</div>
  </div>

  <div class="body-main">
    <div class="field">
      <div class="label">CÓMO</div>
      <div class="lined"><p>usuario</p></div>
    </div>
    <div class="field">
      <div class="label">QUIERO</div>
      <div class="lined"><p>buscar actividades por texto sin recargar</p></div>
    </div>
    <div class="field">
      <div class="label">PARA PODER</div>
      <div class="lined"><p>encontrarlas rápido por ruta o zona</p></div>
    </div>
  </div>

  <div class="hu-bottom">
    <div class="box validation-box">
      <h4>VALIDACIÓN</h4>
      <div class="lined">
          <ul>
            <li>campo de búsqueda visible en actividades</li>
            <li>al escribir, se actualizan resultados sin recargar página</li>
            <li>se busca por nombre de ruta y texto relevante</li>
            <li>si no hay resultados, mensaje claro</li>
            <li>existe opción de limpiar búsqueda</li>
          </ul>
      </div>
    </div>

<div class="box meta-box">
<div class="meta-group">
<h4>VALOR</h4>
<div class="lined"><p>mejora experiencia y cumple buscador dinámico</p></div>
</div>
<div class="meta-group">
<h4>PRIORIDAD</h4>
<div class="lined"><p>Alta</p></div>
</div>
<div class="meta-group">
<h4>ESTIMACIÓN</h4>
<div class="lined"><p>5</p></div>
</div>
</div>

  </div>
</div>

---

<div class="card">
  <div class="header-row">
    <div class="field"><strong>ID:</strong> HU-10</div>
    <div class="field"><strong>TÍTULO:</strong> Ver detalle de una actividad</div>
  </div>

  <div class="body-main">
    <div class="field">
      <div class="label">CÓMO</div>
      <div class="lined"><p>usuario</p></div>
    </div>
    <div class="field">
      <div class="label">QUIERO</div>
      <div class="lined"><p>entrar al detalle de una actividad</p></div>
    </div>
    <div class="field">
      <div class="label">PARA PODER</div>
      <div class="lined"><p>ver información completa antes de unirme</p></div>
    </div>
  </div>

  <div class="hu-bottom">
    <div class="box validation-box">
      <h4>VALIDACIÓN</h4>
      <div class="lined">
          <ul>
            <li>el detalle muestra ruta, fecha, hora, punto de encuentro</li>
            <li>muestra nivel y ritmo</li>
            <li>muestra plazas máximas y plazas restantes</li>
            <li>muestra normas y notas del creador</li>
            <li>muestra participantes o contador</li>
            <li>botones de acción visibles según estado del usuario</li>
            <li>botón reportar visible si hay sesión</li>
          </ul>
      </div>
    </div>

<div class="box meta-box">
<div class="meta-group">
<h4>VALOR</h4>
<div class="lined"><p>evita líos y mejora confianza</p></div>
</div>
<div class="meta-group">
<h4>PRIORIDAD</h4>
<div class="lined"><p>Alta</p></div>
</div>
<div class="meta-group">
<h4>ESTIMACIÓN</h4>
<div class="lined"><p>3</p></div>
</div>
</div>

  </div>
</div>

---

<div class="card">
  <div class="header-row">
    <div class="field"><strong>ID:</strong> HU-11</div>
    <div class="field"><strong>TÍTULO:</strong> Crear actividad sobre una ruta existente</div>
  </div>

  <div class="body-main">
    <div class="field">
      <div class="label">CÓMO</div>
      <div class="lined"><p>usuario registrado</p></div>
    </div>
    <div class="field">
      <div class="label">QUIERO</div>
      <div class="lined"><p>crear una actividad eligiendo una ruta existente</p></div>
    </div>
    <div class="field">
      <div class="label">PARA PODER</div>
      <div class="lined"><p>organizar una quedada con gente compatible</p></div>
    </div>
  </div>

  <div class="hu-bottom">
    <div class="box validation-box">
      <h4>VALIDACIÓN</h4>
      <div class="lined">
          <ul>
            <li>formulario con select de rutas existentes</li>
            <li>campos obligatorios: ruta, fecha, hora, nivel, ritmo, plazas</li>
            <li>campos opcionales: punto de encuentro, notas y normas</li>
            <li>no permite fecha pasada</li>
            <li>al crear, la actividad aparece en el listado</li>
            <li>el creador queda apuntado o queda marcado como creador según diseño definido</li>
          </ul>
      </div>
    </div>

<div class="box meta-box">
<div class="meta-group">
<h4>VALOR</h4>
<div class="lined"><p>sin esto no hay comunidad, solo catálogo</p></div>
</div>
<div class="meta-group">
<h4>PRIORIDAD</h4>
<div class="lined"><p>Alta</p></div>
</div>
<div class="meta-group">
<h4>ESTIMACIÓN</h4>
<div class="lined"><p>5</p></div>
</div>
</div>

  </div>
</div>

---

<div class="card">
  <div class="header-row">
    <div class="field"><strong>ID:</strong> HU-12</div>
    <div class="field"><strong>TÍTULO:</strong> Unirme a una actividad</div>
  </div>

  <div class="body-main">
    <div class="field">
      <div class="label">CÓMO</div>
      <div class="lined"><p>usuario registrado</p></div>
    </div>
    <div class="field">
      <div class="label">QUIERO</div>
      <div class="lined"><p>unirme a una actividad</p></div>
    </div>
    <div class="field">
      <div class="label">PARA PODER</div>
      <div class="lined"><p>participar en la quedada</p></div>
    </div>
  </div>

  <div class="hu-bottom">
    <div class="box validation-box">
      <h4>VALIDACIÓN</h4>
      <div class="lined">
          <ul>
            <li>no se puede unir sin sesión</li>
            <li>no se puede unir si está completa</li>
            <li>no se puede unir dos veces a la misma actividad</li>
            <li>al unirme se actualizan plazas y estado visual</li>
            <li>se guarda mi inscripción en base de datos</li>
          </ul>
      </div>
    </div>

<div class="box meta-box">
<div class="meta-group">
<h4>VALOR</h4>
<div class="lined"><p>funcionalidad central del producto</p></div>
</div>
<div class="meta-group">
<h4>PRIORIDAD</h4>
<div class="lined"><p>Alta</p></div>
</div>
<div class="meta-group">
<h4>ESTIMACIÓN</h4>
<div class="lined"><p>5</p></div>
</div>
</div>

  </div>
</div>

---

<div class="card">
  <div class="header-row">
    <div class="field"><strong>ID:</strong> HU-13</div>
    <div class="field"><strong>TÍTULO:</strong> Salirme de una actividad</div>
  </div>

  <div class="body-main">
    <div class="field">
      <div class="label">CÓMO</div>
      <div class="lined"><p>usuario registrado</p></div>
    </div>
    <div class="field">
      <div class="label">QUIERO</div>
      <div class="lined"><p>salir de una actividad</p></div>
    </div>
    <div class="field">
      <div class="label">PARA PODER</div>
      <div class="lined"><p>liberarme si no puedo ir y dejar plaza a otro</p></div>
    </div>
  </div>

  <div class="hu-bottom">
    <div class="box validation-box">
      <h4>VALIDACIÓN</h4>
      <div class="lined">
          <ul>
            <li>botón salir visible si estoy apuntado</li>
            <li>al salir se liberan plazas</li>
            <li>el listado y el detalle se actualizan</li>
            <li>no se puede salir si no estoy apuntado</li>
          </ul>
      </div>
    </div>

<div class="box meta-box">
<div class="meta-group">
<h4>VALOR</h4>
<div class="lined"><p>evita bloqueos y deja el sistema limpio</p></div>
</div>
<div class="meta-group">
<h4>PRIORIDAD</h4>
<div class="lined"><p>Alta</p></div>
</div>
<div class="meta-group">
<h4>ESTIMACIÓN</h4>
<div class="lined"><p>3</p></div>
</div>
</div>

  </div>
</div>

---

<div class="card">
  <div class="header-row">
    <div class="field"><strong>ID:</strong> HU-14</div>
    <div class="field"><strong>TÍTULO:</strong> Mis actividades</div>
  </div>

  <div class="body-main">
    <div class="field">
      <div class="label">CÓMO</div>
      <div class="lined"><p>usuario registrado</p></div>
    </div>
    <div class="field">
      <div class="label">QUIERO</div>
      <div class="lined"><p>ver mis actividades creadas y mis actividades apuntadas</p></div>
    </div>
    <div class="field">
      <div class="label">PARA PODER</div>
      <div class="lined"><p>gestionarme sin perderme</p></div>
    </div>
  </div>

  <div class="hu-bottom">
    <div class="box validation-box">
      <h4>VALIDACIÓN</h4>
      <div class="lined">
          <ul>
            <li>vista con dos listados separados</li>
            <li>enlaces a detalle de actividad</li>
            <li>estados claros si una actividad está completa o cancelada</li>
            <li>opción rápida para salir de una actividad desde aquí</li>
          </ul>
      </div>
    </div>

<div class="box meta-box">
<div class="meta-group">
<h4>VALOR</h4>
<div class="lined"><p>aumenta uso real y evita confusión</p></div>
</div>
<div class="meta-group">
<h4>PRIORIDAD</h4>
<div class="lined"><p>Media</p></div>
</div>
<div class="meta-group">
<h4>ESTIMACIÓN</h4>
<div class="lined"><p>3</p></div>
</div>
</div>

  </div>
</div>

---

<div class="card">
  <div class="header-row">
    <div class="field"><strong>ID:</strong> HU-15</div>
    <div class="field"><strong>TÍTULO:</strong> Ver catálogo de rutas</div>
  </div>

  <div class="body-main">
    <div class="field">
      <div class="label">CÓMO</div>
      <div class="lined"><p>usuario</p></div>
    </div>
    <div class="field">
      <div class="label">QUIERO</div>
      <div class="lined"><p>ver el catálogo de rutas existentes</p></div>
    </div>
    <div class="field">
      <div class="label">PARA PODER</div>
      <div class="lined"><p>conocer las rutas antes de crear o unirme</p></div>
    </div>
  </div>

  <div class="hu-bottom">
    <div class="box validation-box">
      <h4>VALIDACIÓN</h4>
      <div class="lined">
          <ul>
            <li>listado de rutas con datos básicos</li>
            <li>cada ruta muestra distancia, dificultad base y zona si existe</li>
            <li>acceso al detalle de ruta</li>
            <li>no existe botón para crear rutas nuevas</li>
          </ul>
      </div>
    </div>

<div class="box meta-box">
<div class="meta-group">
<h4>VALOR</h4>
<div class="lined"><p>soporte para elegir bien la actividad</p></div>
</div>
<div class="meta-group">
<h4>PRIORIDAD</h4>
<div class="lined"><p>Media</p></div>
</div>
<div class="meta-group">
<h4>ESTIMACIÓN</h4>
<div class="lined"><p>3</p></div>
</div>
</div>

  </div>
</div>

---

<div class="card">
  <div class="header-row">
    <div class="field"><strong>ID:</strong> HU-16</div>
    <div class="field"><strong>TÍTULO:</strong> Ver detalle de ruta</div>
  </div>

  <div class="body-main">
    <div class="field">
      <div class="label">CÓMO</div>
      <div class="lined"><p>usuario</p></div>
    </div>
    <div class="field">
      <div class="label">QUIERO</div>
      <div class="lined"><p>ver el detalle de una ruta</p></div>
    </div>
    <div class="field">
      <div class="label">PARA PODER</div>
      <div class="lined"><p>entender qué ruta es y si me encaja</p></div>
    </div>
  </div>

  <div class="hu-bottom">
    <div class="box validation-box">
      <h4>VALIDACIÓN</h4>
      <div class="lined">
          <ul>
            <li>detalle con distancia, dificultad base, descripción y zona</li>
            <li>imagen de ruta si existe</li>
            <li>se muestra de forma clara y responsive</li>
            <li>la ruta no se puede editar desde usuario normal</li>
          </ul>
      </div>
    </div>

<div class="box meta-box">
<div class="meta-group">
<h4>VALOR</h4>
<div class="lined"><p>reduce incertidumbre, mejora decisión</p></div>
</div>
<div class="meta-group">
<h4>PRIORIDAD</h4>
<div class="lined"><p>Media</p></div>
</div>
<div class="meta-group">
<h4>ESTIMACIÓN</h4>
<div class="lined"><p>2</p></div>
</div>
</div>

  </div>
</div>

---

<div class="card">
  <div class="header-row">
    <div class="field"><strong>ID:</strong> HU-17</div>
    <div class="field"><strong>TÍTULO:</strong> Reportar usuario o incidencia en una actividad</div>
  </div>

  <div class="body-main">
    <div class="field">
      <div class="label">CÓMO</div>
      <div class="lined"><p>usuario registrado</p></div>
    </div>
    <div class="field">
      <div class="label">QUIERO</div>
      <div class="lined"><p>reportar un problema en una actividad</p></div>
    </div>
    <div class="field">
      <div class="label">PARA PODER</div>
      <div class="lined"><p>mantener convivencia y seguridad</p></div>
    </div>
  </div>

  <div class="hu-bottom">
    <div class="box validation-box">
      <h4>VALIDACIÓN</h4>
      <div class="lined">
          <ul>
            <li>botón reportar visible en detalle de actividad</li>
            <li>formulario con motivo y descripción corta</li>
            <li>el reporte queda ligado a actividad y usuario reportado</li>
            <li>se guarda quién reporta y cuándo</li>
            <li>confirmación tras enviar</li>
            <li>no se permite reportar sin sesión</li>
          </ul>
      </div>
    </div>

<div class="box meta-box">
<div class="meta-group">
<h4>VALOR</h4>
<div class="lined"><p>el producto no se descontrola, hay herramienta real</p></div>
</div>
<div class="meta-group">
<h4>PRIORIDAD</h4>
<div class="lined"><p>Alta</p></div>
</div>
<div class="meta-group">
<h4>ESTIMACIÓN</h4>
<div class="lined"><p>5</p></div>
</div>
</div>

  </div>
</div>

---

<div class="card">
  <div class="header-row">
    <div class="field"><strong>ID:</strong> HU-18</div>
    <div class="field"><strong>TÍTULO:</strong> Avisos acumulables por conducta repetida</div>
  </div>

  <div class="body-main">
    <div class="field">
      <div class="label">CÓMO</div>
      <div class="lined"><p>sistema</p></div>
    </div>
    <div class="field">
      <div class="label">QUIERO</div>
      <div class="lined"><p>registrar avisos cuando un usuario acumula reportes válidos</p></div>
    </div>
    <div class="field">
      <div class="label">PARA PODER</div>
      <div class="lined"><p>detectar patrones y actuar antes de que explote</p></div>
    </div>
  </div>

  <div class="hu-bottom">
    <div class="box validation-box">
      <h4>VALIDACIÓN</h4>
      <div class="lined">
          <ul>
            <li>existe contador de avisos por usuario</li>
            <li>existe historial de avisos con fecha y motivo</li>
            <li>se define una regla mínima para sumar avisos</li>
            <li>los avisos no se muestran públicamente</li>
          </ul>
      </div>
    </div>

<div class="box meta-box">
<div class="meta-group">
<h4>VALOR</h4>
<div class="lined"><p>control real, no solo botón de denunciar</p></div>
</div>
<div class="meta-group">
<h4>PRIORIDAD</h4>
<div class="lined"><p>Media</p></div>
</div>
<div class="meta-group">
<h4>ESTIMACIÓN</h4>
<div class="lined"><p>5</p></div>
</div>
</div>

  </div>
</div>

---

<div class="card">
  <div class="header-row">
    <div class="field"><strong>ID:</strong> HU-19</div>
    <div class="field"><strong>TÍTULO:</strong> Panel admin para gestionar reportes</div>
  </div>

  <div class="body-main">
    <div class="field">
      <div class="label">CÓMO</div>
      <div class="lined"><p>admin</p></div>
    </div>
    <div class="field">
      <div class="label">QUIERO</div>
      <div class="lined"><p>ver y gestionar reportes</p></div>
    </div>
    <div class="field">
      <div class="label">PARA PODER</div>
      <div class="lined"><p>revisar casos y cerrar incidencias</p></div>
    </div>
  </div>

  <div class="hu-bottom">
    <div class="box validation-box">
      <h4>VALIDACIÓN</h4>
      <div class="lined">
          <ul>
            <li>listado de reportes con estado pendiente, revisado, cerrado</li>
            <li>ver detalle del reporte con actividad y usuarios implicados</li>
            <li>cambiar estado del reporte</li>
            <li>registrar nota de moderación</li>
            <li>acceso protegido por rol admin</li>
          </ul>
      </div>
    </div>

<div class="box meta-box">
<div class="meta-group">
<h4>VALOR</h4>
<div class="lined"><p>el sistema de reportes funciona de verdad</p></div>
</div>
<div class="meta-group">
<h4>PRIORIDAD</h4>
<div class="lined"><p>Media</p></div>
</div>
<div class="meta-group">
<h4>ESTIMACIÓN</h4>
<div class="lined"><p>5</p></div>
</div>
</div>

  </div>
</div>

---

<div class="card">
  <div class="header-row">
    <div class="field"><strong>ID:</strong> HU-20</div>
    <div class="field"><strong>TÍTULO:</strong> Acciones de moderación sobre usuarios</div>
  </div>

  <div class="body-main">
    <div class="field">
      <div class="label">CÓMO</div>
      <div class="lined"><p>admin</p></div>
    </div>
    <div class="field">
      <div class="label">QUIERO</div>
      <div class="lined"><p>aplicar advertencia, limitación o bloqueo a un usuario</p></div>
    </div>
    <div class="field">
      <div class="label">PARA PODER</div>
      <div class="lined"><p>frenar comportamientos repetidos o graves</p></div>
    </div>
  </div>

  <div class="hu-bottom">
    <div class="box validation-box">
      <h4>VALIDACIÓN</h4>
      <div class="lined">
          <ul>
            <li>acción advertir registra nota y fecha</li>
            <li>acción limitar impide unirse durante un tiempo definido</li>
            <li>acción bloquear impide login o impide acciones clave</li>
            <li>el estado del usuario se refleja en la app</li>
            <li>todo queda en historial de admin</li>
          </ul>
      </div>
    </div>

<div class="box meta-box">
<div class="meta-group">
<h4>VALOR</h4>
<div class="lined"><p>seguridad y convivencia, parte diferencial del proyecto</p></div>
</div>
<div class="meta-group">
<h4>PRIORIDAD</h4>
<div class="lined"><p>Media</p></div>
</div>
<div class="meta-group">
<h4>ESTIMACIÓN</h4>
<div class="lined"><p>5</p></div>
</div>
</div>

  </div>
</div>

---

<div class="card">
  <div class="header-row">
    <div class="field"><strong>ID:</strong> HU-21</div>
    <div class="field"><strong>TÍTULO:</strong> Tienda con catálogo de zapatillas sostenibles</div>
  </div>

  <div class="body-main">
    <div class="field">
      <div class="label">CÓMO</div>
      <div class="lined"><p>usuario</p></div>
    </div>
    <div class="field">
      <div class="label">QUIERO</div>
      <div class="lined"><p>ver una tienda con zapatillas sostenibles</p></div>
    </div>
    <div class="field">
      <div class="label">PARA PODER</div>
      <div class="lined"><p>comprar producto alineado con el enfoque del proyecto</p></div>
    </div>
  </div>

  <div class="hu-bottom">
    <div class="box validation-box">
      <h4>VALIDACIÓN</h4>
      <div class="lined">
          <ul>
            <li>catálogo con tarjetas de producto</li>
            <li>cada producto muestra nombre, precio, imagen y etiqueta sostenible</li>
            <li>acceso al detalle de producto</li>
            <li>productos cargan desde base de datos o API</li>
          </ul>
      </div>
    </div>

<div class="box meta-box">
<div class="meta-group">
<h4>VALOR</h4>
<div class="lined"><p>integra la parte de sostenibilidad y modelo de negocio</p></div>
</div>
<div class="meta-group">
<h4>PRIORIDAD</h4>
<div class="lined"><p>Alta</p></div>
</div>
<div class="meta-group">
<h4>ESTIMACIÓN</h4>
<div class="lined"><p>5</p></div>
</div>
</div>

  </div>
</div>

---

<div class="card">
  <div class="header-row">
    <div class="field"><strong>ID:</strong> HU-22</div>
    <div class="field"><strong>TÍTULO:</strong> Detalle de producto</div>
  </div>

  <div class="body-main">
    <div class="field">
      <div class="label">CÓMO</div>
      <div class="lined"><p>usuario</p></div>
    </div>
    <div class="field">
      <div class="label">QUIERO</div>
      <div class="lined"><p>ver el detalle de un producto</p></div>
    </div>
    <div class="field">
      <div class="label">PARA PODER</div>
      <div class="lined"><p>entender materiales, características y comprar bien</p></div>
    </div>
  </div>

  <div class="hu-bottom">
    <div class="box validation-box">
      <h4>VALIDACIÓN</h4>
      <div class="lined">
          <ul>
            <li>detalle muestra descripción, materiales, precio, imagen</li>
            <li>botón añadir al carrito</li>
            <li>stock visible si se gestiona</li>
            <li>se ve el mensaje sostenible de forma clara</li>
          </ul>
      </div>
    </div>

<div class="box meta-box">
<div class="meta-group">
<h4>VALOR</h4>
<div class="lined"><p>confianza y compra más informada</p></div>
</div>
<div class="meta-group">
<h4>PRIORIDAD</h4>
<div class="lined"><p>Media</p></div>
</div>
<div class="meta-group">
<h4>ESTIMACIÓN</h4>
<div class="lined"><p>3</p></div>
</div>
</div>

  </div>
</div>

---

<div class="card">
  <div class="header-row">
    <div class="field"><strong>ID:</strong> HU-23</div>
    <div class="field"><strong>TÍTULO:</strong> Añadir y quitar productos del carrito</div>
  </div>

  <div class="body-main">
    <div class="field">
      <div class="label">CÓMO</div>
      <div class="lined"><p>usuario</p></div>
    </div>
    <div class="field">
      <div class="label">QUIERO</div>
      <div class="lined"><p>añadir productos al carrito y quitarlos</p></div>
    </div>
    <div class="field">
      <div class="label">PARA PODER</div>
      <div class="lined"><p>preparar una compra sin complicaciones</p></div>
    </div>
  </div>

  <div class="hu-bottom">
    <div class="box validation-box">
      <h4>VALIDACIÓN</h4>
      <div class="lined">
          <ul>
            <li>botón añadir al carrito desde catálogo o detalle</li>
            <li>se puede eliminar un producto desde carrito</li>
            <li>el carrito mantiene productos al navegar por la web</li>
            <li>si el carrito queda vacío, mensaje claro</li>
          </ul>
      </div>
    </div>

<div class="box meta-box">
<div class="meta-group">
<h4>VALOR</h4>
<div class="lined"><p>base del flujo de compra</p></div>
</div>
<div class="meta-group">
<h4>PRIORIDAD</h4>
<div class="lined"><p>Alta</p></div>
</div>
<div class="meta-group">
<h4>ESTIMACIÓN</h4>
<div class="lined"><p>5</p></div>
</div>
</div>

  </div>
</div>

---

<div class="card">
  <div class="header-row">
    <div class="field"><strong>ID:</strong> HU-24</div>
    <div class="field"><strong>TÍTULO:</strong> Carrito con contador y total</div>
  </div>

  <div class="body-main">
    <div class="field">
      <div class="label">CÓMO</div>
      <div class="lined"><p>usuario</p></div>
    </div>
    <div class="field">
      <div class="label">QUIERO</div>
      <div class="lined"><p>ver un contador de carrito y el total</p></div>
    </div>
    <div class="field">
      <div class="label">PARA PODER</div>
      <div class="lined"><p>saber rápido lo que llevo y cuánto cuesta</p></div>
    </div>
  </div>

  <div class="hu-bottom">
    <div class="box validation-box">
      <h4>VALIDACIÓN</h4>
      <div class="lined">
          <ul>
            <li>icono de carrito con contador visible</li>
            <li>en carrito se ven unidades por producto</li>
            <li>se puede cambiar cantidad</li>
            <li>se recalcula el total al momento</li>
            <li>el total se muestra claro y sin líos</li>
          </ul>
      </div>
    </div>

<div class="box meta-box">
<div class="meta-group">
<h4>VALOR</h4>
<div class="lined"><p>cumple selección temporal con totales</p></div>
</div>
<div class="meta-group">
<h4>PRIORIDAD</h4>
<div class="lined"><p>Alta</p></div>
</div>
<div class="meta-group">
<h4>ESTIMACIÓN</h4>
<div class="lined"><p>5</p></div>
</div>
</div>

  </div>
</div>

---

<div class="card">
  <div class="header-row">
    <div class="field"><strong>ID:</strong> HU-25</div>
    <div class="field"><strong>TÍTULO:</strong> Confirmar pedido</div>
  </div>

  <div class="body-main">
    <div class="field">
      <div class="label">CÓMO</div>
      <div class="lined"><p>usuario con sesión</p></div>
    </div>
    <div class="field">
      <div class="label">QUIERO</div>
      <div class="lined"><p>confirmar el pedido del carrito</p></div>
    </div>
    <div class="field">
      <div class="label">PARA PODER</div>
      <div class="lined"><p>registrar una compra en el sistema</p></div>
    </div>
  </div>

  <div class="hu-bottom">
    <div class="box validation-box">
      <h4>VALIDACIÓN</h4>
      <div class="lined">
          <ul>
            <li>si no hay sesión, pide login antes de confirmar</li>
            <li>al confirmar, se crea pedido con líneas y total</li>
            <li>se muestra resumen final de pedido</li>
            <li>el carrito se vacía tras confirmar</li>
            <li>no hay pago real si no se implementa pasarela</li>
          </ul>
      </div>
    </div>

<div class="box meta-box">
<div class="meta-group">
<h4>VALOR</h4>
<div class="lined"><p>cierra el flujo de tienda</p></div>
</div>
<div class="meta-group">
<h4>PRIORIDAD</h4>
<div class="lined"><p>Media</p></div>
</div>
<div class="meta-group">
<h4>ESTIMACIÓN</h4>
<div class="lined"><p>5</p></div>
</div>
</div>

  </div>
</div>

---

<div class="card">
  <div class="header-row">
    <div class="field"><strong>ID:</strong> HU-26</div>
    <div class="field"><strong>TÍTULO:</strong> Puntos ecológicos por actividad y canje en tienda</div>
  </div>

  <div class="body-main">
    <div class="field">
      <div class="label">CÓMO</div>
      <div class="lined"><p>usuario registrado</p></div>
    </div>
    <div class="field">
      <div class="label">QUIERO</div>
      <div class="lined"><p>ganar puntos por participar en actividades y canjearlos</p></div>
    </div>
    <div class="field">
      <div class="label">PARA PODER</div>
      <div class="lined"><p>tener una recompensa ligada a hábitos sanos y sostenibles</p></div>
    </div>
  </div>

  <div class="hu-bottom">
    <div class="box validation-box">
      <h4>VALIDACIÓN</h4>
      <div class="lined">
          <ul>
            <li>el sistema registra puntos por participación validada</li>
            <li>el usuario ve su saldo de puntos en perfil</li>
            <li>en carrito o checkout se puede aplicar descuento con puntos</li>
            <li>no permite saldo negativo</li>
            <li>queda registro de canjes</li>
          </ul>
      </div>
    </div>

<div class="box meta-box">
<div class="meta-group">
<h4>VALOR</h4>
<div class="lined"><p>conecta comunidad, deporte y sostenibilidad</p></div>
</div>
<div class="meta-group">
<h4>PRIORIDAD</h4>
<div class="lined"><p>Baja</p></div>
</div>
<div class="meta-group">
<h4>ESTIMACIÓN</h4>
<div class="lined"><p>8</p></div>
</div>
</div>

  </div>
</div>

---

<div class="card">
  <div class="header-row">
    <div class="field"><strong>ID:</strong> HU-27</div>
    <div class="field"><strong>TÍTULO:</strong> API REST para rutas y actividades</div>
  </div>

  <div class="body-main">
    <div class="field">
      <div class="label">CÓMO</div>
      <div class="lined"><p>frontend</p></div>
    </div>
    <div class="field">
      <div class="label">QUIERO</div>
      <div class="lined"><p>consumir rutas y actividades desde una API en JSON</p></div>
    </div>
    <div class="field">
      <div class="label">PARA PODER</div>
      <div class="lined"><p>tener datos reales y no inventados en el navegador</p></div>
    </div>
  </div>

  <div class="hu-bottom">
    <div class="box validation-box">
      <h4>VALIDACIÓN</h4>
      <div class="lined">
          <ul>
            <li>endpoint rutas lista y detalle</li>
            <li>endpoint actividades lista con filtros</li>
            <li>endpoint detalle actividad</li>
            <li>respuestas con JSON claro</li>
            <li>errores controlados con códigos coherentes</li>
          </ul>
      </div>
    </div>

<div class="box meta-box">
<div class="meta-group">
<h4>VALOR</h4>
<div class="lined"><p>une cliente y servidor, base del intermodular</p></div>
</div>
<div class="meta-group">
<h4>PRIORIDAD</h4>
<div class="lined"><p>Alta</p></div>
</div>
<div class="meta-group">
<h4>ESTIMACIÓN</h4>
<div class="lined"><p>8</p></div>
</div>
</div>

  </div>
</div>

---

<div class="card">
  <div class="header-row">
    <div class="field"><strong>ID:</strong> HU-28</div>
    <div class="field"><strong>TÍTULO:</strong> API REST para usuarios, reportes y tienda</div>
  </div>

  <div class="body-main">
    <div class="field">
      <div class="label">CÓMO</div>
      <div class="lined"><p>frontend</p></div>
    </div>
    <div class="field">
      <div class="label">QUIERO</div>
      <div class="lined"><p>endpoints para registro, login, reportes y tienda</p></div>
    </div>
    <div class="field">
      <div class="label">PARA PODER</div>
      <div class="lined"><p>completar el producto sin hacks raros</p></div>
    </div>
  </div>

  <div class="hu-bottom">
    <div class="box validation-box">
      <h4>VALIDACIÓN</h4>
      <div class="lined">
          <ul>
            <li>endpoint registro con validación de DNI y email</li>
            <li>endpoint login y logout con sesión</li>
            <li>endpoint crear actividad y unirse y salir</li>
            <li>endpoint reportar</li>
            <li>endpoint productos tienda</li>
            <li>endpoint pedido</li>
            <li>control de acceso por rol en admin</li>
            <li>pruebas básicas con Postman</li>
          </ul>
      </div>
    </div>

<div class="box meta-box">
<div class="meta-group">
<h4>VALOR</h4>
<div class="lined"><p>cierra el circuito del producto real</p></div>
</div>
<div class="meta-group">
<h4>PRIORIDAD</h4>
<div class="lined"><p>Alta</p></div>
</div>
<div class="meta-group">
<h4>ESTIMACIÓN</h4>
<div class="lined"><p>8</p></div>
</div>
</div>

  </div>
</div>

---

<div class="card">
  <div class="header-row">
    <div class="field"><strong>ID:</strong> HU-29</div>
    <div class="field"><strong>TÍTULO:</strong> Documentación de endpoints y pruebas con Postman</div>
  </div>

  <div class="body-main">
    <div class="field">
      <div class="label">CÓMO</div>
      <div class="lined"><p>equipo de desarrollo</p></div>
    </div>
    <div class="field">
      <div class="label">QUIERO</div>
      <div class="lined"><p>documentar endpoints y guardar pruebas Postman</p></div>
    </div>
    <div class="field">
      <div class="label">PARA PODER</div>
      <div class="lined"><p>demostrar que la API funciona y dejar rastro</p></div>
    </div>
  </div>

  <div class="hu-bottom">
    <div class="box validation-box">
      <h4>VALIDACIÓN</h4>
      <div class="lined">
          <ul>
            <li>documento de endpoints con método, ruta, parámetros y ejemplo</li>
            <li>colección Postman exportada en tests o docs</li>
            <li>capturas de pruebas importantes</li>
            <li>endpoints responden como se documenta</li>
          </ul>
      </div>
    </div>

<div class="box meta-box">
<div class="meta-group">
<h4>VALOR</h4>
<div class="lined"><p>evidencia real del trabajo, y sirve para depurar</p></div>
</div>
<div class="meta-group">
<h4>PRIORIDAD</h4>
<div class="lined"><p>Alta</p></div>
</div>
<div class="meta-group">
<h4>ESTIMACIÓN</h4>
<div class="lined"><p>5</p></div>
</div>
</div>

  </div>
</div>

---

<div class="card">
  <div class="header-row">
    <div class="field"><strong>ID:</strong> HU-30</div>
    <div class="field"><strong>TÍTULO:</strong> Accesibilidad base en pantallas clave</div>
  </div>

  <div class="body-main">
    <div class="field">
      <div class="label">CÓMO</div>
      <div class="lined"><p>usuario</p></div>
    </div>
    <div class="field">
      <div class="label">QUIERO</div>
      <div class="lined"><p>usar la web sin barreras</p></div>
    </div>
    <div class="field">
      <div class="label">PARA PODER</div>
      <div class="lined"><p>navegar, crear y unirme con teclado y sin perderme</p></div>
    </div>
  </div>

  <div class="hu-bottom">
    <div class="box validation-box">
      <h4>VALIDACIÓN</h4>
      <div class="lined">
          <ul>
            <li>navegación por teclado</li>
            <li>foco visible</li>
            <li>labels en formularios</li>
            <li>mensajes de error claros</li>
            <li>contraste suficiente</li>
            <li>estructura semántica básica</li>
          </ul>
      </div>
    </div>

<div class="box meta-box">
<div class="meta-group">
<h4>VALOR</h4>
<div class="lined"><p>mejora calidad y evita suspensos por accesibilidad</p></div>
</div>
<div class="meta-group">
<h4>PRIORIDAD</h4>
<div class="lined"><p>Alta</p></div>
</div>
<div class="meta-group">
<h4>ESTIMACIÓN</h4>
<div class="lined"><p>3</p></div>
</div>
</div>

  </div>
</div>
