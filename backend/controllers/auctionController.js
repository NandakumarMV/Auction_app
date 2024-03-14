import {
  addItemHelper,
  addingBid,
  allAuctions,
  getUserBids,
  getUserItems,
  getitemBids,
  usersAuction,
} from "../helpers/auctionHelper.js";

const addItem = async (req, res) => {
  try {
    const { itemName, itemPrice } = req.body;
    const userId = req.user._id;
    const result = await addItemHelper(itemName, itemPrice, userId);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const getUserAuctionItems = async (req, res) => {
  try {
    const userId = req.user._id;
    const items = await getUserItems(userId);
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const getAllAuctions = async (req, res) => {
  try {
    const userId = req.user._id;
    const auctionList = await allAuctions(userId);
    res.status(200).json(auctionList);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const addBid = async (req, res) => {
  try {
    const userId = req.user._id;
    const { itemId, bidAmt } = req.body;

    const result = await addingBid(userId, itemId, bidAmt);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const userItemBids = async (req, res) => {
  try {
    const { itemId } = req.params;
    const bids = await getitemBids(itemId);
    res.status(200).json(bids);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const bidsByUser = async (req, res) => {
  try {
    const userId = req.user._id;
    const bids = await getUserBids(userId);
    res.status(200).json(bids);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const getAuctionResults = async (req, res) => {
  try {
    const userId = req.user._id;
    const result = await usersAuction(userId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export {
  addItem,
  getUserAuctionItems,
  getAllAuctions,
  addBid,
  userItemBids,
  bidsByUser,
  getAuctionResults,
};
