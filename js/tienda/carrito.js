// Carrito de la tienda — muestra los items, permite cambiar cantidad, eliminar y finalizar pedido
// el carrito vive en sesion PHP, aqui solo lo pintamos y mandamos las acciones a la API

document.addEventListener('DOMContentLoaded', function () {
    var endpointCarrito = '../../src/api/index.php/api/carrito';
    var endpointPedido = '../../src/api/index.php/api/pedido';
    var contenedor = document.getElementById('contenido-carrito');
    var mensajeDiv = document.getElementById('mensaje-carrito');

    if (!contenedor) {
        return;
    }

    function mostrarMensaje(texto, tipo) {
        if (!mensajeDiv) return;
        while (mensajeDiv.firstChild) {
            mensajeDiv.removeChild(mensajeDiv.firstChild);
        }
        if (!texto) return;
        var p = document.createElement('p');
        p.textContent = texto;
        p.className = tipo === 'ok' ? 'text-success fw-bold' : 'text-danger fw-bold';
        mensajeDiv.appendChild(p);
    }

    function limpiar() {
        while (contenedor.firstChild) {
            contenedor.removeChild(contenedor.firstChild);
        }
    }

    function crearFilaItem(item) {
        var fila = document.createElement('div');
        fila.className = 'd-flex align-items-center justify-content-between border-bottom py-3 flex-wrap gap-2';

        var infoBloque = document.createElement('div');
        infoBloque.className = 'd-flex align-items-center gap-3';

        var img = document.createElement('img');
        img.src = '../../' + (item.imagen1 || 'img/productos/zapatillaPacepal1.webp');
        img.alt = item.nombre || 'Producto';
        img.className = 'rounded';
        img.style.width = '70px';
        img.style.height = '70px';
        img.style.objectFit = 'cover';

        var textoBloque = document.createElement('div');

        var nombre = document.createElement('strong');
        nombre.textContent = item.nombre || 'Producto';

        var precio = document.createElement('p');
        precio.className = 'mb-0 text-muted';
        precio.textContent = Number(item.precio_unitario).toFixed(2) + ' EUR x ' + item.cantidad;

        textoBloque.appendChild(nombre);
        textoBloque.appendChild(precio);

        infoBloque.appendChild(img);
        infoBloque.appendChild(textoBloque);

        var acciones = document.createElement('div');
        acciones.className = 'd-flex align-items-center gap-2';

        var inputCantidad = document.createElement('input');
        inputCantidad.type = 'number';
        inputCantidad.min = '1';
        inputCantidad.max = '99';
        inputCantidad.value = String(item.cantidad);
        inputCantidad.className = 'form-control';
        inputCantidad.style.width = '70px';

        inputCantidad.addEventListener('change', function () {
            var nueva = parseInt(inputCantidad.value, 10);
            if (isNaN(nueva) || nueva < 1) {
                inputCantidad.value = String(item.cantidad);
                return;
            }
            actualizarCantidad(item.id_articulo, nueva);
        });

        var btnEliminar = document.createElement('button');
        btnEliminar.type = 'button';
        btnEliminar.className = 'btn btn-outline-danger btn-sm';
        btnEliminar.title = 'Eliminar del carrito';

        var icono = document.createElement('i');
        icono.className = 'bi bi-trash';
        btnEliminar.appendChild(icono);

        btnEliminar.addEventListener('click', function () {
            eliminarItem(item.id_articulo);
        });

        var subtotalTexto = document.createElement('span');
        subtotalTexto.className = 'fw-bold';
        subtotalTexto.style.minWidth = '80px';
        subtotalTexto.style.textAlign = 'right';
        subtotalTexto.textContent = Number(item.subtotal).toFixed(2) + ' EUR';

        acciones.appendChild(inputCantidad);
        acciones.appendChild(btnEliminar);
        acciones.appendChild(subtotalTexto);

        fila.appendChild(infoBloque);
        fila.appendChild(acciones);

        return fila;
    }

    function renderCarrito(data) {
        limpiar();

        var items = data.items || [];
        var total = data.total || 0;

        if (items.length === 0) {
            var vacio = document.createElement('p');
            vacio.textContent = 'Tu carrito está vacío.';
            contenedor.appendChild(vacio);

            var enlaceTienda = document.createElement('a');
            enlaceTienda.href = 'tienda.php';
            enlaceTienda.className = 'boton boton--primario mt-2 d-inline-block';
            enlaceTienda.textContent = 'Ir a la tienda';
            contenedor.appendChild(enlaceTienda);
            return;
        }

        for (var i = 0; i < items.length; i++) {
            contenedor.appendChild(crearFilaItem(items[i]));
        }

        var totalDiv = document.createElement('div');
        totalDiv.className = 'd-flex justify-content-between align-items-center mt-4';

        var totalLabel = document.createElement('span');
        totalLabel.className = 'fs-5 fw-bold';
        totalLabel.textContent = 'Total:';

        var totalValor = document.createElement('span');
        totalValor.className = 'fs-5 fw-bold';
        totalValor.textContent = Number(total).toFixed(2) + ' EUR';

        totalDiv.appendChild(totalLabel);
        totalDiv.appendChild(totalValor);
        contenedor.appendChild(totalDiv);

        var botonesDiv = document.createElement('div');
        botonesDiv.className = 'd-flex gap-3 mt-3 flex-wrap';

        var btnComprar = document.createElement('button');
        btnComprar.type = 'button';
        btnComprar.className = 'boton boton--primario';
        btnComprar.textContent = 'Finalizar pedido';
        btnComprar.addEventListener('click', finalizarPedido);

        var btnSeguir = document.createElement('a');
        btnSeguir.href = 'tienda.php';
        btnSeguir.className = 'boton';
        btnSeguir.textContent = 'Seguir comprando';

        botonesDiv.appendChild(btnComprar);
        botonesDiv.appendChild(btnSeguir);
        contenedor.appendChild(botonesDiv);
    }

    async function cargarCarrito() {
        try {
            var resp = await fetch(endpointCarrito, {
                method: 'GET',
                headers: { Accept: 'application/json' },
                credentials: 'include',
            });

            if (!resp.ok) {
                mostrarMensaje('No se pudo cargar el carrito.', 'error');
                return;
            }

            var json = await resp.json();
            if (json.status !== 'ok') {
                mostrarMensaje(json.message || 'Error al cargar el carrito.', 'error');
                return;
            }

            renderCarrito(json.data);
        } catch (_e) {
            mostrarMensaje('Error de conexión con el servidor.', 'error');
        }
    }

    async function actualizarCantidad(productoId, nuevaCantidad) {
        try {
            var resp = await fetch(endpointCarrito, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    producto_id: productoId,
                    cantidad: nuevaCantidad,
                }),
            });

            if (!resp.ok) {
                mostrarMensaje('No se pudo actualizar la cantidad.', 'error');
                return;
            }

            cargarCarrito();
            mostrarMensaje('', '');
            if (typeof actualizarContadorCarrito === 'function') {
                actualizarContadorCarrito();
            }
        } catch (_e) {
            mostrarMensaje('Error de conexión con el servidor.', 'error');
        }
    }

    async function eliminarItem(productoId) {
        try {
            var resp = await fetch(endpointCarrito, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    producto_id: productoId,
                }),
            });

            if (!resp.ok) {
                mostrarMensaje('No se pudo eliminar el producto.', 'error');
                return;
            }

            cargarCarrito();
            mostrarMensaje('Producto eliminado del carrito.', 'ok');
            if (typeof actualizarContadorCarrito === 'function') {
                actualizarContadorCarrito();
            }
        } catch (_e) {
            mostrarMensaje('Error de conexión con el servidor.', 'error');
        }
    }

    async function finalizarPedido() {
        mostrarMensaje('Procesando pedido...', 'ok');

        try {
            var resp = await fetch(endpointPedido, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                credentials: 'include',
            });

            var json = await resp.json().catch(function () {
                return {};
            });

            if (!resp.ok || json.status !== 'ok') {
                mostrarMensaje(json.message || 'No se pudo completar el pedido.', 'error');
                return;
            }

            limpiar();
            mostrarMensaje('Pedido realizado correctamente. ID: ' + (json.data && json.data.id_pedido), 'ok');
            if (typeof actualizarContadorCarrito === 'function') {
                actualizarContadorCarrito();
            }

            var enlacePerfil = document.createElement('a');
            enlacePerfil.href = '../usuario/perfil.php';
            enlacePerfil.className = 'boton boton--primario mt-3 d-inline-block';
            enlacePerfil.textContent = 'Ver mis pedidos';
            contenedor.appendChild(enlacePerfil);

            var enlaceTienda = document.createElement('a');
            enlaceTienda.href = 'tienda.php';
            enlaceTienda.className = 'boton mt-3 ms-2 d-inline-block';
            enlaceTienda.textContent = 'Seguir comprando';
            contenedor.appendChild(enlaceTienda);
        } catch (_e) {
            mostrarMensaje('Error de conexión con el servidor.', 'error');
        }
    }

    cargarCarrito();
});
