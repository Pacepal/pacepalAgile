# Caso 06 - Buscador de productos React

## Objetivo

Validar la paridad funcional del buscador en React: estado del buscador en cliente, filtrado por nombre y descripción, y estado vacío cuando no hay coincidencias.

## Prerequisitos

- Cliente React levantado en local con Vite o URL de GitHub Pages operativa.
- Datos de productos cargados (API o fallback demo).

---

## Escenario con resultados por nombre

### Pasos

1. Abrir `pacepal-react.html` y navegar a la tienda.
2. Escribir `zapatilla` en el campo de búsqueda.

### Resultado esperado

- La galeria se filtra en tiempo real sin recargar la SPA.
- Se muestran solo productos cuyo nombre contiene `zapatilla`.

---

## Escenario con resultados por descripcion

### Pasos

1. Limpiar el campo de búsqueda.
2. Escribir `transpirable`.

### Resultado esperado

- Se muestran productos donde `transpirable` aparece en la descripción aunque no esté en el nombre.

---

## Escenario sin resultados

### Pasos

1. Escribir `xxxxxxxxxxx` en el buscador.

### Resultado esperado

- La galeria no muestra tarjetas.
- Se muestra el mensaje exacto: `No se encontraron productos para "xxxxxxxxxxx".`

---

## Evidencia local de paridad funcional

- Implementación React validada en:
	- `frontend-react/src/hooks/useProducts.js` (estado de consulta y filtro por nombre + descripción).
	- `frontend-react/src/components/ProductGallery.jsx` (estado vacío para consulta sin coincidencias).
	- `frontend-react/src/components/SearchBar.jsx` (campo de búsqueda React).
- Fecha de verificación local: 2026-05-07.

## Evidencia local de la carga inicial

- Captura de carga inicial del escaparate React: `docs/evidencias/dwec/sprint-3/productos-buscador.png`.
- Estado esperado en carga inicial: productos visibles tras `GET /productos` (o fallback demo), sin error y sin recarga de la SPA.

## Criterio de cierre

- [x] La búsqueda funciona en React sobre el origen acordado:
	- origen principal: `GET /productos` via `requestJson('/productos')`.
	- fallback acordado: `loadStaticData('productos')` cuando la API no está disponible.
	- filtro en cliente sobre nombre y descripción en la colección cargada.
- [x] Existen pruebas manuales y capturas de escenarios positivos y vacíos:
	- captura positiva: `docs/evidencias/dwec/sprint-3/productos-filtrados.png`.
	- captura estado vacío: `docs/evidencias/dwec/sprint-3/productos-no-encontrado.png`.
	- evidencia del caso manual: `tests/react-sprint-3/06-buscador-productos.md`.
