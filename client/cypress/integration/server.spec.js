describe('server',()=>{
    before(()=>{
        cy.exec("node ../server/reset_db.js")
    })

    it('is online',()=>{
        cy.request("http://localhost:8180/status").its('body').should('include','online')
    })

    it('can get profil createur',()=>{
        cy.request("http://localhost:8180/profil/createur").its('body').should('include','{"username":"Admin","email":"","presentation":null}')
    })

    it('can update username createur',()=>{
        var body = new Object
        body.username = "paul"
        cy.request('POST',"http://localhost:8180/profil/createur",body)
        cy.request("http://localhost:8180/profil/createur").its('body').should('include','"username":"paul"')

    })

    it('doesn\'t allow sql injection',()=>{
        var body = new Object
        body.username = "paul, presentation='hack'"
        cy.request('POST',"http://localhost:8180/profil/createur",body)
        cy.request("http://localhost:8180/profil/createur").its('body').should('include','"username":"paul, presentation=\'hack\'"')

    })
})