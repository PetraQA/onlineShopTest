// cypress/integration/users.login.spec.js
const users = require('/Users/petra/Documents/CypressPM/users.json'); 


describe('Login and Logout Tests', () => {
  before(() => {
    cy.visit('https://www.saucedemo.com/v1/index.html'); // Visit only before the first user login
  });

  beforeEach(() => {
    // Ensure user is on the login page before each login
    cy.url().should('eq', 'https://www.saucedemo.com/v1/index.html');
  });

  it('should log in different users and log them out', () => {
    // Log in with each user
    for (const user of Object.values(users)) {
        if (user.username !== 'locked_out_user') {
         cy.usersLogin(user.username, user.password);
         // Add assertions or navigate to other pages after successful login
         // Call the reusable logout function
         cy.logout();
         // Assertion for successful logout
         cy.url().should('eq', 'https://www.saucedemo.com/v1/index.html'); // Verify user is back on index page
        }
    }
});


})

