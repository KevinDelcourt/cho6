describe('My First Test', function() {
    it('Does not do much!', function() {
      expect(true).to.equal(true)
    })

    it('Visits the Kitchen Sink', function() {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
        cy.url().should('include', '/commands/actions')

        cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
      })
  })

  var a = 2 +2