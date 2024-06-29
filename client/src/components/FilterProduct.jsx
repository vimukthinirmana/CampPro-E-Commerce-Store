import React from "react";
import { HiShoppingBag } from "react-icons/hi2";

const FilterProduct = ({category,onClick,isActive}) => {
  return (
    <div onClick={onClick}>
      <div className={`text-2xl p-5  rounded-3xl cursor-pointer ${isActive ? "bg-gray-300 text-black" : "bg-white"}`}>
      {/* <HiShoppingBag /> */}
      <p className="text-center font-semibold text-slate-600 my-1  ">{category}</p>
      </div>
      {/* <p className="text-center font-medium my-1 capitalize">{category}</p> */}
    </div>
  );
};

export default FilterProduct;