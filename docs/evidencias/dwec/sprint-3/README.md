# Evidencias DWEC Sprint 3

Resumen de la verificación final del cliente React Sprint 3 realizada el 2026-05-07 sobre la rama `sprint-3-react-jsx`.

## Estado verificado

- Rama validada al iniciar la fase: `sprint-3-react-jsx`.
- Estado Git al iniciar la fase: arbol limpio, sin cambios pendientes.
- `HEAD` al iniciar la fase: `c201d6a` (`subida a rama sprint 3 para clonacion del companero en su equipo`).
- Workflow `Deploy React Sprint 3 to GitHub Pages`:
  - run `#8` para el commit `86f609d` -> `completed successfully`.
  - run `#9` para el commit `c201d6a` -> `completed successfully`.
- URL publica validada: `https://pacepal.github.io/pacepalAgile/pacepal-react.html?v=86f609d`.
- URL local Vite validada en esta sesión: `http://127.0.0.1:5176/pacepalAgile/pacepal-react.html`.

## Resultado funcional

## Evidencia específica: migración del carrito a React (2026-05-07)

Checklist solicitado para cierre de migración:

- [x] Añadir productos desde la galeria React.
- [x] Mantener contador y cantidades.
- [x] Permitir borrado y recalculo del total.
- [x] Dejar evidencia del flujo completo.

Paridad funcional minima validada:

1. Alta desde galeria React:
  - `ShopPage.jsx` conecta `ProductGallery` con `cart.addItem`.
  - `ProductCard.jsx` ejecuta `onAddToCart(product, 1)` y muestra confirmación.
2. Contador y cantidades:
  - `Header.jsx` muestra el badge del carrito con `cart.count`.
  - `useCart.js` recalcula `count` como suma de `cantidad`.
3. Borrado y total:
  - `CartItem.jsx` permite eliminar con `onRemove`.
  - `Cart.jsx` renderiza el total en base a `cart.total` y conserva checkout.
4. Ajuste antirregresion aplicado:
  - `CartItem.jsx` ahora confirma cambios de cantidad al perder foco o pulsar Enter (equivalente al comportamiento legacy por evento `change`) en lugar de enviar actualizaciones por cada tecla.

Validación local del flujo completo:

- Build local React ejecutado después del ajuste:
  - comando: `npm run build`
  - resultado: compilación correcta (`vite build`, 62 módulos transformados, salida `dist/` generada).
- Validación funcional de flujo:
  1. Alta de producto desde galeria.
  2. Incremento de cantidad en carrito con recálculo de subtotal/total.
  3. Eliminación de producto y actualización de total.
  4. Contador de cabecera sincronizado con el contenido del carrito.

### GitHub Pages

- La URL publica carga sin pantalla blanca.
- El aviso de cookies aparece tras limpiar `localStorage`, `sessionStorage` y cookies.
- `Aceptar todas` crea:
  - `localStorage.pacepal_cookie_consent = accepted`
  - cookie `pacepal_cookie_consent=accepted`
- `Solo técnicas` crea exactamente la misma evidencia visible en `Application`.
- Login demo con `admin@pacepal.com / Admin1234*`:
  - cambia el header a estado autenticado;
  - crea `pacepal_demo_user` en `localStorage`;
  - crea `pacepal_demo_session` en `sessionStorage`;
  - crea `pacepal_session_demo` en cookies.
- Tras recarga, la sesión demo se recompone desde almacenamiento y cookie.
- Logout:
  - devuelve el header a `Login/Register`;
  - elimina `pacepal_session_demo`;
  - elimina `pacepal_demo_session`;
  - limpia `pacepal_demo_user`.
- Registro demo:
  - alta validada con `usuario.pages@pacepal.com`;
  - persistencia validada en `pacepal_demo_users`;
  - auto login validado tras el registro;
  - email duplicado devuelve el error controlado `Ya existe una cuenta con ese correo electronico.`
- Carrito demo:
  - alta de producto validada;
  - cambio de cantidad a 2 validado;
  - total `179.80 EUR` validado;
  - persistencia tras recarga validada en `pacepal_demo_cart`;
  - vaciado del carrito validado, dejando `pacepal_demo_cart = []`.

### Local con Vite

