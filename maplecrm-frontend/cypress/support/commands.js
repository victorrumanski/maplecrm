Cypress.Commands.add("login", () => {
  cy.request({
    method: "POST",
    url: Cypress.config("loginUrl"),
    body: {
      email: Cypress.config("email"),
      password: Cypress.config("password")
    }
  }).then(response => {
    console.log("login res", response.body);
    localStorage.setItem("currentUser", response.body);
  });
});
Cypress.Commands.add("clearSession", () => {
  localStorage.removeItem("currentUser");
});
