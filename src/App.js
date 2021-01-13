import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import Homepage from "./pages/Homepage/Homepage.component";
import Shoppage from "./pages/Shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { SET_CURRENT_USER } from "./redux/user/user.actions";

class App extends React.Component {
  constructor() {
    super();

    this.state = { loading: true };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
          this.setState({ loading: false });
        });
      } else {
        setCurrentUser(user);
        this.setState({ loading: false });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return <h1>Loading.....</h1>;
    } else {
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(SET_CURRENT_USER(user)),
});

export default connect(null, mapDispatchToProps)(App);
