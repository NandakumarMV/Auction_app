import React, { useEffect } from "react";
import MyBidCard from "./MyBidCard";
import { useGetUserBidsMutation } from "../slices/userApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setUserBidList } from "../slices/auctionSlice";

const MyBidPage = () => {
  const [getUserBids] = useGetUserBidsMutation();
  const dispatch = useDispatch();
  const apiCall = async () => {
    const res = await getUserBids().unwrap();
    await dispatch(setUserBidList(res));
  };
  useEffect(() => {
    apiCall();
  }, []);
  const bidList = useSelector((state) => state.auctionItems.userBidList);
  return (
    <div>
      <div className="flex justify-center items-center mt-3 mb-4 font-bold">
        Bid Results{" "}
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[75%]  border-b-2 mb-2 border-stone-950"></div>
      </div>
      {bidList.length > 0 ? (
        <div>
          <MyBidCard bidList={bidList} />
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <div className="bg-slate-300 w-[50%] h-96 flex items-center justify-center mt-10">
            <h4 className="text-2xl font-semibold">No Items</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBidPage;
