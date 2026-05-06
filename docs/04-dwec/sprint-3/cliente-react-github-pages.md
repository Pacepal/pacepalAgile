# Sprint 3 Cliente: React y GitHub Pages

## Alcance

Sprint 3 Cliente moderniza el escaparate virtual con React y JSX. No sustituye el servidor PHP/MySQL del Sprint 2. La aplicacion PHP/JS se mantiene como backend real y referencia funcional.

## Modo local real

En local con XAMPP, el cliente React consume la API PHP definida en `src/api/index.php`.

Responsabilidades del backend:

- usuarios;
- login y registro;
- sesion PHP;
- catalogo;
- carrito;
- pedidos;
- conexion con base de datos.

React centraliza la URL base en `frontend-react/src/services/api.js` y puede usar `VITE_API_BASE_URL` para apuntar a una ruta local concreta.

## Modo GitHub Pages

GitHub Pages sirve frontend estatico. No ejecuta PHP ni MySQL.

Por ese motivo, la demo publicada no intenta simular un backend PHP. Si la API no responde, React carga productos desde `frontend-react/public/data/productos.json`.

Comportamiento del modo demo:

- aviso visible: "Modo demo estático: GitHub Pages no ejecuta PHP. La integración real con PHP y base de datos se valida en local con XAMPP.";
- productos desde JSON estatico;
- carrito en `localStorage`;
- login y registro con validacion de campos, sin persistencia real.

## Entrada React

No se usa `frontend-react/index.html`. La entrada Vite es:

```text
frontend-react/pacepal-react.html
```

`vite.config.js` define:

```js
base: '/pacepalAgile/'
```

El build queda preparado para rutas bajo el repositorio `pacepalAgile`.

## Validacion esperada

```bash
cd frontend-react
npm install
npm run dev
npm run build
```

En local se debe probar con XAMPP activo y base de datos importada. En GitHub Pages se debe comprobar que el aviso de modo demo aparece si PHP no esta disponible.
