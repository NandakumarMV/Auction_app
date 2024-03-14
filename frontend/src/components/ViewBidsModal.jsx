import React, { useEffect } from "react";
import { useGetUserItemBidsMutation } from "../slices/userApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setBidList } from "../slices/auctionSlice";

const ViewBidsModal = ({ isOpen, onClose, itemId }) => {
  const [getItemBids] = useGetUserItemBidsMutation();
  const dispatch = useDispatch();
  const apiCall = async () => {
    const res = await getItemBids(itemId).unwrap();
    console.log(res);
    dispatch(setBidList(res));
  };
  useEffect(() => {
    apiCall();
  }, []);
  const handleclose = () => {
    onClose();
  };
  const bidList = useSelector((state) => state.auctionItems.bidList);
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="bg-white w-96 p-4 mx-auto mt-20 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-1 flex justify-center">Bids</h2>
        <div className="w-full border-b-2 mb-2 border-stone-950"></div>
        {bidList.length > 0 ? (
          bidList.map((item, index) => (
            <div
              key={index}
              className="flex justify-evenly bg-slate-100 p-3 rounded mb-2 hover:bg-slate-200"
            >
              <div className="text-base text-blue-700 font-semibold  ">
                {item?.userId?.name.toUpperCase()}{" "}
              </div>
              <div className="text-base font-bold">
                Amount :{" "}
                <span className="text-red-600 font-bold">
                  {" "}
                  {item?.bidPrice} ₹
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center">No Bids Placed</div>
        )}

        <button
          onClick={handleclose}
          className="bg-lime-700 text-white p-2 rounded-md hover:bg-blue-600"
        >
          close
        </button>
      </div>
    </div>
  );
};

export default ViewBidsModal;
