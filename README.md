<p align="center">
  <img src="img/logo/logo.png" alt="PacePal Logo" width="118">
</p>

<h1 align="center">PacePal — Plataforma web deportiva para rutas, actividades y comunidad</h1>

<p align="center">
  Aplicación web orientada a la actividad física, la organización de rutas deportivas, la participación en actividades en grupo y la consulta de productos relacionados con el deporte y el bienestar.
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

---

## Visión general

PacePal es una plataforma web pensada para facilitar la conexión entre personas mediante actividades deportivas, rutas al aire libre y una experiencia digital sencilla, accesible y organizada.

El proyecto integra un cliente desarrollado con React y Vite, una API REST en PHP y una base de datos MySQL/MariaDB. La aplicación permite consultar rutas, crear y visualizar actividades, gestionar productos, utilizar carrito, registrar usuarios, iniciar sesión y acceder a secciones privadas según el contexto de uso.

El objetivo principal de PacePal es ofrecer un entorno claro y funcional donde cualquier persona pueda descubrir rutas, participar en actividades deportivas y consultar productos relacionados con una vida activa.

---

## Funcionalidades principales

PacePal incluye las siguientes áreas funcionales:

- Página principal con presentación del proyecto.
- Navegación por secciones mediante interfaz responsive.
- Listado y detalle de rutas deportivas.
- Listado y detalle de actividades.
- Creación de actividades asociadas a rutas.
- Catálogo de productos deportivos.
- Detalle de producto con información ampliada.
- Carrito de compra con gestión básica de productos.
- Registro e inicio de sesión de usuarios.
- Perfil de usuario.
- Secciones de administración y reportes.
- Integración con API PHP y base de datos MySQL/MariaDB.
- Demo estática desplegable en GitHub Pages mediante build de React y fallback controlado.

---

## Demo y referencias

- Demo estática en GitHub Pages: https://pacepal.github.io/pacepalAgile/
- Rama activa del proyecto: `sprint3Definitivo`
- Documentación del proyecto: [docs](docs)
- Entrega final y materiales del proyecto: [docs/09-entrega-final](docs/09-entrega-final)
- Evidencias técnicas: [docs/evidencias](docs/evidencias)

---

## Tecnologías utilizadas

### Frontend

- React 18.
- Vite 5.
- JavaScript con ES Modules.
- JSX para la construcción de componentes.
- CSS modular organizado por secciones.
- Navegación basada en rutas hash para facilitar compatibilidad con GitHub Pages.

### Backend

- PHP.
- API REST.
- Organización mediante controladores, modelos y configuración.
- Conexión a base de datos mediante configuración local.
- Respuestas en formato JSON para consumo desde el cliente.

### Base de datos

- MySQL/MariaDB.
- Scripts SQL incluidos en el repositorio.
- Datos estructurados para usuarios, rutas, actividades, productos y operaciones relacionadas.

### Herramientas y entorno

- XAMPP para ejecución local.
- Git y GitHub para control de versiones.
- GitHub Pages para demo estática.
- Postman para pruebas de endpoints.
- Selenium y pruebas funcionales para validaciones adicionales.

---

## Arquitectura general

El proyecto está organizado en tres bloques principales:

```text
Cliente React + Vite
        |
        | Fetch / JSON
        v
API REST en PHP
        |
        | Consultas y operaciones
        v
Base de datos MySQL/MariaDB
```

La aplicación puede ejecutarse de dos formas:

- Modo completo local, usando XAMPP, PHP y MySQL/MariaDB.
- Modo demo estático, usando GitHub Pages y fallback de datos controlado.

El modo completo permite trabajar con la API y la base de datos real.
El modo demo permite navegar por la aplicación cuando no existe un backend PHP activo.

---

## Estructura de ramas

La rama activa de trabajo, revisión y mantenimiento actual del proyecto es `sprint3Definitivo`.

Las ramas `main` y `PacepalGithubPages` se conservan como histórico técnico de fases anteriores y no se utilizan como base de trabajo actual.

| Rama                 | Estado actual                     | Propósito                                                                                           | Uso recomendado                                                    |
| -------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `sprint3Definitivo`  | Rama principal actual             | Integración final del Sprint 3, documentación de cierre, build React y versión actual del proyecto. | Rama de referencia para revisión, mantenimiento y cambios finales. |
| `main`               | Rama histórica / legacy           | Conserva una línea anterior del proyecto antes de la consolidación final del Sprint 3.              | No usar para nuevas subidas ni como base de trabajo actual.        |
| `PacepalGithubPages` | Rama histórica de despliegue/demo | Conserva ajustes antiguos relacionados con una versión previa de la demo estática en GitHub Pages.  | No usar como rama de trabajo actual.                               |

Pueden existir otras ramas históricas utilizadas durante el desarrollo, la migración a React o pruebas intermedias. La referencia vigente del proyecto es `sprint3Definitivo`.

---

## Resumen de evolución del proyecto

