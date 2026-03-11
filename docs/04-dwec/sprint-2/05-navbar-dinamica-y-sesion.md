# 05 - Navbar dinámica y gestión de sesión

## ¿Por qué la navbar es dinámica en PacePal?

No queríamos tener mil versiones de la barra de navegación ni andar duplicando HTML según el estado del usuario. Por eso, montamos la navbar y el footer desde JavaScript en todas las páginas, adaptando lo que se ve según si hay sesión, el rol o la página actual. Así, cualquier cambio se hace en un solo sitio y todo está siempre sincronizado.

## ¿Cómo lo hemos hecho?

Todo está en `js/formulario/ui.js`, que se carga en todas las páginas. Al cargar, monta la navbar y el footer en los divs `#navbarSharedMount` y `#footerSharedMount`. El div de la navbar lleva atributos `data-base` (para rutas relativas) y `data-current` (para marcar el enlace activo).

La función `renderNavbarCompartida()` pide el estado de sesión a la API (`GET /api/session`). Según la respuesta, pinta unos enlaces u otros:

- Si no hay sesión: salen Actividades, Tienda, Rutas, Sobre nosotros, y los botones de Login y Register.
- Si hay sesión: además de lo anterior, salen el carrito (con badge), el botón de Perfil y el de Logout. Si el usuario es admin, también el enlace al panel de administración.

El enlace activo lleva `aria-current="page"` usando el `data-current` del div. En la landing, si el usuario está logueado, los CTAs de registro se cambian por el perfil y el texto "Crear cuenta" pasa a "Mi perfil".

El botón de Logout llama a `doLogout(basePath)`, que hace un `POST /api/logout` y redirige a login.

## Menú hamburguesa y responsive

El menú móvil lo gestiona `js/app.js`: al pulsar el botón, alterna la clase y el atributo `aria-expanded`. Si se hace clic en un enlace, el menú se cierra.

## Contador del carrito

La función `actualizarContadorCarrito()` pide el carrito a la API y suma las cantidades. Si hay productos, muestra el badge; si no o falla, lo oculta. Se ejecuta al cargar la navbar y cada vez que se toca el carrito.

## Footer compartido

El pie de página se monta igual desde JS, con columnas para enlaces, info legal y botón de cookies (`btnConfigurarCookies`). Así todo el pie es consistente y fácil de mantener.

## Archivos relacionados

- `js/formulario/ui.js`
- `js/app.js`
- `js/cookies.js`
