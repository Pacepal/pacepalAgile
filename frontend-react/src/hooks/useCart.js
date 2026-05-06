import { useEffect, useMemo, useState } from 'react';
import { requestJson } from '../services/api.js';

export function useCart() {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [status, setStatus] = useState('cargando');
    const [message, setMessage] = useState('Cargando carrito.');

    async function loadCart() {
        setStatus('cargando');

        try {
            const payload = await requestJson('/carrito');
            const data = payload.data || {};
            setItems(Array.isArray(data.items) ? data.items : []);
            setTotal(Number(data.total || 0));
            setStatus('ok');
            setMessage('Carrito sincronizado.');
        } catch (error) {
            setStatus('error');
            setMessage(error.message || 'No se pudo cargar el carrito.');
        }
    }

    async function addItem(productId, quantity = 1) {
        try {
            await requestJson('/carrito', {
                method: 'POST',
                body: JSON.stringify({ producto_id: productId, cantidad: quantity }),
            });
            setMessage('Producto anadido al carrito.');
            await loadCart();
        } catch (error) {
            setStatus('error');
            setMessage(error.message || 'No se pudo anadir el producto.');
        }
    }

    async function updateItem(productId, quantity) {
        try {
            await requestJson('/carrito', {
                method: 'PUT',
                body: JSON.stringify({ producto_id: productId, cantidad: quantity }),
            });
            setMessage('Cantidad actualizada.');
            await loadCart();
        } catch (error) {
            setStatus('error');
            setMessage(error.message || 'No se pudo actualizar el producto.');
        }
    }

    async function removeItem(productId) {
        try {
            await requestJson('/carrito', {
                method: 'DELETE',
                body: JSON.stringify({ producto_id: productId }),
            });
            setMessage('Producto eliminado.');
            await loadCart();
        } catch (error) {
            setStatus('error');
            setMessage(error.message || 'No se pudo eliminar el producto.');
        }
    }

    async function checkout() {
        try {
            const payload = await requestJson('/pedido', { method: 'POST' });
            const orderId = payload.data?.id_pedido;
            setMessage(orderId ? `Pedido realizado. ID: ${orderId}.` : 'Pedido realizado.');
            await loadCart();
        } catch (error) {
            setStatus('error');
            setMessage(error.message || 'No se pudo finalizar el pedido.');
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
        addItem,
        updateItem,
        removeItem,
        checkout,
        reload: loadCart,
    };
}
