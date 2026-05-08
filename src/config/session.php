<?php

declare(strict_types=1);

// ===================================================================
// GESTIÓN CONTROLADA DE SESIÓN PHP
//
// Reglas:
//  - Las páginas públicas NO deben generar PHPSESSID.
//  - resumeSessionIfActive() solo reanuda si ya existe la cookie de
//    sesión en el navegador del usuario; no crea sesiones nuevas.
//  - startFreshSession() se usa únicamente en login: inicia siempre
//    una sesión nueva y regenera el ID para prevenir session fixation.
// ===================================================================

/**
 * Reanuda la sesión PHP solo si ya existe una cookie de sesión activa.
 * Nunca crea una sesión nueva para peticiones sin autenticar.
 * Debe usarse en: getSession, logout, y todos los endpoints protegidos.
 */
function resumeSessionIfActive(): void
{
    if (session_status() !== PHP_SESSION_NONE) {
        return; // ya iniciada
    }

    $sessionName = session_name(); // normalmente "PHPSESSID"

    if (!empty($_COOKIE[$sessionName])) {
        session_start();
    }
}

/**
 * Inicia siempre una sesión (crea una si no existe) y regenera el ID.
 * Usar exclusivamente en el endpoint de login.
 */
function startFreshSession(): void
{
    if (session_status() === PHP_SESSION_NONE) {
        session_start();
    }

    // Previene session fixation y rota el ID tras autenticación exitosa
    session_regenerate_id(true);
}

/**
 * Destruye la sesión activa y elimina la cookie PHPSESSID del navegador.
 * No hace nada si no hay sesión activa.
 */
function destroySession(): void
{
    if (session_status() !== PHP_SESSION_ACTIVE) {
        return;
    }

    $_SESSION = [];

    if (ini_get('session.use_cookies')) {
        $params = session_get_cookie_params();
        setcookie(
            session_name(),
            '',
            time() - 42000,
            $params['path'],
            $params['domain'],
            (bool) $params['secure'],
            (bool) $params['httponly']
        );
    }

    session_destroy();
}
