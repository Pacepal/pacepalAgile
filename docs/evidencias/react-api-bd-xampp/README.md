# Evidencias - React + API PHP + BD `pacepal`

## Fecha

2026-05-08

## Endpoint configurado para Vite

`http://localhost/treecore%20Trabajos/pacepal/src/api/index.php/api`

## Prueba Apache / localhost

Objetivo esperado:

- App servida desde `http://localhost/treecore%20Trabajos/pacepal/`
- React llama a `http://localhost/treecore%20Trabajos/pacepal/src/api/index.php/api/...`
- Productos reales visibles
- Rutas reales visibles
- Actividades reales visibles
- Imagenes visibles
- Logo Treecore visible

Estado en esta sesion:

- Configuracion React corregida para resolver la API por ruta relativa en Apache.
- Validacion HTTP directa bloqueada porque `localhost:80` no responde desde esta shell.
- Pendiente comprobacion manual con Apache/XAMPP realmente levantado en la maquina.

## Prueba Vite / 127.0.0.1

Objetivo esperado:

- App servida desde `http://127.0.0.1:<puerto>/`
- React usa `VITE_PACEPAL_API_BASE_URL`
- Network llama a `http://localhost/treecore%20Trabajos/pacepal/src/api/index.php/api/...`
- No llama a `http://127.0.0.1/treecore%20Trabajos/pacepal/src/api/index.php/api/...`
- Sin error rojo de API por falta de host correcto

Estado en esta sesion:

- Detectado y corregido el fallo de host en frontend.
- El valor local usado en `.env.local` es `http://localhost/treecore%20Trabajos/pacepal/src/api/index.php/api`.
- Pendiente comprobacion manual de red con Vite arrancado.

## Datos esperados de la BD

- Productos reales: `10`
- Rutas reales: `9`
- Actividades reales: `2`

Nota:

Esas cantidades proceden de la documentacion y del comportamiento esperado del proyecto. No se han podido revalidar por HTTP en esta sesion porque Apache no estaba accesible desde la shell.

## Estado de imagenes

Esperado:

- Imagenes de productos visibles
- Imagenes de rutas visibles
- Imagenes de actividades visibles
- Logo PacePal visible
- Logo Treecore visible

Estado en esta sesion:

- Corregida la resolucion de assets para Vite cuando la API real vive en `localhost`.
- Pendiente comprobacion visual manual con Apache/Vite en navegador.

## Estado de CORS

Aplicado en `src/api/index.php`:

- `Access-Control-Allow-Origin` dinamico para `localhost` y `127.0.0.1` en puertos `4173-4175` y `5173-5175`
- `Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS`
- `Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With, Accept`
- Respuesta `204` en `OPTIONS`

## Pendientes reales

- Levantar Apache/XAMPP y validar `health`, `productos`, `rutas` y `actividades` por HTTP real.
- Arrancar Vite y confirmar en Network que ya no se usa `127.0.0.1/.../src/api`.
- Comprobacion visual final de tienda, rutas, actividades, imagenes y logo Treecore.
