# Bitcoin Order Book project
This project is a demo of a Nodejs/Express/React app that displays a BTC_ETH order book ticker with combined data from Bittrex and Poloniex exchanges. It refreshes every 5 seconds.

## Framework
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is served online by an Express server.

## Let's get this party started!
1. Clone the repo to your local directory.
2. In your directory, run `yarn install`.
3. Once successfully completed, you can then run the following in the project's root directory: 

### Run the app in development mode.
1. Run `yarn start`.
2. Once the compile is done, you can go to [http://localhost:3000](http://localhost:3000) to view it in the browser.
3. The page will reload if you make edits. You will also see any lint errors in the console.

### Run unit tests
This project includes two test suites with:
* 3 API/logic tests in `api/exchanges.spec.js`
* and 3 UI Component tests in `components/Book.spec.js`
To test:
1. From root dir, run `yarn test`
2. Your CLI will display the test runner in the interactive watch mode.\

### `yarn build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
