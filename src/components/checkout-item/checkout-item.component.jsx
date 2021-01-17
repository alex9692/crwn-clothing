import React from "react";
import { connect } from "react-redux";

import "./checkout-item.styles.scss";
import {
  CLEAR_ITEM_FROM_CART,
  SUBTRACT_ITEM_FROM_CART,
  ADD_ITEM,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({
  item,
  clearItemFromCart,
  addItemToCart,
  subtractItemFromCart,
}) => {
  const { name, imageUrl, quantity, price } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt={name} src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => subtractItemFromCart(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(item)}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItemFromCart(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(CLEAR_ITEM_FROM_CART(item)),
  addItemToCart: (item) => dispatch(ADD_ITEM(item)),
  subtractItemFromCart: (item) => dispatch(SUBTRACT_ITEM_FROM_CART(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
