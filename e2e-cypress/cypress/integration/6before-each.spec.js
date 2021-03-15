describe('Text box with max characters', () => {
    beforeEach(() => {
        cy.visit('/example-3');

        cy.get('[data-cy="last-name-chars-left-count"]')
        .as('charLeftSpan')
        cy.get('[data-cy="input-last-name"]')
        .as('charLeftInput')
    });


    it('displays the appropriate remaining characters count', () => {
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
        cy.get('[data-cy="input-last-name"]')
        .type('asdasassfsdfdsacccccccccccccccccc');
        
        cy.get('@charLeftInput')
        .should('have.attr','value', 'asdasassfsdfdsa');

        cy.get('[data-cy="last-name-chars-left-count"]')
        .invoke('text')
        .should('equal','0');
    });
});