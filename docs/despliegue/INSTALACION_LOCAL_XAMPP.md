# Instalacion local de PacePal con XAMPP

Guia para clonar PacePal en otro ordenador y ejecutarlo con Apache, MySQL/phpMyAdmin y la version React del sprint 3.

## Requisitos

- XAMPP con Apache y MySQL/MariaDB.
- Node.js 18 o superior.
- Git.
- Navegador moderno.

## 1. Clonar el repositorio

Ubicacion recomendada en Windows:

```bash
cd "C:\xampp\htdocs"
git clone "https://github.com/Pacepal/pacepalAgile.git" "pacepalAgile"
cd "pacepalAgile"
git checkout sprint-3-react-jsx
```

La ruta local recomendada queda:

```text
C:\xampp\htdocs\pacepalAgile
```

No es obligatorio usar ese nombre, pero si se cambia hay que ajustar la URL de la API en React. Si la ruta web contiene espacios, se escriben como `%20` dentro de la URL.

## 2. Importar la base de datos

1. Abrir XAMPP Control Panel.
2. Arrancar `Apache` y `MySQL`.
3. Abrir `http://localhost/phpmyadmin`.
4. Ir a `Importar`.
5. Seleccionar el archivo:

```text
C:\xampp\htdocs\pacepalAgile\db\pacepal.sql
```

6. Ejecutar la importacion.

El script crea la base de datos `pacepal` si no existe.

## 3. Configurar PHP

La configuracion por defecto esta preparada para XAMPP:

- host: `127.0.0.1`
- base de datos: `pacepal`
- usuario: `root`
- password: vacio
- puertos probados: `3306`, `3307`, `3308`

Si tu XAMPP usa otros datos, copia el ejemplo:

```bash
copy "src\config\config.example.php" "src\config\config.local.php"
```

Edita `src\config\config.local.php` con tus valores locales. No subas ese archivo con credenciales reales.

## 4. Configurar React

Entrar en la carpeta del cliente:

```bash
cd "frontend-react"
npm install
copy ".env.local.example" ".env.local"
```

Para la ubicacion recomendada, `.env.local` debe contener:

```env
VITE_PACEPAL_API_BASE_URL=http://localhost/pacepalAgile/src/api/index.php/api
VITE_PACEPAL_ENABLE_STATIC_FALLBACK=false
```

Si el proyecto esta en otra carpeta, cambia `pacepalAgile` por la ruta web real.

## 5. Ejecutar en local

Con Apache y MySQL arrancados:

```bash
cd "C:\xampp\htdocs\pacepalAgile\frontend-react"
npm run dev
```

Abrir la URL que indique Vite, normalmente:

```text
http://localhost:5173/
```

Tambien se puede validar la API PHP directamente:

```text
http://localhost/pacepalAgile/src/api/index.php/api/productos
http://localhost/pacepalAgile/src/api/index.php/api/rutas
http://localhost/pacepalAgile/src/api/index.php/api/actividades
```

## 6. Build de React

```bash
cd "C:\xampp\htdocs\pacepalAgile\frontend-react"
npm run build
```

El build se genera en:

```text
frontend-react\dist
```

## 7. Rutas de validacion

En la app React:

- `http://localhost:5173/#inicio`
- `http://localhost:5173/#actividades`
- `http://localhost:5173/#crear-actividad`
- `http://localhost:5173/#tienda`
- `http://localhost:5173/#producto-1`
- `http://localhost:5173/#carrito`
- `http://localhost:5173/#about`
- `http://localhost:5173/#contacto`

## Problemas habituales

- Si React muestra aviso de API no disponible, revisar `frontend-react/.env.local`.
- Si la API PHP devuelve error de base de datos, revisar que MySQL este arrancado y que `pacepal` se haya importado.
- Si Apache usa otro nombre de carpeta, actualizar la URL de `VITE_PACEPAL_API_BASE_URL`.
- No usar rutas absolutas del equipo original; la app debe funcionar desde `C:\xampp\htdocs\pacepalAgile` o desde cualquier carpeta equivalente bajo `htdocs`.

## Evidencias de rubricas y validacion

Evidencias tecnicas generadas para la revision final:

- `docs/evidencias/despliegue/sprint-3/README.md`
- `docs/evidencias/despliegue/sprint-3/01-xampp-dashboard-localhost.png`
- `docs/evidencias/despliegue/sprint-3/02-phpmyadmin-home.png`
- `docs/evidencias/despliegue/sprint-3/03-phpmyadmin-bd-pacepal.png`
- `docs/evidencias/despliegue/sprint-3/04-app-localhost-home.png`
- `docs/evidencias/despliegue/sprint-3/05-api-session-localhost.png`
- `docs/evidencias/despliegue/sprint-3/06-netstat-puertos.txt`
- `docs/evidencias/despliegue/sprint-3/07-procesos-servicios.txt`
- `docs/evidencias/despliegue/sprint-3/08-github-pages-publicacion-https.png`
- `docs/evidencias/despliegue/sprint-3/09-https-headers-github-pages.txt`

Informe de cumplimiento de la rubrica final:

- `docs/despliegue/RUBRICA_FINAL_CUMPLIMIENTO.md`
