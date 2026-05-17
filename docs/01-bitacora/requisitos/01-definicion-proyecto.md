# DI1 · Definición del proyecto · PacePal

Archivo: docs/01-bitacora/requisitos/01-definicion-proyecto.md  
Fecha: 2026-03-03  
Autor: Pablo Sevillano Aparicio  
Proyecto: Agile Intermodular 2º DAW

---

## 0) Resumen del proyecto

PacePal es una aplicación web para crear y unirse a actividades en grupo sobre rutas que ya existen en nuestra base de datos.

Puntos clave del concepto:

- Las rutas están en la base de datos y no se pueden añadir rutas nuevas
- Lo que crea el usuario es una actividad sobre una ruta existente
- La actividad marca nivel y ritmo para que el grupo sea coherente
- Otros usuarios se unen si encaja con su nivel y el ritmo del grupo
- Registro con DNI como medida de seriedad y control interno
- Sistema de reportes y avisos para convivencia y seguridad
- Tienda integrada con producto sostenible, en la parte de sostenibilidad se plantea colaboración con Nike y zapatillas con materiales reciclados

Qué busca el producto:

- que la gente no entrene sola
- que encuentre grupos de su nivel sin líos
- que se generen hábitos sanos y comunidad
- que haya un enfoque sostenible real, tanto en mensaje como en la parte de tienda y recompensas

---

## 1) Definición del proyecto en 14 preguntas

### 1. En qué consistirá el proyecto multimedia

Será una web interactiva centrada en actividades.

Conceptos principales:

- Ruta  
  Existe en la base de datos. Tiene datos fijos como distancia, dificultad base, zona, descripción, imagen.
- Actividad  
  Es una quedada concreta sobre una ruta. La crea un usuario. Define cómo se hará esa ruta en grupo.

La web permitirá:

- ver actividades disponibles
- filtrar y buscar actividades
- ver el detalle de una actividad
- unirse o salirse de una actividad
- crear una actividad nueva sobre una ruta existente
- ver el catálogo de rutas y sus datos fijos
- reportar usuarios o incidencias
- ver avisos, reportes y estado del usuario en zona admin
- usar una tienda con productos sostenibles y un carrito

Multimedia en el proyecto:

- imágenes para rutas, actividades, tienda
- iconos para datos rápidos
- estados visuales claros para acciones y validaciones
- si se implementa, mapa o preview simple de la ruta

---

### 2. Cuál es el propósito principal

Propósito general:

- fomentar comunidad, salud y constancia
- facilitar que la gente encuentre actividad en grupo sin depender de grupos externos
- organizar quedadas con orden real, nivel y ritmo importan
- incorporar sostenibilidad como parte de la idea, no solo como cartel

Propósito de convivencia y seguridad:

- registro con DNI para evitar cuentas fantasma
- botón de reportar desde la web
- avisos acumulables por conductas repetidas
- moderación desde admin

Propósito educativo:

- construir un proyecto intermodular real y coherente
- una sola aplicación, un solo front que evoluciona por sprints
- DIW para interfaz, accesibilidad y guía de estilo
- DWEC para validación, JS modular, AJAX y carrito
- DWES para API, SQL, roles, sesiones, reportes y Postman
- Despliegue con documentación y evidencias

---

### 3. Quién lo va a usar

Usuarios mayores de 18 años que quieren hacer actividad al aire libre y conocer gente.

Perfiles típicos:

- novato, busca algo suave, sin presión, sin gente que vaya a mil
- intermedio, quiere un ritmo medio y un grupo constante
- avanzado, quiere ritmo rápido y que el nivel del grupo no se rompa

Necesidades comunes:

- saber el ritmo antes de apuntarse
- saber el nivel recomendado antes de apuntarse
- ver plazas, punto de encuentro y normas
- tener salida rápida si la actividad no encaja
- tener una forma de reportar si alguien se comporta mal

---

### 4. Qué módulos o partes tendrá el proyecto

Módulos principales:

- inicio
- actividades
- detalle de actividad
- crear actividad
- rutas
- detalle de ruta
- mis actividades
- registro y acceso
- reportes
- avisos y moderación
- tienda
- carrito
- documentación y evidencias

Separación por módulo académico:

