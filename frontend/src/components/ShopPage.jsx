import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddProductModel from "./AddProductModel";
import {
  useGetAllProductMutation,
  useGetProductMutation,
} from "../slices/userApiSlice";
import { setAllProducts, setUserProducts } from "../slices/shopSlice";
import UserProductCard from "./UserProductCard";
import AllProductsCard from "./AllProductsCard";

const ShopPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const [getProducts] = useGetProductMutation();
  const [allProducts] = useGetAllProductMutation();

  const apicallForUserProducts = async () => {
    const res = await getProducts().unwrap();
    dispatch(setUserProducts(res));
  };

  const apicallForAllProducts = async () => {
    const res = await allProducts().unwrap();
    dispatch(setAllProducts(res));
  };

  useEffect(() => {
    apicallForAllProducts();
  }, []);
  useEffect(() => {
    apicallForUserProducts();
  }, []);
  useEffect(() => {
    apicallForUserProducts();
  }, [isModalOpen]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const userProductList = useSelector((state) => state.shop.userProducts);
 
  return (
    <div>
      <div className="flex justify-center">
        <button
          onClick={openModal}
          className="bg-sky-500 p-2 rounded mt-5 text-lg font-medium w-[20%] hover:text-sky-600 hover:bg-slate-50 hover:shadow-lg hover:border-e-2 hover:border-b-2 hover:border-sky-600 text-white "
        >
          Add Item
        </button>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[80%] text-lg font-semibold mt-3 mb-3 border-b-2 border-gray-950 m-2 flex justify-center items-center">
          {" "}
          My Items
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 justify-center p-5">
        <UserProductCard userProductList={userProductList} />
      </div>

      <div className="flex justify-center items-center">
        <div className="w-[80%] border-b-2 border-gray-950 m-2 flex justify-center items-center"></div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[80%] text-lg font-semibold mt-3 mb-3 border-b-2 border-gray-950 m-2 flex justify-center items-center">
          {" "}
          Shop Products
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 justify-center p-5">
        <AllProductsCard  />
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[80%] border-b-2 border-gray-950 m-2 flex justify-center items-center"></div>
      </div>
      <AddProductModel isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ShopPage;
