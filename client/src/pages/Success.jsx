import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Success() {



  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-3">
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-center">
      <FaCheckCircle className="text-green-500 w-16 h-16 mx-auto" />
      <h1 className="text-3xl font-bold mt-4">Payment Successful!</h1>
      <p className="text-gray-600 mt-2">Thank you for your purchase. Your order has been successfully processed.</p>
      <div className="mt-6">
        <Link  to={'http://localhost:3000'}
        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
          Continue Shopping 
        </Link>
      </div>
    </div>
  </div>
  );
}

export default Success;