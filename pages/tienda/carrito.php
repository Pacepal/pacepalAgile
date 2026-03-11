<!doctype html>
<html lang="es">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Carrito - PacePal</title>
    <link rel="preconnect" href="https://cdn.jsdelivr.net" />
    <link rel="icon" href="../../img/logo/favicon/favicon.ico" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
    <link rel="stylesheet" href="../../css/estilos.css" />
</head>

<body class="pagina-interna pagina-tienda">
    <div id="navbarSharedMount" data-base="../../" data-current="tienda"></div>

    <main>
        <!-- Encabezado del carrito -->
        <section class="encabezado-pagina contenedor">
            <h1>Mi carrito</h1>
            <p>Revisa los productos que has anadido antes de finalizar tu pedido.</p>
        </section>

        <!-- Contenido del carrito se carga dinamicamente con JavaScript -->
        <section class="seccion-pagina">
            <div class="contenedor">
                <div id="contenido-carrito" aria-live="polite"></div>
                <div id="mensaje-carrito" class="mt-3"></div>
            </div>
        </section>
    </main>

    <!-- Footer del carrito -->
    <div id="footerSharedMount" data-base="../../"></div>

    <script src="../../js/formulario/ui.js?v=2"></script>
    <script src="../../js/app.js"></script>
    <script src="../../js/cookies.js"></script>
    <script src="../../js/tienda/carrito.js"></script>
</body>

</html>