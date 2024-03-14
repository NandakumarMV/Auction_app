import React, { useState } from "react";
import { useAddProductMutation } from "../slices/userApiSlice";

const AddProductModel = ({ isOpen, onClose }) => {
  const [name, setItemName] = useState("");
  const [price, setItemPrice] = useState("");
  const [addProduct] = useAddProductMutation();
  const handleItemNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleItemPriceChange = (e) => {
    setItemPrice(e.target.value);
  };

  const handleSubmit = async () => {
    const res = await addProduct({ name, price });

    setItemName("");
    setItemPrice("");

    onClose();
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="bg-white w-96 p-4 mx-auto mt-20 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">Add Product</h2>
        <label className="block mb-2">Product Name:</label>
        <input
          type="text"
          value={name?.toUpperCase()}
          onChange={handleItemNameChange}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          required
        />
        <label className="block mb-2"> Price:</label>
        <input
          type="text"
          value={price}
          onChange={handleItemPriceChange}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          required
        />
        <button
          onClick={handleSubmit}
          className="bg-emerald-500 text-white p-2 rounded-md hover:bg-emerald-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddProductModel;
