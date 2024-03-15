import React, { useEffect } from "react";
import AuctionCard from "./AuctionCard";
import { useDispatch, useSelector } from "react-redux";
import { useAllAuctionsListMutation } from "../slices/userApiSlice";
import { setAuctionList } from "../slices/auctionSlice";

const HomePage = () => {
  const [auctionItems] = useAllAuctionsListMutation();
  const dispatch = useDispatch();
  const getList = async () => {
    const res = await auctionItems().unwrap();
    dispatch(setAuctionList(res));
  };
  useEffect(() => {
    getList();
  }, []);
  const auctionItemsList = useSelector(
    (state) => state.auctionItems.auctionList
  );
  return (
    <>
      {auctionItemsList.length > 0 ? (
        <div className="flex justify-center items-center flex-col ">
          <div className="flex justify-center items-center mt-4 font-semibold text-2xl">
            Auctions Lists
          </div>
          <div className="w-[80%] border-b-2 border-gray-950 m-2 flex justify-center items-center"></div>
          <div className="grid grid-cols-4 gap-6 justify-center p-5">
            <AuctionCard auctionItemsList={auctionItemsList} />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <div className="bg-slate-300 w-[50%] h-96 flex items-center justify-center mt-10">
            <h4 className="text-2xl font-semibold">
              No Items for Auction from Others
            </h4>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
