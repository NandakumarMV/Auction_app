import mongoose from "mongoose";

const userBids = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AuctionItem",
  },
  bidPrice: {
    type: Number,
  },
  submitTime: {
    type: Date,
    default: Date.now,
  },
});

const UserBids = mongoose.model("UserBids", userBids);
export default UserBids;
