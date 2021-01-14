import * as cartActionTypes from "./cart.actionTypes";

export const TOGGLE_CART_DROPDOWN = () => ({
  type: cartActionTypes.TOGGLE_CART_DROPDOWN,
});

export const ADD_ITEM = (cartItem) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: cartItem,
});
