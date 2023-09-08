///<reference types = "cypress"/>

describe('Sort Inventory Test', () => {
    const sortingOptions = [
        { option: 'hilo', text: 'Price (high to low)' },
        { option: 'lohi', text: 'Price (low to high)' },
        { option: 'az', text: 'Name (A to Z)' },
        { option: 'za', text: 'Name (Z to A)' }
    ];

    describe('Sort Inventory Test', () => {
        const sortingOptions = [
            { option: 'hilo', text: 'Price (high to low)', itemName: 'Sauce Labs Fleece Jacket' },
            { option: 'lohi', text: 'Price (low to high)', itemName: 'Sauce Labs Onesie' },
            { option: 'az', text: 'Name (A to Z)', itemName: 'Sauce Labs Backpack' },
            { option: 'za', text: 'Name (Z to A)', itemName: 'Test.allTheThings() T-Shirt (Red)' }
        ];

        it('should log in with a standard user', () => {
            // Step 1: Log in with a standard user 
            cy.login();
            // Verify that the login was successful
            cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');

            for (const { option, text, itemName } of sortingOptions) {
                // Click on sort dropdown
                cy.get('select[class="product_sort_container"]').select(option);

                // Verify that the dropdown menu is showing the selected option
                cy.get('select[class="product_sort_container"]').should('have.value', option);
                cy.get('select[class="product_sort_container"] option:selected').should('have.text', text);

                // Get the name of the first item after sorting
                cy.get('.inventory_item_name')
                    .first()
                    .should('have.text', itemName);
            }
        });
    });
})