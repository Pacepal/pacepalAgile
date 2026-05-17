import { useEffect, useState } from 'react';
import { apiConfig, loadStaticData, requestJson, warnAboutFallback } from '../services/api.js';

export function useRoutes() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('cargando');
  const [message, setMessage] = useState('Cargando rutas.');
  const [isDemo, setIsDemo] = useState(false);

  async function loadRoutes() {
    setStatus('cargando');
    setMessage('Cargando rutas.');

    if (apiConfig.useStaticDataOnly) {
      const routes = await loadStaticData('rutas');
      setItems(routes);
      setIsDemo(true);
      setStatus('ok');
      setMessage(routes.length ? 'Modo GitHub Pages: rutas demo cargadas.' : 'No hay rutas disponibles.');
      return;
    }

    try {
      const payload = await requestJson('/rutas');
      const routes = Array.isArray(payload.data) ? payload.data : [];
      setItems(routes);
      setIsDemo(false);
      setStatus('ok');
      setMessage(routes.length ? 'Rutas disponibles.' : 'No hay rutas disponibles.');
    } catch (error) {
      console.error('[PacePal] No se pudieron cargar rutas desde la API PHP real.', error);

      if (!apiConfig.allowStaticFallback) {
        setItems([]);
        setIsDemo(false);
        setStatus('error');
        setMessage(error.message || 'No se pudieron cargar las rutas desde la API PHP.');
        return;
      }

      try {
        warnAboutFallback('rutas', error);
        const routes = await loadStaticData('rutas');
        setItems(routes);
        setIsDemo(true);
        setStatus('ok');
        setMessage(routes.length ? 'Modo demo: rutas cargadas desde JSON local.' : 'No hay rutas disponibles.');
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
