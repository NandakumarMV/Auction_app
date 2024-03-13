import React from "react";

const AuctionCard = () => {
  return (
    <>
      <div class="  flex items-center justify-center ">
        <div class="hover:shadow-xl hover:bg-slate-50 bg-white w-64   p-4 shadow-md rounded-md space-y-2 ">
          <h2 class="text-lg font-semibold mb-2 flex">
            Item :<div className="ml-1">Rolex Watch</div>{" "}
          </h2>
          <p class="text-gray-800font-semibold">
            Owner : <div className="text-lg">Nandakumar M V</div>
          </p>
          <p class="text-gray-800 font-medium">
            Minimum Bidding Amount :{" "}
            <div className="text-green-800 text-lg font-bold">20000 ₹</div>
          </p>
          <p class="text-slate-950 font-medium">
            Time Remaining :
            <div className="text-red-600 text-lg font-bold"> 20 mins</div>
          </p>
          <button className="w-full bg-purple-600 text-white text-lg hover:bg-blue-700">
            Add Bid
          </button>
        </div>
      </div>
    </>
  );
};

export default AuctionCard;
