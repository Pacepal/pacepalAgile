# Roles y control de acceso — PacePal

La aplicación utiliza un sistema básico de roles para controlar el acceso a determinadas funcionalidades.

Los roles se almacenan en la tabla usuarios.

---

# Tipos de usuario

## Invitado

Usuario no autenticado.

Puede:

- ver rutas
- ver actividades
- ver productos de la tienda

No puede:

- crear actividades
- comprar productos
- acceder al perfil

---

## Usuario registrado

Usuario con cuenta en la plataforma.

Puede:

- crear actividades deportivas
- unirse a actividades
- comprar productos en la tienda
- consultar su perfil
- ver sus pedidos

---

## Administrador

Usuario con privilegios de administración.

Puede:

- gestionar usuarios (crear, editar y eliminar)
- gestionar rutas (crear, editar y eliminar)
- gestionar actividades (crear, editar y eliminar)
- gestionar productos (crear, editar y eliminar)
- consultar todos los pedidos del sistema
- acceder al panel de administración

---

# Control de acceso en el backend

El control de acceso se realiza mediante sesiones PHP.

Cuando un usuario inicia sesión:

- se crea una sesión
- se almacena el id del usuario
- se almacena el rol del usuario

Ejemplo

$_SESSION["usuario_id"]
$\_SESSION["rol"]

Antes de ejecutar ciertas operaciones el sistema comprueba el rol del usuario.

Por ejemplo:

solo los administradores pueden modificar productos o rutas.
