import express from "express";

const router = express.Router();
import { protect } from "../middlewares/protect.js";
import {
  authUser,
  logOutUser,
  registerUser,
} from "../controllers/userController.js";
import {
  addBid,
  addItem,
  bidsByUser,
  getAllAuctions,
  getAuctionResults,
  getUserAuctionItems,
  userItemBids,
} from "../controllers/auctionController.js";
import {
  addproduct,
  getAllProduct,
  getuserProducts,
  purchaseProduct,
} from "../controllers/productController.js";
//user Authentication Routes
router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logOutUser);

//handling Auction Routes
router.post("/submit-item", protect, addItem);
router.get("/get-user-items", protect, getUserAuctionItems);
router.get("/get-auction-list", protect, getAllAuctions);
router.post("/add-bid", protect, addBid);
router.get("/get-item-bids/:itemId", protect, userItemBids);
router.get("/get-user-bids", protect, bidsByUser);
router.get("/get-user-auctions", protect, getAuctionResults);

//handling Shoping routes
router.post("/add-product", protect, addproduct);
router.get("/get-user-product", protect, getuserProducts);
router.get("/get-all-product", protect, getAllProduct);
router.post("/purchase-product", protect, purchaseProduct);

export default router;
