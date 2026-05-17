import { useEffect, useState } from 'react';
import { apiConfig, loadStaticData, requestJson, warnAboutFallback } from '../services/api.js';

export function useActivities() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('cargando');
  const [message, setMessage] = useState('Cargando actividades.');
  const [isDemo, setIsDemo] = useState(false);

  async function loadActivities() {
    setStatus('cargando');
    setMessage('Cargando actividades.');

    if (apiConfig.useStaticDataOnly) {
      const activities = await loadStaticData('actividades');
      setItems(activities);
      setIsDemo(true);
      setStatus('ok');
      setMessage(activities.length ? 'Modo GitHub Pages: actividades demo cargadas.' : 'No hay actividades disponibles.');
      return;
    }

    try {
      const payload = await requestJson('/actividades');
      const activities = Array.isArray(payload.data) ? payload.data : [];
      setItems(activities);
      setIsDemo(false);
      setStatus('ok');
      setMessage(activities.length ? 'Actividades disponibles.' : 'No hay actividades disponibles.');
    } catch (error) {
      console.error('[PacePal] No se pudieron cargar actividades desde la API PHP real.', error);

      if (!apiConfig.allowStaticFallback) {
        setItems([]);
        setIsDemo(false);
        setStatus('error');
        setMessage(error.message || 'No se pudieron cargar las actividades desde la API PHP.');
        return;
      }

      try {
        warnAboutFallback('actividades', error);
        const activities = await loadStaticData('actividades');
        setItems(activities);
        setIsDemo(true);
        setStatus('ok');
        setMessage(activities.length ? 'Modo demo: actividades cargadas desde JSON local.' : 'No hay actividades disponibles.');
      } catch (staticError) {
        setStatus('error');
        setMessage(staticError.message || error.message || 'No se pudieron cargar las actividades.');
      }
    }
  }

  useEffect(() => {
    loadActivities();
  }, []);

  return { items, status, message, isDemo, reload: loadActivities };
}
