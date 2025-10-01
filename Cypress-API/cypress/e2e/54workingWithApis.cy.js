/// <reference types="cypress" />

it("API test", () => {
  // cy.intercept("GET", "**/tag", {
  //   fixture: "tags.json",
  // });
  cy.loginToApplication(); // custom command
  cy.intercept("GET", "**/tags", { fixture: "tags.json" });
  cy.intercept("GET", "**/articles*", { fixture: "articles.json" });
});
