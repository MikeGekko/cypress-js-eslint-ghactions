// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import './commands';
import 'cypress-mochawesome-reporter/register';

before('Visit site', () => {
    cy.clearAllCookies();
    cy.clearLocalStorage();

    cy.visit('/');
});
