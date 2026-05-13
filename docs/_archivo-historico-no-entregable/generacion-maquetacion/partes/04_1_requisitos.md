# 4. DESARROLLO DE LA PRÁCTICA

## 4.1. Requisitos

Los requisitos de PacePal se han organizado en cuatro bloques: requerimientos funcionales, requerimientos no funcionales, síntesis de historias de usuario y modelado del sistema. Esta estructura permite trazar el trabajo de cada módulo académico desde el análisis inicial hasta las pruebas finales, y sirve de base para los apartados de análisis, diseño y pruebas que se desarrollan en las secciones siguientes.

---

### A) Requerimientos funcionales

| ID    | Requisito funcional                                                                                                          | Validación esperada                                                                  | Relación con la memoria                                           |
| ----- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| RF-01 | El sistema permite navegar por inicio, actividades, rutas, tienda, about, contacto y política de cookies sin iniciar sesión  | Todas las páginas públicas cargan correctamente para cualquier visitante             | Apartado 4.3. Diseño; Anexo 9.1. Manual de usuario                |
| RF-02 | El sistema permite registrar usuarios con nombre, email, contraseña, confirmación y DNI                                      | Formulario completo con validaciones; cuenta creada y persistida                     | Apartado 4.2. Análisis; Anexo 9.2. Pruebas realizadas             |
| RF-03 | El sistema permite iniciar y cerrar sesión manteniendo el estado del usuario                                                 | Login correcto; sesión persistente al recargar; cierre limpia la sesión              | Apartado 4.2. Análisis; Anexo 9.2. Pruebas realizadas             |
| RF-04 | El sistema diferencia invitado, usuario registrado y administrador, y bloquea acciones sensibles según el rol                | Rutas protegidas; endpoints con validación de rol; error controlado si no autorizado | Apartado 4.2. Análisis; Anexo 9.6. Historias de usuario y backlog |
| RF-05 | El usuario puede consultar el listado de actividades y acceder al detalle de cada una                                        | Listado con tarjetas; detalle con fecha, nivel, ritmo y plazas accesible             | Apartado 4.3. Diseño; Anexo 9.2. Pruebas realizadas               |
| RF-06 | El usuario autenticado puede crear una actividad sobre una ruta existente                                                    | Formulario completo; ruta elegible del sistema; actividad visible en el listado      | Apartado 4.2. Análisis; Anexo 9.6. Historias de usuario y backlog |
| RF-07 | El usuario autenticado puede unirse o abandonar una actividad                                                                | Botón de acción visible; plazas actualizadas; confirmación visible                   | Apartado 5. Pruebas; Anexo 9.2. Pruebas realizadas                |
| RF-08 | El sistema muestra el catálogo de rutas y el detalle de cada ruta                                                            | Listado de rutas disponible; detalle completo accesible                              | Apartado 4.3. Diseño; Anexo 9.1. Manual de usuario                |
| RF-09 | El sistema muestra el catálogo de productos, permite búsquedas dinámicas y acceso al detalle                                 | Campo de búsqueda; resultados sin recarga; detalle de producto accesible             | Apartado 4.2. Análisis; Anexo 9.2. Pruebas realizadas             |
| RF-10 | El usuario puede añadir productos al carrito, cambiar cantidades, eliminar artículos y generar un pedido                     | Carrito actualiza cantidades y total en tiempo real; pedido generado correctamente   | Apartado 5. Pruebas; Anexo 9.2. Pruebas realizadas                |
| RF-11 | El usuario autenticado puede consultar su perfil e historial de pedidos                                                      | Datos del usuario visibles; historial de pedidos listado                             | Apartado 4.3. Diseño; Anexo 9.1. Manual de usuario                |
| RF-12 | El administrador puede gestionar usuarios, productos, rutas, actividades, pedidos y reportes                                 | Panel protegido por rol; bloques de gestión funcionales                              | Apartado 4.2. Análisis; Anexo 9.2. Pruebas realizadas             |
| RF-13 | El sistema expone una API REST en PHP con respuestas JSON para todas las entidades principales                               | Endpoints responden correctamente; colección de pruebas validada                     | Apartado 4.2. Análisis; Anexo 9.2. Pruebas realizadas             |
| RF-14 | El sistema persiste usuarios, rutas, actividades, pedidos, artículos, participaciones y reportes en base de datos relacional | Datos visibles en phpMyAdmin; operaciones CRUD completadas                           | Apartado 4.2. Análisis; Figura B3. Modelo relacional simplificado |
| RF-15 | El sistema gestiona el consentimiento de cookies con opciones de aceptar y rechazar                                          | Banner visible; preferencias persistentes; comportamiento documentado                | Apartado 4.3. Diseño; Anexo 9.1. Manual de usuario                |
| RF-16 | El proyecto se ejecuta en local con XAMPP y el cliente React se publica en GitHub Pages con fallback demo                    | Instalación local documentada; demo funcional publicada                              | Apartado 4.4. Implantación; Anexo 9.7. Figuras                    |

