import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userItems: [],
  auctionList: [],
  bidList: [],
  userBidList: [],
  userAuctions: [],
};

const auctionItemsSlice = createSlice({
  name: "auctionItems",
  initialState,
  reducers: {
    setUserItems: (state, action) => {
      state.userItems = action.payload;
    },
    setAuctionList: (state, action) => {
      state.auctionList = action.payload;
    },
    setBidList: (state, action) => {
      state.bidList = action.payload;
    },
    setUserBidList: (state, action) => {
      state.userBidList = action.payload;
    },
    setUserAuctions: (state, action) => {
      state.userAuctions = action.payload;
    },
  },
});

export const {
  setUserItems,
  setAuctionList,
  setBidList,
  setUserBidList,
  setUserAuctions,
} = auctionItemsSlice.actions;
export default auctionItemsSlice.reducer;
