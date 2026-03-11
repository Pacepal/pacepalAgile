---
marp: true
---

# S0 · Historias de usuario v1 · PacePal

Archivo: docs/02-agile/02-historias-usuario-v1.md  
Fecha: 2026-03-03  
Versión: 1.0

---

## 0) Contexto rápido

PacePal es una app para crear y unirse a actividades en grupo sobre rutas que ya existen en nuestra base de datos.

Reglas fijas del concepto:

- las rutas son fijas y vienen de base de datos
- los usuarios no pueden crear rutas nuevas
- lo que se crea es una actividad sobre una ruta existente
- la actividad indica nivel y ritmo para que el grupo sea coherente
- ritmo disponible: suave, medio, rápido
- registro con DNI
- sistema de reportes y avisos
- tienda con zapatillas sostenibles y carrito

Roles que aparecen en las historias:

- invitado
- usuario registrado
- admin
- sistema

---

## 1) Cómo estamos estimando y priorizando

Prioridad:

- Alta
- Media
- Baja

Estimación:

- 1 muy pequeño
- 2 pequeño
- 3 medio
- 5 grande
- 8 muy grande y se parte

---

## 2) Historias de usuario

## HU-01

ID: HU-01  
Título: Registro con DNI

Cómo: usuario nuevo  
Quiero: registrarme con email, contraseña y DNI  
Para poder: crear y unirme a actividades con una cuenta real

Validación

- el formulario pide nombre, email, contraseña, confirmar contraseña, DNI
- DNI obligatorio y con formato válido
- email obligatorio y con formato válido
- no se permite email duplicado
- no se permite DNI duplicado
- la contraseña tiene longitud mínima y confirmación igual
- si todo está bien, se crea la cuenta y se inicia sesión o se redirige a login con mensaje claro

Valor

- evita cuentas falsas y mejora convivencia

Prioridad

- Alta

Estimación

- 5

---

## HU-02

ID: HU-02  
Título: Inicio de sesión

Cómo: usuario registrado  
Quiero: iniciar sesión con mi email y contraseña  
Para poder: acceder a crear actividades y unirme a otras

Validación

- login con email y contraseña
- si no coincide, mensaje claro y no revela datos internos
- al iniciar sesión se ve el estado de usuario conectado
- se mantiene la sesión al recargar

Valor

- es la base del control y la seguridad

Prioridad

- Alta

Estimación

- 3

---

## HU-03

ID: HU-03  
Título: Cerrar sesión

Cómo: usuario registrado  
Quiero: cerrar sesión cuando quiera  
Para poder: proteger mi cuenta en un ordenador compartido

Validación

- botón cerrar sesión visible
- al cerrar sesión vuelve a estado invitado
- se limpian datos de sesión en servidor
- no se puede acceder a pantallas protegidas tras cerrar sesión

Valor

- control básico de seguridad

Prioridad

- Alta

Estimación

- 2

---

## HU-04

ID: HU-04  
Título: Roles y control de acceso

Cómo: sistema  
Quiero: diferenciar permisos de usuario y admin  
Para poder: proteger moderación, reportes y gestión

Validación

- usuario normal no puede entrar a admin
- endpoints admin protegidos por sesión y rol
- si se intenta acceder sin permisos, se bloquea y se muestra error controlado
- el rol se mantiene en sesión

Valor

- evita que cualquiera toque lo sensible

Prioridad

- Alta

Estimación

- 5

---

## HU-05

ID: HU-05  
Título: Ver listado de actividades

Cómo: usuario invitado  
Quiero: ver un listado de actividades disponibles  
Para poder: decidir si me interesa registrarme o entrar

Validación

- se muestra listado con tarjetas o filas
- cada actividad muestra ruta, fecha, hora, nivel, ritmo, plazas
- si no hay actividades, se muestra lista vacía con mensaje claro
- hay acceso al detalle de una actividad

Valor

- pantalla principal del producto

Prioridad

- Alta

Estimación

- 5

---

## HU-06

ID: HU-06  
Título: Filtrar actividades por nivel y ritmo

Cómo: usuario  
Quiero: filtrar actividades por nivel y por ritmo  
Para poder: ver solo lo que encaja conmigo

Validación

- filtro nivel con novato, intermedio, avanzado
- filtro ritmo con suave, medio, rápido
- el listado se actualiza con los filtros
- existe opción de limpiar filtros y volver al listado completo
- si el filtro deja cero resultados, se muestra mensaje claro

Valor

