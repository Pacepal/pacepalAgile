# Caso 02 – Registro correcto

## Objetivo

Comprobar que el registro se valida correctamente con datos válidos.

## Pasos

1. Ir a `pages/formulario/register.php`.
2. Introducir los siguientes datos:
   - Nombre y apellidos: `Pablo Sevillano`
   - Email: `pablo@email.com`
   - DNI: `12345678Z`
   - Contraseña: `PacePal13*`
   - Confirmación: `PacePal13*`
   - Fecha nacimiento: `10-08-1990`
3. Pulsar **Registrarse**.

## Resultado esperado

- No se muestran errores por campo.
- Los campos válidos tienen clase `campo-valido`.
- Se muestra mensaje global de éxito del registro.


