import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import sort from "./slices/sortSlice";
import cart from "./slices/cartSlice";
import search from "./slices/serachSlice";
import booksApi from "./slices/booksApiSlice";
import details from "./slices/detailsPageSlice";

export default configureStore({
  reducer: {
    filter,
    sort,
    cart,
    search,
    booksApi,
    details,
  },
});
