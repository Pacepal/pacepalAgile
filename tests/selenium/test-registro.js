// Test funcional automatizado de registro en PacePal con Selenium WebDriver.
// Ejecuta el flujo feliz: rellena formulario con datos validos y envia.

const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function testRegistroPacePal() {
    // URL publica del formulario de registro en GitHub Pages.
    const URL_REGISTRO = 'https://kampexiii.github.io/pacepalAgile/pages/formulario/register.php';

    // Datos validos para completar el formulario.
    const datos = {
        nombreApellidos: 'Pablo Sevillano',
        email: 'pablo@email.com',
        dni: '12345678Z',
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

        // 4) Pulsar boton Registrarse.
        const botonSubmit = await driver.findElement(By.css('button[type="submit"]'));
        await botonSubmit.click();

        // Bonus: comprobar que #mensajeRegistro contiene texto.
        const mensajeRegistro = await driver.findElement(By.id('mensajeRegistro'));
        await driver.wait(async function () {
            const texto = await mensajeRegistro.getText();
            return texto.trim().length > 0;
        }, 5000);

        const textoFinal = await mensajeRegistro.getText();
        console.log('Mensaje recibido en #mensajeRegistro:', textoFinal);

        if (textoFinal.includes('Registro validado correctamente')) {
            console.log('OK: se mostro el mensaje esperado de registro correcto.');
        } else {
            console.log('AVISO: hay mensaje, pero no coincide exactamente con el texto esperado.');
        }

        // 5) Esperar unos segundos para observar resultado.
        await driver.sleep(3000);
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


