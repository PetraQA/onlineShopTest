describe('Login Test', () => {
    it('Standard user - shopping cart user flow', () => {
      // Visit the login page
      cy.visit('https://www.saucedemo.com/v1/');
  
      // Enter username and password
      cy.get('[data-test=username]').type('standard_user');
      cy.get('[data-test=password]').type('secret_sauce');
  
      // Click on the login button
      cy.get('form').submit();
  
      // Verify that the login was successful
      cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');

      // Add item to shopping cart
      cy.addToCart(1);

      // Verify that the cart badge displays the correct count
      cy.get('.shopping_cart_badge').should('have.text', '1');

      // Visit shopping cart
      cy.openShoppingCart();

      //click on the Checkout button
      cy.get('.btn_action').click();

      //click on the Continue button
      cy.get('.btn_primary').click();

      //fill in checkout data
      cy.fillCheckoutInfo();

      //click on the Continue button
      cy.get('.btn_primary').click();

      //click on Finish
      cy.get('.cart_button').click();

      // Verify that the cart badge element does not exist
      cy.get('.shopping_cart_badge').should('not.exist');
    })
})
