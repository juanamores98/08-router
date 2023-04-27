import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from '../pages/LoginScreen';
import AppRouter from './AppRouter';
import { AuthContext } from '../context/AuthContext';
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';

const LoginRouter = () => {
  const { log } = useContext(AuthContext);
  return (
    <Router>
      {/* <AppRouter /> */}
      {/* <Route exact path='/login' component={LoginScreen} /> */}
      <Switch>
        <PublicRouter path='/login' auth={log} component={LoginScreen} />
        <PrivateRouter path='/' auth={log} component={AppRouter} />+
      </Switch>
    </Router>
  );
};

export default LoginRouter;
