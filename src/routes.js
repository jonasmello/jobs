import React from 'react';
import { createBrowserHistory } from 'history';

import Login from './pages/Login';
import { Router, Switch, Route, Redirect } from 'react-router';
import Auth from './data/auth';
import Home from './pages/Home';

const PrivateRoute = (props) => {
  const auth = new Auth();
  if (auth.isLogged()) {
    return <Route {...props} />;
  }
  return <Redirect to="/login" />;
};

function Routes() {
  return (
    <div>
      <Router history={createBrowserHistory()}>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route component={() => <h1>404</h1>} />
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
