import React from "react";

const MyBidCard = ({ bidList }) => {
  return (
    <>
      {bidList.map((list, index) => (
        <div key={index} className="  flex items-center justify-center mt-3">
          <div className="hover:shadow-xl hover:bg-slate-50 bg-white w-[50%]  flex space-x-4 p-4 shadow-md rounded-md ">
            <h2 className="text-lg font-semibold mb-1 flex  items-center">
              Item :
              <span className="ml-1">{list?.itemName?.toUpperCase()}</span>{" "}
            </h2>

            <p className="text-gray-600 font-bold flex  items-center">
              Top Bid :{" "}
              <span className="text-blue-600">{list?.highestBid} ₹</span>
            </p>
            <p className="text-gray-600 font-bold flex items-center">
              Bid submitted :{" "}
              <span className="text-red-600">{list?.bids[0]?.bidPrice} ₹</span>
            </p>

            {list?.highestBid > list?.bids?.bidPrice ? (
              <span className="text-red-600 font-bold flex items-center">
                Auction Lost
              </span>
            ) : (
              <span className="text-blue-600 font-bold flex items-center">
                Auction Won
              </span>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default MyBidCard;
