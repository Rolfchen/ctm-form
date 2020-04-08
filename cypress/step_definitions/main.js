/* global Given, When, Then, cy */

Given(/I navigate to the "([^"]*)"/, (screen) => {
  const route = screen === "main form" ? "/" : `/${screen}`;
  cy.visit(route);
  cy.wait(300);
});

Given(/I see that I can provide my "([^"]*)" information/, (formName) => {
  cy.get(`form[name=frm-${formName}]`).should("exist");
});

Given(/I see that I can provide "([^"]*)"/, (fieldName) => {
  cy.get(`form`)
    .find(`.SmartInput [name=${fieldName}]`)
    .should("exist");
});

Given(/I am informed "([^"]*)" for my "([^"]*)"/, (helpText, fieldName) => {
  cy.get(`form`)
    .find(`.SmartInput.SmartInput--${fieldName} .HelpText`)
    .should("have.text", helpText);
});

Given(/I see that I am at step "([^"]*)" of the submission process/, (step) => {
  cy.get(`.ProgressBar .ProgressBar__List--Step${step} div`).should(
    "have.class",
    "active"
  );
});

Given(/I see that I (can|can not) continue to the next screen/, (ableTo) => {
  const assertion = ableTo === "can not" ? true : false;
  cy.get(".Button--next button").should("have.prop", "disabled", assertion);
});

Given(/I choose to continue to the next screen/, () => {
  cy.get(".Button--next button").click();
});

Given(/I provide "([^"]*)" as my "([^"]*)"/, (value, fieldName) => {
  cy.get(`.SmartInput [name=${fieldName}]`).clear();
  cy.get(`.SmartInput [name=${fieldName}]`).type(value);
});

Given(
  /I (do not see any|see) errors with my "([^"]*)"/,
  (visible, fieldName) => {
    const assertion = visible === "see" ? "have.class" : "not.have.class";
    cy.get(`.SmartInput.SmartInput--${fieldName}`).should(assertion, "error");
  }
);

Given(/I choose "([^"]*)" as my "([^"]*)"/, (text, fieldName) => {
  cy.get(`.SmartInput.SmartInput--${fieldName} select`).select(text);
});

Given(/I choose to submit my information/, () => {
  cy.get(".Button--submit button").click();
});

Given(/I see my submission results/, () => {
  cy.get(".Submission--Name .Submission__text").should("not.be.empty");
  cy.get(".Submission--Email .Submission__text").should("not.be.empty");
  cy.get(".Submission--Address .Submission__text").should("not.be.empty");
});
