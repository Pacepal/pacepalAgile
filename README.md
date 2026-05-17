<p align="center">
  <img src="img/logo/logo.png" alt="PacePal Logo" width="118">
</p>

<h1 align="center">PacePal — Plataforma web deportiva para comunidad, rutas y tienda</h1>

<p align="center">
  Proyecto intermodular DAW que integra frontend en React + Vite, API REST en PHP y base de datos MySQL para gestionar actividades, rutas, perfiles de usuario, autenticación y escaparate deportivo.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=111827" alt="React 18">
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 5">
  <img src="https://img.shields.io/badge/JavaScript-ESModules-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111827" alt="JavaScript ES Modules">
  <img src="https://img.shields.io/badge/PHP-API-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP API">
  <img src="https://img.shields.io/badge/MySQL-MariaDB-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL MariaDB">
  <img src="https://img.shields.io/badge/XAMPP-Local%20Stack-FB7A24?style=for-the-badge&logo=xampp&logoColor=white" alt="XAMPP">
  <img src="https://img.shields.io/badge/GitHub%20Pages-Static%20Demo-222222?style=for-the-badge&logo=githubpages&logoColor=white" alt="GitHub Pages">
</p>

## Visión general

PacePal es una aplicación web orientada a actividad física, comunidad y descubrimiento deportivo. El proyecto combina una experiencia cliente en React con una API PHP conectada a MySQL para ofrecer rutas, actividades, autenticación, perfil de usuario, carrito y vistas administrativas dentro de un mismo entregable académico.

### Qué incluye

- Landing y navegación por secciones con diseño responsive.
- Listados y detalle de productos, rutas y actividades.
- Registro, login, sesión y perfil de usuario.
- Panel de administración y reportes.
- Integración local completa con XAMPP y base de datos real.
- Demo estática desplegable en GitHub Pages con fallback controlado.

## Demo y referencias

- Demo estática: https://pacepal.github.io/pacepalAgile/
- Documentación del proyecto: [docs](docs)
- Entrega final: [docs/09-entrega-final](docs/09-entrega-final)
- Evidencias técnicas: [docs/evidencias](docs/evidencias)

## Tecnologías y arquitectura

### Frontend

- React 18 en la raíz del repositorio.
- Vite 5 como entorno de desarrollo y build.
- Componentes JSX en [js](js) y vistas en [pages](pages).
- CSS modular por secciones y páginas en [css](css).

### Backend

- API REST en PHP con entrada principal en [src/api/index.php](src/api/index.php).
- Organización tipo MVC con controladores en [src/controllers](src/controllers) y modelos en [src/models](src/models).
- Configuración local de base de datos en [src/config](src/config).

### Datos y despliegue

- Base de datos MySQL/MariaDB con scripts en [db](db).
- Build de producción generado en `dist/`.
- Workflow de despliegue de GitHub Pages en [.github/workflows/deploy-react-pages.yml](.github/workflows/deploy-react-pages.yml).

## Ramas principales del repositorio

Estas son las tres ramas clave que conviene distinguir durante la revisión y la entrega:

| Rama                 | Propósito                                                                                     | Uso recomendado                                                                                  |
| -------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `main`               | Línea base e histórico principal del repositorio.                                             | Referencia general. No usar para la entrega final ni para la subida controlada del sprint final. |
| `sprint3Definitivo`  | Rama de integración y entrega final del Sprint 3.                                             | Rama recomendada para revisión docente, comprobaciones finales y commits de cierre.              |
| `PacepalGithubPages` | Rama orientada al despliegue y a los ajustes específicos de la demo estática en GitHub Pages. | Usarla solo cuando el cambio afecte al entorno estático publicado.                               |

Nota: también existen ramas históricas de trabajo usadas durante la migración a React, pero la referencia vigente para evaluación final es `sprint3Definitivo`.

## Resumen de sprints

| Sprint   | Resumen                                                                                                                                                                                     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sprint 0 | Organización agile del proyecto, backlog inicial, historias de usuario, reparto de trabajo y definición del alcance.                                                                        |
| Sprint 1 | Diseño visual, identidad de marca, landing principal, wireframes, formularios de registro/login y validaciones en cliente.                                                                  |
| Sprint 2 | Implementación del backend PHP con MySQL, endpoints REST, páginas secundarias, carrito, buscador, rutas, actividades y pruebas funcionales.                                                 |
| Sprint 3 | Integración final del cliente React en la raíz del repositorio, fallback estático para GitHub Pages, mejoras de accesibilidad, validaciones finales, despliegue y documentación de entrega. |

### Documentación por sprints

- Bitácora general: [docs/01-bitacora](docs/01-bitacora)
- Material base: [docs/00-material](docs/00-material)
- Evidencias: [docs/evidencias](docs/evidencias)
- Documentación final: [docs/09-entrega-final](docs/09-entrega-final)

## Guía rápida de instalación para docentes

La forma recomendada de revisar PacePal en local es ejecutar la aplicación desde XAMPP con la API PHP real y la base de datos `pacepal`.

### 1. Clonar el repositorio

Se recomienda clonar el proyecto dentro de `htdocs` para que Apache pueda resolver la API sin ajustes extra:

```bash
cd "C:\xampp\htdocs"
git clone "https://github.com/Pacepal/pacepalAgile.git" "pacepalAgile"
cd "pacepalAgile"
git checkout sprint3Definitivo
```

Ruta recomendada de trabajo:

```text
C:\xampp\htdocs\pacepalAgile
```

