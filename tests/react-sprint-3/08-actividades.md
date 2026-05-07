# Caso 08 – Actividades

## Objetivo

Comprobar que el listado de actividades carga desde la API, que el detalle muestra los datos completos, y que los flujos de unirse, abandonar y crear una actividad funcionan correctamente según el estado del usuario.

## Prerequisitos

- XAMPP activo con actividades y rutas en la base de datos.
- Usuario autenticado para las acciones de unirse, abandonar y crear.

---

## Listado de actividades

### Pasos

1. Abrir `pages/actividades/actividades.php`.

### Resultado esperado

- Se cargan todas las actividades desde `GET /api/actividades`.
- Cada tarjeta muestra nombre de ruta, fecha, hora, nivel y plazas disponibles.

---

## Detalle de actividad

### Pasos

1. Pulsar sobre una actividad del listado.
2. Se abre `pages/actividades/actividadDetalle.php?id=X`.

### Resultado esperado

- Se muestra el detalle completo: ruta, fecha, nivel, plazas y participantes.
- Los datos se cargan desde `GET /api/actividades/{id}` sin recargar la página.

---

## Unirse a una actividad

### Pasos

1. Acceder al detalle de una actividad con plazas disponibles.
2. Pulsar el botón "Unirse".

### Resultado esperado

- Se llama a `POST /api/actividades/{id}/join`.
- El botón cambia a "Abandonar".
- El contador de participantes se actualiza en pantalla.

---

## Abandonar una actividad

### Pasos

1. Acceder al detalle de una actividad a la que el usuario ya está unido.
2. Pulsar "Abandonar".

### Resultado esperado

- Se llama a `POST /api/actividades/{id}/leave`.
- El botón vuelve a "Unirse".

---

## Actividad sin plazas

### Pasos

1. Acceder al detalle de una actividad cuyo aforo está completo.

### Resultado esperado

- El botón "Unirse" aparece deshabilitado o no visible.
- Se muestra un mensaje indicando que no hay plazas disponibles.

---

## Crear una actividad

### Pasos

1. Ir a `pages/actividades/crearActividad.php` con sesión activa.
2. Rellenar todos los campos: ruta, fecha, hora, nivel y número de plazas.
3. Enviar el formulario.

### Resultado esperado

- Se llama a `POST /api/actividad`.
- La nueva actividad aparece en el listado general.

---

## Crear actividad sin sesión

### Pasos

1. Cerrar sesión.
2. Intentar acceder directamente a `pages/actividades/crearActividad.php`.

### Resultado esperado

- Se redirige al login o se muestra un mensaje de acceso restringido.

---

## Crear actividad con datos inválidos

### Pasos

1. Acceder a `crearActividad.php` con sesión activa.
2. Intentar enviar el formulario con campos vacíos o con una fecha anterior a hoy.

### Resultado esperado

- La API responde con error de validación.
- El cliente muestra el mensaje de error sin recargar la página.
