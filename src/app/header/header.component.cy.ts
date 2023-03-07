describe('Navigation Bar', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display navigation bar', () => {
    cy.get('.navbar').should('exist');
  });

  it('should contain links for Recipes and Shopping List pages', () => {
    cy.get('.navbar-nav li:nth-child(1)').should('contain', 'Recipes');
    cy.get('.navbar-nav li:nth-child(2)').should('contain', 'Shopping List');
  });

  it('should contain a Manage dropdown with Save Data and Fetch Data options', () => {
    cy.get('.navbar-right .dropdown').should('exist');
    cy.get('.dropdown-toggle').click();
    cy.get('.dropdown-menu li:nth-child(1)').should('contain', 'Save Data');
    cy.get('.dropdown-menu li:nth-child(2)').should('contain', 'Fetch Data');
  });
});
