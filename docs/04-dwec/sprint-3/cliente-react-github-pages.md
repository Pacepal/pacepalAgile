# Cliente React Sprint 3 en local y GitHub Pages

## Resumen

El cliente React Sprint 3 convive con la aplicacion legacy. No sustituye al backend PHP/MySQL: en local usa la API real y en GitHub Pages activa un fallback demo porque Pages solo sirve archivos estaticos.

La entrada de Vite es:

```text
frontend-react/pacepal-react.html
```

La base publica esta configurada como:

```js
base: "/pacepalAgile/";
```

El cliente React mantiene el look and feel legacy porque importa `../../../css/estilos.css` desde `frontend-react/src/styles/global.css` y reutiliza las imagenes compartidas de `img/`.

## Comandos

```bash
cd frontend-react
npm install
npm run dev -- --host 127.0.0.1
npm run build
```

## Modo local real con PHP

### Requisitos

- Apache y MySQL activos en XAMPP.
- Base de datos importada desde `db/schema.sql` y `db/seed.sql`.
- Proyecto servido desde `htdocs`.

### Comportamiento

En desarrollo, `frontend-react/src/services/api.js` resuelve la API como:

```text
/src/api/index.php/api
```

Con ese modo activo, React delega en PHP y MySQL:

- login y registro;
- sesion PHP;
- productos;
- carrito;
- pedidos;
- perfil.

En la verificacion final de 2026-05-07 se comprobo que `GET /src/api/index.php/api/session` devolvia `200` con JSON valido y que la home local cargaba sin pantalla blanca, sin rutas duplicadas `/pacepalAgile/pacepalAgile/` y sin imagenes rotas en la vista validada.

## Modo GitHub Pages con fallback demo

### URL publica validada

```text
https://pacepal.github.io/pacepalAgile/pacepal-react.html?v=86f609d
```

El parametro `?v=86f609d` se usa como bust de cache. GitHub Pages sirve siempre el ultimo build desplegado en verde de la rama publicada.

### Limitacion tecnica

GitHub Pages no ejecuta PHP ni MySQL. Por eso las rutas `src/api/index.php/api/*` responden `404` o `405` en el navegador publicado.

El cliente React intenta primero la API real y, cuando falla o no existe, activa el fallback demo sin romper la interfaz.

### Que hace el fallback demo

- carga datos estaticos desde `frontend-react/public/data/*.json`;
- guarda consentimiento de cookies en `localStorage` y lo intenta reflejar en cookies cuando el navegador lo permite;
- permite login demo;
- permite registro demo;
- mantiene sesion demo visible en `Application` usando `localStorage` y `sessionStorage` como base;
- mantiene carrito demo visible en `Application`.

## Cookies y almacenamiento visibles

Las claves comprobadas en la verificacion final son estas:

| Clave                    | Ubicacion        | Funcion                                                |
| ------------------------ | ---------------- | ------------------------------------------------------ |
| `pacepal_cookie_consent` | `localStorage`   | Consentimiento de cookies aceptado                     |
| `pacepal_cookie_consent` | `Cookies`        | Consentimiento visible en el dominio publicado         |
| `pacepal_demo_user`      | `localStorage`   | Usuario autenticado en modo demo                       |
| `pacepal_demo_users`     | `localStorage`   | Usuarios registrados en modo demo                      |
| `pacepal_demo_session`   | `sessionStorage` | Estado de la sesion demo                               |
| `pacepal_session_demo`   | `Cookies`        | Marca visible de sesion demo si el navegador la acepta |
| `pacepal_demo_cart`      | `localStorage`   | Carrito persistente del modo demo                      |

`localStorage` es la fuente principal del fallback. `sessionStorage` simula el estado de sesion de la pestana. `document.cookie` se usa como apoyo visible adicional.

Las cookies demo se intentan escribir en `path=/` y `path=/pacepalAgile` con `SameSite=Lax` y `Secure` en HTTPS. Si el navegador las bloquea, la aplicacion sigue funcionando igualmente.

## Compatibilidad entre navegadores y cookies

Chrome, Edge y Firefox suelen mostrar estas cookies de primer nivel de forma directa en DevTools.

Brave puede bloquearlas segun Shields, politica de cookies o modo privado. Por eso la app no depende exclusivamente de cookies:

- el consentimiento sigue en `localStorage`;
- la sesion demo sigue viva con `pacepal_demo_user` y `pacepal_demo_session`;
- el carrito demo sigue vivo en `pacepal_demo_cart`.

Si el navegador no acepta la cookie, la app sigue funcionando y solo desaparece esa evidencia extra en `Application > Cookies`.

## Validacion funcional cerrada el 2026-05-07

### GitHub Actions

- `Deploy React Sprint 3 to GitHub Pages` run `#8` para `86f609d` -> `completed successfully`.
- `Deploy React Sprint 3 to GitHub Pages` run `#9` para `c201d6a` -> `completed successfully`.

### GitHub Pages

- carga sin pantalla blanca;
- aviso de cookies visible tras limpiar el sitio;
- `Aceptar todas` y `Solo tecnicas` crean `pacepal_cookie_consent` tanto en `localStorage` como en cookies;
- login demo con `admin@pacepal.com / Admin1234*` crea `pacepal_demo_user`, `pacepal_demo_session` y `pacepal_session_demo`;
- la sesion demo se recompone tras recarga;
- logout limpia almacenamiento y cookie de sesion demo;
- registro demo de un usuario nuevo crea `pacepal_demo_users` y hace auto login;
- un email duplicado muestra el error controlado `Ya existe una cuenta con ese correo electronico.`;
- el carrito demo permite anadir, cambiar cantidad, recargar con persistencia y vaciar el carrito.

### Local con Vite

- `npm run build` -> correcto;
- `npm run dev -- --host 127.0.0.1` -> correcto;
- URL usada en la sesion de validacion: `http://127.0.0.1:5176/pacepalAgile/pacepal-react.html`.
- Simulacion local con cookies bloqueadas -> correcta usando `document.cookie = ''` y fallback sostenido por `localStorage` y `sessionStorage`.

Para el detalle tecnico de esta decision, ver `docs/04-dwec/sprint-3/decision-fallback-github-pages.md`.

## Comparacion con la app legacy

### Vistas identicas

- home;
- actividades;
- rutas;
- politica de cookies;
- about.

### Vistas casi identicas

- tienda;
- carrito;
- detalle de producto;
- detalle de actividad;
- detalle de ruta;
- perfil.

### Vistas con diferencias visibles pero justificadas

- login y registro, porque React las resuelve como rutas SPA;
- aviso de cookies, porque la defensa en GitHub Pages necesita evidencia visible y persistente en `Application`.
