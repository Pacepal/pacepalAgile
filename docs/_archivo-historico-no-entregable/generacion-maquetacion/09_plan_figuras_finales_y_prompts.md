# 09 · Plan de figuras finales y prompts visuales

## 1. Objetivo de esta fase

Esta fase tiene como objetivo transformar los diagramás técnicos y esquemás documentales ya localizados en figuras finales más claras, limpias, agradables y coherentes con la identidad visual real de PacePal. No busca inventar funcionalidades, sustituir evidencias reales ni maquillar carencias con imágenes artificiales. La meta es preparar una guía de producción visual defendible antes de tocar la maquetación completa de la memoria.

Este plan diferencia de forma explícita los tipos de pieza que pueden aparecer en la memoria:

| Categoría                      | Definición operativa                                                                | Uso correcto                                             |
| ------------------------------ | ----------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Figura documental reconstruida | Figura redibujada a partir de codigo, SQL o documentación verificable               | Sustituir Mermaid técnico por una versión más legible    |
| Evidencia real                 | Captura o export existente del proyecto en funcionamiento o de una herramienta real | Defender pruebas, despliegue, accesibilidad y validación |
| Captura real pendiente         | Evidencia manual aún no generada, pero necesaria para cerrar defensa                | Crear manualmente desde el entorno real                  |
| Diagrama técnico final         | Versión visual final y editable de una figura documental                            | Insertar en cuerpo principal o anexos                    |
| Imagen decorativa              | Pieza visual de apoyo sin valor probatorio                                          | Portada, separadores o refuerzo estético                 |
| Anexo visual                   | Figura útil pero demasiado técnica o extensa para el cuerpo principal               | Reforzar explicación sin saturar narrativa               |
| Figura principal de memoria    | Figura nuclear para comprender planificación, arquitectura o funcionamiento         | Cuerpo principal                                         |

Regla de defensa: no se deben falsear capturas de Postman, XAMPP, phpMyAdmin, GitHub Pages, navegador, responsive real, audio integrado, video integrado, Lighthouse, WAVE, consola ni de la aplicación funcionando. Esas piezas solo pueden ser evidencias reales ya existentes o capturas manuales nuevas.

## 2. Reglas generales de diseño

### 2.1. Paleta PacePal localizada

Paleta confirmada por `docs/03-diw/media/paletaIdentidadVisual.png`, `docs/03-diw/sprint-1/03-guia-estilos.md` y `css/comun/variables.css`:

- Verde oscuro principal: `#2A400A`
- Lima principal: `#A1F227`
- Verde secundario de apoyo: `#5D8C16`
- Borde y línea suave: `#D9DFD2`
- Fondo claro de interfaz: `#F2F3F1`
- Texto principal de implementación actual: `#202720`
- Texto secundario de implementación actual: `#5F6C5F`

Observación de consistencia: la lámina DIW histórica usa `#1E1E1E` y `#5F6B55` para textos, mientras que el CSS actual usa `#202720` y `#5F6C5F`. Para figuras finales técnicas se recomienda priorizar los tokens del CSS actual y mantener la lámina DIW como referencia histórica, evitando mezclar ambas parejas de texto dentro de una misma figura.

### 2.2. tipografía recomendada

- tipografía principal: `Inter`
- Fallback documental: `Segoe UI`, `Tahoma`, `sans-serif`
- Uso recomendado: Inter para títulos, subtítulos y rótulos de nodos; fallback solo si la herramienta no permite incrustar la fuente

### 2.3. Tamaños mínimos y legibilidad

- Título principal de figura: 26-32 pt en A4
- Subtitulo opcional: 14-18 pt
- Texto interno de cajas o nodos: 11-12 pt mínimo real en A4
- Etiquetas auxiliares y leyendas: 9-10 pt mínimo
- Nunca bajar de 9 pt en exportación final

### 2.4. Estilo visual comun

- Cajas: fondo blanco o `#FBFCFA`, borde `1.5 px` en `#D9DFD2`, radio `8-12 px`
- Sombras: solo sutiles, preferiblemente equivalentes a `0 1px 6px rgba(19, 27, 17, 0.10)`
- Flechas: grosor `1.75-2 px`, color `#2A400A` o un tono derivado muy cercano, punta clara y direccion inequívoca
- Iconos: estilo Bootstrap Icons o lineal equivalente, simples, consistentes y nunca sustituyendo texto crítico
- Margenes: area segura de `18-22 mm` en A4 o `56-72 px` en mesa digital
- Espaciado entre grupos: `24-40 px`

### 2.5. Formato y exportación

- A4 horizontal para diagramás anchos: Gantt, casos de uso, componentes, arquitectura, responsive modular, mapa de evidencias
- A4 vertical para esquemás simples o portada
- Exportación final preferente: `SVG`
- Fuente editable recomendada: `draw.io`, `Figma`, `Canva editable`, `HTML/CSS exportable a PNG`, o Mermaid redibujado manualmente
- PNG solo como formato de inserción final cuando la maquetación lo exija
- Resolucion mínima para PNG: `1920 px` de ancho

### 2.6. Regla crítica sobre texto técnico

"El texto técnico debe mantenerse editable y revisable. No se deben generar diagramás finales con texto deformado, incompleto o inventado."

Aplicación práctica de la regla:

- No rasterizar texto cuando el contenido sea técnico
- Mantener todos los textos como capas editables
- Copiar literalmente los textos proporcionados
- No reinterpretar palabras
- No traducir terminos ya fijados
- No añadir etiquetas nuevas
- Revisar manualmente ortografía y acentos antes de exportar

### 2.7. Uso permitido de IA generativa

- No usar IA raster como opción principal en diagramás con mucho texto
- Usar IA, como mucho, para fondos suaves, textura ligera o elementos decorativos no críticos
- No usar IA para recrear capturas de herramientas, navegadores o evidencias reales
- No usar IA para escribir texto técnico dentro de cajas, nodos o flechas

## 3. Figuras candidatas a rediseño visual

