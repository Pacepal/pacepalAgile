# Sprint 3 - UX + Interactividad

Fecha de actualizacion: 2026-05-08

## Alcance

Esta entrega cubre los requisitos de Interfaces del Sprint 3 relacionados con UX e interactividad en la version React actual de PacePal.

- DI8: integracion de audio en la pagina de contacto.
- DI9: integracion de video en la pagina de tienda.
- DI10: mejora de microinteracciones y animaciones suaves en la interfaz.

---

## DI8 - Integracion de audio

Pagina donde se ha integrado: `frontend-react/src/components/ContactPage.jsx`

Etiqueta usada: `<audio>`

Formatos definidos:

- `mp3`
- `ogg`

Rutas previstas de los archivos:

- `frontend-react/public/audio/pacepal-contacto.mp3`
- `frontend-react/public/audio/pacepal-contacto.ogg`

Explicacion de integracion:

El bloque se ha colocado despues del contenido principal de contacto y del formulario. Esa posicion mantiene el foco principal en la comunicacion con el usuario y permite introducir el recurso sonoro como refuerzo ambiental o contextual, sin competir con la accion principal de la pagina.

Confirmaciones tecnicas:

- No usa `autoplay`.
- El reproductor solo se muestra cuando se detecta que ambos assets existen.
- El componente esta preparado con `controls` visibles.
- El texto descriptivo explica el objetivo del bloque y su estado.
- La maquetacion es responsive y reutiliza tarjetas, radios y sombras del sistema visual actual.

Estado real:

- Estado actual del repositorio: `preparado`
- Motivo: el proyecto no incluye todavia archivos reales `pacepal-contacto.mp3` y `pacepal-contacto.ogg`
- Comportamiento implementado: el componente comprueba la existencia de los assets. Si no estan disponibles, muestra un estado honesto y evita enlaces multimedia rotos o errores 404 del reproductor.

---

## DI9 - Integracion de video

Pagina donde se ha integrado: `frontend-react/src/components/ShopPage.jsx`

Archivo usado: `pacepalTienda.mp4`

Etiqueta usada: `<video>`

Formato usado: `mp4`

Ruta real del archivo:

- `frontend-react/public/img/landing/pacepalTienda.mp4`

Poster usado:

- `frontend-react/public/img/productos/kitPpAaPAcepal1.webp`

Explicacion de integracion:

El video se ha integrado en la parte superior de la tienda, despues del encabezado y antes del listado de productos. De esa forma sirve como apoyo visual para contextualizar la experiencia de exploracion sin sustituir el buscador, la galeria, la paginacion ni el flujo de carrito.

Confirmaciones tecnicas:

- Usa `controls`.
- Usa `preload="metadata"`.
- No usa `autoplay`.
- Mantiene comportamiento responsive con ancho fluido y relacion visual estable.
- No utiliza streaming ni funcionalidad inventada.

---

## DI10 - Animaciones e interactividad

Elementos con animaciones o transiciones:

- Botones principales y secundarios.
- Enlaces de navegacion del menu.
- Tarjetas y bloques visuales reutilizados.
- Contenedores multimedia de audio y video.
- Paginacion y enlaces del footer dentro de la shell React.

Propiedades CSS utilizadas:

- `transition`
- `animation`
- `transform`
- `box-shadow`
- `background-color`
- `border-color`
- `color`

Criterio UX:

Las animaciones se han planteado como microinteracciones suaves: pequenas elevaciones, cambios de sombra y subrayado progresivo en navegacion. No alteran el flujo de uso, no distraen del contenido y se apoyan en los tokens visuales ya existentes del proyecto.

Movimiento reducido:

Se ha incorporado una regla global con `@media (prefers-reduced-motion: reduce)` para minimizar la duracion de transiciones y animaciones y desactivar el desplazamiento suave cuando el usuario ha indicado preferencia por reducir movimiento.

---

## Validacion manual

Checklist previsto para validacion funcional:

- [x] El bloque de audio aparece documentado e integrado en contacto.
- [x] El bloque de audio muestra estado honesto si faltan los assets reales.
- [x] El audio no usa `autoplay`.
- [x] El video aparece integrado en tienda.
- [x] El video usa `controls`.
- [x] El video no usa `autoplay`.
- [x] El video usa `preload="metadata"`.
- [x] El video esta planteado para ser responsive.
- [x] Las animaciones son suaves y no invasivas.
- [x] `prefers-reduced-motion` esta contemplado.
- [x] La integracion evita rutas absolutas.
- [x] Se han mantenido header, footer y patrones visuales reutilizados.
- [ ] Validacion visual completa en navegador real.
- [ ] Comprobacion manual de consola del navegador sin errores.
- [ ] Capturas finales de evidencia adjuntas por el equipo.

Notas de validacion real realizadas en esta sesion:

- Se ha revisado la estructura real del proyecto antes de editar.
- Se ha localizado el video existente y la pagina de contacto actual en React.
- Se ha preparado la ruta publica de audio sin afirmar que ya exista el recurso final.
- Se ejecuta validacion tecnica adicional mediante build de Vite en la fase final de esta tarea.
