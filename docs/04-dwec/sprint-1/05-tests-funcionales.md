# 05 - Tests funcionales del Sprint 1

## ¿Por qué y cómo probamos?

No nos fiamos solo de que el código "compilara" o que la validación estuviera bien escrita: queríamos ver que el flujo real de usuario funcionaba como toca. Por eso, antes de dar por bueno el sprint, nos pusimos a probar los formularios de registro y login como lo haría cualquier usuario, cubriendo tanto los casos típicos como los que suelen dar problemas.

## Casos que hemos comprobado

Todos los tests manuales están en `tests/funcionales/` y cubren:

- **Registro incorrecto:** Metimos datos mal a propósito (email sin arroba, contraseña floja, DNI con letra incorrecta...) y comprobamos que el sistema no deja avanzar, marca los campos en rojo y saca el mensaje de error que toca.
- **Registro correcto:** Probamos con datos válidos (nombre, email, DNI bien, contraseña fuerte, fecha de nacimiento mayor de 16) y el sistema deja registrarse, marca todo en verde y muestra el mensaje de éxito.
- **Login incorrecto:** Intentamos entrar con credenciales que no existen y el sistema muestra el error sin recargar la página.
- **Login correcto:** Usamos usuario y contraseña válidos y nos lleva al perfil, como debe ser.
- **Tarjeta aparece/desaparece:** Probamos la lógica de la tarjeta: si Dirección y País están vacíos, el campo no sale; si los rellenas, aparece; si borras uno, desaparece y se limpia. Así nos aseguramos de que la lógica condicional funciona de verdad.

## Qué cubren estos tests

Con esto nos aseguramos de:

- Validación real de todos los campos obligatorios y de formato (email, DNI, contraseña fuerte).
- Feedback visual claro: verde si va bien, rojo si hay error.
- Mensajes de error por campo y globales, según el fallo.
- Que la lógica condicional de la tarjeta no se rompe.
- Que el flujo completo de registro y login es el esperado, tanto si todo va bien como si hay errores.

## Automatización básica

Además de las pruebas a mano, montamos un test automático con Selenium (`tests/selenium/test-registro.js`). Este script rellena el registro con datos válidos y comprueba que el alta funciona. Así, si cambiamos algo en el futuro, podemos ver rápido si se ha roto el flujo principal de registro.
