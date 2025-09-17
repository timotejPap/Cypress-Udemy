/// <reference types="cypress" />

import { onDatePickerPage } from "../../page-objects/datePickerPage";
import { onFormLayoutsPage } from "../../page-objects/formLayoutsPage";
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

it.only("Test with page object", () => {
  navigateTo.formLayoutPage();
  onFormLayoutsPage.submitUsingTheGridForm("test@test.com", "Welcome", 1);
  onFormLayoutsPage.submitBasicForm("test@test.com", "Welcome", false);
  navigateTo.datepickerPage();
  onDatePickerPage.selectCommonDatepickerDateFromToday(10);
  onDatePickerPage.selectRangePickerDateFromToday(5, 10);
});
