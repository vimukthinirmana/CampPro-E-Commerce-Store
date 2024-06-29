// src/components/Hero.js
import React, { useState, useEffect } from 'react';
import { GiCampingTent } from "react-icons/gi";

const images = [
  'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1602391833977-358a52198938?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1537565266759-34bbc16be345?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <GiCampingTent className="text-9xl mb-0" />
        <h1 className="text-5xl md:text-7xl font-bold py-3">
          Welcome to <span className="text-blue-600">CampPro</span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold py-3 text-gray-200">
          The Fastest Delivery to Your Home
        </h2>
        <p className="text-lg md:text-2xl py-3 max-w-2xl">
          Your one-stop shop for premium camping gear. Gear up for your next adventure with our top-quality tents, sleeping bags, backpacks, and more.
        </p>
        <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-slate-200 font-bold py-3 px-6 rounded-md">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
