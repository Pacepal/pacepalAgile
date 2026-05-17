// Tienda clásica: listado, búsqueda y acciones de carrito contra la API PHP.

document.addEventListener('DOMContentLoaded', function () {
    const endpointProductos = '../../src/api/index.php/api/productos?destacados=1';
    const listaProductos = document.getElementById('lista-productos');

    if (!listaProductos) {
        return;
    }

    var PRODUCTOS_POR_PAGINA = 6;
    var paginaActual         = 1;
    var terminoBusqueda      = '';
    var debounceTimer        = null;
    var controladorActual    = null;

    var buscador         = document.getElementById('buscadorProductosInput');
    var btnVerDestacados = document.getElementById('btnVerDestacados');
    var paginacion       = document.getElementById('tienda-paginacion');

    function limpiarContenedor() {
        while (listaProductos.firstChild) {
            listaProductos.removeChild(listaProductos.firstChild);
        }
    }

    function mostrarCargando() {
        limpiarContenedor();
        const spinner = document.createElement('p');
        spinner.className = 'tienda-cargando';
        spinner.setAttribute('aria-live', 'polite');
        spinner.textContent = 'Cargando productos...';
        listaProductos.appendChild(spinner);
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

        const imagen = document.createElement('img');
        imagen.src = '../../' + (producto.imagen1 || 'img/productos/zapatillaPacepal1.webp');
        imagen.alt = producto.nombre || 'Producto PacePal';
        imagen.loading = 'lazy';

        const cuerpo = document.createElement('div');
        cuerpo.className = 'tarjeta-producto__cuerpo';

        const nombre = document.createElement('h3');
        nombre.textContent = producto.nombre || 'Producto sin nombre';

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

        const ecoP = document.createElement('p');
        const iconoEco = document.createElement('i');
        iconoEco.className = 'bi bi-leaf-fill';
        iconoEco.setAttribute('aria-hidden', 'true');
        ecoP.appendChild(iconoEco);
        ecoP.appendChild(document.createTextNode(' Producción responsable'));

        const boton = document.createElement('button');
        boton.type = 'button';
        boton.className = 'boton boton--primario';
        boton.textContent = 'Añadir al carrito';

        boton.addEventListener('click', async function () {
            boton.disabled = true;
            boton.textContent = 'Añadiendo...';

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
                        boton.textContent = 'Añadir al carrito';
                        boton.disabled = false;
                    }, 2000);
                    return;
                }

                boton.textContent = '¡Añadido!';
                if (typeof actualizarContadorCarrito === 'function') {
                    actualizarContadorCarrito();
                }
                setTimeout(function () {
                    boton.textContent = 'Añadir al carrito';
                    boton.disabled = false;
                }, 1500);
            } catch (_e) {
                boton.textContent = 'Error de conexión';
                setTimeout(function () {
                    boton.textContent = 'Añadir al carrito';
                    boton.disabled = false;
                }, 2000);
            }
        });

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
        // Evita que una búsqueda anterior sobrescriba resultados más recientes.
        if (controladorActual) { controladorActual.abort(); }
        controladorActual = new AbortController();
        var signal = controladorActual.signal;

        mostrarCargando();
        try {
            const response = await fetch(endpointProductos, {
                method: 'GET',
                credentials: 'include',
                headers: { Accept: 'application/json' },
                signal: signal,
            });

            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }

            const data = await response.json();
            const productos = Array.isArray(data && data.data) ? data.data : [];

            controladorActual = null;
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
        } catch (err) {
            if (err.name !== 'AbortError') { mostrarErrorCarga(); }
        }
    }

    cargarProductos();

    function limpiarPaginacion() {
        if (!paginacion) { return; }
        while (paginacion.firstChild) {
            paginacion.removeChild(paginacion.firstChild);
        }
    }

    function renderizarPaginacion(total, pagina, porPagina) {
        limpiarPaginacion();
        if (!paginacion || total <= porPagina) { return; }

        var totalPaginas = Math.ceil(total / porPagina);
        var nav = document.createElement('nav');
        nav.setAttribute('aria-label', 'Paginación de productos');
        var ul = document.createElement('ul');
        ul.className = 'tienda-paginacion__lista';

        for (var p = 1; p <= totalPaginas; p++) {
            var li  = document.createElement('li');
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.textContent = String(p);
            btn.className = 'tienda-paginacion__btn' + (p === pagina ? ' tienda-paginacion__btn--activo' : '');
            btn.setAttribute('aria-current', p === pagina ? 'page' : 'false');
            btn.disabled = (p === pagina);
            (function (numPagina) {
                btn.addEventListener('click', function () {
                    ejecutarBusqueda(terminoBusqueda, numPagina);
                });
            })(p);
            li.appendChild(btn);
            ul.appendChild(li);
        }

        nav.appendChild(ul);
        paginacion.appendChild(nav);
    }

    function ejecutarBusqueda(q, pagina) {
        paginaActual    = pagina;
        terminoBusqueda = q;

        if (controladorActual) { controladorActual.abort(); }
        controladorActual = new AbortController();

        var url = '../../src/api/index.php/api/productos?q=' + encodeURIComponent(q) + '&page=' + pagina;

        mostrarCargando();
        fetch(url, {
            method: 'GET',
            credentials: 'include',
            headers: { Accept: 'application/json' },
            signal: controladorActual.signal,
        })
            .then(function (res) {
                if (!res.ok) { throw new Error('Error API'); }
                return res.json();
            })
            .then(function (data) {
                controladorActual = null;
                var productos = Array.isArray(data && data.data) ? data.data : [];
                var total     = Number(data.total) || 0;

                limpiarContenedor();

                if (productos.length === 0) {
                    limpiarPaginacion();
                    var aviso = document.createElement('p');
                    aviso.className = 'tienda-sin-resultados';
                    aviso.setAttribute('aria-live', 'polite');
                    aviso.textContent = 'No se encontraron productos para "' + q + '".';
                    listaProductos.appendChild(aviso);
                    return;
                }

                var frag = document.createDocumentFragment();
                for (var i = 0; i < productos.length; i++) {
                    frag.appendChild(crearTarjetaProducto(productos[i]));
                }
                listaProductos.appendChild(frag);
                renderizarPaginacion(total, pagina, PRODUCTOS_POR_PAGINA);
            })
            .catch(function (err) {
                if (err.name !== 'AbortError') { mostrarErrorCarga(); }
            });
    }

    function volverADestacados() {
        if (buscador)        { buscador.value = ''; }
        if (btnVerDestacados) { btnVerDestacados.hidden = true; }
        if (controladorActual) { controladorActual.abort(); controladorActual = null; }
        clearTimeout(debounceTimer);
        limpiarPaginacion();
        cargarProductos();
    }

    if (btnVerDestacados) {
        btnVerDestacados.addEventListener('click', volverADestacados);
    }

    if (buscador) {
        buscador.addEventListener('input', function () {
            var q = buscador.value.trim();

            if (btnVerDestacados) { btnVerDestacados.hidden = (q === ''); }

            clearTimeout(debounceTimer);
            if (controladorActual) { controladorActual.abort(); controladorActual = null; }

            debounceTimer = setTimeout(function () {
                if (q === '') {
                    volverADestacados();
                    return;
                }
                ejecutarBusqueda(q, 1);
            }, 300);
        });
    }
});
