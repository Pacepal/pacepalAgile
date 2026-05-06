# Pruebas React Sprint 3

Casos manuales preparados para validar el cliente React. No se ha ejecutado Selenium en esta carpeta.

## Preparacion

```bash
cd frontend-react
npm install
npm run dev
```

Para modo local real, arrancar XAMPP, importar `db/schema.sql` y `db/seed.sql`, y comprobar que la API PHP responde.

## Casos manuales

### Carga inicial de productos

1. Abrir el cliente React.
2. Verificar que aparece la galeria de productos.
3. En local, confirmar que la carga viene de `GET /api/productos`.
4. Sin API disponible, confirmar que se muestra el aviso de modo demo y se cargan productos del JSON estatico.

### Buscador

1. Escribir un texto que coincida con el nombre de un producto.
2. Confirmar que la lista se filtra sin recargar pagina.
3. Buscar por una palabra de la descripcion.
4. Confirmar estado sin resultados con una busqueda inexistente.
5. Vaciar el campo y confirmar que vuelve el listado completo.

### Carrito

1. Anadir un producto.
2. Confirmar que sube el contador del carrito.
3. Cambiar cantidad.
4. Confirmar que cambia subtotal y total.
5. Eliminar el producto.
6. Confirmar que contador y total se actualizan.

### Pedido

1. En local con sesion valida, anadir productos.
2. Pulsar finalizar pedido.
3. Confirmar respuesta de `POST /api/pedido`.
4. En modo demo, confirmar que se informa de que el pedido real requiere API PHP local.

### Registro

1. Enviar formulario vacio.
2. Confirmar mensajes de validacion.
3. Probar email invalido, DNI invalido y contrasenas distintas.
4. En local, enviar datos validos y comprobar `POST /api/register`.
5. En modo demo, confirmar que no se indica persistencia real.

### Login y logout

1. En local, introducir credenciales validas.
2. Confirmar `POST /api/login` y consulta de sesion.
3. Pulsar cerrar sesion y confirmar `POST /api/logout`.
4. En modo demo, confirmar que se indica que la autenticacion real requiere API PHP local.
