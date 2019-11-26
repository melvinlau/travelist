/// <reference types="Cypress" />

context('Packing List', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('.start-button').click();
    cy.get('.get-list-button').click();
  })

  it('renders individual packing list item', () => {
    cy.get('.packing-list-item').within(() => {
      cy.get('[type="checkbox"]').should('be.visible');
      cy.get('.packing-list-item-name').should('be.visible');
      cy.get('.packing-list-item-name').should('not.be.empty');
    });
  });

});
