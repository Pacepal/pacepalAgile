<!doctype html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Rutas - PacePal</title>
  <link rel="preconnect" href="https://cdn.jsdelivr.net" />
  <link rel="icon" href="../../img/logo/favicon/favicon.ico" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
  <link rel="stylesheet" href="../../css/estilos.css" />
</head>

<body class="pagina-interna pagina-rutas">
  <div id="navbarCompartida" data-base="../../" data-current="rutas"></div>

  <!-- Encabezado de la página de rutas -->
  <main>
    <section class="encabezado-pagina contenedor">
      <h1>Rutas</h1>
      <p>Listado de rutas disponibles para actividades deportivas.</p>
    </section>

    <!-- Sección de listado de rutas -->
    <section class="seccion-pagina">
      <div class="contenedor">
        <h2>Rutas disponibles</h2>
        <div id="lista-rutas" class="rejilla rejilla--productos" aria-live="polite"></div>
      </div>
    </section>
  </main>

  <!-- Footer de la página de rutas -->
  <div id="footerCompartido" data-base="../../"></div>

  <script src="../../js/formulario/ui.js?v=2"></script>
  <script src="../../js/app.js"></script>
  <script src="../../js/cookies.js"></script>
  <script src="../../js/rutas/rutas.js"></script>
</body>

</html>