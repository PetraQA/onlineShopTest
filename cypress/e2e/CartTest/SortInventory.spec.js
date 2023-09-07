///<reference types = "cypress"/>


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

        // Click on sort dropdown
        cy.get('select[class="product_sort_container"]').select('hilo');
        // Verify that the dropdown menu is showing the selected option High to Low
        cy.get('select[class="product_sort_container"]').should('have.value', 'hilo'); // Verify the value attribute
        cy.get('select[class="product_sort_container"] option:selected').should('have.text', 'Price (high to low)'); // Verify the selected option's text content

        // Click on sort dropdown
        cy.get('select[class="product_sort_container"]').select('lohi');
        // Verify that the dropdown menu is showing the selected option Low to High
        cy.get('select[class="product_sort_container"]').should('have.value', 'lohi'); // Verify the value attribute
        cy.get('select[class="product_sort_container"] option:selected').should('have.text', 'Price (low to high)'); // Verify the selected option's text content

        // Click on sort dropdown
        cy.get('select[class="product_sort_container"]').select('az');
        // Verify that the dropdown menu is showing the selected option Name (A-Z)
        cy.get('select[class="product_sort_container"]').should('have.value', 'az'); // Verify the value attribute
        cy.get('select[class="product_sort_container"] option:selected').should('have.text', 'Name (A to Z)'); // Verify the selected option's text content
        // Get the name of the first item after sorting
        cy.get('.inventory_item_name')
            .first()
            .should('have.text', 'Sauce Labs Backpack');

        // Click on sort dropdown
        cy.get('select[class="product_sort_container"]').select('za');
        // Verify that the dropdown menu is showing the selected option Name (A-Z)
        cy.get('select[class="product_sort_container"]').should('have.value', 'za'); // Verify the value attribute
        cy.get('select[class="product_sort_container"] option:selected').should('have.text', 'Name (Z to A)'); // Verify the selected option's text content
        // Get the name of the first item after sorting
        cy.get('.inventory_item_name')
            .first()
            .should('have.text', 'Test.allTheThings() T-Shirt (Red)');
    })
})