import React from 'react';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Checkout from './components/Checkout';
import Clasificados from './components/Clasificados';
import SignIn from './components/SignIn';
import APITest from './components/APITest';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route component={APITest}/>
      <Route component={Clasificados}/>
      <Route path="checkout" component={Checkout}/>
      <IndexRoute component={SignIn}/>
    </Route>
  </Router>
);
