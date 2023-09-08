///<reference types = "cypress"/>

describe('Shopping Cart Icon Update', () => {
  beforeEach(() => {
    // Step 1: Log in with a standard user
    cy.login();

    // Step 2: Verify successful login by checking the URL
    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
  });

  it('should add and remove items and update the cart badge', () => {
    // Initialize cart badge count
    let cartBadgeCount = 0;

    // Add items one by one and check cart badge
    for (let itemIndex = 0; itemIndex < 6; itemIndex++) {
      // Increase the cart badge count before adding an item
      cartBadgeCount++;
      cy.addToCart(itemIndex);

      // Verify that the cart badge displays the updated count
      cy.get('.shopping_cart_badge').should('have.text', String(cartBadgeCount));
    }

    // Remove all items one by one and check cart badge
    for (let itemIndex = 5; itemIndex >= 0; itemIndex--) {
      // Decrease the cart badge count before removing an item
      cartBadgeCount--;
      cy.removeFromCart(itemIndex);

      // If itemIndex is 0, verify that the cart badge disappears
      if (itemIndex === 0) {
        cy.get('.shopping_cart_badge').should('not.exist');
      } else {
        // Verify that the cart badge displays the updated count
        cy.get('.shopping_cart_badge').should('have.text', String(cartBadgeCount));
      }
    }
  });
});

