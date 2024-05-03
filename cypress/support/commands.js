Cypress.Commands.add("baseurl", () => {
  cy.viewport(1280, 720);
  cy.visit('http://chanjoke.intellisoftkenya.com:8099/');
})

Cypress.Commands.add('login', () => {
  // Randomly select a user ID
  const user = [
      "90210999"
     
  ];
  const randomIndex = Math.floor(Math.random() * user.length);
  const randomUser = user[randomIndex];

  // Type user ID, password, and select location
  cy.get('#idNumber').type(randomUser).wait(1000);
  cy.get('#password').type("password99");
  cy.get('#location').click();
  
  // Randomly select a facility
 //const randomNumber = Math.floor(Math.random() * 2);
 // if (randomNumber === 0) {
    //  cy.get('.ant-select-item-option-active > .ant-select-item-option-content').click();
//  } else {
      cy.get('[title="Facility"] > .ant-select-item-option-content').click();
 // }
  
  // Click login button
  cy.get('.ant-btn').click();
});

Cypress.Commands.add("typeWithClear", { prevSubject: true }, (subject, text) => {
  // Clear the field using cy.clear() if it already has data
  cy.wrap(subject).then((element) => {
    if (element.val() !== "") {
      cy.wrap(element).clear();
    }
  });

  // Type the specified text into the field
  cy.wrap(subject).type(text);
});

Cypress.on('uncaught:exception', (err, runnable) => {
  // Suppress uncaught exceptions
  return false;
})
