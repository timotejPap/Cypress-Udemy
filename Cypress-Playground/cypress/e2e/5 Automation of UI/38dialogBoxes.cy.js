/// <reference types="cypress" />

beforeEach("Open test app", () => {
  cy.visit("/");
  cy.contains("Tables & Data").click();
  cy.contains("Smart Table").click();
});

// 1. option
it("Dialog boxes", () => {
  cy.get(".nb-trash").first().click();
  cy.on("window:confirm", (confirm) => {
    // works only when the confirm box appears
    expect(confirm).to.equal("Are you sure you want to delete?");
  });
});

// 2. option
it.only("Dialog boxes - stub", () => {
  cy.window().then((win) => {
    cy.stub(win, "confirm").as("dialogBox").returns(false); // .returns(false) -> to cancel the action, .returns(true) -> to confirm the action
    cy.get(".nb-trash").first().click();
    cy.get("@dialogBox").should(
      "have.been.calledWith",
      "Are you sure you want to delete?"
    );
  });
});
