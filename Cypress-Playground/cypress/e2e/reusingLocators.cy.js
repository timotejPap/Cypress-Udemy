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

    // 1. Cypress ALIASING
    // cy.get("#inputEmail1").as("inputEmail1") // create alias
    // cy.get("@inputEmail1").parents("form").find("button") // use alias
    // cy.get("@inputEmail1").parents("form").find("nb-radio")

    // 2. Cypress THEN() method
    cy.get("#inputEmail1").then( $inputEmail => { // $inputEmail1 is a jQuery object)
    cy.wrap($inputEmail).parents("form").find("button") // wrap() is used to convert jQuery object to Cypress object
    cy.wrap($inputEmail).parents("form").find("nb-radio") // now we can use Cypress commands on it
    cy.wrap("Hello").should("equal", "Hello") // we can also wrap strings, numbers, arrays, objects
    cy.wrap($inputEmail).as("inputEmail2") // we can also create alias using wrap()
    })
        cy.get("@inputEmail2").parents("form").find("button")

});