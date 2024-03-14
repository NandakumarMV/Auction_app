import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AddProductModel from "./AddProductModel";

const ShopPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <div className="flex justify-center">
        <button
          onClick={openModal}
          className="bg-sky-500 p-2 rounded mt-5 text-lg font-medium w-[20%] hover:text-sky-600 hover:bg-slate-50 hover:shadow-lg hover:border-e-2 hover:border-b-2 hover:border-sky-600 text-white "
        >
          Add Item
        </button>
      </div>
      <div className="space-y-3 mt-5"></div>

      <AddProductModel isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ShopPage;
