# Caso 05 – Tarjeta aparece / desaparece

## Objetivo

Comprobar la lógica condicional del campo de tarjeta de crédito.

## Pasos

1. Ir a `pages/formulario/register.php`.
2. Dejar `Dirección` y `País` vacíos.
3. Escribir solo `Dirección`.
4. Seleccionar `País` manteniendo `Dirección` con valor.
5. Vaciar `Dirección` o dejar `País` vacío.

## Resultado esperado

- Con `Dirección` y `País` vacíos, tarjeta oculta.
- Si solo hay `Dirección`, tarjeta sigue oculta.
- Si `Dirección` y `País` tienen valor, tarjeta visible.
- Si uno de los dos se vacía, tarjeta vuelve a ocultarse.
- Al ocultarse, el valor de tarjeta se limpia.


