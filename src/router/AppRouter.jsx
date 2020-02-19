import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Main from '../sections/HomePage';
import PokeDetail from '../sections/DetailPage/';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route 
      exact path='/' 
      component={Main} 
      />
      <Route 
      exact path='/pokemon/:name' 
      component={PokeDetail}
      />
      <Redirect 
      to='/' 
      />
    </Switch>
  </BrowserRouter>
)

export default Router
