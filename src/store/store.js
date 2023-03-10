import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import itemsSlice from "./features/itemsSlice";
import modalSlice from "./features/modalSlice";
import productDetailSlice from "./features/productDetailSlice";
import searchedItemsSlice from "./features/searchedItemsSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    items: itemsSlice,
    modal: modalSlice,
    details: productDetailSlice,
    searchedItems: searchedItemsSlice,
  },
});
