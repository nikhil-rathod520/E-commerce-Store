import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ConfirmOrder = ({ address }) => {
  console.log(address);
  return (
    <>
      <div className="container mx-auto md:px-8 pt-12">
        <div className="p-12 bg-gray-900 rounded-3xl shadow-2xl  flex-col max-w-2xl mx-auto text-center mt-12 border border-green-700">
          <CheckCircle className="w-30 h-30 text-green-600 mx-auto " />
          <div className="mt-3">
            <h1 className="font-bold text-4xl mb-2 ">Order Confirmed</h1>
            <p>
              Your transaction is complate. A confirmation email has been sent
              to your account
            </p>
            <div className="p-6 bg-green-900/30 border mt-6 mb-3 border-green-700 rounded-xl font-mono text-left inline-block text-green-300 text-sm">
              <p>{address.name}</p>
              <p>{address.address}</p>
              <p>{address.city}</p>
              <p>{address.zip}</p>
            </div>
          </div>
          <Link
            to={"/"}
            className="mt-10 px-4 py-4 bg-orange-600 text-white font-extrabold rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-pink-600/50 uppercase tracking-wider"
          >
            <span>Continue to shopping</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ConfirmOrder;
