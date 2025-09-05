/// <reference types="cypress" />

beforeEach("Open test app", () => {
    cy.visit("/");
});

//only tests
it("Hello World", () => {

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