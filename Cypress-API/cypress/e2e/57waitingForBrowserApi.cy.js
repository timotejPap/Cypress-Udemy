/// <reference types="cypress" />

it("waiting for browser API", () => {
  cy.intercept("GET", "**/articles*").as("getArticlesAPI");
  cy.loginToApplication();
  cy.wait("@getArticlesAPI").then((apiArticleObject) => {
    console.log(apiArticleObject);
    expect(apiArticleObject.response.body.articles[0].title).to.contain(
      "Bondar Academy"
    );
  });
  cy.get("app-article-list")
    .invoke("text")
    .then((allArticleTexts) => {
      expect(allArticleTexts).to.contain("Bondar Academy");
    });
});
