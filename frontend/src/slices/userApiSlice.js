import { apiSlice } from "./apiSlice";

const USERS_URL = "/api/users";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "post",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "post",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    submitItem: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/submit-item`,
        method: "POST",
        body: data,
      }),
    }),
    getUserItems: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/get-user-items`,
        method: "get",
      }),
    }),
    allAuctionsList: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/get-auction-list`,
        method: "get",
      }),
    }),
    addUserBid: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/add-bid`,
        method: "post",
        body: data,
      }),
    }),
    getUserItemBids: builder.mutation({
      query: (itemId) => ({
        url: `${USERS_URL}/get-item-bids/${itemId}`,
        method: "get",
      }),
    }),
    getUserBids: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/get-user-bids`,
        method: "get",
      }),
    }),
    getUserAuctions: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/get-user-auctions`,
        method: "get",
      }),
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/add-product`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const {
  useLoginMutation,
  useSubmitItemMutation,
  useRegisterMutation,
  useLogoutMutation,
  useGetUserItemsMutation,
  useAllAuctionsListMutation,
  useAddUserBidMutation,
  useGetUserItemBidsMutation,
  useGetUserBidsMutation,
  useGetUserAuctionsMutation,
  useAddProductMutation,
} = userApiSlice;
