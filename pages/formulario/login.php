<?php

session_start();
if (isset($_SESSION['usuario_id']) && isset($_SESSION['rol'])) {
  header('Location: ../usuario/perfil.php');
  exit;
}
?>
<!doctype html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login - PacePal</title>
  <link rel="preconnect" href="https://cdn.jsdelivr.net" />
  <link rel="icon" href="../../img/logo/favicon/favicon.ico" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet" />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
  <link rel="stylesheet" href="../../css/estilos.css" />
</head>

<body class="pagina-formulario">
  <div id="navbarSharedMount" data-base="../../" data-current="login"></div>

  <main class="contenedor formulario-layout">
    <!-- Sección para el formulario de inicio de sesión -->
    <section class="tarjeta-formulario" aria-labelledby="tituloLogin">
      <h1 id="tituloLogin">Iniciar sesión</h1>

      <!-- Formulario de inicio de sesión -->
      <form id="formLogin" novalidate>
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autocomplete="email"
          placeholder="ejemplo@email.com" />
        <div class="mensaje-error" id="error-email" aria-live="polite"></div>

        <label for="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          autocomplete="current-password"
          placeholder="Introduce tu contraseña" />
        <div
          class="mensaje-error"
          id="error-password"
          aria-live="polite"></div>

        <button type="submit" class="boton boton--primario">
          Iniciar sesión
        </button>

        <!-- Contenedor para mostrar mensajes de resultado del login -->
        <div
          id="mensajeLogin"
          class="mensaje-resultado"
          aria-live="polite"></div>
      </form>

      <p class="enlace-alterno">
        ¿No tienes cuenta? <a href="register.php">Crear cuenta</a>
      </p>
    </section>
  </main>

  <!-- Footer de la página de login -->
  <div id="footerSharedMount" data-base="../../"></div>

  <script src="../../js/formulario/validaciones.js"></script>
  <script src="../../js/formulario/ui.js?v=2"></script>
  <script src="../../js/app.js"></script>
  <script src="../../js/cookies.js"></script>
  <script src="../../js/formulario/formularioLogin.js"></script>
</body>

</html>