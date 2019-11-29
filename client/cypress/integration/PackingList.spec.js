/// <reference types="Cypress" />

import { submitDestinationAndDate, submitActivities } from './_helpers';

context('Packing List', () => {

  beforeEach(() => {
    submitDestinationAndDate();
    submitActivities();
  })

  it('renders a typical packing list item', () => {
    cy.get('[data-cy=packing-list-item]').within(() => {
      cy.get('[type="checkbox"]').should('be.visible');
      cy.get('[data-cy=item-name]').should('be.visible');
      cy.get('[data-cy=item-name]').should('not.be.empty');
    });
  });

});
