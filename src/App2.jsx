import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage.component";
import Shoppage from "./pages/Shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/Checkout/checkout.component";

import Header from "./components/header/header.component";

const App2 = ({ user }) => (
  <div>
    <Header />
    <Switch>
      <Route
        path="/signin"
        render={() => (user ? <Redirect to="/" /> : <SignInAndSignUpPage />)}
      />
      <Route path="/shop" component={Shoppage} />
      <Route path="/checkout" component={CheckoutPage} />
      <Route path="/" component={Homepage} />
    </Switch>
  </div>
);

export default App2;