- DIW  
  estructura visual, responsive, accesibilidad, guía de estilos, prototipos
- DWEC  
  formularios, validación, JS modular, filtros, buscador AJAX, carrito
- DWES  
  base de datos, API REST, sesiones, roles, seguridad, reportes, Postman
- Despliegue  
  publicación y documentación de despliegue, evidencias finales

---

### 5. Qué elementos multimedia se necesitan

Elementos previstos:

- imágenes  
  imagen de ruta, imagen para tarjetas, cabeceras, imágenes de productos en tienda
- iconos  
  nivel, ritmo, plazas, distancia, fecha, hora, ubicación, seguridad, reportes
- componentes visuales  
  tarjetas, badges, alertas, toasts, estados de botón
- mapa o preview de ruta  
  simple, si se implementa
- tienda  
  tarjetas de producto, detalle de producto, carrito con resumen

---

### 6. Qué tipo de textos, sonidos, imágenes y colores se usarán

Textos:

- directos y cortos
- botones con verbos claros
- mensajes de error entendibles
- normas de actividad en lenguaje simple

Sonidos:

- no se incluyen sonidos por defecto

Imágenes:

- estilo realista, naturaleza, parques, caminos, ciudad si aplica
- una imagen por ruta suele ser suficiente
- imágenes de producto limpias en tienda

Colores:

- paleta sencilla
- fondo neutro
- color principal para acciones
- contraste suficiente en texto y botones

---

### 7. De dónde se tomarán esos elementos o cómo se crearán

Fuentes:

- imágenes de bancos libres o propias
- iconos de librerías conocidas con licencia clara
- tipografías de Google Fonts o del sistema
- textos redactados por el equipo
- dataset inicial de rutas en base de datos, controlado por el equipo
- catálogo de productos sostenible, controlado por el equipo

---

### 8. Se necesitan permisos para usarlos

Sí.

- usar recursos con licencia válida
- si hay atribución, se incluye en créditos
- no se usarán recursos sin licencia clara
- se documentará una lista simple de recursos y licencias

---

### 9. Qué herramientas de preparación se usarán

Herramientas:

- VS Code
- Git y GitHub
- XAMPP
- MySQL
- Bootstrap y CSS3
- JavaScript nativo modular
- Postman
- Figma o Canva
- Trello para gestión Scrum y evidencias

---

### 10. Qué hardware se requiere

- PC o portátil para desarrollo
- móvil para pruebas responsive
- acceso a internet para documentación y recursos

---

### 11. Se necesitará ayuda para crear elementos o usar software

No se depende de ayuda externa obligatoria.
Si un elemento se complica se baja a una versión simple:

- mapa básico en vez de mapa avanzado
- reportes y avisos con lógica sencilla pero funcionando
- tienda con carrito funcional sin pagos reales si no da tiempo

---

### 12. Cuánto tiempo se tardará

Plan por sprints, realista para dos semanas:

Sprint 0:

- definición del proyecto
- scrum base
- historias de usuario
- notas de sprint
- evidencias del tablero y estructura
- repositorio limpio con estructura mínima

Sprint DIW:

- estructura de páginas
- maquetación responsive
- guía de estilos
- accesibilidad base
- prototipos

Sprint DWEC:

- formularios y validación
- listado dinámico con filtros y paginación
- buscador AJAX
- carrito de tienda con contador y totales
- interacción de unirse y salirse a actividades desde el front

Sprint DWES:

- base de datos relacional
- API REST
- sesiones y roles
- reportes y avisos
- endpoints para tienda y carrito
- pruebas con Postman y documentación de endpoints

Sprint cierre y despliegue:

- pruebas finales
- optimización
- despliegue
- evidencias y documentación final

---

### 13. Cuánto costará

Coste 0 euros en local con herramientas gratuitas.  
Costes opcionales, hosting y dominio si se despliega fuera del entorno del centro.

---

### 14. Qué perfiles humanos se necesitan

Roles:

- product owner  
  decide alcance y prioridades
- scrum master  
  seguimiento, evidencias, tablero, organización
- equipo de desarrollo  
  interfaz, frontend, backend, base de datos, documentación

---

## 2) Diseño de la interfaz

Se define identificación, navegación, contenido e interacción.

