import SHOP_DATA from "../../dummy-data/shop.data";
import * as shopActionTypes from "./shop.actionTypes";

const INITIAL_STATE = {
  collections: {},
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.SET_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
