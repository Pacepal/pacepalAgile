<?php
/*
 * Página de registro de usuario.
 * Si el usuario ya ha iniciado sesión, se redirige a su perfil.
 */
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
  <title>Registro - PacePal</title>
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
  <div
    id="navbarSharedMount"
    data-base="../../"
    data-current="registro"></div>

  <main class="contenedor formulario-layout">
    <section class="tarjeta-formulario" aria-labelledby="tituloRegistro">
      <h1 id="tituloRegistro">Registro de usuario</h1>

      <!-- Formulario de registro de usuario -->
      <form id="formRegistro" novalidate>
        <!-- Campo para el nombre y apellidos del usuario -->
        <label for="nombreApellidos">Nombre y apellidos</label>
        <input
          type="text"
          id="nombreApellidos"
          name="nombreApellidos"
          required
          autocomplete="name"
          placeholder="Ejemplo: Pablo Sevillano" />
        <div
          class="mensaje-error"
          id="error-nombreApellidos"
          aria-live="polite">
        </div>

        <!-- Campo para el email del usuario -->
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autocomplete="email"
          placeholder="ejemplo@email.com" />
        <div class="mensaje-error" id="error-email" aria-live="polite"></div>

        <!-- Campo para el DNI del usuario -->
        <label for="dni">DNI</label>
        <input
          type="text"
          id="dni"
          name="dni"
          required
          aria-required="true"
          minlength="9"
          maxlength="9"
          pattern="^[0-9]{8}[A-Za-z]$"
          title="Introduce un DNI válido (8 números y una letra)."
          autocomplete="off"
          placeholder="12345678Z" />
        <div class="mensaje-error" id="error-dni" aria-live="polite"></div>

        <!-- Campo para la contraseña del usuario -->
        <label for="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          autocomplete="new-password"
          placeholder="Ejemplo: PacePal#2026" />
        <div
          class="mensaje-error"
          id="error-password"
          aria-live="polite"></div>

        <!-- Campo para confirmar la contraseña del usuario -->
        <label for="confirmPassword">Confirmar contraseña</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
          autocomplete="new-password"
          placeholder="Repite la contraseña" />
        <div
          class="mensaje-error"
          id="error-confirmPassword"
          aria-live="polite"></div>

        <!-- Campo para el sexo del usuario -->
        <label for="sexo">Sexo</label>
        <select id="sexo" name="sexo">
          <option value="">Selecciona una opción</option>
          <option value="mujer">Mujer</option>
          <option value="hombre">Hombre</option>
        </select>
        <div class="mensaje-error" id="error-sexo" aria-live="polite"></div>

        <!-- Campo para la fecha de nacimiento del usuario -->
        <label for="fechaNacimiento">Fecha de nacimiento</label>
        <input type="date" id="fechaNacimiento" name="fechaNacimiento" />
        <div
          class="mensaje-error"
          id="error-fechaNacimiento"
          aria-live="polite">
        </div>
        
        <!-- Campo para la dirección del usuario -->
        <label for="direccion">Dirección</label>
        <input
          type="text"
          id="direccion"
          name="direccion"
          autocomplete="street-address"
          placeholder="Ejemplo: Calle Mayor 15" />
        <div
          class="mensaje-error"
          id="error-direccion"
          aria-live="polite">
        </div>

        <!-- Campo para el país del usuario -->
        <label for="pais">País</label>
        <select id="pais" name="pais">
          <option value="">Selecciona un país</option>
          <option value="es">España</option>
          <option value="pt">Portugal</option>
          <option value="fr">Francia</option>
          <option value="it">Italia</option>
          <option value="otro">Otro</option>
        </select>
        <div class="mensaje-error" id="error-pais" aria-live="polite"></div>

        <!-- Campo para la tarjeta de crédito del usuario -->
        <div id="contenedor-tarjeta" style="display: none">
          <label for="tarjetaCredito">Tarjeta de crédito</label>
          <input
            type="text"
            id="tarjetaCredito"
            name="tarjetaCredito"
            inputmode="numeric"
            autocomplete="cc-number"
            placeholder="1234 5678 9012 3456" />
          <div
            class="mensaje-error"
            id="error-tarjetaCredito"
            aria-live="polite"></div>
        </div>

        <!-- Campo para recibir notificaciones -->
        <div class="contenedor-checkbox">
          <input type="checkbox" id="notificaciones" name="notificaciones" />
          <label for="notificaciones">Recibir notificaciones</label>
        </div>
        <div
          class="mensaje-error"
          id="error-notificaciones"
          aria-live="polite"></div>

        <div class="contenedor-checkbox">
          <input type="checkbox" id="revistaDigital" name="revistaDigital" />
          <label for="revistaDigital">Recibir revista digital</label>
        </div>
        <div
          class="mensaje-error"
          id="error-revistaDigital"
          aria-live="polite"></div>

        <button type="submit" class="boton boton--primario">
          Registrarse
        </button>
        <div
          id="mensajeRegistro"
          class="mensaje-resultado"
          aria-live="polite"></div>
      </form>

      <!-- Enlace para redirigir a la página de login si el usuario ya tiene cuenta -->
      <p class="enlace-alterno">
        ¿Ya tienes cuenta? <a href="login.php">Iniciar sesión</a>
      </p>
    </section>
  </main>

  <!-- Footer de la página de registro -->
  <div id="footerSharedMount" data-base="../../"></div>

  <script src="../../js/formulario/validaciones.js"></script>
  <script src="../../js/formulario/ui.js?v=2"></script>
  <script src="../../js/app.js"></script>
  <script src="../../js/cookies.js"></script>
  <script src="../../js/formulario/formularioRegistro.js"></script>
</body>

</html>