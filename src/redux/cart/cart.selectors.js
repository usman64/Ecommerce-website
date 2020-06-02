import { createSelector } from 'reselect';

//input selector
const selectCart = (state) => state.cart;

// const selectUser = (state) => state.user;

export const selectCartItems = createSelector(
  [selectCart], //Array of selectors
  (cart) => cart.cartItems //output of selectors in order of selectors passed
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulator, cartItem) => accumulator + cartItem.quantity,
      0
    )
);
