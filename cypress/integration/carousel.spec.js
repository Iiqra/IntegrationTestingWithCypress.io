describe('Integration tests for React Leaf Carousel', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    // add param and dataset
   context('Testing if correct number of visible images in the given breakpoint', function() {
      it('TC01- it should display only 1 images within 200 breakpoint', () => {
        cy.viewport(Cypress.env('testViewportWidth'), Cypress.env('testViewportHeight'))
         
         // TODO: IA001 - Possible bug / Known issue !
         //cy.get('[alt="Image7"]').should('not.be.visible')
         cy.get('[alt="Image1"]').should('be.visible')
         cy.get('[alt="Image2"]').should('not.be.visible')
         //cy.get('[alt="Image3"]').should('not.be.visible')
         cy.get('[alt="Image6"]').should('not.be.visible')

      })

      it('TC02- it should display only 2 images within 640 breakpoint', () => {

         // TODO: IA001 - Possible bug / Known issue !
         //cy.get('[alt="Image7"]').should('not.be.visible')         
         //cy.get('[alt="Image3"]').should('not.be.visible')
         cy.get('[alt="Image1"]').should('be.visible')
         cy.get('[alt="Image2"]').should('be.visible')
         cy.get('[alt="Image6"]').should('not.be.visible')
      })

      it('TC03- it should display only 3 images within 768 breakpoint', () => {
         cy.viewport(Cypress.env('monitorViewportWidth'), Cypress.env('testViewportHeight'))

         // TODO: IA001 - Possible bug / Known issue !
         //cy.get('[alt="Image7"]').should('not.be.visible')
         cy.get('[alt="Image1"]').should('be.visible')
         cy.get('[alt="Image2"]').should('be.visible')
         cy.get('[alt="Image3"]').should('be.visible')
         cy.get('[alt="Image4"]').should('not.be.visible')
         cy.get('[alt="Image5"]').should('not.be.visible')
         cy.get('[alt="Image6"]').should('not.be.visible')
      })
   }) 

   context('Testing dots functionality', function() {
     
      it('TC04- Testing if 4 dots are visible within 640 viewpoint ', () => {
         cy.get('[data-testid="infinite-carousel-dots"]').find('button').should('have.length', 4)
        })     
        
      it('TC05- Testing if 7 dots are visible within 200 viewpoint ', () => {
        cy.viewport(Cypress.env('testViewportWidth'), Cypress.env('testViewportHeight'))
        cy.get('[data-testid="infinite-carousel-dots"]').find('button').should('have.length', 7)
     })

      it('TC06- left most dot-button should be active and first 2 images should be visible', () => {

         cy.get('[data-index="0"]')
         .find('i')
         .should('have.class', 'InfiniteCarouselDotIcon InfiniteCarouselDotActiveIcon')
   
         cy.get('[alt="Image1"]').should('be.visible')  
         cy.get('[alt="Image2"]').should('be.visible')   
      })
      it ('TC07- 2nd dot-button should be active and next 2 images should be visible', ()=> {
         cy.get('[data-index="1"]')
         .click()
         .find('i')
         .should('have.class', 'InfiniteCarouselDotIcon InfiniteCarouselDotActiveIcon')
         
         cy.get('[alt="Image3"]').should('be.visible')  
         cy.get('[alt="Image4"]').should('be.visible')  
      })
      it ('TC08- right most dot-button should be active and 2 images should be visible including the last image', ()=> {
         cy.get('[data-index="3"]')
         .click()
         .find('i')
         .should('have.class', 'InfiniteCarouselDotIcon InfiniteCarouselDotActiveIcon')
         cy.get('[alt="Image6"]').should('be.visible')  
         cy.get('[alt="Image7"]').should('be.visible')  
      })
   }) 
   
   context('TC09- Testing arrow buttons functionality', function (){
   it('Testing if correct events trigger', () => {
    // wait for el to be clickable - here event can be listened - > 
      cy.get('[name="infinite-carousel-button-next"]').should('be.visible').trigger('onNextClick')
      cy.get('[name="infinite-carousel-button-previous"]').should('be.visible').trigger('onPreviousClick')

    })
   })
}) // global describe closure

  