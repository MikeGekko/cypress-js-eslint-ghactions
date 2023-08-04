import ticketsPage from '../../pages/tickets';
import cartPage from '../../pages/cart';

describe('Buy tickets', () => {
    describe('Validate tickets availability', () => {
        let result = {}
        it('When I navigate to tickets page', () => {
            ticketsPage.navigatePage();
            ticketsPage.elements.header().should('be.visible');
            ticketsPage.elements.zones().should('be.visible');
        });

        it('Then I validate 2 tickets selected', () => {
            ticketsPage.elements.tickets_value().should('have.value', 2);
        });

        it('When I sort zones', () => {
            result = ticketsPage.sortZones();
        });

        it('Then I display unavailable two seats zones', () => {
            cy.addContext('unavailableTwoSeats:').then(() => result.unavailableTwoSeats.forEach((item) => cy.addContext(item)));
        });

        it('Then I display available zones', () => {
            cy.addContext('available:').then(() => result.available.forEach((item) => cy.addContext(item)));
        });

        it('Then I display unavailable zones', () => {
          cy.addContext('unavailable:').then(() => result.unavailable.forEach((item) => cy.addContext(item)));
      });
    });

    describe('Buy any best available seat', () => {
        let ticketsExpectedData, ticketsActualtData;

        it('When I navigate to tickets page', () => {
            ticketsPage.navigatePage();
            ticketsPage.elements.header().should('be.visible');
            ticketsPage.elements.zones().should('be.visible');
        });

        it('Then I validate 2 tickets selected', () => {
            ticketsPage.elements.tickets_value().should('have.value', 2);
            ticketsPage.changeTicketsValue('decrease');
            ticketsPage.elements.tickets_value().should('have.value', 1);
        });

        it('When I select balcony tickets and click continue button', () => {
            ticketsPage.selectRightListZone('Any Best Available Seat');
            cy.button('Continue');
            ticketsExpectedData = ticketsPage.collectTotalData();
        });

        it('Then I confirm seats', () => {
            cy.button('Confirm seats');
            cy.url().should('contain', '/basket');
        });

        it('Then I skip donation and validate ticket data', () => {
            cartPage.skipDonation();
            ticketsActualtData = cartPage.collectTotalData();
            ticketsActualtData.forEach((item, index) => {
                assert.equal(item, ticketsExpectedData[index]);
            });
        });
    });
});