| ID     | Figura actual                            | Ruta actual si existe                                                                                                                                                                                                                                                                                                                           | Tipo                           | Apartado de la memoria                          | Prioridad  | Rediseñar | Motivo                                                                                                               | Formato final recomendado             | Destino          |
| ------ | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ----------------------------------------------- | ---------- | --------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ---------------- |
| FIG-01 | Diagrama de Gantt relativo por sprints   | `docs/documentación-final/figuras/diagrama-gantt-pacepal.mmd`                                                                                                                                                                                                                                                                                   | Figura documental reconstruida | `3.1` Planificación                             | Alta       | Si        | La base actual es válida, pero necesita lectura inmediata en formato Gantt real por fases y sprints                  | `SVG editable + fuente draw.io/Figma` | Cuerpo principal |
| FIG-02 | Diagrama de casos de uso                 | `docs/documentación-final/figuras/diagrama-casos-uso-pacepal.mmd`                                                                                                                                                                                                                                                                               | Diagrama técnico final         | `4.1` Requisitos                                | Alta       | Si        | Es obligatorio para defensa y conviene sustituir el aspecto Mermaid por bloques claros y agrupados                   | `SVG editable + draw.io/Figma`        | Cuerpo principal |
| FIG-03 | Diagrama de clases simplificado          | `docs/documentación-final/figuras/diagrama-clases-pacepal.mmd`                                                                                                                                                                                                                                                                                  | Diagrama técnico final         | `4.1` Requisitos                                | Alta       | Si        | Debe quedar simplificado, legible y claramente basado en clases PHP reales                                           | `SVG editable + draw.io`              | Cuerpo principal |
| FIG-04 | Diagrama de componentes cliente-servidor | `docs/documentación-final/figuras/diagrama-componentes-pacepal.mmd`                                                                                                                                                                                                                                                                             | Diagrama técnico final         | `4.1` Requisitos / `4.2` Análisis               | Alta       | Si        | Es una de las figuras que mejor explica la arquitectura real actual                                                  | `SVG editable + draw.io/Figma`        | Cuerpo principal |
| FIG-05 | Esquema de arquitectura general          | `docs/documentación-final/figuras/esquema-arquitectura-general.mmd`                                                                                                                                                                                                                                                                             | Diagrama técnico final         | `4.2` Análisis                                  | Alta       | Si        | Debe diferenciar claramente entorno local real y fallback de GitHub Pages                                            | `SVG editable + draw.io/Figma`        | Cuerpo principal |
| FIG-06 | Flujo login / sesión / logout            | `docs/documentación-final/figuras/esquema-flujo-login-sesión.mmd`                                                                                                                                                                                                                                                                               | Diagrama técnico final         | `5.1` Pruebas funcionales / `9.2` Anexo técnico | Media-alta | Si        | Refuerza la defensa de sesiones, roles y fallback demo, pero con más detalle del que conviene en el cuerpo principal | `SVG editable + draw.io`              | Anexo            |
| FIG-07 | Flujo buscador AJAX / API                | `docs/documentación-final/figuras/esquema-flujo-buscador-ajax-api.mmd`                                                                                                                                                                                                                                                                          | Diagrama técnico final         | `5.1` Pruebas funcionales / `9.2` Anexo técnico | Media-alta | Si        | Explica muy bien el comportamiento real del escaparate React y del filtrado                                          | `SVG editable + draw.io`              | Anexo            |
| FIG-08 | Flujo carrito / selección temporal       | `docs/documentación-final/figuras/esquema-flujo-carrito-selección.mmd`                                                                                                                                                                                                                                                                          | Diagrama técnico final         | `5.1` Pruebas funcionales / `9.2` Anexo técnico | Media-alta | Si        | Ayuda a defender la lógica de carrito real y demo sin recurrir a demasiadas capturas                                 | `SVG editable + draw.io`              | Anexo            |
| FIG-09 | Modelo relacional simplificado           | `docs/documentación-final/figuras/modelo-relacional-pacepal.mmd` o `docs/evidencias/dwes/diagramaER.png`                                                                                                                                                                                                                                        | Figura documental reconstruida | `4.1` Modelo conceptual de datos                | Alta       | Si        | Conviene una versión clara y selectiva para lectura en A4; el ER completo puede mantenerse como apoyo                | `SVG editable + draw.io`              | Cuerpo principal |
| FIG-10 | Esquema responsive modular               | No existe figura final cerrada; la fuente esta en `css/actividades/responsiveActividades.css`, `css/admin/responsiveAdmin.css`, `css/landing/responsiveLanding.css`, `css/rutas/responsiveRutas.css`, `css/sobrenosotros/responsiveSobrenosotros.css`, `css/tienda/responsiveTienda.css`, `css/usuario/responsiveUsuario.css` y `css/react.css` | Diagrama técnico final         | `4.3` Diseño / `5.3` Usabilidad                 | Alta       | Si        | Es clave para defender que el responsive existe como implementación modular real y no solo como capturas             | `SVG editable + Figma/draw.io`        | Cuerpo principal |
| FIG-11 | Mapa de evidencias por módulo            | `docs/documentación-final/05_revision_calidad_documental.md` y `docs/evidencias/`                                                                                                                                                                                                                                                               | Anexo visual documental        | `9.2` Anexos / cierre de defensa                | Media      | Si        | Facilita la defensa oral y la navegación por la memoria, pero no es una figura nuclear del relato técnico            | `SVG editable + Figma/Canva`          | Anexo            |
| FIG-12 | Portada visual técnica de PacePal        | `docs/03-diw/media/logo.png`, `docs/03-diw/media/paletaIdentidadVisual.png`, `docs/03-diw/media/tipografiaIdentidadVisual.png`                                                                                                                                                                                                                  | Imagen decorativa controlada   | Portada o separador                             | Media      | Si        | Puede dar unidad visual a la memoria sin tocar evidencias reales ni inventar contenido                               | `SVG/Figma/Canva editable`            | Cuerpo principal |

Fuera de esta tabla quedan las piezas que ya funcionan como evidencia real y no necesitan rediseñarse: wireframes exportados, paleta, tipografía, capturas de accesibilidad, despliegue, Postman y capturas funcionales React ya localizadas.

## 4. Figuras que NO deben generarse con IA

| Evidencia                               | Por qué debe ser real                                                                  | Ruta esperada                                                                                                    | Estado                                              |
| --------------------------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| Captura de Postman                      | Debe demostrar peticiones reales, status y payloads reales, no una recreación estética | `docs/evidencias/dwes/postman1.png`, `docs/evidencias/dwes/postman2.png` y futuras capturas específicas por caso | Localizada, pero conviene completar casos concretos |
| Captura de XAMPP                        | Debe probar entorno local operativo real                                               | `docs/evidencias/despliegue/sprint-3/01-xampp-dashboard-localhost.png`                                           | Localizada                                          |
| Captura de phpMyAdmin                   | Debe probar la base de datos real cargada en local                                     | `docs/evidencias/despliegue/sprint-3/03-phpmyadmin-bd-pacepal.png`                                               | Localizada                                          |
| Captura de GitHub Pages                 | Debe demostrar publicación real por HTTPS                                              | `docs/evidencias/despliegue/sprint-3/08-github-pages-publicación-https.png`                                      | Localizada                                          |
| Captura responsive real                 | Debe mostrar comportamiento real por dispositivo, no un mockup inventado               | `docs/documentación-final/figuras/captura-tienda-video-mobile.png` y otras capturas finales equivalentes         | Pendiente                                           |
| Captura del video integrado             | Debe mostrar el `<video>` real dentro de la tienda React                               | `docs/documentación-final/figuras/captura-tienda-video-react.png`                                                | Pendiente                                           |
| Captura del audio si está integrado     | Debe confirmar si el bloque de audio existe visualmente en la rama final o no          | `docs/documentación-final/figuras/captura-contacto-audio-react.png`                                              | Pendiente                                           |
| Captura de navegación por teclado / voz | Debe probar la ayuda por voz y su activacion real en navegador                         | `docs/documentación-final/figuras/captura-accesibilidad-voz-teclado.png`                                         | Pendiente                                           |
| Captura de Lighthouse                   | Debe preservar el resultado real de auditoria                                          | `docs/evidencias/diw/sprint-2/lighthouse-accesibilidad.png`                                                      | Localizada                                          |
| Captura de WAVE                         | Debe preservar el resultado real de la herramienta                                     | `docs/evidencias/diw/sprint-2/wave-análisis.png`                                                                 | Localizada                                          |
| Captura de consola                      | Debe mostrar el estado real del navegador durante validación                           | `docs/documentación-final/figuras/captura-consola-sprint3-multimedia.png`                                        | Pendiente                                           |

La misma regla se aplica a cualquier captura de navegador, aplicación funcionando, responsive final, audio o video integrados, aunque no aparezcan de forma individualizada en esta tabla.

## 5. Especificación visual comun para todas las figuras

### 5.1. Tamaño

- A4 horizontal para diagramás anchos
- A4 vertical para esquemás simples y portada
- Exportación mínima: `1920 px` de ancho o `SVG`
- Conservar siempre una fuente editable separada de la exportación final

### 5.2. Composición

- Título arriba, alineado a la izquierda
- Subtitulo breve opcional solo si aclara el alcance
- Contenido central con agrupación por módulos o capas
- Leyenda pequeña solo cuando sea necesaria
- Pie interno discreto: `PacePal · Proyecto Agile Intermodular`
- Evitar decoración que compita con el contenido técnico

### 5.3. Textos

- Máximo `4-6` palabras por caja cuando sea posible
- Sin frases largas dentro de nodos
- Sin abreviaturas confusas
- Sin faltas de ortografía
- Acentos correctos
- Mayusculas solo en siglas reales como `API`, `JSON`, `PHP`, `PDO`
- Revisar manualmente antes de exportar

### 5.4. Colores

- Fondo claro: `#FFFFFF` o `#F2F3F1`
- Color principal: `#2A400A`
- Color secundario: `#A1F227`
- Verde de apoyo: `#5D8C16`
- Gris suave para contenedores: `#D9DFD2`
- Color de alerta solo si aporta información real
- Contraste mínimo AA cuando sea posible

### 5.5. Iconos

- Simples
- Lineales o Bootstrap Icons equivalentes
- Consistentes entre figuras
- No decorativos si no aportan
- Evitar iconos ambiguos o rellenos excesivos

### 5.6. Flechas

- Direccion clara
- Pocas líneas cruzadas
- agrupación por módulos
- Preferencia por flujo izquierda-derecha o arriba-abajo
- Mismo estilo de punta y grosor en toda la serie

### 5.7. Formato de trabajo recomendado

- Diagramás con mucho texto: `draw.io`, `Figma` o `SVG` nativo
- Portadas o mapas ligeros: `Figma`, `Canva editable`, `HTML/CSS exportable a PNG` o `SVG`
- Mermaid solo como base de reconstruccion, no como acabado final si se busca mejor legibilidad

## 6. Prompts hiper detallados por figura

### FIG-01 · Diagrama de Gantt PacePal

#### Objetivo

Explicar la planificación del proyecto por sprints con una lectura inmediata, limpia y horizontal, centrada en fases reales de trabajo y sin aparentar un calendario exacto que no exista documentalmente.

#### Fuente técnica/documental

- `docs/documentación-final/figuras/diagrama-gantt-pacepal.mmd`
- `docs/documentación-final/03_memoria_tecnica_pacepal_borrador.md`

#### Contenido exacto que debe aparecer

