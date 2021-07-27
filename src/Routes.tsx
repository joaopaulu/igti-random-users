import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageHeader from './core/components/PageHeader';
import Clients from './pages/Clients';
import Home from './pages/Home';

const Routes = () => (
  <BrowserRouter>
    <PageHeader />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/clients" exact>
        <Clients />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
