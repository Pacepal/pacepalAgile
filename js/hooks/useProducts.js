import { useEffect, useMemo, useState } from 'react';
import { apiConfig, loadStaticData, requestJson, warnAboutFallback } from '../services/api.js';

const PAGE_SIZE = 6;

export function useProducts() {
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [status, setStatus] = useState('cargando');
    const [message, setMessage] = useState('Cargando productos.');
    const [isDemo, setIsDemo] = useState(false);

    async function loadProducts() {
        setStatus('cargando');
        setMessage('Cargando productos.');

        try {
            const payload = await requestJson('/productos');
            const products = Array.isArray(payload.data) ? payload.data : [];

            // Si la API pagina, recuperar el resto de páginas
            const total = typeof payload.total === 'number' ? payload.total : products.length;
            const perPage = typeof payload.por_pagina === 'number' ? payload.por_pagina : products.length;
            if (total > products.length && perPage > 0) {
                const totalPages = Math.ceil(total / perPage);
                const extraRequests = [];
                // Recupera páginas adicionales cuando la API devuelve resultados paginados.
                for (let page = 2; page <= totalPages; page++) {
                    extraRequests.push(requestJson(`/productos?page=${page}`));
                }
                const extraResults = await Promise.all(extraRequests);
                for (const res of extraResults) {
                    if (Array.isArray(res.data)) {
                        products.push(...res.data);
                    }
                }
            }

            setItems(products);
            setIsDemo(false);
            setStatus('ok');
            setMessage(products.length ? 'Productos cargados correctamente.' : 'No hay productos disponibles.');
        } catch (error) {
            console.error('[PacePal] No se pudieron cargar productos desde la API PHP real.', error);

            if (!apiConfig.allowStaticFallback) {
                setItems([]);
                setIsDemo(false);
                setStatus('error');
                setMessage(error.message || 'No se pudieron cargar los productos desde la API PHP.');
                return;
            }

            try {
                warnAboutFallback('productos', error);
                const products = await loadStaticData('productos');
                setItems(products);
                setIsDemo(true);
                setStatus('ok');
                setMessage(products.length ? 'API PHP no disponible. Mostrando JSON temporal.' : 'No hay productos disponibles.');
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

        return items.filter((product) => {
            const name = String(product.nombre || '').toLowerCase();
            const description = String(product.descripcion || '').toLowerCase();
            return name.includes(normalizedQuery) || description.includes(normalizedQuery);
        });
    }, [items, query]);

    const normalizedQuery = query.trim();
    const hasActiveQuery = normalizedQuery.length > 0;
    const totalPages = Math.max(1, Math.ceil(filteredItems.length / PAGE_SIZE));
    const safePage = Math.min(page, totalPages);
    const pagedItems = filteredItems.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

    function setQueryAndReset(q) {
        setQuery(q);
        setPage(1);
    }

    return {
        status,
        message,
        items,
        filteredItems,
        pagedItems,
        page: safePage,
        totalPages,
        setPage,
        query,
        normalizedQuery,
        hasActiveQuery,
        setQuery: setQueryAndReset,
        isDemo,
        reload: loadProducts,
    };
}
