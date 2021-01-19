import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './config/redux/store';
import App from './App';

const render = () => {
    ReactDOM.render(
        /*
        <React.StrictMode> double-invokes various things like function component bodies and certain hooks.
        https://stackoverflow.com/questions/65777967/react-functional-component-execute-multiple-times-with-useselector-is-execute
        https://stackoverflow.com/questions/65779454/reactjs-swallow-some-log-messages
        */
        <React.Fragment>
            <Provider store={store}>
                <App />
            </Provider>
        </React.Fragment>,
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
// reportWebVitals(console.log);
