import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementAmt: (state) => {
      state.amount = state.amount + 1;
    },
    calculateTotal: (state) => {
      let total = 0;
      state.cartItems.forEach((item) => {
        total += item.price;
      });
      state.total = total;
    },
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
    },
    deleteItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.amount = state.amount - 1;
    },
  },
});

export const {
  incrementAmt,
  decrement,
  addToCart,
  calculateTotal,
  clearCart,
  deleteItem,
} = cartSlice.actions;
export default cartSlice.reducer;
