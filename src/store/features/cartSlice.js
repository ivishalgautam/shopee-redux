import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isPending: true,
};

export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
  const res = await fetch("https://dummyjson.com/carts");
  return res.json();
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementAmt: (state, action) => {
      const cartItem = state.cartItems[0].find(
        (item) => item.id === action.payload.id
      );
      cartItem.quantity = cartItem.quantity + 1;
      cartItem.total = cartItem.price * cartItem.quantity;
      state.amount = state.amount + 1;
    },
    decrementAmt: (state, action) => {
      const cartItem = state.cartItems[0].find(
        (item) => item.id === action.payload.id
      );
      if (cartItem.quantity < 1) {
        deleteItem(action);
        return;
      }
      cartItem.quantity = cartItem.quantity - 1;
      cartItem.total = cartItem.price * cartItem.quantity;
      state.amount = state.amount - 1;
    },
    calculateTotal: (state) => {
      let total = 0;
      state.cartItems[0]?.forEach((item) => {
        total += item.price * item.quantity;
      });
      state.total = total;
    },
    addToCart: (state, action) => {
      state.cartItems[0].push(action.payload);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
    },
    deleteItem: (state, action) => {
      state.cartItems[0] = state.cartItems[0].filter(
        (item) => item.id !== action.payload.id
      );
      state.amount = state.amount - action.payload.quantity;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartItems.pending, (state) => {
      state.isPending = true;
    });
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      state.cartItems.push(action.payload.carts[0].products);
      state.total = action.payload.carts[0].total;
      state.amount = action.payload.carts[0].totalQuantity;
      state.isPending = false;
      // console.log(action.payload.carts[0].products);
    });
    builder.addCase(getCartItems.rejected, (state) => {
      state.isPending = false;
    });
  },
});

export const {
  incrementAmt,
  decrementAmt,
  addToCart,
  calculateTotal,
  clearCart,
  deleteItem,
} = cartSlice.actions;
export default cartSlice.reducer;
