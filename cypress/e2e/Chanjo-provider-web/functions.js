function administerVaccine(batchNumber, vaccineType) {
    const numberOfDownArrowPresses = Cypress._.random(1, 10);
    const randomNumber14 = Math.floor(Math.random() * 3); 
    switch (randomNumber14) {
    case 0://Administer
    cy.get('.bg-\\[\\#4E8D6E\\]').click().then(() => {
      const age = Math.floor(Math.random() * 3) + 3;
      cy.get('#currentWeight').type(age);
      cy.get('[id^="vaccines_"][id$="_batchNumber"]').each(($batchNumberField, index) => {
        cy.wrap($batchNumberField).click({ force: true });
        for (let i = 0; i < numberOfDownArrowPresses; i++) {
          cy.wrap($batchNumberField).type('{downarrow}', { force: true });
        }
        cy.wrap($batchNumberField).type('{enter}', { force: true });
      });
    
     cy.wait(2500)
      cy.get('button').contains('Administer').click();
      cy.get('.ant-popconfirm-buttons > .ant-btn-primary').click()
      cy.wait(2000)
      cy.get('.mt-8').click()
      //cy.get('button').contains('Close').click()
      });
    break;
    case 1://Contraindicate
      cy.get('.mt-5 > .bg-\\[\\#163C94\\]').click().then(() => {
      cy.get('#contraindicationDetails').type("patient has an injury")
      cy.get('.ant-picker-input').click()
      cy.get('.ant-picker-cell:not(.ant-picker-cell-disabled)').should('exist').then($dateCells => {
         const numAvailableDates = $dateCells.length        
         const randomIndex = Math.floor(Math.random() * numAvailableDates)        
         const randomDateCell = $dateCells.eq(randomIndex) 
         randomDateCell.click()
         })
    
      cy.wait(2500)
      cy.get('button').contains('Contraindicate').click();
      cy.get('.ant-popconfirm-buttons > .ant-btn-primary').click()
      cy.wait(2000)
     });
   
    break;
    case 2://Not Administered
     cy.get('.outline').click().then(() => {
     cy.get('#notVaccinatedReason').click({force: true})
     cy.wait(2000)           
     for (let i = 0; i < numberOfDownArrowPresses; i++) {
     cy.get('#notVaccinatedReason').type('{downarrow}');
     }
     cy.get('#notVaccinatedReason').type('{enter}', {force: true});
     cy.get('.ant-picker-input').click()
     cy.get('.ant-picker-cell:not(.ant-picker-cell-disabled)').should('exist').then($dateCells => {
        const numAvailableDates = $dateCells.length        
        const randomIndex = Math.floor(Math.random() * numAvailableDates)        
        const randomDateCell = $dateCells.eq(randomIndex) 
        randomDateCell.click()
    })
    
      cy.wait(2500)
      cy.get('button').contains('Submit').click();
      cy.get('.ant-popconfirm-buttons > .ant-btn-primary')
      .click()
      cy.wait(2000)
    });
   
    break;
    default:
    
    break;
     }
     cy.wait(10000)

  }

 
  module.exports = {
    administerVaccine,
  };