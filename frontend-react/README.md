# PacePal React Sprint 3

Este directorio contiene el cliente React/Vite del Sprint 3 de Cliente de PacePal.

## Objetivo

- aislar el nuevo cliente React/Vite dentro del mismo repositorio;
- usar componentes reutilizables en formato `.jsx`;
- consumir la API PHP real del proyecto;
- conservar la aplicacion PHP + JavaScript existente como version previa y referencia de comportamiento.

## Funcionalidades migradas

- galeria de productos obtenida desde `GET /api/productos`;
- buscador por nombre y descripcion con actualizacion dinamica;
- carrito conectado a sesion PHP mediante `GET/POST/PUT/DELETE /api/carrito`;
- finalizacion de pedido con `POST /api/pedido`;
- login con `POST /api/login` y consulta de sesion con `GET /api/session`;
- registro con validaciones personalizadas y envio a `POST /api/register`.
- fallback estatico para GitHub Pages cuando no hay PHP disponible.

## Arquitectura

Entrada Vite:

- `pacepal-react.html`
- `src/main.jsx`
- `src/App.jsx`

Componentes principales:

- `Header.jsx`: cabecera y contador del carrito.
- `SearchBar.jsx`: campo de busqueda.
- `ProductGallery.jsx` y `ProductCard.jsx`: listado de productos y alta en carrito.
- `Cart.jsx` y `CartItem.jsx`: contenido, cantidades, eliminacion y total.
- `LoginForm.jsx` y `RegisterForm.jsx`: formularios sin recarga de pagina.

Estado y servicios:

- `hooks/useProducts.js`: carga productos, guarda busqueda y filtra resultados.
- `hooks/useCart.js`: sincroniza carrito, cantidades, eliminacion, total y pedido.
- `hooks/useSession.js`: login, registro, logout, estado de sesion y modo demo.
- `services/api.js`: centraliza `fetch`, JSON, credenciales, URL base, aviso de demo y carga estatica.

## Modo local real

En local con XAMPP, React consume la API PHP existente. La URL base por defecto es:

```text
../../src/api/index.php/api
```

Puede sobrescribirse con:

```bash
VITE_API_BASE_URL=http://localhost/pacepal/src/api/index.php/api
```

La API PHP sigue gestionando usuarios, login, registro, sesion, catalogo, carrito, pedidos y base de datos. React no se conecta directamente a MySQL.

## Modo GitHub Pages

GitHub Pages publica archivos estaticos. No ejecuta PHP ni MySQL.

Cuando la API no responde, React carga productos desde:

```text
public/data/productos.json
```

En ese modo:

- se muestra un aviso visible sobre la limitacion de GitHub Pages;
- el carrito funciona con `localStorage`;
- login y registro validan campos, pero explican que la autenticacion real requiere la API PHP local.

Vite esta configurado con:

```js
base: '/pacepalAgile/'
```

Esto prepara las rutas del build para publicacion bajo el repositorio `pacepalAgile`.

## Comandos

```bash
npm install
npm run dev
npm run build
```

Para probar el modo local real:

1. Arrancar Apache y MySQL en XAMPP.
2. Importar `db/schema.sql` y `db/seed.sql`.
3. Servir el proyecto desde `htdocs`.
4. Ejecutar React con `npm run dev`.
5. Verificar que `GET /api/productos`, carrito, login y registro responden desde PHP.

Para probar el modo demo:

1. Ejecutar `npm run build`.
2. Servir el resultado como frontend estatico.
3. Comprobar que se cargan productos desde `public/data/productos.json` si PHP no responde.

## Relacion con PHP

El backend PHP no se sustituye. React usa los endpoints ya implementados en `src/api/index.php`, manteniendo PDO, sesiones PHP, roles y persistencia en la base de datos.

## Evidencias esperadas

- salida correcta de `npm run build`;
- capturas de galeria, busqueda, carrito y formularios;
- prueba local contra API PHP;
- prueba demo sin API PHP, con aviso visible y carrito en `localStorage`.
