import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import promise from 'redux-promise';

import reducers from './index-reducer'
import './index-style.scss';
import Routes from './index-routes';
import * as serviceWorker from './serviceWorker';

import Header from './header/header-component';

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

const store = compose(
  applyMiddleware(promise, thunk),
)(createStore)(reducers, devTools);

ReactDOM.render(
  <Provider store={store}>
    <Header />
    <Routes />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
