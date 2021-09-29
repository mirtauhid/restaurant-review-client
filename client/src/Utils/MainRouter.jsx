import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Administrator from '../Views/Administrator';
import Forgot from '../Views/Forgot';
import Home from '../Views/Home';
import Owner from '../Views/Owner';
import Restaurant from '../Views/Restaurant';
import Restaurants from '../Views/Restaurants';
import SignIn from '../Views/SignIn';
import SignUp from '../Views/SignUp';
import PrivateRoute from './PrivateRoute';

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='/forgot'>
          <Forgot />
        </Route>
        <PrivateRoute path='/owner'>
          <Owner />
        </PrivateRoute>
        <PrivateRoute path='/admin'>
          <Administrator />
        </PrivateRoute>
        <PrivateRoute path='/restaurants'>
          <Restaurants />
        </PrivateRoute>
        <PrivateRoute path='/restaurant/:id'>
          <Restaurant />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default MainRouter;
