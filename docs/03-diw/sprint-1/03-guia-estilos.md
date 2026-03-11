---
marp: true
title: PacePal · Guía de estilos
description: Guía de estilos web de PacePal - Proyecto Agile
size: 16:9
paginate: true
header: PacePal · Guía de estilos
footer: PacePal · Proyecto Agile Intermodular 2º DAW
style: |
  @page {
    size: A4 landscape;
    margin: 0;
  }

  :root {
    --pp-green-dark: #2A400A;
    --pp-green-flash: #A1F227;
    --pp-green-moss: #5D8C16;
    --pp-text: #1E1E1E;
    --pp-muted: #5F6B55;
    --pp-line: #D9DFD2;
    --pp-foot-bg: #2A400A;
  }

  section {
    position: relative;
    background: #FFFFFF;
    color: var(--pp-text);
    font-family: 'Inter', "Segoe UI", Tahoma, sans-serif;
    font-size: 16px;

    /* zona segura tipo maqueta web */
    padding: 60px 300px 168px 72px;
    box-sizing: border-box;
    line-height: 1.32;
    overflow: hidden;
    overflow-wrap: anywhere;

    /* banda inferior y línea superior del pie */
    background-image:
      linear-gradient(to top, var(--pp-foot-bg) 0 56px, transparent 56px),
      linear-gradient(to top, var(--pp-line) 56px, var(--pp-line) 57px, transparent 57px);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  /* PANEL DERECHO FIJO (ESTILO UMA) */
  section::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 236px;
    height: 100%;

    /* logo PacePal grande, sin círculo blanco detrás */
    background-image:
      url('../media/logo.png'),
      linear-gradient(to bottom, var(--pp-green-dark) 0 34%, var(--pp-green-flash) 34% 52%, #FFFFFF 52% 100%);

    background-repeat: no-repeat, no-repeat;
    background-position: center 20px, top right;
    background-size: 136px auto, 236px 100%;

    z-index: 1;
    border-left: 1px solid rgba(0,0,0,0.05);
  }

  /* contenido por encima del panel */
  section > * {
    position: relative;
    z-index: 2;
  }

  /* BLOQUE DE PAGINACIÓN VERDE */
  section::after {
    content: "pág " attr(data-marpit-pagination);
    position: absolute;
    right: 0;
    bottom: 0;
    width: 132px;
    height: 56px;
    background: var(--pp-green-dark);
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  /* HEADER Y FOOTER */
  header {
    position: absolute;
    top: 28px;
    left: 72px;
    right: 318px;
    font-size: 12px;
    color: var(--pp-muted);
    text-transform: uppercase;
    letter-spacing: 1px;
    z-index: 3;
  }

  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 132px;
    height: 56px;
    display: flex;
    align-items: center;
    padding-left: 72px;
    box-sizing: border-box;
    font-size: 12px;
    background: var(--pp-green-dark) !important;
    color: #FFFFFF;
    font-weight: 700;
    z-index: 3;
  }

  /* TITULARES */
  h1, h2, h3 {
    margin: 0 0 14px 0;
    color: #111;
    font-weight: 900;
  }
  h1 { font-size: 34px; }
  h2 { font-size: 26px; }
  h3 { font-size: 21px; }

  p, li { font-size: 15px; }

  ul, ol {
    margin: 8px 0 0 0;
    padding-left: 20px;
  }

  /* LÍNEA VERDE BAJO HEADINGS */
  h1::after, h2::after, h3::after {
    content: "";
    display: block;
    width: 120px;
    height: 5px;
    background: var(--pp-green-flash);
    margin-top: 8px;
  }

  /* LAYOUT */
  .cols-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; align-items: start; }
  .cols-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
  .cols-2-media { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 16px; align-items: start; }
  .img-right { justify-self: end; align-self: start; }
  .img-raise { margin-top: -10px; }
  .img-float-right { float: right; margin-left: 16px; margin-top: -6px; max-width: 55%; }
  .img-float-large { max-width: 60%; }
  .img-card { max-width: 48%; margin-top: -8px; }
  .img-card-small { max-width: 24%; }
  .img-card-up { margin-top: -16px; }
  .clear { clear: both; }

  .box {
    border: 1px solid #E1E6DC;
    border-radius: 8px;
    padding: 12px;
    background: #FBFCFA;
    margin-top: 8px;
    max-width: 100%;
    box-sizing: border-box;
  }

  /* PLACEHOLDERS */
  .ph {
    border: 2px dashed #A1B096;
    background: #F8F9F6;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #5D6B52;
    font-weight: 900;
    padding: 10px;
    border-radius: 8px;
    max-width: 100%;
    box-sizing: border-box;
    margin-top: 8px;
  }
  .ph-hero { min-height: 128px; }
  .ph-wide { min-height: 102px; width: 100%; }
  .ph-card { min-height: 88px; }
  .ph-square { aspect-ratio: 1/1; min-height: 108px; }
  .ph-small { min-height: 64px; font-size: 12px; font-weight: 900; }

  img { max-width: 100%; height: auto; }

  /* TABLAS */
  table { width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 8px; }
  th { background: var(--pp-green-dark); color: white; padding: 8px; text-align: left; }
  td { border-bottom: 1px solid #EEE; padding: 6px; }

  section > h1,
  section > h2,
  section > h3,
  section > p,
  section > ul,
  section > ol,
  section > div,
  section > table {
    margin-left: 0;
    margin-right: 0;
    width: min(100%, 690px);
    box-sizing: border-box;
  }

  .cover-grid{
    display:grid;
    grid-template-columns: 1fr;
    gap: 16px;
    align-items: center;
  }
  .cover-title-inline {
    display: flex;
    align-items: center;
    gap: 10px;
    width: fit-content;
  }
  .cover-title-inline::after {
    display: none;
  }
  .cover-brand {
    display: inline-block;
    border-bottom: 5px solid var(--pp-green-flash);
    padding-bottom: 4px;
  }
  .cover-title-logo {
    width: 40px;
    height: auto;
    display: inline-block;
  }
  .cover-meta{
    margin-top: 14px;
    font-size: 15px;
    color: var(--pp-muted);
    line-height: 1.35;
  }
  .muted{ color: var(--pp-muted); }

  section.cover-clean::before {
    width: 100%;
    border-left: none;
    background-image: url('../media/logo.png');
    background-repeat: no-repeat;
    background-position: 78% 50%;
    background-size: 345px auto;
  }
---

<!-- _class: cover-clean -->

<h2 class="cover-title-inline"><span class="cover-brand">PACEPAL</span> · Desarrollado por el equipo de Treecore <img class="cover-title-logo" src="../../../img/logo/logotipoTrecore.png" alt="Logo Treecore"></h2>

<div class="cover-grid">
  <div>
    <div class="cover-meta">
      Proyecto: <strong>PacePal</strong><br>
      Documento: <strong>Guía de estilos</strong><br><br>
      Autores<br>
      <strong>Pablo Sevillano</strong><br>
      <strong>Alejandro Pacheco</strong><br><br>
      Curso: 2º DAW · Proyecto Agile Intermodular<br>
      Versión 1.0 · Marzo 2026
    </div>
  </div>
</div>

---

# Índice

1. Introducción
2. Concepto del producto
3. Arquitectura de la aplicación
4. Componentes de interfaz
5. Identidad visual
6. Uso de imágenes
7. Iconografía
8. Normas de contenido
9. Accesibilidad

---

# 1 Introducción

Este documento define la guía de estilos del proyecto PacePal.

Su objetivo es establecer criterios visuales, de interfaz y de contenido para mantener coherencia en todas las pantallas de la aplicación.

La guía sirve como referencia para:

- diseño de interfaces
- desarrollo frontend
- publicación de contenidos
- mantenimiento del sistema

Todas las decisiones de diseño aquí descritas se basan en el concepto del producto y en las historias de usuario definidas en el backlog.

---

# 2 Concepto del producto

PacePal es una aplicación web orientada a organizar y participar en actividades deportivas en grupo.

El sistema se basa en rutas existentes almacenadas en la base de datos. Los usuarios no crean rutas nuevas, sino actividades sobre rutas ya definidas.

La plataforma busca resolver un problema habitual: muchas personas quieren hacer deporte pero no desean hacerlo solas.

El sistema permite:

- descubrir actividades cercanas
- unirse a actividades con nivel y ritmo compatibles
- crear nuevas actividades sobre rutas existentes
- mantener convivencia mediante reportes
- acceder a una tienda sostenible relacionada con el deporte

Los pilares del producto son:

- comunidad
- actividad física
- seguridad
- sostenibilidad

---

# 3 Arquitectura de la aplicación

Las pantallas principales de PacePal se organizan en varias áreas funcionales.

Pantallas principales:

Landing  
Actividades  
Detalle de actividad  
Crear actividad  
Mis actividades  
Rutas  
Detalle de ruta  
Tienda  
Detalle de producto  
Carrito  
Login / registro  
Panel admin de reportes

La navegación principal permite acceder rápidamente a las áreas clave del sistema.

---

# 4 Componentes de interfaz

## 4.1 Header

El header aparece en todas las páginas de la aplicación.

Elementos principales:

Logo PacePal

Navegación principal:

Actividades  
Rutas  
Tienda

Acciones de usuario:

Usuario invitado  
Login

Usuario autenticado  
Crear actividad  
Perfil  
Cerrar sesión

En móvil el menú se colapsa en menú hamburguesa.

---

# 4.2 Hero de la landing

El hero es el bloque principal de la landing page.

Objetivo:

Explicar rápidamente el propósito de la plataforma y dirigir al usuario hacia las actividades.

Contenido:

Título principal

Muévete mejor acompañado

Subtítulo

Actividades organizadas por nivel y ritmo para empezar, retomar o mantener una rutina activa junto a otras personas.

CTA principal

Ver actividades

Imagen de fondo:

personas caminando o corriendo en entorno natural

Para mejorar la legibilidad se aplica overlay oscuro sobre la imagen.

---

# 4.3 Tarjeta de actividad

La tarjeta de actividad es el componente principal del listado de actividades.

<img class="img-float-right img-card" src="../media/tarjetaActividadEjemplo.png" alt="Ejemplo de tarjeta de actividad">

Información mostrada:

Nombre de ruta  
Tipo de actividad  
Nivel  
Ritmo  
Fecha  
Hora  
Plazas disponibles

Ejemplo:

Casa de Campo  
Running suave · nivel principiante

Sábado · 10:00  
12 plazas disponibles

Botón de acción:

Usuario invitado  
Ver actividad

Usuario logueado  
Unirme

Las tarjetas deben ser claras, compactas y fáciles de escanear.

<div class="clear"></div>

---

# 4.4 Filtros de actividades

Los filtros permiten refinar el listado de actividades.

Filtros disponibles:

Nivel

novato  
intermedio  
avanzado

Ritmo

suave  
medio  
rápido

Otros filtros:

fecha  
plazas disponibles

Los filtros deben poder limpiarse fácilmente para volver al listado completo.

---

# 4.5 Chips de categorías

Los chips se utilizan como filtros rápidos.

Ejemplos:

Running  
Walking  
Principiante  
After-work  
Fin de semana

Deben tener forma redondeada y un estado visual claro cuando están activos.

---

# 4.6 Formularios

Los formularios principales del sistema son:

Registro  
Login  
Crear actividad  
Reportar incidencia

Normas de diseño:

labels visibles  
errores claros  
validación antes de enviar  
mensajes comprensibles

Campos obligatorios marcados claramente.

---

# 4.7 Tarjeta de producto

Las tarjetas de producto se utilizan en la sección de tienda.

<img class="img-float-right img-card img-card-small img-card-up" src="../media/tarjetaProductoEjemplo.png" alt="Ejemplo de tarjeta de producto">

Información mostrada:

imagen del producto  
nombre  
precio  
etiqueta sostenible

Ejemplo:

Zapatillas running recicladas

Material reutilizado  
Producción responsable

Botón:

Ver producto

<div class="clear"></div>

---

# 4.8 Carrito

El carrito permite gestionar productos antes de confirmar el pedido.

Elementos:

lista de productos  
cantidad por producto  
precio unitario  
precio total

El carrito muestra un contador visible en el icono superior.

El total debe actualizarse automáticamente al modificar cantidades.

---

# 5 Identidad visual

<img class="img-float-right img-float-large" src="../media/paletaIdentidadVisual.png" alt="Paleta de identidad visual PacePal">

La identidad visual de PacePal utiliza una paleta basada en tonos verdes asociados con naturaleza, deporte y sostenibilidad.

Al principio dudamos en colores como el azul, blanco y negro como color principal pero nos decantamos con el verde, ya que une el deporte y la sostenibilidad

Colores principales

Verde oscuro

#2A400A

Verde acento

#A1F227

Verde intermedio

#5D8C16

Colores neutros

texto principal  
#1E1E1E

texto secundario  
#5F6B55

líneas y separadores  
#D9DFD2

Se aplica la norma de composición cromática:

60% color base  
30% color secundario  
10% color de acento

El verde acento se utiliza principalmente para:

botones  
elementos interactivos  
destacar acciones principales

<div class="clear"></div>

---

# 6 Tipografía

<img class="img-float-right img-float-large" src="../media/tipografiaIdentidadVisual.png" alt="Tipografía de identidad visual PacePal">

La tipografía principal es:

Inter

Es elegida porque es más facil de leer en todos los dispositivos, así nos resulta más facil adaptarlo a movil, tablet y ordenador.

Alternativas del sistema:

Segoe UI  
Tahoma  
sans-serif

Jerarquía tipográfica:

H1 títulos principales  
H2 títulos de sección  
H3 subtítulos

Los textos deben priorizar legibilidad y claridad.

<div class="clear"></div>

---

# 7 Uso de imágenes

Las imágenes deben mostrar contextos reales relacionados con actividad física.

Se priorizan:

rutas naturales  
personas caminando o corriendo  
escenas deportivas reales

Proporciones recomendadas:

Hero  
16:9

Tarjetas de actividad  
3:2

Productos tienda  
1:1

Las imágenes deben optimizarse para web.

---

# 8 Iconografía

<img class="img-float-right img-float-large" src="../media/pacepal_iconografia.png" alt="Iconografía PacePal">

La iconografía utilizada proviene de Bootstrap Icons.

Ejemplos de iconos utilizados:

calendario  
reloj  
ubicación  
nivel  
plazas  
carrito  
reportar

Los iconos acompañan al texto pero no sustituyen información crítica.

<div class="clear"></div>

---

# 9 Normas de contenido

Los textos deben ser claros y directos.

Recomendaciones:

párrafos cortos  
frases simples  
evitar tecnicismos innecesarios

Los títulos deben describir claramente el contenido.

Ejemplo correcto

Ver actividades

Ejemplo incorrecto

Haz clic aquí

---

# 10 Accesibilidad

La aplicación debe cumplir criterios básicos de accesibilidad.

Se aplican las siguientes normas:

navegación por teclado  
foco visible  
labels en formularios  
mensajes de error comprensibles  
contraste suficiente entre texto y fondo

Estas medidas garantizan que la aplicación pueda ser utilizada por un mayor número de personas.

---

# Cierre

Esta guía establece las bases visuales y estructurales de PacePal.

Cualquier nueva pantalla o componente debe respetar estos criterios para mantener coherencia visual y funcional en toda la aplicación.
