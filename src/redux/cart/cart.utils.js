const filterArray = (arr, el) => {
  return arr.filter((cur) => cur.id !== el.id);
};

export const addItemToCart = (cartItems, newItem) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === newItem.id);

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...newItem, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, item) => {
  return filterArray(cartItems, item);
};

export const subtractItemFromCart = (cartItems, item) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

  if (existingItem.quantity === 1) {
    return filterArray(cartItems, item);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
