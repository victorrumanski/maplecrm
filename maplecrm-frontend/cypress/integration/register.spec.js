describe("Login", () => {
  function email() {
    return cy.get("#email");
  }
  function password() {
    return cy.get("#password");
  }
  function name() {
    return cy.get("#name");
  }
  function registerBtn() {
    return cy.get("#register-btn");
  }

  beforeEach(() => {
    cy.visit(Cypress.config("register").url);
    email().clear();
    password().clear();
    name().clear();
  });

  it("Greets with Register", () => {
    cy.get("#register-title").contains("Register");
  });

  it("Links to login", () => {
    cy.get("#login-link").click();
    cy.url().should("include", "login");
  });
/*
  it("requires email", () => {
    password().type(Cypress.config("wrong-password"));
    loginBtn().click();
    cy.get("#email-error").contains("required");
  });

  it("requires password", () => {
    email().type(Cypress.config("email"));
    loginBtn().click();
    cy.get("#password-error").contains("required");
  });

  it("requires valid email and password", () => {
    email().type(Cypress.config("email"));
    password().type(Cypress.config("wrong-password"));
    loginBtn().click();
    cy.get("#error-msg").contains("Bad credentials");
  });

  it("register user navigates to dashboard", () => {
    
    cy.get('#name').type("Adam");
    cy.get("#email").type("smith@gmail.com");
    cy.get("#password").type("abc123");
    cy.get("#register-btn").click();
    cy.url().should('include', 'dashboard');
  });
*/
});