- `npm run build` completado correctamente.
- `npm run dev -- --host 127.0.0.1` arrancado correctamente.
- En esta sesión Vite asignó `http://127.0.0.1:5176/pacepalAgile/` porque `5173`, `5174` y `5175` estaban ocupados.
- La página local carga sin pantalla blanca.
- No se detecta `/pacepalAgile/pacepalAgile/` en el DOM generado.
- No se detectan imagenes rotas en la home validada.
- La comprobación de `GET /src/api/index.php/api/session` respondió `200` con JSON válido.
- Simulación local de navegador con cookies bloqueadas:
  - `document.cookie` vacio durante toda la prueba;
  - `pacepal_cookie_consent` guardado en `localStorage`;
  - registro demo guardado en `pacepal_demo_users`;
  - login demo funcional;
  - recarga con sesión y carrito recompuestos desde almacenamiento;
  - logout limpiando `pacepal_demo_user` y `pacepal_demo_session` aunque no exista cookie visible.

## Compatibilidad entre navegadores y cookies

- Chrome, Edge y Firefox suelen reflejar mejor las cookies demo en DevTools.
- Brave puede ocultarlas o bloquearlas según Shields.
- El cliente React ya no depende exclusivamente de cookies: usa `localStorage` como fuente principal y `sessionStorage` para la sesión de pestaña.
- En esta sesión no se ha podido abrir un navegador Brave real desde las herramientas disponibles, así que la evidencia automatizada equivalente se ha hecho simulando cookies bloqueadas en el navegador integrado.
- La validación manual real que queda para defensa es:
  - Chrome;
  - Brave con Shields activado;
  - Brave con Shields desactivado;
  - Edge;
  - Firefox;
  - ventana de incognito o privada.

## Comparación visual con legacy

Comparación hecha contra `index.html`, `pages/`, `css/`, `img/` y la implementación React en `frontend-react/src/`.

### Vistas identicas

- Home.
- Actividades.
- Rutas.
- Politica de cookies.
- About / Sobre nosotros.

### Vistas casi identicas

- Tienda.
- Carrito.
- Detalle de producto.
- Detalle de actividad.
- Detalle de ruta.
- Perfil.

### Vistas con diferencias visibles

- Login.
- Registro.
- Aviso de cookies.

### Diferencias pendientes realmente observables

- Login y registro existen como rutas SPA (`#login`, `#registro`) y no como flujo legacy servidor a servidor.
- El aviso de cookies es nuevo en React porque la versión publicada en GitHub Pages necesita una capa visible de consentimiento y evidencia en `Application`.
- El resto del cliente mantiene prácticamente la misma estructura visual porque React reutiliza el CSS legacy desde `frontend-react/src/styles/global.css` importando `../../../css/estilos.css` y consume imágenes compartidas desde `img/`.

## Capturas en disco — inventario completo (2026-05-07)

Todas las capturas referenciadas en los casos de prueba estan cubiertas por los archivos reales en disco.

### Carrito React — `tests/react-sprint-3/07-carrito.md`

| Archivo | Contenido |
|---|---|
| `Carrito_añadir_React.png` | Alta de producto desde galeria React |
| `Carrito-React.png` | Carrito con cantidades, borrado y total visible |

### Buscador React — `tests/react-sprint-3/06-buscador-productos.md`

| Archivo | Contenido |
|---|---|
| `productos-buscador.png` | Vista del buscador en tienda React (carga inicial) |
| `productos-filtrados.png` | Escenario positivo con resultados |
| `productos-no-encontrado.png` | Escenario sin coincidencias (mensaje controlado) |
| `Buscador_sin_resultados.png` | Escenario sin coincidencias — captura alternativa |

### Escaparate y paginación — `tests/react-sprint-3/11-escaparate-carga-inicial-react.md`

| Archivo | Contenido |
|---|---|
| `productos-buscador.png` | Carga inicial de la galería React en `#tienda` |
| `Buscador_sin_resultados.png` | Estado vacío tras búsqueda sin coincidencias |
| `Productos-paginados2.png` | Tienda página 2 con productos restantes de BD |
| `nota-consumo-api-escaparate-react.md` | Nota técnica verificación API real (`status=ok`) |

### Perfil y formularios — `tests/react-sprint-3/09-perfil.md`

| Archivo | Contenido |
|---|---|
| `Perfil-React.png` | Vista general del perfil de usuario en React |
| `Perfil_usuario_admin.png` | Perfil admin con datos reales de BD (nombre, email, DNI, rol, pedidos) |
| `Formulario_React.png` | Formulario de autenticación React (login/registro) |

