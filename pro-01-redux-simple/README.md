# Modules

This project includes the following:

- Material UI and theme overrides as per Evergreen specifications
- Redux integration (Work In progress)
- React Router (Work In progress)
- i18n messages (React Intl)
- Unit test setup (Jest and React Testing Library)
- ESLint and Prettier (AirBnB eslint config)

Feel free to change the folder structure and add or remove components or packages as you need them. This project is bootstrapped from [Create React App](https://facebook.github.io/create-react-app/docs/).

# Getting Started

## Pre-requisites

This project requires [Node and npm](https://nodejs.org/en/) (Node Package Manager).

## Start

Run following to install all required dependencies:

```
npm install
```

Then run following to start development server:

```
npm start
```

## Code Editor

If you are using [VS Code](https://code.visualstudio.com/), install the following extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Browser

If you are using [Chrome](https://www.google.com/chrome), install the following extensions:

- [React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
- [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

## Configuration

Edit `.env.development.local` environment variables (if required).

### i18n Messages

Out of the box, for demonstration purposes, the language and locales supported are `en-US` and `fr-FR`. To change this, open the `tools\createTranslationFiles.js` file and edit the `SUPPORTED_LANGUAGES` constant to edit or add more [language-locales](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/language).

To add i18n messages, create json files near your components anywhere in the `src` directory with the name of the language-locale (`en-US.json` for example) you used in `SUPPORTED_LANGUAGES`, and add the appropriate key value pairs. Run `npm start`, which will regenerate the messages file that automatically aggregates all translations into one file to be served statically or via the mock server and then start the app. Alternatively, you can run `npm start build:translations` to only build the JSON files and messages.js file.

By default, the React Intl (i18n) provider will use a messages resource provided via the mock API endpoint (`http://localhost:3001/i18n`). To change this so React Intl uses a static resource, open the `.env` file and change `REACT_APP_LOAD_I18N_TRANSLATIONS_FROM_API` to `false`.

If you wish to add or change the mappings of the language-locale resources used for the actual language-locale detected, edit `src\app\i18n\messagesConfig.json`.

### Mock server

Work In Progress

## Available Scripts

In the project directory, you can run:

### `npm start`

Finds the i18n translation JSON files in the `src` directory and collates them into a single JSON file by language-locale (ex: en-US), runs the app in the development mode and launches the mock API server
Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.
Open [http://localhost:3001](http://localhost:3001) to view the mock API server. Port can be configured in `.env.development` file.

The page will reload if you make edits.
You will also see any lint errors in the console.

To start the app in intellij, create a new NPM configuration with a `start` command. You can allow parallel run, so that it can coexist with the API module.

### `npm test:watch`

Launches the test runner in the interactive watch mode.

To start watch mode on a specific file, run `npm run test:watch myTestFile.test.js`.

To update snapshot, press `u` when snapshots fail in watch mode, or if you wish to update snapshots automatically in watch mode,
run `npm run test:watch -- --updateSnapshot`.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test`

Runs all test suites and outputs the total test coverage. Open `coverage/lcov-report/index.html` in the browser. To update snapshots
automatically, run `npm run test -- --updateSnapshot`.

### `npm run analyze`

Generates an interactive graph specifying your bundle sizes.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Folder Structure

### /src

All components, pages, utility functions and tests are located here.

#### /app

The main interface (header, navigation rail), theme, route configuration file `routes.js`, Redux root reducer and store and theme files are located here. Only files related to the main UI not specific to a feature or domain should be placed here.

#### /common

Components, hooks and utility functions that can be shared amongst components and features (like data tables, API fetch helpers, buttons, loaders, etc.) should be place here in the appropriate folder.

---

### /tools

Files related to the bundle analyzer and creation of translation files are located here.

# References
- Multiple Pages: https://stackoverflow.com/questions/41956465/how-to-create-multiple-page-app-using-react

# Troubleshooting
- https://stackoverflow.com/questions/42308879/how-to-solve-npm-error-npm-err-code-elifecycle
	`npm cache clean --force` (or `npm cache verify`
	delete `node_modules` folder
	delete `package-lock.json` file
	`npm install`
