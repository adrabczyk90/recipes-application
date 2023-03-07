describe('Recipe App', () => {
  it('should display the recipe list and details', () => {
    cy.visit('/');
    cy.get('.col-md-5 app-recipe-list').should('be.visible');
  });

  it('should display the component', () => {
    // Visit the page
    cy.visit('/recipes');
    // Check if the component is displayed
    cy.get('app-recipes').should('be.visible');
  });

  it('should display the component', () => {
    // Visit the page that contains the component
    cy.visit('/recipes');

    // Check if the component is displayed
    cy.get('app-recipes').should('be.visible');
  });
});
