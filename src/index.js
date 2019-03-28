import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import App from './router';
import store from './store'
import * as serviceWorker from './serviceWorker';

const renderApp = Component => render(
    <Provider store={store}>
        <Component />
    </Provider>,
    document.getElementById('root'))

renderApp(App)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
