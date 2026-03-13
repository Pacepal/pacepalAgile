<!doctype html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tienda - PacePal</title>
  <link rel="preconnect" href="https://cdn.jsdelivr.net" />
  <link rel="icon" href="../../img/logo/favicon/favicon.ico" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
  <link rel="stylesheet" href="../../css/estilos.css" />
</head>

<body class="pagina-interna pagina-tienda">
  <div id="navbarCompartida" data-base="../../" data-current="tienda"></div>

  <!-- Seccion de tienda donde se listan los productos disponibles -->
  <main>
    <section class="seccion-pagina">
      <div class="contenedor">
        <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
          <h2 class="mb-0">Productos disponibles</h2>
          <!-- Buscador de productos por nombre -->
          <input
            id="buscadorProductosInput"
            type="search"
            class="form-control"
            style="max-width:300px"
            placeholder="Buscar por nombre"
            autocomplete="off" />
        </div>
        <!-- Lista de productos se carga dinamicamente con JavaScript -->
        <div id="lista-productos" class="rejilla rejilla--productos" aria-live="polite"></div>
      </div>
    </section>
  </main>

  <!-- Footer de la página de tienda -->
  <div id="footerCompartido" data-base="../../"></div>

  <script src="../../js/formulario/ui.js?v=2"></script>
  <script src="../../js/app.js"></script>
  <script src="../../js/cookies.js"></script>
  <script src="../../js/tienda/productos.js"></script>
</body>

</html>