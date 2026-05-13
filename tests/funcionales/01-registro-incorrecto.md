# Caso 01 – Registro incorrecto

## Objetivo

Comprobar que el sistema detecta errores en el formulario de registro y bloquea el envío.

## Pasos

1. Ir a `pages/formulario/register.php`.
2. Introducir los siguientes datos:
   - Nombre: `Pablo`
   - Email: `pablo@`
   - DNI: `12345678A`
   - Contraseña: `1234`
   - Confirmación: `1234`
3. Pulsar **Registrarse**.

## Resultado esperado

- El sistema no completa el registro.
- Se muestran errores bajo los campos.
- Se detectan al menos estos errores funcionales:
  - Email inválido.
  - Contraseña débil.
  - DNI incorrecto.
- Los inputs con error tienen clase `campo-invalido`.
- Se muestra mensaje global de error del formulario.


