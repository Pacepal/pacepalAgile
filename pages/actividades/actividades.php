<!doctype html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Actividades - PacePal</title>
  <link rel="preconnect" href="https://cdn.jsdelivr.net" />
  <link rel="icon" href="../../img/logo/favicon/favicon.ico" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
  <link rel="stylesheet" href="../../css/estilos.css" />
</head>

<body class="pagina-interna pagina-actividades">
  <div id="navbarSharedMount" data-base="../../" data-current="actividades"></div>

  <main>
    <!-- Encabezado de la página de actividades -->
    <section class="encabezado-pagina contenedor">
      <h1>Actividades</h1>
      <p>Actividades deportivas creadas por la comunidad.</p>
    </section>

    <!-- Sección para mostrar las actividades disponibles -->
    <section class="seccion-pagina">
      <div class="contenedor">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h2 class="mb-0">Actividades disponibles</h2>
          <div id="boton-crear-actividad"></div>
        </div>
        <div id="lista-actividades" class="rejilla rejilla--actividades" aria-live="polite"></div>
      </div>
    </section>
  </main>

  <!-- Footer de la página de actividades -->
  <div id="footerSharedMount" data-base="../../"></div>

  <script src="../../js/formulario/ui.js?v=2"></script>
  <script src="../../js/app.js"></script>
  <script src="../../js/cookies.js"></script>
  <script src="../../js/actividades/actividades.js"></script>
</body>

</html>