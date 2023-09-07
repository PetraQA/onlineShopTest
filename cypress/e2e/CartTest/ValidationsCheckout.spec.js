///<reference types = "cypress"/>


describe('Checkout Validations', () => {
    it('should log in with standard user', () => {
        // Visit the login page
        cy.visit('https://www.saucedemo.com/v1/');

        // Enter username and password
        cy.get('[data-test=username]').type('standard_user');
        cy.get('[data-test=password]').type('secret_sauce');

        // Click on the login button
        cy.get('form').submit();

        // Verify that the login was successful
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');

        // Visit shopping cart
        cy.openShoppingCart();

        // Verify that the shopping cart page opened
        cy.url().should('eq', 'https://www.saucedemo.com/v1/cart.html');

        // Click on the Checkout button
        cy.get('.btn_action').click();

        // Click on the Continue button
        cy.get('.btn_primary').click();

        // Verify that the Empty fields validation msg is showing
        cy.get('[data-test=error]').should('be.visible');
        // Assertion for validation message
        cy.contains('Error: First Name is required').should('be.visible');

        // Verify that the empty Last Name validation msg is showing
        // Enter Fist Name
        cy.get('[data-test=firstName]').type('John');
        // Click on the Continue button
        cy.get('.btn_primary').click();
        // Assertion for validation message
        cy.contains('Error: Last Name is required').should('be.visible');

         // Verify that the empty Postal Code validation msg is showing
        // Enter Last Name
        cy.get('[data-test=lastName]').type('White');
        // Click on the Continue button
        cy.get('.btn_primary').click();
        // Assertion for validation message
        cy.contains('Error: Postal Code is required').should('be.visible');

    })
})  