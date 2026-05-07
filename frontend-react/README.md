# PacePal React Sprint 3

Cliente React/Vite del Sprint 3 de Cliente de PacePal.

## Objetivo

- aislar el cliente React dentro del mismo repositorio;
- mantener el backend PHP/MySQL real como fuente de verdad en local;
- publicar una demo defendible en GitHub Pages sin romper la experiencia cuando PHP no existe;
- conservar el look and feel legacy reutilizando CSS e imagenes compartidas.

## Entrada y despliegue

Entrada Vite:

- `pacepal-react.html`
- `src/main.jsx`
- `src/App.jsx`

Configuracion publica:

```js
base: "/pacepalAgile/";
```

El workflow de GitHub Pages construye `frontend-react/` y copia los assets compartidos de `img/` al `dist/` publicado.

## Arquitectura

### Paginas principales

- `HomePage.jsx`
- `ActivitiesPage.jsx`
- `ActivityDetailPage.jsx`
- `RoutesPage.jsx`
- `RouteDetailPage.jsx`
- `ShopPage.jsx`
- `ProductDetailPage.jsx`
- `CartPage.jsx`
- `ProfilePage.jsx`
- `AboutPage.jsx`
- `CookiesPage.jsx`
- `AuthPages.jsx`, `LoginPage.jsx`, `RegisterPage.jsx`

### Componentes principales

- `Header.jsx`: cabecera, contador del carrito, estado de sesion.
- `Footer.jsx`: pie y accesos legales.
- `PrivacyNotice.jsx`: banner y panel de consentimiento.
- `SearchBar.jsx`: busqueda en catalogos.
- `ProductCard.jsx`, `ActivityCard.jsx`, `RouteCard.jsx`: tarjetas reutilizables.
- `LoginForm.jsx` y `RegisterForm.jsx`: formularios SPA.

### Estado y servicios

- `hooks/useProducts.js`: catalogo de tienda y filtrado.
- `hooks/useActivities.js`: actividades.
- `hooks/useRoutes.js`: rutas.
- `hooks/useCart.js`: carrito real o demo.
- `hooks/useSession.js`: sesion real o demo.
- `services/api.js`: URL base, peticiones JSON y carga de datos estaticos.
- `services/demo.js`: cookies, sesion demo, registro demo y carrito demo.

### Reutilizacion legacy

React importa `../../../css/estilos.css` desde `src/styles/global.css` y reutiliza las imagenes compartidas de `img/`. Esto mantiene la mayor parte del aspecto visual de la aplicacion original.

## Modo local real

En desarrollo, React apunta por defecto a:

```text
/src/api/index.php/api
```

Requisitos:

1. Apache y MySQL activos en XAMPP.
2. `db/schema.sql` y `db/seed.sql` importados.
3. Proyecto servido desde `htdocs`.

Con ese entorno activo, PHP sigue gestionando:

- usuarios;
- login y registro;
- sesion PHP;
- productos;
- carrito;
- pedidos;
- perfil.

## Modo GitHub Pages

GitHub Pages no ejecuta PHP ni MySQL. El cliente intenta primero la API real y, cuando falla, activa el fallback demo.

El fallback demo usa:

- JSON estaticos en `public/data/`;
- `localStorage` como fuente principal para `pacepal_cookie_consent`, `pacepal_demo_user`, `pacepal_demo_users` y `pacepal_demo_cart`;
- `sessionStorage` para simular la sesion de pestana mediante `pacepal_demo_session`;
- cookies como apoyo visible para `pacepal_cookie_consent` y `pacepal_session_demo` cuando el navegador las permite.

Las cookies demo se intentan escribir en `path=/` y `path=/pacepalAgile` con `SameSite=Lax` y `Secure` en HTTPS. Si el navegador las bloquea, la app sigue funcionando porque la persistencia principal esta en `localStorage` y `sessionStorage`.

## Compatibilidad entre navegadores y cookies

Chrome, Edge y Firefox suelen mostrar las cookies demo en DevTools sin configuracion adicional.

Brave puede bloquearlas segun Shields, politica de cookies o modo privado. Por eso el cliente no depende exclusivamente de `document.cookie`:

- el consentimiento sigue visible en `localStorage`;
- la sesion demo sigue restaurandose desde `localStorage` y `sessionStorage`;
- el carrito demo sigue persistiendo en `localStorage`.

En otras palabras, si el navegador no acepta la cookie, la demo sigue funcionando y solo se pierde esa evidencia adicional en `Application > Cookies`.

## Comandos

```bash
npm install
npm run dev -- --host 127.0.0.1
npm run build
```

## Verificacion final cerrada el 2026-05-07

- `npm run build` -> correcto.
- `npm run dev -- --host 127.0.0.1` -> correcto.
- GitHub Pages validado en `https://pacepal.github.io/pacepalAgile/pacepal-react.html?v=86f609d`.
- Cookies validadas con `Aceptar todas` y `Solo tecnicas`.
- Login demo, logout, registro demo, duplicado y carrito demo validados en Pages.
- Sesion real local validada contra PHP con `GET /src/api/index.php/api/session` devolviendo `200`.
- Simulacion local de navegador con cookies bloqueadas validada: consentimiento, registro demo, login demo, recarga, logout y carrito siguen funcionando con `document.cookie` vacio.

## Limitacion tecnica conocida

En GitHub Pages pueden verse `404` o `405` de rutas PHP en consola antes de que el cliente complete el fallback demo. Es una limitacion del hosting estatico, no un bloqueo funcional del cliente React.
