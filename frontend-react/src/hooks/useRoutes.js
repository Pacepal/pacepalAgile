import { useEffect, useState } from 'react';
import { loadStaticData, requestJson } from '../services/api.js';

export function useRoutes() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('cargando');
  const [message, setMessage] = useState('Cargando rutas.');
  const [isDemo, setIsDemo] = useState(false);

  async function loadRoutes() {
    setStatus('cargando');
    setMessage('Cargando rutas.');

    try {
      const payload = await requestJson('/rutas');
      const routes = Array.isArray(payload.data) ? payload.data : [];
      setItems(routes);
      setIsDemo(false);
      setStatus('ok');
      setMessage(routes.length ? 'Rutas disponibles.' : 'No hay rutas disponibles.');
    } catch (error) {
      try {
        const routes = await loadStaticData('rutas');
        setItems(routes);
        setIsDemo(true);
        setStatus('ok');
        setMessage(routes.length ? 'Rutas disponibles.' : 'No hay rutas disponibles.');
      } catch (staticError) {
        setStatus('error');
        setMessage(staticError.message || error.message || 'No se pudieron cargar las rutas.');
      }
    }
  }

  useEffect(() => {
    loadRoutes();
  }, []);

  return { items, status, message, isDemo, reload: loadRoutes };
}
