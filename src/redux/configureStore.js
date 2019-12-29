import { createStore, applyMiddleware, combineReducers, compose } from "redux";

import modulesApp from "./modules/modulesApp";

/* eslint-disable no-underscore-dangle, no-undef */
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
/* eslint-disable */

const reducer = combineReducers({
  modulesApp
});

const configureStore = () =>
  createStore(reducer, composeEnhancers(applyMiddleware()));

export default configureStore;