### Panel de administración — `tests/react-sprint-3/10-admin.md`

| Archivo | Contenido |
|---|---|
| `Nuevos-usuarios.png` | Panel admin con tabla de usuarios, reportes y actividades cargados desde API real |

### Regresion secundaria — `tests/react-sprint-3/12-regresion-secundarios-cookies-perfil-reportes.md`

| Archivo | Contenido |
|---|---|
| `Regresion_cookies_preferencias.png` | Panel de preferencias de cookies y persistencia de consentimiento |
| `Perfil_usuario_admin.png` | Perfil tras login con datos reales (escenario B de regresion) |
| `Nuevos-usuarios.png` | Panel admin con bloque de reportes visible (escenario C de regresion) |

## Observaciones

- En GitHub Pages, el cliente intenta primero la API y luego aplica el fallback demo. Por eso el navegador puede registrar `404` o `405` en rutas PHP antes de rehidratar sesión, carrito o registro demo.
- Esa limitación es técnica de GitHub Pages y no impide la defensa funcional del cliente React publicado.
- En navegadores que bloquean cookies, la evidencia mínima defendible debe centrarse en `Local Storage` y `Session Storage`, dejando `Cookies` como evidencia adicional solo cuando el navegador la permita.

## Validación extra de acceso React sin regresión

Comprobación adicional ejecutada el 2026-05-07 contra API real en local (`http://localhost/pacepalAgile/src/api/index.php/api`).

Flujo verificado con una misma sesión HTTP persistente:

1. `POST /api/register` con usuario nuevo.
2. `POST /api/login` con las mismas credenciales.
3. `GET /api/session` devolviendo `logged = true`.
4. `POST /api/logout`.
5. `GET /api/session` devolviendo `logged = false`.

Resultado registrado en terminal:

- `registerStatus: ok`
- `loginStatus: ok`
- `sessionLoggedBeforeLogout: True`
- `logoutStatus: ok`
- `sessionLoggedAfterLogout: False`

Esta validación confirma que los formularios React pueden trabajar con sesión real cuando la API está disponible, manteniendo el fallback demo solo para entornos sin API (por ejemplo GitHub Pages).

## Evidencia de paginación de productos y carga completa desde BD (2026-05-07)

Validación realizada sobre `http://127.0.0.1:5175/pacepal-react.html` con API PHP real (`http://localhost/pacepalAgile/src/api/index.php/api/productos`).

### Problema detectado y corregido

La API paginaba los productos a 6 por página (`por_pagina=6`, `total=10`). El cliente solo pedía la página 1, por lo que únicamente se mostraban 6 de los 10 productos reales de la BD. Se corrigió `useProducts.js` para:

1. Detectar si `total > products.length` tras la primera respuesta.
2. Hacer `Promise.all` de las páginas adicionales hasta recuperar todos los productos.
3. Paginar en cliente con `PAGE_SIZE = 6` (6 productos/página, 2 páginas en total con los datos actuales).

### Capturas generadas

| Archivo | Descripción |
|---|---|
| `Tienda_pagina1_6productos.png` | Página 1 de la tienda con los 6 primeros productos cargados desde la BD real. |
| `Tienda_pagina2_4productos.png` | Página 2 con los 4 productos restantes (10 en total). |
| `Tienda_paginacion_botones.png` | Controles de paginación: botón "Anterior", indicador "Página X de Y" y botón "Siguiente". |
| `Buscador_con_resultados.png` | Búsqueda por "zapatilla" filtrando y mostrando el resultado coincidente. |
| `Buscador_sin_resultados.png` | Búsqueda sin coincidencias con mensaje de estado controlado. |
| `Cookies_preferencias_panel.png` | Panel de preferencias de cookies con opciones de consentimiento. |
| `Perfil_usuario_admin.png` | Perfil del administrador con datos reales de la BD (nombre, email, DNI, rol, pedidos). |
| `Admin_panel_usuarios_reportes.png` | Panel de administración con tabla de usuarios registrados, bloque de reportes y actividades. |

### Resultado funcional

- 10 productos reales cargados desde la BD (antes: 6 visibles por limitación de paginación API).
- Paginación UI funcionando con colores del footer (`--color-verde-oscuro: #2a400a`).
- Buscador filtra sobre el conjunto completo (no solo la página actual).
- Panel de cookies, perfil con datos reales y panel admin validados con sesión autenticada.
