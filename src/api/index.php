<?php

declare(strict_types=1);

// ===================================================================
// ROUTER API REST DE PACEPAL
// Todas las peticiones pasan por aquí y se redirigen al controller
// correspondiente según método HTTP + ruta
// ===================================================================

ini_set('display_errors', '0');
ini_set('log_errors', '1');

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowedOrigins = [
    'http://127.0.0.1:4173',
    'http://127.0.0.1:4174',
    'http://127.0.0.1:4175',
    'http://127.0.0.1:5173',
    'http://127.0.0.1:5174',
    'http://127.0.0.1:5175',
    'http://localhost:4173',
    'http://localhost:4174',
    'http://localhost:4175',
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:5175',
];

if ($origin !== '' && in_array($origin, $allowedOrigins, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}

header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With, Accept');
header('Access-Control-Max-Age: 600');
header('Content-Type: application/json; charset=utf-8');

if ($method === 'OPTIONS') {
    http_response_code(204);
    exit;
}

require_once __DIR__ . '/../config/session.php';
require_once __DIR__ . '/../controllers/ProductoController.php';
require_once __DIR__ . '/../controllers/RutaController.php';
require_once __DIR__ . '/../controllers/ActividadController.php';
require_once __DIR__ . '/../controllers/AuthController.php';
require_once __DIR__ . '/../controllers/PedidoController.php';
require_once __DIR__ . '/../controllers/UsuarioController.php';
require_once __DIR__ . '/../controllers/ReporteController.php';
require_once __DIR__ . '/../controllers/CookieController.php';

// ===== CONEXIÓN BD =====
$pdo = require __DIR__ . '/../config/database.php';

// ===== INSTANCIAR CONTROLLERS =====
$productoController = new ProductoController($pdo);
$rutaController = new RutaController($pdo);
$actividadController = new ActividadController($pdo);
$authController = new AuthController($pdo);
$pedidoController = new PedidoController($pdo);
$usuarioController = new UsuarioController($pdo);
$reporteController = new ReporteController($pdo);
$cookieController = new CookieController();

// ===== PARSEAR MÉTODO Y RUTA =====

// Se decodifica la URL para que rutas con espacios (%20) coincidan con SCRIPT_NAME/PHP_SELF.
$uri = rawurldecode(parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/');
$scriptName = str_replace('\\', '/', $_SERVER['SCRIPT_NAME'] ?? '');
$phpSelf = str_replace('\\', '/', $_SERVER['PHP_SELF'] ?? '');
$scriptPathCandidates = array_values(array_unique(array_filter([$scriptName, $phpSelf])));

$path = $uri;
foreach ($scriptPathCandidates as $scriptPath) {
    if ($scriptPath !== '' && str_starts_with($uri, $scriptPath)) {
        $path = substr($uri, strlen($scriptPath));
        break;
    }
}

$path = '/' . trim((string) $path, '/');

// ===== TABLA DE RUTAS =====
$routes = [

    'GET' => [
        '/api/productos' => function () use ($productoController): void {
            $productoController->getProductos();
        },
        '/api/rutas' => function () use ($rutaController): void {
            $rutaController->getRutas();
        },
        '/api/actividades' => function () use ($actividadController): void {
            $actividadController->getActividades();
        },
        '/api/carrito' => function () use ($pedidoController): void {
            $pedidoController->getCarrito();
        },
        '/api/session' => function () use ($authController): void {
            $authController->getSession();
        },
        '/api/health' => function () use ($pdo): void {
            $databaseName = (string) $pdo->query('SELECT DATABASE()')->fetchColumn();
            jsonResponse([
                'status' => 'ok',
                'ok' => true,
                'database' => $databaseName,
                'connection' => 'ok',
            ]);
        },
        '/api/perfil' => function () use ($usuarioController): void {
            $usuarioController->getPerfil();
        },
        '/api/pedidos' => function () use ($usuarioController): void {
            $usuarioController->getPedidosUsuario();
        },
        '/api/reportes' => function () use ($reporteController): void {
            $reporteController->getReportes();
        },
        '/api/usuarios' => function () use ($usuarioController): void {
            $usuarioController->getAllUsuarios();
        },
        '/api/cookies' => function () use ($cookieController): void {
            $cookieController->getConsentimiento();
        },
        '/api/cookies/status' => function () use ($cookieController): void {
            $cookieController->getStatus();
        },
        '/api/pedidos/admin' => function () use ($pedidoController): void {
            $pedidoController->getAllPedidos();
        },
    ],

    'POST' => [
        '/api/actividad' => function () use ($actividadController): void {
            $actividadController->createActividad();
        },
        '/api/productos' => function () use ($productoController): void {
            $productoController->createProducto();
        },
        '/api/register' => function () use ($authController): void {
            $authController->register();
        },
        '/api/login' => function () use ($authController): void {
            $authController->login();
        },
        '/api/carrito' => function () use ($pedidoController): void {
            $pedidoController->addCarrito();
        },
        '/api/pedido' => function () use ($pedidoController): void {
            $pedidoController->crearPedido();
        },
        '/api/logout' => function () use ($authController): void {
            $authController->logout();
        },
        '/api/reporte' => function () use ($reporteController): void {
            $reporteController->createReporte();
        },
        '/api/usuario' => function () use ($usuarioController): void {
            $usuarioController->createUsuarioAdmin();
        },
        '/api/ruta' => function () use ($rutaController): void {
            $rutaController->createRuta();
        },
        '/api/cookies' => function () use ($cookieController): void {
            $cookieController->setConsentimiento();
        },
        '/api/cookies/accept-all' => function () use ($cookieController): void {
            $cookieController->acceptAll();
        },
        '/api/cookies/reject' => function () use ($cookieController): void {
            $cookieController->reject();
        },
        '/api/cookies/preferences' => function () use ($cookieController): void {
            $cookieController->savePreferences();
        },
    ],

    'PUT' => [
        '/api/perfil' => function () use ($usuarioController): void {
            $usuarioController->updatePerfil();
        },
        '/api/carrito' => function () use ($pedidoController): void {
            $pedidoController->updateCarritoItem();
        },
    ],

    'DELETE' => [
        '/api/carrito' => function () use ($pedidoController): void {
            $pedidoController->removeCarritoItem();
        },
    ],
];


// ===== RESOLVER RUTA =====

if (!isset($routes[$method])) {
    jsonResponse([
        'status' => 'error',
        'message' => 'Metodo no permitido.',
    ], 405);
}

$handler = $routes[$method][$path] ?? null;

// Rutas dinámicas con ID (ej: /api/productos/3)
if ($handler === null) {
    $segments = explode('/', trim($path, '/'));

    if (count($segments) === 3 && $segments[0] === 'api') {
        $resource = $segments[1];
        $id = filter_var($segments[2], FILTER_VALIDATE_INT);

        if ($id !== false && $id > 0) {
            if ($method === 'GET' && $resource === 'productos') {
                $handler = function () use ($productoController, $id): void {
                    $productoController->getProducto((int) $id);
                };
            } elseif ($method === 'PUT' && $resource === 'productos') {
                $handler = function () use ($productoController, $id): void {
                    $productoController->updateProducto((int) $id);
                };
            } elseif ($method === 'DELETE' && $resource === 'productos') {
                $handler = function () use ($productoController, $id): void {
                    $productoController->deleteProducto((int) $id);
                };
            } elseif ($method === 'GET' && $resource === 'rutas') {
                $handler = function () use ($rutaController, $id): void {
                    $rutaController->getRuta((int) $id);
                };
            } elseif ($method === 'GET' && $resource === 'actividades') {
                $handler = function () use ($actividadController, $id): void {
                    $actividadController->getActividad((int) $id);
                };
            } elseif ($method === 'PUT' && $resource === 'actividades') {
                $handler = function () use ($actividadController, $id): void {
                    $actividadController->updateActividad((int) $id);
                };
            } elseif ($method === 'DELETE' && $resource === 'actividades') {
                $handler = function () use ($actividadController, $id): void {
                    $actividadController->deleteActividad((int) $id);
                };
            } elseif ($method === 'PUT' && $resource === 'reportes') {
                $handler = function () use ($reporteController, $id): void {
                    $reporteController->updateReporte((int) $id);
                };
            } elseif ($method === 'PUT' && $resource === 'usuarios') {
                $handler = function () use ($usuarioController, $id): void {
                    $usuarioController->updateUsuarioAdmin((int) $id);
                };
            } elseif ($method === 'DELETE' && $resource === 'usuarios') {
                $handler = function () use ($usuarioController, $id): void {
                    $usuarioController->deleteUsuario((int) $id);
                };
            } elseif ($method === 'PUT' && $resource === 'rutas') {
                $handler = function () use ($rutaController, $id): void {
                    $rutaController->updateRuta((int) $id);
                };
            } elseif ($method === 'DELETE' && $resource === 'rutas') {
                $handler = function () use ($rutaController, $id): void {
                    $rutaController->deleteRuta((int) $id);
                };
            }
        }
    }

    // Acciones sobre actividades: join y leave (/api/actividades/{id}/join)
    if ($handler === null && count($segments) === 4 && $segments[0] === 'api' && $segments[1] === 'actividades') {
        $id = filter_var($segments[2], FILTER_VALIDATE_INT);
        $action = $segments[3];

        if ($id !== false && $id > 0 && $method === 'POST') {
            if ($action === 'join') {
                $handler = function () use ($actividadController, $id): void {
                    $actividadController->joinActividad((int) $id);
                };
            } elseif ($action === 'leave') {
                $handler = function () use ($actividadController, $id): void {
                    $actividadController->leaveActividad((int) $id);
                };
            }
        }
    }
}

if ($handler === null) {
    jsonResponse([
        'status' => 'error',
        'message' => 'Endpoint no encontrado.',
        'path' => $path,
    ], 404);
}
$handler();

// ===== HELPER =====
function jsonResponse(array $payload, int $statusCode = 200): void
{
    if (!array_key_exists('ok', $payload)) {
        $payload['ok'] = ($payload['status'] ?? '') !== 'error';
    }

    if (($payload['status'] ?? '') === 'error' && !array_key_exists('error', $payload)) {
        $payload['error'] = $payload['message'] ?? 'Error de API.';
    }

    http_response_code($statusCode);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}
