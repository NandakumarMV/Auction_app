import React, { useState } from "react";
import { useSubmitItemMutation } from "../slices/userApiSlice";

const AddItemModal = ({ isOpen, onClose }) => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [submitItem] = useSubmitItemMutation();
  const handleItemNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleItemPriceChange = (e) => {
    setItemPrice(e.target.value);
  };

  const handleSubmit = async () => {
    const res = await submitItem({ itemName, itemPrice });

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
        <h2 className="text-xl font-bold mb-4">Add Item</h2>
        <label className="block mb-2">Item Name:</label>
        <input
          type="text"
          value={itemName?.toUpperCase()}
          onChange={handleItemNameChange}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          required
        />
        <label className="block mb-2">Minimum Bid Price:</label>
        <input
          type="text"
          value={itemPrice}
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

export default AddItemModal;
