# Caso 10 – Panel de administración

## Objetivo

Comprobar que el panel de administración solo es accesible con rol `admin`, que gestiona correctamente usuarios, rutas, actividades y reportes, y que bloquea el acceso a cualquier usuario sin privilegios.

## Prerequisitos

- XAMPP activo.
- Cuenta con rol `admin` (email: `admin@pacepal.com`).
- Abrir `pages/admin/panelAdmin.php`.

---

## Acceso con rol admin

### Pasos

1. Iniciar sesión con la cuenta de administrador.
2. Abrir `pages/admin/panelAdmin.php`.

### Resultado esperado

- Se carga el panel con las secciones de usuarios, rutas, actividades y reportes.

---

## Acceso bloqueado a usuario normal

### Pasos

1. Iniciar sesión con una cuenta sin rol `admin`.
2. Intentar abrir `pages/admin/panelAdmin.php`.

### Resultado esperado

- La comprobación de sesión (`GET /api/session`) detecta que no es admin.
- Se muestra "Acceso restringido" o se redirige al inicio.

---

## Acceso sin sesión

### Pasos

1. Cerrar sesión.
2. Intentar abrir `pages/admin/panelAdmin.php` directamente.

### Resultado esperado

- Mismo comportamiento que el caso anterior: acceso denegado o redirección.

---

## Listado de usuarios

### Pasos

1. Con sesión de admin activa, ver la sección de usuarios en el panel.

### Resultado esperado

- Se cargan todos los usuarios desde `GET /api/usuarios`.
- Cada fila muestra nombre, email y rol.

---

## Cambiar rol de usuario

### Pasos

1. En la sección de usuarios, cambiar el rol de un usuario a `admin` o a `usuario`.

### Resultado esperado

- Se llama a `PUT /api/usuarios/{id}`.
- El cambio de rol queda reflejado en la tabla sin recargar la página.

---

## Eliminar usuario

### Pasos

1. En la sección de usuarios, pulsar "Eliminar" sobre un usuario.
2. Confirmar la acción en el diálogo que aparece.

### Resultado esperado

- Se llama a `DELETE /api/usuarios/{id}`.
- El usuario desaparece de la tabla sin recargar la página.

---

## Gestión de rutas

### Pasos

1. En la sección de rutas, rellenar los campos de una nueva ruta.
2. Pulsar guardar.

### Resultado esperado

- Se llama a `POST /api/ruta`.
- La nueva ruta aparece en el listado.

---

## Gestión de reportes

### Pasos

1. En la sección de reportes, cambiar el estado de un reporte a "resuelto".

### Resultado esperado

- Se llama a `PUT /api/reportes/{id}`.
- El estado del reporte se actualiza en la tabla sin recargar la página.

---

## Listado de pedidos

### Pasos

1. Acceder a la sección de pedidos dentro del panel de admin.

### Resultado esperado

- Se cargan todos los pedidos desde `GET /api/pedidos/admin`.
- Cada entrada muestra el usuario, la fecha y el total del pedido.

---

## Evidencia asociada

- `docs/evidencias/dwec/sprint-3/Nuevos-usuarios.png`: panel de administración con tabla de usuarios registrados, bloque de reportes y actividades cargados desde la API real.