---

### B) Requerimientos no funcionales

| ID     | Requerimiento no funcional                                                                 | Justificación                                                                | Relación con la memoria                                                                       |
| ------ | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| RNF-01 | La interfaz es responsive y usable en móvil y escritorio                                   | Requerimiento DIW; wireframes documentados desktop y mobile                  | Apartado 4.3. Diseño; Anexo 9.7. Figuras                                                      |
| RNF-02 | La landing cumple WCAG 2.1 nivel A en el alcance auditado                                  | Auditoría con Lighthouse y WAVE; puntuación 100 en accesibilidad documentada | Apartado 4.3. Diseño; Anexo 9.2. Pruebas realizadas                                           |
| RNF-03 | Los formularios usan etiquetas, mensajes de error y feedback comprensible                  | Accesibilidad y usabilidad; validaciones funcionales documentadas            | Apartado 4.3. Diseño; Apartado 5. Pruebas                                                     |
| RNF-04 | El código cliente está modularizado por páginas, hooks, servicios y componentes            | Mantenibilidad del cliente React; estructura coherente con el proyecto       | Apartado 4.2. Análisis; Figura A3. Diagrama de clases simplificado                            |
| RNF-05 | El backend separa API, controladores, modelos y configuración                              | Separación de responsabilidades; estructura defendible para DWES             | Apartado 4.2. Análisis; Figura A3. Diagrama de clases simplificado                            |
| RNF-06 | Las consultas a base de datos usan PDO y sentencias preparadas                             | Seguridad contra inyección SQL; requerimiento DWES                           | Apartado 4.2. Análisis; Figura B3. Modelo relacional simplificado                             |
| RNF-07 | La aplicación muestra errores controlados cuando la API o la conexión no están disponibles | Robustez del cliente; fallback demo documentado para GitHub Pages            | Apartado 4.4. Implantación; Anexo 9.2. Pruebas realizadas                                     |
| RNF-08 | El entorno local es reproducible con XAMPP, phpMyAdmin y Node.js                           | Despliegue documentado y verificable por el evaluador                        | Apartado 4.4. Implantación; Anexo 9.1. Manual de usuario                                      |
| RNF-09 | El cliente React compila correctamente con Vite                                            | Build validado; archivo de salida publicado en GitHub Pages                  | Apartado 4.4. Implantación; Anexo 9.2. Pruebas realizadas                                     |
| RNF-10 | Los recursos visuales son coherentes y están optimizados para web                          | Guía de estilos aplicada; imágenes optimizadas documentadas                  | Apartado 4.3. Diseño; Anexo 9.7. Figuras                                                      |
| RNF-11 | El proyecto mantiene trazabilidad entre requisitos, pruebas y evidencias                   | Defensa técnica; cada requisito funcional tiene prueba asociada              | Apartado 5. Pruebas; Anexo 9.2. Pruebas realizadas; Anexo 9.6. Historias de usuario y backlog |

---

### C) Historias de usuario principales

El backlog completo se resume de forma defendible en el Anexo 9.6 — Historias de usuario y backlog. A continuación se recoge una síntesis de las historias de mayor valor e impacto en el producto final. Cada historia ha sido validada mediante pruebas funcionales o evidencias documentadas a lo largo de los sprints.

