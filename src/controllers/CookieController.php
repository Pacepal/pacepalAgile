<?php

declare(strict_types=1);

// Controlador de cookies — gestiona el consentimiento RGPD
// La cookie pacepal_cookies almacena las preferencias del usuario

class CookieController
{
    private const COOKIE_NAME = 'pacepal_cookies';
    private const COOKIE_DURATION = 365 * 24 * 60 * 60; // 1 año

    // Devuelve el consentimiento actual o null si no ha aceptado todavía
    public function getConsentimiento(): void
    {
        $consentimiento = $this->leerCookie();

        if ($consentimiento === null) {
            $this->jsonResponse([
                'status' => 'ok',
                'consentimiento' => null,
            ]);
            return;
        }

        $this->jsonResponse([
            'status' => 'ok',
            'consentimiento' => $consentimiento,
        ]);
    }

    // Guarda las preferencias de cookies — las técnicas siempre van a true
    public function setConsentimiento(): void
    {
        $input = $this->getJsonInput();

        if (empty($input)) {
            $this->jsonResponse([
                'status' => 'error',
                'message' => 'Datos de consentimiento no válidos.',
            ], 400);
            return;
        }

        $consentimiento = [
            'tecnicas'   => true, // siempre true
            'analiticas' => !empty($input['analiticas']),
            'marketing'  => !empty($input['marketing']),
        ];

        $valor = json_encode($consentimiento, JSON_UNESCAPED_UNICODE);

        setcookie(self::COOKIE_NAME, $valor, [
            'expires'  => time() + self::COOKIE_DURATION,
            'path'     => '/',
            'httponly' => false, // tiene que ser accesible desde JS para leer el estado
            'samesite' => 'Lax',
            'secure'   => false, // en localhost no hay HTTPS
        ]);

        $this->jsonResponse([
            'status' => 'ok',
            'message' => 'Preferencias de cookies guardadas.',
            'consentimiento' => $consentimiento,
        ]);
    }

    private function leerCookie(): ?array
    {
        if (!isset($_COOKIE[self::COOKIE_NAME])) {
            return null;
        }

        $decoded = json_decode($_COOKIE[self::COOKIE_NAME], true);

        if (!is_array($decoded)) {
            return null;
        }

        return [
            'tecnicas'   => true,
            'analiticas' => !empty($decoded['analiticas']),
            'marketing'  => !empty($decoded['marketing']),
        ];
    }

    private function getJsonInput(): array
    {
        $rawBody = file_get_contents('php://input');

        if ($rawBody === false || trim($rawBody) === '') {
            return [];
        }

        $data = json_decode($rawBody, true);

        return is_array($data) ? $data : [];
    }

    private function jsonResponse(array $payload, int $statusCode = 200): void
    {
        http_response_code($statusCode);
        echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    }
}
