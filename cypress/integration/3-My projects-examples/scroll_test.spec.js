//https://www.youtube.com/watch?v=DGHoT6266pY&list=PLwCC0l-B_V8JNd2-YG5hh-beXmR8gWOtC&index=3&ab_channel=LookLiveUI

describe('Scrolling', function() {
    it ('scroll to carousel', function() {
        cy.visit('https://unsplash.com/')
        cy.get('[data-test="homepage-header-search-form-input"]').type('Car{enter}')
        cy.get('h1[class="Aa1sS j8AIa xNKUO dvBHu oh0KJ tiVPC PP9J3"]').should('have.text', 'Car')
        cy.scrollTo(0, 2500)
        cy.get(':nth-child(1) > :nth-child(7) > .YdIix > .L34o8 > .MbNnd > .zmDAx > .rEAWd > .omfF5 > .MorZF > .VQW0y > [data-test="photo-grid-multi-col-img"]').click()
    })
})