- Columnas: `Sprint 0`, `Sprint 1`, `Sprint 2`, `Sprint 3`, `Cierre`
- Filas: `Análisis inicial`, `Diseño DIW`, `Landing`, `Formularios`, `Carrito`, `Buscador AJAX`, `Backend/API`, `Sesiones y roles`, `Migración React`, `Multimedia/interactividad`, `Despliegue`, `Pruebas`, `Documentación final`
- Cobertura recomendada por sprint:
  - `Análisis inicial`: Sprint 0
  - `Diseño DIW`: Sprint 1 y Sprint 2
  - `Landing`: Sprint 1
  - `Formularios`: Sprint 1
  - `Carrito`: Sprint 2 y Sprint 3
  - `Buscador AJAX`: Sprint 2 y Sprint 3
  - `Backend/API`: Sprint 2 y Sprint 3
  - `Sesiones y roles`: Sprint 2 y Sprint 3
  - `Migración React`: Sprint 3
  - `Multimedia/interactividad`: Sprint 3
  - `Despliegue`: Sprint 3 y Cierre
  - `Pruebas`: Sprint 2, Sprint 3 y Cierre
  - `Documentación final`: Sprint 3 y Cierre

#### Estructura visual recomendada

- Tabla Gantt horizontal
- Primera columna fija con fases
- Cinco columnas de sprint con barras rectangulares redondeadas
- Leyenda pequeña opcional solo para distinguir `fase principal` y `fase de cierre`
- Lectura de izquierda a derecha

#### Paleta y estilo

- Fondo blanco o `#F2F3F1`
- Título en `#2A400A`
- Barras principales en `#A1F227`
- Barras de continuidad o cierre en `#5D8C16`
- Rejilla y bordes en `#D9DFD2`
- tipografía `Inter`

#### Texto exacto permitido

`Gantt de fases por sprint`, `Sprint 0`, `Sprint 1`, `Sprint 2`, `Sprint 3`, `Cierre`, `Análisis inicial`, `Diseño DIW`, `Landing`, `Formularios`, `Carrito`, `Buscador AJAX`, `Backend/API`, `Sesiones y roles`, `Migración React`, `Multimedia/interactividad`, `Despliegue`, `Pruebas`, `Documentación final`, `PacePal · Proyecto Agile Intermodular`

#### Prompt final para crear la figura

```text
Crear un diagrama técnico editable en SVG y archivo fuente en draw.io o Figma, formato A4 horizontal, estilo limpio y profesional, con mucho espacio en blanco y legibilidad alta en impresion. No generar una ilustracion artistica ni una imagen raster con texto.

Título exacto: "Gantt de fases por sprint".
Columnas exactas: "Sprint 0", "Sprint 1", "Sprint 2", "Sprint 3", "Cierre".
Filas exactas: "Análisis inicial", "Diseño DIW", "Landing", "Formularios", "Carrito", "Buscador AJAX", "Backend/API", "Sesiones y roles", "Migración React", "Multimedia/interactividad", "Despliegue", "Pruebas", "Documentación final".

Representar barras solo en estas combinaciones:
- Análisis inicial -> Sprint 0
- Diseño DIW -> Sprint 1 y Sprint 2
- Landing -> Sprint 1
- Formularios -> Sprint 1
- Carrito -> Sprint 2 y Sprint 3
- Buscador AJAX -> Sprint 2 y Sprint 3
- Backend/API -> Sprint 2 y Sprint 3
- Sesiones y roles -> Sprint 2 y Sprint 3
- Migración React -> Sprint 3
- Multimedia/interactividad -> Sprint 3
- Despliegue -> Sprint 3 y Cierre
- Pruebas -> Sprint 2, Sprint 3 y Cierre
- Documentación final -> Sprint 3 y Cierre

Usar tipografía Inter. Fondo claro. Título en #2A400A. Barras principales en #A1F227. Barras de continuidad o cierre en #5D8C16. Rejilla y líneas en #D9DFD2. Texto principal en #202720.

Mantener todos los textos como capas editables. No rasterizar texto. Copiar literalmente los textos proporcionados. No reinterpretar palabras. No añadir fechas exactas. No añadir semanas, meses ni hitos no documentados. No añadir iconos decorativos. Incluir un pie interno discreto con el texto: "PacePal · Proyecto Agile Intermodular".
```

#### Revisión manual obligatoria

- [ ] Textos revisados
- [ ] Barras colocadas en los sprints correctos
- [ ] Colores revisados
- [ ] Legibilidad A4 correcta
- [ ] Exportación SVG/PNG correcta

### FIG-02 · Diagrama de casos de uso

#### Objetivo

Mostrar los actores principales y sus casos de uso de forma clara y agrupada, evitando el típico diagrama saturado de elipses y líneas cruzadas.

#### Fuente técnica/documental

- `docs/documentación-final/figuras/diagrama-casos-uso-pacepal.mmd`
- `docs/documentación-final/03_memoria_tecnica_pacepal_borrador.md`
- `js/App.jsx`
- `src/api/index.php`

#### Contenido exacto que debe aparecer

- Actores: `Visitante`, `Usuario registrado`, `Administrador`, `Sistema`
- Bloques: `Navegación publica`, `Cuenta y sesión`, `Actividades/rutas`, `Tienda y carrito`, `Administración`, `Accesibilidad`
- Casos dentro de bloques:
  - `Navegación publica`: `Ver inicio y secciones publicas`, `Consultar rutas y detalle`, `Consultar actividades y detalle`, `Consultar tienda y detalle de producto`
  - `Cuenta y sesión`: `Abrir login y registro`, `Iniciar sesión`, `Cerrar sesión`, `Consultar perfil y pedidos`
  - `Actividades/rutas`: `Crear actividad sobre ruta existente`, `Unirse o salir de una actividad`
  - `Tienda y carrito`: `Gestionar carrito y finalizar pedido`
  - `Administración`: `Gestionar usuarios`, `Gestionar productos`, `Gestionar rutas`, `Gestionar actividades`, `Gestionar pedidos y reportes`
  - `Accesibilidad`: `Gestionar consentimiento de cookies`
- Acciones del actor `Sistema`: `Validar sesión y rol`, `Persistir datos y devolver JSON`

#### Estructura visual recomendada

- A4 horizontal
- Actores en laterales
- En el centro, seis bloques rectangulares o contenedores suaves por area funcional
- Cada bloque con `2-4` casos máximo, salvo administración
- Flechas simples actor -> bloque o actor -> caso sin cruces innecesarios
- Mantener `Sistema` separado como actor de soporte técnico, no como usuario humano

#### Paleta y estilo

- Contenedores de bloque con fondo `#FBFCFA`
- Títulos de bloque en `#2A400A`
- Casos de uso en pastillas blancas con borde `#D9DFD2`
- Actor destacado con acento `#A1F227` muy controlado
- Sin degradados ni sombras pesadas

#### Texto exacto permitido

`Casos de uso de PacePal`, `Visitante`, `Usuario registrado`, `Administrador`, `Sistema`, `Navegación publica`, `Cuenta y sesión`, `Actividades/rutas`, `Tienda y carrito`, `Administración`, `Accesibilidad`, `Ver inicio y secciones publicas`, `Consultar rutas y detalle`, `Consultar actividades y detalle`, `Consultar tienda y detalle de producto`, `Abrir login y registro`, `Iniciar sesión`, `Cerrar sesión`, `Consultar perfil y pedidos`, `Crear actividad sobre ruta existente`, `Unirse o salir de una actividad`, `Gestionar carrito y finalizar pedido`, `Gestionar usuarios`, `Gestionar productos`, `Gestionar rutas`, `Gestionar actividades`, `Gestionar pedidos y reportes`, `Gestionar consentimiento de cookies`, `Validar sesión y rol`, `Persistir datos y devolver JSON`, `PacePal · Proyecto Agile Intermodular`

#### Prompt final para crear la figura

```text
Crear un diagrama de casos de uso editable en SVG con fuente draw.io o Figma, formato A4 horizontal, muy limpio, ordenado y legible. No generar un UML clasico caótico lleno de líneas cruzadas. El objetivo es una figura documental clara para memoria, no una captura automatica de Mermaid.

Título exacto: "Casos de uso de PacePal".
Actores exactos: "Visitante", "Usuario registrado", "Administrador", "Sistema".
Bloques exactos: "Navegación publica", "Cuenta y sesión", "Actividades/rutas", "Tienda y carrito", "Administración", "Accesibilidad".
Casos exactos a incluir:
- Navegación publica: "Ver inicio y secciones publicas", "Consultar rutas y detalle", "Consultar actividades y detalle", "Consultar tienda y detalle de producto"
- Cuenta y sesión: "Abrir login y registro", "Iniciar sesión", "Cerrar sesión", "Consultar perfil y pedidos"
- Actividades/rutas: "Crear actividad sobre ruta existente", "Unirse o salir de una actividad"
- Tienda y carrito: "Gestionar carrito y finalizar pedido"
- Administración: "Gestionar usuarios", "Gestionar productos", "Gestionar rutas", "Gestionar actividades", "Gestionar pedidos y reportes"
- Accesibilidad: "Gestionar consentimiento de cookies"
- Sistema: "Validar sesión y rol", "Persistir datos y devolver JSON"

Organizar actores en los laterales y bloques funcionales en el centro. Usar rectangulos o grupos suaves en vez de demasiadas elipses. Mantener una direccion de lectura clara. Usar Inter, fondo blanco, líneas en #2A400A, acento puntual #A1F227, contenedores en #FBFCFA y bordes en #D9DFD2.

Mantener todos los textos como capas editables. No rasterizar texto. Copiar literalmente los textos proporcionados. No añadir actores nuevos. No traducir terminos. No añadir estereotipos UML, <<include>>, <<extend>> ni etiquetas no documentadas. Incluir pie interno discreto: "PacePal · Proyecto Agile Intermodular".
```

