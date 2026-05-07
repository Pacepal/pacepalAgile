import { useEffect, useState } from 'react';
import { requestJson } from '../services/api.js';
import { clearDemoSession, findDemoUser, restoreDemoSession, saveDemoSession, saveDemoUser } from '../services/demo.js';

const apiTimeoutMs = 2000;

function shouldUseDemoFallback(error) {
    if (!error) {
        return true;
    }

    if (error.isNetworkError) {
        return true;
    }

    const status = Number(error.status) || 0;
    return status === 404 || status === 405 || status >= 500;
}

function getErrorMessage(error, fallbackMessage) {
    if (error && typeof error.message === 'string' && error.message.trim() !== '') {
        return error.message;
    }

    return fallbackMessage;
}

function buildTimeoutSignal(timeoutMs) {
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);

    return {
        signal: controller.signal,
        clear() {
            window.clearTimeout(timeoutId);
        },
    };
}

async function requestJsonWithTimeout(path, options = {}, timeoutMs = apiTimeoutMs) {
    const timeout = buildTimeoutSignal(timeoutMs);

    try {
        return await requestJson(path, {
            ...options,
            signal: timeout.signal,
        });
    } finally {
        timeout.clear();
    }
}

export function useSession() {
    const [user, setUser] = useState(null);
    const [status, setStatus] = useState('cargando');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const [isDemo, setIsDemo] = useState(false);

    function applyAnonymousState() {
        setUser(null);
        setStatus('anonimo');
        setMessage('');
        setMessageType('');
    }

    function applyRealSession(payload) {
        clearDemoSession();

        if (payload.logged) {
            setUser({
                id: payload.usuario_id,
                rol: payload.rol || 'usuario',
                nombre: payload.nombre || '',
                email: payload.email || '',
            });
            setStatus('ok');
        } else {
            setUser(null);
            setStatus('anonimo');
        }

        setIsDemo(false);
        setMessage('');
        setMessageType('');
    }

    function applyDemoSession() {
        const demoUser = restoreDemoSession();

        setUser(demoUser);
        setStatus(demoUser ? 'ok' : 'anonimo');
        setIsDemo(true);
        setMessage('');
        setMessageType('');
    }

    async function checkSession() {
        setStatus('cargando');

        try {
            const payload = await requestJsonWithTimeout('/session');
            if (typeof payload.logged === 'boolean') {
                applyRealSession(payload);
                return;
            }
        } catch (error) {
            if (!shouldUseDemoFallback(error)) {
                applyAnonymousState();
                setMessage(getErrorMessage(error, 'No se pudo verificar la sesion.'));
                setMessageType('error');
                return;
            }

            // Si la API no esta disponible, se activa el modo demo.
        }

        applyDemoSession();
    }

    async function login(credentials) {
        try {
            const payload = await requestJsonWithTimeout('/login', {
                method: 'POST',
                body: JSON.stringify(credentials),
            });
            setUser(payload.usuario || null);
            setStatus('ok');
            setMessage('Login correcto. Redirigiendo...');
            setMessageType('ok');
            setIsDemo(false);
            await checkSession();
            return true;
        }

        catch (error) {
            if (!shouldUseDemoFallback(error)) {
                applyAnonymousState();
                setIsDemo(false);
                setMessage(getErrorMessage(error, 'No se pudo iniciar sesion.'));
                setMessageType('error');
                return false;
            }

            const demoUser = findDemoUser(credentials.email, credentials.password);

            if (!demoUser) {
                applyAnonymousState();
                setIsDemo(true);
                setMessage('Email o contrasena incorrectos.');
                setMessageType('error');
                return false;
            }

            const restoredUser = saveDemoSession(demoUser);
            setUser(restoredUser);
            setStatus('ok');
            setIsDemo(true);
            setMessage('Login correcto. Redirigiendo...');
            setMessageType('ok');
            return true;
        }
    }

    async function register(data) {
        try {
            await requestJsonWithTimeout('/register', {
                method: 'POST',
                body: JSON.stringify(data),
            });
            setMessage('Registro correcto. Redirigiendo a login...');
            setMessageType('ok');
            return { ok: true, autoLogged: false };
        } catch (error) {
            if (!shouldUseDemoFallback(error)) {
                setMessage(getErrorMessage(error, 'No se pudo completar el registro.'));
                setMessageType('error');
                return { ok: false, autoLogged: false };
            }

            const savedUser = saveDemoUser({
                nombre: data.nombre,
                email: data.email,
                password: data.password,
                dni: data.dni,
                sexo: data.sexo,
                fecha_nacimiento: data.fecha_nacimiento,
                direccion: data.direccion,
                pais: data.pais,
                tarjeta: data.tarjeta,
                notificaciones: data.notificaciones,
                revista: data.revista,
                rol: 'usuario',
            });

            if (!savedUser) {
                setMessage('Ya existe una cuenta con ese correo electronico.');
                setMessageType('error');
                return { ok: false, autoLogged: false };
            }

            const restoredUser = saveDemoSession(savedUser);
            setUser(restoredUser);
            setStatus('ok');
            setIsDemo(true);
            setMessage('Registro correcto. Sesion iniciada.');
            setMessageType('ok');
            return { ok: true, autoLogged: true };
        }
    }

    async function logout() {
        try {
            await requestJsonWithTimeout('/logout', { method: 'POST' });
        } catch (_error) {
            // Si la API no responde, se limpia igualmente el estado local.
        }

        clearDemoSession();
        setIsDemo(false);
        applyAnonymousState();
    }

    useEffect(() => {
        checkSession();
    }, []);

    return {
        status,
        user,
        message,
        messageType,
        isDemo,
        login,
        register,
        logout,
        refreshSession: checkSession,
        checkSession,
    };
}
