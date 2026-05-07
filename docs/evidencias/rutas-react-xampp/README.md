# Evidencias - rutas React XAMPP

## Fecha de validacion

2026-05-08

## Entorno probado

- Proyecto en ruta web de XAMPP con carpeta intermedia con espacios: `treecore Trabajos/pacepal`.
- Build React: `frontend-react/dist/index.html`.
- Apache/XAMPP: activo en Windows, validado desde `cmd.exe /C curl`.
- Nota: desde WSL `curl http://localhost/...` no alcanzaba el Apache de Windows, por eso la validacion HTTP local se hizo con `cmd.exe`.

## URL local probada

Entradas principales:

- `http://localhost/treecore%20Trabajos/pacepal/` -> `200`
- `http://localhost/treecore%20Trabajos/pacepal/frontend-react/dist/index.html` -> `200`

Assets principales:

- `http://localhost/treecore%20Trabajos/pacepal/frontend-react/dist/assets/index-BVMjg-po.js` -> `200`
- `http://localhost/treecore%20Trabajos/pacepal/frontend-react/dist/assets/index-_1G2IZz5.css` -> `200`
- `http://localhost/treecore%20Trabajos/pacepal/frontend-react/dist/img/logo/logo.webp` -> `200`
- `http://localhost/treecore%20Trabajos/pacepal/frontend-react/dist/img/logo/logotipoTrecore.webp` -> `200`
- `http://localhost/treecore%20Trabajos/pacepal/frontend-react/dist/img/productos/zapatillaPacepal1.webp` -> `200`
- `http://localhost/treecore%20Trabajos/pacepal/frontend-react/dist/img/productos/botellaPacepal1.webp` -> `200`
- `http://localhost/treecore%20Trabajos/pacepal/frontend-react/dist/img/rutas/retiro.webp` -> `200`
- `http://localhost/treecore%20Trabajos/pacepal/frontend-react/dist/img/rutas/jarosa.webp` -> `200`
- `http://localhost/treecore%20Trabajos/pacepal/frontend-react/dist/data/actividades.json` -> `200`

## URL 127.0.0.1 probada

Pruebas realizadas:

- `http://127.0.0.1/treecore%20Trabajos/pacepal/frontend-react/dist/index.html`
- `http://127.0.0.1/treecore%20Trabajos/pacepal/src/api/index.php/api/health`
- `http://127.0.0.1/treecore%20Trabajos/pacepal/frontend-react/dist/img/logo/logotipoTrecore.webp`

Resultado: no llegan a PacePal. Apache responde con HTML de otro proyecto
(`El Juramento de Valtherion`) y `Content-Type: text/html`. La incidencia queda
pendiente de configuracion local de Apache/vhost: `127.0.0.1` debe apuntar al
mismo DocumentRoot que `localhost` para que esta ruta funcione.

## Comprobacion de URL generada

Destino calculado por el lanzador:

```text
http://localhost/treecore%20Trabajos/pacepal/frontend-react/dist/index.html
```

No aparece:

- `C:/xampp`
- `htdocs`
- `localhost/C:`
- `file://`

Las respuestas HTTP fueron `200`; no se reprodujo `403 Forbidden` en las URLs locales probadas.

## Resultado de consola/network

Comprobado por HTTP:

- HTML principal -> `200`
- JS/CSS -> `200`
- JSON -> `200`
- logo -> `200`
- imagen de tienda -> `200`
- imagen de ruta/actividad -> `200`
- API health/productos/rutas/actividades -> `200` en `localhost`

No se ha automatizado la inspeccion visual de DevTools. Queda pendiente abrir el navegador, confirmar la redireccion visible y revisar Console/Network.

## Capturas pendientes

Pablo debe añadir manualmente estas capturas:

1. React cargando desde `http://localhost/treecore%20Trabajos/pacepal/`.
2. URL final sin `C:/xampp`, sin `htdocs` y sin `localhost/C:`.
3. Header con logo visible.
4. Tienda con imagenes de productos visibles.
5. Actividades/rutas con imagenes visibles.
6. DevTools Console sin errores nuevos.
7. DevTools Network filtrando `img`, `assets` y `data` sin 404 relevantes.

## Incidencias pendientes

- Validacion visual manual en navegador.
- `127.0.0.1` sirve otro proyecto en este equipo; no es un fallo de ruta de PacePal mientras Apache no apunte ese host al DocumentRoot correcto.
- Si la base de datos local contiene rutas absolutas antiguas, deben corregirse en datos o normalizarse temporalmente desde React hasta limpiar la BD.
