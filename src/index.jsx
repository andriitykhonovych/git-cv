import React from 'react';
import { render } from 'react-dom';
import App from './app';

function renderApp() {
    render(
        <App />,
        document.getElementById('root'),
    );
}

renderApp();

if (module.hot) {
    module.hot.accept('./app.jsx', renderApp);
}