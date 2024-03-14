import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserAuctions } from "../slices/auctionSlice";
import { useGetUserAuctionsMutation } from "../slices/userApiSlice";
import AuctionResulCard from "./AuctionResulCard";

const AuctionResultpage = () => {
  const [auctionResult] = useGetUserAuctionsMutation();
  const dispatch = useDispatch();
  const apiCall = async () => {
    const res = await auctionResult().unwrap();
    dispatch(setUserAuctions(res));
  };

  useEffect(() => {
    apiCall();
  }, []);
  const auctionResults = useSelector(
    (state) => state.auctionItems.userAuctions
  );

  return (
    <div>
      <div className="flex justify-center items-center mt-3 mb-4">
        {" "}
        Auction Results
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[75%]  border-b-2 mb-2 border-stone-950"></div>
      </div>

      {auctionResults.length > 0 ? (
        <div>
          <AuctionResulCard auctionResult={auctionResults} />
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

export default AuctionResultpage;
