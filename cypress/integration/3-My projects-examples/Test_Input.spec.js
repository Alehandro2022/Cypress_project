//https://www.youtube.com/watch?v=3FbAqd2_tZI&t=46s
describe('Test Grinfer Input', function () {
    let user = cy
        it('Test Grinfer Input', () => {
            user.visit('https://grinfer.com/')
            user.viewport(1920, 1080)
            //user.get('.sc-1q9s0sp-4').type('Sport').should('have.value', 'Sport')//через прицел
            user.get('input[type="text"]').type('Sport').should('have.value', 'Sport')
            //user.get('.sc-tghwm-0').should('be.visible').click()//через прицел
            user.get('button[class="sc-tghwm-0 sc-1q9s0sp-5 eJKhbS hsfeJX"]').should('be.visible').click()
            //cy.get(':nth-child(7) > .sc-g7i5pe-2 > .sc-1r96s88-0 > [style="width: 100%;"] > .sc-1v9ddg3-0 > .sc-1v9ddg3-1 > .sc-tudgzw-0')
            //.click()//Через прицел
            user.get('span[class="sc-1m292s3-0 kjStKG"]').contains('The Secrets of Time')
            .should('be.visible').click()
            //cy.get('.sc-1xj3xob-0').click()//Через прицел
            user.get('a[class="sc-1xj3xob-0 ezBrmu sc-1dqgp31-2 dLiCGc"]').contains('Try for free')
            .should('be.visible').click()
            user.get('div[class="sc-b8rou2-0 juRvRL"]')
            .should('be.visible')
        })
    })