| Fase     | Resumen                                                                                                                                                                |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sprint 0 | Organización inicial del proyecto, definición de alcance, backlog, reparto de tareas y estructura base de trabajo.                                                     |
| Sprint 1 | Diseño visual, identidad de marca, landing principal, formularios, navegación inicial y primeras validaciones de interfaz.                                             |
| Sprint 2 | Desarrollo del backend PHP con MySQL, endpoints REST, páginas secundarias, carrito, buscador, rutas, actividades y pruebas funcionales.                                |
| Sprint 3 | Integración del cliente React, reorganización de componentes, fallback estático, mejoras de accesibilidad, validaciones finales, despliegue y documentación de cierre. |

---

## Documentación del proyecto

La documentación está organizada dentro de la carpeta `docs`:

- Material base: [docs/00-material](docs/00-material)
- Bitácora y seguimiento: [docs/01-bitacora](docs/01-bitacora)
- Entrega final y materiales principales: [docs/09-entrega-final](docs/09-entrega-final)
- Evidencias técnicas: [docs/evidencias](docs/evidencias)
- Archivo histórico no entregable: [docs/\_archivo-historico-no-entregable](docs/_archivo-historico-no-entregable)

---

## Instalación local

La forma recomendada de ejecutar PacePal en local es mediante XAMPP, usando Apache, MySQL/MariaDB, PHP y el cliente React con Vite.

### 1. Clonar el repositorio

Se recomienda clonar el proyecto dentro de `htdocs` para que Apache pueda resolver correctamente la API PHP.

```bash
cd "C:\xampp\htdocs"
git clone "https://github.com/Pacepal/pacepalAgile.git" "pacepalAgile"
cd "pacepalAgile"
git checkout sprint3Definitivo
```

Ruta recomendada:

```text
C:\xampp\htdocs\pacepalAgile
```

Si se usa otra carpeta dentro de `htdocs`, habrá que adaptar la URL de la API en el archivo `.env.local`.

### 2. Arrancar XAMPP

Desde XAMPP Control Panel:

- Iniciar Apache.
- Iniciar MySQL.

### 3. Crear e importar la base de datos

Abrir phpMyAdmin:

```text
http://localhost/phpmyadmin
```

Crear o seleccionar la base de datos `pacepal` e importar el archivo principal:

- [db/pacepal.sql](db/pacepal.sql)

También existen los siguientes archivos SQL complementarios:

- [db/schema.sql](db/schema.sql)
- [db/seed.sql](db/seed.sql)

La opción más directa para una instalación completa es importar `db/pacepal.sql`.

### 4. Configurar PHP

La configuración por defecto espera los siguientes valores:

- Host: `127.0.0.1`
- Base de datos: `pacepal`
- Usuario: `root`
- Password: vacío
- Puertos probados: `3306`, `3307`, `3308`

Si el entorno local utiliza otra configuración, se puede crear un archivo local a partir del ejemplo:

```powershell
Copy-Item "src\config\config.example.php" "src\config\config.local.php"
```

Después se deben ajustar las credenciales necesarias dentro del archivo local.

### 5. Instalar dependencias del cliente

Desde la raíz del proyecto:

```bash
npm install
```

Crear el archivo de entorno local:

```powershell
Copy-Item ".env.local.example" ".env.local"
```

Contenido recomendado para `.env.local` usando XAMPP:

```env
VITE_PACEPAL_API_BASE_URL=http://localhost/pacepalAgile/src/api/index.php/api
VITE_PACEPAL_ENABLE_STATIC_FALLBACK=false
```

Si el proyecto se clona en una carpeta distinta a `pacepalAgile`, hay que actualizar la ruta de `VITE_PACEPAL_API_BASE_URL`.

### 6. Ejecutar la aplicación

Modo desarrollo:

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

---

## Árbol principal del proyecto

```text
pacepal/
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
├── .github/
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
│   └── utils/
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
│   └── github/
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
└── dist/
```

---

## Pruebas y evidencias

El repositorio incluye diferentes recursos para comprobar el funcionamiento del proyecto:

- Casos funcionales manuales: [tests/funcionales](tests/funcionales)
- Colección Postman: [tests/postman](tests/postman)
- Validaciones del cliente React: [tests/react-sprint-3](tests/react-sprint-3)
- Automatización Selenium: [tests/selenium](tests/selenium)
- Evidencias de despliegue: [docs/evidencias/despliegue](docs/evidencias/despliegue)

---

## Consideraciones de uso

- Para una experiencia completa, se recomienda ejecutar el proyecto en local con XAMPP, PHP y MySQL/MariaDB.
- Para navegación rápida, se puede utilizar la demo estática publicada en GitHub Pages.
- La demo estática no depende de PHP ni MySQL activos.
- El modo completo local permite trabajar con datos reales y endpoints PHP.
- La rama de referencia del proyecto es `sprint3Definitivo`.

---

## Equipo

Proyecto desarrollado por:

- Pablo Sevillano
- Alejandro Pacheco

---

## Licencia y uso

Este repositorio forma parte de un proyecto académico y técnico de desarrollo web.
Su contenido se conserva como evidencia de desarrollo, documentación, pruebas, despliegue y evolución funcional del proyecto PacePal.
