/// <reference types="Cypress" />

context('Packing List', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('.start-button').click();
    cy.get('.get-list-button').click();
  })

  it('renders correctly formatted individual activity item', () => {
    cy.get('.packing-list').within(() => {
      cy.get('[type="checkbox"]').should('be.visible');
      cy.get('.packing-list-name').should('be.visible');
      cy.get('.packing-list-name').should('not.be.empty');
    });
  });

});