describe('Storybook test', () => {
    beforeEach(() => {
        cy.visit('localhost:9009/')
      })

    it('opens the storybook', () => {
        cy.url().should('include', 'localhost:9009/')
    })
  })