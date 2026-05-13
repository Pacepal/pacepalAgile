# Caso 03 – Login incorrecto

## Objetivo

Comprobar que el login detecta datos inválidos y bloquea el envío.

## Pasos

1. Ir a `pages/formulario/login.php`.
2. Introducir:
   - Email: `pablo@`
   - Contraseña: _(vacía)_
3. Pulsar **Iniciar sesión**.

## Resultado esperado

- Se muestra error de email inválido.
- Se muestra error de contraseña obligatoria.
- Los campos en error tienen clase `campo-invalido`.
- Se muestra mensaje global de error.


