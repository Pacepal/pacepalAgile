<?php
/* Verifica si el usuario ha iniciado sesión */
session_start();
if (!isset($_SESSION['usuario_id'])) {
    header('Location: ../formulario/login.php');
    exit;
}
?>
<!doctype html>
<html lang="es">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Crear actividad - PacePal</title>
    <link rel="preconnect" href="https://cdn.jsdelivr.net" />
    <link rel="icon" href="../../img/logo/favicon/favicon.ico" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
    <link rel="stylesheet" href="../../css/estilos.css" />
</head>

<body class="pagina-interna pagina-actividades">
    <div id="navbarSharedMount" data-base="../../" data-current="actividades"></div>

    <main>
        <!-- Encabezado de la página de crear actividad -->
        <section class="encabezado-pagina contenedor">
            <h1>Crear actividad</h1>
            <p>Organiza una nueva actividad deportiva para la comunidad.</p>
        </section>

        <!-- Sección para el formulario de creación de actividad con todos sus campos-->
        <section class="seccion-pagina">
            <div class="contenedor">
                <form id="form-crear-actividad" class="formulario" novalidate>
                    <div class="formulario__grupo">
                        <label for="crear-id-ruta" class="formulario__label">Ruta</label>
                        <select id="crear-id-ruta" name="id_ruta" class="formulario__input" required>
                            <option value="">Selecciona una ruta</option>
                        </select>
                    </div>
                    <div class="formulario__grupo"> <!-- Campo para el nombre de la actividad -->
                        <label for="crear-fecha" class="formulario__label">Fecha</label>
                        <input type="date" id="crear-fecha" name="fecha" class="formulario__input" required />
                    </div>
                    <div class="formulario__grupo"> <!-- Campo para la fecha de la actividad -->
                        <label for="crear-hora" class="formulario__label">Hora</label>
                        <input type="time" id="crear-hora" name="hora" class="formulario__input" required />
                    </div>
                    <div class="formulario__grupo"> <!-- Seleccion de dificultad-->
                        <label for="crear-nivel" class="formulario__label">Nivel</label>
                        <select id="crear-nivel" name="nivel" class="formulario__input" required>
                            <option value="">Selecciona nivel</option>
                            <option value="principiante">Principiante</option>
                            <option value="intermedio">Intermedio</option>
                            <option value="avanzado">Avanzado</option>
                        </select>
                    </div>
                    <div class="formulario__grupo"> <!-- Campo para el numero de plazas disponibles -->
                        <label for="crear-plazas" class="formulario__label">Plazas maximas</label>
                        <input type="number" id="crear-plazas" name="plazas_max" class="formulario__input" min="1" required />
                    </div>
                    <div class="formulario__grupo"> <!-- Campo para la descripcion de la actividad -->
                        <label for="crear-descripcion" class="formulario__label">Descripcion</label>
                        <textarea id="crear-descripcion" name="descripcion" class="formulario__input" rows="3"></textarea>
                    </div>
                    <div id="crear-actividad-msg"></div> <!-- Contenedor para mensajes de error o éxito -->
                    <div class="d-flex gap-2">
                        <button type="submit" class="boton boton--primario">Crear actividad</button>
                        <a href="actividades.php" class="boton">Volver a actividades</a>
                    </div>
                </form>
            </div>
        </section>
    </main>

    <!-- Footer de la página de crear actividad -->
    <div id="footerSharedMount" data-base="../../"></div>

    <script src="../../js/formulario/ui.js?v=2"></script>
    <script src="../../js/app.js"></script>
    <script src="../../js/cookies.js"></script>
    <script src="../../js/actividades/crearActividad.js"></script>
</body>

</html>