Si se usa otra carpeta bajo `htdocs`, habrá que reflejar ese nombre en la URL de la API. Si la ruta contiene espacios, deben codificarse como `%20`.

### 2. Arrancar XAMPP

En XAMPP Control Panel:

- Iniciar `Apache`.
- Iniciar `MySQL`.

### 3. Crear e importar la base de datos

1. Abrir `http://localhost/phpmyadmin`.
2. Importar el archivo [db/pacepal.sql](db/pacepal.sql).
3. Verificar que la base de datos creada o disponible se llama `pacepal`.

También existen [db/schema.sql](db/schema.sql) y [db/seed.sql](db/seed.sql), pero la opción más directa para corrección local es importar `pacepal.sql`.

### 4. Configurar PHP si el entorno local es distinto

La configuración por defecto espera estos valores:

- Host: `127.0.0.1`
- Base de datos: `pacepal`
- Usuario: `root`
- Password: vacío
- Puertos probados: `3306`, `3307`, `3308`

Si el equipo docente usa otra configuración, copiar el ejemplo y ajustar credenciales locales:

```bash
copy "src\config\config.example.php" "src\config\config.local.php"
```

### 5. Instalar dependencias del cliente

Desde la raíz del proyecto:

```bash
npm install
copy ".env.local.example" ".env.local"
```

Contenido recomendado de `.env.local` para revisión local con XAMPP:

```env
VITE_PACEPAL_API_BASE_URL=http://localhost/pacepalAgile/src/api/index.php/api
VITE_PACEPAL_ENABLE_STATIC_FALLBACK=false
```

### 6. Ejecutar y compilar la aplicación

Desarrollo local:

```bash
npm run dev
```

Build de producción:

```bash
npm run build
```

El build generado queda en:

```text
dist/
```

### 7. URLs útiles para la revisión

Frontend con Vite:

```text
http://localhost:5173/
http://localhost:5173/#inicio
http://localhost:5173/#actividades
http://localhost:5173/#crear-actividad
http://localhost:5173/#tienda
http://localhost:5173/#producto-1
http://localhost:5173/#carrito
http://localhost:5173/#about
http://localhost:5173/#contacto
```

API PHP en local:

```text
http://localhost/pacepalAgile/src/api/index.php/api/productos
http://localhost/pacepalAgile/src/api/index.php/api/rutas
http://localhost/pacepalAgile/src/api/index.php/api/actividades
```

## Modo local, fallback estático y localStorage

PacePal puede funcionar en dos contextos distintos:

- Revisión completa en local con XAMPP, PHP y MySQL reales.
- Demo estática en GitHub Pages o en un host sin PHP.

Para evaluación funcional completa se recomienda mantener:

```env
VITE_PACEPAL_ENABLE_STATIC_FALLBACK=false
```

Cuando el fallback estático se habilita explícitamente, la aplicación puede conservar datos de demostración en el navegador:

- Sesión demo en `localStorage` y `sessionStorage`.
- Usuarios demo persistidos en `localStorage`.
- Carrito demo persistido en `localStorage`.
- Cookie auxiliar de sesión demo para simular continuidad de uso.

Esto permite que la demo estática siga siendo navegable sin una API PHP activa, pero la revisión docente más completa debe hacerse contra XAMPP y la base de datos real.

## Árbol principal del proyecto

La estructura actual del repositorio está organizada así:

```text
pacepal/
├── .github/
│   └── workflows/
│       └── deploy-react-pages.yml
├── assets/
├── audio/
├── css/
│   ├── actividades/
│   ├── admin/
│   ├── comun/
│   ├── formulario/
│   ├── landing/
│   ├── rutas/
│   ├── sobrenosotros/
│   ├── tienda/
│   └── usuario/
├── db/
│   ├── pacepal.sql
│   ├── schema.sql
│   └── seed.sql
├── docs/
│   ├── 00-material/
│   ├── 01-bitacora/
│   ├── 09-entrega-final/
│   ├── _archivo-historico-no-entregable/
│   └── evidencias/
├── img/
│   ├── about/
│   ├── audio/
│   ├── landing/
│   ├── logo/
│   ├── productos/
│   └── rutas/
├── js/
│   ├── actividades/
│   ├── admin/
│   ├── components/
│   ├── data/
│   ├── formulario/
│   ├── hooks/
│   ├── landing/
│   ├── rutas/
│   ├── services/
│   ├── tienda/
│   ├── usuario/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── pages/
│   ├── about/
│   ├── actividades/
│   ├── admin/
│   ├── formulario/
│   ├── landing/
│   ├── legal/
│   ├── rutas/
│   ├── tienda/
│   └── usuario/
├── scripts/
│   ├── github/
│   ├── build-root.mjs
│   └── write-vite-index.mjs
├── src/
│   ├── api/
│   ├── config/
│   ├── controllers/
│   └── models/
├── tests/
│   ├── funcionales/
│   ├── postman/
│   ├── react-sprint-3/
│   └── selenium/
├── .env.local.example
├── .htaccess
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

## Pruebas, evidencias y entregables

- Casos funcionales manuales: [tests/funcionales](tests/funcionales)
- Colección Postman: [tests/postman](tests/postman)
- Validaciones del cliente React: [tests/react-sprint-3](tests/react-sprint-3)
- Automatización Selenium: [tests/selenium](tests/selenium)
- Evidencias de despliegue: [docs/evidencias/despliegue](docs/evidencias/despliegue)

## Equipo

Proyecto desarrollado por Pablo Sevillano y Alejandro Pacheco dentro del Proyecto Agile Intermodular del ciclo DAW.
