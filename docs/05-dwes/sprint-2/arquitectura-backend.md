# Arquitectura del Backend — PacePal

## 1. Objetivo

El backend de PacePal se encarga de gestionar la lógica de servidor de la aplicación.

Su función principal es conectar la interfaz web con la base de datos, procesar las peticiones de los usuarios y devolver la información necesaria para que la aplicación funcione correctamente.

Para ello se utiliza una arquitectura basada en PHP, utilizando acceso a base de datos mediante PDO y una API REST que devuelve información en formato JSON.

# Arquitectura backend — PacePal

Aquí explicamos cómo está montado el backend de verdad, sin rodeos. Todo está pensado para que el código sea fácil de mantener y cada parte tenga su función clara.

---

## ¿Cómo está organizado el backend?

El backend está dividido en:

- **API**: recibe las peticiones del frontend y las manda al controlador que toca.
- **Controladores**: aquí va la lógica de negocio, validaciones y llamadas a los modelos.
- **Modelos**: se encargan de hablar con la base de datos usando PDO y consultas preparadas.
- **Config**: conexión a la base de datos y parámetros globales.

Así, si hay que cambiar algo (por ejemplo, cómo se valida un login), solo tocamos el archivo que corresponde y no rompemos el resto.

---

## Estructura real del proyecto

# Arquitectura backend — PacePal

Objetivo: documentar la estructura, el flujo y las decisiones técnicas del backend para que frontend y pruebas tengan una única referencia.

---

## 1) Estructura del proyecto

src/
api/
controllers/
models/
config/

- **api/**: router principal (`src/api/index.php`) que mapea rutas a controladores.
- **controllers/**: lógica de negocio y validaciones (flujo por endpoint).
- **models/**: acceso a base de datos con PDO, consultas preparadas y reglas de integridad.
- **config/**: configuración de conexión PDO y constantes.

---

## 2) Flujo de una petición

1. El frontend hace una petición HTTP al router (`/src/api/index.php/api/...`).
2. El router valida la ruta y método, y llama al controlador correspondiente.
3. El controlador valida entrada, aplica reglas de negocio y llama al modelo si necesita datos.
4. El modelo ejecuta consultas PDO y devuelve resultados al controlador.
5. El controlador forma la respuesta en JSON y la devuelve via el router.

Siempre usamos respuestas consistentes (`status`, `data` y `message`) para que el cliente trate errores de forma homogénea.

---

## 3) Sesiones y roles (referencia central)

Usamos sesiones PHP para mantener la identidad del usuario:

- `$_SESSION['usuario_id']` identifica al usuario.
- `$_SESSION['rol']` contiene `usuario` o `admin`.

Regla clara: los endpoints que requieren autenticación comprueban sesión y rol al inicio del controlador y devuelven `status: error` si no hay permisos.

Los detalles de comprobación están implementados en `src/controllers/AuthController.php`.

---

## 4) Gestión de cookies y consentimiento

Las cookies técnicas (sesión) y opcionales (analíticas/marketing) se gestionan desde la API con endpoints específicos; la política y el almacenamiento están centralizados para evitar lógica duplicada.

---

## 5) Gestión de stock y pedidos

Actualizamos stock en la capa de modelos dentro de la transacción que crea el pedido. Reglas clave:

- comprobar `stock >= cantidad` antes de restar.
- usar transacciones para evitar inconsistencias con pedidos concurrentes.

---

## 6) Seguridad y validaciones

- Todas las consultas usan prepared statements (PDO) y named parameters.
- Inputs se validan en controladores antes de llamar a modelos.
- Consultas de un registro usan `LIMIT 1`.

---

## 7) Escalabilidad y próximos pasos

La separación entre API, controladores y modelos facilita añadir entidades o endpoints sin tocar el resto. Próximos pasos: finalizar modelos con PDO, completar pruebas Postman y terminar el seed de datos.
El sistema está preparado para incorporar cookies opcionales (analíticas, marketing) en el futuro sin necesidad de modificar la arquitectura.
