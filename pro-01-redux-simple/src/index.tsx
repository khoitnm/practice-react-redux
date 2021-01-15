import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './config/redux/store';

const render = () => {
    // Sourcecode: https://redux-toolkit.js.org/tutorials/advanced-tutorial (click "Open Sandbox" section)
    // Explanation: https://stackoverflow.com/questions/43247696/javascript-require-vs-require-default
    // "The HMR interface code cannot use import as it doesn't work inline."
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const App = require('./App').default;

    ReactDOM.render(
        <React.StrictMode>
            <CssBaseline>
                <Provider store={store}>
                    <App />
                </Provider>
            </CssBaseline>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

render();

// @see comment in `store.ts` for more explanation about `module.hot`.
if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./App', render);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
