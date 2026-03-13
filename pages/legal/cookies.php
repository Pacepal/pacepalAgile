<!doctype html>
<html lang="es">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Política de Cookies - PacePal</title>
    <link rel="preconnect" href="https://cdn.jsdelivr.net" />
    <link rel="icon" href="../../img/logo/favicon/favicon.ico" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
    <link rel="stylesheet" href="../../css/estilos.css" />
</head>

<body class="pagina-interna">
    <div id="navbarCompartida" data-base="../../" data-current="legal"></div>

    <main>
        <!-- Seccion de politica de cookies -->
        <section class="encabezado-pagina contenedor">
            <h1>Política de Cookies</h1>
            <p>Información sobre el uso de cookies en PacePal.</p>
        </section>

        <section class="seccion-pagina">
            <div class="contenedor">
                <article class="legal-contenido">

                    <!-- Introducción a la política de cookies -->
                    <h2>1. ¿Qué es una cookie?</h2>
                    <p>
                        Una cookie es un pequeño archivo de texto que un sitio web almacena en tu navegador
                        cuando lo visitas. Las cookies permiten al sitio recordar información sobre tu visita,
                        como tus preferencias de sesión, lo que facilita la navegación y mejora la experiencia de uso.
                    </p>

                    <h2>2. ¿Qué cookies utiliza PacePal?</h2>
                    <p>
                        Actualmente, PacePal utiliza <strong>únicamente cookies técnicas</strong> necesarias para
                        el correcto funcionamiento de la plataforma.
                    </p>

                    <h3>2.1 Cookie de sesión (PHPSESSID)</h3>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Tipo</th>
                                <th>Finalidad</th>
                                <th>Duración</th>
                                <th>Terceros</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>PHPSESSID</td>
                                <td>Técnica / Necesaria</td>
                                <td>Mantener la sesión del usuario: inicio de sesión, carrito de compra, perfil y panel de administración.</td>
                                <td>Hasta cerrar el navegador o hacer logout</td>
                                <td>No</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                        Esta cookie es <strong>estrictamente necesaria</strong> para que el sitio funcione correctamente.
                        Sin ella, no sería posible iniciar sesión, mantener el carrito de compra ni acceder a funcionalidades
                        que requieren autenticación. No almacena información personal directamente; solo contiene un
                        identificador único de sesión.
                    </p>

                    <!-- Cookie de consentimiento -->
                    <h3>2.2 Cookie de consentimiento (pacepal_cookies)</h3>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Tipo</th>
                                <th>Finalidad</th>
                                <th>Duración</th>
                                <th>Terceros</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>pacepal_cookies</td>
                                <td>Técnica / Necesaria</td>
                                <td>Recordar las preferencias de consentimiento de cookies del usuario para no volver a mostrar el banner.</td>
                                <td>1 año</td>
                                <td>No</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                        Esta cookie es establecida por el servidor PHP mediante la API (<code>POST /api/cookies</code>)
                        y almacena la elección del usuario respecto al consentimiento de cookies en formato JSON.
                        Es gestionada íntegramente del lado del servidor.
                    </p>

                    <!-- Cookies analíticas y publicitarias -->
                    <h2>3. Cookies analíticas y publicitarias</h2>
                    <p>
                        PacePal <strong>no utiliza actualmente</strong> cookies analíticas (como Google Analytics)
                        ni cookies publicitarias o de marketing. No se comparte información con terceros a través de cookies.
                    </p>
                    <p>
                        En caso de que en el futuro se integren herramientas de analítica o publicidad, se actualizará
                        esta política y se solicitará el consentimiento del usuario antes de activar dichas cookies.
                    </p>

                    <!-- Gestión de preferencias de cookies -->
                    <h2>4. ¿Cómo puedo gestionar mis preferencias?</h2>
                    <p>
                        Al visitar PacePal por primera vez, se muestra un banner de cookies donde puedes:
                    </p>
                    <ul>
                        <li><strong>Aceptar todas</strong>: permite cookies técnicas y opcionales (cuando existan).</li>
                        <li><strong>Solo técnicas</strong>: permite únicamente la cookie de sesión necesaria.</li>
                        <li><strong>Configurar</strong>: abre un panel para elegir qué categorías de cookies permitir.</li>
                    </ul>
                    <p>
                        Si deseas cambiar tu elección después, puedes hacerlo de dos formas:
                    </p>
                    <ul>
                        <li>Borrar los datos del sitio desde la configuración de tu navegador (esto hará que el banner vuelva a aparecer).</li>
                        <li>Hacer clic en el botón <strong>"Configurar cookies"</strong> disponible en el pie de página de cualquier página.</li>
                    </ul>

                    <!-- Bloqueo y eliminación de cookies -->
                    <h2>5. ¿Cómo puedo bloquear o eliminar cookies desde el navegador?</h2>
                    <p>
                        Puedes configurar tu navegador para bloquear o eliminar cookies. A continuación, algunos enlaces útiles:
                    </p>
                    <ul>
                        <li><strong>Chrome</strong>: Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios</li>
                        <li><strong>Firefox</strong>: Ajustes &gt; Privacidad y seguridad &gt; Cookies y datos del sitio</li>
                        <li><strong>Safari</strong>: Preferencias &gt; Privacidad &gt; Gestionar datos de sitios web</li>
                        <li><strong>Edge</strong>: Configuración &gt; Cookies y permisos del sitio</li>
                    </ul>
                    <p>
                        Ten en cuenta que si bloqueas la cookie de sesión (<code>PHPSESSID</code>), no podrás iniciar sesión
                        ni utilizar el carrito de compra en PacePal.
                    </p>

                    <!-- Información de contacto -->
                    <h2>6. Contacto</h2>
                    <p>
                        Si tienes dudas sobre esta política de cookies, puedes contactar con el equipo de PacePal
                        a través de la sección de contacto del sitio web.
                    </p>

                    <!-- Actualización de la política de cookies -->
                    <p class="legal-actualizacion">
                        <em>Última actualización: marzo 2026</em>
                    </p>

                </article>
            </div>
        </section>
    </main>

    <!-- Footer de la página de política de cookies -->
    <div id="footerCompartido" data-base="../../"></div>

    <script src="../../js/formulario/ui.js?v=2"></script>
    <script src="../../js/app.js"></script>
    <script src="../../js/cookies.js"></script>
</body>

</html>