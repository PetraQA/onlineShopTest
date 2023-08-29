// cypress/integration/users.negative.spec.js
const userLoginFail = require('/Users/petra/Documents/CypressPM/userLoginFail.json'); 

describe('Negative Scenarios', () => {
  before(() => {
    cy.visit('https://www.saucedemo.com/v1/index.html'); // Visit before user login
  });

  it('should show validation for locked out user', () => {
        // attempt to login with locked out user
        const lockedOutUser = userLoginFail.locked_out_user;
        cy.usersLogin(lockedOutUser.username, lockedOutUser.password);
        // assertion for validation button
        cy.get('.error-button').should('be.visible'); 
        // button color should be red
        cy.get('.error-button').should('have.css', 'color', 'rgb(255, 0, 0)');
        //assertion for validation message
        cy.contains('Sorry, this user has been locked out').should('be.visible');
    })
 
  it('should show validation for inorrect Username', () => {
        // attempt to log in with invalid credentials
        const invalidUsername = userLoginFail.invalid_username;
        cy.usersLogin(invalidUsername.username, invalidUsername.password);
        // assertion for validation button
        cy.get('.error-button').should('be.visible'); 
        //assertion for validation message
        cy.contains('Username and password do not match any user in this service').should('be.visible');
    });

    it('should show validation for inorrect Password', () => {
        // attempt to log in with invalid credentials
        const invalidPass = userLoginFail.invalid_pass;
        cy.usersLogin(invalidPass.username, invalidPass.password);
        // assertion for validation button
        cy.get('.error-button').should('be.visible'); 
        //assertion for validation message
        cy.contains('Username and password do not match any user in this service').should('be.visible');
    });

    it('should show validation for empty fields', () => {
        // attempt to log in with empty fields
        cy.visit('https://www.saucedemo.com/v1/');
        cy.get('form').submit();
        // assertion for validation button
        cy.get('.error-button').should('be.visible'); 
        //assertion for validation message
        cy.contains('Username is required').should('be.visible');
    });

    it('should show validation for no Username', () => {
        // attempt to log in with no username
        const emptyUsername = userLoginFail.empty_username;
        cy.usersLogin(emptyUsername.username, emptyUsername.password);
        //remove character on Username field
        cy.get('[data-test=username]').type('{backspace}');
        cy.get('form').submit()
        // assertion for validation button
        cy.get('.error-button').should('be.visible');
        //assertion for validation message
        cy.contains('Username is required').should('be.visible');
    });

    it('should show validation for no Password', () => {
        // attempt to log in with no password
        const emptyPass = userLoginFail.empty_pass;
        cy.usersLogin(emptyPass.username, emptyPass.password);
        //remove character on Password Field
        cy.get('[data-test=password]').type('{backspace}');
        cy.get('form').submit()
        // assertion for validation button
        cy.get('.error-button').should('be.visible'); 
        //assertion for validation message
        cy.contains('Password is required').should('be.visible');
        });

})
