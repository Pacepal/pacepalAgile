# Pruebas Postman - Backend PacePal

Este documento recoge pruebas manuales en Postman para los endpoints reales definidos en `src/api/index.php`.

Base URL usada en ejemplos:

`http://localhost/proyectoagilepacepal/src/api/index.php`

Importante para pruebas con sesion:

- Haz primero login en Postman.
- Mantén las cookies de sesion (PHPSESSID) para pruebas de actividad, carrito y pedido.

---

## 1) Login correcto

Endpoint:

`POST /api/login`

Metodo:

`POST`

Body (raw JSON):

```json
{
  "email": "admin@pacepal.com",
  "password": "admin123"
}
```

Respuesta esperada:

```json
{
  "status": "ok",
  "usuario": {
    "id_usuario": 1,
    "nombre": "Administrador PacePal",
    "dni": "00000000A",
    "email": "admin@pacepal.com",
    "rol": "admin"
  }
}
```

Captura de Postman (placeholder):

`[PENDIENTE_CAPTURA_LOGIN_OK]`

---

## 2) Login incorrecto

Endpoint:

`POST /api/login`

Metodo:

`POST`

Body (raw JSON):

```json
{
  "email": "admin@pacepal.com",
  "password": "clave_incorrecta"
}
```

Respuesta esperada:

```json
{
  "status": "error",
  "message": "Credenciales incorrectas"
}
```

Captura de Postman (placeholder):

`[PENDIENTE_CAPTURA_LOGIN_ERROR]`

---

## 3) Obtener productos

Endpoint:

`GET /api/productos`

Metodo:

`GET`

Body:

`No aplica`

Respuesta esperada:

```json
{
  "status": "ok",
  "data": [
    {
      "id_articulo": 1,
      "nombre": "Zapatillas Trail EcoRun",
      "precio": "89.90",
      "stock": 25,
      "imagen1": "img/productos/zapatillaPacepal1.webp",
      "imagen2": "img/productos/zapatillaPacepal2.webp",
      "id_categoria": 1
    }
  ]
}
```

Captura de Postman (placeholder):

`[PENDIENTE_CAPTURA_GET_PRODUCTOS]`

---

## 4) Crear actividad

Endpoint:

`POST /api/actividad`

Metodo:

`POST`

Body (raw JSON):

```json
{
  "id_ruta": 3,
  "fecha": "2026-04-10",
  "hora": "09:00:00",
  "nivel": "medio",
  "plazas_max": 12,
  "descripcion": "Entrenamiento en grupo"
}
```

Respuesta esperada (usuario con rol `usuario` y sesion activa):

```json
{
  "status": "ok",
  "data": {
    "id_actividad": 1
  }
}
```

Respuesta esperada sin permisos o sin sesion valida:

```json
{
  "status": "error",
  "message": "Acceso no autorizado"
}
```

Captura de Postman (placeholder):

`[PENDIENTE_CAPTURA_POST_ACTIVIDAD]`

---

## 5) Anadir producto al carrito

Endpoint:

`POST /api/carrito`

Metodo:

`POST`

Body (raw JSON):

```json
{
  "producto_id": 3,
  "cantidad": 2
}
```

Respuesta esperada (rol `usuario` y sesion activa):

```json
{
  "status": "ok",
  "data": {
    "carrito": {
      "3": 2
    }
  }
}
```

Respuesta esperada sin permisos:

```json
{
  "status": "error",
  "message": "Acceso no autorizado"
}
```

Captura de Postman (placeholder):

`[PENDIENTE_CAPTURA_POST_CARRITO]`

---

## 6) Generar pedido

Endpoint:

`POST /api/pedido`

Metodo:

`POST`

Body (raw JSON):

```json
{}
```

Nota:

- El endpoint toma productos desde `$_SESSION['carrito']`.
- El usuario se toma desde `$_SESSION['usuario_id']`.

Respuesta esperada (carrito con productos y rol `usuario`):

```json
{
  "status": "ok",
  "data": {
    "id_pedido": 1,
    "total": 199.8
  }
}
```

Respuesta esperada con carrito vacio:

```json
{
  "status": "error",
  "message": "El carrito esta vacio."
}
```

Captura de Postman (placeholder):

`[PENDIENTE_CAPTURA_POST_PEDIDO]`

---

## Checklist rapido de ejecucion en Postman

1. Ejecutar login con usuario valido.
2. Verificar cookie de sesion almacenada.
3. Consultar productos.
4. Anadir producto al carrito.
5. (Opcional) Consultar carrito con `GET /api/carrito`.
6. Generar pedido con `POST /api/pedido`.

---

## 7) Crear usuario (admin)

Endpoint:

`POST /api/usuario`

Metodo:

`POST`

Body (raw JSON):

```json
{
  "nombre": "Nuevo Usuario",
  "dni": "12345678B",
  "email": "nuevo@pacepal.com",
  "password": "password123",
  "rol": "usuario"
}
```

Respuesta esperada (rol `admin` y sesion activa):

```json
{
  "status": "ok",
  "data": {
    "id_usuario": 5
  }
}
```

Respuesta esperada sin permisos:

```json
{
  "status": "error",
  "message": "Acceso no autorizado."
}
```

Captura de Postman (placeholder):

`[PENDIENTE_CAPTURA_POST_USUARIO]`

---

## 8) Actualizar usuario (admin)

Endpoint:

`PUT /api/usuarios/5`

Metodo:

`PUT`

Body (raw JSON):

