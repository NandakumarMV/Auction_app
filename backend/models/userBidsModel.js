import mongoose from "mongoose";

const userBids = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AuctionItem",
  },
  bidPrice: {
    type: Number,
  },
});

const UserBids = mongoose.model("UserBids", userBids);
export default UserBids;
