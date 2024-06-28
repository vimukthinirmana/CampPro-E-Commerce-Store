import React from "react";
import { HiShoppingBag } from "react-icons/hi2";

const FilterProduct = ({category,onClick,isActive}) => {
  return (
    <div onClick={onClick}>
      <div className={`text-3xl p-5  rounded-full cursor-pointer ${isActive ? "bg-yellow-600 text-white" : "bg-blue-500"}`}>
      <HiShoppingBag />
      </div>
      <p className="text-center font-medium my-1 capitalize">{category}</p>
    </div>
  );
};

export default FilterProduct;