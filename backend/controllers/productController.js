import { addingProduct } from "../helpers/productHelper.js";

const addproduct = async (req, res) => {
  try {
    const userId = req.user._id;
    console.log(userId);
    const { name, price } = req.body;
    console.log(req.body);
    const product = await addingProduct(userId, name, price);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export { addproduct };
