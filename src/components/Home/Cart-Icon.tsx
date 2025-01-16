"use client";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartIcon = ({ count = 0 }) => {
  return (
    <div className="relative">
      <AiOutlineShoppingCart size={20}  className="sm:size-6 hover:scale-110" />     
        <span className="absolute -top-2 -right-2 bg-[#c34d4d] text-white text-[8px] sm:text-xs w-4 h-4  rounded-full flex items-center justify-center">
          {count}  
        </span>
    
    </div>
  );
};

export default CartIcon;