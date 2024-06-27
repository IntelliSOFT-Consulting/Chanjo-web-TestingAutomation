///<reference types="cypress" />

import faker from 'faker';
const { administerVaccine } = require('./functions');
let clientData;
const numberOfRuns = 1;
const numberOfDownArrowPresses = Cypress._.random(1, 10);

context('Actions', () => {
    before(() => {
     // cy.session('login', ()=>{
        cy.baseurl();
       //cy.login();
    })
 //})
 for (let i = 0; i < numberOfRuns; i++) {//loop again
  describe(`Test Run ${i + 1}`, () => {
    runTest();
  });
}
  
   function runTest() {

   it('.type() - check if the first name is valid', () => {
    cy.viewport(1280, 720);

    const validName = 'John';
    const invalidName = 'John123!';
 
        cy.wait(2500)
        cy.get(':nth-child(5) > .hover\\:bg-gray-50\\]').contains("Register Client").click()
        cy.wait(2500)       
        it('should accept valid first name', () => {
            cy.get('#clientDetails_firstName').as('firstNameField');

                cy.get('@firstNameField').clear().type(validName).should('have.value', validName);
                cy.get('@firstNameField').clear().type(invalidName).should('have.value', validName);
            })
        
           

/*
        clientData = { firstName, lastName, careGiverName };       
    
         cy.get('#clientDetails_gender > :nth-child(2) > .ant-radio > .ant-radio-input').click()
         cy.get('#clientDetails_vaccineType > :nth-child(1) > .ant-radio > .ant-radio-input').click()
         // Generate a random date between now and 14 days back
        const currentDate = new Date();
        const startDate = new Date(currentDate.getTime() - 14 * 24 * 60 * 60 * 1000); // 14 days back
        const randomTime = startDate.getTime() + Math.random() * (currentDate.getTime() - startDate.getTime());
        const randomDate = new Date(randomTime);

        // Extract day, month, and year
        const day = randomDate.getDate().toString().padStart(2, '0');
        const month = (randomDate.getMonth() + 1).toString().padStart(2, '0');
        let year = randomDate.getFullYear().toString().slice(-2);
        // Convert two-digit year to four digits if necessary
        year = year < 50 ? '20' + year : '19' + year;

        // Format the date as DD/MM/YY
        const formattedDate = `${day}-${month}-${year}`;

        // Write the formatted date into the input field
        cy.get('#clientDetails_dateOfBirth').type(formattedDate).type('{Enter}');   

         cy.get('#clientDetails_identificationType').click() 
         cy.get('#clientDetails_identificationType').trigger("keydown", { keyCode: 13 }); // Enter key  

         
        // Generate a random 10-digit number
        const randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
        const randomNumberString = randomNumber.toString();
        cy.get('#clientDetails_identificationNumber').type(randomNumberString);

   
 
        cy.get('button').contains('Next').click();

        /**********CAREGIVER*****************************************************************/
    /*    cy.get('#caregiverType').click() 
        cy.wait(1000)       
        cy.get('#caregiverType').click()
        for (let i = 0; i < numberOfDownArrowPresses; i++) {
          cy.get('#caregiverType').type('{downarrow}');
          }
          cy.get('#caregiverType').type('{enter}');
          cy.get('#caregiverName').type(careGiverName)
          cy.get('#caregiverID').type(randomNumber)

        const randomNumber2 = "07" + Math.floor(Math.random() * 1000000000).toString().padStart(8, "0");// Phone number
        cy.get('#phoneNumber').type(randomNumber2); 
        /***************************************************************************/


   /*    cy.get('button').contains('Add Caregiver').click()
        cy.get('button').contains('Next').click();
        cy.wait(1500)

        /*************ADDRESS DETAILS***********************************************/
/*
        const county = [
            "BARINGO",
            "BUSIA",
            "NAIROBI",
            "KISUMU",
            "MOMBASA",
            "KERICHO",
            "NYANDARUA",
            "MERU",
            "KISII",
               ];
               const randomIndex1 = Math.floor(Math.random() * county.length);
               const randomCounty = county[randomIndex1];
      
               cy.get('#clientDetails_county').type(randomCounty, {force: true}).wait(1000).type("{downarrow}").type('{Enter}');
            
               cy.get('#clientDetails_subCounty').click( {force: true})//subcounty 
                     cy.wait(3000)           
                       for (let i = 0; i < numberOfDownArrowPresses; i++) {
                        cy.get('#clientDetails_subCounty').type('{downarrow}');
                        }
                        cy.get('#clientDetails_subCounty').type('{enter}');
                          
                        cy.get('#clientDetails_ward').click({force: true})//ward 
                        cy.wait(3000)           
                        for (let i = 0; i < numberOfDownArrowPresses; i++) {
                          cy.get('#clientDetails_ward').type('{downarrow}');
                        }
                          cy.get('#clientDetails_ward').type('{enter}');
                 cy.get('button').contains('Preview').click();
                 cy.get('button').contains('Submit').click();
                 cy.wait(5000)
                                              
                  })
       /*************Administer Vaccines***********************************************/
                    
 /*    it('.Administer Vaccine', () => {
        cy.viewport(1280, 720);
        cy.wait(5000);

        cy.get(':nth-child(1) > :nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
        cy.get(':nth-child(2) > :nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
        cy.get('button').contains('Administer Vaccine').click();

        administerVaccine('1234567890', 0);

      })
      
     it ('Administer at 6 Weeks', () => {
            cy.viewport(1280, 720);
      cy.wait(5000);
     //      const { firstName, lastName, careGiverName } = clientData;
      cy.get('.right-0 > .text-\\[\\#163C94\\]').click()
      cy.wait(5000)
      cy.get('.text-2xl > .ant-btn').click()
      cy.wait(5000)
      //cy.get('.text-2xl > .bg-\\[\\#163C94\\]').click()
      cy.get('#clientDetails_vaccineType > :nth-child(1) > .ant-radio > .ant-radio-input').click()
      cy.get('#clientDetails_weeks').clear()
      cy.get('#clientDetails_weeks').type("6").type('{Enter}')
      cy.get('button').contains('Next').click();
      cy.get('button').contains('Next').click();
      cy.get('button').contains('Preview').click();
      cy.get('button').contains('Submit').click();
      cy.wait(5000)
      cy.get('tbody.ant-table-tbody input[type="checkbox"]').each(($checkbox) => {
        cy.wrap($checkbox).check({ force: true });
      });
  
      cy.get('button').contains('Administer Vaccine').click();
      administerVaccine('1234567890', 0);
           
     })


    it ('Administer at 10 Weeks', () => {
      cy.viewport(1280, 720);
      cy.wait(5000);
      cy.get('.right-0 > .text-\\[\\#163C94\\]').click()
      cy.wait(5000)
      cy.get('.text-2xl > .ant-btn').click()
      cy.wait(5000)
      //cy.get('.text-2xl > .bg-\\[\\#163C94\\]').click()
      cy.get('#clientDetails_vaccineType > :nth-child(1) > .ant-radio > .ant-radio-input').click()
      cy.get('#clientDetails_years').clear()
      cy.get('#clientDetails_months').clear()
      cy.get('#clientDetails_weeks').clear()
      cy.get('#clientDetails_weeks').type("10").type('{Enter}')
      cy.get('button').contains('Next').click();
      cy.get('button').contains('Next').click();
      cy.get('button').contains('Preview').click();
      cy.get('button').contains('Submit').click();
      cy.wait(5000)
      cy.get('tbody.ant-table-tbody input[type="checkbox"]').each(($checkbox) => {
        cy.wrap($checkbox).check({ force: true });
      });

      cy.get('button').contains('Administer Vaccine').click();
      administerVaccine('1234567890', 0);

     })

it ('Administer at 14 Weeks', () => {
      cy.viewport(1280, 720);
      cy.wait(5000);
      //      const { firstName, lastName, careGiverName } = clientData;
      cy.get('.right-0 > .text-\\[\\#163C94\\]').click()
      cy.wait(5000)
      cy.get('.text-2xl > .ant-btn').click()
      
      cy.wait(5000)
      //cy.get('.text-2xl > .bg-\\[\\#163C94\\]').click()
      cy.get('#clientDetails_vaccineType > :nth-child(1) > .ant-radio > .ant-radio-input').click()
      cy.get('#clientDetails_years').clear()
      cy.get('#clientDetails_months').clear()
      cy.get('#clientDetails_weeks').clear()
      cy.get('#clientDetails_weeks').type("14").type('{Enter}')
      cy.get('button').contains('Next').click();
      cy.get('button').contains('Next').click();
      cy.get('button').contains('Preview').click();
      cy.get('button').contains('Submit').click();
      cy.wait(5000)
      cy.get('tbody.ant-table-tbody input[type="checkbox"]').each(($checkbox) => {
        cy.wrap($checkbox).check({ force: true });
      });

      cy.get('button').contains('Administer Vaccine').click();


      administerVaccine('1234567890', 0);

     })


it ('Administer at 6 Months', () => {
      cy.viewport(1280, 720);
      cy.wait(5000);
      //      const { firstName, lastName, careGiverName } = clientData;
      cy.get('.right-0 > .text-\\[\\#163C94\\]').click()
      cy.wait(5000)
      cy.get('.text-2xl > .ant-btn').click()
      cy.wait(5000)
      //cy.get('.text-2xl > .bg-\\[\\#163C94\\]').click()
      cy.get('#clientDetails_vaccineType > :nth-child(1) > .ant-radio > .ant-radio-input').click()
      cy.get('#clientDetails_years').clear()
      cy.get('#clientDetails_months').clear()
      cy.get('#clientDetails_months').type("6").type('{Enter}')
      cy.get('#clientDetails_weeks').clear()

      cy.get('button').contains('Next').click();
      cy.get('button').contains('Next').click();
      cy.get('button').contains('Preview').click();
      cy.get('button').contains('Submit').click();
      cy.wait(5000)
      cy.get('tbody.ant-table-tbody input[type="checkbox"]').each(($checkbox) => {
        cy.wrap($checkbox).check({ force: true });
      });
  
      cy.get('button').contains('Administer Vaccine').click();
      administerVaccine('1234567890', 0);

          })

it ('Administer at 7 Months', () => {
      cy.viewport(1280, 720);
      cy.wait(5000);
      //      const { firstName, lastName, careGiverName } = clientData;
      cy.get('.right-0 > .text-\\[\\#163C94\\]').click()
      cy.wait(5000)
      cy.get('.text-2xl > .ant-btn').click()

      cy.wait(5000)
      //cy.get('.text-2xl > .bg-\\[\\#163C94\\]').click()
      cy.get('#clientDetails_vaccineType > :nth-child(1) > .ant-radio > .ant-radio-input').click()
      cy.get('#clientDetails_years').clear()
      cy.get('#clientDetails_months').clear()
      cy.get('#clientDetails_months').type("7").type('{Enter}')
      cy.get('#clientDetails_weeks').clear()
      cy.get('button').contains('Next').click();
      cy.get('button').contains('Next').click();
      cy.get('button').contains('Preview').click();
      cy.get('button').contains('Submit').click();
      cy.wait(5000)
      cy.get('tbody.ant-table-tbody input[type="checkbox"]').each(($checkbox) => {
        cy.wrap($checkbox).check({ force: true });
        });

      cy.get('button').contains('Administer Vaccine').click();
      administerVaccine('1234567890', 0);

         })

    it ('Administer at 9 Months', () => {
    cy.viewport(1280, 720);
      cy.wait(5000);
      //      const { firstName, lastName, careGiverName } = clientData;
      cy.get('.right-0 > .text-\\[\\#163C94\\]').click()
      cy.wait(5000)
      cy.get('.text-2xl > .ant-btn').click()
      cy.wait(5000)
      //cy.get('.text-2xl > .bg-\\[\\#163C94\\]').click()
      cy.get('#clientDetails_vaccineType > :nth-child(1) > .ant-radio > .ant-radio-input').click()
      cy.get('#clientDetails_years').clear()
      cy.get('#clientDetails_months').clear()
      cy.get('#clientDetails_months').type("9").type('{Enter}')
      cy.get('#clientDetails_weeks').clear()
      cy.get('button').contains('Next').click();
      cy.get('button').contains('Next').click();
      cy.get('button').contains('Preview').click();
      cy.get('button').contains('Submit').click();
      cy.wait(5000)

      cy.get('tbody.ant-table-tbody input[type="checkbox"]').each(($checkbox) => {
        cy.wrap($checkbox).check({ force: true });
      });
      cy.get('button').contains('Administer Vaccine').click();
      administerVaccine('1234567890', 0);

            
          })

    it ('Administer at 12 Months', () => {
      cy.viewport(1280, 720);
      cy.wait(5000);
      //      const { firstName, lastName, careGiverName } = clientData;
      cy.get('.right-0 > .text-\\[\\#163C94\\]').click()
      cy.wait(5000)
      cy.get('.text-2xl > .ant-btn').click()
      cy.wait(5000)
      //cy.get('.text-2xl > .bg-\\[\\#163C94\\]').click()
      cy.get('#clientDetails_vaccineType > :nth-child(1) > .ant-radio > .ant-radio-input').click()
      cy.get('#clientDetails_years').clear()
      cy.get('#clientDetails_months').clear()
      cy.get('#clientDetails_months').type("12").type('{Enter}')
      cy.get('#clientDetails_weeks').clear()
      cy.get('button').contains('Next').click();
      cy.get('button').contains('Next').click();
      cy.get('button').contains('Preview').click();
      cy.get('button').contains('Submit').click();
      cy.wait(5000)

      cy.get('tbody.ant-table-tbody input[type="checkbox"]').each(($checkbox) => {
        cy.wrap($checkbox).check({ force: true });
      });

      cy.get('button').contains('Administer Vaccine').click();
      administerVaccine('1234567890', 0);

            
        })


it ('Administer at 18 Months', () => {
      cy.viewport(1280, 720);
      cy.wait(5000);
      //      const { firstName, lastName, careGiverName } = clientData;
      cy.get('.right-0 > .text-\\[\\#163C94\\]').click()
      cy.wait(5000)
      cy.get('.text-2xl > .ant-btn').click()
      cy.wait(5000)
      //cy.get('.text-2xl > .bg-\\[\\#163C94\\]').click()
      cy.get('#clientDetails_vaccineType > :nth-child(1) > .ant-radio > .ant-radio-input').click()
      cy.get('#clientDetails_years').clear()
      cy.get('#clientDetails_months').clear()
      cy.get('#clientDetails_months').type("18").type('{Enter}')
      cy.get('#clientDetails_weeks').clear()
      cy.get('button').contains('Next').click();
      cy.get('button').contains('Next').click();
      cy.get('button').contains('Preview').click();
      cy.get('button').contains('Submit').click();
      cy.wait(5000)

      cy.get('tbody.ant-table-tbody input[type="checkbox"]').each(($checkbox) => {
        cy.wrap($checkbox).check({ force: true });
      });
      cy.get('button').contains('Administer Vaccine').click();
      administerVaccine('1234567890', 0);

       
     })

it ('Administer at 24 Months', () => {
      cy.viewport(1280, 720);
      cy.wait(5000);
      //      const { firstName, lastName, careGiverName } = clientData;
      cy.get('.right-0 > .text-\\[\\#163C94\\]').click()
      cy.wait(5000)
      cy.get('.text-2xl > .ant-btn').click()
      cy.wait(5000)
      cy.get('#clientDetails_vaccineType > :nth-child(1) > .ant-radio > .ant-radio-input').click()
      cy.get('#clientDetails_years').clear()
      cy.get('#clientDetails_months').clear()
      cy.get('#clientDetails_months').type("24").type('{Enter}')
      cy.get('#clientDetails_weeks').clear()
      cy.get('button').contains('Next').click();
      cy.get('button').contains('Next').click();
      cy.get('button').contains('Preview').click();
      cy.get('button').contains('Submit').click();
      cy.wait(5000)
      cy.get('tbody.ant-table-tbody input[type="checkbox"]').each(($checkbox) => {
        cy.wrap($checkbox).check({ force: true });
      });

      cy.get('button').contains('Administer Vaccine').click();
      administerVaccine('1234567890', 0);

          })
          


          it ('Administer Deworming Dose 4 at 30 Months', () => {
            cy.viewport(1280, 720);
            cy.wait(5000);
            //      const { firstName, lastName, careGiverName } = clientData;
            cy.get('.right-0 > .text-\\[\\#163C94\\]').click()
            cy.wait(5000)
            cy.get('.text-2xl > .ant-btn').click()
            cy.wait(5000)
            cy.get('#clientDetails_vaccineType > :nth-child(1) > .ant-radio > .ant-radio-input').click()
            cy.get('#clientDetails_years').clear()
            cy.get('#clientDetails_months').clear()
            cy.get('#clientDetails_months').type("35").type('{Enter}')
            cy.get('#clientDetails_weeks').clear()
            cy.get('button').contains('Next').click();
            cy.get('button').contains('Next').click();
            cy.get('button').contains('Preview').click();
            cy.get('button').contains('Submit').click();
            cy.wait(5000)
            cy.get('tbody.ant-table-tbody input[type="checkbox"]').each(($checkbox) => {
              cy.wrap($checkbox).check({ force: true });
            });
      
            cy.get('button').contains('Administer Vaccine').click();
            administerVaccine('1234567890', 0);
      
                        
                })



      /*
      

      it('.Register AEFI', () => {
        cy.viewport(1280, 720);
        cy.wait(5000);
        const { firstName, lastName, careGiverName } = clientData;
         // cy.get('.bg-gray-50').contains("Search Client").click()
            //  cy.wait(2500)       
  
          
          cy.wait(2500)
          cy.get(':nth-child(2) > .ant-btn > span').click()

          const randomNumber = Math.random();
          if (randomNumber < 0.5) {
            cy.get(':nth-child(1) > .ant-radio > .ant-radio-input').click();
               } else {
                cy.get(':nth-child(2) > .ant-radio > .ant-radio-input').click();
              
          }
       
          
          cy.get('#aefiType').click()//type of AEFI
          cy.wait(1000)           
          for (let i = 0; i < numberOfDownArrowPresses; i++) {
            cy.get('#aefiType').type('{downarrow}').type('{enter}');

          }

            const details = [
              "Fever",
              "Swelling",
                           ];
            const randomIndex1 = Math.floor(Math.random() * details.length);
            const aefiDetails = details[randomIndex1];
            cy.get('#aefiDetails').type(aefiDetails)

            cy.get('#eventOnset').click()
            cy.get('.ant-picker-cell:not(.ant-picker-cell-disabled)').should('exist').then($dateCells => {
              const numAvailableDates = $dateCells.length        
              const randomIndex = Math.floor(Math.random() * numAvailableDates)        
              const randomDateCell = $dateCells.eq(randomIndex) 
              randomDateCell.click()
              })
              cy.get('#pastMedicalHistory').type('none')
              cy.get('button').contains('Next').click()
              .click()
             .click()
              
          const randomNumberOutcome = Math.random();
          if (randomNumberOutcome < 0.5) {
            cy.get('.ant-form > .px-6').contains('Treatment Given').click();
               } else {
            cy.get('.ant-form > .px-6').contains('Specimen collected for investigation').click();
                }

          cy.get('#aefiOutcome').click()
          for (let i = 0; i < numberOfDownArrowPresses; i++) {
            cy.get('#aefiOutcome').type('{downarrow}').type('{enter}');

          }
          cy.get('button').contains('Submit').click()

      })*/
       //   cy.lighthouse();
        });
    }
    
  })
    
