///<reference types = "cypress"/>

// describe('Visiting the Swag Labs Demo Page', () => {
//     it('should visit the URL', () => {
//         cy.visit('https://www.saucedemo.com/v1/');
//     });
// })
// describe('loginToApp', () => {
//     //cy.visit('/login')
//     cy.get('[placeholder="Username"]').type('standard_user')
//     cy.get('[placeholder="Password"]').type('secret_sauce')
//     cy.get('form').submit()
// })

describe('Login Test', () => {
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

    //   // Click on the burger menu
    //   cy.get('.bm-burger-button').click();

    //   // Assert that the menu has opened
    //   cy.get('.bm-menu-wrap').should('be.visible');

    //   //click on the logout button
    //   cy.get('.bm-item-list')
    //   .contains('Logout')
    //   .click();
      
    //   //Assert that standard user logged out
    //  cy.url().should('eq','https://www.saucedemo.com/v1/index.html');

    // Add the third item to the cart
    cy.addToCart(1);

    // Add the fourth item to the cart
    cy.addToCart(4);

    // Verify that the cart badge displays the correct count
    cy.get('.shopping_cart_badge').should('have.text', '2');

    // Visit shopping cart
    cy.openShoppingCart();

    // Verify that the shopping cart page opened
    cy.url().should('eq','https://www.saucedemo.com/v1/cart.html');

    // Click on the Checkout button
    cy.get('.btn_action').click();

    // Click on the Continue button
    cy.get('.btn_primary').click();

    // Verify that the validation msg is showing
    cy.get('[data-test=error]').should('be.visible');

    // Fill in checkout data
    cy.fillCheckoutInfo();

    // Click on the Continue button
    cy.get('.btn_primary').click();

    // Click on Cancel 
    cy.get('.btn_secondary').click();
    cy.url().should('eq','https://www.saucedemo.com/v1/inventory.html');

    // Click on sort dropdown
    cy.get('select[class="product_sort_container"]').select('hilo');
    // Verify that the dropdown menu is showing the selected option
    cy.get('select[class="product_sort_container"]').should('have.value', 'hilo'); // Verify the value attribute
    cy.get('select[class="product_sort_container"] option:selected').should('have.text', 'Price (high to low)'); // Verify the selected option's text content

    //remove first item from cart
    //cy.removeItemsOnInventoryPage();

    // cy.get('.btn_secondary').contains('REMOVE').then(removeButtons => {
    //    for (let i = 0; i < removeButtons.length; i++) {
    //       cy.wrap(removeButtons[i]).click();
  
    //       // Retry the assertion until it succeeds or a timeout is reached
    //       cy.retryUntil(() => {
    //         cy.get('.shopping_cart_badge').should('have.text', String(removeButtons.length - (i + 1)));
    //       });
    //     }
    // })


    // // Log out the user
    // cy.logout();

    // // Verify that the user is logged out (e.g., back on the login page)
    // cy.url().should('eq', 'https://www.saucedemo.com/v1/');
  });
});

    