import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './redux/configureStore';
import actionTypes from './actions/actionTypes';

import Container from './containers/container';

require('./style/index.scss');

const store = configureStore();

function renderApp() {
    render(
        <Provider store={store}>
            <Container />
        </Provider>,
        document.querySelector('#root'),
    );
}

renderApp();

if (module.hot) {
    module.hot.accept('./app.jsx', renderApp);
}

store.dispatch({ type: actionTypes.APP.INIT });