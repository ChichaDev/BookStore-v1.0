import { createSlice } from "@reduxjs/toolkit";

export const detailsSlice = createSlice({
  name: "details",
  initialState: {
    items: [],
  },
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    setClearDetais(state, action) {
      state.items = [];
    },
  },
});

export const { setItems, setClearDetais } = detailsSlice.actions;

export default detailsSlice.reducer;