#### Revisión manual obligatoria

- [ ] Actores revisados
- [ ] Casos agrupados correctamente
- [ ] Sin líneas cruzadas confusas
- [ ] Texto completo y editable
- [ ] Exportación correcta

### FIG-03 · Diagrama de clases simplificado

#### Objetivo

Representar de forma simplificada las clases reales del backend PHP y sus relaciones principales, sin convertir la figura en un UML gigante imposible de leer.

#### Fuente técnica/documental

- `docs/documentación-final/figuras/diagrama-clases-pacepal.mmd`
- `src/api/index.php`
- `src/controllers/`
- `src/models/`
- `db/schema.sql`

#### Contenido exacto que debe aparecer

- Bloques de capa: `ApiRouter`, `Controladores`, `Modelos`, `Entidades`, `Base de datos`
- Clases reales:
  - `ApiRouter`
  - `AuthController`, `ProductoController`, `RutaController`, `ActividadController`, `PedidoController`, `UsuarioController`, `ReporteController`, `CookieController`
  - `ProductoModel`, `RutaModel`, `ActividadModel`, `PedidoModel`, `UsuarioModel`, `ReporteModel`
  - `Usuario`, `Ruta`, `Actividad`, `Articulo`, `Pedido`, `Reporte`
  - `PDO`
- Relaciones principales: `enruta`, `usa`, `consulta`, `persiste`, `realiza`, `crea`, `base`, `participa`, `reporta`, `es_reportado`, `contiene`

#### Estructura visual recomendada

- Cinco columnas o bandas horizontales por capa
- `ApiRouter` arriba o a la izquierda como punto de entrada
- Controladores agrupados en una sola banda
- Modelos en una banda inferior
- Entidades en una banda resumida
- `PDO` y `Base de datos` como capa final
- Reducir al mínimo las relaciones diagonales

#### Paleta y estilo

- Banda superior o títulos de capa en `#2A400A`
- Tarjetas de clase blancas con borde `#D9DFD2`
- Etiquetas de relación en gris verde suave `#5F6C5F`
- Acento lima solo para la capa más importante o para un pequeño hilo visual

#### Texto exacto permitido

`Diagrama de clases simplificado`, `ApiRouter`, `Controladores`, `Modelos`, `Entidades`, `Base de datos`, `AuthController`, `ProductoController`, `RutaController`, `ActividadController`, `PedidoController`, `UsuarioController`, `ReporteController`, `CookieController`, `ProductoModel`, `RutaModel`, `ActividadModel`, `PedidoModel`, `UsuarioModel`, `ReporteModel`, `Usuario`, `Ruta`, `Actividad`, `Articulo`, `Pedido`, `Reporte`, `PDO`, `enruta`, `usa`, `consulta`, `persiste`, `realiza`, `crea`, `base`, `participa`, `reporta`, `es_reportado`, `contiene`, `PacePal · Proyecto Agile Intermodular`

#### Prompt final para crear la figura

```text
Crear un diagrama de clases simplificado, editable en SVG con fuente draw.io, formato A4 horizontal. No hacer un UML exhaustivo. Debe ser una figura clara de memoria basada en clases PHP reales del proyecto.

Título exacto: "Diagrama de clases simplificado".
Capas exactas: "ApiRouter", "Controladores", "Modelos", "Entidades", "Base de datos".
Clases exactas a mostrar: "ApiRouter"; "AuthController", "ProductoController", "RutaController", "ActividadController", "PedidoController", "UsuarioController", "ReporteController", "CookieController"; "ProductoModel", "RutaModel", "ActividadModel", "PedidoModel", "UsuarioModel", "ReporteModel"; "Usuario", "Ruta", "Actividad", "Articulo", "Pedido", "Reporte"; "PDO".
Etiquetas de relación exactas: "enruta", "usa", "consulta", "persiste", "realiza", "crea", "base", "participa", "reporta", "es_reportado", "contiene".

Organizar la figura por capas, con el router como entrada, controladores debajo, modelos después, entidades resumidas y PDO/base de datos al final. Minimizar cruces. No mostrar cuerpos de metodos ni atributos extensos. Mantener Inter, fondo claro, bordes #D9DFD2, títulos #2A400A, texto #202720 y acentos muy moderados #A1F227.

Mantener todos los textos como capas editables. No rasterizar texto. Copiar literalmente nombres de clases y relaciones. No añadir clases no documentadas. No traducir nombres técnicos. No inventar metodos. Pie interno: "PacePal · Proyecto Agile Intermodular".
```

#### Revisión manual obligatoria

- [ ] Clases reales verificadas
- [ ] Sin clases inventadas
- [ ] Relaciones principales entendibles
- [ ] Tamaño legible en A4
- [ ] Exportación correcta

### FIG-04 · Diagrama de componentes

#### Objetivo

Mostrar la arquitectura cliente-servidor actual de PacePal con React, hooks, servicios, backend PHP, modelos y base de datos, incluyendo el fallback demo cuando corresponde.

#### Fuente técnica/documental

- `docs/documentación-final/figuras/diagrama-componentes-pacepal.mmd`
- `js/App.jsx`
- `js/services/api.js`
- `js/services/demo.js`
- `src/api/index.php`

#### Contenido exacto que debe aparecer

- `Cliente React`
- `js/App.jsx`
- `pages/`
- `js/components/`
- `js/hooks/`
- `api.js`
- `demo.js`
- `js/data/*.json`
- `Backend PHP`
- `src/api/index.php`
- `controllers/`
- `models/`
- `config/database.php + config/session.php`
- `MySQL / MariaDB pacepal`
- `localStorage + sessionStorage + cookies demo`
- Etiquetas de flujo: `fetch JSON`, `fallback demo`

#### Estructura visual recomendada

- Tres columnas principales: cliente, backend, persistencia/fallback
- Dentro del cliente, secuencia vertical `App -> pages/components -> hooks -> services`
- Dentro del backend, secuencia `router -> controllers -> models -> config`
- Base de datos abajo o a la derecha
- Fallback demo separado visualmente del backend real

#### Paleta y estilo

- Cliente React en bloque blanco con acentos lima muy sutiles
- Backend PHP en bloque verde muy suave o contenedor de borde verde oscuro
- Persistencia real y demo con diferenciación por contenedor, no por colores llamativos
- Flechas claras con texto pequeño y editable

#### Texto exacto permitido

`Diagrama de componentes de PacePal`, `Cliente React`, `js/App.jsx`, `pages/`, `js/components/`, `js/hooks/`, `api.js`, `demo.js`, `js/data/*.json`, `Backend PHP`, `src/api/index.php`, `controllers/`, `models/`, `config/database.php + config/session.php`, `MySQL / MariaDB pacepal`, `localStorage + sessionStorage + cookies demo`, `fetch JSON`, `fallback demo`, `PacePal · Proyecto Agile Intermodular`

#### Prompt final para crear la figura

```text
Crear un diagrama de componentes editable en SVG y fuente draw.io o Figma, formato A4 horizontal, muy claro y modular. Debe explicar la arquitectura actual de PacePal sin exagerar complejidad.

Título exacto: "Diagrama de componentes de PacePal".
Componentes exactos: "Cliente React", "js/App.jsx", "pages/", "js/components/", "js/hooks/", "api.js", "demo.js", "js/data/*.json", "Backend PHP", "src/api/index.php", "controllers/", "models/", "config/database.php + config/session.php", "MySQL / MariaDB pacepal", "localStorage + sessionStorage + cookies demo".
Etiquetas de flecha exactas: "fetch JSON", "fallback demo".

Organizar en tres columnas: cliente a la izquierda, backend en el centro, persistencia real y demo a la derecha o abajo. Dentro del cliente, ordenar App, páginas/componentes, hooks y servicios. Dentro del backend, ordenar router, controllers, models y config. Separar claramente el flujo real al backend del flujo de fallback demo.

Usar Inter, fondo blanco, contenedores con borde #D9DFD2, títulos #2A400A, texto #202720, acentos #A1F227 muy controlados. No usar iconos innecesarios. No convertirlo en un esquema de nube futurista.

Mantener todos los textos como capas editables. No rasterizar texto. Copiar literalmente los nombres proporcionados. No añadir carpetas nuevas. No inventar servicios. No cambiar nombres técnicos. Pie interno: "PacePal · Proyecto Agile Intermodular".
```

