// Perfil del usuario — muestra datos personales, permite editar y lista el historial de pedidos

document.addEventListener('DOMContentLoaded', function () {
    var apiBase = '../../src/api/index.php/api';
    var perfilContenedor = document.getElementById('perfil-usuario');
    var pedidosContenedor = document.getElementById('historial-pedidos');

    if (!perfilContenedor) {
        return;
    }

    function renderPerfil(usuario) {
        limpiar(perfilContenedor);

        var tarjeta = crearElemento('article', null, 'tarjeta-pagina');

        tarjeta.appendChild(crearElemento('h2', 'Datos personales'));
        tarjeta.appendChild(crearElemento('p', 'Nombre: ' + (usuario.nombre || '')));
        tarjeta.appendChild(crearElemento('p', 'Email: ' + (usuario.email || '')));
        tarjeta.appendChild(crearElemento('p', 'DNI: ' + (usuario.dni || '')));
        tarjeta.appendChild(crearElemento('p', 'Rol: ' + (usuario.rol || 'usuario')));
        tarjeta.appendChild(crearElemento('p', 'Sexo: ' + (usuario.sexo || 'No indicado')));
        tarjeta.appendChild(crearElemento('p', 'Fecha de nacimiento: ' + (usuario.fecha_nacimiento || 'No indicada')));
        tarjeta.appendChild(crearElemento('p', 'Dirección: ' + (usuario.direccion || 'No indicada')));
        tarjeta.appendChild(crearElemento('p', 'País: ' + (usuario.pais || 'No indicado')));
        tarjeta.appendChild(crearElemento('p', 'Registrado: ' + (usuario.fecha_registro || '')));

        var btnEditar = crearElemento('button', 'Editar perfil', 'boton boton--primario mt-3');
        btnEditar.type = 'button';
        btnEditar.addEventListener('click', function () {
            renderFormularioEdicion(usuario);
        });
        tarjeta.appendChild(btnEditar);

        perfilContenedor.appendChild(tarjeta);
    }

    function renderFormularioEdicion(usuario) {
        limpiar(perfilContenedor);

        var tarjeta = crearElemento('article', null, 'tarjeta-pagina');
        tarjeta.appendChild(crearElemento('h2', 'Editar perfil'));

        var form = document.createElement('form');
        form.id = 'formEditarPerfil';

        var campos = [
            { id: 'editNombre', label: 'Nombre', type: 'text', value: usuario.nombre || '', required: true },
            { id: 'editSexo', label: 'Sexo', type: 'text', value: usuario.sexo || '' },
            { id: 'editFechaNacimiento', label: 'Fecha de nacimiento', type: 'date', value: usuario.fecha_nacimiento || '' },
            { id: 'editDireccion', label: 'Dirección', type: 'text', value: usuario.direccion || '' },
            { id: 'editPais', label: 'País', type: 'text', value: usuario.pais || '' },
            { id: 'editTarjeta', label: 'Tarjeta', type: 'text', value: usuario.tarjeta || '' },
        ];

        for (var i = 0; i < campos.length; i++) {
            var campo = campos[i];
            var grupo = crearElemento('div', null, 'mb-3');

            var label = crearElemento('label', campo.label, 'form-label');
            label.setAttribute('for', campo.id);
            grupo.appendChild(label);

            var input = document.createElement('input');
            input.type = campo.type;
            input.id = campo.id;
            input.className = 'form-control';
            input.value = campo.value;
            if (campo.required) {
                input.required = true;
            }
            grupo.appendChild(input);

            form.appendChild(grupo);
        }

        var grupoNotif = crearElemento('div', null, 'mb-3 form-check');
        var checkNotif = document.createElement('input');
        checkNotif.type = 'checkbox';
        checkNotif.id = 'editNotificaciones';
        checkNotif.className = 'form-check-input';
        checkNotif.checked = !!usuario.notificaciones;
        grupoNotif.appendChild(checkNotif);
        var labelNotif = crearElemento('label', 'Notificaciones', 'form-check-label');
        labelNotif.setAttribute('for', 'editNotificaciones');
        grupoNotif.appendChild(labelNotif);
        form.appendChild(grupoNotif);

        var grupoRevista = crearElemento('div', null, 'mb-3 form-check');
        var checkRevista = document.createElement('input');
        checkRevista.type = 'checkbox';
        checkRevista.id = 'editRevista';
        checkRevista.className = 'form-check-input';
        checkRevista.checked = !!usuario.revista;
        grupoRevista.appendChild(checkRevista);
        var labelRevista = crearElemento('label', 'Suscripción a revista', 'form-check-label');
        labelRevista.setAttribute('for', 'editRevista');
        grupoRevista.appendChild(labelRevista);
        form.appendChild(grupoRevista);

        var btnGuardar = crearElemento('button', 'Guardar cambios', 'boton boton--primario me-2');
        btnGuardar.type = 'submit';
        form.appendChild(btnGuardar);

        var btnCancelar = crearElemento('button', 'Cancelar', 'boton');
        btnCancelar.type = 'button';
        btnCancelar.addEventListener('click', function () {
            cargarPerfil();
        });
        form.appendChild(btnCancelar);

        var msgEl = crearElemento('p', '', 'mt-2');
        msgEl.id = 'msgPerfil';
        form.appendChild(msgEl);

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            guardarPerfil();
        });

        tarjeta.appendChild(form);
        perfilContenedor.appendChild(tarjeta);
    }

    async function guardarPerfil() {
        var msgEl = document.getElementById('msgPerfil');
        var body = {
            nombre: document.getElementById('editNombre').value,
            sexo: document.getElementById('editSexo').value,
            fecha_nacimiento: document.getElementById('editFechaNacimiento').value,
            direccion: document.getElementById('editDireccion').value,
            pais: document.getElementById('editPais').value,
            tarjeta: document.getElementById('editTarjeta').value,
            notificaciones: document.getElementById('editNotificaciones').checked,
            revista: document.getElementById('editRevista').checked,
        };

        try {
            var response = await fetch(apiBase + '/perfil', {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(body),
            });

            var data = await response.json();
            if (data.status === 'ok') {
                cargarPerfil();
            } else {
                if (msgEl) {
                    msgEl.textContent = data.message || 'Error al guardar.';
                }
            }
        } catch (_error) {
            if (msgEl) {
                msgEl.textContent = 'Error de conexión.';
            }
        }
    }

    function renderPedidos(pedidos) {
        if (!pedidosContenedor) {
            return;
        }

        limpiar(pedidosContenedor);

        if (pedidos.length === 0) {
            pedidosContenedor.appendChild(crearElemento('p', 'No tienes pedidos.'));
            return;
        }

        var fragment = document.createDocumentFragment();

        for (var i = 0; i < pedidos.length; i++) {
            var pedido = pedidos[i];
            var tarjeta = crearElemento('article', null, 'tarjeta-pagina mb-3');

            tarjeta.appendChild(crearElemento('h3', 'Pedido #' + pedido.id_pedido));
            tarjeta.appendChild(crearElemento('p', 'Fecha: ' + (pedido.fecha || 'No disponible')));
            tarjeta.appendChild(crearElemento('p', 'Total: ' + (Number(pedido.total).toFixed(2)) + ' EUR'));
            tarjeta.appendChild(crearElemento('p', 'Estado: ' + (pedido.estado || 'No disponible')));

            if (pedido.lineas && pedido.lineas.length > 0) {
                var listaLineas = document.createElement('ul');
                listaLineas.className = 'list-unstyled';
                for (var j = 0; j < pedido.lineas.length; j++) {
                    var linea = pedido.lineas[j];
                    var li = document.createElement('li');
                    li.textContent = 'Artículo #' + linea.id_articulo + ' x' + linea.cantidad + ' - ' + Number(linea.precio_unitario).toFixed(2) + ' EUR/ud';
                    listaLineas.appendChild(li);
                }
                tarjeta.appendChild(listaLineas);
            }

            fragment.appendChild(tarjeta);
        }

        pedidosContenedor.appendChild(fragment);
    }

    async function cargarPerfil() {
        try {
            var response = await fetch(apiBase + '/perfil', {
                method: 'GET',
                credentials: 'include',
                headers: { Accept: 'application/json' },
            });

            if (!response.ok) {
                perfilContenedor.textContent = 'Inicia sesión para ver tu perfil.';
                return;
            }

            var data = await response.json();
            if (data.status === 'ok' && data.data) {
                renderPerfil(data.data);
            } else {
                perfilContenedor.textContent = 'No se pudo cargar el perfil.';
            }
        } catch (_error) {
            perfilContenedor.textContent = 'Error al cargar el perfil.';
        }
    }

    async function cargarPedidos() {
        if (!pedidosContenedor) {
            return;
        }

        try {
            var response = await fetch(apiBase + '/pedidos', {
                method: 'GET',
                credentials: 'include',
                headers: { Accept: 'application/json' },
            });

            if (!response.ok) {
                return;
            }

            var data = await response.json();
            if (data.status === 'ok' && Array.isArray(data.data)) {
                renderPedidos(data.data);
            }
        } catch (_error) {
            // Silencioso si no se pueden cargar pedidos
        }
    }

    cargarPerfil();
    cargarPedidos();
});
