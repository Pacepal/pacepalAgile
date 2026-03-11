# S0 · Scrum base y reglas de evidencias · PacePal

Archivo: docs/02-agile/01-scrum-base.md  
Fecha: 2026-03-03  
Proyecto: PacePal · Agile Intermodular 2º DAW

---

## 0) Para qué es este documento

Aquí dejamos el Scrum básico del proyecto y, sobre todo, cómo vamos a guardar evidencias desde el minuto 1.

No es un “tema teórico”. Es para que si alguien abre el repo entienda:

- quién hace qué
- qué reuniones vamos a seguir
- cómo se organiza el trabajo
- cómo demostramos lo que hemos hecho

---

## 1) Roles

### Product Owner

Responsabilidades:

- decidir qué entra en cada sprint y qué se queda fuera
- priorizar historias de usuario
- mantener claro el objetivo del producto
- aceptar o no aceptar una historia según su validación

Cómo lo aplicamos en PacePal:

- el PO decide el orden de funcionalidades
- si algo se complica o se dispara de tiempo, el PO corta alcance sin drama

---

### Scrum Master

Responsabilidades:

- cuidar que Scrum se siga con sentido
- organizar el tablero y las reuniones
- quitar bloqueos
- recordar evidencias y orden de trabajo

Cómo lo aplicamos en PacePal:

- el SM mantiene el tablero limpio y actualizado
- vigila que no haya historias abiertas sin criterio de aceptación
- asegura que se guardan capturas y commits que luego se puedan enseñar

---

### Equipo de desarrollo

Responsabilidades:

- construir el producto
- dividir trabajo en tareas pequeñas
- mantener el código ordenado
- dejarlo todo funcionando y documentado

Cómo lo aplicamos en PacePal:

- se trabaja por sprints y por historias
- lo que se termina se prueba y se deja evidencia
- cada módulo se integra en la misma app, no se hacen proyectos separados

---

## 2) Artefactos

### Product Backlog

Qué es:

- lista de historias de usuario y tareas del proyecto
- está ordenada por prioridad

Dónde está:

- tablero Trello en la lista Product Backlog
- documento en repo  
  docs/02-agile/02-historias-usuario-v1.md

Regla:

- si una historia cambia mucho o se parte, se actualiza en el md y en Trello

---

### Sprint Backlog

Qué es:

- las historias que se van a trabajar en el sprint actual

Dónde está:

- en Trello, en la columna del sprint

Regla:

- no metemos 25 cosas a la vez
- se prioriza acabar antes que empezar mil historias

---

### Incremento

Qué es:

- lo que ya funciona al final del sprint

Cómo se ve:

- en el repositorio
- en la rama principal
- con commits y capturas que demuestran que está hecho

Regla:

- si no funciona y no se puede enseñar, no cuenta como terminado

---

## 3) Eventos Scrum

### Sprint Planning

Cuándo:

- al inicio del sprint

Qué se decide:

- objetivo del sprint
- historias que entran
- tareas principales
- evidencias que vamos a guardar al terminar

Salida:

- lista clara de historias en Trello en el sprint correspondiente
- notas rápidas del sprint en el md de notas

---

### Daily

Cuándo:

- breve, cada día que se trabaje, aunque sean 5 minutos

Qué se revisa:

- qué hice
- qué voy a hacer
- qué me bloquea

Regla:

- si hay bloqueo, se apunta y se resuelve rápido, no se ignora

---

### Sprint Review

Cuándo:

- al final del sprint

Qué se enseña:

- lo que ya funciona
- lo que está en el repo y se puede abrir

Evidencias típicas:

- capturas de pantallas del resultado
- capturas de validaciones funcionando
- endpoints probados en Postman si aplica

---

### Sprint Retrospective

Cuándo:

- después de la review

Qué se apunta:

- qué ha ido bien
- qué ha ido mal
- qué vamos a mejorar

No tiene que ser un documento enorme:

- puede ser un apartado corto dentro de notas del sprint

---

## 4) Reglas de evidencias

Esto es lo importante para el intermodular.

### 4.1 Dónde guardamos evidencias

Carpeta principal:

- docs/evidencias/

Organización por bloques:

- docs/evidencias/01-sprint0/
- docs/evidencias/diw/sprint-1/
- docs/evidencias/diw/sprint-2/
- docs/evidencias/dwec/
- docs/evidencias/dwes/
- docs/evidencias/despliegue/
- docs/evidencias/sostenibilidad/

Cada carpeta tiene un README para no perder el orden.

---

### 4.2 Qué evidencias guardamos siempre

Por sprint o por entrega se guardan, mínimo:

Evidencias de gestión:

- captura del tablero Trello del sprint
- captura del árbol de carpetas o estructura del repo
- captura del historial de commits si hace falta explicar el rastro

Evidencias de interfaz:

- capturas de la web en móvil, tablet y escritorio
- capturas de formularios y validaciones
- capturas de accesibilidad si se pasa alguna herramienta

Evidencias de cliente:

- capturas del carrito funcionando con contador y total
- capturas del buscador AJAX funcionando
- capturas de filtros y paginación

Evidencias de servidor:

- capturas de Postman con endpoints
- export de colección Postman si se pide
- script SQL guardado y capturas de tablas

Evidencias de despliegue:

- capturas del hosting o del servidor
- capturas de la web desplegada funcionando
- pasos documentados

---

### 4.3 Reglas para nombrar evidencias

Regla simple:

- nombre del sprint o bloque
- nombre del contenido
- todo en minúsculas y sin espacios

Ejemplos:

- sprint0-tablero.png
- sprint0-arbol.png
- diw-home-movil.png
- dwec-carrito-total.png
- dwes-postman-login.png
- despliegue-web-online.png

---

### 4.4 Reglas para commits

Reglas:

- commits pequeños
- mensaje claro en español
- un commit no debería mezclar 5 tareas distintas
- si se renombra un archivo, el commit lo dice

Ejemplos de mensajes:

- S0: definición del proyecto
- S0: scrum base y reglas de evidencias
- S0: historias de usuario v1
- DIW: estructura de home y navegación
- DWEC: validación de registro y login
- DWEC: carrito con contador y total
- DWES: endpoint listado de actividades
- DWES: documentación de endpoints y Postman

---

### 4.5 Qué significa terminado

Una tarea o historia se considera terminada cuando:

- está implementada
- cumple la validación de la historia
- está subida al repo
- hay evidencia si corresponde

Si falta una de esas cosas, está a medias.

---

## 5) Cómo trabajamos en PacePal

Normas de trabajo que seguimos para no liarnos:

- un solo proyecto intermodular
- una sola estructura de carpetas
- el index y el front se mantienen y se amplían por sprints
- las rutas son fijas en base de datos
- lo central son actividades, nivel y ritmo
- seguridad y reportes forman parte del producto desde el inicio
- tienda y carrito entran como parte del modelo sostenible

---

## 6) Cierre

Este documento sirve como guía rápida para trabajar con orden.
Si en algún sprint nos desviamos, lo corregimos en el siguiente, pero siempre dejando evidencia y rastro verificable.
