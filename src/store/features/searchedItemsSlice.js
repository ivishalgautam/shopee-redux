import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchedItems: [],
  isLoading: true,
};

export const getSearchedItems = createAsyncThunk(
  "items/serachedItems",
  async (query) => {
    const resp = await fetch(
      `https://dummyjson.com/products/search?q=${query}`
    );
    return resp.json();
  }
);

export const searchedItemsSlice = createSlice({
  name: "searchedItems",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSearchedItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSearchedItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.searchedItems = [];
      state.searchedItems.push(action.payload);
      console.log(action.payload);
    });
    builder.addCase(getSearchedItems.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default searchedItemsSlice.reducer;
