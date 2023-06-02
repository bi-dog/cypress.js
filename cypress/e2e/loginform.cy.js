describe('Тестирование loginform', function () {
    
    it('правильный ввод пароля и логина', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru ');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
    })
    it('забыли пароль', function (){
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('kaka@bebe.sas');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon');
    })
    it('негативный тесткейс авторизации', function (){
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru ');
        cy.get('#pass').type('iLoveqastudio');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })
    it('негативный тесткейс валидации', function (){
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru ');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon');
    })
    it('проверка на приведение к строчным буквам в логине', function (){
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type(' GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
    })
    
})