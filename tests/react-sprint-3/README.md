# Pruebas React Sprint 3

Estado de la verificacion final realizada el 2026-05-07 sobre la rama `sprint-3-react-jsx`.

No se ha ejecutado Selenium desde esta carpeta. Este documento recoge las pruebas manuales validadas en GitHub Pages y en local con Vite.

## Preparacion

```bash
cd frontend-react
npm install
npm run dev -- --host 127.0.0.1
npm run build
```

Para el modo local real tambien hay que arrancar Apache y MySQL en XAMPP e importar `db/schema.sql` y `db/seed.sql`.

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
- `Solo tecnicas` crea la misma evidencia visible en `Application`;
- login demo con `admin@pacepal.com / Admin1234*`:
	- header autenticado;
	- `pacepal_demo_user` en `localStorage`;
	- `pacepal_demo_session` en `sessionStorage`;
	- `pacepal_session_demo` en cookies;
- recarga con sesion demo recompuesta desde almacenamiento;
- logout limpiando `pacepal_session_demo`, `pacepal_demo_session` y `pacepal_demo_user`;
- registro demo de `usuario.pages@pacepal.com` guardado en `pacepal_demo_users` y con auto login;
- email duplicado rechazado con el mensaje `Ya existe una cuenta con ese correo electronico.`;
- carrito demo:
	- producto anadido;
	- cantidad actualizada a `2`;
	- total `179.80 EUR`;
	- persistencia tras recarga en `pacepal_demo_cart`;
	- limpieza final del carrito con `pacepal_demo_cart = []`.

### Local con Vite

Resultados comprobados:

- `npm run build` completado correctamente;
- `npm run dev -- --host 127.0.0.1` arrancado correctamente;
- URL local usada en esta verificacion:

```text
http://127.0.0.1:5176/pacepalAgile/pacepal-react.html
```

- carga sin pantalla blanca;
- sin ` /pacepalAgile/pacepalAgile/ ` en el DOM generado;
- sin imagenes rotas en la home validada;
- `GET /src/api/index.php/api/session` responde `200` con JSON valido.

## Pendiente

- capturas manuales para memoria o defensa, detalladas en `docs/evidencias/dwec/sprint-3/README.md`;
- si se quiere ampliar automatizacion, preparar Selenium sobre el cliente React ya estable.

## Limitaciones conocidas

- GitHub Pages no ejecuta PHP ni MySQL. El cliente intenta la API y despues entra en fallback demo. Por eso pueden aparecer `404` o `405` de las rutas PHP en consola antes de completarse la rehidratacion del modo demo.
- Esa limitacion no impide la navegacion ni la demostracion funcional publicada.
