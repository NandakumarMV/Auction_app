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

export { addingProduct };
