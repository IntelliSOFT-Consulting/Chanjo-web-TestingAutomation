function administerVaccine(batchNumber, vaccineType) {
    // function implementation here
    const numberOfDownArrowPresses = Cypress._.random(1, 10);

    const randomNumber14 = Math.floor(Math.random() * 3); // Generates a number between 0 and 2
    switch (randomNumber14) {
    case 0://Administer
       cy.get('.bg-\\[\\#4E8D6E\\]').click().then(() => {
       cy.get('#vaccines_0_batchNumber').click( {force: true})
       for (let i = 0; i < numberOfDownArrowPresses; i++) {
       cy.get('#vaccines_0_batchNumber').type('{downarrow}',  {force: true});
         }
       cy.get('#vaccines_0_batchNumber').type('{enter}', {force: true});
       cy.get('#vaccines_1_batchNumber')
         .click( {force: true})
         .type('{downarrow}', {force: true}).wait(1000)
         .type('{enter}', {force: true});
         /*cy.get('#vaccines_2_batchNumber')
       .click( {force: true}).wait(1000)
       .type('{downarrow}', {force: true}).wait(1000)
       .type('{enter}', {force: true});*/
    
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
    // cy.get('.ant-popconfirm-buttons > .ant-btn-primary').click()
     cy.wait(2000)
     });
    // cy.get('button').contains('Close').click()
    
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
    //cy.get('button').contains('Close').click()
    
    break;
    default:
    
    break;
     }
  }

  
  module.exports = {
    administerVaccine,
  };