///<reference types = "cypress"/>

import { sortingOptions, productNames, pageURLs } from '../../constants/constants.js';

describe('Sort Inventory Test', () => {
    it('should log in with a standard user', () => {
        // Log in with a standard user 
        cy.login();
        // Verify that the login was successful
        cy.url().should('eq', pageURLs.inventoryPage);

        for (const { value, text } of sortingOptions) {
            // Click on sort dropdown
            cy.get('select[class="product_sort_container"]').select(value);

            // Verify that the dropdown menu is showing the selected option
            cy.get('select[class="product_sort_container"]').should('have.value', value);
            cy.get('select[class="product_sort_container"] option:selected').should('have.text', text);

            // Get the name of the first item after sorting
            cy.get('.inventory_item_name')
                .first()
                .should('have.text', productNames[value]);
        }
        console.log(productNames.az);
        console.log(sortingOptions[0].text);
    });
});


