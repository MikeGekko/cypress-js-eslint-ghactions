const elements = {
    total_price: () => cy.get('[class="itemPrice"]').first(),
    ticket_price: () => cy.get('tr td[class="price"]'),
    skip_donation: () => cy.get('[id="targetDonationSkip"]'),
};

const skipDonation = () => {
    elements.skip_donation().jsScrollIntoView().should('be.visible').click();
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
    skipDonation,
    collectTotalData,
};