#### Revisión manual obligatoria

- [ ] Capas cliente/backend/fallback diferenciadas
- [ ] Texto de servicios y carpetas correcto
- [ ] Flechas revisadas
- [ ] Exportación editable conservada
- [ ] Versión PNG/SVG correcta

### FIG-05 · Esquema de arquitectura general

#### Objetivo

Explicar de forma defensable la arquitectura de ejecucion de PacePal diferenciando el entorno local real con PHP y MySQL del modo publicado en GitHub Pages con fallback estatico controlado.

#### Fuente técnica/documental

- `docs/documentación-final/figuras/esquema-arquitectura-general.mmd`
- `js/services/api.js`
- `js/services/demo.js`
- `src/api/index.php`
- `docs/04-dwec/sprint-3/cliente-react-github-pages.md`
- `docs/04-dwec/sprint-3/decision-fallback-github-pages.md`

#### Contenido exacto que debe aparecer

- `Usuario`
- `Navegador`
- `SPA React / Vite`
- `Hash routing y render de páginas`
- `Hooks de datos, sesión y carrito`
- `img/, assets/ y recursos multimedia`
- `api.js`
- `demo.js`
- `runtime detectado`
- `API PHP real`
- `src/api/index.php/api`
- `Controladores PHP`
- `Modelos PDO`
- `sesión PHP`
- `MySQL / MariaDB`
- `fallback controlado`
- `js/data/*.json`
- `localStorage + sessionStorage + cookies demo`
- `XAMPP / local`
- `GitHub Pages / publicación`

#### Estructura visual recomendada

- Dos carriles o dos zonas de entorno: `Local real` y `Publicación estatica`
- Parte superior para recorrido del usuario y del navegador
- Parte central para cliente React
- Parte inferior o derecha para decisiones de runtime y salida a backend real o fallback
- El carril de `XAMPP / local` debe terminar en `API PHP real -> sesión PHP -> Modelos PDO -> MySQL / MariaDB`
- El carril de `GitHub Pages / publicación` debe terminar en `fallback controlado -> js/data/*.json -> localStorage + sessionStorage + cookies demo`

#### Paleta y estilo

- Fondo claro
- Verde oscuro para rutas reales y títulos
- Lima solo para remarcar el punto de decisión `runtime detectado`
- Verde secundario para el carril de publicación estatica
- Contenedores suaves, sin efectos de nube ni iconografia excesiva

#### Texto exacto permitido

`Arquitectura general de PacePal`, `Usuario`, `Navegador`, `SPA React / Vite`, `Hash routing y render de páginas`, `Hooks de datos, sesión y carrito`, `img/, assets/ y recursos multimedia`, `api.js`, `demo.js`, `runtime detectado`, `API PHP real`, `src/api/index.php/api`, `Controladores PHP`, `Modelos PDO`, `sesión PHP`, `MySQL / MariaDB`, `fallback controlado`, `js/data/*.json`, `localStorage + sessionStorage + cookies demo`, `XAMPP / local`, `GitHub Pages / publicación`, `PacePal · Proyecto Agile Intermodular`

#### Prompt final para crear la figura

```text
Crear un esquema de arquitectura general editable en SVG con fuente draw.io o Figma, formato A4 horizontal. Debe separar claramente el entorno local real del modo publicado estatico con fallback, sin crear confusion entre ambos.

Título exacto: "Arquitectura general de PacePal".
Textos exactos a incluir: "Usuario", "Navegador", "SPA React / Vite", "Hash routing y render de páginas", "Hooks de datos, sesión y carrito", "img/, assets/ y recursos multimedia", "api.js", "demo.js", "runtime detectado", "API PHP real", "src/api/index.php/api", "Controladores PHP", "Modelos PDO", "sesión PHP", "MySQL / MariaDB", "fallback controlado", "js/data/*.json", "localStorage + sessionStorage + cookies demo", "XAMPP / local", "GitHub Pages / publicación".

Organizar la figura en dos carriles o zonas: una para "XAMPP / local" con backend real y otra para "GitHub Pages / publicación" con fallback controlado. Mantener arriba el recorrido Usuario -> Navegador -> SPA React / Vite. Desde "runtime detectado", dividir visualmente hacia backend real o fallback.

Usar Inter, fondo claro, títulos en #2A400A, textos en #202720, líneas y bordes en #D9DFD2, acento #A1F227 solo en el punto de decisión. No usar nubes, servidores 3D ni estilos futuristas.

Mantener todos los textos como capas editables. No rasterizar texto. Copiar literalmente los textos proporcionados. No inventar entornos de despliegue adicionales. No sugerir que GitHub Pages ejecuta PHP o MySQL. Incluir pie interno: "PacePal · Proyecto Agile Intermodular".
```

#### Revisión manual obligatoria

- [ ] Carril local real correcto
- [ ] Carril GitHub Pages correcto
- [ ] decisión de runtime entendible
- [ ] Sin mezcla falsa entre backend real y fallback
- [ ] Exportación correcta

### FIG-06 · Flujo login / sesión / logout

#### Objetivo

Resumir el flujo de autenticación real de PacePal y su comportamiento de fallback demo cuando la API PHP no está disponible.

#### Fuente técnica/documental

- `docs/documentación-final/figuras/esquema-flujo-login-sesión.mmd`
- `js/hooks/useSession.js`
- `src/api/index.php`
- `docs/04-dwec/sprint-3/decision-fallback-github-pages.md`

#### Contenido exacto que debe aparecer

- `Usuario`
- `React`
- `API PHP`
- `sesión PHP`
- `Fallback demo`
- `Usuario introduce credenciales`
- `React envia petición`
- `API válida credenciales`
- `PHP crea sesión`
- `React consulta sesión`
- `React actualiza estado`
- `Usuario navega autenticado`
- `Logout`
- `PHP destruye sesión`
- `React limpia estado`
- `localStorage + sessionStorage + cookie demo`

#### Estructura visual recomendada

- Flujo izquierda-derecha o arriba-abajo con bifurcación simple
- Tramo principal para `API PHP`
- Tramo alternativo más corto para `Fallback demo`
- El bloque `Logout` debe cerrar ambos caminos
- Mejor como diagrama de flujo, no como secuencia muy técnica si perjudica la lectura

#### Paleta y estilo

- Camino real en verde oscuro y blanco
- Camino de fallback en verde secundario suave
- decisión o bifurcación resaltada con lima `#A1F227`
- Sin demasiadas cajas ni texto secundario

#### Texto exacto permitido

`Flujo login / sesión / logout`, `Usuario`, `React`, `API PHP`, `sesión PHP`, `Fallback demo`, `Usuario introduce credenciales`, `React envia petición`, `API válida credenciales`, `PHP crea sesión`, `React consulta sesión`, `React actualiza estado`, `Usuario navega autenticado`, `Logout`, `PHP destruye sesión`, `React limpia estado`, `localStorage + sessionStorage + cookie demo`, `PacePal · Proyecto Agile Intermodular`

#### Prompt final para crear la figura

```text
Crear un diagrama técnico editable en SVG, formato A4 vertical u horizontal corto, centrado en el flujo de autenticación. Debe ser más legible que una secuencia Mermaid y apto para anexo técnico.

Título exacto: "Flujo login / sesión / logout".
Textos exactos a incluir: "Usuario", "React", "API PHP", "sesión PHP", "Fallback demo", "Usuario introduce credenciales", "React envia petición", "API válida credenciales", "PHP crea sesión", "React consulta sesión", "React actualiza estado", "Usuario navega autenticado", "Logout", "PHP destruye sesión", "React limpia estado", "localStorage + sessionStorage + cookie demo".

Representar un flujo principal con API real y una rama alternativa de fallback demo cuando la API no está disponible. El camino principal debe terminar en sesión PHP activa y estado autenticado. El camino de logout debe destruir sesión y limpiar el estado. El camino demo debe usar el texto "localStorage + sessionStorage + cookie demo".

Usar Inter, fondo claro, bordes #D9DFD2, títulos #2A400A, acento #A1F227 solo en la bifurcación o decisión. Mantener cajas limpias, pocas palabras por nodo y flechas muy claras.

Mantener todos los textos como capas editables. No rasterizar texto. Copiar literalmente los textos proporcionados. No añadir pasos nuevos. No inventar JWT, OAuth ni tecnologia no documentada. Pie interno: "PacePal · Proyecto Agile Intermodular".
```

#### Revisión manual obligatoria

- [ ] Flujo real correcto
- [ ] Rama demo correcta
- [ ] Logout cierra ambos caminos
- [ ] Texto editable y legible
- [ ] Exportación correcta

