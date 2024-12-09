// 

import Link from "next/link";
import Image from "next/image";

export default function Cart() {
  return (
    <div className="min-h-screen py-24 px-3 sm:p-6 md:p-9 lg:p-32">
      <div className="max-w-[1152px] mx-auto py-4 flex flex-col lg:flex-row">
 
        <div className="w-full lg:w-2/3">
        
          <div className="text-gray-600 text-sm mb-4 border bg-[#F7F7F7] px-2 py-3 md:py-2 md:px-3 sm:py-3 sm:px-4">
            Free Delivery{" "}
            <div className="flex flex-wrap sm:flex-nowrap">
              <p>Applies to orders of ₹ 14 000.00 or more.</p>
              <Link href={'#'} className="text-black underline sm:mt-0 ml-2">View More</Link>
            </div>
          </div>

          <h5 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">Bag</h5>
       
          {/* Item 1 */}
          <div className="border-b border-gray-300 py-2 flex items-start sm:py-3 md:py-4">
            <Image
              src="/gearup-1.png"
              alt="Nike Top"
              width={150}
              height={150}
              className="w-20 sm:w-24 md:w-32 h-auto"
            />
            <div className="flex flex-col pl-2 sm:pl-4 md:pl-6">
              <p className="font-medium text-base sm:text-base md:text-lg">Nike Dri-FIT ADV TechKnit Ultra</p>
              <p className="text-xs sm:text-sm md:text-sm text-gray-500">Men&apos;s Short Running Top</p>
              <p className="text-xs sm:text-sm md:text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
              <p className="text-xs sm:text-sm md:text-sm text-gray-500">Size: L</p>
            </div>
            <div className="text-right ml-auto">
              <p className="font-semibold text-sm sm:text-base md:text-lg">₹3,895.00</p>
              <div className="flex items-center justify-end space-x-2 sm:space-x-3 md:space-x-4 py-1 sm:py-2">
                <button className="text-gray-500 hover:text-gray-700 text-sm sm:text-base md:text-lg">❤</button>
                <button className="text-gray-500 hover:text-gray-700 text-sm sm:text-base md:text-lg">🗑</button>
              </div>
            </div>
          </div>
  
          {/* Item 2 */}
          <div className="border-b border-gray-300 py-2 flex items-start sm:py-3 md:py-4">
            <Image
              src="/shoe-2.png"
              alt="Nike Shoes"
              width={150}
              height={150}
              className="w-20 sm:w-24 md:w-32 h-auto"
            />
            <div className="flex flex-col pl-2 sm:pl-4 md:pl-6">
              <p className="font-medium text-base sm:text-base md:text-lg">Nike Air Max 97 SE</p>
              <p className="text-xs sm:text-sm md:text-sm text-gray-500">Men&apos;s Shoes</p>
              <p className="text-xs sm:text-sm md:text-sm text-gray-500">Flat Pewter/Light Bone/Black/White</p>
              <p className="text-xs sm:text-sm md:text-sm text-gray-500">Size: 8</p>
            </div>
            <div className="text-right ml-auto">
              <p className="font-semibold text-sm sm:text-base md:text-lg">₹16,895.00</p>
              <div className="flex items-center justify-end space-x-2 sm:space-x-3 md:space-x-4 py-1 sm:py-2">
                <button className="text-gray-500 hover:text-gray-700 text-sm sm:text-base md:text-lg">❤</button>
                <button className="text-gray-500 hover:text-gray-700 text-sm sm:text-base md:text-lg">🗑</button>
              </div>
            </div>
          </div>
        </div>
  
       
        <div className="w-full lg:w-1/3 bg-white px-4 sm:px-6 md:px-8 shadow-sm rounded-md mt-4 lg:mt-0">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-3">Summary</h2>
          <div className="mt-2">
            <div className="flex justify-between py-1 sm:py-2 md:py-2.5">
              <span className="text-sm sm:text-base md:text-base">Subtotal</span>
              <span className="font-semibold text-sm sm:text-base md:text-lg">₹20,890.00</span>
            </div>
            <div className="flex justify-between py-1 sm:py-2 md:py-2.5">
              <span className="text-sm sm:text-base md:text-base">Estimated Delivery & Handling</span>
              <span className="text-sm sm:text-base md:text-base">Free</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between py-1 sm:py-2 md:py-2.5 font-medium text-lg md:text-base">
              <span>Total</span>
              <span>₹20,890.00</span>
            </div>
           <Link href={'/Checkout'}> <button className="mt-3 w-full bg-black text-white py-2  rounded-full sm:py-3 md:py-4 font-medium  hover:bg-gray-800">
              Member Checkout
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
