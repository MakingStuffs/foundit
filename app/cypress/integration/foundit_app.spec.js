describe('foundit app', function () {
  beforeEach(function () {
    cy.visit('https://localhost:3001')
  })

  it('can open the front page', function () {
    cy.contains('Found It')
  })

  it('can open form', function () {
    cy.contains('Begin').click()
    cy.contains('What is the device name?')
  })

  it('has recaptcha', function () {
    cy.contains('Begin').click()
    cy.contains('What is the device name?')
    cy.get('.grecaptcha-logo')
  })

  describe('form tests', function () {
    beforeEach(function () {
      cy.contains('Begin').click()
    })

    it('cannot leave field empty', function () {
      cy.contains('Next').click()
      cy.contains('error')
      cy.contains('This field cannot be empty')
    })

    it('can progress to the next question', function () {
      cy.get('input').type('The Device')
      cy.contains('Next').click()
    })

    it('can go back to the previous question', function () {
      cy.get('input').type('The Device')
      cy.contains('Next').click()
      cy.contains('Prev').click()
      cy.get('input').should('have.value', 'The Device')
    })

    it('can skip all case questions', function () {
      cy.get('input').type('The device')
      cy.contains('Next').click()
      cy.contains('Next').click()
      cy.contains('What is your name?')
    })

    it('can skip case accessory questions', function () {
      cy.get('input').type('The device')
      cy.contains('Next').click()
      cy.get('.switch').click()
      cy.contains('Next').click()
      cy.contains('What colour is the case?')
      cy.get('input[type="text"]').type('Green')
      cy.contains('Next').click()
      cy.contains('What material is the case?')
      cy.get('input[type="text"]').type('Wood')
      cy.contains('Next').click()
      cy.contains('Does the case have accessories?')
      cy.contains('Next').click()
      cy.contains('What is your name?')
    })
    
    it ('can submit form and close message', function() {
      cy.get('input').type('The device')
      cy.contains('Next').click()
      cy.get('.switch').click()
      cy.contains('Next').click()
      cy.contains('What colour is the case?')
      cy.get('input[type="text"]').type('Green')
      cy.contains('Next').click()
      cy.contains('What material is the case?')
      cy.get('input[type="text"]').type('Wood')
      cy.contains('Next').click()
      cy.contains('Does the case have accessories?')
      cy.contains('Next').click()
      cy.contains('What is your name?')
      cy.get('input[type="text"]').type('Paul')
      cy.contains('Next').click()
      cy.contains('What is your email address?')
      cy.get('input[type="email"]').type('test@example.com')
      cy.contains('Next').click()
      cy.contains('What is your phone number?')
      cy.get('input[type="number"]').type('00990099090')
      cy.contains('Next').click()
      cy.contains('Your Answers')
      cy.get('button[type="submit"]').click()
      cy.contains('success')
      cy.contains('Close').click()
    })
  })
})
