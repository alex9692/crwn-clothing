import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/Homepage/Homepage.component";
import Shoppage from "./pages/Shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = { user: null, loading: true };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ user, loading: false });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { user, loading } = this.state;
    if (loading) {
      return <h1>Loading.....</h1>;
    } else {
      return (
        <div>
          <Header user={user} />
          <Switch>
            <Route path="/signin" component={SignInAndSignUpPage} />
            <Route exact path="/shop" component={Shoppage} />
            <Route path="/" component={Homepage} />
          </Switch>
        </div>
      );
    }
  }
}

export default App;
