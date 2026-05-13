// Test automatizado del buscador dinámico de productos — PacePal
// Cubre: carga de destacados, búsqueda por nombre, sin resultados y retorno a destacados.
// Requiere: chromedriver en PATH, XAMPP activo con base de datos pacepal.
// Ejecutar: node tests/selenium/test-buscador.js

const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const BASE_URL = 'http://localhost/pacepalAgile/pages/tienda/tienda.php';
const TIMEOUT   = 8000;

async function esperarTextoEnContenedor(driver, selector, texto, timeout) {
    await driver.wait(async function () {
        try {
            const el = await driver.findElement(By.css(selector));
            const contenido = await el.getText();
            return contenido.includes(texto);
        } catch (_e) {
            return false;
        }
    }, timeout, 'Timeout esperando texto "' + texto + '" en ' + selector);
}

async function tarjetasVisibles(driver) {
    const tarjetas = await driver.findElements(By.css('#lista-productos .tarjeta-producto'));
    return tarjetas.length;
}

async function testBuscadorPacePal() {
    let driver;
    let errores = 0;

    try {
        const chromeOptions = new chrome.Options();
        chromeOptions.addArguments(
            '--disable-background-networking',
            '--disable-sync',
            '--no-first-run',
            '--log-level=3'
        );
        chromeOptions.excludeSwitches('enable-logging');

        driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();

        // ── TC-01: Carga inicial de destacados ───────────────────────────────
        console.log('TC-01: Carga inicial de destacados...');
        await driver.get(BASE_URL);
        await driver.wait(until.elementLocated(By.css('#lista-productos .tarjeta-producto')), TIMEOUT);
        const nDestacados = await tarjetasVisibles(driver);
        if (nDestacados > 0 && nDestacados <= 6) {
            console.log('  OK — se cargaron ' + nDestacados + ' producto(s) destacado(s).');
        } else {
            console.error('  FALLO — esperados 1-6 destacados, obtenidos: ' + nDestacados);
            errores++;
        }

        // Verificar que el botón "Ver destacados" está oculto
        const btnVisible = await driver.findElement(By.id('btnVerDestacados')).getAttribute('hidden');
        if (btnVisible !== null) {
            console.log('  OK — botón "Ver destacados" oculto en carga inicial.');
        } else {
            console.error('  FALLO — botón "Ver destacados" debería estar oculto.');
            errores++;
        }

        // ── TC-02: Búsqueda por nombre ───────────────────────────────────────
        console.log('TC-02: Búsqueda por nombre ("zapatilla")...');
        const input = await driver.findElement(By.id('buscadorProductosInput'));
        await input.clear();
        await input.sendKeys('zapatilla');

        await driver.wait(async function () {
            return await tarjetasVisible(driver) > 0 || await hayMensaje(driver, 'No se encontraron');
        }, TIMEOUT);

        const nBusqueda = await tarjetasVisibles(driver);
        if (nBusqueda > 0) {
            console.log('  OK — ' + nBusqueda + ' resultado(s) para "zapatilla".');
        } else {
            console.error('  FALLO — no se encontraron resultados para "zapatilla".');
            errores++;
        }

        // ── TC-04: Sin resultados ────────────────────────────────────────────
        console.log('TC-04: Sin resultados ("xxxxxxxxxxx")...');
        await input.clear();
        await input.sendKeys('xxxxxxxxxxx');

        await esperarTextoEnContenedor(driver, '#lista-productos', 'No se encontraron', TIMEOUT);
        const msgSinResultados = await driver.findElement(By.css('.tienda-sin-resultados')).getText();
        if (msgSinResultados.includes('xxxxxxxxxxx')) {
            console.log('  OK — mensaje de sin resultados mostrado correctamente.');
        } else {
            console.error('  FALLO — mensaje de sin resultados incorrecto: ' + msgSinResultados);
            errores++;
        }

        // ── TC-07: Retorno a destacados con botón ────────────────────────────
        console.log('TC-07: Retorno a destacados con botón "Ver destacados"...');
        const btnVerDestacados = await driver.findElement(By.id('btnVerDestacados'));
        await btnVerDestacados.click();

        await driver.wait(until.elementLocated(By.css('#lista-productos .tarjeta-producto')), TIMEOUT);
        const nDestacadosTras = await tarjetasVisibles(driver);
        const inputVacio = await input.getAttribute('value');
        const btnOcultoTras = await driver.findElement(By.id('btnVerDestacados')).getAttribute('hidden');

        if (nDestacadosTras > 0 && inputVacio === '' && btnOcultoTras !== null) {
            console.log('  OK — galería restaurada a ' + nDestacadosTras + ' destacado(s), input vacío, botón oculto.');
        } else {
            console.error('  FALLO — estado tras volver a destacados incorrecto.');
            errores++;
        }

        // ── Resultado final ──────────────────────────────────────────────────
        if (errores === 0) {
            console.log('\nTodos los tests del buscador pasaron correctamente.');
        } else {
            console.error('\n' + errores + ' test(s) fallaron.');
        }

        await driver.sleep(2000);

    } catch (error) {
        console.error('Error inesperado durante el test:', error.message);
    } finally {
        if (driver) { await driver.quit(); }
    }
}

// Helpers internos
async function tarjetasVisible(driver) {
    try {
        const t = await driver.findElements(By.css('#lista-productos .tarjeta-producto'));
        return t.length;
    } catch (_e) { return 0; }
}

async function hayMensaje(driver, texto) {
    try {
        const el = await driver.findElement(By.css('#lista-productos p'));
        return (await el.getText()).includes(texto);
    } catch (_e) { return false; }
}

testBuscadorPacePal();