### FIG-07 · Flujo buscador AJAX / API

#### Objetivo

Explicar el comportamiento real del escaparate React: carga inicial de productos, uso de la API o del JSON de fallback y filtrado en cliente con resultados o sin resultados.

#### Fuente técnica/documental

- `docs/documentación-final/figuras/esquema-flujo-buscador-ajax-api.mmd`
- `js/App.jsx`
- `js/services/api.js`
- `docs/evidencias/dwec/sprint-3/README.md`

#### Contenido exacto que debe aparecer

- `Usuario`
- `Tienda React`
- `Carga inicial de productos`
- `GET /productos`
- `API PHP`
- `JSON paginado`
- `Carga de páginas restantes`
- `Fallback estatico`
- `js/data/productos.json`
- `Usuario escribe búsqueda`
- `Filtrado por nombre y descripción`
- `Galería actualizada`
- `Con resultados`
- `Sin resultados`

#### Estructura visual recomendada

- Flujo principal vertical
- Primer bloque para carga inicial del catálogo
- decisión central para `API PHP` o `Fallback estatico`
- Segundo bloque para filtrado en cliente
- Final con dos estados hermanos: `Con resultados` y `Sin resultados`

#### Paleta y estilo

- Carga inicial y cliente con verde oscuro
- Datos externos o fallback con verde secundario
- Estado vacío con gris muy suave, no rojo
- Muy pocas flechas cruzadas

#### Texto exacto permitido

`Flujo buscador AJAX / API`, `Usuario`, `Tienda React`, `Carga inicial de productos`, `GET /productos`, `API PHP`, `JSON paginado`, `Carga de páginas restantes`, `Fallback estatico`, `js/data/productos.json`, `Usuario escribe búsqueda`, `Filtrado por nombre y descripción`, `Galería actualizada`, `Con resultados`, `Sin resultados`, `PacePal · Proyecto Agile Intermodular`

#### Prompt final para crear la figura

```text
Crear un diagrama técnico editable en SVG, formato A4 vertical u horizontal corto, para explicar el flujo real del buscador React. Debe reflejar carga inicial desde API o fallback y filtrado en cliente, sin inventar una búsqueda server-side que no este documentada.

Título exacto: "Flujo buscador AJAX / API".
Textos exactos a incluir: "Usuario", "Tienda React", "Carga inicial de productos", "GET /productos", "API PHP", "JSON paginado", "Carga de páginas restantes", "Fallback estatico", "js/data/productos.json", "Usuario escribe búsqueda", "Filtrado por nombre y descripción", "Galería actualizada", "Con resultados", "Sin resultados".

Organizar la figura en dos fases: 1) carga inicial del catálogo; 2) filtrado y actualizacion de galería. Representar una decisión de origen de datos entre API PHP y fallback estatico. Después mostrar que el filtrado se realiza por nombre y descripción en el cliente y acaba en dos estados: con resultados o sin resultados.

Usar Inter, fondo claro, título #2A400A, acentos #A1F227 solo para decisiones, bordes #D9DFD2, texto #202720. Sin decoración extra ni iconos confusos.

Mantener todos los textos como capas editables. No rasterizar texto. Copiar literalmente los textos proporcionados. No añadir Elasticsearch, búsqueda por IA ni servicios no documentados. Pie interno: "PacePal · Proyecto Agile Intermodular".
```

#### Revisión manual obligatoria

- [ ] No se inventa búsqueda server-side no documentada
- [ ] Rama API y rama fallback correctas
- [ ] Estado con resultados y sin resultados visibles
- [ ] Texto editable
- [ ] Exportación correcta

### FIG-08 · Flujo carrito / selección temporal

#### Objetivo

Explicar el ciclo funcional del carrito de PacePal tanto en modo real como en modo demo: alta, cambio de cantidad, eliminación, recálculo y confirmacion de pedido cuando aplica.

#### Fuente técnica/documental

- `docs/documentación-final/figuras/esquema-flujo-carrito-selección.mmd`
- `js/services/demo.js`
- `src/api/index.php`
- `docs/evidencias/dwec/sprint-3/README.md`

#### Contenido exacto que debe aparecer

- `Usuario`
- `Añadir al carrito`
- `Actualizar cantidad`
- `Eliminar producto`
- `Recalcular contador`
- `Recalcular total`
- `Finalizar pedido`
- `API PHP`
- `Pedido real`
- `Fallback demo`
- `localStorage`
- `Pedido demo realizado`
- `Carrito vacío + mensaje final`

#### Estructura visual recomendada

- Flujo principal desde `Añadir al carrito`
- Rama intermedia para `API PHP` o `Fallback demo`
- Bucle corto de mantenimiento para actualizar o eliminar
- Cierre con `Finalizar pedido`
- Salida final única: `Carrito vacío + mensaje final`

#### Paleta y estilo

- Pasos base en blanco con borde suave
- Camino real en verde oscuro
- Camino demo en verde de apoyo
- decisión resaltada con lima
- Evitar colores rojos salvo error real documentado, que aqui no es necesario

#### Texto exacto permitido

`Flujo carrito / selección temporal`, `Usuario`, `Añadir al carrito`, `Actualizar cantidad`, `Eliminar producto`, `Recalcular contador`, `Recalcular total`, `Finalizar pedido`, `API PHP`, `Pedido real`, `Fallback demo`, `localStorage`, `Pedido demo realizado`, `Carrito vacío + mensaje final`, `PacePal · Proyecto Agile Intermodular`

#### Prompt final para crear la figura

```text
Crear un diagrama técnico editable en SVG, formato A4 vertical u horizontal corto, para explicar el flujo del carrito de PacePal. Debe servir como anexo técnico claro y no como captura de interfaz.

Título exacto: "Flujo carrito / selección temporal".
Textos exactos a incluir: "Usuario", "Añadir al carrito", "Actualizar cantidad", "Eliminar producto", "Recalcular contador", "Recalcular total", "Finalizar pedido", "API PHP", "Pedido real", "Fallback demo", "localStorage", "Pedido demo realizado", "Carrito vacío + mensaje final".

Organizar el flujo desde el alta al carrito hacia una bifurcación entre API PHP y fallback demo. Mostrar un pequeño bucle para actualizar cantidad o eliminar producto, siempre conectado con recálculo de contador y total. El cierre debe pasar por "Finalizar pedido" y acabar en "Carrito vacío + mensaje final".

Usar Inter, fondo claro, bordes #D9DFD2, texto #202720, títulos #2A400A, acentos #A1F227 solo para decisión y verde de apoyo #5D8C16 para el camino demo.

Mantener todos los textos como capas editables. No rasterizar texto. Copiar literalmente los textos proporcionados. No añadir pasarela de pago, email de confirmacion ni pasos no documentados. Pie interno: "PacePal · Proyecto Agile Intermodular".
```

#### Revisión manual obligatoria

- [ ] Pasos de carrito completos
- [ ] Rama real y rama demo correctas
- [ ] Salida final clara
- [ ] Texto editable
- [ ] Exportación correcta

### FIG-09 · Modelo relacional simplificado

#### Objetivo

Mostrar el modelo relacional real de PacePal de forma simplificada, clara y legible en A4, usando exclusivamente nombres de tablas y campos reales de `db/schema.sql`.

#### Fuente técnica/documental

- `docs/documentación-final/figuras/modelo-relacional-pacepal.mmd`
- `db/schema.sql`
- `docs/evidencias/dwes/diagramaER.png`

#### Contenido exacto que debe aparecer

- Grupos visuales:
  - `Usuarios y roles`
  - `Catálogo`
  - `Rutas y actividades`
  - `Pedidos`
  - `Reportes`
- Tablas exactas:
  - `usuarios`: `id_usuario`, `nombre`, `email`, `rol`
  - `Categorías`: `id_Categoría`, `nombre`
  - `articulos`: `id_articulo`, `nombre`, `precio`, `stock`, `id_Categoría`
  - `rutas`: `id_ruta`, `nombre`, `distancia`, `dificultad`
  - `actividades`: `id_actividad`, `id_ruta`, `id_usuario_creador`, `fecha`, `hora`, `estado`
  - `participaciones`: `id_participacion`, `id_usuario`, `id_actividad`
  - `pedidos`: `id_pedido`, `id_usuario`, `fecha`, `total`, `estado`
  - `detalle_pedido`: `id_detalle`, `id_pedido`, `id_articulo`, `cantidad`, `precio_unitario`
  - `reportes`: `id_reporte`, `id_usuario_reporta`, `id_usuario_reportado`, `id_actividad`, `estado`
- Relaciones principales:
  - `categorías -> articulos`
  - `usuarios -> pedidos`
  - `pedidos -> detalle_pedido`
  - `articulos -> detalle_pedido`
  - `rutas -> actividades`
  - `usuarios -> actividades`
  - `usuarios -> participaciones`
  - `actividades -> participaciones`
  - `usuarios -> reportes`
  - `actividades -> reportes`

