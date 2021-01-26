import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

// import {
//   auth,
//   createUserProfileDocument,
//   addCollectionAndDocuments,
// } from "./firebase/firebase.utils";
// import { selectCollections } from "./redux/shop/shop.selectors";
import {
  selectCurrentUser,
  selectIsLoading,
} from "./redux/user/user.selectors";
import { CHECK_USER_SESSION_START } from "./redux/user/user.actions";

import WithSpinner from "./components/with-spinner/with-spinner.component";
import App2 from "./App2";

const AppWithSpinner = WithSpinner(App2);

class App extends React.Component {
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  render() {
    const { user, loading } = this.props;

    return <AppWithSpinner isLoading={loading} user={user} />;
  }
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  loading: selectIsLoading,
  // collections: selectCollections,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(CHECK_USER_SESSION_START()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// import React from "react";
// import { Route, Switch, Redirect } from "react-router-dom";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

// import "./App.css";

// import Homepage from "./pages/Homepage/Homepage.component";
// import Shoppage from "./pages/Shop/shop.component";
// import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
// import CheckoutPage from "./pages/Checkout/checkout.component";

// import Header from "./components/header/header.component";

// // import {
// //   auth,
// //   createUserProfileDocument,
// //   addCollectionAndDocuments,
// // } from "./firebase/firebase.utils";
// import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
// import { SET_CURRENT_USER } from "./redux/user/user.actions";
// import { selectCurrentUser } from "./redux/user/user.selectors";
// // import { selectCollections } from "./redux/shop/shop.selectors";

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = { loading: true };
//   }

//   unsubscribeFromAuth = null;

//   componentDidMount() {
//     // const { setCurrentUser, collections } = this.props;
//     // addCollectionAndDocuments(
//     //   "collections",
//     //   collections.map(({ title, items }) => ({ title, items }))
//     // );

//     const { setCurrentUser } = this.props;

//     this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
//       if (user) {
//         const userRef = await createUserProfileDocument(user);
//         userRef.onSnapshot((snapshot) => {
//           setCurrentUser({
//             id: snapshot.id,
//             ...snapshot.data(),
//           });
//           this.setState({ loading: false });
//         });
//       } else {
//         setCurrentUser(user);
//         this.setState({ loading: false });
//       }
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribeFromAuth();
//   }

//   render() {
//     const { loading } = this.state;
//     const { user } = this.props;
//     if (loading) {
//       return <h1>Loading.....</h1>;
//     } else {
//       return (
//         <div>
//           <Header />
//           <Switch>
//             <Route
//               path="/signin"
//               render={() =>
//                 user ? <Redirect to="/" /> : <SignInAndSignUpPage />
//               }
//             />
//             <Route path="/shop" component={Shoppage} />
//             <Route path="/checkout" component={CheckoutPage} />
//             <Route path="/" component={Homepage} />
//           </Switch>
//         </div>
//       );
//     }
//   }
// }

// const mapStateToProps = createStructuredSelector({
//   user: selectCurrentUser,
//   // collections: selectCollections,
// });

// const mapDispatchToProps = (dispatch) => ({
//   setCurrentUser: (user) => dispatch(SET_CURRENT_USER(user)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
