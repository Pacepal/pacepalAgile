import { useEffect, useMemo, useState } from 'react';
import { requestJson } from '../services/api.js';

function normalizeProduct(productOrId) {
    if (typeof productOrId === 'object' && productOrId !== null) {
        return productOrId;
    }

    return { id_articulo: Number(productOrId) };
}

export function useCart() {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [status, setStatus] = useState('cargando');
    const [message, setMessage] = useState('');

    async function loadCart() {
        setStatus('cargando');

        try {
            const payload = await requestJson('/carrito');
            const data = payload.data || {};
            setItems(Array.isArray(data.items) ? data.items : []);
            setTotal(Number(data.total || 0));
            setStatus('ok');
            setMessage('');
        } catch (_error) {
            setItems([]);
            setTotal(0);
            setStatus('ok');
            setMessage('');
        }
    }

    async function addItem(productOrId, quantity = 1) {
        const product = normalizeProduct(productOrId);

        try {
            await requestJson('/carrito', {
                method: 'POST',
                body: JSON.stringify({ producto_id: product.id_articulo, cantidad: quantity }),
            });
            setMessage('Anadido!');
            await loadCart();
            return true;
        } catch (error) {
            setMessage(error.message || 'No se pudo anadir.');
            return false;
        }
    }

    async function updateItem(productId, quantity) {
        try {
            await requestJson('/carrito', {
                method: 'PUT',
                body: JSON.stringify({ producto_id: productId, cantidad: quantity }),
            });
            setMessage('');
            await loadCart();
            return true;
        } catch (error) {
            setMessage(error.message || 'No se pudo actualizar la cantidad.');
            return false;
        }
    }

    async function removeItem(productId) {
        try {
            await requestJson('/carrito', {
                method: 'DELETE',
                body: JSON.stringify({ producto_id: productId }),
            });
            setMessage('Producto eliminado del carrito.');
            await loadCart();
            return true;
        } catch (error) {
            setMessage(error.message || 'No se pudo eliminar el producto.');
            return false;
        }
    }

    async function checkout() {
        setMessage('Procesando pedido...');

        try {
            const payload = await requestJson('/pedido', { method: 'POST' });
            const orderId = payload.data?.id_pedido;
            setItems([]);
            setTotal(0);
            setMessage(`Pedido realizado correctamente. ID: ${orderId || ''}`.trim());
            await loadCart();
            return true;
        } catch (error) {
            setMessage(error.message || 'No se pudo completar el pedido.');
            return false;
        }
    }

    useEffect(() => {
        loadCart();
    }, []);

    const count = useMemo(
        () => items.reduce((sum, item) => sum + Number(item.cantidad || 0), 0),
        [items]
    );

    return {
        status,
        message,
        items,
        total,
        count,
        isDemo: false,
        addItem,
        updateItem,
        removeItem,
        checkout,
        reload: loadCart,
    };
}
