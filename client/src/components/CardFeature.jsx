import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCartItem, increaseQty } from "../redux/productSlide";

const CardFeature = ({ image, name, price, category, loading, id }) => {
  const dispatch = useDispatch()

  const handleAddCartProduct = (e) => {
    dispatch(addCartItem({
      _id: id,
      name: name,
      price: price,
      category: category,
      image: image
    }))
  };

  return (
    <div className="w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col ">
      {image ? (
        <>
          <Link
            to={`/product/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className="h-28 flex flex-col justify-center items-center">
              <img src={image} className="h-full" />
            </div>
            <h3 className="font-semibold text-slate-600  capitalize text-lg mt-4 whitespace-nowrap overflow-hidden">
              {name}
            </h3>
            <p className=" text-slate-500  font-medium">{category}</p>
            <p className=" font-bold">
              <span className="text-blue-500">Rs.</span>
              <span>{price}</span>
            </p>
          </Link>
          <button
            className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 w-full"
            onClick={handleAddCartProduct}
          >
            Add Cart
          </button>
        </>
      ) : (
        // <div className="min-h-[150px] flex justify-center items-center bg-gray-300">
        //   <p>{loading}</p>
        // </div>

        <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="bg-gray-300 h-20 rounded-md"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6 mx-auto">
            {/* {loading} */}
            </div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
            <div className="h-8 bg-gray-300 rounded-md w-3/4 mx-auto"></div>
          </div>
        </div>

      )}
    </div>
  );
};

export default CardFeature;