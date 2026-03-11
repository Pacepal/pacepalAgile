// Listado de productos de la tienda — carga desde la API y los pinta como tarjetas
// incluye buscador por nombre y boton de añadir al carrito

document.addEventListener('DOMContentLoaded', function () {
    const endpointProductos = '../../src/api/index.php/api/productos';
    const listaProductos = document.getElementById('lista-productos');

    if (!listaProductos) {
        return;
    }

    function limpiarContenedor() {
        while (listaProductos.firstChild) {
            listaProductos.removeChild(listaProductos.firstChild);
        }
    }

    function mostrarErrorCarga() {
        limpiarContenedor();

        const mensaje = document.createElement('p');
        mensaje.textContent = 'No se pudieron cargar los productos.';
        listaProductos.appendChild(mensaje);
    }

    function crearTarjetaProducto(producto) {
        const tarjeta = document.createElement('article');
        tarjeta.className = 'tarjeta tarjeta-producto';

        // <img src="..." alt="..." loading="lazy" />
        const imagen = document.createElement('img');
        imagen.src = '../../' + (producto.imagen1 || 'img/productos/zapatillaPacepal1.webp');
        imagen.alt = producto.nombre || 'Producto PacePal';
        imagen.loading = 'lazy';

        // <div class="tarjeta-producto__cuerpo">
        const cuerpo = document.createElement('div');
        cuerpo.className = 'tarjeta-producto__cuerpo';

        // <h3>Nombre</h3>
        const nombre = document.createElement('h3');
        nombre.textContent = producto.nombre || 'Producto sin nombre';

        // <p><i class="bi bi-leaf-fill"></i> Precio</p>
        const precioP = document.createElement('p');
        const iconoPrecio = document.createElement('i');
        iconoPrecio.className = 'bi bi-leaf-fill';
        iconoPrecio.setAttribute('aria-hidden', 'true');
        precioP.appendChild(iconoPrecio);
        const precioNumero = Number(producto.precio);
        if (Number.isFinite(precioNumero)) {
            precioP.appendChild(document.createTextNode(' ' + precioNumero.toFixed(2) + ' EUR'));
        } else {
            precioP.appendChild(document.createTextNode(' Precio no disponible'));
        }

        // <p><i class="bi bi-leaf-fill"></i> Producción responsable</p>
        const ecoP = document.createElement('p');
        const iconoEco = document.createElement('i');
        iconoEco.className = 'bi bi-leaf-fill';
        iconoEco.setAttribute('aria-hidden', 'true');
        ecoP.appendChild(iconoEco);
        ecoP.appendChild(document.createTextNode(' Producción responsable'));

        // <button> Anadir al carrito </button>
        const boton = document.createElement('button');
        boton.type = 'button';
        boton.className = 'boton boton--primario';
        boton.textContent = 'Anadir al carrito';

        boton.addEventListener('click', async function () {
            boton.disabled = true;
            boton.textContent = 'Anadiendo...';

            try {
                var resp = await fetch('../../src/api/index.php/api/carrito', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify({
                        producto_id: producto.id_articulo,
                        cantidad: 1,
                    }),
                });

                var result = await resp.json().catch(function () {
                    return {};
                });

                if (!resp.ok || result.status !== 'ok') {
                    boton.textContent = result.message || 'Error';
                    setTimeout(function () {
                        boton.textContent = 'Anadir al carrito';
                        boton.disabled = false;
                    }, 2000);
                    return;
                }

                boton.textContent = 'Anadido!';
                if (typeof actualizarContadorCarrito === 'function') {
                    actualizarContadorCarrito();
                }
                setTimeout(function () {
                    boton.textContent = 'Anadir al carrito';
                    boton.disabled = false;
                }, 1500);
            } catch (_e) {
                boton.textContent = 'Error de conexion';
                setTimeout(function () {
                    boton.textContent = 'Anadir al carrito';
                    boton.disabled = false;
                }, 2000);
            }
        });

        // <a class="boton boton--primario">Ver producto</a>
        const enlaceDetalle = document.createElement('a');
        enlaceDetalle.className = 'boton boton--primario';
        enlaceDetalle.textContent = 'Ver producto';
        enlaceDetalle.href = 'producto.php?id=' + encodeURIComponent(String(producto.id_articulo || ''));

        cuerpo.appendChild(nombre);
        cuerpo.appendChild(precioP);
        cuerpo.appendChild(ecoP);
        cuerpo.appendChild(boton);
        cuerpo.appendChild(enlaceDetalle);

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(cuerpo);

        return tarjeta;
    }

    async function cargarProductos() {
        try {
            const response = await fetch(endpointProductos, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }

            const data = await response.json();
            const productos = Array.isArray(data && data.data) ? data.data : [];

            limpiarContenedor();

            if (productos.length === 0) {
                const vacio = document.createElement('p');
                vacio.textContent = 'No hay productos disponibles.';
                listaProductos.appendChild(vacio);
                return;
            }

            const fragment = document.createDocumentFragment();
            for (let i = 0; i < productos.length; i += 1) {
                const tarjeta = crearTarjetaProducto(productos[i]);
                fragment.appendChild(tarjeta);
            }

            listaProductos.appendChild(fragment);
        } catch (_error) {
            mostrarErrorCarga();
        }
    }

    cargarProductos();

    // Buscador de productos
    var buscador = document.getElementById('buscadorProductosInput');
    if (buscador) {
        buscador.addEventListener('input', function () {
            var filtro = buscador.value.toLowerCase().trim();
            var tarjetas = listaProductos.querySelectorAll('.tarjeta-producto');

            for (var i = 0; i < tarjetas.length; i++) {
                var nombre = tarjetas[i].querySelector('h3');
                var texto = nombre ? nombre.textContent.toLowerCase() : '';
                tarjetas[i].style.display = texto.indexOf(filtro) !== -1 ? '' : 'none';
            }
        });
    }
});
