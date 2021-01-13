import React from "react";
import { connect } from "react-redux";

import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { TOGGLE_CART_DROPDOWN } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartDropdown }) => (
  <div className="cart-icon" onClick={() => toggleCartDropdown()}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const maptDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(TOGGLE_CART_DROPDOWN()),
});

export default connect(null, maptDispatchToProps)(CartIcon);
