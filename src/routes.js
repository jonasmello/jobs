import React from 'react';
import { createBrowserHistory } from 'history';

import Login from './pages/Login';
import { Router, Switch, Route, Redirect } from 'react-router';
import Auth from './data/auth';
import Home from './pages/Home';
import DragonDetail from './pages/DragonDetail';
import DragonAdd from './pages/DragonAdd';
import DragonEdit from './pages/DragonEdit';

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
          <PrivateRoute exact path="/dragon/add" component={DragonAdd} />
          <PrivateRoute exact path="/dragon/edit/:id" component={DragonEdit} />
          <PrivateRoute exact path="/dragon/:id" component={DragonDetail} />
          <Route component={() => <h1>404</h1>} />
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
