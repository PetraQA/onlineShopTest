// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('loginToApp', () => {
//     cy.visit('/login')
//     cy.get('[placeholder="Username"]').type('standard_user')
//     cy.get('[placeholder="Password"]').type('secret_sauce')
//     cy.get('form').submit()
// })

Cypress.Commands.add('addToCart', (itemIndex) => {
    cy.get('.inventory_item').eq(itemIndex).find('.btn_primary').click();
});

Cypress.Commands.add('removeFromCart', (itemIndex) => {
    cy.get('.inventory_item').eq(itemIndex).find('.btn_secondary').click();
});

Cypress.Commands.add('openShoppingCart', () => {
    cy.get('.shopping_cart_link').click();
});

Cypress.Commands.add('logout', () => {
    cy.get('.bm-burger-button').click(); // Open the burger menu
    cy.get('.bm-item-list').contains('Logout').click(); // Click the logout option
    //cy.get('#logout_sidebar_link').click(); // Click logout link
});

Cypress.Commands.add('login', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    // Enter standard username and password
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    // Click the login button
    cy.get('form').submit();
})

Cypress.Commands.add('usersLogin', (username, password) => {
    cy.visit('https://www.saucedemo.com/v1/');
    // Enter username and password
    cy.get('[data-test=username]').type(username);
    cy.get('[data-test=password]').type(password);
    // Click the login button
    cy.get('form').submit();
});

Cypress.Commands.add('fillCheckoutInfo', () => {
    //verifiy that the user is on the chechout page
    cy.url().should('eq', 'https://www.saucedemo.com/v1/checkout-step-one.html');
    // Enter checkout data
    cy.get('[data-test=firstName]').type('Standard');
    cy.get('[data-test=lastName]').type('User');
    cy.get('[data-test=postalCode]').type('10000')
})

























