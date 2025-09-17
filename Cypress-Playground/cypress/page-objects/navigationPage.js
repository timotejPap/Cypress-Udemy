function selectGroupMenuItem(groupItemName) {
  // function for group item visibility
  cy.contains("a", groupItemName)
    .invoke("attr", "aria-expanded")
    .then((attr) => {
      // get the attribute value
      if (attr.includes("false")) {
        // check if the group is not visible
        cy.contains("a", groupItemName).click(); // click if not visible
      }
    });
}

class NavigationPage {
  formLayoutPage() {
    selectGroupMenuItem("Forms");
    cy.contains("Form Layouts").click();
  }

  datepickerPage() {
    selectGroupMenuItem("Forms");
    cy.contains("Datepicker").click();
  }

  toastrPage() {
    selectGroupMenuItem("Modal & Overlays");
    cy.contains("Toastr").click();
  }

  tooltipPage() {
    selectGroupMenuItem("Modal & Overlays");
    cy.contains("Tooltip").click();
  }
}
export const navigateTo = new NavigationPage();
