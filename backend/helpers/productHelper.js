import Products from "../models/productModel.js";

const addingProduct = async (userId, itemName, itemPrice) => {
  try {
    const product = new Products({
      userId,
      itemName,
      Price: itemPrice,
    });
    await product.save();
    return { success: true, message: "Product saved successfully" };
  } catch (error) {
    throw error;
  }
};

const userProducts = async (userId) => {
  try {
    const products = await Products.find({ userId }).sort({ createdAt: -1 });
    return products;
  } catch (error) {
    throw error;
  }
};
const allProduct = async (userId) => {
  try {
    const products = await Products.find({
      userId: { $ne: userId },
    }).populate({
      path: "userId",
      select: "_id name email",
    });
    return products;
  } catch (error) {
    throw error;
  }
};

const productPurchase = async (userId, itemId) => {
  try {
    const product = await Products.findById(itemId);

    if (!product) {
      throw new Error("Product not found");
    }

    product.isPurchased = true;

    product.purchasedUser = userId;

    await product.save();
    const products = await Products.find({
      userId: { $ne: userId },
    }).populate({
      path: "userId",
      select: "_id name email",
    });
    return products;
  } catch (error) {
    throw error;
  }
};

export { addingProduct, userProducts, allProduct, productPurchase };
