import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBooks = createAsyncThunk(
  "book/fetchBooksStatus",
  async (params) => {
    const { sortBy, order, category, search } = params;
    const { data } = await axios.get(
      `https://63528535a9f3f34c373feb7f.mockapi.io/api/bookstore/books?${category}${search}&sortBy=${sortBy}&order=${order}`
    );
    return data;
  }
);

export const booksApiSlice = createSlice({
  name: "booksApi",
  initialState: {
    items: [],
    status: "loading",
  },
  reducers: {
    setBooks(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchBooks.rejected]: (state, action) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const { setBooks } = booksApiSlice.actions;

export default booksApiSlice.reducer;
