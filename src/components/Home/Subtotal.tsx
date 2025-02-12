"use client";

import React from "react";
import { useCart } from "@/app/context/cartContext"; 

const Subtotal = () => {
  const { cartItems } = useCart();


  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="w-[90%] mx:2 text-black md:mx-auto sm:w-[400px] md:w-[500px] mx-auto lg:w-[508px] h-fit xl:w-[608px] py-9 lg:pb-14 lg:px-9 space-y-9">
      <div className="xl:w-[533px] space-y-9">
 
        <div className="flex flex-col gap-y-5 border-b pb-4">
          <div className="flex items-center justify-between">
            <span className="text-xl sm:text-2xl font-medium">Product</span>
            <span className="text-xl sm:text-2xl font-medium">Subtotal</span>
          </div>

   
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between text-gray-600"
            >
              <span className="text-black text-sm md:text-lg">
                {item.name} <span >*</span>{" "}
                <span className="text-black">{item.quantity}</span>
              </span>
              <span>Rs. {item.price * item.quantity}</span>
            </div>
          ))}

         
          <div className="flex items-center justify-between">
            <span>Subtotal</span>
            <span>Rs. {totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex items-center justify-between">
            <span>Total</span>
            <span className="text-lg sm:text-xl font-bold text-black">
              Rs. {totalPrice.toFixed(2)}
            </span>
          </div>
        </div>

    
<div className="space-y-6">
  <p className="font-medium text-black">Select Payment Method</p>
  <div className="flex flex-col gap-4">
    <div className="flex items-center">
      <input
        type="radio"
        id="easypaisa"
        name="paymentMethod"
        value="easypaisa"
        className="mr-2 transform  relative z-[30]  text-pink-300 w-6 h-6"
      />
      <label htmlFor="easypaisa" className="text-black">
        Easypaisa
      </label>
    </div>
    <div className="flex items-center">
      <input
        type="radio"
        id="jazzcash"
        name="paymentMethod"
        value="jazzcash" 
        className="mr-2 transform relative z-[30] w-6 h-6"
      />
      <label htmlFor="jazzcash" className="text-black">
        JazzCash
      </label>
    </div>
    <div className="flex items-center">
      <input
        type="radio"
        id="bankTransfer"
        name="paymentMethod"
        value="bankTransfer"
        className="mr-2  relative z-[30]  transform w-6 h-6"
      />
      <label htmlFor="bankTransfer" className="text-black">
        Bank Transfer
      </label>
    </div>
  </div>
  <p className="font-light text-gray-400">
    The selected method will guide you to securely complete the payment.
    Please use your Order ID as the payment reference.
  </p>

</div>


       
        <div>
          <p>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className="font-semibold">privacy policy.</span>{" "}
          </p>
        </div>

       
        <div className="flex items-center justify-center">
        <button
  type="submit"
  aria-label="Place your order"
  className="border border-black text-xl py-4 px-10 lg:px-28 bg-black text-white hover:bg-white hover:text-black rounded font-medium relative overflow-hidden transition-all duration-300 ease-out group"
>
  Place Order
  <span className="absolute top-0 left-0 w-full h-full transition-all duration-500 ease-out group-hover:shadow-[0_20px_50px_0_rgba(0,0,0,0.2)]"></span>
</button>
          <span className="absolute top-0 left-0 w-full h-full transition-all duration-500 ease-out group-hover:shadow-[0_20px_50px_0_rgba(0,0,0,0.2)]"></span>
        </div>
      </div>
    </div>
  );
};

export default Subtotal;
