import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../Collection/collection.container";

import { FETCH_COLLECTIONS_START } from "../../redux/shop/shop.actions";

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Switch>
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPageContainer}
          />
          <Route path={match.path} component={CollectionOverviewContainer} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: (collections) =>
    dispatch(FETCH_COLLECTIONS_START(collections)),
});

export default connect(null, mapDispatchToProps)(Shop);
