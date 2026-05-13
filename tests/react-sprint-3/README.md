# Pruebas React Sprint 3

Estado de la verificación final realizada el 2026-05-07 sobre la rama `sprint-3-react-jsx`.

No se ha ejecutado Selenium desde esta carpeta. Este documento recoge las pruebas manuales validadas en GitHub Pages y en local con Vite.

## Preparacion

```bash
cd frontend-react
npm install
npm run dev -- --host 127.0.0.1
npm run build
```

Para el modo local real también hay que arrancar Apache y MySQL en XAMPP e importar `db/schema.sql` y `db/seed.sql`.

## Estado Git y despliegue

- Rama validada: `sprint-3-react-jsx`.
- Estado inicial de trabajo: limpio, sin cambios pendientes.
- `HEAD` al iniciar la fase: `c201d6a`.
- Workflow `Deploy React Sprint 3 to GitHub Pages`:
  - run `#8` para `86f609d` -> `completed successfully`.
  - run `#9` para `c201d6a` -> `completed successfully`.

## Pruebas realizadas

### GitHub Pages

URL validada:

```text
https://pacepal.github.io/pacepalAgile/pacepal-react.html?v=86f609d
```

Resultados comprobados:

- carga inicial sin pantalla blanca;
- aviso de cookies visible tras limpiar `localStorage`, `sessionStorage` y cookies;
- `Aceptar todas` crea `pacepal_cookie_consent` en `localStorage` y en `Cookies`;
- `Solo técnicas` crea la misma evidencia visible en `Application`;
- login demo con `admin@pacepal.com / Admin1234*`:
  - header autenticado;
  - `pacepal_demo_user` en `localStorage`;
  - `pacepal_demo_session` en `sessionStorage`;
  - `pacepal_session_demo` en cookies;
- recarga con sesión demo recompuesta desde almacenamiento;
- logout limpiando `pacepal_session_demo`, `pacepal_demo_session` y `pacepal_demo_user`;
- registro demo de `usuario.pages@pacepal.com` guardado en `pacepal_demo_users` y con auto login;
- email duplicado rechazado con el mensaje `Ya existe una cuenta con ese correo electronico.`;
- carrito demo:
  - producto añadido;
  - cantidad actualizada a `2`;
  - total `179.80 EUR`;
  - persistencia tras recarga en `pacepal_demo_cart`;
  - limpieza final del carrito con `pacepal_demo_cart = []`.

### Local con Vite

Resultados comprobados:

- `npm run build` completado correctamente;
- `npm run dev -- --host 127.0.0.1` arrancado correctamente;
- URL local usada en esta verificación:

```text
http://127.0.0.1:5176/pacepalAgile/pacepal-react.html
```

- carga sin pantalla blanca;
- sin `/pacepalAgile/pacepalAgile/` en el DOM generado;
- sin imagenes rotas en la home validada;
- `GET /src/api/index.php/api/session` responde `200` con JSON válido.
- simulación local con cookies bloqueadas validada:
  - consentimiento guardado en `localStorage` con `document.cookie` vacío;
  - registro demo guardado en `pacepal_demo_users`;
  - login demo funcional;
  - recarga con sesión recompuesta sin cookie;
  - carrito demo persistente en `pacepal_demo_cart`;
  - logout limpiando `pacepal_demo_user` y `pacepal_demo_session`.

## Compatibilidad entre navegadores y cookies

- Chrome, Edge y Firefox suelen mostrar las cookies demo directamente.
- Brave puede bloquearlas según Shields o privacidad estricta.
- El cliente ya no depende exclusivamente de cookies: usa `localStorage` como respaldo principal y `sessionStorage` para la sesión de la pestaña.
- En esta sesión no se ha podido automatizar un Brave real ni una ventana privada real con las herramientas disponibles, así que queda pendiente la verificación manual final en:
  - Chrome;
  - Brave con Shields activado;
  - Brave con Shields desactivado;
  - Edge;
  - Firefox;
  - incognito o privada.

## Pendiente

- capturas manuales para memoria o defensa, detalladas en `docs/evidencias/dwec/sprint-3/README.md`;
- matriz manual real de navegadores y modo privado;
- si se quiere ampliar automatizacion, preparar Selenium sobre el cliente React ya estable.

## Casos funcionales manuales del escaparate

- `tests/react-sprint-3/11-escaparate-carga-inicial-react.md`: valida carga inicial de galeria desde API real.
- `tests/react-sprint-3/06-buscador-productos.md`: valida filtrado y estado vacío del escaparate.

## Casos de regresion secundaria

- `tests/react-sprint-3/12-regresion-secundarios-cookies-perfil-reportes.md`: valida cookies, perfil y reportes con evidencia local y mapeo a flujo real.

## Limitaciones conocidas

- GitHub Pages no ejecuta PHP ni MySQL. El cliente intenta la API y después entra en fallback demo. Por eso pueden aparecer `404` o `405` de las rutas PHP en consola antes de completarse la rehidratación del modo demo.
- Esa limitación no impide la navegación ni la demostración funcional publicada.
