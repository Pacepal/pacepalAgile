import { useEffect, useState } from 'react';
import { requestJson } from '../services/api.js';

export function useSession() {
    const [user, setUser] = useState(null);
    const [status, setStatus] = useState('cargando');
    const [message, setMessage] = useState('');

    async function refreshSession() {
        setStatus('cargando');

        try {
            const payload = await requestJson('/session');
            if (payload.logged) {
                setUser({
                    id: payload.usuario_id,
                    rol: payload.rol,
                });
                setStatus('ok');
                setMessage('');
                return;
            }
        } catch (_error) {
            // Sin PHP disponible se mantiene la misma vista publica sin mensajes tecnicos.
        }

        setUser(null);
        setStatus('anonimo');
        setMessage('');
    }

    async function login(credentials) {
        try {
            const payload = await requestJson('/login', {
                method: 'POST',
                body: JSON.stringify(credentials),
            });
            setUser(payload.usuario || null);
            setStatus('ok');
            setMessage('Login correcto. Redirigiendo...');
            await refreshSession();
            return true;
        } catch (error) {
            setStatus('anonimo');
            setMessage(error.message || 'No se pudo iniciar sesion.');
            return false;
        }
    }

    async function register(data) {
        try {
            await requestJson('/register', {
                method: 'POST',
                body: JSON.stringify(data),
            });
            setMessage('Registro correcto. Redirigiendo a login...');
            return true;
        } catch (error) {
            setMessage(error.message || 'No se pudo completar el registro.');
            return false;
        }
    }

    async function logout() {
        try {
            await requestJson('/logout', { method: 'POST' });
        } catch (_error) {
            // Si la sesion ya no existe, la interfaz debe quedar cerrada igualmente.
        }

        setUser(null);
        setStatus('anonimo');
        setMessage('');
    }

    useEffect(() => {
        refreshSession();
    }, []);

    return {
        status,
        user,
        message,
        isDemo: false,
        login,
        register,
        logout,
        refreshSession,
    };
}
