import React from "react";
import { connect } from "react-redux";

import {
  CheckoutItemContainer,
  ImageContainer,
  NameContainer,
  QuantityContainer,
  PriceContainer,
  ArrowContainer,
  ValueContainer,
  RemoveButtonContainer,
} from "./checkout-item.styles";

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
    <CheckoutItemContainer>
      <ImageContainer>
        <img alt={name} src={imageUrl} />
      </ImageContainer>
      <NameContainer>{name}</NameContainer>
      <QuantityContainer>
        <ArrowContainer onClick={() => subtractItemFromCart(item)}>
          &#10094;
        </ArrowContainer>
        <ValueContainer>{quantity}</ValueContainer>
        <ArrowContainer onClick={() => addItemToCart(item)}>
          &#10095;
        </ArrowContainer>
      </QuantityContainer>
      <PriceContainer>{price}</PriceContainer>
      <RemoveButtonContainer onClick={() => clearItemFromCart(item)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(CLEAR_ITEM_FROM_CART(item)),
  addItemToCart: (item) => dispatch(ADD_ITEM(item)),
  subtractItemFromCart: (item) => dispatch(SUBTRACT_ITEM_FROM_CART(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
