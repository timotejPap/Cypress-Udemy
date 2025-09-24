/// <reference types="cypress" />

it("Modify request and response - likes", () => {
  cy.intercept("GET", "**/articles*", (req) => {
    req.continue((res) => {
      res.body.articles[0].favoritesCount = 9999999;
      res.send(res.body);
    });
  });
  cy.loginToApplication();
  cy.get("app-favorite-button").should("contain.text", "9999999");
});

it("Modify request and response - title", () => {
  cy.intercept("GET", "**/articles*", (req) => {
    req.continue((res) => {
      res.body.articles[0].title = "This is a modified title";
      res.send(res.body);
    });
  });
  cy.loginToApplication();
  cy.get("h1").should("contain.text", "This is a modified title");
});

it("Modify request and response - add new article", () => {
  cy.intercept("GET", "**/articles*", (req) => {
    req.continue((res) => {
      const newArticle = {
        slug: "this-is-a-new-article",
        title: "This is a new article",
        body: "This is the body of the new article",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        author: {
          username: "new_author",
          bio: "I am a new author",
          image: "https://example.com/new_author.jpg",
        },
      };
      res.body.articles.push(newArticle);
      res.send(res.body);
    });
  });
  cy.loginToApplication();
  cy.get("h1").should("contain.text", "This is a new article");
});
