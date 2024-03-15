import AuctionItem from "../models/auctionItemModel.js";
import UserBids from "../models/userBidsModel.js";

const addItemHelper = async (itemName, minPrice, userId) => {
  try {
    const item = new AuctionItem({
      userId: userId,
      itemName: itemName,
      minBidAmt: minPrice,
    });

    await item.save();

    return { success: true, message: "Item saved successfully" };
  } catch (error) {
    console.error("Error occurred while saving item:", error.message);
    throw error;
  }
};

const getUserItems = async (userId) => {
  try {
    const items = await AuctionItem.find({ userId, expired: false }).sort({
      createdAt: -1,
    });

    return items;
  } catch (error) {
    console.error("Error occurred while fetching user items:", error.message);
    throw error;
  }
};
const allAuctions = async (userId) => {
  try {
    const auctions = await AuctionItem.find({
      userId: { $ne: userId },
      expired: false,
    }).populate({
      path: "userId",
      select: "_id name email",
    });
    return auctions;
  } catch (error) {
    console.error("Error retrieving auctions:", error);
    throw error;
  }
};
const addingBid = async (userId, itemId, bidPrice) => {
  try {
    const existingBid = await UserBids.findOne({ userId, item: itemId });
    if (existingBid) {
      return {
        success: false,
        message: "User has already submitted a bid for this auction",
      };
    }

    const userBid = new UserBids({
      userId,
      item: itemId,
      bidPrice,
    });
    await userBid.save();
    return { success: true, message: "Price saved successfully" };
  } catch (error) {
    console.error("Error occurred while saving item:", error.message);
    throw error;
  }
};
const getitemBids = async (itemId) => {
  try {
    const bids = await UserBids.find({ item: itemId }).populate({
      path: "userId",
      select: "_id name email",
    });
    return bids;
  } catch (error) {
    console.error("Error occurred while saving item:", error.message);
    throw error;
  }
};
const getUserBids = async (userId) => {
  try {
    const highestBids = await UserBids.aggregate([
      { $match: { userId } },
      {
        $group: {
          _id: "$item",
          highestBid: { $max: "$bidPrice" },
          bids: {
            $push: {
              bidPrice: "$bidPrice",
              submitTime: "$submitTime",
            },
          },
        },
      },
      {
        $lookup: {
          from: "auctionitems",
          localField: "_id",
          foreignField: "_id",
          as: "itemDetails",
        },
      },
      {
        $match: {
          "itemDetails.expiresAt": { $lte: new Date() },
        },
      },
      {
        $project: {
          _id: 0,
          item: "$_id",
          itemName: { $arrayElemAt: ["$itemDetails.itemName", 0] },
          highestBid: 1,
          bids: 1,
        },
      },
    ]);

    return highestBids;
  } catch (error) {
    throw error;
  }
};

const usersAuction = async (userId) => {
  try {
    const expiredItems = await AuctionItem.find({ userId, expired: true });

    const result = [];

    for (const item of expiredItems) {
      const highestBid = await UserBids.findOne({ item: item._id })
        .sort({ bidPrice: -1 })
        .populate({
          path: "userId",
          select: "name email",
        });

      if (highestBid) {
        result.push({
          itemName: item.itemName,
          highestBid: highestBid.bidPrice,
          highestBidder: highestBid.userId.name,
          bidderEmail: highestBid.userId.email,
        });
      }
    }

    return result;
  } catch (error) {
    throw error;
  }
};
export {
  addItemHelper,
  getUserItems,
  allAuctions,
  addingBid,
  getitemBids,
  getUserBids,
  usersAuction,
};
