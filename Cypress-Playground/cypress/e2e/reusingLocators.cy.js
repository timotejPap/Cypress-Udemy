/// <reference types="cypress" />

beforeEach("Open test app", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
});


// REUSING LOCATORS
it.only("Reusing locators", () => {

    // THIS WILL NOT WORK!!!
    // const inputEmail1 = cy.get("#inputEmail1")
    // inputEmail1.parents("form").find("button")
    // inputEmail1.parents("form").find("nb-radio")

    // 1. Cypress Alias
    cy.get("#inputEmail1").as("inputEmail1") // create alias
    cy.get("@inputEmail1").parents("form").find("button") // use alias
    cy.get("@inputEmail1").parents("form").find("nb-radio")

    // 2. Cypress then() method
    cy.get("#inputEmail1").then
});