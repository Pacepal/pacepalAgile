import { useEffect, useMemo, useState } from 'react';
import { loadStaticData, requestJson } from '../services/api.js';

export function useProducts() {
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState('');
    const [status, setStatus] = useState('cargando');
    const [message, setMessage] = useState('Cargando productos.');
    const [isDemo, setIsDemo] = useState(false);

    async function loadProducts() {
        setStatus('cargando');
        setMessage('Cargando productos.');

        try {
            const payload = await requestJson('/productos');
            const products = Array.isArray(payload.data) ? payload.data : [];
            setItems(products);
            setIsDemo(false);
            setStatus('ok');
            setMessage(products.length ? 'Productos cargados correctamente.' : 'No hay productos disponibles.');
        } catch (error) {
            try {
                const products = await loadStaticData('productos');
                setItems(products);
                setIsDemo(true);
                setStatus('ok');
                setMessage(products.length ? 'Productos disponibles.' : 'No hay productos disponibles.');
            } catch (staticError) {
                setStatus('error');
                setMessage(staticError.message || error.message || 'No se pudieron cargar los productos.');
            }
        }
    }

    useEffect(() => {
        loadProducts();
    }, []);

    const filteredItems = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();

        if (!normalizedQuery) {
            return items;
        }

        return items.filter((product) => String(product.nombre || '').toLowerCase().includes(normalizedQuery));
    }, [items, query]);

    return {
        status,
        message,
        items,
        filteredItems,
        query,
        setQuery,
        isDemo,
        reload: loadProducts,
    };
}
