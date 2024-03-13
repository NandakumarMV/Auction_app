import React from "react";
import AuctionCard from "./AuctionCard";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="flex justify-center items-center mt-4 font-semibold text-2xl">
        Auctions Lists
      </div>
      <div className="w-[80%] border-b-2 border-gray-950 m-2 flex justify-center items-center"></div>
      <div class="grid grid-cols-4 gap-6 justify-center p-5">
        <AuctionCard />
        <AuctionCard />
        <AuctionCard />
        <AuctionCard />
        <AuctionCard />
        <AuctionCard />
        <AuctionCard />
        <AuctionCard />
        <AuctionCard />
        <AuctionCard />
      </div>
    </div>
  );
};

export default HomePage;
