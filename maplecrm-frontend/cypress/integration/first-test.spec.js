describe("First test", () => {
  it("should visit login page", () => {
    cy.visit("/auth/login");
    cy.get('#register-link').click();
    cy.url().should('include', '/register');
  });
});
