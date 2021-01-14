import React from "react";
import { connect } from "react-redux";

import "./collection-item.styles.scss";

import { ADD_ITEM } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItemToCart(item)}>
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(ADD_ITEM(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
