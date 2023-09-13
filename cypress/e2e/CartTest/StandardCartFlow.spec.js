import { pageURLs } from '../../constants/constants.js';

describe('Shopping Test', () => {
  it('Standard user - shopping cart user flow', () => {
    // Log in with a standard user and verify the successful login
    cy.login().url().should('eq', pageURLs.inventoryPage);

    // Add items to the shopping cart and verify the cart badge count
    cy.addToCart(1);
    cy.addToCart(2);
    cy.get('.shopping_cart_badge').should('have.text', '2').click();

    // Verify that the user is on the Cart Page and proceed to Checkout
    cy.url().should('eq', pageURLs.cartPage);
    cy.get('.btn_action').click();

    // Verify that the user is on the Checkout Step One Page, fill in checkout data, and continue
    cy.url().should('eq', pageURLs.checkoutPageOne);
    cy.fillCheckoutInfo();
    cy.get('.btn_primary').click();

    // Verify that the user is on the Checkout Step Two Page
    cy.url().should('eq', pageURLs.checkoutPageTwo);

    // Calculate the expected total price by summing up the prices of items in the cart
    let expectedTotalPrice = 0;
    cy.get('.cart_list .cart_item .inventory_item_price').each(($el) => {
      const price = parseFloat($el.text().replace('$', ''));
      expectedTotalPrice += price;
    });

    // Extract the displayed subtotal
    cy.get('.summary_subtotal_label')
      .should('exist')
      .invoke('text')
      .should('not.be.empty')
      .then((subtotalLabel) => {
        // Extract the subtotal value from the label text
        const subtotal = parseFloat(subtotalLabel.replace('Item total: $', ''));

        // Verify that the subtotal matches the expected total price
        expect(subtotal).to.equal(expectedTotalPrice);
      });

    // Complete the checkout
    cy.get('.cart_button').click();

    // Verify that the cart badge element does not exist
    cy.get('.shopping_cart_badge').should('not.exist');
  });
});
