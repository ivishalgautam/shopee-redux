import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: true,
};

export const getItems = createAsyncThunk("items/getItems", async (query) => {
  // console.log(query);
  const data = await fetch(
    `https://dummyjson.com/products/search?q=${query ? query : ""}`
  );
  return data.json();
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
