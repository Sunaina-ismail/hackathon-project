import React from "react";
import { CircleCheckBig } from "lucide-react";
import Link from "next/link";

const OrderSuccessPage = () => {
  return (
    <div className="pt-20">
    <div className="w-full max-w-7xl mx-auto px-4 py-20">
      <div className="flex justify-center mb-6">
        <span className="text-green-700">
          <CircleCheckBig size={60} className="md:size-20" />
        </span>
      </div>
      <h1 className="text-3xl font-bold text-black mb-8 text-center sm:text-3xl md:text-4xl">
        Order Placed Successfully
      </h1>
      <div className="text-center">
        <p className="text-lg sm:text-base md:text-lg mb-8">
          Your order has been placed successfully!
        </p>
        <Link href={"/"}>
          <button
            className="mt-4 bg-white text-black rounded-full border border-black  py-2 px-6  hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2  transition-all duration-300 sm:px-4 sm:py-2"
          >
            Return to Shop
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default OrderSuccessPage;