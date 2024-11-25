describe('Upcoming Bookings Component', () => {
    beforeEach(() => {
        cy.visit('/path-to-your-component'); // Update with the actual path to your component
    });

    it('should display the upcoming bookings title', () => {
        cy.get('h1').contains('Upcoming Bookings').should('be.visible');
    });

    it('should display a list of upcoming bookings', () => {
        cy.get('.booking-list').should('be.visible');
        cy.get('.booking-list').children().should('have.length.greaterThan', 0);
    });

    it('should display booking details correctly', () => {
        cy.get('.booking-list').children().first().within(() => {
            cy.get('.booking-date').should('be.visible');
            cy.get('.booking-time').should('be.visible');
            cy.get('.booking-client').should('be.visible');
        });
    });


});