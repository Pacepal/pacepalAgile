# 01 - Formularios de login y registro

## 1. Objetivo

Implementar la lógica de cliente necesaria para gestionar los formularios de autenticación de PacePal: registro de nuevos usuarios e inicio de sesión. Los formularios debían cumplir los requisitos funcionales definidos en las historias de usuario (HU-01) y respetar las restricciones del módulo DWEC, especialmente la construcción del DOM mediante `createElement` y la separación entre lógica de validación y lógica de control.

## 2. Arquitectura de archivos

El módulo de formularios se organiza en cuatro archivos JavaScript dentro de `js/formulario/`:

| Archivo                 | Responsabilidad                                                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `validaciones.js`       | Funciones de validación puras. Devuelven `true` o `false` y gestionan los mensajes de error en el DOM.                          |
| `formularioRegistro.js` | Orquestación del formulario de registro: eventos, validación en tiempo real, lógica condicional de tarjeta y envío al servidor. |
| `formularioLogin.js`    | Orquestación del formulario de login: eventos, validación y envío al servidor.                                                  |
| `ui.js`                 | Renderizado de elementos compartidos de interfaz (navbar y footer dinámicos).                                                   |

Las vistas HTML de los formularios se encuentran en:

- `pages/formulario/register.php`
- `pages/formulario/login.php`

El CSS específico de formularios se centraliza en `css/formulario/formulario.css`.

# 01 - Formularios de login y registro

## 1. ¿Qué queríamos conseguir?

Queríamos que los formularios de registro e inicio de sesión de PacePal fueran claros, seguros y fáciles de usar. Nos centramos en cumplir las historias de usuario (HU-01) y en que todo el DOM se generara con `createElement`, sin meter HTML a pelo, para evitar problemas de seguridad y mantener el código limpio.

## 2. ¿Cómo lo organizamos?

Dividimos la lógica en varios archivos JS dentro de `js/formulario/`:

| Archivo                 | ¿Para qué sirve?                                                                                   |
| ----------------------- | -------------------------------------------------------------------------------------------------- |
| `validaciones.js`       | Aquí van todas las funciones de validación. Devuelven true/false y pintan los errores en el DOM.   |
| `formularioRegistro.js` | Orquesta el registro: eventos, validación en tiempo real, lógica de la tarjeta y envío al backend. |
| `formularioLogin.js`    | Orquesta el login: eventos, validación y envío al backend.                                         |
| `ui.js`                 | Renderiza la navbar y el footer de forma dinámica.                                                 |

Las vistas HTML están en:

- `pages/formulario/register.php`
- `pages/formulario/login.php`
  El CSS de formularios lo centralizamos en `css/formulario/formulario.css`.

## 3. Registro: campos y lógica

### 3.1. Campos que pedimos

El registro pide estos datos, igual que en la base de datos y las historias de usuario:

| Campo                | Tipo       | Obligatorio | ¿Para qué sirve?                                             |
| -------------------- | ---------- | ----------- | ------------------------------------------------------------ |
| Nombre y apellidos   | `text`     | Sí          | Mínimo 2, máximo 50 letras. Solo letras y espacios.          |
| Email                | `email`    | Sí          | Formato válido, máximo 100 caracteres.                       |
| DNI                  | `text`     | Sí          | 8 números + letra. Validamos con el algoritmo oficial.       |
| Contraseña           | `password` | Sí          | Mínimo 8 caracteres, mayúscula, minúscula, número y símbolo. |
| Confirmar contraseña | `password` | Sí          | Debe coincidir con la contraseña.                            |
| Sexo                 | `select`   | No          | Opcional.                                                    |
| Fecha de nacimiento  | `date`     | No          | Si se pone, comprobamos que tenga al menos 16 años.          |
| Dirección            | `text`     | No          | Regla cruzada con País.                                      |
| País                 | `select`   | No          | Regla cruzada con Dirección.                                 |
| Tarjeta de crédito   | `text`     | Condicional | Solo sale si Dirección y País están rellenos.                |
| Notificaciones       | `checkbox` | No          | Para avisos de la plataforma.                                |
| Revista digital      | `checkbox` | No          | Para suscribirse a la revista.                               |

### 3.2. Lógica de la tarjeta

El campo de tarjeta solo aparece si el usuario rellena Dirección y País. Si borra uno de los dos, la tarjeta desaparece y se limpia. Esto lo controlamos en el JS y también lo revisa el backend por si acaso.

### 3.3. Regla cruzada Dirección–País

Para que salga el campo de tarjeta, hay que tener Dirección y País con valor. Si falta uno, la tarjeta se oculta y se borra el valor.

### 3.4. Envío del registro

Cuando le das a registrar, validamos todos los campos. Si todo está bien, montamos un objeto `payload` y lo mandamos con `fetch` al endpoint `POST /api/register`. Si el backend responde OK, mostramos un mensaje de éxito y redirigimos al login tras un par de segundos.

## 4. Login: campos y lógica

### 4.1. Campos del login

Solo pedimos dos cosas:

| Campo      | Tipo       | Obligatorio |
| ---------- | ---------- | ----------- |
| Email      | `email`    | Sí          |
| Contraseña | `password` | Sí          |

### 4.2. Validaciones en login

Aquí no nos complicamos tanto como en el registro:

- El email se valida igual que en el registro.
- La contraseña solo miramos que no esté vacía (la complejidad ya se pide al registrarse).

### 4.3. Envío del login

El login se manda con `fetch` a `POST /api/login`. Si el backend responde bien, redirigimos al perfil del usuario.

## 5. Redirección si ya tienes sesión

Si detectamos que el usuario ya está logueado, lo mandamos directo al perfil y no le dejamos volver a los formularios.

## 6. Experiencia de usuario

Queríamos que el usuario viera al momento si un campo está bien o mal:

- Validamos en tiempo real con los eventos `blur` e `input`.
- Si hay error, el campo se pone rojo (`campo-invalido`); si está bien, verde (`campo-valido`).
- Los mensajes de error salen justo debajo del campo.
- Al enviar, mostramos un mensaje global arriba (éxito o error).

## 7. Archivos clave

- `js/formulario/validaciones.js`
- `js/formulario/formularioRegistro.js`
- `js/formulario/formularioLogin.js`
- `pages/formulario/register.php`
- `pages/formulario/login.php`
- `css/formulario/formulario.css`
