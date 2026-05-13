// Test automatizado del buscador dinámico de productos — PacePal (versión React)
// Cubre: carga de tienda, búsqueda con resultados, sin resultados y retorno a catálogo.
// Requiere: chromedriver en PATH, XAMPP activo con base de datos pacepal.
// Ejecutar: node tests/selenium/test-buscador.cjs

const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const BASE_URL = 'http://localhost/treecore%20Trabajos/pacepal/#tienda';
const TIMEOUT  = 15000;

// Devuelve el número de tarjetas de producto visibles en el listado.
async function tarjetasVisibles(driver) {
    try {
        const tarjetas = await driver.findElements(By.css('#lista-productos .tarjeta-producto'));
        return tarjetas.length;
    } catch (_e) { return 0; }
}

// Limpia un input controlado por React usando teclado, para que onChange se dispare.
async function limpiarInput(inputEl) {
    await inputEl.click();
    await inputEl.sendKeys(Key.chord(Key.CONTROL, 'a'), Key.BACK_SPACE);
}

async function testBuscadorPacePal() {
    let driver;

    try {
        const chromeOptions = new chrome.Options();
        chromeOptions.addArguments(
            '--disable-background-networking',
            '--disable-component-update',
            '--disable-sync',
            '--disable-default-apps',
            '--no-default-browser-check',
            '--no-first-run',
            '--log-level=3'
        );
        chromeOptions.excludeSwitches('enable-logging');

        driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();

        // ── 1) Cargar la tienda React ────────────────────────────────────────
        await driver.get(BASE_URL);

        // Descartar el banner de cookies si aparece (puede bloquear clics).
        try {
            const btnAceptar = await driver.wait(
                until.elementLocated(By.css('#cookie-overlay .boton--primario')),
                5000
            );
            await driver.executeScript("arguments[0].click();", btnAceptar);
            // Esperar a que el overlay desaparezca.
            await driver.wait(async function () {
                const overlays = await driver.findElements(By.id('cookie-overlay'));
                if (overlays.length === 0) { return true; }
                const display = await overlays[0].getCssValue('display');
                return display === 'none';
            }, 5000);
        } catch (_e) {
            // No había banner de cookies, continuar.
        }

        // Esperar a que la galería cargue al menos un producto.
        await driver.wait(async function () {
            return (await tarjetasVisibles(driver)) > 0;
        }, TIMEOUT, 'Timeout: no aparecieron productos en la tienda.');

        const nInicial = await tarjetasVisibles(driver);
        console.log('OK: tienda cargada. (' + nInicial + ' producto(s) visibles)');

        // ── 2) Localizar el buscador ─────────────────────────────────────────
        const input = await driver.findElement(By.id('buscadorProductosInput'));
        console.log('OK: buscador localizado.');

        // ── 3) Búsqueda con resultados ───────────────────────────────────────
        await limpiarInput(input);
        await input.sendKeys('pacepal');

        // Esperar a que haya al menos un resultado O mensaje de sin resultados.
        await driver.wait(async function () {
            const n = await tarjetasVisibles(driver);
            if (n > 0) { return true; }
            try {
                await driver.findElement(By.css('.tienda-sin-resultados'));
                return true;
            } catch (_e) { return false; }
        }, TIMEOUT, 'Timeout esperando resultado para "pacepal".');

        const nConResultados = await tarjetasVisibles(driver);
        if (nConResultados > 0) {
            console.log('OK: búsqueda con resultados validada. (' + nConResultados + ' resultado(s) para "pacepal")');
        } else {
            // Búsqueda alternativa por si "pacepal" no arroja resultados en esta BD.
            await limpiarInput(input);
            await input.sendKeys('zapatilla');
            await driver.wait(async function () {
                return (await tarjetasVisibles(driver)) > 0;
            }, TIMEOUT, 'Timeout esperando resultado para "zapatilla".');
            const nAlt = await tarjetasVisibles(driver);
            if (nAlt > 0) {
                console.log('OK: búsqueda con resultados validada. (' + nAlt + ' resultado(s) para "zapatilla")');
            } else {
                console.error('ERROR: ninguna búsqueda devolvió resultados. Revisar datos en BD.');
                process.exitCode = 1;
                return;
            }
        }

        // ── 4) Búsqueda sin resultados ───────────────────────────────────────
        await limpiarInput(input);
        await input.sendKeys('zzzproductoquenoexiste999');

        await driver.wait(async function () {
            try {
                await driver.findElement(By.css('.tienda-sin-resultados'));
                return true;
            } catch (_e) { return false; }
        }, TIMEOUT, 'Timeout esperando mensaje de sin resultados.');

        console.log('OK: búsqueda sin resultados validada.');

        // ── 5) Retorno al catálogo al limpiar el buscador ────────────────────
        await limpiarInput(input);

        await driver.wait(async function () {
            return (await tarjetasVisibles(driver)) > 0;
        }, TIMEOUT, 'Timeout esperando retorno de productos tras limpiar buscador.');

        const nTras = await tarjetasVisibles(driver);
        console.log('OK: retorno a productos validado. (' + nTras + ' producto(s) visibles)');

        // ── Resultado final ──────────────────────────────────────────────────
        console.log('OK: prueba Selenium del buscador completada correctamente.');

        await driver.sleep(2000);

    } catch (error) {
        console.error('ERROR: fallo inesperado durante el test del buscador:', error.message);
        process.exitCode = 1;
    } finally {
        if (driver) { await driver.quit(); }
    }
}

testBuscadorPacePal();