### 2.1 Identificación

Elementos:

- nombre PacePal
- logo simple
- header con navegación
- footer con enlaces y créditos si aplica

---

### 2.2 Navegación

Secciones principales:

- inicio
- actividades
- crear actividad
- rutas
- mis actividades
- tienda
- carrito
- acceso o perfil
- administración para usuarios con rol admin

Navegación interna:

- ver detalle desde tarjetas
- botón volver en detalle
- filtros visibles y usables en móvil
- paginación en listados

---

### 2.3 Contenido

Pantallas principales:

Inicio:

- mensaje corto explicando el concepto
- acceso rápido a ver actividades
- acceso rápido a crear actividad si hay sesión
- acceso a tienda y a la parte sostenible

Actividades:

- listado en tarjetas
- filtros por nivel
- filtros por ritmo suave medio rápido
- filtros por fecha
- filtro por plazas disponibles
- buscador AJAX
- paginación

Detalle de actividad:

- datos principales  
  creador, fecha, hora, punto de encuentro
- condiciones  
  nivel recomendado, ritmo previsto, plazas, normas y notas
- participantes  
  lista simple
- acciones  
  unirse, salirse, reportar

Crear actividad:

- formulario
- selector de ruta
- fecha y hora
- punto de encuentro
- nivel recomendado
- ritmo suave medio rápido
- plazas máximas
- normas y notas
- validación clara
- confirmación al crear

Rutas:

- catálogo de rutas existentes
- detalle con datos fijos
- no existe creación de rutas nuevas

Mis actividades:

- creadas por mí
- actividades donde estoy apuntado
- acceso rápido a detalle
- salida rápida de actividad

Tienda:

- catálogo de zapatillas sostenibles
- ficha de producto con materiales y mensaje sostenible
- añadir al carrito
- ver carrito con totales

Carrito:

- listado de productos
- unidades
- total
- aplicar puntos ecológicos si se implementa el sistema de recompensas
- finalización tipo checkout simple, sin pago real si no se implementa pasarela

Administración:

- panel de reportes
- panel de avisos por usuario
- acciones de moderación  
  advertir, limitar, bloquear, cerrar reporte

---

### 2.4 Interacción

Acciones principales:

- registrarse con DNI
- iniciar sesión
- ver actividades
- filtrar y buscar actividades
- entrar en detalle
- unirse y salirse
- crear actividad
- reportar a un usuario
- comprar en tienda  
  ver catálogo, detalle, carrito, confirmar pedido

Feedback:

- mensajes de validación en formularios
- estado visual cuando el usuario está apuntado
- aviso cuando una actividad está completa
- confirmación al crear actividad
- confirmación al reportar
- confirmación al añadir al carrito y al finalizar pedido

---

### 2.5 Accesibilidad

Se controla desde el inicio:

- navegación por teclado
- foco visible en botones e inputs
- labels reales en formularios
- mensajes de error entendibles
- contraste suficiente
- jerarquía de encabezados correcta
- tamaño de texto legible en móvil

---

## 3) Datos y reglas principales del sistema

Esto sirve para que el proyecto tenga lógica y sea defendible.

### 3.1 Rutas

Datos típicos de una ruta:

- id
- nombre
- distancia
- dificultad base
- zona
- descripción
- imagen
- estado activa o no

Regla:

- las rutas existen en base de datos
- no se crean nuevas rutas desde la web

---

### 3.2 Actividades

Datos típicos de una actividad:

- id
- ruta asociada
- creador
- fecha
- hora
- punto de encuentro
- nivel recomendado  
  novato, intermedio, avanzado
- ritmo previsto  
  suave, medio, rápido
- plazas máximas
- plazas ocupadas
- normas y notas
- estado  
  activa, completa, cancelada

Reglas:

- no se puede unir si está completa
- no se puede unir sin sesión
- un usuario no puede estar dos veces en la misma actividad
- la actividad debe ser futura, no se crea en fecha pasada
- el creador puede cancelar su actividad si procede

---

### 3.3 Usuarios

Datos básicos:

- id
- nombre
- email
- contraseña
- dni
- rol  
  usuario, admin
- estado  
  activo, limitado, bloqueado
- contador de avisos
- historial de reportes

Reglas sobre DNI:

