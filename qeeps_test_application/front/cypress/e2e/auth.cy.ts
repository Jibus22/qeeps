describe("Auth page", () => {
  it("successfully loads", () => {
    cy.visit("/");
    cy.url().should("include", "/auth");
  });

  it("should fail signin", () => {
    cy.visit("/auth");
    cy.findByPlaceholderText("email").click().type("email@lkjlkj.dj");
    cy.findByPlaceholderText("password").click().type("supersecretpwd");
    cy.findByRole("button", { name: /sign in/i }).click();
    cy.findByText(/authentication error/i);
  });

  it("should signin", () => {
    cy.visit("/auth");
  });
});
