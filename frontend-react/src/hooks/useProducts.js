import { useEffect, useMemo, useState } from 'react';
import { requestJson } from '../services/api.js';

export function useProducts() {
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState('');
    const [status, setStatus] = useState('cargando');
    const [message, setMessage] = useState('Cargando productos desde la API PHP.');

    async function loadProducts() {
        setStatus('cargando');
        setMessage('Cargando productos desde la API PHP.');

        try {
            const payload = await requestJson('/productos');
            const products = Array.isArray(payload.data) ? payload.data : [];
            setItems(products);
            setStatus('ok');
            setMessage(products.length ? 'Productos cargados correctamente.' : 'No hay productos disponibles.');
        } catch (error) {
            setStatus('error');
            setMessage(error.message || 'No se pudieron cargar los productos.');
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

        return items.filter((product) => {
            const name = String(product.nombre || '').toLowerCase();
            const description = String(product.descripcion || '').toLowerCase();
            return name.includes(normalizedQuery) || description.includes(normalizedQuery);
        });
    }, [items, query]);

    return {
        status,
        message,
        items,
        filteredItems,
        query,
        setQuery,
        reload: loadProducts,
    };
}
