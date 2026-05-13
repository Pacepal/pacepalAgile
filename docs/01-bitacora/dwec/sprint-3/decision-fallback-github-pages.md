# Decision tecnica: fallback para GitHub Pages

## Contexto

El cliente React del Sprint 3 convive con el backend real del proyecto. En local, servido desde XAMPP, React usa la API PHP existente, las sesiones PHP del servidor y la base de datos MySQL.

En ese escenario local, React delega en `src/api/index.php` para:

- login y registro reales;
- sesion PHP real;
- carrito real;
- pedidos reales;
- lectura y escritura sobre MySQL.

## Problema de despliegue en GitHub Pages

GitHub Pages solo sirve archivos estaticos. No puede ejecutar:

- `src/api/index.php`;
- `$_SESSION`;
- conexiones PDO ni consultas MySQL;
- ninguna logica PHP de servidor.

Por eso, una publicacion estatica en GitHub Pages no puede demostrar por si sola el backend real del proyecto aunque el frontend este correctamente construido.

## Decision

Se implementa un fallback controlado solo para demostracion en GitHub Pages y otros entornos sin backend disponible.

La decision no sustituye la seguridad ni la persistencia reales del backend. Su objetivo es permitir una defensa funcional del cliente React cuando el hosting solo puede servir HTML, CSS, JS e imagenes.

## Como funciona el fallback

En GitHub Pages el cliente detecta el dominio `github.io` y no intenta consultar la API PHP. De esta forma evita 404 de endpoints que el hosting estatico no puede ejecutar y pasa directamente al modo demo.

### 1. Fuente principal: localStorage

`localStorage` es la fuente principal del modo demo persistente.

Se utiliza para mantener:

- `pacepal_cookie_consent`;
- `pacepal_demo_user`;
- `pacepal_demo_users`;
- `pacepal_demo_cart`.

Con esto, la app no depende de que el navegador permita cookies para seguir funcionando.

### 2. Simulacion de sesion de pestana: sessionStorage

`sessionStorage` se usa para simular el estado de sesion de la pestana actual mediante:

- `pacepal_demo_session`.

Si la sesion demo se restaura desde `localStorage`, la app recompone tambien este estado de pestana.

### 3. Soporte visible adicional: document.cookie

`document.cookie` se usa solo como apoyo visible en DevTools cuando el navegador lo permite. No es la fuente de verdad del fallback.

La app intenta escribir cookies demo con:

- `path=/`;
- la ruta base detectada desde la URL actual;
- `SameSite=Lax`;
- `Secure` cuando el sitio esta en HTTPS.

Despues de escribir la cookie, el cliente intenta leerla de inmediato para comprobar si el navegador la acepta. Si no la acepta, la app sigue funcionando con `localStorage` y `sessionStorage`.

## Compatibilidad entre navegadores y cookies

Chrome, Edge y Firefox suelen mostrar estas cookies de primer nivel sin configuracion adicional.

Brave puede bloquearlas parcial o totalmente segun Shields, politica de cookies o modo privado. Por eso la arquitectura del fallback no depende exclusivamente de cookies:

- `localStorage` mantiene la persistencia principal;
- `sessionStorage` mantiene el estado de la pestana;
- `document.cookie` solo aporta una evidencia adicional cuando el navegador la permite.

Esto hace que la app siga siendo utilizable incluso cuando Brave u otro navegador ocultan o rechazan la cookie demo.

## Claves visibles en DevTools

En una verificacion del modo demo, las claves que pueden aparecer son:

- `pacepal_cookie_consent`;
- `pacepal_demo_user`;
- `pacepal_demo_users`;
- `pacepal_demo_session`;
- `pacepal_session_demo`;
- `pacepal_demo_cart`.

Ubicaciones esperadas:

- `Application > Local Storage`;
- `Application > Session Storage`;
- `Application > Cookies`.

## Que se borra al hacer logout

Al cerrar sesion, el cliente limpia el estado de autenticacion demo visible que exista:

- elimina `pacepal_demo_user` de `localStorage`;
- elimina `pacepal_demo_session` de `sessionStorage`;
- elimina `pacepal_session_demo` intentando borrar la cookie tanto en `/` como en la ruta base detectada.

No se elimina automaticamente:

- `pacepal_demo_users`, porque representa usuarios creados en la demo;
- `pacepal_demo_cart`, porque el carrito demo es una persistencia separada del estado de autenticacion.

## Por que esta solucion es valida para defensa pero no sustituye el backend

Esta solucion permite demostrar el comportamiento del cliente React en GitHub Pages, pero no reemplaza la seguridad real del servidor.

Limitaciones deliberadas:

- no hay validacion segura del lado servidor;
- no hay sesion PHP real;
- no hay control real de permisos;
- no hay persistencia en base de datos;
- no hay proteccion equivalente a un backend autenticado.

Por eso el fallback es valido solo para demostracion funcional del frontend publicado. La validacion real de negocio, seguridad, sesiones y base de datos sigue correspondiendo al entorno local con XAMPP y al backend PHP/MySQL del proyecto.
