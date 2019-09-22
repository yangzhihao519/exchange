Currency Exchange 
------------------------

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). 

## Live demo

> [https://yangzhihao519.github.io/exchange/index](https://yangzhihao519.github.io/exchange/index)

## Description

This app uses live exchange rates to exchange money within 2 currencies. It is built with React and Redux in TypeScript and tested using Jest together with Enzyme. 

## Assumption

- Initially the user will have £100 for exchanging money.

- The exchange rate is live and requested from [https://openexchangerates.org](https://openexchangerates.org).
It will be refreshed every 10 seconds. However, due to the limitation of free API (1000 calls per month), this functionality is temporarily disabled in the live demo but can be found in the code.

- Five currencies(GBP, EUR, USD, CHF, CNY) are supported in the solution currently.

- The UI is best viewed in browsers on mobile phone.

## Work to be improved

- Additional UI updates, including text color indication based on the input value, etc.

- Additional UI feedback, including loading icon when requesting rates, etc.

- More comprehensive tests for components and functionalities.

## Run the app in dev mode

Setting up the project: clone the repository and go to the project directory, and run

> `npm install`

> `npm run start`

Then, open 

> [http://localhost:3000](http://localhost:3000) 

to view it in the browser
