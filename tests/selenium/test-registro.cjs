// Test funcional automatizado de registro en PacePal con Selenium WebDriver.
// Ejecuta el flujo feliz: rellena formulario con datos validos y envia.

const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function testRegistroPacePal() {
    // URL publica del formulario de registro en GitHub Pages.
    const URL_REGISTRO = 'http://localhost/treecore%20Trabajos/pacepal/#registro';

    // Datos validos para completar el formulario.
    // Email y DNI unicos por ejecucion para evitar duplicados en la BD.
    const ts = Date.now();
    const emailUnico = `pablo.test.${ts}@email.com`;
    // DNI sintetico: 8 digitos de los ultimos 8 del timestamp + letra fija valida.
    const dniBase = String(ts).slice(-8);
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const dniLetra = letras[parseInt(dniBase, 10) % 23];
    const dniUnico = `${dniBase}${dniLetra}`;
    const datos = {
        nombreApellidos: 'Pablo Sevillano',
        email: emailUnico,
        dni: dniUnico,
        password: 'PacePal#2026',
        confirmPassword: 'PacePal#2026'
    };

    let driver;

    try {
        // Opciones para reducir ruido de logs de Chrome durante la ejecucion.
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

        // 1) Abrir Chrome.
        driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();

        // 2) Cargar la pagina de registro.
        await driver.get(URL_REGISTRO);

        // Esperar a que el formulario este disponible.
        await driver.wait(until.elementLocated(By.id('formRegistro')), 10000);
        console.log('OK: formulario cargado.');

        // 3) Rellenar campos del formulario.
        const inputNombre = await driver.findElement(By.id('nombreApellidos'));
        const inputEmail = await driver.findElement(By.id('email'));
        const inputDni = await driver.findElement(By.id('dni'));
        const inputPassword = await driver.findElement(By.id('password'));
        const inputConfirmPassword = await driver.findElement(By.id('confirmPassword'));

        await inputNombre.clear();
        await inputNombre.sendKeys(datos.nombreApellidos);

        await inputEmail.clear();
        await inputEmail.sendKeys(datos.email);

        await inputDni.clear();
        await inputDni.sendKeys(datos.dni);

        await inputPassword.clear();
        await inputPassword.sendKeys(datos.password);

        await inputConfirmPassword.clear();
        await inputConfirmPassword.sendKeys(datos.confirmPassword);
        console.log('OK: campos rellenados.');

        // 4) Pulsar boton Registrarse.
        const botonSubmit = await driver.findElement(By.css('button[type="submit"]'));
        // Bajo el botón hasta una zona visible antes de hacer clic.
        await driver.executeScript(
            "arguments[0].scrollIntoView({ block: 'center', inline: 'nearest' });",
            botonSubmit
        );

        await driver.sleep(500);

        // Clic con JavaScript para evitar bloqueos por scroll, cabecera fija o capas visuales.
        await driver.executeScript("arguments[0].click();", botonSubmit);
        console.log('OK: formulario enviado.');

        // 5) Esperar hasta 15 s a que el mensaje final deje de ser "Registrando usuario...".
        //    Si el elemento aun no existe, esperarlo primero.
        const CARGANDO = 'Registrando usuario...';
        const mensajeRegistro = await driver.findElement(By.id('mensajeRegistro'));

        let textoFinal = '';
        const deadline = Date.now() + 15000;
        while (Date.now() < deadline) {
            textoFinal = (await mensajeRegistro.getText()).trim();
            if (textoFinal.length > 0 && textoFinal !== CARGANDO) {
                break;
            }
            await driver.sleep(300);
        }

        console.log('Mensaje recibido en #mensajeRegistro:', textoFinal);

        const exito = /éxito|exito|registrado|correctamente|correcto|creada|bienvenido/i.test(textoFinal);
        const error = /error|ya existe|no se pudo|inválido|invalido/i.test(textoFinal);

        if (textoFinal === CARGANDO || textoFinal === '') {
            console.log('ERROR: el registro se quedó en estado de carga.');
            process.exitCode = 1;
        } else if (exito) {
            console.log('OK: registro completado correctamente.');
        } else if (error) {
            console.log('ERROR: el registro no se completó correctamente.');
            process.exitCode = 1;
        } else {
            console.log('AVISO: mensaje desconocido recibido:', textoFinal);
            process.exitCode = 1;
        }

        // Pausa breve para observar resultado antes de cerrar.
        await driver.sleep(2000);
    } catch (error) {
        console.error('Error durante el test de registro:', error);
    } finally {
        // 6) Cerrar navegador siempre.
        if (driver) {
            await driver.quit();
        }
    }
}

// Ejecutar el test.
testRegistroPacePal();







