# 02 - Validaciones JavaScript

En PacePal nos curramos las validaciones en JavaScript para que el usuario sepa al momento si está metiendo bien los datos o no. Todo lo tenemos centralizado en `js/formulario/validaciones.js`, así no repetimos código y si hay que cambiar una regla, solo la tocamos en un sitio.

## ¿Por qué lo montamos así?

Queríamos evitar líos de tener validaciones sueltas por cada formulario. Por eso, cada función de validación recibe el valor y el input, devuelve true o false y pinta el error directamente en el DOM. Así, si un campo está mal, se pone rojo (`campo-invalido`), y si está bien, verde (`campo-valido`).

## ¿Qué comprobamos en cada campo?

- **Nombre y apellidos:** Obligatorio, entre 2 y 50 letras, solo letras y espacios. Si metes algo raro, te lo marca al momento.
- **Email:** Obligatorio, máximo 100 caracteres, formato típico `texto@dominio.ext`.
- **DNI:** Obligatorio, 8 números y una letra mayúscula. Calculamos la letra con el algoritmo oficial (`numero % 23` y la tabla `TRWAGMYFPDXBNJZSQVHLCKE`). Si la letra no cuadra, te avisa. Antes de validar, normalizamos el DNI para que no haya líos con mayúsculas o espacios.
- **Contraseña:** Entre 8 y 32 caracteres, tiene que llevar mayúscula, minúscula, número y símbolo. Si no cumple, te lo marca y no deja avanzar.
- **Confirmar contraseña:** Comprueba que no esté vacío y que coincida con la contraseña original.
- **Fecha de nacimiento:** Opcional, pero si la pones, tiene que ser válida y tener mínimo 16 años.
- **Tarjeta de crédito:** Solo se valida si el campo está visible. Quitamos espacios y comprobamos que tenga entre 13 y 19 dígitos.

## Utilidades que usamos siempre

- **limpiarTexto(valor):** Normaliza cualquier valor (quita null, undefined y espacios). Así no hay sorpresas raras al validar.
- **mostrarErrorCampo(input, mensaje):** Busca el contenedor de error del input y pone el mensaje. Si hay error, el campo se pone rojo; si está bien, verde.
- **limpiarErroresFormulario(formulario):** Antes de validar todo, vaciamos los mensajes de error para que no se acumulen los viejos.

## ¿Cómo lo usamos en el proyecto?

Todas estas funciones están en `window.ValidacionesPacePal`, así las podemos usar desde cualquier script sin importar nada raro. Esto nos ha hecho la vida más fácil a la hora de mantener y probar los formularios.

## Resumen rápido de reglas

| Campo                | Regla principal                                         | Obligatorio |
| -------------------- | ------------------------------------------------------- | ----------- |
| Nombre               | 2–50 caracteres, solo letras y espacios                 | Sí          |
| Email                | Formato `texto@dominio.ext`, máx. 100 caracteres        | Sí          |
| DNI                  | 8 dígitos + letra calculada (algoritmo oficial)         | Sí          |
| Contraseña           | 8–32 caracteres, mayúscula, minúscula, número y símbolo | Sí          |
| Confirmar contraseña | Debe coincidir con contraseña                           | Sí          |
| Fecha nacimiento     | Edad mínima 16 años                                     | No          |
| Tarjeta crédito      | 13–19 dígitos                                           | Condicional |
