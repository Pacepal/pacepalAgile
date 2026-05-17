## 4.2. Análisis

### A) Planteamiento de la solución

La solución planteada en PacePal responde a un problema concreto: la diferencia entre consultar información sobre rutas deportivas y coordinar realmente una actividad con otras personas. Para cubrir ese hueco, el proyecto separa dos conceptos que en otras plataformas suelen mezclarse: la ruta como recurso fijo del sistema, y la actividad como quedada concreta creada por un usuario sobre esa ruta.

Esa decisión de diseño condiciona el modelo de datos, las pantallas, los permisos y la propuesta de valor del producto. Una ruta no se crea desde el cliente; está disponible en el sistema para que cualquier usuario la use como base de una actividad. Una actividad, en cambio, tiene fecha, hora, nivel, ritmo, plazas y un usuario responsable. Ese planteamiento permite que el producto sea coordinación real, no solo un listado de recorridos.

La solución se completa con una tienda de productos relacionados con el deporte sostenible, que añade una capa comercial básica y permite cubrir los requisitos de carrito, pedidos y catálogo dinámico exigidos por el módulo DWEC y DWES.

---

### B) Público objetivo

El producto está orientado a personas que practican actividades físicas de forma ocasional o regular, que buscan motivación grupal, que no necesitan las funcionalidades de plataformas de alto rendimiento y que pueden estar interesadas en equipamiento deportivo con criterios de sostenibilidad.

Dentro de la aplicación se distinguen tres perfiles de uso:

- **Invitado:** puede navegar por el contenido público, consultar rutas, actividades y productos, y acceder a los formularios de registro y login.
- **Usuario registrado:** puede crear actividades, unirse o abandonar actividades existentes, gestionar el carrito, generar pedidos y consultar su perfil.
- **Administrador:** dispone de un panel protegido desde el que gestiona usuarios, productos, rutas, actividades, pedidos y reportes.

---

### C) Flujo general de la aplicación

El flujo principal de la aplicación sigue estos pasos:

1. El visitante entra en la landing y navega por el contenido público sin necesidad de registro.
2. Si quiere participar activamente, se registra o inicia sesión.
3. Puede consultar el catálogo de rutas disponibles y ver sus características.
4. Puede crear una actividad sobre una ruta existente o unirse a actividades ya publicadas por otros usuarios.
5. Puede explorar la tienda, buscar productos, añadir artículos al carrito y generar un pedido.
6. El administrador accede a su panel desde el mismo cliente React y gestiona el contenido desde ahí.

Todas las acciones que modifican datos pasan por la API REST del backend PHP. El cliente React no accede directamente a la base de datos en ningún caso.

---

### D) Separación entre frontend, backend y base de datos

La arquitectura del proyecto sigue una separación clara en tres capas:

**Frontend — React con Vite**

El cliente está construido en React 18 con Vite como entorno de desarrollo y build. Se organiza en páginas, componentes, hooks y servicios. Cada página carga sus datos desde la API mediante fetch asíncrono. El estado de sesión se gestiona mediante un contexto global de autenticación. La interfaz no depende del servidor para renderizarse: puede ejecutarse como aplicación estática.

**Backend — PHP con PDO**

El backend expone una API REST en PHP. Todas las respuestas son JSON. El acceso a la base de datos se realiza exclusivamente mediante PDO con sentencias preparadas, lo que garantiza la seguridad básica contra inyección SQL. La estructura del backend separa el router, los controladores, los modelos y la configuración de base de datos.

**Base de datos — MySQL/MariaDB**

El modelo de datos relacional cubre las entidades principales: usuarios, rutas, actividades, participaciones, categorías, artículos, pedidos, detalle de pedido y reportes. La gestión local se realiza con XAMPP y phpMyAdmin.

> **[INSERTAR FIGURA B1 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/figuras/Diagrama de componentes.png`
> _Figura B1. Diagrama de componentes — Estructura del cliente React y su relación con la API._

> **[INSERTAR FIGURA B2 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/figuras/Esquema de arquitectura general.png`
> _Figura B2. Esquema de arquitectura general — Frontend, API REST, backend PHP y base de datos._

---

### E) Decisiones técnicas principales

**Migración a React en Sprint 3**

La migración del cliente a React se justifica por la necesidad de demostrar competencia avanzada en DWEC: gestión de estado con hooks, composición de componentes, servicios asíncronos y navegación tipo SPA. Técnicamente, mejora la experiencia de usuario al evitar recargas completas de página y facilita la modularidad y el mantenimiento del cliente.

**Mantenimiento del backend PHP + PDO**

Se decidió conservar el backend PHP porque ya cubría los requisitos de DWES con una implementación funcional y probada a lo largo del Sprint 2. Sustituirlo habría supuesto duplicar trabajo sin beneficio evaluable. El mantenimiento de la misma API también garantiza que el cliente React funcione con el mismo backend que se había testado con Postman.

**Fallback demo para GitHub Pages**

GitHub Pages no puede ejecutar PHP ni servir MySQL. El cliente React publicado necesita un modo de demostración que ofrezca respuestas controladas cuando la API no está disponible. Esta solución no pretende sustituir al backend real: es una capa de demostración que permite mostrar el cliente en un hosting estático sin ocultar la limitación. En defensa técnica se puede distinguir claramente qué funciona en local con XAMPP y qué funciona en publicación estática.

---

### F) Coherencia entre requisitos, diseño e implementación

Los requisitos funcionales definidos desde el Sprint 0 tienen trazabilidad directa con la implementación de la rama actual, las pruebas funcionales documentadas y las evidencias incluidas en esta memoria. Donde existe alguna divergencia —por ejemplo, ciertos filtros de actividades previstos en el backlog que no se implementaron completamente—, la documentación lo recoge de forma honesta en lugar de presentarlos como funcionalidades cerradas.

La tabla de requerimientos del apartado 4.1 apunta en cada fila al apartado o anexo donde se puede verificar su implementación. Las historias de usuario del Anexo 9.6 mantienen la misma trazabilidad por sprint y materia. Las pruebas del apartado 5 y del Anexo 9.2 completan el cierre de esta coherencia.
