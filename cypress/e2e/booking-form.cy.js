/// <reference types="cypress" />

describe('Booking Form', () => {
  beforeEach(() => {
    // Visit the bookings page before each test
    cy.visit('http://localhost:5173/bookings');
  });

  it('should submit the form with valid data', () => {
    // Select the date picker input and set a date
    cy.get('input[placeholder="Välj datum och tid"]').click();
    cy.get('.react-datepicker__day--010').click(); // Select the 10th day of the month

    // Select the cleaning type
    cy.get('input[name="cleaningType"][value="Diamant"]').check();

    // Select a cleaner from the dropdown
    cy.get('select[name="cleaner"]').select('Anna');

    // Submit the form
    cy.get('button[type="submit"]').click();

  });

  it('should show validation errors for empty fields', () => {
    // Submit the form without filling in any fields
    cy.get('button[type="submit"]').click();

    // Assert that validation errors are displayed
    cy.contains('Städare är obligatoriskt').should('be.visible');
  });

  it('should allow selecting a date and time', () => {
    // Select the date picker input and set a date
    cy.get('input[placeholder="Välj datum och tid"]').click();
    cy.get('.react-datepicker__day--015').click(); // Select the 15th day of the month

    // Assert that the date is selected
    cy.get('input[placeholder="Välj datum och tid"]').should('have.value', '2023-10-15');
  });

  it('should allow selecting a cleaning type', () => {
    // Select the cleaning type
    cy.get('input[name="cleaningType"][value="Silver"]').check();

    // Assert that the cleaning type is selected
    cy.get('input[name="cleaningType"][value="Silver"]').should('be.checked');
  });

  it('should allow selecting a cleaner', () => {
    // Select a cleaner from the dropdown
    cy.get('select[name="cleaner"]').select('Erik');

    // Assert that the cleaner is selected
    cy.get('select[name="cleaner"]').should('have.value', 'Erik');
  });

  it('should reset the form after submission', () => {
    // Fill in the form fields
    cy.get('input[placeholder="Välj datum och tid"]').click();
    cy.get('.react-datepicker__day--020').click(); // Select the 20th day of the month
    cy.get('input[name="cleaningType"][value="Flytt"]').check();
    cy.get('select[name="cleaner"]').select('Maria');

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Assert that the form fields are reset
    cy.get('input[placeholder="Välj datum och tid"]').should('have.value', '');
    cy.get('input[name="cleaningType"]').should('not.be.checked');
    cy.get('select[name="cleaner"]').should('have.value', '');
  });
});