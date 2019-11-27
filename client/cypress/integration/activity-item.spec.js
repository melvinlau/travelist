/// <reference types="Cypress" />

context('Activity Item', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('.start-button').click();
  })

  it('renders individual activity list item', () => {
    cy.get('.activity-list-item').within(() => {
      cy.get('[type="checkbox"]').should('be.visible');
      cy.get('.activity-list-item-name').should('be.visible');
      cy.get('.activity-list-item-name').should('not.be.empty');
    });
  });

});
