---

# Diseño de la aplicación (Sprint 2)

## Decisiones de diseño

Hemos apostado por un diseño bastante limpio y fácil de entender. La idea es que cualquier persona que entre sepa en dos clics cómo apuntarse a una actividad o ver las rutas. No hemos querido meter mil colores ni efectos raros porque al final lo que importa es que funcione y no maree.

Para los colores, tiramos de tonos verdes porque nos recuerdan a naturaleza y deporte. El fondo es claro porque así todo se lee mejor y no cansa la vista. Los botones y los avisos sí que los hemos puesto más llamativos para que se vean rápido.

La estructura de la web es la típica: cabecera arriba con el logo y el menú, contenido en el centro y el footer con lo legal y las redes. No nos hemos complicado porque así es más fácil de mantener y todo el mundo lo entiende.

## Justificación de la interfaz

Nos hemos fijado en webs de deporte tipo Strava o Runnea para ver qué funciona y qué no. Al final, lo que más nos ha convencido es tener las actividades y las rutas bien separadas, y que el usuario pueda filtrar por nivel y ritmo sin perderse.

El registro y el login los hemos puesto en formularios sencillos, sin pasos intermedios ni historias. Si te equivocas en un campo, te lo marca al momento y te dice qué tienes que corregir. Esto lo hemos hecho con validaciones en JS y clases para los errores, como en el resto del proyecto.

En móvil, la web se adapta bien porque usamos Bootstrap y media queries. El menú se pliega y los botones se agrandan para que no haya que hacer zoom ni nada raro.

## Cosas que hemos cambiado sobre la marcha

Al principio queríamos meter un fondo con una foto de montaña, pero quedaba muy recargado y no se leía bien el texto. Al final lo hemos dejado en blanco y solo hemos puesto una imagen en la landing.

También probamos a poner los filtros de actividades en un lateral, pero en móvil era un lío, así que los pasamos arriba en horizontal.

## Accesibilidad

No nos hemos olvidado de la accesibilidad. Los colores tienen contraste suficiente (lo hemos mirado con una extensión de Chrome) y los botones se pueden usar con teclado. Los formularios tienen etiquetas claras y los mensajes de error se leen bien.

## Resumen

En resumen, hemos tirado por lo sencillo y funcional. Todo lo que hemos hecho es porque nos parece que así la web se entiende mejor y cualquiera puede usarla sin perderse.

# Arquitectura de la aplicación

PacePal se diseña como una aplicación web modular orientada a separar claramente la experiencia pública, la operativa principal (actividades y rutas), la gestión de usuario y la administración. A nivel funcional, el sistema parte de un principio central: **las rutas son un catálogo gestionado en base de datos** y, por tanto, **los usuarios no crean rutas**, sino que **crean actividades asociadas a rutas existentes**.

Esta decisión arquitectónica mejora la consistencia del dato geográfico, evita duplicidades y simplifica la validación de negocio. Sobre esa base, el núcleo de la aplicación se centra en la entidad **actividad**, que representa un evento deportivo organizado por un usuario sobre una ruta existente.

Cada actividad hereda la información técnica de la ruta (distancia, ubicación o dificultad) y añade parámetros operativos definidos por el creador, como fecha, hora, nivel, ritmo y número de plazas disponibles.

## Páginas principales

- `landing`
- `register`
- `login`
- `actividades`
- `actividad-detalle`
- `crear-actividad`
- `rutas`
- `ruta-detalle`
- `tienda`
- `carrito`
- `perfil`
- `mis-actividades`
- `panel-admin`
- `admin-usuarios`
- `admin-rutas`
- `admin-productos`
- `admin-reportes`
- `about`
- `cookies` (política de cookies)

## Agrupación funcional de páginas

### Páginas públicas

Incluyen `landing`, `register`, `login`, `about` y `cookies`. Este bloque cubre la captación de usuarios, el acceso al sistema, la presentación institucional del proyecto y la información legal sobre el uso de cookies. Su objetivo es ofrecer una entrada clara al producto y habilitar la autenticación previa al uso de funcionalidades privadas.

### Gestión de actividades

Incluye `actividades`, `actividad-detalle` y `crear-actividad`. Constituye el núcleo funcional de PacePal: listar actividades disponibles, consultar su información detallada, participar en ellas y crear nuevas actividades sobre rutas ya existentes. En este módulo se aplican los parámetros de negocio clave (fecha, hora, nivel, ritmo y plazas).

`Esta página fue la más complicada de crear ya que tenemos que estar pendientes de todos los campos y verificar que estan bien a la hora de crear la actividad`

### Catálogo de rutas

Incluye `rutas` y `ruta-detalle`. Este módulo expone el repositorio de rutas mantenido por el sistema. Los usuarios pueden explorar y consultar rutas, pero no crearlas, garantizando así control de calidad y coherencia del catálogo.

### Tienda

Incluye `tienda` y `carrito`. Proporciona la capa de comercio electrónico del proyecto para visualizar productos y gestionar la selección previa a compra. Se integra como módulo complementario a la experiencia deportiva.

### Gestión de usuario

