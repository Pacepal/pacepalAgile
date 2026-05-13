# Sprint 2 · Retrospectiva y aplicación del feedback

Archivo: `docs/01-bitacora/agile/04-retro-sprint2-feedback.md`  
Fecha: 2026-04-27  
Objetivo: recoger el feedback docente del Sprint 2, analizarlo sobre el estado real de PacePal y convertirlo en acciones concretas para la entrega final.

---

## 1) Feedback recibido

### Valoraciones positivas

- diseño visual muy cuidado y coherente
- estructura limpia y bien organizada
- excelente integración de los elementos
- footer bien estructurado
- muy buena usabilidad y experiencia de usuario
- digitalización especialmente bien valorada

### Aspectos a mejorar indicados en la revisión

- no se ha incluido prototipado de forma visible en la entrega
- algunos detalles puntuales pueden pulirse en vistas concretas
- hace falta justificar mejor el proceso de diseño y cómo se ha llegado al resultado final
- la estructura del código se percibe como excesivamente compleja para el tamaño actual del proyecto
- se recomienda simplificar la organización para facilitar su seguimiento y mantenimiento
- en la parte de servidor hubo dudas durante la corrección sobre si existían correctamente sesiones, cookies y funcionamiento estable

### Calificaciones comunicadas

- DIW: `6,90`
- DWES: `2,8`
- DWEC: `6`
- Digitalización: `9`
- Nota final del Sprint 2: `5,61`

---

## 2) Lectura crítica del feedback

El feedback no apunta a un mal resultado visual ni a una falta de trabajo, sino a un problema de **evidencia, claridad y defendibilidad**. El proyecto transmite bastante calidad en la parte visible, pero no siempre deja igual de claro:

- qué proceso de diseño se siguió
- por qué la arquitectura elegida era adecuada
- cómo comprobar rápido que el backend funciona
- dónde están las pruebas que validan sesiones, cookies, rutas y permisos

En otras palabras, el problema principal no parece ser únicamente técnico, sino también de **presentación académica del trabajo técnico**.

---

## 3) Análisis aplicado a PacePal

### 3.1 Diseño e interfaz

En PacePal sí existe una línea visual sólida y consistente. Esto coincide con la valoración positiva recibida en DIW. También hay documentación de estilo, accesibilidad, optimización e inspección de usabilidad.

Sin embargo, el feedback deja claro que el tribunal espera ver no solo el resultado final, sino también el camino seguido. Aunque en el repositorio ya existen bocetos y wireframes, esa información no ha quedado lo bastante integrada o destacada dentro de la narrativa de la entrega.

Conclusión aplicada al proyecto:

- el problema no es rehacer el diseño
- el problema es **hacer visible el proceso de diseño**

### 3.2 Parte cliente

La parte de cliente está bastante integrada con la API y cubre funcionalidades relevantes: navbar dinámica, sesión, carrito, listados y detalle de contenido.

La mejora aquí no pasa tanto por añadir más funcionalidades como por:

- reforzar la trazabilidad entre vista, script y endpoint
- aportar mejores evidencias funcionales
- dejar más explícitos los casos de uso y pruebas

### 3.3 Parte servidor

El comentario más duro llega desde DWES. Ahí hay dos posibles lecturas que conviene separar:

1. La arquitectura fue percibida como demasiado compleja para el alcance actual.
2. Durante la corrección no quedó claro que sesiones, cookies y rutas estuvieran funcionando correctamente.

Tras revisar el proyecto, PacePal sí implementa backend real con:

- router API central
- controladores y modelos separados
- login y logout con sesión PHP
- uso de `$_SESSION` para autenticación y carrito
- cookie propia de consentimiento

Por tanto, el problema no es que no existan sesiones o cookies, sino que **su funcionamiento no quedó suficientemente claro o verificable en la revisión**. Además, algunos fallos de rutas y entorno pueden haber provocado una percepción de mal funcionamiento aunque la lógica estuviera implementada.

Conclusión aplicada al proyecto:

- no basta con tener la funcionalidad hecha
- hay que **hacerla fácil de revisar, ejecutar y demostrar**

---

## 4) Qué debemos mejorar en la entrega final

### 4.1 Mejoras de documentación

- incorporar de forma visible los wireframes y prototipos dentro del relato del Sprint 2
- conectar mejor los documentos de DIW con la implementación final
- añadir una explicación breve de las decisiones visuales y de usabilidad
- incluir una retrospectiva clara de por qué se eligió la estructura actual del proyecto

### 4.2 Mejoras de presentación técnica

- documentar de forma más directa cómo arrancar y probar el proyecto
- dejar una sección específica para verificar sesión, cookies, login, carrito y permisos
- añadir capturas o evidencias reales de DevTools, Postman o pruebas funcionales
- explicar mejor la relación entre frontend, endpoints y respuestas JSON

### 4.3 Mejoras de arquitectura

- revisar si toda la separación actual aporta valor real o si parte de ella puede simplificarse
- reducir complejidad accidental en naming, rutas y duplicidades
- centralizar mejor la construcción de URLs de API en cliente
- reforzar la robustez de rutas para evitar errores de entorno o despliegue

### 4.4 Mejoras de defensa académica

- preparar una explicación corta y clara del flujo completo:
  usuario entra, frontend consulta sesión, backend responde, PHP mantiene `PHPSESSID`, carrito usa `$_SESSION`, consentimiento usa cookie propia
- preparar una demostración rápida para enseñar en navegador que sí existen cookies y sesiones
- acompañar cada parte técnica con su evidencia correspondiente

---

## 5) Acciones concretas que aplican a PacePal

### Prioridad alta

- integrar y destacar los wireframes ya existentes en la memoria y en el README
- crear una sección de verificación rápida del backend
- dejar capturas o pruebas reproducibles de:
  - login correcto
  - creación de sesión
  - presencia de `PHPSESSID`
  - presencia de `pacepal_cookies`
  - respuesta válida de `GET /api/session`
- revisar los puntos donde el proyecto depende demasiado del entorno local o de rutas frágiles

### Prioridad media

- simplificar la explicación del backend para que se entienda en una primera lectura
- revisar si algunos controladores o scripts pueden unificarse o aclararse mejor
- pulir pequeños detalles visuales pendientes en páginas concretas

### Prioridad baja

- refinar aún más nomenclatura, comentarios y orden de algunos archivos
- ampliar el bloque de lecciones aprendidas para la memoria final

---

## 6) Enfoque que seguiremos

Para la entrega final no conviene rehacer el proyecto desde cero ni romper una base que ya funciona. El enfoque más razonable es:

- mantener los puntos fuertes ya reconocidos
- simplificar la lectura del código donde aporte valor real
- reforzar la documentación de proceso
- mejorar la demostración del funcionamiento técnico
- cerrar la brecha entre “está implementado” y “queda claramente demostrado”

Este feedback nos sirve, sobre todo, para ajustar **cómo presentamos, justificamos y evidenciamos** el trabajo ya realizado, además de simplificar algunos puntos concretos de arquitectura donde sea posible.

---

## 7) Conclusión

El Sprint 2 de PacePal deja una base sólida en diseño, experiencia de usuario e integración general, pero necesita una mejor defensa documental y técnica en la parte de servidor. La mejora prioritaria no consiste solo en añadir más código, sino en hacer que el proyecto sea más fácil de entender, comprobar y evaluar.

La entrega final debe centrarse en tres ideas:

- mostrar el proceso de diseño, no solo el resultado
- simplificar y aclarar la arquitectura donde sea posible
- demostrar con evidencias directas que backend, sesiones, cookies y flujo general funcionan correctamente
