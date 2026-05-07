# PacePal React Sprint 3

Cliente React/Vite del Sprint 3 de Cliente de PacePal.

## Objetivo

- aislar el cliente React dentro del mismo repositorio;
- mantener el backend PHP/MySQL real como fuente de verdad en local;
- publicar una demo defendible en GitHub Pages sin romper la experiencia cuando PHP no existe;
- conservar el look and feel legacy reutilizando CSS e imagenes compartidas.

## Entrada y despliegue

Entrada Vite:

- `index.html`
- `src/main.jsx`
- `src/App.jsx`

Configuracion publica:

```js
base: "./";
```

Los assets de React estan en `frontend-react/public/`. Vite copia `public/data/` y `public/img/` al `dist/` publicado, por lo que las rutas funcionan en subcarpetas de XAMPP y en GitHub Pages sin depender del nombre `pacepalAgile`.

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
- `ContactPage.jsx`
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

React importa `../../../css/estilos.css` desde `src/styles/global.css` para mantener el aspecto visual original, pero sus datos e imagenes publicas se sirven desde `frontend-react/public/`.

## Modo local real

En el build servido desde XAMPP, React apunta por defecto a la API PHP relativa al proyecto:

```text
../../src/api/index.php/api
```

Requisitos:

1. Apache y MySQL activos en XAMPP.
2. `db/schema.sql` y `db/seed.sql` importados.
3. Proyecto servido desde `htdocs`.
4. Build generado con `npm run build`.

La raiz del proyecto usa un unico `index.html` como lanzador React. Calcula el destino con una URL relativa hacia `./frontend-react/dist/index.html`, sin rutas fisicas del sistema. `.htaccess` solo define `DirectoryIndex index.html` y no hace redirecciones.

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

Las cookies demo se intentan escribir en `path=/` y en la ruta base detectada desde la URL actual con `SameSite=Lax` y `Secure` en HTTPS. Si el navegador las bloquea, la app sigue funcionando porque la persistencia principal esta en `localStorage` y `sessionStorage`.

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

## Verificacion de rutas cerrada el 2026-05-08

- `npm run build` -> correcto.
- XAMPP/Apache -> raiz del proyecto, build directo `frontend-react/dist/index.html`, JS, CSS, JSON, logo e imagenes principales responden `200` desde `http://localhost/treecore%20Trabajos/pacepal/`.
- La URL generada por los lanzadores no contiene `C:/xampp`, `htdocs`, `localhost/C:` ni `file://`.
- GitHub Pages usa el `index.html` generado por Vite.
- Cookies validadas con `Aceptar todas` y `Solo tecnicas`.
- Login demo, logout, registro demo, duplicado y carrito demo validados en Pages.
- La comprobacion visual de DevTools queda como evidencia manual pendiente en `docs/evidencias/rutas-react-xampp/README.md`.

## Ajuste de Contacto

- La pagina `ContactPage.jsx` se ha simplificado para alinearse visualmente con Login, Register y Sobre nosotros.
- El formulario sigue siendo educativo, mantiene validacion en cliente y no realiza envios reales.
- La carga del logo principal y del logo de Treecore en React se ha revisado usando imports estaticos empaquetados por Vite para evitar roturas visibles de ruta.

## Limitacion tecnica conocida

En GitHub Pages pueden verse `404` o `405` de rutas PHP en consola antes de que el cliente complete el fallback demo. Es una limitacion del hosting estatico, no un bloqueo funcional del cliente React.
