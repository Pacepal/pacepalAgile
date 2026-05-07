# Caso 11 - Carga inicial del escaparate React

## Objetivo

Verificar que la galería del escaparate React carga datos reales desde la API PHP al entrar en la tienda.

## Prerequisitos

- XAMPP activo con API disponible en `src/api/index.php/api`.
- Cliente React levantado con Vite.

## Pasos

1. Abrir `pacepal-react.html`.
2. Navegar a la sección `#tienda`.
3. Esperar la carga inicial de la galería.

## Resultado esperado

- Se invoca `GET /productos` desde el cliente React.
- Se renderizan tarjetas de productos sin recargar la SPA.
- Si la API falla, entra el fallback de datos estáticos y la UI sigue operativa.

## Evidencia local asociada

- Captura carga inicial: `docs/evidencias/dwec/sprint-3/productos-buscador.png`.
- Captura estado vacío de búsqueda: `docs/evidencias/dwec/sprint-3/Buscador_sin_resultados.png`.
- Captura tienda página 2 (paginación): `docs/evidencias/dwec/sprint-3/Productos-paginados2.png`.
- Nota técnica de consumo API: `docs/evidencias/dwec/sprint-3/nota-consumo-api-escaparate-react.md`.
