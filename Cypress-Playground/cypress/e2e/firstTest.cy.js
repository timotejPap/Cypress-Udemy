/// <reference types="cypress" />

beforeEach("Open test app", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
});

//only tests
it("Hello World", () => {

    // locator by Tag name
    cy.get("input");

    // locator by ID value
    cy.get("#inputEmail1");

    // locator by Class value
    cy.get(".input-full-width");

    // locator by Attribute
    cy.get("[fullwidth]");

    // locator Attribute with value
    cy.get('[placeholder="Email"]');

    // entire class value
    cy.get('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]');

    // locator by combination of Attribute
    cy.get('[placeholder="Email"][fullwidth]')
    cy.get('input[placeholder="Email"]')
    
    // find by data-cy attribute
    cy.get('[data-cy="inputEmail1"]')


});






// it("Hello World2", () => {

// });

// //grouped tests - Test suits
// describe("My First Test Suit", () => {
//     beforeEach("Open test app", () => {
//         cy.visit("/");
//     });

//     it("First Test", () => {
//         //test step - actions, interactions, verifications
//         expect(true).to.equal(true);
//     })
//     it("Second Test", () => {
//         //test step - actions, interactions, verifications
//         expect(true).to.equal(true);
//     })
// });

// describe("My Second Test Suit", () => {
//     afterEach("Open test app", () => {
//         cy.visit("/");
//     });
//     it("Second Test", () => {
//         //test step - actions, interactions, verifications
//         expect(true).to.equal(true);
//     })
// });