"use client";
import { useCart } from "@/app/context/cartContext";
import React from "react";
import { ShoppingCart } from "lucide-react"

const CartIcon = () => {
  const { cartItems } = useCart(); 
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <div className="relative">
    <ShoppingCart size={25} className="text-base  hover:scale-110" />
    {totalItems > 0 && (
      <span className="absolute  -top-1 -right-1 md:-right-2 bg-[#c34d4d] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
        {totalItems}
      </span>
    )}
  </div> 
  );
};

export default CartIcon;