Incluye `perfil` y `mis-actividades`. Permite al usuario consultar y administrar su información personal y hacer seguimiento de su participación en actividades creadas o reservadas.

### Administración

Incluye `panel-admin`, `admin-usuarios`, `admin-rutas`, `admin-productos` y `admin-reportes`. Este bloque concentra las funciones de supervisión y mantenimiento del sistema: gestión de cuentas, control del catálogo de rutas, administración de productos y visualización de reportes para soporte operativo y toma de decisiones.

## Perfiles de usuario

La arquitectura funcional de PacePal define tres perfiles de acceso para separar responsabilidades y controlar las operaciones disponibles en cada contexto. Esta segmentación permite proteger acciones críticas del sistema y mantener una experiencia adaptada al nivel de permisos de cada usuario.

### Invitado (usuario anónimo)

El perfil invitado corresponde a usuarios no autenticados. Puede acceder a los contenidos públicos de la plataforma y consultar información general, pero no ejecutar acciones que impliquen participación activa o transacciones.

Puede:

- ver la `landing`
- explorar `actividades`
- ver el catálogo de `rutas`
- ver la `tienda`
- acceder a `about`

No puede:

- crear actividades
- unirse a actividades
- comprar productos

### Usuario registrado

El perfil de usuario registrado dispone de acceso autenticado a las funcionalidades operativas de PacePal, especialmente las relacionadas con la creación y participación en actividades deportivas sobre rutas existentes.

Puede:

- iniciar sesión
- crear actividades sobre rutas existentes
- unirse a actividades
- abandonar actividades
- ver sus actividades creadas y sus participaciones
- comprar en la tienda
- gestionar su perfil

### Administrador

El perfil administrador concentra las capacidades de supervisión y mantenimiento del sistema. Está orientado a la gestión global de los recursos y a la resolución de incidencias operativas.

Puede:

- acceder al panel de administración
- gestionar usuarios
- gestionar rutas
- gestionar productos de la tienda
- gestionar reportes o incidencias

## Descripción de las páginas principales

### `landing`

Página principal de entrada al sistema. Presenta la propuesta de valor de PacePal y ofrece llamadas a la acción para explorar actividades o registrarse en la plataforma.

### `actividades`

Vista de listado de actividades activas creadas por usuarios. Incorpora filtros y un buscador dinámico basado en AJAX para localizar actividades según criterios como fecha, nivel, ritmo o disponibilidad.

### `actividad-detalle`

Página de detalle de una actividad concreta. Muestra la información completa de la actividad, incluyendo los datos de la ruta asociada (distancia, dificultad o zona) y los parámetros definidos por su creador, como fecha, ritmo, nivel y número de plazas disponibles.

### `crear-actividad`

Formulario disponible para usuarios registrados que permite crear una nueva actividad vinculada a una ruta existente del catálogo.

### `rutas`

Página de catálogo de rutas disponibles en base de datos. Permite consultar y explorar las opciones de recorrido sobre las que se pueden organizar actividades.

### `ruta-detalle`

Vista técnica de una ruta específica, con datos como distancia, ubicación, dificultad y otros atributos relevantes para la planificación de actividades.

### `tienda`

Página de visualización del catálogo de productos sostenibles disponibles para compra dentro del ecosistema PacePal.

### `perfil`

Sección personal del usuario autenticado para consultar y actualizar su información, además de gestionar aspectos básicos de su cuenta.

### `panel-admin`

Panel exclusivo para administradores desde el que se centraliza la gestión de usuarios, rutas, productos y reportes/incidencias del sistema, permitiendo mantener el control operativo de la plataforma.

### `about`

Página informativa que describe el proyecto PacePal, su propósito y los objetivos funcionales y académicos del desarrollo.

## Mapa de navegación de la aplicación

La siguiente estructura representa la organización general de navegación de la aplicación PacePal. El mapa muestra las principales rutas de acceso entre las páginas del sistema y permite visualizar la jerarquía funcional de la plataforma.

```text
landing
 ├── actividades
 │    ├── actividad-detalle
 │    └── crear-actividad
 │
 ├── rutas
 │    └── ruta-detalle
 │
 ├── tienda
 │    └── carrito
 │
 ├── perfil
 │    └── mis-actividades
 │
 └── panel-admin
	├── admin-usuarios
	├── admin-rutas
	├── admin-productos
	└── admin-reportes
```

Esta estructura refleja la separación entre contenidos públicos, funcionalidades de usuario registrado y herramientas de administración, facilitando una navegación clara y coherente dentro de la aplicación.

## Prototipos de interfaz

Para el diseño inicial de la aplicación PacePal se han elaborado wireframes de las páginas principales del sistema.

Estos prototipos representan la estructura visual y la distribución de los elementos de interfaz antes de la implementación final.

Cada página incluye dos versiones:

- versión desktop
- versión mobile

Las páginas prototipadas corresponden a los módulos principales definidos en la arquitectura de la aplicación.

Las pantallas secundarias (detalle de actividad, detalle de ruta, carrito, mis actividades o gestión específica de administración) se desarrollarán y documentarán en el Sprint 3 del proyecto.
