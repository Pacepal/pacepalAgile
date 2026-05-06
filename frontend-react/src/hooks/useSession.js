import { useEffect, useState } from 'react';
import { DEMO_NOTICE, requestJson } from '../services/api.js';

export function useSession() {
    const [user, setUser] = useState(null);
    const [status, setStatus] = useState('cargando');
    const [message, setMessage] = useState('Comprobando sesion.');
    const [isDemo, setIsDemo] = useState(false);

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
                setIsDemo(false);
                setMessage('Sesion activa.');
                return;
            }

            setUser(null);
            setStatus('anonimo');
            setIsDemo(false);
            setMessage('Sin sesion activa.');
        } catch (error) {
            setUser(null);
            setStatus('demo');
            setIsDemo(true);
            setMessage(DEMO_NOTICE);
        }
    }

    async function login(credentials) {
        if (isDemo) {
            setStatus('demo');
            setMessage('La autenticacion real requiere API PHP local con XAMPP. En GitHub Pages solo se validan los campos.');
            return false;
        }

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
            setStatus('demo');
            setIsDemo(true);
            setMessage('La autenticacion real requiere API PHP local con XAMPP. En GitHub Pages solo se validan los campos.');
            return false;
        }
    }

    async function register(data) {
        if (isDemo) {
            setStatus('demo');
            setMessage('El registro real requiere API PHP local con XAMPP. En GitHub Pages solo se validan los campos.');
            return false;
        }

        try {
            await requestJson('/register', {
                method: 'POST',
                body: JSON.stringify(data),
            });
            setMessage('Registro correcto. Ya puedes iniciar sesion.');
            return true;
        } catch (error) {
            setStatus('demo');
            setIsDemo(true);
            setMessage('El registro real requiere API PHP local con XAMPP. En GitHub Pages solo se validan los campos.');
            return false;
        }
    }

    async function logout() {
        if (isDemo) {
            setUser(null);
            setStatus('demo');
            setMessage(DEMO_NOTICE);
            return;
        }

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
        isDemo,
        login,
        register,
        logout,
        refreshSession,
    };
}
