import React from 'react';
import { createBrowserHistory } from 'history';

import Login from './pages/Login';
import { Router, Switch, Route } from 'react-router';

function Routes() {
  return (
    <div>
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/login" component={Login} />
          <Route component={() => <h1>404</h1>} />
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