- no se muestra públicamente
- no se devuelve en respuestas normales de API
- se valida el formato
- se guarda con cuidado para no exponerlo

---

### 3.4 Reportes y avisos

Reporte:

- quien reporta
- a quien reporta
- actividad relacionada
- motivo
- descripción
- estado  
  pendiente, revisado, cerrado
- fecha

Avisos:

- un usuario puede acumular avisos
- un aviso se registra con fecha y motivo
- el admin ve historial y contador

Acciones:

- advertir
- limitar temporalmente
- bloquear si hay repetición o algo grave

---

### 3.5 Tienda

Producto:

- id
- nombre
- descripción
- imagen
- materiales sostenibles  
  reciclados, biodegradables
- precio
- stock
- etiqueta sostenible  
  reciclado, circular, bajo impacto

Carrito:

- productos
- unidades
- total
- puntos ecológicos aplicados si existe el sistema

Pedido:

- usuario
- total
- fecha
- estado  
  pendiente, confirmado, cancelado

Sistema de puntos ecológicos:

- se ganan puntos por correr o caminar en actividades completadas
- se ganan puntos por acciones sostenibles si se decide, como reciclar zapatillas en el sistema
- se canjean puntos en tienda como descuento o recompensa

---

## 4) Idea de negocio y sostenibilidad

Esta parte viene del trabajo de sostenibilidad del intermodular aplicado a PacePal.

### Descripción

PacePal conecta a personas para correr o caminar juntas, crear actividades y compartir actividad física sostenible.  
En la parte de sostenibilidad se plantea colaboración con Nike para ofrecer zapatillas elaboradas con materiales reciclados, promoviendo deporte, comunidad y cuidado del planeta.

### Propósito

Fomentar una comunidad activa, saludable y comprometida con la sostenibilidad, impulsando el deporte como herramienta de conexión social y cambio ambiental positivo.

---

## 5) SCAMPER aplicado a PacePal

Sustituir:

- cambiar materiales tradicionales de las zapatillas por componentes reciclados o biodegradables
- usar servidores y procesos energéticos sostenibles para reducir la huella digital de la app

Combinar:

- unir deporte, sostenibilidad y acción social
- sistema de recompensas ecológicas  
  puntos por correr, andar o reciclar zapatillas
- integrar eventos solidarios y colaboraciones con ONGs

Adaptar:

- tomar ideas de car sharing o bike sharing para crear grupos locales de actividad compartida
- inspirarse en deporte consciente y contacto con la naturaleza

Modificar:

- rediseñar experiencia con rutas verdes, mapas ecológicos y eventos sostenibles
- optimizar logística de tienda para envíos neutros en carbono y empaques reciclables

Poner en otros usos:

- educación ambiental y salud pública
- canal para recoger datos de movilidad sostenible
- colaboración con ayuntamientos para espacios verdes

Eliminar:

- materiales contaminantes
- procesos logísticos con alta huella de carbono
- publicidad no ética
- priorizar alianzas responsables y locales

Reordenar:

- primero crear comunidad y conciencia
- después ofrecer productos sostenibles
- fabricar bajo demanda para reducir sobreproducción y residuos

---

## 6) Mini canvas

Problema que resolvemos:

- muchas personas quieren hacer ejercicio y cuidar el medioambiente
- falta motivación, compañía y opciones sostenibles
- PacePal junta actividad física, conexión social y consumo responsable

Factor diferenciador clásico:

- no se enfoca solo en rendimiento
- se enfoca en comunidad y experiencias compartidas
- une deporte, bienestar y compromiso ambiental en una sola plataforma

Factor diferenciador sostenible:

- impulsa economía circular con venta y reciclaje de zapatillas ecológicas
- promueve hábitos saludables y sostenibles
- fomenta movilidad activa  
  caminar o correr en lugar de transporte contaminante
- impacto positivo en comunidad local y colaboración con ONGs y eventos solidarios

Cliente objetivo:

- 18 a 45 años interesadas en deporte, salud y sostenibilidad
- personas que buscan motivación, comunidad y consumo responsable
- marcas y municipios interesados en proyectos de deporte y sostenibilidad urbana

Impacto esperado:

- económico  
  ingresos por ventas sostenibles y servicios premium, empleo verde y colaboraciones
