import React, { useState } from "react";
import { useAddUserBidMutation } from "../slices/userApiSlice";

const AddAmountModal = ({ isOpen, onClose, minAmt, itemId }) => {
  const [bidAmt, setBidAmt] = useState("");
  const [err, setErr] = useState("");

  const [addUserBid] = useAddUserBidMutation();
  const handleAmtChange = (e) => {
    setBidAmt(e.target.value);
  };

  const handleSubmit = async () => {
    if (bidAmt < minAmt) {
      setErr(`Enter Amount Greater than ${minAmt}`);
      setBidAmt("");
    } else {
      const res = await addUserBid({ itemId, bidAmt }).unwrap();

      setBidAmt("");

      setErr("");
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="bg-white w-96 p-4 mx-auto mt-20 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">Enter Bid</h2>
        <h2 className="text-xl font-bold mb-4">{itemId}</h2>
        <label className="block mb-2">Amount</label>
        {err && <span className="text-red-500 m-1">{err}</span>}

        <input
          type="number"
          value={bidAmt}
          onChange={handleAmtChange}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          placeholder={`Minimum Amount is ${minAmt}`}
          required
        />

        <button
          onClick={handleSubmit}
          className="bg-yellow-400 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddAmountModal;
