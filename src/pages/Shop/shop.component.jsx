import React from "react";
import { Route, Switch } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../Collection/collection.component";

const Shop = ({ match }) => (
  <div className="shop-page">
    <Switch>
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      <Route path={match.path} component={CollectionOverview} />
    </Switch>
  </div>
);

export default Shop;
