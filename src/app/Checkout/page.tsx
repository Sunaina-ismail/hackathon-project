import React from "react";
import Image from "next/image";

import { FaBox } from "react-icons/fa";

export default function Checkout() {
  return (
    <div>
    
      <div className="min-h-screen py-24 px-6 md:py-26 md:px-32 lg:px-32 font-sans">
        <div className="grid lg:grid-cols-3 gap-6">
         
          <div className="lg:col-span-2">
            <h1 className="text-lg md:text-2xl font-bold ">
              How would you like to get your order?
            </h1>
            <p className="text-sm text-gray-600 w-full max-w-lg mb-6">
              Customs regulations for India require a copy of the recipient&apos;s KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information.
              <a href="#" className="text-black underline ml-1">Learn More</a>
            </p>

            <button className="w-full max-w-lg flex justify-between items-center border-2 border-black py-4 px-6 rounded-xl mb-8">
              <span className="text-lg font-medium flex items-center">
                <FaBox className="mr-2" />
                Deliver It
              </span>
            </button>

          
            <div className="w-full max-w-lg mb-8">
              <h2 className="text-lg font-semibold mb-4">Enter your name and address:</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border border-gray-300 rounded-md p-3"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border border-gray-300 rounded-md p-3"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address Line 1"
                  className="border border-gray-300 rounded-md p-3 w-full"
                />
                <input
                  type="text"
                  placeholder="Address Line 2"
                  className="border border-gray-300 rounded-md p-3 w-full"
                />
                <input
                  type="text"
                  placeholder="Address Line 3"
                  className="border border-gray-300 rounded-md p-3 w-full"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="border border-gray-300 rounded-md p-3"
                  />
                  <input
                    type="text"
                    placeholder="Locality"
                    className="border border-gray-300 rounded-md p-3"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <select className="border border-gray-300 rounded-md p-3">
                    <option value="state">State/Territory</option>
                  </select>
                  <div className="flex items-center text-gray-700 border border-gray-300 rounded-md p-3">
                    <span className="text-green-500">●</span>
                    <span className="ml-2">India</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="saveAddress" />
                  <label htmlFor="saveAddress" className="text-sm">
                    Save this address to my profile
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="preferredAddress" />
                  <label htmlFor="preferredAddress" className="text-sm">
                    Make this my preferred address
                  </label>
                </div>
              </form>
            </div>

         
            <div className="w-full max-w-lg mb-8">
              <h2 className="text-lg font-semibold mb-4">What&apos;s your contact information?</h2>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 rounded-md p-3 w-full"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="border border-gray-300 rounded-md p-3 w-full"
                />
              </form>
            </div>

         
            <div className="w-full max-w-lg mb-8">
              <h2 className="text-lg font-semibold mb-4">What&apos;s your PAN?</h2>
              <input
                type="text"
                placeholder="PAN"
                className="border border-gray-300 rounded-md p-3 w-full mb-4"
              />
              <p className="text-sm text-gray-600">
                Enter your PAN to enable payment with UPI, Net Banking, or local card methods.
              </p>
              <div className="flex items-center space-x-2 py-4">
                <input type="checkbox" id="savePAN" />
                <label htmlFor="savePAN" className="text-sm">
                  Save PAN details to Nike Profile
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="consent" />
                <label htmlFor="consent" className="text-sm">
                  I have read and consent to Nike processing my information in
                  accordance with the
                  <a href="#" className="text-black underline mx-1">Privacy Statement</a>
                  and
                  <a href="#" className="text-black underline mx-1">Cookie Policy</a>.
                </label>
              </div>
            </div>

            <button className="w-full max-w-lg bg-gray-200 text-gray-500 py-3 rounded-full font-semibold">
              Continue
            </button>
          </div>

         
          <div className="w-full sm:w-[450px] mt-6 md:mt-0 md:w-[350px] ">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>$20,890.00</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery/Shipping</span>
                <span>Free</span>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>$20,890.00</span>
              </div>
            </div>
            <hr className="mt-4" />
            <p className="text-sm text-black mb-4">
              (The total reflects the price of your order, including duties and taxes.)
            </p>
            <p className="font-bold py-3">Arrives Mon, 27 Mar - Wed, 12 Apr</p>
            <div className="flex items-center space-x-4">
              <Image
                src="/gearup-1.png"
                alt="Product-1"
                className="w-20 h-20 object-cover"
                width={64}
                height={64}
              />
              <div>
                <p className="text-sm font-semibold">
                  Nike Dri-FIT ADV TechKnit Ultra Men&apos;s
                </p>
                <p className="text-sm text-gray-500">Qty: 1</p>
                <p className="text-sm text-gray-500">Size L</p>
                <p className="text-sm text-gray-500">$3,895.00</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <Image
                src="/bestair-2.png"
                alt="Product-2"
                className="w-20 h-20 object-cover"
                width={64}
                height={64}
              />
              <div>
                <p className="font-semibold">Nike Air Max 97 SE Men&apos;s Shoes</p>
                <p className="text-sm text-gray-500">Qty: 1</p>
                <p className="text-sm text-gray-500">Size UK 8</p>
                <p className="text-sm text-gray-500">$16,995.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
