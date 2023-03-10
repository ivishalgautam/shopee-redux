import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  productDetail: [],
  isLoading: true,
};
export const getDetails = createAsyncThunk("item/getDetails", async (id) => {
  const data = await fetch(`https://dummyjson.com/product/${id}`);
  return await data.json();
});

export const productDetailSlice = createSlice({
  name: "getProductDetail",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.productDetail = [];
      state.productDetail.push(action.payload);
      state.isLoading = false;
      // console.log(action.payload);
    });
    builder.addCase(getDetails.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default productDetailSlice.reducer;
