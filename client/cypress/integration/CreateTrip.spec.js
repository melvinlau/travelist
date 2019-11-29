/// <reference types="Cypress" />

// import { StartForm } from '../../src/components/StartForm'; // Double check this
import { submitDestinationAndDate } from './_helpers';

context('User visits start page, fills form correctly and clicks button', () => {

  beforeEach(() => {
    // Create a spy
    submitDestinationAndDate();
  });

  it('generates a POST request and creates a trip', () => {
    // TODO
  })

});
