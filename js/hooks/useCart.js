import { useEffect, useMemo, useState } from 'react';
import { apiConfig, getApiUnavailableMessage, requestJson, warnAboutFallback } from '../services/api.js';
import { buildDemoCartItem, buildDemoCartSummary, readDemoCart, writeDemoCart } from '../services/demo.js';

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
    const [isDemo, setIsDemo] = useState(false);

    function applyDemoCart(itemsToPersist, nextMessage = '') {
        const persistedItems = writeDemoCart(itemsToPersist);
        const summary = buildDemoCartSummary(persistedItems);

        setItems(summary.items);
        setTotal(summary.total);
        setStatus('ok');
        setIsDemo(true);
        setMessage(nextMessage);
    }

    function applyRealCart(payload) {
        const data = payload.data || {};

        setItems(Array.isArray(data.items) ? data.items : []);
        setTotal(Number(data.total || 0));
        setStatus('ok');
        setIsDemo(false);
        setMessage('');
    }

    async function loadCart() {
        setStatus('cargando');

        if (apiConfig.useStaticDataOnly) {
            applyDemoCart(readDemoCart(), 'Modo GitHub Pages: carrito demo activo.');
            return;
        }

        try {
            const payload = await requestJson('/carrito');
            applyRealCart(payload);
        } catch (error) {
            if (!apiConfig.allowStaticFallback) {
                setItems([]);
                setTotal(0);
                setStatus('error');
                setIsDemo(false);
                setMessage(error.message || 'No se pudo cargar el carrito desde la API PHP.');
                return;
            }

            warnAboutFallback('carrito', error);
            applyDemoCart(readDemoCart(), getApiUnavailableMessage('Modo demo: carrito temporal activo.'));
        }
    }

    async function addItem(productOrId, quantity = 1) {
        const product = normalizeProduct(productOrId);
        const stock = Number(product.stock);

        if (Number.isFinite(stock) && stock <= 0) {
            setMessage('');
            return false;
        }

        if (isDemo || apiConfig.useStaticDataOnly) {
            const currentItems = readDemoCart();
            const nextItem = buildDemoCartItem(product, quantity);

            if (!nextItem) {
                setMessage('No se pudo añadir.');
                return false;
            }

            const existingItem = currentItems.find((item) => item.id_articulo === nextItem.id_articulo);
            // Replica el comportamiento del backend acumulando cantidad y subtotal.
            const nextItems = existingItem
                ? currentItems.map((item) => item.id_articulo === nextItem.id_articulo
                    ? { ...item, cantidad: item.cantidad + nextItem.cantidad, subtotal: Number(((item.cantidad + nextItem.cantidad) * item.precio_unitario).toFixed(2)) }
                    : item)
                : [...currentItems, nextItem];

            applyDemoCart(nextItems, 'Añadido en carrito demo.');
            return true;
        }

        try {
            await requestJson('/carrito', {
                method: 'POST',
                body: JSON.stringify({ producto_id: product.id_articulo, cantidad: quantity }),
            });
            setMessage('¡Añadido!');
            await loadCart();
            return true;
        } catch (error) {
            setMessage(error.message || 'No se pudo añadir.');
            return false;
        }
    }

    async function updateItem(productId, quantity) {
        if (isDemo || apiConfig.useStaticDataOnly) {
            const currentItems = readDemoCart();
            const nextItems = currentItems.map((item) => item.id_articulo === Number(productId)
                ? { ...item, cantidad: Math.max(1, Number(quantity) || 1), subtotal: Number((Math.max(1, Number(quantity) || 1) * Number(item.precio_unitario || 0)).toFixed(2)) }
                : item);

            applyDemoCart(nextItems, 'Cantidad actualizada en carrito demo.');
            return true;
        }

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
        if (isDemo || apiConfig.useStaticDataOnly) {
            const currentItems = readDemoCart();
            const nextItems = currentItems.filter((item) => item.id_articulo !== Number(productId));

            applyDemoCart(nextItems, 'Producto eliminado del carrito demo.');
            return true;
        }

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

        if (isDemo || apiConfig.useStaticDataOnly) {
            // En demo no hay persistencia real de pedidos, se simula confirmación local.
            applyDemoCart([], 'Pedido demo realizado correctamente. ID: DEMO');
            return true;
        }

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
        isDemo,
        addItem,
        updateItem,
        removeItem,
        checkout,
        reload: loadCart,
    };
}
