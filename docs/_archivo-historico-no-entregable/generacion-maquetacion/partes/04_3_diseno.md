## 4.3. Diseño

### A) Enfoque del diseño de interfaces

El diseño de PacePal parte de un objetivo funcional claro: construir una interfaz que permita al usuario descubrir rutas disponibles, crear o unirse a actividades deportivas y gestionar una compra básica en la tienda. No se trata de una web decorativa, sino de un producto usable con secciones bien diferenciadas y un flujo de navegación coherente.

Cada sección tiene un propósito propio: la landing presenta la propuesta de valor, el módulo de actividades es el núcleo del producto, la tienda añade una capa comercial y el perfil da control al usuario sobre su cuenta. El panel de administración cierra el producto con la gestión del contenido.

La guía de estilos completa —paleta, tipografía, iconografía y normas visuales— se desarrolla de forma autocontenida en el Anexo 9.5. En este apartado se documenta el diseño desde el punto de vista funcional y de navegación.

---

### B) Flujo principal de navegación

El flujo principal de la aplicación sigue esta secuencia:

1. **Inicio / landing** — el visitante entra y ve la propuesta de valor, los accesos principales y el contenido destacado.
2. **Consulta de rutas o actividades** — puede navegar por las rutas disponibles o por el listado de actividades sin necesidad de registro.
3. **Detalle de ruta o actividad** — accede a la información completa de un elemento concreto.
4. **Registro o login** — si quiere participar activamente, se registra o inicia sesión desde el formulario correspondiente.
5. **Creación o unión a una actividad** — el usuario autenticado puede crear una actividad sobre una ruta existente o unirse a una ya publicada.
6. **Tienda, detalle de producto y carrito** — puede explorar el catálogo, buscar productos, ver el detalle y gestionar el carrito hasta generar un pedido.
7. **Perfil de usuario** — consulta sus datos personales y el historial de pedidos.
8. **Panel de administración** — disponible solo para el rol administrador; permite gestionar todos los recursos del sistema.

---

### C) Bocetos principales incluidos en el cuerpo de la memoria

A continuación se insertan los wireframes más representativos del proyecto. El conjunto completo de bocetos en formato desktop y mobile se recoge en el Anexo 9.4 — Bocetos y wireframes completos.

> **[INSERTAR FIGURA C5 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/wireframes/wireframe-landing-desktop.png`
> _Figura C5. Wireframe de la landing en escritorio — Pantalla inicial de PacePal._

> **[INSERTAR FIGURA C6 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/wireframes/wireframe-landing-mobile.png`
> _Figura C6. Wireframe de la landing en móvil — Adaptación responsive de la pantalla inicial._

> **[INSERTAR FIGURA C7 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/wireframes/wireframe-actividades-desktop.png`
> _Figura C7. Wireframe del listado de actividades — Consulta de actividades disponibles._

> **[INSERTAR FIGURA C8 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/wireframes/wireframe-actividad-detalle-desktop.png`
> _Figura C8. Wireframe del detalle de actividad — Información y acciones principales de una actividad._

> **[INSERTAR FIGURA C9 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/wireframes/wireframe-tienda-desktop.png`
> _Figura C9. Wireframe de la tienda — Catálogo, búsqueda y acceso al detalle de productos._

> **[INSERTAR FIGURA C10 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/wireframes/wireframe-producto-desktop.png`
> _Figura C10. Wireframe del detalle de producto — Información del producto y acción de añadir al carrito._

---

### D) Pantallas principales y funcionamiento

| Pantalla             | Objetivo                                                                          | Funcionamiento                                                                                                       |
| -------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Inicio (landing)     | Presentar la propuesta de valor y facilitar el acceso a las secciones principales | El usuario visualiza los argumentos del producto, las llamadas a la acción y el acceso a registro o login            |
| Actividades          | Consultar las actividades disponibles en el sistema                               | Listado con tarjetas que muestran ruta, fecha, nivel, ritmo y plazas; acceso al detalle desde cada tarjeta           |
| Detalle de actividad | Ver la información completa de una actividad y actuar sobre ella                  | Según el estado de sesión y el rol, el usuario puede unirse, abandonar o eliminar la actividad                       |
| Rutas                | Consultar las rutas disponibles en el sistema                                     | Listado de rutas con información básica; acceso al detalle desde cada tarjeta                                        |
| Detalle de ruta      | Mostrar descripción, dificultad y distancia de una ruta                           | Resume la ruta y permite al usuario autenticado crear una actividad sobre ella                                       |
| Tienda               | Explorar el catálogo de productos y buscar por texto                              | Campo de búsqueda sin recarga, vídeo integrado y acceso al detalle de cada producto                                  |
| Detalle de producto  | Ver la galería, descripción y precio de un artículo                               | El usuario selecciona la cantidad y añade el producto al carrito                                                     |
| Carrito              | Revisar los artículos seleccionados y generar el pedido                           | Actualiza cantidades, calcula el total y permite confirmar la compra                                                 |
| Perfil               | Consultar y gestionar los datos de la cuenta y el historial de pedidos            | Muestra los datos del usuario registrado y los pedidos asociados a su cuenta                                         |
| Administración       | Gestionar todos los recursos del sistema desde un panel centralizado              | Panel protegido por rol administrador; permite gestionar usuarios, productos, rutas, actividades, pedidos y reportes |

---

### E) Bocetos completos en anexos

En el cuerpo principal de la memoria solo se insertan los wireframes más representativos para no sobrecargar el documento. El conjunto completo de bocetos en formato desktop y mobile —incluyendo pantallas de registro, login, perfil, carrito, administración y páginas legales— se recoge de forma ordenada en el Anexo 9.4 — Bocetos y wireframes completos.
