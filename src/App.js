import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
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
    const { user } = this.props;
    if (loading) {
      return <h1>Loading.....</h1>;
    } else {
      return (
        <div>
          <Header />
          <Switch>
            <Route
              path="/signin"
              render={() =>
                user ? <Redirect to="/" /> : <SignInAndSignUpPage />
              }
            />
            <Route path="/shop" component={Shoppage} />
            <Route path="/" component={Homepage} />
          </Switch>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(SET_CURRENT_USER(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
