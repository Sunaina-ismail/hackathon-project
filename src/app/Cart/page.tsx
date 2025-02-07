"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/cartContext";
import { BsTrash } from "react-icons/bs";
import { useUser } from "@clerk/nextjs";

export default function Cart() {
  const {
    cartItems,
    incrementItem,
    decrementItem,
    removeItem,
    subtotal,
   
  } = useCart();

  const {isSignedIn} = useUser()

  return (
    <div className="min-h-screen py-24 px-3 sm:p-6 md:p-9 lg:p-32">
      <div className="max-w-[1152px] mx-auto py-4 flex flex-col lg:flex-row">
        {/* Cart Items Section */}
        <div className="w-full lg:w-2/3">
          <h5 className="text-base sm:text-lg md:text-2xl font-bold mb-3">Your Cart</h5>
          <h5 className="text-lg sm:text-base md:text-xl text-center font-bold mb-3">
            {cartItems.length === 0 ? "Cart is Empty" : `${cartItems.length} items`}
          </h5>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border-b border-gray-300 py-2 flex items-start sm:py-3 md:py-4"
            >
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={150}
                height={150}
                className="w-20 sm:w-24 md:w-30 border border-black h-auto"
              />
              <div className="flex flex-col pl-2 sm:pl-4 md:pl-6">
                <p className="font-normal text-sm sm:text-base md:text-lg">{item.name}</p>
                <p className="text-xs sm:text-sm md:text-sm text-gray-500">Color: {item.color}</p>
                <p className="text-xs sm:text-sm md:text-sm text-gray-500">Quantity: {item.quantity}</p>
              </div>
              <div className="text-right ml-auto">
              
                <div className="flex items-center justify-end space-x-2 sm:space-x-3 md:space-x-4 py-1 sm:py-2">
                  <button
                    onClick={() => incrementItem(item.id)}
                    className={`text-gray-500 hover:text-gray-700 text-sm sm:text-base md:text-lg ${item.quantity >= item.inventory ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={item.quantity >= item.inventory}
                  >
                    +
                  </button>
                  <button
                    onClick={() => decrementItem(item.id)}
                    className="text-gray-500 hover:text-gray-700 text-sm sm:text-base md:text-lg"
                  >
                    -
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-500 hover:text-gray-700 text-sm sm:text-base md:text-lg"
                    aria-label="Remove item"
                  >
                    <BsTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/3 px-4 sm:px-6 md:px-10 py-16 md:py-0 md:ml-10 lg:mt-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Summary</h2>
          <div className="mt-2">
            <div className="flex justify-between py-1 sm:py-2 md:py-2.5">
              <span className="text-sm sm:text-base md:text-base">Subtotal</span>
              <span className="font-semibold text-sm sm:text-base md:text-lg">Rs.{subtotal}</span>
            </div>

          <hr />
            <div className="flex justify-between py-1 sm:py-2 md:py-2.5">
              <span className="text-sm sm:text-base md:text-base">Total</span>
              <span className="font-semibold text-sm sm:text-base md:text-lg">Rs.{subtotal}</span>
            </div>
        {!isSignedIn && ( 
          <Link href={"/sign-in"}>
          <button
            className={`mt-3 w-full bg-black text-white py-2 rounded-full sm:py-3 md:py-4 font-medium hover:bg-gray-800 ${cartItems.length === 0 ? " opacity-50 cursor-not-allowed" : ""}`}
            disabled={cartItems.length === 0}
            aria-label={cartItems.length === 0 ? "Cart is empty, checkout disabled" : "Proceed to checkout"}
          >
            Proceed to Checkout
          </button>
        </Link>)}
        {isSignedIn && (
          <Link href={cartItems.length > 0 ? "/Checkout" : "#"}>
              <button
                className={`mt-3 w-full bg-black text-white py-2 rounded-full sm:py-3 md:py-4 font-medium hover:bg-gray-800 ${cartItems.length === 0 ? " opacity-50 cursor-not-allowed" : ""}`}
                disabled={cartItems.length === 0}
                aria-label={cartItems.length === 0 ? "Cart is empty, checkout disabled" : "Proceed to checkout"}
              >
                Proceed to Checkout
              </button>
            </Link>
            )} 
          </div>
        </div>
      </div>
    </div>
  );
}
