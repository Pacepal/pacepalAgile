<!doctype html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Panel admin - PacePal</title>
  <link rel="preconnect" href="https://cdn.jsdelivr.net" />
  <link rel="icon" href="../../img/logo/favicon/favicon.ico" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
  <link rel="stylesheet" href="../../css/estilos.css" />
</head>

<body class="pagina-interna pagina-admin">
  <div id="navbarCompartida" data-base="../../" data-current="admin"></div>

  <main>
    <!-- Encabezado de la página de admin -->
    <section class="encabezado-pagina contenedor">
      <h1>Panel de administracion</h1>
      <p>Control operativo del sistema para administradores.</p>
    </section>

    <!-- Sección para la gestión de usuarios -->
    <section class="seccion-pagina">
      <div class="contenedor">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h2 class="mb-0">Usuarios registrados</h2>
          <button type="button" id="btn-admin-crear-usuario" class="boton boton--primario">Crear usuario</button>
        </div>
        <div id="admin-form-usuario" style="display:none;" class="mb-4"></div>
        <div id="admin-usuarios" aria-live="polite"></div>
      </div>
    </section>

    <!-- Sección para la gestión de reportes -->
    <section class="seccion-pagina">
      <div class="contenedor">
        <h2>Reportes</h2>
        <div id="admin-reportes" aria-live="polite"></div>
      </div>
    </section>

    <!-- Sección para la gestión de actividades -->
    <section class="seccion-pagina">
      <div class="contenedor">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h2 class="mb-0">Actividades</h2>
          <button type="button" id="btn-admin-crear-actividad" class="boton boton--primario">Crear actividad</button>
        </div>
        <div id="admin-form-actividad" style="display:none;" class="mb-4"></div>
        <div id="admin-actividades" aria-live="polite"></div>
      </div>
    </section>

    <!-- Sección para la gestión de rutas -->
    <section class="seccion-pagina">
      <div class="contenedor">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h2 class="mb-0">Rutas</h2>
          <button type="button" id="btn-admin-crear-ruta" class="boton boton--primario">Crear ruta</button>
        </div>
        <div id="admin-form-ruta" style="display:none;" class="mb-4"></div>
        <div id="admin-rutas" aria-live="polite"></div>
      </div>
    </section>

    <!-- Sección para la gestión de pedidos -->
    <section class="seccion-pagina">
      <div class="contenedor">
        <h2>Pedidos</h2>
        <div id="admin-pedidos" aria-live="polite"></div>
      </div>
    </section>
  </main>

  <!-- Footer de la página de admin -->
  <div id="footerCompartido" data-base="../../"></div>

  <script src="../../js/formulario/ui.js?v=2"></script>
  <script src="../../js/app.js"></script>
  <script src="../../js/cookies.js"></script>
  <script src="../../js/admin/panelAdmin.js"></script>
</body>

</html>