/// <reference types="Cypress" />

context('Activity Item', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('.start-button').click();
  })

  it('renders correctly formatted individual activity item', () => {
    cy.get('.activity-item').within(() => {
      cy.get('[type="checkbox"]').should('be.visible');
      cy.get('.activity-item-name').should('be.visible');
      cy.get('.activity-item-name').should('not.be.empty');
    });
  });

});
