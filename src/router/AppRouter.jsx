import React from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'

import Main from '@sections/Main'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main} />
      <Redirect to='/' />
    </Switch>
  </BrowserRouter>
)

export default Router
