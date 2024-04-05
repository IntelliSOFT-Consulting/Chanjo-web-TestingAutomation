/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.baseurl()
        cy.login()
    })
  
     
    it('.type() - Register a Client', () => {
        cy.get('.max-w-7xl > [href="/register-client/_"]').click()
        cy.wait(1000)
        cy.get('#clientDetails_firstName').type('Jane')
        cy.get('#clientDetails_middleName').type('N')
        cy.get('#clientDetails_lastName').type('Newton')
        cy.get('#clientDetails_gender > :nth-child(2) > .ant-radio > .ant-radio-input').click()
        cy.get('.ant-picker-input').click()
        // Get all the available date cells
     cy.get('.ant-picker-cell:not(.ant-picker-cell-disabled)').should('exist').then($dateCells => {
        // Calculate the number of available dates
        const numAvailableDates = $dateCells.length        
        // Generate a random index within the range of available dates
        const randomIndex = Math.floor(Math.random() * numAvailableDates)        
        // Get the random date cell
        const randomDateCell = $dateCells.eq(randomIndex)        
        // Get the title attribute which contains the date
        const dateTitle = randomDateCell.attr('title')        
        // Extract the date in the format "DD-MM-YY"
        const [year, month, day] = dateTitle.split('-')
        const formattedDate = `${day}-${month}-${year.slice(-2)}`        
        // Click on the random date cell to select the date
        randomDateCell.click()

        const randomPresses11 = Math.floor(Math.random() * 0); // Change 2 to 3 to include the first option

        cy.get(':nth-child(7) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click()        // cy.get("#patientForm_xED9XkpCeUe").trigger("keydown", { keyCode: 40 }); // Down arrow key
        cy.get(':nth-child(7) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').trigger("keydown", { keyCode: 13 }); // Enter key  

        // Generate a random 10-digit number
        const randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
        const randomNumberString = randomNumber.toString();
        cy.get('#clientDetails_identificationNumber').type(randomNumberString);
        cy.get('button').contains('Next').click();

        const randomPresses12 = Math.floor(Math.random() * 0); // Change 2 to 3 to include the first option

        cy.get('#caregiverType').click()        
        cy.get('#caregiverType').trigger("keydown", { keyCode: 13 }); // Enter key  
        cy.get('#caregiverName').type('Alex')
        cy.get('#phoneNumber').type('0712345654')
        cy.get('.grid > .ml-4').click()
        cy.get('button').contains('Next').click();
        cy.get('#headlessui-combobox-button-\:r1b\:').click()


      
    })
         




        //cy.get('.ant-picker-input').click()
       /* const start = new Date(1960, 0, 1);
        const end = new Date(2023, 0, 1);
        const randomDate = new Date(
          start.getTime() + Math.random() * (end.getTime() - start.getTime())
        );
  
        const formattedDate = randomDate.toISOString().split("T")[0];
  
        cy.get('.ant-picker-input') // Date of birth
          .click()
          .type(formattedDate)
          .type("{enter}");
  
        cy.wait(1000);*/

     
  
})
  })
  