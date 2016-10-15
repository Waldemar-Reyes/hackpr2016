import React from 'react';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Checkout from './components/Checkout';
import Clasificados from './components/Checkout';
import SignIn from './components/Checkout';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Clasificados}/>
      <Route path="checkout" component={Checkout}/>
      <Route path="signIn" component={SignIn}/>
    </Route>
  </Router>
);
