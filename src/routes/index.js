import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/dashboard";
import Search from "../pages/search";
import PokemonDetail from "../pages/pokemon-detail";
import FourZeroFour from "../pages/fourzerofour";

const Routes = () => (
  <Switch>
    <Route path="/" component={Dashboard} exact />
    <Route path="/search" component={Search} exact />
    <Route path="/pokemon/:id" component={PokemonDetail} exact />
    <Route component={FourZeroFour} />
  </Switch>
);

export default Routes;
