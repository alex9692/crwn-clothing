import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

const selectPageRouteName = (state, props) => props.match.params.collectionId;

const selectCollectionsObject = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollections = createSelector([selectShop], (shop) =>
  Object.values(shop.collections)
);

export const selectCollection = createSelector(
  [selectCollectionsObject, selectPageRouteName],
  (collections, routeName) => collections[routeName]
);
