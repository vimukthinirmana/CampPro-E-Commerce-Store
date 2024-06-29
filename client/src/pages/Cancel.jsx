import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Cancel() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-3">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-center">
        <FaTimesCircle className="text-red-500 w-16 h-16 mx-auto" />
        <h1 className="text-3xl font-bold mt-4">Payment Unsuccessful</h1>
        <p className="text-gray-600 mt-2">Unfortunately, we were unable to process your payment. Please try again or contact our support team for assistance.</p>
        <div className="mt-6 flex justify-center space-x-4">
          <Link
            to="/cart"
            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
          >
            Retry Payment
          </Link>
          <Link
            to="/contact"
            className="bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-600"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cancel;