- reduce errores y evita apuntarse a cosas que no tocan

Prioridad

- Alta

Estimación

- 3

---

## HU-07

ID: HU-07  
Título: Filtrar actividades por fecha y plazas

Cómo: usuario  
Quiero: filtrar actividades por fecha y por plazas disponibles  
Para poder: encontrar algo que sea viable y no esté lleno

Validación

- filtro por rango o selector de fecha
- filtro para mostrar solo actividades con plazas
- la información de plazas es coherente con el número de apuntados

Valor

- hace el listado más útil y real

Prioridad

- Media

Estimación

- 3

---

## HU-08

ID: HU-08  
Título: Paginación del listado de actividades

Cómo: usuario  
Quiero: paginar el listado si hay muchas actividades  
Para poder: navegar sin un scroll infinito

Validación

- paginación con siguiente y anterior
- número de página visible
- al filtrar o buscar, la paginación se comporta bien
- al cambiar de página no se rompe el filtro activo

Valor

- el sistema aguanta crecimiento sin volverse incómodo

Prioridad

- Media

Estimación

- 3

---

## HU-09

ID: HU-09  
Título: Buscador AJAX de actividades

Cómo: usuario  
Quiero: buscar actividades por texto sin recargar  
Para poder: encontrarlas rápido por ruta o zona

Validación

- campo de búsqueda visible en actividades
- al escribir, se actualizan resultados sin recargar página
- se busca por nombre de ruta y texto relevante
- si no hay resultados, mensaje claro
- existe opción de limpiar búsqueda

Valor

- mejora experiencia y cumple buscador dinámico

Prioridad

- Alta

Estimación

- 5

---

## HU-10

ID: HU-10  
Título: Ver detalle de una actividad

Cómo: usuario  
Quiero: entrar al detalle de una actividad  
Para poder: ver información completa antes de unirme

Validación

- el detalle muestra ruta, fecha, hora, punto de encuentro
- muestra nivel y ritmo
- muestra plazas máximas y plazas restantes
- muestra normas y notas del creador
- muestra participantes o contador
- botones de acción visibles según estado del usuario
- botón reportar visible si hay sesión

Valor

- evita líos y mejora confianza

Prioridad

- Alta

Estimación

- 3

---

## HU-11

ID: HU-11  
Título: Crear actividad sobre una ruta existente

Cómo: usuario registrado  
Quiero: crear una actividad eligiendo una ruta existente  
Para poder: organizar una quedada con gente compatible

Validación

- formulario con select de rutas existentes
- campos obligatorios: ruta, fecha, hora, nivel, ritmo, plazas
- campos opcionales: punto de encuentro, notas y normas
- no permite fecha pasada
- al crear, la actividad aparece en el listado
- el creador queda apuntado o queda marcado como creador según diseño definido

Valor

- sin esto no hay comunidad, solo catálogo

Prioridad

- Alta

Estimación

- 5

---

## HU-12

ID: HU-12  
Título: Unirme a una actividad

Cómo: usuario registrado  
Quiero: unirme a una actividad  
Para poder: participar en la quedada

Validación

- no se puede unir sin sesión
- no se puede unir si está completa
- no se puede unir dos veces a la misma actividad
- al unirme se actualizan plazas y estado visual
- se guarda mi inscripción en base de datos

Valor

- funcionalidad central del producto

Prioridad

- Alta

Estimación

- 5

---

## HU-13

ID: HU-13  
Título: Salirme de una actividad

Cómo: usuario registrado  
Quiero: salir de una actividad  
Para poder: liberarme si no puedo ir y dejar plaza a otro

Validación

- botón salir visible si estoy apuntado
- al salir se liberan plazas
- el listado y el detalle se actualizan
- no se puede salir si no estoy apuntado

Valor

- evita bloqueos y deja el sistema limpio

Prioridad

- Alta

Estimación

- 3

---

## HU-14

ID: HU-14  
Título: Mis actividades

Cómo: usuario registrado  
Quiero: ver mis actividades creadas y mis actividades apuntadas  
Para poder: gestionarme sin perderme

Validación

- vista con dos listados separados
- enlaces a detalle de actividad
- estados claros si una actividad está completa o cancelada
- opción rápida para salir de una actividad desde aquí

Valor

- aumenta uso real y evita confusión

Prioridad

- Media

Estimación

- 3

---

## HU-15

ID: HU-15  
Título: Ver catálogo de rutas

