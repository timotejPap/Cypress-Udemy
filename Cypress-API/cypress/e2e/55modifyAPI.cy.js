/// <reference types="cypress" />

it("Modify request and response", () => {
  cy.intercept("GET", "**/articles*", (req) => {
    req.continue((res) => {
      res.body.articles[0].favoritesCount = 9999999;
      res.send(res.body);
    });
  });
  cy.loginToApplication();
  cy.get("app-favorite-button").should("contain.text", "9999999");
});
