<!doctype html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Detalle de actividad - PacePal</title>
  <link rel="preconnect" href="https://cdn.jsdelivr.net" />
  <link rel="icon" href="../../img/logo/favicon/favicon.ico" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
  <link rel="stylesheet" href="../../css/estilos.css" />
</head>

<body class="pagina-interna pagina-actividades">
  <div id="navbarSharedMount" data-base="../../" data-current="actividades"></div>

  <main>
    <!-- Detalles de la actividad -->
    <section class="encabezado-pagina contenedor">
      <h1>Detalle de actividad</h1>
      <p>Vista completa de una actividad publicada.</p>
    </section>

    <!-- Contenedos para mostrar la actividada -->
    <section class="seccion-pagina">
      <div class="contenedor">
        <div id="detalle-actividad" aria-live="polite"></div>
      </div>
    </section>
  </main>

  <!-- Footer de la página de detalle de actividad -->
  <div id="footerSharedMount" data-base="../../"></div>

  <script src="../../js/formulario/ui.js?v=2"></script>
  <script src="../../js/app.js"></script>
  <script src="../../js/cookies.js"></script>
  <script src="../../js/actividades/actividadDetalle.js"></script>
</body>

</html>