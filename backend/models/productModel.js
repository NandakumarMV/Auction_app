import mongoose from "mongoose";

const productModel = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  itemName: {
    type: String,
  },
  Price: {
    type: Number,
  },
  isPurchased: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  purchasedUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
});

const Products = mongoose.model("Products", productModel);
export default Products;
