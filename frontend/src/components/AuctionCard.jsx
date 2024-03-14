import React, { useEffect, useState } from "react";

import AddAmountModal from "./AddAmountModal";

const AuctionCard = ({ auctionItemsList }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const openModal = (itemId) => {
    setSelectedItemId(itemId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      {auctionItemsList.map((item) => (
        <div key={item._id} className="  flex items-center justify-center ">
          <div className="hover:shadow-xl hover:bg-slate-50 bg-white    p-4 shadow-md rounded-md space-y-2 ">
            <h2 className="text-lg font-semibold mb-2 flex">
              Item :<div className="ml-1">{item?.itemName?.toUpperCase()}</div>{" "}
            </h2>
            <p className="text-gray-800font-semibold">
              Owner : <span className="text-lg">{item?.userId?.name}</span>
            </p>{" "}
            <p className="text-gray-800font-semibold">
              email : <span className="text-lg">{item?.userId?.email}</span>
            </p>
            <p className="text-gray-800 font-medium">
              Minimum Bidding Amount :{" "}
              <span className="text-green-800 text-lg font-bold">
                {item?.minBidAmt} ₹
              </span>
            </p>
            <p className="text-gray-600 font-bold">
              Started At :
              <span className="text-blue-600">
                {new Date(item.createdAt).toLocaleString("en-IN", {
                  timeZone: "Asia/Kolkata",
                })}
              </span>
            </p>
            <div className="font-extrabold">{item._id}</div>
            <p className="text-gray-600 font-bold">
              Ends At :{" "}
              <span className="text-red-600">
                {new Date(item.expiresAt).toLocaleString("en-IN", {
                  timeZone: "Asia/Kolkata",
                })}
              </span>
            </p>
            <button
              onClick={() => openModal(item._id)}
              className="w-full bg-purple-600 text-white text-lg hover:bg-blue-700"
            >
              Add Bid
            </button>
          </div>
          <AddAmountModal
            isOpen={isModalOpen}
            onClose={closeModal}
            minAmt={
              selectedItemId
                ? auctionItemsList.find((item) => item._id === selectedItemId)
                    ?.minBidAmt
                : null
            }
            itemId={selectedItemId}
          />
        </div>
      ))}
    </>
  );
};

export default AuctionCard;
