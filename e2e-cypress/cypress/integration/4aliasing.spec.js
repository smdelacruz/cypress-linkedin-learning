describe('Text box with max characters', () => {
    it('displays the appropriate remaining characters count', () => {
        cy.visit('http://localhost:3000/example-3');

        // declaration start
        cy.get('[data-cy="last-name-chars-left-count"]')
        .as('charLeftSpan')

        cy.get('[data-cy="input-last-name"]')
        .as('charLeftInput')
        // declartion end
        
        
        cy.get('@charLeftSpan')
        .invoke('text')
        .should('equal','15');

        cy.get('@charLeftInput').type('hello');

        cy.get('@charLeftSpan')
        .invoke('text')
        .should('equal','10');

        cy.get('@charLeftInput').type(' my friend');

        cy.get('@charLeftSpan')
        .invoke('text')
        .should('equal','0');
    });


    it('prevents the user from typing more characters once max is exceeded', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="input-last-name"]')
        .as('charLeftInput')
        .type('asdasassfsdfdsacccccccccccccccccc');
        
        cy.get('@charLeftInput')
        .should('have.attr','value', 'asdasassfsdfdsa');

        cy.get('[data-cy="last-name-chars-left-count"]')
        .as('charLeftSpan')
        .invoke('text')
        .should('equal','0');
    });
});