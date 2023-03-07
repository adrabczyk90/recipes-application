describe('Header and router outlet', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display app header', () => {
    cy.get('app-header').should('exist');
  });

  it('should display router outlet', () => {
    cy.get('.container .row .col-md-12 router-outlet').should('exist');
  });

  it('should display the component', () => {
    // Visit the page
    cy.visit('/');

    // Check if the component is displayed
    cy.get('app-root').should('be.visible');
  });
});
