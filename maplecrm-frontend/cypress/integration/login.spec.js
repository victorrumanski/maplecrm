describe("Login", () => {
  it("should login user", () => {
    cy.visit(Cypress.config('loginUrl'));
    cy.get('#email').clear().type(Cypress.config('email'));
    cy.get('#password').clear().type(Cypress.config('password'));
    cy.get('#login-btn').click();
    cy.url().should('include', 'dashboard');
  });

  it("should show error on bad credentials", () => {
    cy.visit(Cypress.config('loginUrl'));
    cy.get('#email').clear().type(Cypress.config('email'));
    cy.get('#password').clear().type(Cypress.config('wrong-password'));
    cy.get('#login-btn').click();
    cy.get('#error-msg').contains('Bad cred');
  });
});
