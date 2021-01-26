import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

const selectPageRouteName = (state, props) => props.match.params.collectionId;

const selectCollectionsObject = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const collectionsIsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const collectionsIsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);

export const selectCollections = createSelector(
  [selectCollectionsObject],
  (collections) => (collections ? Object.values(collections) : [])
);

export const selectCollection = createSelector(
  [selectCollectionsObject, selectPageRouteName],
  (collections, routeName) => (collections ? collections[routeName] : null)
);
