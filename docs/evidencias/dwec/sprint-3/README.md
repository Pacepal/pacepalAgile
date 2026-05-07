# Evidencias DWEC Sprint 3

Resumen de la verificacion final del cliente React Sprint 3 realizada el 2026-05-07 sobre la rama `sprint-3-react-jsx`.

## Estado verificado

- Rama validada al iniciar la fase: `sprint-3-react-jsx`.
- Estado Git al iniciar la fase: arbol limpio, sin cambios pendientes.
- `HEAD` al iniciar la fase: `c201d6a` (`subida a rama sprint 3 para clonacion del companero en su equipo`).
- Workflow `Deploy React Sprint 3 to GitHub Pages`:
  - run `#8` para el commit `86f609d` -> `completed successfully`.
  - run `#9` para el commit `c201d6a` -> `completed successfully`.
- URL publica validada: `https://pacepal.github.io/pacepalAgile/pacepal-react.html?v=86f609d`.
- URL local Vite validada en esta sesion: `http://127.0.0.1:5176/pacepalAgile/pacepal-react.html`.

## Resultado funcional

### GitHub Pages

- La URL publica carga sin pantalla blanca.
- El aviso de cookies aparece tras limpiar `localStorage`, `sessionStorage` y cookies.
- `Aceptar todas` crea:
  - `localStorage.pacepal_cookie_consent = accepted`
  - cookie `pacepal_cookie_consent=accepted`
- `Solo tecnicas` crea exactamente la misma evidencia visible en `Application`.
- Login demo con `admin@pacepal.com / Admin1234*`:
  - cambia el header a estado autenticado;
  - crea `pacepal_demo_user` en `localStorage`;
  - crea `pacepal_demo_session` en `sessionStorage`;
  - crea `pacepal_session_demo` en cookies.
- Tras recarga, la sesion demo se recompone desde almacenamiento y cookie.
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
- En esta sesion Vite asigno `http://127.0.0.1:5176/pacepalAgile/` porque `5173`, `5174` y `5175` estaban ocupados.
- La pagina local carga sin pantalla blanca.
- No se detecta `/pacepalAgile/pacepalAgile/` en el DOM generado.
- No se detectan imagenes rotas en la home validada.
- La comprobacion de `GET /src/api/index.php/api/session` respondio `200` con JSON valido.
- Simulacion local de navegador con cookies bloqueadas:
  - `document.cookie` vacio durante toda la prueba;
  - `pacepal_cookie_consent` guardado en `localStorage`;
  - registro demo guardado en `pacepal_demo_users`;
  - login demo funcional;
  - recarga con sesion y carrito recompuestos desde almacenamiento;
  - logout limpiando `pacepal_demo_user` y `pacepal_demo_session` aunque no exista cookie visible.

## Compatibilidad entre navegadores y cookies

- Chrome, Edge y Firefox suelen reflejar mejor las cookies demo en DevTools.
- Brave puede ocultarlas o bloquearlas segun Shields.
- El cliente React ya no depende exclusivamente de cookies: usa `localStorage` como fuente principal y `sessionStorage` para la sesion de pestana.
- En esta sesion no se ha podido abrir un navegador Brave real desde las herramientas disponibles, asi que la evidencia automatizada equivalente se ha hecho simulando cookies bloqueadas en el navegador integrado.
- La validacion manual real que queda para defensa es:
  - Chrome;
  - Brave con Shields activado;
  - Brave con Shields desactivado;
  - Edge;
  - Firefox;
  - ventana de incognito o privada.

## Comparacion visual con legacy

Comparacion hecha contra `index.html`, `pages/`, `css/`, `img/` y la implementacion React en `frontend-react/src/`.

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
- El aviso de cookies es nuevo en React porque la version publicada en GitHub Pages necesita una capa visible de consentimiento y evidencia en `Application`.
- El resto del cliente mantiene practicamente la misma estructura visual porque React reutiliza el CSS legacy desde `frontend-react/src/styles/global.css` importando `../../../css/estilos.css` y consume imagenes compartidas desde `img/`.

## Capturas manuales necesarias

No se adjuntan capturas en este commit porque desde esta sesion no se han exportado archivos de imagen al repositorio. La lista exacta para captura manual es esta:

1. `01-actions-run-86f609d-verde.png`: workflow `Deploy React Sprint 3 to GitHub Pages`, run `#8`, commit `86f609d`, estado en verde.
2. `02-pages-home-cookies.png`: home publica con el aviso de cookies visible.
3. `03-pages-application-cookies-aceptar-todas.png`: `Application` mostrando `pacepal_cookie_consent` en `localStorage` y en `Cookies` tras `Aceptar todas`.
4. `04-pages-application-cookies-solo-tecnicas.png`: misma vista tras `Solo tecnicas`.
5. `05-pages-login-demo-ok.png`: header autenticado despues del login demo con `admin@pacepal.com`.
6. `06-pages-application-sesion-demo.png`: `Application` mostrando `pacepal_demo_user`, `pacepal_demo_session` y `pacepal_session_demo`.
7. `07-pages-reload-sesion-persistida.png`: recarga en Pages manteniendo perfil o header autenticado.
8. `08-pages-logout-limpieza.png`: `Application` tras logout sin `pacepal_session_demo` ni `pacepal_demo_session`.
9. `09-pages-registro-demo-ok.png`: perfil cargado tras registrar `usuario.pages@pacepal.com`.
10. `10-pages-registro-duplicado-error.png`: mensaje `Ya existe una cuenta con ese correo electronico.`
11. `11-pages-carrito-cantidad-total.png`: carrito con contador `2` y total `179.80 EUR`.
12. `12-pages-application-carrito-demo.png`: `Application` mostrando `pacepal_demo_cart` con el producto persistido.
13. `13-local-vite-build-ok.png`: terminal con `npm run build` completado.
14. `14-local-vite-home-ok.png`: home local en `http://127.0.0.1:5176/pacepalAgile/pacepal-react.html` sin pantalla blanca.
15. `15-local-vite-sesion-php.png`: evidencia local de sesion real contra PHP si se quiere reforzar la defensa.
16. `16-brave-shields-on-localstorage.png`: Brave con Shields activado mostrando `pacepal_cookie_consent` en `Local Storage` aunque la cookie no aparezca.
17. `17-brave-shields-on-login-demo.png`: Brave con Shields activado mostrando login demo correcto sin cookie visible.
18. `18-brave-shields-on-cart-demo.png`: Brave con Shields activado mostrando carrito demo persistente en `pacepal_demo_cart`.
19. `19-brave-shields-off-cookies.png`: Brave con Shields desactivado mostrando `pacepal_cookie_consent` y `pacepal_session_demo` en `Cookies`.
20. `20-edge-firefox-check.png`: al menos una captura por navegador mostrando la home y el banner sin pantalla blanca.
21. `21-incognito-fallback-check.png`: ventana privada/incognito con almacenamiento limpio y fallback funcionando.

## Observaciones

- En GitHub Pages, el cliente intenta primero la API y luego aplica el fallback demo. Por eso el navegador puede registrar `404` o `405` en rutas PHP antes de rehidratar sesion, carrito o registro demo.
- Esa limitacion es tecnica de GitHub Pages y no impide la defensa funcional del cliente React publicado.
- En navegadores que bloquean cookies, la evidencia minima defendible debe centrarse en `Local Storage` y `Session Storage`, dejando `Cookies` como evidencia adicional solo cuando el navegador la permita.
