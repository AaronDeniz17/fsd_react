import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const findItem = (items, productId) =>
  items.find((item) => item.id === productId);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existing = findItem(state.items, product.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    decreaseQuantity(state, action) {
      const productId = action.payload;
      const existing = findItem(state.items, productId);

      if (!existing) {
        return;
      }

      if (existing.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== productId);
      } else {
        existing.quantity -= 1;
      }
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, decreaseQuantity, removeFromCart, clearCart } =
  cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);

export const selectCartSubtotal = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

export default cartSlice.reducer;
