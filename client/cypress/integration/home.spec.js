describe('Home tests', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('loads the home page', () => {
        cy.url().should('include', 'localhost:3000/')
    })

    it('has a working menu', ()=>{
        cy.get(':nth-child(1) > a').click()
        cy.url().should('include', '/a')

        cy.get(':nth-child(2) > a').click()
        cy.url().should('include', '/c')

        cy.get(':nth-child(3) > a').click()
        cy.url().should('include', '/b')
    })
})

const boutonPlus = '#root > :nth-child(1) > :nth-child(2) > :nth-child(2)'
const boutonMinus = '#root > :nth-child(1) > :nth-child(2) > :nth-child(3)'
const affichageNombre = ':nth-child(2) > .sc-bdVaJa'

describe('FirstCounter tests', ()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.get(':nth-child(1) > a').click()
    })

    it('starts at 0', ()=>{
        cy.get(affichageNombre).should('contain','0')
    })

    it('can add numbers',()=>{
        cy.get(boutonPlus).click()
        cy.get(affichageNombre).should('contain','1')
        cy.get(boutonPlus).click().click()
        cy.get(affichageNombre).should('contain','3')
    })

    it('can substract numbers',()=>{
        cy.get(boutonMinus).click()
        cy.get(affichageNombre).should('contain','-1')
        cy.get(boutonMinus).click().click()
        cy.get(affichageNombre).should('contain','-3')
    })

    it('can do both.',()=>{
        cy.get(boutonPlus).click().click()
        cy.get(boutonMinus).click()
        cy.get(affichageNombre).should('contain','1')
    })
})