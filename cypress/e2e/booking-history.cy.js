describe('BookingHistory Component', () => {
    beforeEach(() => {
        cy.visit('/booking-history');
    });

    it('should display the booking history title', () => {
        cy.get('h1').contains('Booking History').should('be.visible');
    });

    it('should display a list of bookings', () => {
        cy.get('.booking-list').should('be.visible');
        cy.get('.booking-item').should('have.length.greaterThan', 0);
    });

    it('should display booking details for each booking', () => {
        cy.get('.booking-item').each(($el) => {
            cy.wrap($el).within(() => {
                cy.get('.booking-date').should('be.visible');
                cy.get('.booking-time').should('be.visible');
                cy.get('.booking-location').should('be.visible');
            });
        });
    });

    it('should allow the user to filter bookings by date', () => {
        cy.get('.filter-date').type('2023-10-01');
        cy.get('.filter-button').click();
        cy.get('.booking-item').each(($el) => {
            cy.wrap($el).within(() => {
                cy.get('.booking-date').should('contain', '2023-10-01');
            });
        });
    });

    it('should display a message when no bookings are found', () => {
        cy.get('.filter-date').type('2099-01-01');
        cy.get('.filter-button').click(); 
        cy.get('.no-bookings-message').should('be.visible').and('contain', 'No bookings found');
    });
});