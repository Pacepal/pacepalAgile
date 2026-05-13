# Corrección de rutas en versión React para XAMPP y GitHub Pages

## Contexto

La version principal de PacePal es React. La version PHP/HTML/JS antigua queda solo como legacy para defensa, comparacion y referencia visual.

El arranque local debe funcionar desde cualquier carpeta dentro de la carpeta web de XAMPP, incluyendo rutas con espacios como:

- `http://localhost/pacepalAgile/`
- `http://localhost/pacepalAgile/frontend-react/dist/index.html`

Una URL del navegador nunca debe contener `C:/xampp`, `htdocs`, `localhost/C:/...` ni `file://`.

## Diagnostico

Se busco en todo el repositorio:

- `C:/xampp`
- `C:\xampp`
- `htdocs`
- `localhost/C:`
- `file://`
- `RewriteBase`
- `pacepalAgile`
- `frontend-react/dist/index.html`
- `window.location`
- `location.href`
- `location.replace`
- `http-equiv="refresh"`
- `Redirect`
- `RewriteRule`

El fallo local venia del arranque:

- `.htaccess` tenia reglas `RewriteRule ... [R=302,L]` hacia el HTML de build de React.
- En XAMPP/Apache, esa redireccion podia reconstruir el `Location` usando una ruta fisica de Windows cuando el proyecto estaba dentro de una carpeta con espacios.
- El resultado era una URL incorrecta con `http://localhost/C:/xampp/htdocs/...`, que Apache interpreta como ruta web prohibida.
- `index.html` seguia siendo la landing legacy, por lo que el arranque principal no estaba garantizado si `.htaccess` no se aplicaba.
- Habia varios lanzadores equivalentes en la raiz. Se dejo un unico `index.html`.

## Solucion aplicada

Archivos corregidos:

- `index.html`
- `.htaccess`
- `frontend-react/index.html`
- `frontend-react/vite.config.js`
- `frontend-react/src/services/api.js`
- `frontend-react/src/services/demo.js`
- `frontend-react/src/utils/paths.js`
- `frontend-react/public/img/**`
- `frontend-react/README.md`
- `docs/01-bitacora/despliegue/sprint-3/rutas-react-xampp.md`
- `docs/evidencias/rutas-react-xampp/README.md`

`index.html` ahora es el lanzador principal de React:

```html
<script>
  const target = new URL('./frontend-react/dist/index.html', window.location.href);
  target.search = window.location.search || '';
  target.hash = window.location.hash || '';
  window.location.replace(target.href);
</script>
```

Tiene enlace visible de fallback:

```html
<a href="./frontend-react/dist/index.html">Abrir PacePal React</a>
```

`.htaccess` queda minimo y portable:

```apache
Options -Indexes
DirectoryIndex index.html
```

No contiene `RewriteBase`, `RewriteRule`, `Redirect`, rutas fisicas ni rutas absolutas de Windows.

La raiz ya no mantiene lanzadores legacy. La version legacy sigue en sus
carpetas historicas del proyecto para defensa, pero no compite con el arranque
principal React.

## Build React

Antes de probar el build:

```bash
cd frontend-react
npm install
npm run build
```

Vite mantiene:

```js
base: './';
```

## Validacion local

Validacion ejecutada contra Apache/XAMPP desde Windows con `cmd.exe /C curl`, porque el `localhost` de WSL no alcanzaba el Apache de Windows.

URLs comprobadas:

- `http://localhost/pacepalAgile/` -> `200`
- `http://localhost/pacepalAgile/frontend-react/dist/index.html` -> `200`
- `http://localhost/pacepalAgile/frontend-react/dist/assets/...js` -> `200`
- `http://localhost/pacepalAgile/frontend-react/dist/assets/...css` -> `200`
- `http://localhost/pacepalAgile/frontend-react/dist/img/logo/logo.webp` -> `200`
- `http://localhost/pacepalAgile/frontend-react/dist/img/logo/logotipoTrecore.webp` -> `200`
- `http://localhost/pacepalAgile/frontend-react/dist/img/productos/zapatillaPacepal1.webp` -> `200`
- `http://localhost/pacepalAgile/frontend-react/dist/img/productos/botellaPacepal1.webp` -> `200`
- `http://localhost/pacepalAgile/frontend-react/dist/img/rutas/retiro.webp` -> `200`
- `http://localhost/pacepalAgile/frontend-react/dist/img/rutas/jarosa.webp` -> `200`
- `http://localhost/pacepalAgile/frontend-react/dist/data/actividades.json` -> `200`

Simulacion del destino generado por JavaScript:

```text
http://localhost/pacepalAgile/frontend-react/dist/index.html
```

No contiene `C:/xampp`, `htdocs`, `localhost/C:/...` ni `file://`.

Las URLs locales probadas respondieron `200`; no se reprodujo `403 Forbidden`.

## Nota sobre 127.0.0.1

En este equipo `http://127.0.0.1/` no sirve el mismo DocumentRoot que
`http://localhost/`: Apache responde con otra aplicacion llamada
`El Juramento de Valtherion`. Por eso las pruebas con
`http://127.0.0.1/<carpeta-del-proyecto>/...` no alcanzan los archivos de
PacePal si Apache apunta ese host a otro DocumentRoot.

Esto no se puede corregir desde el codigo de PacePal si la peticion no llega a
la carpeta del repositorio. Para validar con `127.0.0.1`, Apache debe mapear
ese host al mismo `DocumentRoot` que `localhost` o al directorio que contiene
la carpeta real del proyecto.

## Forma correcta de abrir en local

Arranque principal:

```text
http://localhost/<carpeta-del-proyecto>/
```

Entrada directa build:

```text
http://localhost/<carpeta-del-proyecto>/frontend-react/dist/index.html
```

Tambien debe funcionar dentro de subcarpetas:

```text
http://localhost/otra-carpeta/pacepal/
http://localhost/otra-carpeta/pacepal/frontend-react/dist/index.html
```

## Pendientes

- Abrir DevTools manualmente en el navegador y confirmar visualmente que no hay errores nuevos de consola.
- Confirmar visualmente home, logo, tienda, actividades y rutas en la pantalla del navegador.
- Corregir la configuracion local de Apache si se quiere usar `127.0.0.1`; actualmente ese host sirve otro proyecto y no entra en PacePal.
- Si una base de datos local contiene rutas absolutas antiguas, corregir esos datos o normalizarlos temporalmente desde React hasta limpiar la BD.
