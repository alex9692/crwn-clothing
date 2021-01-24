import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../Collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { SET_COLLECTIONS } from "../../redux/shop/shop.actions";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
    };
  }

  unsubscribeFromCollection = null;

  componentDidMount() {
    const { setCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then((snapshot) => {
      const mappedCollections = convertCollectionsSnapshotToMap(snapshot);
      setCollections(mappedCollections);
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className="shop-page">
        <Switch>
          <Route
            path={`${match.path}/:collectionId`}
            render={(props) => (
              <CollectionPageWithSpinner isLoading={isLoading} {...props} />
            )}
          />
          <Route
            path={match.path}
            render={(props) => (
              <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCollections: (collections) => dispatch(SET_COLLECTIONS(collections)),
});

export default connect(null, mapDispatchToProps)(Shop);
