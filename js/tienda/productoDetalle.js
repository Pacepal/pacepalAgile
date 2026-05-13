// Detalle de un producto individual — muestra imágenes, precio, stock y permite añadir al carrito

document.addEventListener('DOMContentLoaded', function () {
    var apiBase = '../../src/api/index.php/api';
    var contenedor = document.getElementById('detalle-producto');

    if (!contenedor) {
        return;
    }

    var params = new URLSearchParams(window.location.search);
    var idProducto = params.get('id');

    if (!idProducto) {
        contenedor.textContent = 'No se ha indicado un producto.';
        return;
    }

    function renderDetalle(producto) {
        while (contenedor.firstChild) {
            contenedor.removeChild(contenedor.firstChild);
        }

        var tarjeta = crearElemento('article', null, 'tarjeta-pagina');

        tarjeta.appendChild(crearElemento('h2', producto.nombre || 'Producto'));

        var imagenes = crearElemento('div', null, 'rejilla-pagina mb-3');

        if (producto.imagen1) {
            var img1 = document.createElement('img');
            img1.src = '../../' + producto.imagen1;
            img1.alt = producto.nombre || 'Producto';
            img1.className = 'img-fluid rounded';
            img1.loading = 'lazy';
            imagenes.appendChild(img1);
        }

        if (producto.imagen2) {
            var img2 = document.createElement('img');
            img2.src = '../../' + producto.imagen2;
            img2.alt = producto.nombre || 'Producto vista 2';
            img2.className = 'img-fluid rounded';
            img2.loading = 'lazy';
            imagenes.appendChild(img2);
        }

        tarjeta.appendChild(imagenes);

        tarjeta.appendChild(crearElemento('p', 'Descripción: ' + (producto.descripcion || 'Sin descripción')));

        var precioNumero = Number(producto.precio);
        var precioTexto = Number.isFinite(precioNumero) ? precioNumero.toFixed(2) + ' EUR' : 'No disponible';
        tarjeta.appendChild(crearElemento('p', 'Precio: ' + precioTexto, 'fw-bold'));

        var stockNum = Number(producto.stock);
        var stockTexto = Number.isFinite(stockNum) ? String(stockNum) + ' unidades' : 'No disponible';
        tarjeta.appendChild(crearElemento('p', 'Stock: ' + stockTexto));

        var formCarrito = crearElemento('div', null, 'mt-3');

        var labelCant = crearElemento('label', 'Cantidad:', 'form-label me-2');
        labelCant.setAttribute('for', 'cantidadProducto');
        formCarrito.appendChild(labelCant);

        var inputCant = document.createElement('input');
        inputCant.type = 'number';
        inputCant.id = 'cantidadProducto';
        inputCant.className = 'form-control d-inline-block me-2';
        inputCant.style.width = '80px';
        inputCant.min = '1';
        inputCant.max = String(stockNum > 0 ? stockNum : 1);
        inputCant.value = '1';
        formCarrito.appendChild(inputCant);

        var btnCarrito = crearElemento('button', 'Añadir al carrito', 'boton boton--primario me-2');
        btnCarrito.type = 'button';
        btnCarrito.addEventListener('click', function () {
            anadirAlCarrito(producto.id_articulo, parseInt(inputCant.value, 10) || 1);
        });
        formCarrito.appendChild(btnCarrito);

        var msgCarrito = crearElemento('span', '', 'ms-2');
        msgCarrito.id = 'msgCarrito';
        formCarrito.appendChild(msgCarrito);

        tarjeta.appendChild(formCarrito);

        var btnVolver = crearElemento('a', 'Volver a la tienda', 'boton mt-3 d-inline-block');
        btnVolver.href = 'tienda.php';
        tarjeta.appendChild(btnVolver);

        contenedor.appendChild(tarjeta);
    }

    async function cargarDetalle() {
        try {
            var response = await fetch(apiBase + '/productos/' + encodeURIComponent(idProducto), {
                method: 'GET',
                credentials: 'include',
                headers: { Accept: 'application/json' },
            });

            if (!response.ok) {
                contenedor.textContent = 'No se pudo cargar el producto.';
                return;
            }

            var data = await response.json();
            if (data.status === 'ok' && data.data) {
                renderDetalle(data.data);
            } else {
                contenedor.textContent = 'Producto no encontrado.';
            }
        } catch (_error) {
            contenedor.textContent = 'Error al cargar el producto.';
        }
    }

    async function anadirAlCarrito(productoId, cantidad) {
        var msgEl = document.getElementById('msgCarrito');

        try {
            var response = await fetch(apiBase + '/carrito', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({ producto_id: productoId, cantidad: cantidad }),
            });

            var data = await response.json();
            if (data.status === 'ok') {
                if (msgEl) {
                    msgEl.textContent = '¡Añadido al carrito!';
                }
                if (typeof actualizarContadorCarrito === 'function') {
                    actualizarContadorCarrito();
                }
            } else {
                if (msgEl) {
                    msgEl.textContent = data.message || 'No se pudo añadir.';
                }
            }
        } catch (_error) {
            if (msgEl) {
                msgEl.textContent = 'Error de conexión.';
            }
        }
    }

    cargarDetalle();
});
