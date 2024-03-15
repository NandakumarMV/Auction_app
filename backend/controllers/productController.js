import {
  addingProduct,
  allProduct,
  productPurchase,
  userProducts,
} from "../helpers/productHelper.js";

const addproduct = async (req, res) => {
  try {
    const userId = req.user._id;
    const { name, price } = req.body;
    const product = await addingProduct(userId, name, price);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const getuserProducts = async (req, res) => {
  try {
    const userId = req.user._id;
    const products = await userProducts(userId);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const getAllProduct = async (req, res) => {
  try {
    const userId = req.user._id;
    const products = await allProduct(userId);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const purchaseProduct = async (req, res) => {
  try {
    const userId = req.user._id;
    const { itemId } = req.body;
    const products = await productPurchase(userId, itemId);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export { addproduct, getuserProducts, getAllProduct, purchaseProduct };
