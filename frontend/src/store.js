import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import authReducer from "./slices/authSlice";
import auctionSlice from "./slices/auctionSlice";
import shopSlice from "./slices/shopSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    auctionItems: auctionSlice,
    shop: shopSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
