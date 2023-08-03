// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('jsScrollIntoView', {prevSubject: 'element'}, (element, options = {index: 0}) => {
    cy.wrap(element).then(($selector) => {
        $selector[options.index].scrollIntoView({scrollIntoViewOptions: {block: 'end', inline: 'nearest'}});
    });
});

Cypress.Commands.add('button', (button, options = {force: false}) => {
    cy.get('button').contains(button).first().jsScrollIntoView().should('be.visible').click({force: options.force});
});

Cypress.Commands.add('waitTIllPageIsLoad', () => {
    cy.get('[class="syos-loader__message"]');
});
