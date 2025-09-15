/// <reference types="cypress" />

beforeEach("Open test app", () => {
  cy.visit("/");
});

it("Slider test - Temperature", () => {
  cy.get('[tabtitle="Temperature"] circle')
    .invoke("attr", "cy", "126.30677131193754")
    .invoke("attr", "cx", "270.28236829324385")
    .click();
  cy.get(".value.temperature.h1").should("contain.text", "27");
});

it("Slider test - Humidity", () => {
  cy.contains("Humidity").click();
  cy.get('[tabtitle="Humidity"] circle')
    .invoke("attr", "cy", "30.735725196674597")
    .invoke("attr", "cx", "212.26560905232438")
    .click();
  cy.get(".value.humidity.h1").should("contain.text", "62");
});
