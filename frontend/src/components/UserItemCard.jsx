import React, { useState } from "react";
import ViewBidsModal from "./ViewBidsModal";

const UserItemCard = ({ userItems }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {userItems.length > 0 ? (
        userItems?.map((items) => (
          <div className="  flex items-center justify-center " key={items._id}>
            <div className="hover:shadow-xl hover:bg-slate-50 bg-white w-[50%]   p-4 shadow-md rounded-md ">
              <h2 className="text-lg font-semibold mb-1 flex">
                Item :
                <span className="ml-1">{items?.itemName.toUpperCase()}</span>{" "}
              </h2>

              <p className="text-gray-600 font-bold">
                Minimum Bidding Amount :{" "}
                <span className="text-green-800 text-lg font-bold">
                  {items?.minBidAmt} ₹
                </span>
              </p>
              <p className="text-gray-600 font-bold">
                Bidding Started At :
                <span className="text-blue-600">
                  {new Date(items.createdAt).toLocaleString("en-IN", {
                    timeZone: "Asia/Kolkata",
                  })}
                </span>
              </p>
              <p className="text-gray-600 font-bold">
                Bidding Ends At :{" "}
                <span className="text-red-600">
                  {new Date(items.expiresAt).toLocaleString("en-IN", {
                    timeZone: "Asia/Kolkata",
                  })}
                </span>
              </p>

              <button
                className="w-full bg-purple-600 text-white text-lg hover:bg-blue-700 mt-1"
                onClick={openModal}
              >
                view bids
              </button>
            </div>
            <ViewBidsModal
              isOpen={isModalOpen}
              onClose={closeModal}
              itemId={items._id}
            />
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center">
          <div className="bg-slate-300 w-[50%] h-96 flex flex-col items-center justify-center">
            <h4 className="text-2xl font-semibold">No Active Auctions</h4>
            <h4 className="text-2xl font-semibold">Add Items in Auction</h4>
          </div>
        </div>
      )}
    </>
  );
};

export default UserItemCard;
