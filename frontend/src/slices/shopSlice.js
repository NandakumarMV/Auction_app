import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userProducts: [],
  allProducts: [],
};

const shopSlice = createSlice({
  name: "shopSlice",
  initialState,
  reducers: {
    setUserProducts: (state, action) => {
      state.userProducts = action.payload;
    },
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const { setUserProducts, setAllProducts } = shopSlice.actions;

export default shopSlice.reducer;
