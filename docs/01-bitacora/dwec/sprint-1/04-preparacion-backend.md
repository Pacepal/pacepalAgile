# 04 - Preparación del backend desde cliente

En este sprint nos tocó dejar toda la parte de cliente lista para engancharla después al backend en PHP. El objetivo era que los formularios y las páginas dinámicas de PacePal pudieran hablar con la API REST sin tener que rehacer nada más adelante.

## ¿Qué hicimos para dejarlo preparado?

- Migramos los formularios de HTML a PHP (`login.php` y `register.php`) para poder conectarlos fácil al backend. En JavaScript solo tuvimos que ajustar rutas y asegurarnos de que las peticiones a la API iban bien.
- Hicimos lo mismo con el resto de páginas que iban a necesitar datos dinámicos: tienda, rutas, actividades, perfil y admin. Así, cuando llegara el backend, solo había que enganchar los endpoints.

## Comunicación con la API

Todo lo montamos con `fetch` nativo, usando los verbos HTTP que toca (GET, POST, PUT, DELETE) y siempre mandando/recibiendo JSON. Las cabeceras llevan `Content-Type: application/json` y `Accept: application/json`.

Si la petición necesita sesión, siempre ponemos `credentials: 'include'` para que la cookie `PHPSESSID` viaje al servidor. Si hay error HTTP o de red, lo pillamos y mostramos mensaje al usuario.

## URLs y rutas relativas

La URL de la API la montamos relativa según desde dónde esté el script. Por ejemplo, en los formularios:

```
../../src/api/index.php/api/login
../../src/api/index.php/api/register
../../src/api/index.php/api/session
```

Esto lo repetimos en todos los scripts, cambiando la profundidad según la carpeta. Así nos aseguramos de que todo funciona igual aunque movamos archivos.

## Control de sesión

En login y registro, antes de dejarte entrar, miramos si ya tienes sesión activa preguntando al endpoint de sesión. Si ya estás logueado, te mandamos directo al perfil y no puedes volver a los formularios.

## Fallback de URL

Por si el servidor no soporta reescritura de URL, pusimos un fallback: si la URL principal (`src/api/index.php/api/login`) da 404, probamos con una ruta alternativa (`api/login`). Lo mismo en el script de `ui.js` para la sesión.

## ¿Qué respuesta esperamos de la API?

Siempre esperamos este formato:

| Propiedad | Tipo               | ¿Para qué sirve?                         |
| --------- | ------------------ | ---------------------------------------- |
| `status`  | `string`           | "ok" si va bien, "error" si falla.       |
| `message` | `string`           | Mensaje descriptivo (opcional en éxito). |
| `data`    | `object` o `array` | Datos de la respuesta (cuando aplica).   |

Siempre comprobamos `response.ok` y que `result.status === 'ok'` antes de hacer nada con los datos. Así nos aseguramos de que solo procesamos datos válidos y el usuario ve mensajes claros si algo falla.
