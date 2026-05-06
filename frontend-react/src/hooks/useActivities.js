import { useEffect, useState } from 'react';
import { loadStaticData, requestJson } from '../services/api.js';

export function useActivities() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('cargando');
  const [message, setMessage] = useState('Cargando actividades.');
  const [isDemo, setIsDemo] = useState(false);

  async function loadActivities() {
    setStatus('cargando');
    setMessage('Cargando actividades.');

    try {
      const payload = await requestJson('/actividades');
      const activities = Array.isArray(payload.data) ? payload.data : [];
      setItems(activities);
      setIsDemo(false);
      setStatus('ok');
      setMessage(activities.length ? 'Actividades disponibles.' : 'No hay actividades disponibles.');
    } catch (error) {
      try {
        const activities = await loadStaticData('actividades');
        setItems(activities);
        setIsDemo(true);
        setStatus('ok');
        setMessage(activities.length ? 'Actividades disponibles.' : 'No hay actividades disponibles.');
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
