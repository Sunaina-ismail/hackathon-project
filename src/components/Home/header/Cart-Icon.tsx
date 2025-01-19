


"use client";
import { useCart } from "@/app/context/cartContext";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";


const CartIcon = () => {
  const { cartItems } = useCart(); 

 
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="relative">
      <AiOutlineShoppingCart size={20} className="sm:size-6 hover:scale-110" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-[#c34d4d] text-white text-[7px] sm:text-xs w-3 h-3 rounded-full flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
