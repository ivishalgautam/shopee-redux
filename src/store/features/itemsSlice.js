import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  productDetail: [],
  isPending: true,
};

export const getItems = createAsyncThunk("items/getItems", async () => {
  const data = await fetch("https://dummyjson.com/products");
  return await data.json();
});

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getItems.pending, (state) => {
      state.isPending = true;
    }),
      builder.addCase(getItems.fulfilled, (state, action) => {
        console.log(action.payload);
        state.items.push(action.payload);
        state.isPending = false;
      }),
      builder.addCase(getItems.rejected, (state) => {
        state.isPending = false;
      });
  },
});

export default itemsSlice.reducer;
