import React, { useEffect, useState } from "react";
import AddItemModal from "./AddItemModal";
import UserItemCard from "./UserItemCard";
import { useGetUserItemsMutation } from "../slices/userApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setUserItems } from "../slices/auctionSlice";

const AddItemsPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [getItems] = useGetUserItemsMutation();
  const dispatch = useDispatch();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const gettingItems = async () => {
    const res = await getItems().unwrap();
    dispatch(setUserItems(res));
  };
  useEffect(() => {
    gettingItems();
  }, []);
  useEffect(() => {
    gettingItems();
  }, [isModalOpen]);

  const userItems = useSelector((state) => state.auctionItems.userItems);
  return (
    <div>
      <div className="flex justify-center">
        <button
          onClick={openModal}
          className="bg-emerald-500 p-2 rounded mt-5 text-lg font-medium w-[20%] hover:text-emerald-600 hover:bg-slate-50 hover:shadow-lg hover:border-e-2 hover:border-b-2 hover:border-emerald-600 text-white "
        >
          Add Item
        </button>
      </div>
      <div className="space-y-3 mt-5">
        <UserItemCard userItems={userItems} />
      </div>

      <AddItemModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default AddItemsPage;
