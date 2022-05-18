import React from "react";
import { Routes as Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Country from "./pages/Country/Country";

const Routes = () => (
  <Switch>
    {/* render all Switch here */}
    <Route exact path="/" component={Home} />
    <Route path="/country/:name" component={Country} />
  </Switch>
);

export default Routes;
