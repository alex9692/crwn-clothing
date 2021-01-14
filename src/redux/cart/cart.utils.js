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