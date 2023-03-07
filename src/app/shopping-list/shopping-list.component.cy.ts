describe('Shopping List Component', () => {
  beforeEach(() => {
    cy.visit('/shopping-list');
  });

  it('should display the list of ingredients', () => {
    // Act
    cy.get('a.list-group-item').should('have.length', 2);

    // Assert
    cy.get('a.list-group-item').eq(0).contains('Apples (5)');
    cy.get('a.list-group-item').eq(1).contains('Tomatoes (10)');
  });
});
