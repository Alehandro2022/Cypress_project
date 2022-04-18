//https://www.youtube.com/watch?v=O52al90-iZ4
describe('Test Grinfer', function () {
let user = cy
    it('Test btn', () => {
        user.visit('https://grinfer.com/')
        user.viewport(1920, 1080)
        user.get('span[class="sc-286flp-1 UlYKM"]').should('be.visible').click()
        user.get('a[class="sc-8lxa00-9 iMNWlz"]').should('be.visible').contains('Design').click()
        //user.get(':nth-child(1) > .sc-8lxa00-9').should('be.visible').click() //через прицел
        
    })
})