import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
    count: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      state.items.push(action.payload);
      state.totalPrice = state.items.reduce(
        (sum, obj) => obj.book.price + sum,
        0
      );
    },
    removeItemFromCart(state, action) {
      state.items = state.items.filter((obj) => obj.book.id !== action.payload);
      state.totalPrice = state.items.reduce(
        (sum, obj) => obj.book.price + sum,
        0
      );
    },
    clearItemFromCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearItemFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
