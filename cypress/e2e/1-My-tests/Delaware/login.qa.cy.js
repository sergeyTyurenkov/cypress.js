describe('Тестируем форму логина', function () {
    it('Позитивный тест на верный логин и пароль', function () {
         cy.visit('https://login.qa.studio');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно')
         cy.get('#exitMessageButton > .exitIcon')
     })

     it('Позитивный тест на восстановлене пароля', function () {
        cy.reload();
        cy.visit('https://login.qa.studio');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail')
    })

    it('Тест на верный логин и неверный пароль', function () {
        cy.reload();
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет')
        cy.get('#exitMessageButton > .exitIcon')
    })

    it('Тест на неверный логин и верный пароль', function () {
        cy.reload();
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('man@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет')
        cy.get('#exitMessageButton > .exitIcon')
    })

    it('Тест на негативный кейс валидации', function () {
        cy.reload();
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации')
    })

    it('Тест на привидение к строчным буквам в логине', function () {
        cy.reload();
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('GerMan@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно')
        cy.get('#exitMessageButton > .exitIcon')
    })
 })
