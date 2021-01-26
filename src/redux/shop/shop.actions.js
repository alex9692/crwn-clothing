import * as shopActionTypes from "./shop.actionTypes";

export const FETCH_COLLECTIONS_START = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const FETCH_COLLECTIONS_SUCCESS = (collecions) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collecions,
});

export const FETCH_COLLECTIONS_FAILURE = (errorMessage) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

