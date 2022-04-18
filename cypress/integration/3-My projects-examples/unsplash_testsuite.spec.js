 //https://www.youtube.com/watch?v=sDJBHcC_t1U&list=PLwCC0l-B_V8JNd2-YG5hh-beXmR8gWOtC&index=4&t=408s&ab_channel=LookLiveUI
 
 describe('Assert', () =>{
     
    it('Assert Web Tests', () =>{
        cy.visit("https://unsplash.com/")
        cy.viewport(1920, 1080) //Размер окна
        cy.location('protocol').should('eq', 'https:') //Проверка - http или https
        cy.title().should('eq', 'Beautiful Free Images & Pictures | Unsplash') //Проверка названия вкладки

        cy.get('a[class="cLLOA p1cWU jpBZ0 EzsBC KHq0c XHI2L"]')
        .should('be.visible') //Видно ли кнопку "Log in"
        .click()//Нажатие на неё
        
        cy.get('input[id="user_email"]')
        .type('pofig34512@freg.com')
        .should('have.value', 'pofig34512@freg.com') 
        //сравнивает вводимый e-mail с ожидаемым

        cy.get('input[id="user_password"]')
        .type('1234567')
        .should('have.value', '1234567') 
        //сравнивает вводимый password с ожидаемым

        //cy.get(':nth-child(7) > .btn')//Один из способов поиска кнопки (через прицел)
        cy.get('input[type="submit"]')  //Ещё один способ (Через Dev Tools)
        .should('be.visible') //Видно ли кнопку "Login"
        .click()//Нажатие на неё

        cy.contains('Invalid email or password.').should('be.visible')
        //Видно ли ответ про неправильний адрес или пароль
    })
})