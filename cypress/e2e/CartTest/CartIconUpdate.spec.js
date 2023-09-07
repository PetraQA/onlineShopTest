///<reference types = "cypress"/>

describe('Shopping Cart Icon Update', () => {
  it('should reflect the correct item count in the cart badge', () => {

    // Step 1: Log in with a standard user
    cy.login();

    // Step 2: Submit the login form
    cy.get('form').submit();

    // Step 3: Verify successful login by checking the URL
    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');

    // Step 4: Add the first item to the cart
    cy.addToCart(1);

    // Step 5: Verify that the cart badge displays '1'
    cy.get('.shopping_cart_badge').should('have.text', '1');

    // Step 6: Add another item to the cart
    cy.addToCart(4);

    // Step 7: Verify that the cart badge updates to '2'
    cy.get('.shopping_cart_badge').should('have.text', '2');

    // Step 8: Remove items from the cart if needed
    // cy.removeItemsOnInventoryPage();

    // Step 9: Verify that the cart is empty (no badge)
    // cy.get('.shopping_cart_badge').should('not.exist');
  });
});
