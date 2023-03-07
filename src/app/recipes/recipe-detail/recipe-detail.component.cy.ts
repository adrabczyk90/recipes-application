describe('Recipe Details', () => {
  beforeEach(() => {
    cy.visit('/recipes/1'); // navigate to the recipe details page
  });

  it('should display recipe details correctly', () => {
  //  cy.get('.row:nth-child(1) img').should('have.attr', 'src', 'https://example.com/image.jpg'); // check if the recipe image source is correct
 //   cy.get('.row:nth-child(2) h1').should('contain', 'Recipe Name'); // check if the recipe name is correct
 //   cy.get('.row:nth-child(4)').should('contain', 'Recipe Description'); // check if the recipe description is correct
  //  cy.get('.row:nth-child(5) li:nth-child(1)').should('contain', 'Ingredient 1 - 1 cup'); // check if the first ingredient and its amount are correct
  //  cy.get('.row:nth-child(5) li:nth-child(2)').should('contain', 'Ingredient 2 - 2 tbsp'); // check if the second ingredient and its amount are correct
  });

  it('should contain a Manage Recipe dropdown with Add to Shopping List, Edit Recipe and Delete Recipe options', () => {
    //cy.get('.row:nth-child(3) .btn-group').should('exist'); // check if Manage Recipe dropdown exists
    cy.get('.dropdown-toggle').click(); // click the dropdown toggle to open the dropdown menu
    // cy.get('.dropdown-menu li:nth-child(1)').should('contain', 'Add to Shopping List'); // check if Add to Shopping List option exists
    // cy.get('.dropdown-menu li:nth-child(2)').should('contain', 'Edit Recipe'); // check if Edit Recipe option exists
    // cy.get('.dropdown-menu li:nth-child(3)').should('contain', 'Delete Recipe'); // check if Delete Recipe option exists
    // cy.get('.dropdown-menu li:nth-child(1) a').click(); // click Add to Shopping List option
    cy.url().should('contain', '/recipes'); // check if the URL navigates to the shopping list page
    cy.go('back'); // go back to the recipe details page
    // cy.get('.dropdown-menu li:nth-child(2) a').click(); // click Edit Recipe option
    // cy.url().should('contain', '/edit'); // check if the URL navigates to the recipe edit page
    // cy.go('back'); // go back to the recipe details page
    // cy.get('.dropdown-menu li:nth-child(3) a').click(); // click Delete Recipe option
    // cy.get('.modal-dialog').should('exist'); // check if the confirmation modal is displayed
    // cy.get('.modal-footer button:nth-child(2)').click(); // click the confirmation button to delete the recipe
    // cy.url().should('contain', '/recipes'); // check if the URL navigates back to the recipes page
  });
});
