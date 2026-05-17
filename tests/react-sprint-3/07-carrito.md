# Caso 07 - Carrito React

## Objetivo

Comprobar que el carrito React cubre el flujo completo: alta desde galeria, contador sincronizado, cambio de cantidades, borrado y recalculo de total, sin recargar la SPA.

## Prerequisitos

- Cliente React levantado en local (Vite) o URL de Pages disponible.
- Sesión activa (real o demo fallback).

---

## Carga inicial del carrito React

### Pasos

1. Abrir `pacepal-react.html`.
2. Navegar a la tienda y abrir el carrito desde cabecera.

### Resultado esperado

- Se listan los productos con imagen, nombre, precio unitario y cantidad.
- El total se calcula correctamente.

---

## Añadir producto desde galeria React

### Pasos

1. Ir a la vista de tienda React.
2. Pulsar "Añadir al carrito" en cualquier tarjeta.

### Resultado esperado

- El botón muestra "Añadiendo..." mientras espera respuesta.
- Pasa a "Añadido!" al completarse.
- El contador del carrito en la barra de navegación sube en 1 sin recargar.

---

## Añadir producto desde detalle React

### Pasos

1. Abrir el detalle de un producto desde "Ver producto".
2. Seleccionar cantidad 2.
3. Pulsar "Añadir al carrito".

### Resultado esperado

- Mismo feedback visual que el caso anterior.
- Al ir al carrito, el producto aparece con cantidad 2.

---

## Modificar cantidad

### Pasos

1. En carrito React, editar el input numérico de cantidad.
2. Confirmar con Enter o cambiando el foco.

### Resultado esperado

- La cantidad se actualiza mediante una llamada `PUT /api/carrito`.
- El subtotal de esa línea y el total general se recalculan en pantalla sin recargar.

---

## Eliminar un producto

### Pasos

1. En el carrito, pulsar el botón de eliminar de un producto.

### Resultado esperado

- El producto desaparece del listado mediante `DELETE /api/carrito`.
- El total se recalcula automáticamente.
- Si el carrito queda vacío, aparece el mensaje correspondiente.

---

## Finalizar pedido

### Pasos

1. Con al menos un producto en el carrito, pulsar "Finalizar pedido".

### Resultado esperado

- Se crea el pedido mediante `POST /api/pedido`.
- El carrito se vacía y aparece un mensaje de confirmación.

---

## Acceso sin sesión

### Pasos

1. Cerrar sesión.
2. Intentar abrir carrito o añadir desde la tienda React.

### Resultado esperado

- La API responde con error de autenticación.
- El cliente muestra un mensaje adecuado o redirige al login.

---

## Evidencia asociada

- Captura de alta al carrito: `docs/evidencias/dwec/sprint-3/Carrito_añadir_React.png`.
- Captura de carrito con total/cantidades: `docs/evidencias/dwec/sprint-3/Carrito-React.png`.
- Validación técnica local: `frontend-react` compila con `npm run build` (ok).
