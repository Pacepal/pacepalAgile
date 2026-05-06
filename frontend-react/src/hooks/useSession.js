import { useEffect, useState } from 'react';
import { requestJson } from '../services/api.js';

export function useSession() {
    const [user, setUser] = useState(null);
    const [status, setStatus] = useState('cargando');
    const [message, setMessage] = useState('Comprobando sesion.');

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
                setMessage('Sesion activa.');
                return;
            }

            setUser(null);
            setStatus('anonimo');
            setMessage('Sin sesion activa.');
        } catch (error) {
            setStatus('error');
            setMessage(error.message || 'No se pudo comprobar la sesion.');
        }
    }

    async function login(credentials) {
        try {
            const payload = await requestJson('/login', {
                method: 'POST',
                body: JSON.stringify(credentials),
            });
            setUser(payload.usuario || null);
            setStatus('ok');
            setMessage('Login correcto.');
            await refreshSession();
            return true;
        } catch (error) {
            setStatus('error');
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
            setMessage('Registro correcto. Ya puedes iniciar sesion.');
            return true;
        } catch (error) {
            setStatus('error');
            setMessage(error.message || 'No se pudo completar el registro.');
            return false;
        }
    }

    async function logout() {
        try {
            await requestJson('/logout', { method: 'POST' });
            setUser(null);
            setStatus('anonimo');
            setMessage('Sesion cerrada.');
        } catch (error) {
            setStatus('error');
            setMessage(error.message || 'No se pudo cerrar la sesion.');
        }
    }

    useEffect(() => {
        refreshSession();
    }, []);

    return {
        status,
        user,
        message,
        login,
        register,
        logout,
        refreshSession,
    };
}