Cómo: usuario  
Quiero: ver el catálogo de rutas existentes  
Para poder: conocer las rutas antes de crear o unirme

Validación

- listado de rutas con datos básicos
- cada ruta muestra distancia, dificultad base y zona si existe
- acceso al detalle de ruta
- no existe botón para crear rutas nuevas

Valor

- soporte para elegir bien la actividad

Prioridad

- Media

Estimación

- 3

---

## HU-16

ID: HU-16  
Título: Ver detalle de ruta

Cómo: usuario  
Quiero: ver el detalle de una ruta  
Para poder: entender qué ruta es y si me encaja

Validación

- detalle con distancia, dificultad base, descripción y zona
- imagen de ruta si existe
- se muestra de forma clara y responsive
- la ruta no se puede editar desde usuario normal

Valor

- reduce incertidumbre, mejora decisión

Prioridad

- Media

Estimación

- 2

---

## HU-17

ID: HU-17  
Título: Reportar usuario o incidencia en una actividad

Cómo: usuario registrado  
Quiero: reportar un problema en una actividad  
Para poder: mantener convivencia y seguridad

Validación

- botón reportar visible en detalle de actividad
- formulario con motivo y descripción corta
- el reporte queda ligado a actividad y usuario reportado
- se guarda quién reporta y cuándo
- confirmación tras enviar
- no se permite reportar sin sesión

Valor

- el producto no se descontrola, hay herramienta real

Prioridad

- Alta

Estimación

- 5

---

## HU-18

ID: HU-18  
Título: Avisos acumulables por conducta repetida

Cómo: sistema  
Quiero: registrar avisos cuando un usuario acumula reportes válidos  
Para poder: detectar patrones y actuar antes de que explote

Validación

- existe contador de avisos por usuario
- existe historial de avisos con fecha y motivo
- se define una regla mínima para sumar avisos
- los avisos no se muestran públicamente

Valor

- control real, no solo botón de denunciar

Prioridad

- Media

Estimación

- 5

---

## HU-19

ID: HU-19  
Título: Panel admin para gestionar reportes

Cómo: admin  
Quiero: ver y gestionar reportes  
Para poder: revisar casos y cerrar incidencias

Validación

- listado de reportes con estado pendiente, revisado, cerrado
- ver detalle del reporte con actividad y usuarios implicados
- cambiar estado del reporte
- registrar nota de moderación
- acceso protegido por rol admin

Valor

- el sistema de reportes funciona de verdad

Prioridad

- Media

Estimación

- 5

---

## HU-20

ID: HU-20  
Título: Acciones de moderación sobre usuarios

Cómo: admin  
Quiero: aplicar advertencia, limitación o bloqueo a un usuario  
Para poder: frenar comportamientos repetidos o graves

Validación

- acción advertir registra nota y fecha
- acción limitar impide unirse durante un tiempo definido
- acción bloquear impide login o impide acciones clave
- el estado del usuario se refleja en la app
- todo queda en historial de admin

Valor

- seguridad y convivencia, parte diferencial del proyecto

Prioridad

- Media

Estimación

- 5

---

## HU-21

ID: HU-21  
Título: Tienda con catálogo de zapatillas sostenibles

Cómo: usuario  
Quiero: ver una tienda con zapatillas sostenibles  
Para poder: comprar producto alineado con el enfoque del proyecto

Validación

- catálogo con tarjetas de producto
- cada producto muestra nombre, precio, imagen y etiqueta sostenible
- acceso al detalle de producto
- productos cargan desde base de datos o API

Valor

- integra la parte de sostenibilidad y modelo de negocio

Prioridad

- Alta

Estimación

- 5

---

## HU-22

ID: HU-22  
Título: Detalle de producto

Cómo: usuario  
Quiero: ver el detalle de un producto  
Para poder: entender materiales, características y comprar bien

Validación

- detalle muestra descripción, materiales, precio, imagen
- botón añadir al carrito
- stock visible si se gestiona
- se ve el mensaje sostenible de forma clara

Valor

- confianza y compra más informada

Prioridad

- Media

Estimación

- 3

---

## HU-23

ID: HU-23  
Título: Añadir y quitar productos del carrito

Cómo: usuario  
Quiero: añadir productos al carrito y quitarlos  
Para poder: preparar una compra sin complicaciones

Validación

- botón añadir al carrito desde catálogo o detalle
- se puede eliminar un producto desde carrito
- el carrito mantiene productos al navegar por la web
- si el carrito queda vacío, mensaje claro

