# Anexo 9.1 — Manual de usuario

Este anexo describe cómo utilizar PacePal según el rol del usuario y el entorno de ejecución
(local con XAMPP o publicado en GitHub Pages).

---

## Uso como visitante

1. Abrir la aplicación desde la URL local (`http://localhost/pacepal`) o desde la URL
   publicada en GitHub Pages.
2. Consultar la portada para entender qué es PacePal y qué ofrece.
3. Navegar por el menú principal hacia **Actividades**, **Rutas** o **Tienda**.
4. Abrir el detalle de una actividad, ruta o producto para ver toda la información disponible.
5. Si se quiere participar o comprar, ir al formulario de registro.

---

## Uso como usuario registrado

1. Acceder al formulario de **Registro** desde la cabecera o la landing.
2. Rellenar nombre, email, contraseña (con confirmación) y DNI. Los campos adicionales son
   opcionales.
3. Iniciar sesión con email y contraseña.
4. Consultar el **Perfil** personal desde la cabecera o el menú de usuario para ver los datos
   y el historial de pedidos.
5. Entrar en **Actividades** y hacer clic en una para ver su detalle. Pulsar **Unirse** si hay
   plazas disponibles.
6. Pulsar **Crear actividad** en la página de detalle de una ruta para organizar una nueva
   salida sobre esa ruta.
7. Navegar a **Tienda**, usar el buscador para encontrar un producto, entrar en su detalle y
   pulsar **Añadir al carrito**.
8. Acceder al **Carrito** para revisar la selección, ajustar cantidades y pulsar
   **Finalizar pedido**.
9. Pulsar **Cerrar sesión** en el menú de usuario cuando se termine la interacción.

---

## Uso como administrador

1. Iniciar sesión con una cuenta con rol `admin`.
2. Acceder al **Panel de administración** desde el menú de usuario.
3. Revisar los bloques disponibles: **Usuarios**, **Productos**, **Rutas**, **Actividades**,
   **Pedidos** y **Reportes**.
4. Crear, editar o eliminar recursos según el flujo soportado por la API y el panel.

> El acceso al panel de administración está protegido por rol. Si se intenta acceder sin
> credenciales de administrador, el sistema bloquea la entrada y muestra un mensaje
> de error controlado.

---

## Ejecución local con XAMPP

Para ejecutar PacePal con todas las funcionalidades activas:

1. Instalar XAMPP e iniciar los servicios Apache y MySQL desde el panel de control.
2. Copiar el proyecto en la carpeta `htdocs` de XAMPP.
3. Importar el esquema de la base de datos desde phpMyAdmin usando `db/schema.sql` y
   `db/pacepal.sql`.
4. Acceder a `http://localhost/pacepal` en el navegador.
5. Para el cliente React, instalar las dependencias con `npm install` y arrancar con
   `npm run dev`. El cliente se sirve en el puerto que Vite indique (normalmente 5173).
6. La guía de instalación completa se encuentra en el documento interno
   `docs/despliegue/INSTALACION_LOCAL_XAMPP.md`.

---

## Uso del cliente publicado en GitHub Pages

En la versión publicada en GitHub Pages, el cliente funciona en **modo demo**:

- La autenticación simula respuestas sin conectar a la API real.
- El carrito funciona con datos de ejemplo.
- Las cookies se gestionan con persistencia en `localStorage`.
- Las secciones de rutas, actividades y tienda cargan datos del fallback demo.

Para probar todas las funcionalidades con datos reales es necesario ejecutar el proyecto
en local con XAMPP siguiendo la guía mencionada.

---

## Limitaciones conocidas

| Situación                        | Comportamiento                                                                                | Solución                                                   |
| -------------------------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| API no disponible (GitHub Pages) | El cliente usa fallback demo con datos estáticos                                              | Ejecutar en local con XAMPP                                |
| Sin audio integrado en contacto  | Los archivos de audio existen pero la integración final no está cerrada en la rama de entrega | Pendiente como mejora futura                               |
| Filtros avanzados de actividades | Algunos filtros del backlog original no se implementaron completamente                        | Funcionalidad básica disponible; mejora futura documentada |
| Pruebas Postman                  | Requieren entorno local activo con la API corriendo                                           | Seguir la guía de instalación local                        |
