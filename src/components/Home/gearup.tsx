import Image from 'next/image'
import React from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

const Gearup = () => {
  const leftGear = [
    { id: 1, src: "/gearup-1.png", name: "Nike Max Air Pulse", price: "₹ 13 995", description: "Men's Short-Sleeve Running Top" },
    { id: 2, src: "/gearup-2.png", name: "Nike Max Air Pulse", price: "₹ 14 999", description: "Mens" },
  ];

  const rightGear = [
    { id: 3, src: "/gearup-3.png", name: "Nike Max Air Max", price: "₹ 15 995", description: "Women shoe" },
    { id: 4, src: "/gearup-4.png", name: "Nike Max Air Max", price: "₹ 16 999", description: "Women" },
  ];

  return (
    <div className="px-8 relative">
      {/* Gear up heading */}
      <div className='px-4 md:px-8 py-10 text-lg font-medium sm:text-xl md:text-xl'>
        <p>Gear Up</p>
      </div>

      {/* Parent container to wrap left and right sections */}
      <div className="relative flex flex-wrap gap-8 md:gap-12 justify-between">

        {/* Left Section */}
        <div className="relative  gap-y-3 flex flex-col items-end md:flex-row xl:flex-row xl:w-[48%]">
          {/* Left Navigation Controls */}
          <div className="absolute w-full  top-[-20px] sm:top-[-10px] left-2 md:left-0 flex justify-end items-center gap-x-2 z-10">
            <p className="text-sm sm:text-base md:text-lg">Shop</p>
            <span className="bg-gray-100 p-2 rounded-full cursor-pointer">
              <MdKeyboardArrowRight className="text-sm sm:text-lg md:text-xl" />
            </span>
            <span className="bg-[#F5F5F5] p-2 rounded-full cursor-pointer">
              <MdKeyboardArrowLeft className="text-sm sm:text-lg md:text-xl" />
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 md:flex-row xl:flex-row xl:gap-8">
            {leftGear.map((data) => (
              <div
                key={data.id}
                className="flex flex-col justify-center  h-auto w-auto"
              >
                <div className="rounded-md flex items-center justify-center h-[250px] md:h-[300px] w-[250px]">
                  <Image 
                    src={data.src} 
                    alt={data.name} 
                    width={250} 
                    height={250} 
                    className="object-contain" 
                  />
                </div>
                <div className="text-sm flex justify-between md:text-base">
                  <div className='flex flex-col  justify-between'>
                  <p className="text-gray-800">{data.name}</p>
                  <p className="text-gray-400 mt-1">{data.description}</p>

                  </div>
                  <p className="text-gray-800 mt-1">{data.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

       {/* Right Section */}
<div className="relative gap-y-3 flex flex-col items-end md:flex-row xl:flex-row xl:w-[48%]">
  {/* Right Navigation Controls */}
  <div className="absolute w-full top-[-20px] sm:top-[-10px] right-2 md:right-0 flex justify-end items-center gap-x-2 z-10">
    <p className="text-sm sm:text-base md:text-lg">Shop</p>
    <span className="bg-gray-100 p-2 rounded-full cursor-pointer">
      <MdKeyboardArrowRight className="text-sm sm:text-lg md:text-xl" />
    </span>
    <span className="bg-[#F5F5F5] p-2 rounded-full cursor-pointer">
      <MdKeyboardArrowLeft className="text-sm sm:text-lg md:text-xl" />
    </span>
  </div>

  <div className="grid grid-cols-2 gap-4 md:flex-row xl:flex-row xl:gap-8">
    {rightGear.map((data) => (
      <div
        key={data.id}
        className="flex flex-col justify-center h-auto w-auto"
      >
        <div className="rounded-md flex items-center justify-center h-[250px] md:h-[300px] w-[250px]">
          <Image 
            src={data.src} 
            alt={data.name} 
            width={250} 
            height={250} 
            className="object-contain" 
          />
        </div>
        <div className="text-sm flex justify-between md:text-base">
          <div className="flex flex-col justify-between">
            <p className="text-gray-800">{data.name}</p>
            <p className="text-gray-400 mt-1">{data.description}</p>
          </div>
          <p className="text-gray-800 mt-1">{data.price}</p>
        </div>
      </div>
    ))}
  </div>
</div>

        
      </div>
    </div>
  )
}

export default Gearup;