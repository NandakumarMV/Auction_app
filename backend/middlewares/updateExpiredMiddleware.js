import AuctionItem from "../models/auctionItemModel.js";

const updateExpiredFlagMiddleware = async (req, res, next) => {
  try {
    const expiredItems = await AuctionItem.find({
      expiresAt: { $lt: new Date() },
      expired: false,
    });
    for (const item of expiredItems) {
      item.expired = true;
      await item.save();
    }

    next();
  } catch (error) {
    console.error("Error updating expired flag:", error);

    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default updateExpiredFlagMiddleware;
