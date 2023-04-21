import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: true,
};

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
export const getItems = createAsyncThunk("items/getItems", async (delay) => {
  // await delay(3000);
  return new Promise((resolve) => setTimeout(resolve, delay)).then(async () => {
    const data = await fetch(`https://dummyjson.com/products`);
    return await data.json();
  });
});

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getItems.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.items = [];
      state.items.push(action.payload);
      state.isLoading = false;
    });
    builder.addCase(getItems.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default itemsSlice.reducer;
