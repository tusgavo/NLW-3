import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import orfanatoMap from "./pages/orfanatoMap";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/map" component={orfanatoMap} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
