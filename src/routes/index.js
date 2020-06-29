import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/dashboard";
import Search from "../pages/search";

const Routes = () => (
  <Switch>
    <Route path="/" component={Dashboard} exact />
    <Route path="/search" component={Search} exact />
  </Switch>
);

export default Routes;
