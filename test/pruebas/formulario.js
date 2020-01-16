browser.waitForAngularEnabled(false);
var EC = protractor.ExpectedConditions;

describe('angular-material input component page', function () {
    it('Should change input component value', () => {
        browser.get('http://127.0.0.1:8080/formulario.html');
        element(by.css('#singup')).click();
        var nombre = element(by.css('#nombre'));
        browser.wait(EC.visibilityOf(nombre), 10000);
        nombre.sendKeys('Tom');
        element(by.css('#apellido')).sendKeys('Crespo');
        browser.sleep(500);
        element(by.css('#email')).sendKeys('tom123@gmail.com');
        element(by.css('#contraseña2')).sendKeys('123456a_A');
        element(by.css('#confirmar')).sendKeys('123456a_A');
        element(by.css('#registro input[name="mostrar"]')).click(); // Input nombre mostrar dentro del formulario con id registro
        browser.sleep(2000);
        element(by.css('#registrarse')).click();

        var usuario = element(by.css('#usuario'));
        browser.wait(EC.visibilityOf(usuario), 10000);
        expect(usuario.isDisplayed()).toBe(true);
        element(by.css('#usuario')).sendKeys('tom123@gmail.com');
        element(by.css('#contraseña')).sendKeys('123456a_A');
        element(by.css('#entrar')).click();

        var saludo = element(by.css('#saludo'));
        browser.wait(EC.visibilityOf(saludo), 10000);
        expect(saludo.getText()).toContain('Hola tom123@gmail.com');
        browser.sleep(2000);
        element(by.css('#salir button')).click();
        var usuario = element(by.css('#usuario'));
        browser.wait(EC.visibilityOf(usuario), 10000);

        browser.sleep(1000);



    });

    //ERRORES
    it('Si el nombre no es valido', () => {
        element(by.css('#singup')).click();
        var nombre = element(by.css('#nombre'));
        browser.wait(EC.visibilityOf(nombre), 10000);
        nombre.sendKeys('1234567');

        element(by.css('#registrarse')).click();
        expect(nombre.isDisplayed()).toBe(true);
    });
    //Las contraseñas no coinciden y no se ajustan al formato solicitado
    it('Should change input component value', () => {
        browser.get('http://127.0.0.1:8080/formulario.html');
        element(by.css('#singup')).click();
        var nombre = element(by.css('#nombre'));
        browser.wait(EC.visibilityOf(nombre), 10000);
        nombre.sendKeys('Tom');
        element(by.css('#apellido')).sendKeys('Crespo');
        browser.sleep(500);
        element(by.css('#email')).sendKeys('tom123@gmail.com');
        element(by.css('#contraseña2')).sendKeys('012323456a_A');
        element(by.css('#confirmar')).sendKeys('123456a_A');
        element(by.css('#registro input[name="mostrar"]')).click(); // Input nombre mostrar dentro del formulario con id registro
        browser.sleep(2000);
        element(by.css('#registrarse')).click();
        expect(nombre.isDisplayed()).toBe(true);
        expect(element(by.css('#mensaje')).getText()).toContain('Las contraseñas no coinciden')
        browser.sleep(2000);
    });
});