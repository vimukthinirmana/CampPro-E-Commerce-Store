import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CardFeature from "../components/CardFeature";
import HomeCard from "../components/HomeCard";
import { GrPrevious, GrNext } from "react-icons/gr";
import FilterProduct from "../components/FilterProduct";
import AllProduct from "../components/AllProduct";
import Hero from "../components/Hero";

function Home() {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(1, 5);
  const homeProductCartListTents = productData.filter(
    (el) => el.category === "tents",
    []
  );
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };







  {/* <Hero className='p-0'/> */ }

  return (
    <div>
      <Hero />
      <div className="p-2 md:p-4">

        {/* <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
         
        <h2 className="text-4xl md:text-7xl font-bold py-3">
            Welcom to {" "}
            <span className="text-blue-600 text-">CampPro</span>
          </h2>

          <h2 className="text-2xl  text-gray-500 font-bold py-3">
            The Fasted Delivery in Your Home
          </h2>
          <p className="py-3 text-base ">
          Your one-stop shop for premium camping gear. Gear up for your next adventure with our top-quality tents, sleeping bags, backpacks, and more.
          </p>
          <button className="font-bold bg-blue-500 text-slate-200 px-4 py-2 rounded-md">
            Order Now
          </button>
        </div>

        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCartList[0]
            ? homeProductCartList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return <HomeCard key={index+"loading"} loading={"Loading..."} />;
              })}
        </div>
      </div> */}

        <div className="">
          <div className="flex w-full items-center">
            <h2 className="font-bold text-2xl text-slate-800 mb-4">
              Populer Camping Tents
            </h2>
            <div className="ml-auto flex gap-4">
              <button
                onClick={preveProduct}
                className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
              >
                <GrPrevious />
              </button>
              <button
                onClick={nextProduct}
                className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded "
              >
                <GrNext />
              </button>
            </div>
          </div>
          <div
            className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
            ref={slideProductRef}
          >
            {homeProductCartListTents[0]
              ? homeProductCartListTents.map((el) => {
                return (
                  <CardFeature
                    key={el._id + "tents"}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />
                );
              })
              : loadingArrayFeature.map((el, index) => (
                <CardFeature loading="Loading..." key={index + "cartLoading"} />
              ))}
          </div>
        </div>

        <AllProduct heading={"Our Product"} />
      </div>
    </div>

  );
}

export default Home;