import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/Homepage/Homepage.component";
import Shoppage from "./pages/Shop/shop.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/shop" component={Shoppage} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
