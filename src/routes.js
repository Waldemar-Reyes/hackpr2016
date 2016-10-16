import React from 'react';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Checkout from './components/Checkout';
import Clasificados from './components/Clasificados';
import SignIn from './components/SignIn';
import Confirmation from './components/Confirmation';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Clasificados}/>
      <Route path="clasificados" component={Clasificados}/>
      <Route path="signin" component={SignIn}/>
      <Route path="checkout" component={Checkout}/>
      <Route path="confirmation" component={Confirmation}/>
    </Route>
  </Router>
);
