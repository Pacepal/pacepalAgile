import { useEffect, useMemo, useState } from 'react';
import { requestJson } from '../services/api.js';

const demoStorageKey = 'pacepal-react-demo-cart';

function normalizeProduct(productOrId) {
    if (typeof productOrId === 'object' && productOrId !== null) {
        return productOrId;
    }

    return { id_articulo: Number(productOrId), nombre: 'Producto demo', precio: 0, imagen1: '' };
}

function calculateTotal(cartItems) {
    return cartItems.reduce(
        (sum, item) => sum + Number(item.precio_unitario || item.precio || 0) * Number(item.cantidad || 0),
        0
    );
}

function readDemoCart() {
    try {
        const raw = localStorage.getItem(demoStorageKey);
        return raw ? JSON.parse(raw) : [];
    } catch (_error) {
        return [];
    }
}

function writeDemoCart(cartItems) {
    localStorage.setItem(demoStorageKey, JSON.stringify(cartItems));
}

export function useCart() {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [status, setStatus] = useState('cargando');
    const [message, setMessage] = useState('Cargando carrito.');
    const [isDemo, setIsDemo] = useState(false);

    function syncDemoCart(cartItems, nextMessage = 'Carrito actualizado.') {
        const normalizedItems = cartItems.map((item) => ({
            ...item,
            id_articulo: Number(item.id_articulo),
            cantidad: Number(item.cantidad || 1),
            precio_unitario: Number(item.precio_unitario || item.precio || 0),
            subtotal: Number(item.precio_unitario || item.precio || 0) * Number(item.cantidad || 1),
        }));

        setItems(normalizedItems);
        setTotal(calculateTotal(normalizedItems));
        setStatus('ok');
        setIsDemo(true);
        setMessage(nextMessage);
        writeDemoCart(normalizedItems);
    }

    async function loadCart() {
        setStatus('cargando');

        try {
            const payload = await requestJson('/carrito');
            const data = payload.data || {};
            setItems(Array.isArray(data.items) ? data.items : []);
            setTotal(Number(data.total || 0));
            setIsDemo(false);
            setStatus('ok');
            setMessage('Carrito sincronizado.');
        } catch (error) {
            syncDemoCart(readDemoCart(), 'Carrito listo para esta visita.');
        }
    }

    async function addItem(productOrId, quantity = 1) {
        const product = normalizeProduct(productOrId);

        if (isDemo) {
            const currentItems = readDemoCart();
            const existing = currentItems.find((item) => Number(item.id_articulo) === Number(product.id_articulo));
            const nextItems = existing
                ? currentItems.map((item) =>
                    Number(item.id_articulo) === Number(product.id_articulo)
                        ? { ...item, cantidad: Number(item.cantidad || 0) + Number(quantity || 1) }
                        : item
                )
                : [
                    ...currentItems,
                    {
                        id_articulo: Number(product.id_articulo),
                        nombre: product.nombre,
                        precio_unitario: Number(product.precio || product.precio_unitario || 0),
                        cantidad: Number(quantity || 1),
                        imagen1: product.imagen1,
                    },
                ];
            syncDemoCart(nextItems, 'Producto anadido al carrito.');
            return;
        }

        try {
            await requestJson('/carrito', {
                method: 'POST',
                body: JSON.stringify({ producto_id: product.id_articulo, cantidad: quantity }),
            });
            setMessage('Producto anadido al carrito.');
            await loadCart();
        } catch (error) {
            setIsDemo(true);
            const currentItems = readDemoCart();
            const nextItems = [
                ...currentItems,
                {
                    id_articulo: Number(product.id_articulo),
                    nombre: product.nombre,
                    precio_unitario: Number(product.precio || product.precio_unitario || 0),
                    cantidad: Number(quantity || 1),
                    imagen1: product.imagen1,
                },
            ];
            syncDemoCart(nextItems, 'Producto anadido al carrito.');
        }
    }

    async function updateItem(productId, quantity) {
        if (isDemo) {
            const nextItems = readDemoCart().map((item) =>
                Number(item.id_articulo) === Number(productId)
                    ? { ...item, cantidad: Number(quantity || 1) }
                    : item
            );
            syncDemoCart(nextItems, 'Cantidad actualizada.');
            return;
        }

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
        if (isDemo) {
            const nextItems = readDemoCart().filter((item) => Number(item.id_articulo) !== Number(productId));
            syncDemoCart(nextItems, 'Producto eliminado del carrito.');
            return;
        }

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
        if (isDemo) {
            setMessage('Pedido revisado. La finalizacion completa no esta disponible en esta vista.');
            return;
        }

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
        isDemo,
        addItem,
        updateItem,
        removeItem,
        checkout,
        reload: loadCart,
    };
}
