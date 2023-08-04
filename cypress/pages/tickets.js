const elements = {
    header: () => cy.get('[class="syos-performance-details"]', {timeout: 20000}),
    tickets_value: () => cy.get('[class="ticket-quantity-selector"] input', {timeout: 20000}),
    blacony_tickets: () => cy.get('g[id="Balcony"]'),
    zones: () => cy.get('g[class="svg-pan-zoom_viewport"] g'),
    available_zones: () => cy.get('g[class="svg-pan-zoom_viewport"] g[class=" has-zones"]'),
    unavailable_zones: () => cy.get('g[class="svg-pan-zoom_viewport"] g[class="unavailable"]'),
    right_list_zone: (zone) => cy.get('[class="zone"]').contains(zone),
    decrease_amount_of_tickets: () => cy.get('[aria-label="Decrease amount of tickets"]'),
    increase_amount_of_tickets: () => cy.get('[aria-label="Increase amount of tickets"]'),
    total_price: () => cy.get('[class="syos-basket__total-value"]').first(),
    ticket_price: () => cy.get('[class="syos-price__value"]'),
    unavailable_alert_close: () => cy.get('[aria-label="Close"]'),
};

const navigatePage = (link = '/en/syos2/package/1183') => {
    cy.visit(link);
};

const sortZones = () => {
    const unavailableTwoSeats = [],
        available = [],
        unavailable = [];
    elements.unavailable_zones().then(($elements) => {
        Object.values($elements).forEach((element) => {
            unavailable.push(element.id);
        });
    });
    elements.available_zones().then(($elements) => {
        for (let i = 0; i < $elements.length; i++) {
            elements
                .available_zones()
                .should('be.visible')
                .then((zone) => {
                    cy.wrap(zone[i]).click({force: true});
                });
            cy.button('Continue');
            cy.wait(3000);
            cy.get('body').then(($body) => {
                if ($body.text().includes("We couldn't find 2 seats together. Please try again with a different quantity or in a different section.")) {
                    unavailableTwoSeats.push($elements[i].id);
                    elements.unavailable_alert_close().jsScrollIntoView().should('be.visible').click();
                } else {
                    cy.contains('PLEASE NOTE: This is a subscription package including 4 concerts.').should('be.visible');
                    available.push($elements[i].id);
                    cy.button('Change Section');
                    cy.button('Confirm');
                }
            });
        }
    });
    return {unavailableTwoSeats, available, unavailable};
};

const selectRightListZone = (zone) => {
    elements.right_list_zone(zone).jsScrollIntoView().should('be.visible').click();
};

const changeTicketsValue = (action) => {
    if (action === 'increase') elements.increase_amount_of_tickets().jsScrollIntoView().should('be.visible').click();
    if (action === 'decrease') elements.decrease_amount_of_tickets().jsScrollIntoView().should('be.visible').click();
};

const collectTotalData = () => {
    const data = [];
    elements
        .total_price()
        .invoke('text')
        .then((val) => {
            data.push(val);
        });
    elements
        .ticket_price()
        .invoke('text')
        .then((val) => {
            data.push(val);
        });
    return data;
};

export default {
    elements,
    navigatePage,
    sortZones,
    selectRightListZone,
    changeTicketsValue,
    collectTotalData,
};
