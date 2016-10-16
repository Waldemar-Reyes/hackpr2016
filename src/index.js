// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import routes from './routes';
import thunk from 'redux-thunk';
import reducers from './reducers';
import '../style/styles.scss';
const chromeDevTools = window.devToolsExtension ? window.devToolsExtension() :
  f => f;

// Add custom middlewares to this array.
const middlewares = [thunk];
const store = createStore(
  reducers,
  {},
  compose(applyMiddleware(...middlewares), chromeDevTools)
);

ReactDOM.render(
  <Provider store={store}>
    { routes }
  </Provider>
  , document.querySelector('.container')
);
