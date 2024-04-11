/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.baseurl()
        cy.login()
    })
  
    const randomNumberOfKeyPresses = Math.floor(Math.random() * 5) + 1; // Random number between 1 and 5

    it('.type() - Register a Client', () => {
        cy.get('.max-w-7xl > [href="/register-client/_"]').click()
        cy.wait(2500)
        cy.get('#clientDetails_firstName').type('Jane')
        cy.get('#clientDetails_middleName').type('N')
        cy.get('#clientDetails_lastName').type('Newton')
        cy.get('#clientDetails_gender > :nth-child(2) > .ant-radio > .ant-radio-input').click()
       // cy.get('#clientDetails_estimatedAge > :nth-child(2) > .ant-radio > .ant-radio-input').click()

        //select a random date back 5 years
        cy.get('.ant-picker-input').click()
        cy.get('.ant-picker-cell:not(.ant-picker-cell-disabled)').should('exist').then($dateCells => {
        const numAvailableDates = $dateCells.length        
        const randomIndex = Math.floor(Math.random() * numAvailableDates)        
        const randomDateCell = $dateCells.eq(randomIndex)        
       // const dateTitle = randomDateCell.attr('title')        
       // const [year, month, day] = dateTitle.split('-')
       // const formattedDate = `${day}-${month}-${year.slice(-2)}`        
        randomDateCell.click()


        const randomPresses11 = Math.floor(Math.random() * 0); // Change 2 to 3 to include the first option

        cy.get(':nth-child(7) > .ant-form-item > .ant-row > .ant-form-item-control >.ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click() // cy.get("#patientForm_xED9XkpCeUe").trigger("keydown", { keyCode: 40 }); // Down arrow key
        cy.get(':nth-child(7) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').trigger("keydown", { keyCode: 13 }); // Enter key  

        // Generate a random 10-digit number
        const randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
        const randomNumberString = randomNumber.toString();
        cy.get('#clientDetails_identificationNumber').type(randomNumberString);
        cy.get('button').contains('Next').click();

        const randomPresses12 = Math.floor(Math.random() * 0);

        cy.get('#caregiverType').click()        
        cy.get('#caregiverType').trigger("keydown", { keyCode: 13 }); 
        cy.get('#caregiverName').type('Alex')

        const randomNumber2 =
        "07" +
        Math.floor(Math.random() * 1000000000)
          .toString()
          .padStart(8, "0");
  
          cy.get('#phoneNumber').type(randomNumber); // Phone number

        cy.get('.grid > .ml-4').click()
        cy.get('button').contains('Next').click();
        cy.wait(1500)
 
            cy.get('#headlessui-combobox-input-\\:rt\\:').type("BARINGO").wait(1000).type("{downarrow}").type('{Enter}');
            cy.get('#headlessui-combobox-input-\\:r13\\:').type("BARINGO").wait(1000).type("{downarrow}").type('{Enter}');
            cy.get('#headlessui-combobox-input-\\:r19\\:').type("E").wait(1000).type("{downarrow}").type('{Enter}');
            cy.get('button').contains('Preview').click();
            cy.get('button').contains('Submit').click();
            cy.wait(1000)
            cy.get('button').contains('Close').click();

            
   


        })
      
  })
  })
  