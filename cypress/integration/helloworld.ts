describe('Cypress tests', () => {
  it('placeholder', () => {
    cy.visit('/');
    cy.contains('Hello world!');
  })
})
