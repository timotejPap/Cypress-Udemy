/// <reference types="cypress" />

import { navigateTo } from "../../page-objects/navigationPage";

beforeEach("Open test app", () => {
  cy.visit("/");
});

it("Navigation test", () => {
  navigateTo.formLayoutPage();
  navigateTo.datepickerPage();
  navigateTo.toastrPage();
  navigateTo.tooltipPage();
});