| ID    | Historia de usuario resumida                                                                                       | Valor                                            | Prioridad | Sprint / Materia       |
| ----- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ | --------- | ---------------------- |
| HU-01 | Como usuario nuevo, quiero registrarme con email, contraseña y DNI para crear una cuenta real                      | Evita cuentas falsas y mejora la convivencia     | Alta      | Sprint 1 / DWEC        |
| HU-02 | Como usuario registrado, quiero iniciar sesión para acceder a crear y unirme a actividades                         | Base del control y la seguridad                  | Alta      | Sprint 1 / DWEC        |
| HU-03 | Como usuario registrado, quiero cerrar sesión para proteger mi cuenta en equipos compartidos                       | Control básico de seguridad                      | Alta      | Sprint 1 / DWEC-DWES   |
| HU-04 | Como sistema, quiero diferenciar permisos de usuario y administrador para proteger la gestión                      | Evita acceso no autorizado a funciones sensibles | Alta      | Sprint 2 / DWES        |
| HU-05 | Como visitante, quiero ver un listado de actividades disponibles para decidir si me registro                       | Pantalla principal del producto                  | Alta      | Sprint 1-2 / DIW-DWEC  |
| HU-10 | Como usuario, quiero entrar al detalle de una actividad para ver toda la información antes de unirme               | Evita errores al apuntarse                       | Alta      | Sprint 2 / DWEC        |
| HU-11 | Como usuario autenticado, quiero unirme a una actividad con plazas disponibles para participar en la salida        | Funcionalidad central del producto               | Alta      | Sprint 2 / DWEC-DWES   |
| HU-14 | Como usuario autenticado, quiero crear una actividad sobre una ruta del sistema para organizar una salida          | Diferencia PacePal de otras apps                 | Alta      | Sprint 2 / DWEC-DWES   |
| HU-17 | Como usuario, quiero buscar productos por texto sin recargar la página para encontrarlos rápido                    | Mejora experiencia y cumple buscador dinámico    | Alta      | Sprint 2 / DWEC        |
| HU-18 | Como usuario, quiero añadir productos al carrito y gestionar mi compra para generar un pedido                      | Base de la tienda funcional                      | Alta      | Sprint 2-3 / DWEC-DWES |
| HU-20 | Como usuario autenticado, quiero ver mi perfil e historial de pedidos para gestionar mi cuenta                     | Control de cuenta del usuario                    | Media     | Sprint 2-3 / DWEC-DWES |
| HU-22 | Como administrador, quiero gestionar usuarios, productos, rutas, actividades y pedidos para mantener la plataforma | Imprescindible para la moderación                | Alta      | Sprint 2-3 / DWES      |
| HU-25 | Como usuario, quiero gestionar mis preferencias de cookies para controlar mi consentimiento                        | Cumplimiento RGPD básico                         | Alta      | Sprint 3 / DWEC        |

El backlog completo con estimaciones, criterios de aceptación y trazabilidad por sprint se incluye en el Anexo 9.6 — Historias de usuario y backlog.

---

### D) Diagramas y modelado

Los diagramas técnicos del proyecto se han elaborado con Draw.io y se incorporan como figuras en el Anexo 9.7 — Figuras del proyecto. Las referencias siguientes corresponden a las figuras que deben insertarse en LibreOffice en los puntos indicados.

> **[INSERTAR FIGURA A2 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/figuras/Diagrama de casos de uso.png`
> _Figura A2. Diagrama de casos de uso — Actores y acciones principales de PacePal._

> **[INSERTAR FIGURA A3 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/figuras/Diagrama de clases simplificado.png`
> _Figura A3. Diagrama de clases simplificado — Estructura principal del sistema._

> **[INSERTAR FIGURA B3 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/documentacion-final/figuras/Modelo relacional simplificado.png`
> _Figura B3. Modelo relacional simplificado — Entidades y relaciones principales de la base de datos._

**Tabla resumen de actores y casos de uso**

| Actor              | Casos de uso principales                                                                                                                                        |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Invitado           | Ver inicio, ver rutas, ver actividades, ver tienda, consultar detalle de actividad y producto, abrir registro y login                                           |
| Usuario registrado | Iniciar sesión, cerrar sesión, crear actividad, unirse o salir de actividad, buscar productos, añadir al carrito, generar pedido, ver perfil, gestionar cookies |
| Administrador      | Gestionar usuarios, productos, rutas, actividades, pedidos y reportes desde el panel de administración                                                          |
| Sistema            | Validar sesión, responder API REST, persistir datos en base de datos, calcular carrito y pedidos, controlar roles                                               |

**Tabla resumen de entidades del modelo de datos**

| Entidad           | Función                                      | Relaciones clave                                        |
| ----------------- | -------------------------------------------- | ------------------------------------------------------- |
| `usuarios`        | Identidad, credenciales, rol y datos básicos | Actividades creadas, pedidos, participaciones, reportes |
| `rutas`           | Recorridos disponibles en el sistema         | Actividades                                             |
| `actividades`     | Eventos concretos sobre rutas existentes     | Rutas, usuario creador, participaciones                 |
| `participaciones` | Une usuarios con actividades                 | N:M entre usuarios y actividades                        |
| `categorias`      | Clasifica productos de la tienda             | Artículos                                               |
| `articulos`       | Catálogo de la tienda                        | Categorías, detalle de pedido                           |
| `pedidos`         | Cabecera de compra de un usuario             | Usuarios, detalle de pedido                             |
| `detalle_pedido`  | Líneas del pedido con cantidad y precio      | Pedidos, artículos                                      |
| `reportes`        | Incidencias y avisos sobre el sistema        | Usuarios, actividades (opcional)                        |

---

Los requisitos recogidos en esta sección conectan directamente con el análisis funcional del apartado 4.2, con las decisiones de diseño del apartado 4.3, con las pruebas documentadas en el apartado 5 y con los anexos de historias de usuario, pruebas realizadas y figuras del proyecto.
