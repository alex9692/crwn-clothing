import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/Homepage/Homepage.component";
import Shoppage from "./pages/Shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/signin" component={SignInAndSignUpPage} />
        <Route exact path="/shop" component={Shoppage} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
