import React, { useState } from "react";

const UserProductCard = ({ userProductList }) => {
  return (
    <>
      {userProductList.map((item) => (
        <div key={item?._id} className="  flex items-center justify-center ">
          <div className="hover:shadow-xl hover:bg-slate-50 bg-white    p-4 shadow-md rounded-md space-y-2 ">
            <h2 className="text-lg font-semibold mb-2 flex">
              Item :<div className="ml-1">{item?.itemName?.toUpperCase()}</div>{" "}
            </h2>

            <p className="text-gray-800 font-medium">
              Price :{" "}
              <span className="text-green-800 text-lg font-bold">
                {item?.Price} ₹
              </span>
            </p>
            {item.isPurchased ? (
              <button className="w-full bg-green-600 text-white text-lg hover:bg-blue-700">
                Sold out
              </button>
            ) : (
              <button className="w-full bg-red-600 text-white text-lg hover:bg-blue-700">
                Not Sold
              </button>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default UserProductCard;
