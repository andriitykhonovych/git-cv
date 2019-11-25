import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import modulesApp from './modules/modulesApp';

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const reducer = combineReducers({
    modulesApp
});

const configureStore = () => createStore(reducer, composeEnhancers(applyMiddleware()));


export default configureStore;
