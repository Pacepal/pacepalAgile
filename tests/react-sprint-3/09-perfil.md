# Caso 09 – Perfil de usuario

## Objetivo

Comprobar que la página de perfil carga los datos del usuario desde la API, permite editarlos y guardarlos, muestra el historial de pedidos y las actividades en las que participa, y bloquea el acceso cuando no hay sesión activa.

## Prerequisitos

- XAMPP activo, usuario autenticado con al menos un pedido registrado.
- Abrir `pages/usuario/perfil.php`.

---

## Carga de datos del perfil

### Pasos

1. Abrir `pages/usuario/perfil.php` con sesión iniciada.

### Resultado esperado

- Se muestran los datos del usuario (nombre, email, DNI y demás campos) cargados desde `GET /api/perfil`.

---

## Editar datos del perfil

### Pasos

1. Modificar el campo "Dirección" con un valor nuevo.
2. Pulsar el botón de guardar.

### Resultado esperado

- Se llama a `PUT /api/perfil`.
- El nuevo valor queda visible en la página sin recargarla.

---

## Historial de pedidos

### Pasos

1. Desplazarse a la sección de pedidos dentro del perfil.

### Resultado esperado

- Se listan los pedidos del usuario cargados desde `GET /api/pedidos`.
- Cada entrada muestra fecha, total y estado del pedido.

---

## Actividades del usuario

### Pasos

1. Desplazarse a la sección de actividades del perfil.

### Resultado esperado

- Se muestran las actividades en las que el usuario participa actualmente.

---

## Acceso sin sesión

### Pasos

1. Cerrar sesión.
2. Intentar abrir `pages/usuario/perfil.php` directamente desde el navegador.

### Resultado esperado

- La API responde con error de autenticación.
- El cliente redirige al login o muestra un mensaje de acceso restringido.

---

## Edición con datos inválidos

### Pasos

1. Con sesión activa, intentar guardar el perfil con el email en un formato incorrecto (por ejemplo, `usuario@`).

### Resultado esperado

- La validación del cliente o de la API impide el guardado.
- Se muestra el mensaje de error correspondiente sin recargar la página.

---

## Evidencia asociada

- `docs/evidencias/dwec/sprint-3/Perfil-React.png`: vista general del perfil de usuario en React.
- `docs/evidencias/dwec/sprint-3/Perfil_usuario_admin.png`: perfil del administrador con datos reales de la BD (nombre, email, DNI, rol y historial de pedidos).
- `docs/evidencias/dwec/sprint-3/Formulario_React.png`: formulario de autenticacion React (login/registro).
