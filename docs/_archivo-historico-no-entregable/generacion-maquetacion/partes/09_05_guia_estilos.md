# Anexo 9.5 — Guía de estilos

La guía de estilos de PacePal define los criterios visuales, de interfaz y de contenido
para mantener coherencia en todas las pantallas. Este anexo resume la guía para que la
memoria sea autocontenida. Como fuente de trabajo se utilizó el documento interno
`docs/03-diw/sprint-1/03-guia-estilos.md`, elaborado en el Sprint 1 del módulo DIW.

---

## Identidad visual

PacePal tiene una identidad visual clara y funcional: conecta visualmente con el entorno
natural y la actividad al aire libre, sin sobrecargar la interfaz con elementos decorativos.
La paleta, la tipografía y los iconos están elegidos para maximizar la legibilidad y la
coherencia entre pantallas.

> **[INSERTAR FIGURA C1 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/media/logo.png`
> _Figura C1. Logotipo principal de PacePal._

---

## Paleta cromática

> **[INSERTAR FIGURA C2 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/media/paletaIdentidadVisual.png`
> _Figura C2. Paleta de color corporativa de PacePal._

| Token de color      | Valor                           | Uso                                                        |
| ------------------- | ------------------------------- | ---------------------------------------------------------- |
| `--color-primary`   | Verde oscuro (`#2A400A`)        | Color de marca, cabecera, botones primarios, pie de página |
| `--color-accent`    | Verde lima (`#A1F227`)          | Acentos, CTA secundarios, destacados, subrayados de título |
| `--color-bg`        | Blanco (`#FFFFFF`)              | Fondos principales de sección y documento                  |
| `--color-bg-soft`   | Gris muy claro                  | Fondos de sección alternos, tarjetas, cajas de código      |
| `--color-text`      | Negro / gris oscuro (`#1E1E1E`) | Texto principal en todas las pantallas                     |
| `--color-text-soft` | Gris medio (`#5F6B55`)          | Texto secundario, labels, subtítulos, pie de figura        |

La regla cromática aplicada en la composición de pantallas es 60-30-10: 60 % color base
neutro (blanco y gris claro), 30 % color de marca (verde oscuro en cabecera, pie y
botones primarios), 10 % color de acento (verde lima para destacados y CTAs).

---

## Tipografía

> **[INSERTAR FIGURA C3 AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/media/tipografiaIdentidadVisual.png`
> _Figura C3. Sistema tipográfico de PacePal._

- **Fuente principal:** Inter (cargada desde Google Fonts).
- **Usos:** títulos, subtítulos, cuerpo de texto, etiquetas y botones.
- **Pesos:** 400 para cuerpo, 600 para subtítulos y labels, 700 para títulos y botones.
- **Tamaño base:** 16 px; ajuste responsivo con clases Bootstrap o `rem`.
- **Altura de línea:** 1.5 para lectura cómoda en bloque de texto.

Bootstrap 5 complementa con sus clases de utilidades de texto (`fw-bold`, `text-muted`,
`fs-*`) para ajustes puntuales sin romper la coherencia tipográfica.

---

## Iconografía

- **Sistema principal:** Bootstrap Icons (v1.11.3).
- **Usos:** botones de acción, elementos de navegación, tarjetas de actividad y producto,
  formularios y estados.
- **Tamaño base:** 1 rem; variaciones puntuales hasta 1.5 rem para iconos de énfasis.
- **Color:** hereda el color del elemento padre; en botones sigue la paleta cromática.

> **[INSERTAR FIGURA DE ICONOGRAFÍA AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/media/pacepal_iconografia.png`
> _Figura C4. Sistema de iconografía de PacePal basado en Bootstrap Icons._

---

## Espaciado

- Sistema de espaciado basado en múltiplos de 4 px y 8 px.
- Márgenes y paddings coherentes con las utilidades `m-*` y `p-*` de Bootstrap 5.
- Separación visual entre bloques de sección mediante `padding` generoso (mínimo 48 px en
  escritorio, reducido a 24 px en móvil).

---

## Botones

| Variante      | Uso                                       | Color de fondo              | Color de texto             |
| ------------- | ----------------------------------------- | --------------------------- | -------------------------- |
| Primario      | Acción principal, envío de formulario     | Verde oscuro (`#2A400A`)    | Blanco                     |
| Secundario    | Acción alternativa, cancelar, ver detalle | Contorno verde o gris claro | Verde oscuro o gris oscuro |
| Peligro       | Eliminar, acción destructiva              | Rojo Bootstrap (`#dc3545`)  | Blanco                     |
| Deshabilitado | Estado no activo                          | Gris claro                  | Gris medio                 |

---

## Formularios

- Campos con borde claro (`#D9DFD2`); el borde cambia al verde primario en `:focus`.
- Labels visibles siempre sobre o junto al campo; nunca solo placeholder.
- Mensajes de error bajo el campo en color de alerta (rojo Bootstrap o variante).
- Mensajes de confirmación en verde o acompañados de icono positivo.
- Campos obligatorios indicados con asterisco visible y accesible.

---

## Tarjetas

- Bordes redondeados (`border-radius: 8–12 px`) y sombra suave (`box-shadow` ligera).
- Estructura: imagen arriba (si aplica) → título → descripción resumida → botón de acción.
- Tamaño coherente en el grid responsive de cada sección.
- En listado de actividades: datos clave (fecha, nivel, ritmo, plazas) visibles sin entrar
  al detalle.

> **[INSERTAR FIGURA DE TARJETA ACTIVIDAD AQUÍ EN LIBREOFFICE]**
> Archivo: `docs/03-diw/media/tarjetaActividadEjemplo.png`
> _Figura C4b. Ejemplo de tarjeta de actividad con datos clave visibles._

---

## Navegación

- Barra superior fija (`position: sticky` o `fixed`) con logo a la izquierda y menú a la
  derecha.
- En escritorio: menú horizontal con enlaces de texto e iconos opcionales.
- En móvil: menú hamburger colapsable (Bootstrap `navbar-collapse`).
- Estado activo: subrayado o color diferenciado (verde lima o verde oscuro según fondo).
- Acceso a perfil, carrito y sesión mediante iconos en el extremo derecho de la barra.

---

## Imágenes

- Formato JPG o PNG; optimizadas para web (peso razonable, sin pérdida visible de calidad).
- Ratio de aspecto coherente en tarjetas: 4:3 en listado, 16:9 en hero y banners.
- Siempre con atributo `alt` descriptivo y significativo.
- En la sección de tienda se integra un vídeo (`<video controls>`) como recurso multimedia
  complementario.

---

## Voz y tono

- Segunda persona del singular en llamadas a la acción: "Únete", "Regístrate", "Ver ruta".
- Tono cercano, directo y activo; sin lenguaje corporativo ni tecnicismos innecesarios en
  la UI.
- Los textos informativos son breves y van directamente al punto.
- Los mensajes de error son claros y no revelan datos técnicos internos al usuario.

---

## Accesibilidad aplicada al diseño

- Contraste de color revisado con WCAG Contrast Checker; ratios adecuados para los
  elementos auditados.
- Foco visible para navegación por teclado (outline diferenciado, no eliminado).
- HTML semántico: uso de `<main>`, `<nav>`, `<header>`, `<footer>`, `<section>`, `<article>`.
- Textos alternativos en todas las imágenes de contenido.
- Formularios con `<label for>` asociado a cada campo y mensajes de error vinculados con
  `aria-describedby`.
- Respeto por la preferencia `prefers-reduced-motion` en el cliente React.

La auditoría formal de accesibilidad de la landing (Lighthouse 100, WAVE 0 errores,
WCAG Contrast Checker) se documenta en el apartado 5.2 de la memoria y sus evidencias
se encuentran en `docs/evidencias/diw/sprint-2/`.
