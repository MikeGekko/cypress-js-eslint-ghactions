# cypress-js-eslint-ghactions
cypress-js-eslint-ghactions

# HTML Reporter

https://mikegekko.github.io/cypress-js-eslint-ghactions/

# Setup
## Pre-install

1. Node JS

## Install the project

Install project dependencies using: npm i

# Run test

Use: npm run test
# Task 

Automation flow task

Language: JavaScript (Node.js)

Framework: Puppeteer, Playwright, Cypress

Create an automation test (1 or 2 separate tests) that covers the following scenarios.

Scenario 1:

Your test should check and provide the results of the following statements ⭐:

Are there 2 available seats in the section (next to each other)?
Are there 2 available separate seats in the section?
Which sections do not have 2 available seats?

Navigate to the site https://my.laphil.com/en/syos2/package/1183 (if the event is not available, you can choose any other from the available ones)
Add 2 Standart seats:

1. Select any section
2. Click the Continue button
3. Verify which of three statements ⭐met the page -> Collect the result
4. Make the verification for each active section -> Collect the results
5. Create a final report for the test:

    How many sections were active?

    What section met the requirement a.?

    What section met the requirement b.?

    What section met the requirement c.?

Scenario 2:

Add a ticket to the cart:

1. Navigate to the site  https://my.laphil.com/en/syos2/package/1183
2. Select 'Any Best Available Seat', then click 'Continue'
3. Select one seat and click 'Confirm Seats'
4. On the cart page: verify the quantity, price, and seat information is correct
5. Complete the test
