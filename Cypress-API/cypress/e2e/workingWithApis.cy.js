/// <reference types="cypress" />

it("API test", () => {
  cy.intercept("GET", "**/tag", {
    fixture: "tags.json",
  });
  cy.intercept("GET", "**/articles?limit=10&offset=0", {
    fixture: "articles.json",
  });
  cy.loginToApplication();
});
