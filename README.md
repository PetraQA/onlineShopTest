# onlineShopTest

## Description
This repository contains tests which automate user login scenarios on the SauceDemo page created by SauceLabs. Tests can be run using Cypress.

## Test Scenarios
POSITIVE SCENARIOS (LoginPass.spec.js) - Successful login, validating that the user is on the online shop inventory page, and logging out with
- standard user
- performance_glitch_user
- problem_user

NEGATIVE SCENARIOS (LoginFail.spec.js) - Unsuccessful login attempts, checking if the right validation appears for each scenario
- Attempting to log in with locked out user
- Attempting to log in with incorrect username
- Attempting to log in with incorrect password
- Attempting to log in with empty fields
- Attempting to log in with no username
- Attempting to log in with no password

Standard User complete shopping cart flow (StandardCartFlow.spec.js) 
  
## Status
🚧 Currently under development. Some tests may not be complete yet and the code may be subject to change due to:
- Increasing test coverage
- Improvement of code structure

