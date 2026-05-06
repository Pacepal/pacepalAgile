# PacePal React Sprint 3

Este directorio contiene el cliente React/Vite del Sprint 3 de Cliente de PacePal.

## Objetivo de esta carpeta

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
- `hooks/useCart.js`: sincroniza carrito, cantidades, eliminacion y pedido.
- `hooks/useSession.js`: login, registro, logout y estado de sesion.
- `services/api.js`: centraliza `fetch`, JSON, credenciales de sesion y URL base.

La URL por defecto es `../../src/api/index.php/api`, adecuada si el build React se sirve desde `frontend-react`. Puede sobrescribirse con `VITE_API_BASE_URL`.

## Comandos

```bash
npm install
npm run dev
npm run build
```

## Relacion con PHP

El backend PHP no se sustituye. React usa los endpoints ya implementados en `src/api/index.php`, manteniendo PDO, sesiones PHP, roles y persistencia en la base de datos.