#### Estructura visual recomendada

- A4 horizontal
- Cinco grupos por color de fondo muy suave o por contenedor
- Relaciones verticales u horizontales cortas
- Los grupos `Usuarios y roles` y `Rutas y actividades` a la izquierda
- `Catálogo` y `Pedidos` en zona central o derecha
- `Reportes` como bloque de moderación separado pero conectado

#### Paleta y estilo

- Títulos de grupo en `#2A400A`
- Tablas blancas con borde suave
- Encabezados de tabla en verde oscuro con texto blanco o muy oscuro si se necesita imprimir mejor
- Relaciones en gris verdoso suave
- Lima solo para remarcar PK/FK si hace falta, nunca para saturar

#### Texto exacto permitido

`Modelo relacional simplificado`, `Usuarios y roles`, `Catálogo`, `Rutas y actividades`, `Pedidos`, `Reportes`, `usuarios`, `id_usuario`, `nombre`, `email`, `rol`, `Categorías`, `id_Categoría`, `articulos`, `id_articulo`, `precio`, `stock`, `id_Categoría`, `rutas`, `id_ruta`, `distancia`, `dificultad`, `actividades`, `id_actividad`, `id_ruta`, `id_usuario_creador`, `fecha`, `hora`, `estado`, `participaciones`, `id_participacion`, `id_usuario`, `id_actividad`, `pedidos`, `id_pedido`, `id_usuario`, `total`, `detalle_pedido`, `id_detalle`, `id_pedido`, `id_articulo`, `cantidad`, `precio_unitario`, `reportes`, `id_reporte`, `id_usuario_reporta`, `id_usuario_reportado`, `PacePal · Proyecto Agile Intermodular`

#### Prompt final para crear la figura

```text
Crear un modelo relacional simplificado editable en SVG con fuente draw.io, formato A4 horizontal, legible en impresion y basado solo en tablas y campos reales de db/schema.sql.

Título exacto: "Modelo relacional simplificado".
Grupos exactos: "Usuarios y roles", "Catálogo", "Rutas y actividades", "Pedidos", "Reportes".
Tablas exactas y campos visibles:
- usuarios: id_usuario, nombre, email, rol
- categorías: id_Categoría, nombre
- articulos: id_articulo, nombre, precio, stock, id_Categoría
- rutas: id_ruta, nombre, distancia, dificultad
- actividades: id_actividad, id_ruta, id_usuario_creador, fecha, hora, estado
- participaciones: id_participacion, id_usuario, id_actividad
- pedidos: id_pedido, id_usuario, fecha, total, estado
- detalle_pedido: id_detalle, id_pedido, id_articulo, cantidad, precio_unitario
- reportes: id_reporte, id_usuario_reporta, id_usuario_reportado, id_actividad, estado

Mostrar solo relaciones principales entre estas tablas. No añadir tablas inexistentes. No crear una tabla "roles". No crear una tabla "carrito". El campo rol ya pertenece a usuarios. Mantener la figura clara y compacta.

Usar Inter, fondo claro, títulos #2A400A, bordes #D9DFD2, texto #202720, apoyos en #5D8C16 y acento #A1F227 solo si ayuda a distinguir PK/FK.

Mantener todos los textos como capas editables. No rasterizar texto. Copiar literalmente nombres de tablas y campos. No traducir nombres SQL. Pie interno: "PacePal · Proyecto Agile Intermodular".
```

#### Revisión manual obligatoria

- [ ] Nombres de tablas exactos
- [ ] Sin tablas inventadas
- [ ] Relaciones principales correctas
- [ ] Legibilidad A4 correcta
- [ ] Exportación correcta

### FIG-10 · Esquema responsive modular

#### Objetivo

Explicar visualmente que el responsive de PacePal está implementado por módulos CSS reales y que las capturas por dispositivo son una evidencia complementaria, no la implementación en si.

#### Fuente técnica/documental

- `docs/documentación-final/07b_busqueda_diagramas_y_responsive.md`
- `css/estilos.css`
- `css/react.css`
- `css/actividades/responsiveActividades.css`
- `css/admin/responsiveAdmin.css`
- `css/landing/responsiveLanding.css`
- `css/rutas/responsiveRutas.css`
- `css/sobrenosotros/responsiveSobrenosotros.css`
- `css/tienda/responsiveTienda.css`
- `css/usuario/responsiveUsuario.css`

#### Contenido exacto que debe aparecer

- `Responsive implementado por módulos`
- `css/estilos.css`
- `css/react.css`
- `responsiveLanding.css`
- `responsiveTienda.css`
- `responsiveRutas.css`
- `responsiveActividades.css`
- `responsiveUsuario.css`
- `responsiveAdmin.css`
- `responsiveSobrenosotros.css`
- `Capa React/global`
- `Breakpoints detectados: 576 px, 640 px, 768 px, 992 px, 1200 px`
- `Las capturas finales por dispositivo son evidencias visuales, no la implementación en si`

#### Estructura visual recomendada

- Nodo central `css/estilos.css`
- Nodo complementario `css/react.css` como capa React/global
- Ramificaciones a los siete archivos responsive modulares
- A un lado, una nota o bloque de aclaración con la frase sobre capturas finales
- No usar mockups de móvil como sustituto de la implementación

#### Paleta y estilo

- Centro en verde oscuro
- Módulos en tarjetas blancas con borde suave
- Nota aclaratoria en fondo gris claro o verde muy suave
- Lima usada solo para resaltar la idea de modularidad

#### Texto exacto permitido

`Responsive implementado por módulos`, `css/estilos.css`, `css/react.css`, `responsiveLanding.css`, `responsiveTienda.css`, `responsiveRutas.css`, `responsiveActividades.css`, `responsiveUsuario.css`, `responsiveAdmin.css`, `responsiveSobrenosotros.css`, `Capa React/global`, `Breakpoints detectados: 576 px, 640 px, 768 px, 992 px, 1200 px`, `Las capturas finales por dispositivo son evidencias visuales, no la implementación en si`, `PacePal · Proyecto Agile Intermodular`

#### Prompt final para crear la figura

```text
Crear un esquema técnico editable en SVG con fuente draw.io o Figma, formato A4 horizontal, para explicar el responsive modular de PacePal. No hacer una composición de teléfonos o pantallas falsas. Debe ser un mapa de implementación CSS real.

Título exacto: "Responsive implementado por módulos".
Textos exactos a incluir: "css/estilos.css", "css/react.css", "responsiveLanding.css", "responsiveTienda.css", "responsiveRutas.css", "responsiveActividades.css", "responsiveUsuario.css", "responsiveAdmin.css", "responsiveSobrenosotros.css", "Capa React/global", "Breakpoints detectados: 576 px, 640 px, 768 px, 992 px, 1200 px", "Las capturas finales por dispositivo son evidencias visuales, no la implementación en si".

Organizar la figura con "css/estilos.css" como nodo central legacy, "css/react.css" como capa React/global y ramificaciones claras hacia cada archivo responsive por sección. Incluir una nota lateral con la frase completa sobre las capturas finales por dispositivo.

Usar Inter, fondo blanco, títulos #2A400A, bordes #D9DFD2, texto #202720, acento #A1F227 solo para destacar modularidad. No mostrar capturas de pantalla inventadas. No convertir el responsive en un collage de dispositivos.

Mantener todos los textos como capas editables. No rasterizar texto. Copiar literalmente los nombres de archivo y la frase de aclaración. No añadir breakpoints que no esten listados. Pie interno: "PacePal · Proyecto Agile Intermodular".
```

#### Revisión manual obligatoria

- [ ] Archivos responsive correctos
- [ ] Mensaje sobre capturas finales presente
- [ ] No parece una captura falsa
- [ ] Breakpoints correctos
- [ ] Exportación correcta

### FIG-11 · Mapa de evidencias por módulo

#### Objetivo

Sintetizar en una sola figura donde se encuentra la documentación, el codigo o evidencia y las pruebas o capturas de cada módulo implicado en la memoria.

#### Fuente técnica/documental

- `docs/documentación-final/05_revision_calidad_documental.md`
- `docs/documentación-final/04_indice_figuras_tablas_evidencias.md`
- `docs/evidencias/`
- árbol real del repositorio

#### Contenido exacto que debe aparecer