Valor

- base del flujo de compra

Prioridad

- Alta

Estimación

- 5

---

## HU-24

ID: HU-24  
Título: Carrito con contador y total

Cómo: usuario  
Quiero: ver un contador de carrito y el total  
Para poder: saber rápido lo que llevo y cuánto cuesta

Validación

- icono de carrito con contador visible
- en carrito se ven unidades por producto
- se puede cambiar cantidad
- se recalcula el total al momento
- el total se muestra claro y sin líos

Valor

- cumple selección temporal con totales

Prioridad

- Alta

Estimación

- 5

---

## HU-25

ID: HU-25  
Título: Confirmar pedido

Cómo: usuario con sesión  
Quiero: confirmar el pedido del carrito  
Para poder: registrar una compra en el sistema

Validación

- si no hay sesión, pide login antes de confirmar
- al confirmar, se crea pedido con líneas y total
- se muestra resumen final de pedido
- el carrito se vacía tras confirmar
- no hay pago real si no se implementa pasarela

Valor

- cierra el flujo de tienda

Prioridad

- Media

Estimación

- 5

---

## HU-26

ID: HU-26  
Título: Puntos ecológicos por actividad y canje en tienda

Cómo: usuario registrado  
Quiero: ganar puntos por participar en actividades y canjearlos  
Para poder: tener una recompensa ligada a hábitos sanos y sostenibles

Validación

- el sistema registra puntos por participación validada
- el usuario ve su saldo de puntos en perfil
- en carrito o checkout se puede aplicar descuento con puntos
- no permite saldo negativo
- queda registro de canjes

Valor

- conecta comunidad, deporte y sostenibilidad

Prioridad

- Baja

Estimación

- 8

---

## HU-27

ID: HU-27  
Título: API REST para rutas y actividades

Cómo: frontend  
Quiero: consumir rutas y actividades desde una API en JSON  
Para poder: tener datos reales y no inventados en el navegador

Validación

- endpoint rutas lista y detalle
- endpoint actividades lista con filtros
- endpoint detalle actividad
- respuestas con JSON claro
- errores controlados con códigos coherentes

Valor

- une cliente y servidor, base del intermodular

Prioridad

- Alta

Estimación

- 8

---

## HU-28

ID: HU-28  
Título: API REST para usuarios, reportes y tienda

Cómo: frontend  
Quiero: endpoints para registro, login, reportes y tienda  
Para poder: completar el producto sin hacks raros

Validación

- endpoint registro con validación de DNI y email
- endpoint login y logout con sesión
- endpoint crear actividad y unirse y salir
- endpoint reportar
- endpoint productos tienda
- endpoint pedido
- control de acceso por rol en admin
- pruebas básicas con Postman

Valor

- cierra el circuito del producto real

Prioridad

- Alta

Estimación

- 8

---

## HU-29

ID: HU-29  
Título: Documentación de endpoints y pruebas con Postman

Cómo: equipo de desarrollo  
Quiero: documentar endpoints y guardar pruebas Postman  
Para poder: demostrar que la API funciona y dejar rastro

Validación

- documento de endpoints con método, ruta, parámetros y ejemplo
- colección Postman exportada en tests o docs
- capturas de pruebas importantes
- endpoints responden como se documenta

Valor

- evidencia real del trabajo, y sirve para depurar

Prioridad

- Alta

Estimación

- 5

---

## HU-30

ID: HU-30  
Título: Accesibilidad base en pantallas clave

Cómo: usuario  
Quiero: usar la web sin barreras  
Para poder: navegar, crear y unirme con teclado y sin perderme

Validación

- navegación por teclado
- foco visible
- labels en formularios
- mensajes de error claros
- contraste suficiente
- estructura semántica básica

Valor

- mejora calidad y evita suspensos por accesibilidad

Prioridad

- Alta

Estimación

- 3

---

## 3) Backlog mínimo para una primera versión enseñable

Historias mínimas:

- HU-01
- HU-02
- HU-03
- HU-04
- HU-05
- HU-06
- HU-09
- HU-10
- HU-11
- HU-12
- HU-13
- HU-17
- HU-21
- HU-23
- HU-24
- HU-27
- HU-28
- HU-29
- HU-30

---

## 4) Notas para el tablero

Regla simple:

- cada tarjeta Trello lleva el ID HU en el título
- en la descripción de la tarjeta se pega el texto de la historia o se enlaza al bloque del md
- cuando se cierre una historia, se guarda evidencia
