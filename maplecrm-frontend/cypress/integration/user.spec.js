describe("User", () => {
  it("should register user", () => {
    cy.visit("/auth/register");
    cy.get('#name').type("Adam");
    cy.get("#email").type("smith@gmail.com");
    cy.get("#password").type("abc123");
    cy.get("#register-btn").click();
    cy.url().should('include', 'dashboard');
  });
});
