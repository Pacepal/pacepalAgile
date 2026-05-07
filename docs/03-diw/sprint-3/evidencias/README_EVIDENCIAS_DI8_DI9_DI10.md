# Evidencias DI8 DI9 DI10

Fecha: 2026-05-08

## Objetivo

Recoger las evidencias del Sprint 3 de Interfaces relacionadas con audio, video y animaciones de la interfaz en PacePal.

## Evidencias previstas

Pendiente de adjuntar por el equipo en navegador real:

1. Captura de la seccion de audio en contacto.
2. Captura de la seccion de video en tienda.
3. Captura responsive movil de contacto con el bloque de audio.
4. Captura responsive movil de tienda con el video.
5. Captura de consola sin errores.
6. Captura o nota de validacion de rutas y assets.

## Que se ha probado en esta sesion

- Revision de la estructura del proyecto y de la organizacion DIW existente.
- Localizacion del asset `pacepalTienda.mp4`.
- Localizacion y lectura de la pagina de contacto actual.
- Integracion del bloque multimedia de video en la tienda React.
- Preparacion del bloque multimedia de audio en contacto con estado controlado si faltan archivos reales.
- Integracion de microinteracciones CSS y soporte para `prefers-reduced-motion`.
- Validacion tecnica prevista mediante `npm run build` en `frontend-react`.

## Donde se ha probado

- Codigo fuente local del proyecto en `/mnt/c/xampp/htdocs/treecore Trabajos/pacepal`
- Cliente React en `frontend-react/`

## Resultado

- Video: implementado con ruta publica real y configuracion responsive.
- Audio: estructura implementada; pendiente de funcionalidad final hasta disponer de `pacepal-contacto.mp3` y `pacepal-contacto.ogg`.
- Animaciones: implementadas con enfoque suave y reutilizando el sistema visual existente.

## Incidencias detectadas

- El repositorio no incluye todavia archivos de audio reales en formatos `mp3` y `ogg`.
- No se han generado capturas de pantalla en esta sesion porque no se ha ejecutado una validacion visual con navegador controlado desde el entorno actual.

## Pendientes

- Incorporar los dos archivos de audio reales en `frontend-react/public/audio/`.
- Realizar comprobacion manual en navegador de contacto, tienda, responsive y consola.
- Adjuntar las capturas definitivas en esta carpeta.
