import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Administrator from '../Views/Administrator';
import Forgot from '../Views/Forgot';
import Home from '../Views/Home';
import Owner from '../Views/Owner';
import Restaurant from '../Views/Restaurant';
import Restaurants from '../Views/Restaurants';
import SignIn from '../Views/SignIn';
import SignUp from '../Views/SignUp';
import User from '../Views/User';

const MainRouter = () => {
  return (
    <Router>
      <Link to='/'>Home</Link>
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
        <Route path='/user'>
          <User />
        </Route>
        <Route path='/owner'>
          <Owner />
        </Route>
        <Route path='/admin'>
          <Administrator />
        </Route>
        <Route path='/restaurants'>
          <Restaurants />
        </Route>
        <Route path='/restaurant/:id'>
          <Restaurant />
        </Route>
      </Switch>
    </Router>
  );
};

export default MainRouter;