- ecosocial  
  reducir residuos, fomentar vida saludable, fortalecer conexión social y ambiental

---

## 7) Cliente ideal y empatía

Cliente ideal general:

- mayor de 18 años
- quiere cambiar hábitos y mejorar salud
- necesita constancia y acompañamiento
- puede venir de vida sedentaria o ser ya activo

Qué piensa y siente:

- quiere mejorar bienestar físico y mental
- necesita constancia y comunidad
- le preocupa falta de tiempo, inseguridad y miedo al fracaso

Qué ve en su entorno:

- retos de running y vida saludable en redes
- eventos locales y comunidades
- gente que empezó desde cero y cambió su vida

Qué oye:

- consejos de amistades y familia para moverse más
- historias motivadoras
- recomendaciones de progresar con calma

Qué dice y hace:

- quiere empezar pero le cuesta mantener constancia
- busca quedadas por niveles y planes progresivos
- comparte pequeños logros cuando se siente apoyado

Dolores:

- soledad al entrenar
- dificultad para romper hábitos
- falta de tiempo
- miedo a no estar a la altura

Ganancias:

- transformar su vida con constancia
- conexiones reales con gente afín
- orgullo por logros
- rutina que mejora estado mental y físico

---

## 8) Arquetipos de cliente

Perfil 1 Álvaro Gómez, 25 años  
Principiante que busca un cambio positivo

- estudiante, ingresos bajos
- sedentario, quiere ganar confianza
- le cuesta socializar
- necesita rutinas claras y apoyo
- quiere empezar a correr tres veces por semana con retos grupales
- dolores  
  miedo al juicio, desmotivación, dificultad para sostener el hábito
- ganancias  
  rutina estable, salud física y mental, apoyo real

Perfil 2 Javier Ruiz, 54 años  
Retomador prudente

- casado, quiere reactivarse
- trabajo sedentario, ingresos medios
- valora seguridad y progresión
- cuidado con rodilla, busca bajo impacto
- necesita grupos seguros y progresivos
- dolores  
  miedo a recaer, poca confianza, sensación de no llegar
- ganancias  
  más energía, confianza, mejor ánimo y vida diaria

Perfil 3 Laura Prieto, 38 años  
Profesional con agenda exigente

- emprendedora, ingresos medio altos
- jornadas largas, estrés
- quiere volver a correr cinco kilómetros de forma constante
- busca horarios flexibles y sesiones cortas
- dolores  
  falta de tiempo, cansancio, sedentarismo, desmotivación
- ganancias  
  menos estrés, resistencia, conexión social, control del día

Perfil 4 Jazmín Jafar, 18 años  
Creadora en potencia

- estudiante, depende de familia
- social y creativa, quiere contenido fitness
- busca rutas atractivas para publicar
- le interesa comunidad y retos
- dolores  
  poco tiempo, poca experiencia, presión por contenido
- ganancias  
  mejor forma física, catálogo de rutas y actividades, más conexiones y seguidores

---

## 9) Competencia y referencias

Se revisan productos reales para inspirarse en estructura y flujo.

Referencia 1 Meetup

- enfoque en eventos
- flujo claro listado, detalle, unirse

Referencia 2 Strava

- actividad deportiva con datos clave
- idea de grupos y salidas

Referencia 3 Komoot

- rutas con información clara
- inspiración para mostrar datos de ruta sin saturar

---

## 10) Estructura del repositorio y coherencia intermodular

El proyecto es uno solo, no trabajos separados.

Estructura base:

- index.html como base de la interfaz
- css para estilos
- js para lógica de cliente
- img para recursos visuales
- documentación para soporte de entregas de cliente
- tests para evidencias y pruebas
- docs para documentación global del proyecto
- src para servidor
- db para scripts SQL
- README en la raíz

La misma aplicación evoluciona sprint a sprint.

---

## 11) Cierre

PacePal se centra en crear y unirse a actividades sobre rutas existentes, con control por nivel y ritmo, y con un sistema de seguridad y convivencia que no sea de pega.

Además, se integra la parte de sostenibilidad y modelo de negocio con tienda de producto sostenible y un enfoque de recompensas ecológicas para reforzar la idea del proyecto.
