import * as cartActionTypes from "./cart.actionTypes";

export const TOGGLE_CART_DROPDOWN = () => ({
  type: cartActionTypes.TOGGLE_CART_DROPDOWN,
});

export const ADD_ITEM = (cartItem) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: cartItem,
});

export const CLEAR_ITEM_FROM_CART = (cartItem) => ({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: cartItem,
});

export const SUBTRACT_ITEM_FROM_CART = (cartItem) => ({
  type: cartActionTypes.SUBTRACT_ITEM_FROM_CART,
  payload: cartItem,
});