- módulos: `Agile/IPE`, `Sostenibilidad`, `DIW`, `DWEC`, `DWES`, `Despliegue`, `Digitalizacion`, `Documentación final`
- Columnas o niveles: `documentación`, `Codigo / evidencia`, `Pruebas / capturas`
- Referencias minimás por módulo:
  - `Agile/IPE`: `docs/01-requisitos/`, `docs/02-agile/`, `docs/evidencias/01-sprint0/`
  - `Sostenibilidad`: `docs/07-sostenibilidad/`, `docs/07-sostenibilidad/concurso/`
  - `DIW`: `docs/03-diw/`, `css/`, `docs/evidencias/diw/`
  - `DWEC`: `docs/04-dwec/`, `js/`, `pages/`, `docs/evidencias/dwec/`, `tests/react-sprint-3/`
  - `DWES`: `docs/05-dwes/`, `src/`, `db/`, `docs/evidencias/dwes/`, `tests/postman/`
  - `Despliegue`: `docs/despliegue/`, `docs/evidencias/despliegue/`
  - `Digitalizacion`: `README.md`, `package.json`, `vite.config.js`, `scripts/`, `tests/`
  - `Documentación final`: `docs/documentación-final/`

#### Estructura visual recomendada

- Matriz de ocho filas por tres columnas
- Cada módulo en una tarjeta o fila clara
- Cada columna con dos o tres rutas cortas máximo
- Sin saturar con árboles completos
- Figura apta como anexo o como apoyo a defensa oral

#### Paleta y estilo

- Encabezados de columna en verde oscuro
- Filas alternas en blanco y gris claro muy suave
- Uso moderado del lima para resaltar módulos clave o separadores
- Iconografia opcional mínima, por ejemplo carpeta o documento, solo si no molesta

#### Texto exacto permitido

`Mapa de evidencias por módulo`, `Agile/IPE`, `Sostenibilidad`, `DIW`, `DWEC`, `DWES`, `Despliegue`, `Digitalizacion`, `Documentación final`, `documentación`, `Codigo / evidencia`, `Pruebas / capturas`, `docs/01-requisitos/`, `docs/02-agile/`, `docs/evidencias/01-sprint0/`, `docs/07-sostenibilidad/`, `docs/07-sostenibilidad/concurso/`, `docs/03-diw/`, `css/`, `docs/evidencias/diw/`, `docs/04-dwec/`, `js/`, `pages/`, `docs/evidencias/dwec/`, `tests/react-sprint-3/`, `docs/05-dwes/`, `src/`, `db/`, `docs/evidencias/dwes/`, `tests/postman/`, `docs/despliegue/`, `docs/evidencias/despliegue/`, `README.md`, `package.json`, `vite.config.js`, `scripts/`, `tests/`, `docs/documentación-final/`, `PacePal · Proyecto Agile Intermodular`

#### Prompt final para crear la figura

```text
Crear una matriz visual editable en SVG con fuente Figma, draw.io o Canva editable, formato A4 horizontal. Debe funcionar como mapa de evidencias por módulo y como guia de defensa, no como poster decorativo.

Título exacto: "Mapa de evidencias por módulo".
Columnas exactas: "documentación", "Codigo / evidencia", "Pruebas / capturas".
Filas exactas: "Agile/IPE", "Sostenibilidad", "DIW", "DWEC", "DWES", "Despliegue", "Digitalizacion", "Documentación final".

Contenido exacto por fila:
- Agile/IPE -> docs/01-requisitos/ ; docs/02-agile/ ; docs/evidencias/01-sprint0/
- Sostenibilidad -> docs/07-sostenibilidad/ ; docs/07-sostenibilidad/concurso/
- DIW -> docs/03-diw/ ; css/ ; docs/evidencias/diw/
- DWEC -> docs/04-dwec/ ; js/ ; pages/ ; docs/evidencias/dwec/ ; tests/react-sprint-3/
- DWES -> docs/05-dwes/ ; src/ ; db/ ; docs/evidencias/dwes/ ; tests/postman/
- Despliegue -> docs/despliegue/ ; docs/evidencias/despliegue/
- Digitalizacion -> README.md ; package.json ; vite.config.js ; scripts/ ; tests/
- Documentación final -> docs/documentación-final/

Disenar una matriz muy clara, con cada módulo en una fila y solo las rutas indicadas. No añadir carpetas nuevas. No inventar categorías. No convertirlo en un mapa mental caótico. Usar Inter, fondo claro, títulos #2A400A, bordes #D9DFD2, texto #202720 y acentos #A1F227 solo para resaltar columnas o separadores.

Mantener todos los textos como capas editables. No rasterizar texto. Copiar literalmente los nombres y rutas proporcionados. Pie interno: "PacePal · Proyecto Agile Intermodular".
```

#### Revisión manual obligatoria

- [ ] Módulos completos
- [ ] Rutas correctas
- [ ] Sin categorías inventadas
- [ ] Lectura A4 clara
- [ ] Exportación correcta

### FIG-12 · Portada visual técnica de PacePal

#### Objetivo

Crear una portada o separador opcional coherente con la identidad visual real de PacePal, utilizable en memoria sin introducir datos personales ni simular evidencias.

#### Fuente técnica/documental

- `docs/03-diw/media/logo.png`
- `docs/03-diw/media/paletaIdentidadVisual.png`
- `docs/03-diw/media/tipografiaIdentidadVisual.png`
- `docs/03-diw/sprint-1/03-guia-estilos.md`

#### Contenido exacto que debe aparecer

- `PacePal`
- `Proyecto Agile Intermodular`
- `2º DAW`
- Logotipo real de PacePal sin reinterpretarlo

#### Estructura visual recomendada

- Formato A4 vertical
- Mucho espacio en blanco
- Logo original en zona superior o central
- Nombre del proyecto dominante
- Subtitulos cortos debajo
- Puede usarse una banda lateral o inferior verde muy limpia
- Sin fotografias ni collage de pantallas

#### Paleta y estilo

- Fondo blanco o `#F2F3F1`
- Verde oscuro `#2A400A` como base tipografica
- Lima `#A1F227` en una línea, banda o acento controlado
- Posible apoyo de `#5D8C16` en detalles secundarios
- tipografía `Inter`
- Si se usa IA generativa, solo para una textura o fondo abstracto muy suave y sin texto

#### Texto exacto permitido

`PacePal`, `Proyecto Agile Intermodular`, `2º DAW`

#### Prompt final para crear la figura

```text
Crear una portada visual técnica editable en SVG, Figma o Canva editable, formato A4 vertical, muy limpia, moderna, profesional y legible en impresion. Debe respetar la identidad visual real de PacePal y usar el logotipo original sin reinterpretarlo.

Contenido textual exacto: "PacePal", "Proyecto Agile Intermodular", "2º DAW".
Usar el logo real de PacePal como elemento central o superior. Mantener mucho espacio en blanco. Componer con tipografía Inter, color principal #2A400A, acento #A1F227 y apoyo #5D8C16 de forma muy contenida.

No incluir nombres de alumnos, centro, tutor, fecha ni datos personales si no se proporcionan aparte. No insertar capturas de la app. No usar fondos oscuros que dificulten impresion. No usar efectos futuristas, brillos, neones ni collage de iconos.

Si la herramienta admite IA generativa, usarla solo para un fondo abstracto muy suave sin texto crítico. Todo el texto final debe mantenerse en capas editables. No rasterizar texto. No reinterpretar el logotipo. No añadir palabras nuevas.
```

#### Revisión manual obligatoria

- [ ] Logo correcto
- [ ] Textos exactos
- [ ] Sin datos personales no solicitados
- [ ] Legibilidad en A4
- [ ] Fuente editable conservada

## 7. Orden recomendado de creación

Orden sugerido de producción:

1. `FIG-02` · Diagrama de casos de uso
2. `FIG-04` · Diagrama de componentes
3. `FIG-05` · Esquema de arquitectura general
4. `FIG-09` · Modelo relacional simplificado
5. `FIG-01` · Diagrama de Gantt
6. `FIG-03` · Diagrama de clases simplificado
7. `FIG-10` · Esquema responsive modular
8. `FIG-06` · Flujo login / sesión / logout
9. `FIG-07` · Flujo buscador AJAX / API
10. `FIG-08` · Flujo carrito / selección temporal
11. `FIG-11` · Mapa de evidencias por módulo
12. `FIG-12` · Portada visual técnica

Justificación del orden:

- Primero, las figuras más obligatorias por rúbrica y defensa técnica directa
- Después, las que sustituyen pendientes importantes de arquitectura y datos
- Luego, los flujos detallados que refuerzan anexos y explicación oral
- Al final, las piezas de apoyo o embellecimiento documental

## 8. Checklist antes de insertar en la memoria

- [ ] La figura no inventa funcionalidades.
- [ ] La figura usa la paleta real PacePal.
- [ ] El texto está revisado manualmente.
- [ ] No hay faltas de ortografía.
- [ ] No hay palabras deformadas.
- [ ] Las flechas se entienden.
- [ ] La figura es legible en A4.
- [ ] La figura tiene pie de figura.
- [ ] La figura está en PNG/SVG.
- [ ] La fuente editable se conserva.
- [ ] está claro si es evidencia real o diagrama documental.
