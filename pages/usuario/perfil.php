<!doctype html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Perfil - PacePal</title>
  <link rel="preconnect" href="https://cdn.jsdelivr.net" />
  <link rel="icon" href="../../img/logo/favicon/favicon.ico" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
  <link rel="stylesheet" href="../../css/estilos.css" />
</head>

<body class="pagina-interna pagina-usuario">
  <div id="navbarCompartida" data-base="../../" data-current="perfil"></div>

  <!-- Contenido principal de la página -->
  <main>
    <section class="encabezado-pagina contenedor">
      <h1>Perfil</h1>
      <p>Gestion basica del perfil de usuario.</p>
    </section>

    <!-- Sección para mostrar la información del perfil del usuario -->
    <section class="seccion-pagina">
      <div class="contenedor">
        <div id="perfil-usuario" aria-live="polite"></div>
      </div>
    </section>

    <!-- Sección para mostrar el historial de pedidos del usuario -->
    <section class="seccion-pagina">
      <div class="contenedor">
        <h2>Historial de pedidos</h2>
        <div id="historial-pedidos" aria-live="polite"></div>
      </div>
    </section>
  </main>

  <!-- Footer de perfil -->
  <div id="footerCompartido" data-base="../../"></div>

  <script src="../../js/formulario/ui.js?v=2"></script>
  <script src="../../js/app.js"></script>
  <script src="../../js/cookies.js"></script>
  <script src="../../js/usuario/perfil.js"></script>
</body>

</html>