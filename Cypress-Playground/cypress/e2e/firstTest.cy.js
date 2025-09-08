/// <reference types="cypress" />

beforeEach("Open test app", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
});

// LOCATORS

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


// GROUPED TESTS - TESTS SUITS

it("Hello World2", () => {

    describe("My First Test Suit", () => {
        beforeEach("Open test app", () => {
            cy.visit("/");
        });

        it("First Test", () => {
            //test step - actions, interactions, verifications
            expect(true).to.equal(true);
        })
        it("Second Test", () => {
            //test step - actions, interactions, verifications
            expect(true).to.equal(true);
        })
    });

    describe("My Second Test Suit", () => {
        afterEach("Open test app", () => {
            cy.visit("/");
        });
        it("Second Test", () => {
            //test step - actions, interactions, verifications
            expect(true).to.equal(true);
        })
    });

    // CHILD ELEMENTS

    it("Cypress locator methods", () => {
        // THEORY
        // get() - find element in entire page (all elements)
        // find() - find element within another element - child elements
        // contains() - find web element with specific text
        // - get first one if multiple found!
        // - it is case sensitive!

        cy.contains("Sign in"); // get first element with this text = first "Sign in" button
        cy.contains('[status="warning"]', "Sign in"); // get first element with this text and this attribute = second "Sign in" button
        cy.contains("nb-card", "Horizontal form");

        cy.contains("nb-card", "Horizontal form").find("button"); // will find all buttons in the card
        cy.contains("nb-card", "Horizontal form").contains("Sign in"); // will find first "Sign in" button in the card
        cy.contains("nb-card", "Horizontal form").get("button"); // will find all buttons in the page, not only in the card

        cy.contains("nb-card", "Using the Grid").find(".row").find("button"); // will find all buttons in the card

        cy.get("nb-card").find("nb-radio-group").contains("Option 1");// will get "Option 1" radio button
        cy.get("nb-card nb-radio-group").contains("Option 1"); // same as above, but without find() - simplier

        cy.get('nb-card > nb-card-body [placeholder="Jane Doe"]') // direct child selector
    });

})
// PARENT ELEMENTS

it.only("Parent elements", () => {
    cy.get("#inputEmail1").parents("form").find("button") // first unique element, then go to parent form, then find button in the form
    cy.contains("Using the Grid").parents("nb-card").find("button"); // first unique element, then go to parent "nb-card", then find button in the card
    cy.get("#inputEmail1").parentsUntil("nb-card-body").find("button") // will go up the DOM tree until "form", then find button in the form
});