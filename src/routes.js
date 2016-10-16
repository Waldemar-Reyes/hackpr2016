import React from 'react';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Checkout from './components/Checkout';
import Clasificados from './components/Clasificados';
import SignIn from './components/SignIn';
import APITest from './components/APITest';
import APITest2 from './components/APITest2';
import APITest3 from './components/APITest3';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={APITest}/>
      <Route path="APITest2" component={APITest2}/>
      <Route path="APITest3" component={APITest3}/>
      <Route component={Clasificados}/>
      <Route path="checkout" component={Checkout}/>
      <IndexRoute component={SignIn}/>
    </Route>
  </Router>
);
