import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/Homepage/Homepage.component";
const HatsPage = () => (
  <div>
    <h1>HATSPAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route path="/shop/hats" component={HatsPage} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