```json
{
  "nombre": "Usuario Editado",
  "email": "editado@pacepal.com",
  "rol": "admin"
}
```

Respuesta esperada (rol `admin` y sesion activa):

```json
{
  "status": "ok",
  "message": "Usuario actualizado."
}
```

Captura de Postman (placeholder):

`[PENDIENTE_CAPTURA_PUT_USUARIO]`

---

## 9) Eliminar usuario (admin)

Endpoint:

`DELETE /api/usuarios/5`

Metodo:

`DELETE`

Respuesta esperada (rol `admin` y sesion activa):

```json
{
  "status": "ok",
  "message": "Usuario eliminado."
}
```

Respuesta esperada si intenta eliminarse a si mismo:

```json
{
  "status": "error",
  "message": "No puedes eliminarte a ti mismo."
}
```

Captura de Postman (placeholder):

`[PENDIENTE_CAPTURA_DELETE_USUARIO]`

---

## 10) Crear ruta (admin)

Endpoint:

`POST /api/ruta`

Metodo:

`POST`

Body (raw JSON):

```json
{
  "nombre": "Ruta del Lago",
  "descripcion": "Ruta circular alrededor del lago",
  "distancia": 12.5,
  "dificultad": "moderada",
  "desnivel": 350,
  "duracion": "3h 30min",
  "ubicacion": "Sierra Norte"
}
```

Respuesta esperada (rol `admin` y sesion activa):

```json
{
  "status": "ok",
  "data": {
    "id_ruta": 4
  }
}
```

Captura de Postman (placeholder):

`[PENDIENTE_CAPTURA_POST_RUTA]`

---

## 11) Actualizar ruta (admin)

Endpoint:

`PUT /api/rutas/4`

Metodo:

`PUT`

Body (raw JSON):

```json
{
  "nombre": "Ruta del Lago Actualizada",
  "distancia": 13.0,
  "dificultad": "dificil"
}
```

Respuesta esperada (rol `admin` y sesion activa):

```json
{
  "status": "ok",
  "message": "Ruta actualizada."
}
```

Captura de Postman (placeholder):

`[PENDIENTE_CAPTURA_PUT_RUTA]`

---

## 12) Eliminar ruta (admin)

Endpoint:

`DELETE /api/rutas/4`

Metodo:

`DELETE`

Respuesta esperada (rol `admin` y sesion activa):

```json
{
  "status": "ok",
  "message": "Ruta eliminada."
}
```

Captura de Postman (placeholder):

`[PENDIENTE_CAPTURA_DELETE_RUTA]`

---

## 13) Obtener todos los pedidos (admin)

Endpoint:

`GET /api/pedidos/admin`

Metodo:

`GET`

Respuesta esperada (rol `admin` y sesion activa):

```json
{
  "status": "ok",
  "data": [
    {
      "id_pedido": 1,
      "id_usuario": 2,
      "nombre_usuario": "Pablo",
      "email_usuario": "pablo@email.com",
      "fecha": "2026-03-01",
      "total": "89.90",
      "estado": "pendiente"
    }
  ]
}
```

Captura de Postman (placeholder):

`[PENDIENTE_CAPTURA_GET_PEDIDOS_ADMIN]`

---

## 14) Crear pedido con stock insuficiente

Endpoint:

`POST /api/pedido`

Metodo:

`POST`

Precondicion:

Tener en el carrito un producto con cantidad superior al stock disponible.

Respuesta esperada (HTTP 409):

```json
{
  "status": "error",
  "message": "Stock insuficiente para \"Zapatillas Trail Eco\". Disponible: 2, solicitado: 50."
}
```

Verificacion:

- No se crea el pedido.
- El stock del producto no se modifica.
- El carrito se mantiene intacto.

Captura de Postman (placeholder):

`[PENDIENTE_CAPTURA_STOCK_INSUFICIENTE]`

---

## 15) Añadir al carrito con stock insuficiente

Endpoint:

`POST /api/carrito`

Metodo:

`POST`

Body (raw JSON):

```json
{
  "producto_id": 1,
  "cantidad": 999
}
```

Respuesta esperada (HTTP 409):

```json
{
  "status": "error",
  "message": "Stock insuficiente. Disponible: 25, en carrito: 0, solicitado: 999."
}
```

Captura de Postman (placeholder):

`[PENDIENTE_CAPTURA_CARRITO_STOCK]`

---

## 16) Guardar consentimiento de cookies

Endpoint:

`POST /api/cookies`

Metodo:

`POST`

Body (raw JSON):

```json
{
  "tecnicas": true,
  "analiticas": false,
  "marketing": false
}
```

Respuesta esperada (HTTP 200):

```json
{
  "status": "ok",
  "message": "Preferencias de cookies guardadas.",
  "consentimiento": {
    "tecnicas": true,
    "analiticas": false,
    "marketing": false
  }
}
```

Captura de Postman (placeholder):

`[PENDIENTE_CAPTURA_COOKIES_SET]`

---

## 17) Obtener consentimiento de cookies

Endpoint:

`GET /api/cookies`

Metodo:

`GET`

Headers:

No requiere autenticacion. La cookie `pacepal_cookies` se envia automaticamente si fue establecida previamente.

Respuesta esperada (HTTP 200):

```json
{
  "status": "ok",
  "consentimiento": {
    "tecnicas": true,
    "analiticas": false,
    "marketing": false
  }
}
```

Captura de Postman (placeholder):

`[PENDIENTE_CAPTURA_COOKIES_GET]`
