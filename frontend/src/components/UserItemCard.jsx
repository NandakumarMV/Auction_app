import React from "react";

const UserItemCard = () => {
  return (
    <>
      <div class="  flex items-center justify-center ">
        <div class="hover:shadow-xl hover:bg-slate-50 bg-white w-[50%]   p-4 shadow-md rounded-md ">
          <h2 class="text-lg font-semibold mb-2 flex">
            Item :<div className="ml-1">Rolex Watch</div>{" "}
          </h2>
          <p class="text-gray-600 font-semibold flex  items-center">
            Total bids : <div className="text-lg ml-1">10</div>
          </p>
          <p class="text-gray-600">
            Minimum Bidding Amount :{" "}
            <div className="text-green-800 text-lg font-bold">20000 ₹</div>
          </p>
          <p class="text-slate-950 font-medium">
            Time Remaining :
            <div className="text-red-600 text-lg font-bold"> 20 mins</div>
          </p>
          <button className="w-full bg-purple-600 text-white text-lg hover:bg-blue-700">
            view bids
          </button>
        </div>
      </div>
    </>
  );
};

export default UserItemCard;
