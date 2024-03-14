import React from "react";
import { useSelector } from "react-redux";

const AuctionResulCard = ({ auctionResult }) => {
  return (
    <>
      {auctionResult.map((list, index) => (
        <div key={index} className="flex items-center justify-center mt-3">
          <div className="hover:shadow-xl hover:bg-slate-50 bg-white w-[60%] flex space-x-4 p-4 shadow-md rounded-md">
            <h2 className="text-lg font-semibold mb-1">
              Item: <span className="ml-1 uppercase">{list?.itemName}</span>
            </h2>
            <p className="text-gray-600 font-bold">
              Top Bid:{" "}
              <span className="text-blue-600">{list?.highestBid} ₹</span>
            </p>
            <p className="text-gray-600 font-bold">
              Bid submitted By:{" "}
              <span className="text-red-600">{list?.highestBidder}</span>
            </p>
            <p className="text-gray-600 font-bold">
              Email: <span className="text-sky-900">{list?.bidderEmail}</span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default AuctionResulCard;
