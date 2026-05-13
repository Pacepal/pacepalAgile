# React + API PHP + BD `pacepal` en XAMPP

## Arquitectura

La arquitectura valida de PacePal es:

`React -> fetch() -> API PHP en Apache/XAMPP -> PDO -> MySQL/MariaDB pacepal -> JSON -> React`

Reglas de despliegue:

- React no conecta directamente a MySQL.
- React no debe usar JSON demo como flujo normal en local.
- La version legacy no es fuente funcional de datos, imagenes ni logica.

## Uso con XAMPP/localhost

XAMPP/Apache es quien ejecuta PHP y expone la API real.

URLs validas de la app:

- `http://localhost/pacepalAgile/`
- `http://localhost/pacepalAgile/frontend-react/dist/index.html`

URL real de la API:

- `http://localhost/pacepalAgile/src/api/index.php/api`

Endpoints base de comprobacion:

- `http://localhost/pacepalAgile/src/api/index.php/api/health`
- `http://localhost/pacepalAgile/src/api/index.php/api/productos`
- `http://localhost/pacepalAgile/src/api/index.php/api/rutas`
- `http://localhost/pacepalAgile/src/api/index.php/api/actividades`

Comportamiento esperado:

- React resuelve la API por ruta relativa dentro del proyecto.
- La API responde JSON puro.
- La BD usada es `pacepal`.
- Productos, rutas, actividades e imagenes salen de la API PHP real.

## Uso con Vite dev/preview

Vite no ejecuta PHP. Solo sirve el frontend.

Por eso, cuando React se abre desde `127.0.0.1:4173`, `4174`, `4175`, `5173`, `5174` o `5175`, hay que definir la API real en `frontend-react/.env.local`.

Ejemplo para la instalacion recomendada en `C:\xampp\htdocs\pacepalAgile`:

```env
VITE_PACEPAL_API_BASE_URL=http://localhost/pacepalAgile/src/api/index.php/api
VITE_PACEPAL_ENABLE_STATIC_FALLBACK=false
```

Reglas:

- `VITE_PACEPAL_API_BASE_URL` tiene prioridad absoluta cuando existe.
- Si React corre en Vite y falta esa variable, la app muestra un error claro y no inventa una URL con `127.0.0.1`.
- Despues de cambiar `.env.local`, hay que reiniciar Vite.

Comprobacion en Network:

- React debe llamar a `http://localhost/pacepalAgile/src/api/index.php/api/...`
- React no debe llamar a una ruta fisica de Windows ni a una carpeta concreta del equipo original.

## CORS local

`src/api/index.php` responde CORS para estos origenes locales:

- `http://127.0.0.1:4173`
- `http://127.0.0.1:4174`
- `http://127.0.0.1:4175`
- `http://127.0.0.1:5173`
- `http://127.0.0.1:5174`
- `http://127.0.0.1:5175`
- `http://localhost:4173`
- `http://localhost:4174`
- `http://localhost:4175`
- `http://localhost:5173`
- `http://localhost:5174`
- `http://localhost:5175`

La API responde `OPTIONS` con `204` y mantiene `Content-Type: application/json; charset=utf-8` para las respuestas JSON.

## Imagenes

La normalizacion principal vive en `frontend-react/src/utils/paths.js`.

Reglas aplicadas:

- URLs `http://` y `https://` se respetan.
- Rutas `/img/...` se normalizan a `img/...`.
- Rutas `img/...` se resuelven desde la base publica correcta.
- Si React corre en Vite y la API real apunta a Apache, las imagenes locales `img/...` se resuelven contra `localhost`.
- No se usa la carpeta legacy como origen funcional de imagenes.

## Build local

Comandos:

```bash
cd frontend-react
npm install
npm run build
```

Para preview local:

```bash
cd frontend-react
npm run preview -- --host 127.0.0.1
```
