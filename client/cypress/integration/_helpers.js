export function submitDestinationAndDate() {
  cy.visit('/');
  cy.get('[data-cy=destination]').type('London');
  cy.get('[data-cy=start-date]').type('2019-12-06');
  cy.get('[data-cy=end-date]').type('2019-12-08');
  cy.get('[data-cy=start-button]').click();
}

export function submitActivities() {
  cy.get('[type="checkbox"]').check();
  cy.get('[data-cy=generate-list-button]').click();
}
