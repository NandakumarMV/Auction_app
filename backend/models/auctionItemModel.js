import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  itemName: {
    type: String,
  },
  minBidAmt: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  expired: {
    type: Boolean,
    default: false,
  },
  expiresAt: {
    type: Date,
    default: function () {
      return new Date(this.createdAt.getTime() + 60 * 60 * 1000);
    },
  },
});

itemSchema.pre("save", function (next) {
  if (this.isNew) {
    setTimeout(() => {
      this.expired = true;
      next();
    }, 60 * 60 * 1000);
  } else {
    next();
  }
});

const AuctionItem = mongoose.model("AuctionItem", itemSchema);
export default AuctionItem;
