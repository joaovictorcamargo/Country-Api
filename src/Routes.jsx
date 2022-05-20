import React from "react";
import { Routes as Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Country from "./pages/Country/Country";

const Routes = () => (
  <Switch>
    {/* render all routes here */}
    <Route exact path="/" element={<Home />} />
    <Route path="/country/:name" element={<Country />} />
  </Switch>
);

export default Routes;
