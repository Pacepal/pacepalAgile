<?php

declare(strict_types=1);

class CookieController
{
    private const COOKIE_CONSENT    = 'pacepal_cookie_consent';
    private const COOKIE_DURATION   = 15552000; // 6 meses
    private const CONSENT_VERSION   = '1.0';

    // Cookies del formato antiguo que deben eliminarse si existen
    private const LEGACY_COOKIES = [
        'pacepal_cookie_preferences',
        'pacepal_cookie_analytics',
    ];

    public function getStatus(): void
    {
        $this->jsonResponse($this->buildStatusPayload());
    }

    public function acceptAll(): void
    {
        $this->persistConsent([
            'necessary'   => true,
            'analytics'   => true,
            'preferences' => true,
            'marketing'   => true,
        ]);
    }

    public function reject(): void
    {
        $this->persistConsent([
            'necessary'   => true,
            'analytics'   => false,
            'preferences' => false,
            'marketing'   => false,
        ]);
    }

    public function savePreferences(): void
    {
        $input = $this->getJsonInput();

        $this->persistConsent([
            'necessary'   => true,
            'analytics'   => !empty($input['analytics']),
            'preferences' => !empty($input['preferences']),
            'marketing'   => !empty($input['marketing']),
        ]);
    }

    public function getConsentimiento(): void
    {
        $this->getStatus();
    }

    public function setConsentimiento(): void
    {
        $this->savePreferences();
    }

    /**
     * Escribe la cookie única de consentimiento como JSON y elimina cookies del
     * formato antiguo si aún existen. Las cookies necesarias no dependen de este
     * método: solo se registra la decisión del usuario sobre las opcionales.
     */
    private function persistConsent(array $categories): void
    {
        $this->removeLegacyCookies();

        $data = [
            'necessary'   => true,
            'analytics'   => (bool) ($categories['analytics']   ?? false),
            'preferences' => (bool) ($categories['preferences'] ?? false),
            'marketing'   => (bool) ($categories['marketing']   ?? false),
            'accepted_at' => (new \DateTime('now', new \DateTimeZone('UTC')))->format(\DATE_ATOM),
            'version'     => self::CONSENT_VERSION,
        ];

        $json = (string) json_encode($data, JSON_UNESCAPED_UNICODE);

        $this->setConsentCookie(self::COOKIE_CONSENT, $json);
        $_COOKIE[self::COOKIE_CONSENT] = $json;

        $this->jsonResponse($this->buildStatusPayload());
    }

    private function setConsentCookie(string $name, string $value): void
    {
        setcookie($name, $value, [
            'expires'  => time() + self::COOKIE_DURATION,
            'path'     => '/',
            'secure'   => false,
            'httponly' => true,
            'samesite' => 'Lax',
        ]);
    }

    /**
     * Elimina las cookies del formato antiguo (3 cookies separadas) para que no
     * convivan con la nueva cookie JSON única.
     */
    private function removeLegacyCookies(): void
    {
        foreach (self::LEGACY_COOKIES as $name) {
            if (isset($_COOKIE[$name])) {
                setcookie($name, '', [
                    'expires'  => 1,
                    'path'     => '/',
                    'secure'   => false,
                    'httponly' => true,
                    'samesite' => 'Lax',
                ]);
                unset($_COOKIE[$name]);
            }
        }
    }

    /**
     * Lee la cookie única y devuelve el estado actual de consentimiento.
     * Si la cookie no existe o tiene el formato antiguo incompatible, devuelve
     * hasConsent=false para que el banner vuelva a mostrarse.
     */
    private function buildStatusPayload(): array
    {
        $noConsent = [
            'success'    => true,
            'hasConsent' => false,
            'cookies'    => [
                'necessary'   => true,
                'analytics'   => false,
                'preferences' => false,
                'marketing'   => false,
            ],
        ];

        $raw = $_COOKIE[self::COOKIE_CONSENT] ?? null;

        if ($raw === null) {
            return $noConsent;
        }

        // Formato antiguo incompatible (valor plano "true"/"false") → limpiar y
        // devolver sin consentimiento para que el banner vuelva a aparecer.
        if ($raw === 'true' || $raw === 'false') {
            $this->removeLegacyCookies();
            setcookie(self::COOKIE_CONSENT, '', ['expires' => 1, 'path' => '/', 'secure' => false, 'httponly' => true, 'samesite' => 'Lax']);
            unset($_COOKIE[self::COOKIE_CONSENT]);
            return $noConsent;
        }

        $data = json_decode($raw, true);

        // Si el JSON es inválido o no tiene versión no lo aceptamos.
        if (!is_array($data) || !isset($data['version'])) {
            return $noConsent;
        }

        return [
            'success'    => true,
            'hasConsent' => true,
            'cookies'    => [
                'necessary'   => true,
                'analytics'   => (bool) ($data['analytics']   ?? false),
                'preferences' => (bool) ($data['preferences'] ?? false),
                'marketing'   => (bool) ($data['marketing']   ?? false),
            ],
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
