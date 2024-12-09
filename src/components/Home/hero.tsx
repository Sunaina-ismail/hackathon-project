import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="w-full py-28">
      {/* Top Section */}
      <div className="flex flex-col items-center justify-center space-y-[3px] bg-stone-300 py-1">
        <p className="font-medium text-sm sm:text-base md:text-lg">Hello Nike App</p>
        <p className="font-medium text-xs sm:text-sm md:text-base">Download the app to access everything Nike</p>
      </div>

      {/* Main Hero Section */}
      <div className="flex flex-col gap-y-6 sm:gap-y-12 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20">

        {/* Hero Image */}
        <div className="w-full max-w-[1200px]">
          <Image
            src={'/hero-img.png'}
            alt="hero-img"
            width={1200}
            height={500}
            className="object-cover w-full h-auto"
          />
        </div>

        {/* Title and description */}
        <div className="text-center space-y-2 sm:space-y-4 md:space-y-6 px-4 sm:px-12 md:px-16 lg:px-20">
          <p className="text-xs sm:text-sm md:text-base font-medium">First Look</p>
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide leading-tight">
            NIKE AIR MAX PULSE
          </h1>
          <p className="text-bse sm:text-xl md:text-2xl  text-gray-700 ">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
            designed to push you past your limits and help you go to the max.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-row items-center justify-center gap-y-4 sm:gap-y-0 gap-x-4 px-4 sm:px-0">
          {/* Notify Me Button */}
          <button className="px-3 py-2 sm:px-4 sm:py-2 md:px-8 md:py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition duration-200">
            Notify Me
          </button>
          {/* Shop Air Max Button */}
          <button className="px-3 py-2 sm:px-4 sm:py-2 md:px-8 md:py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition duration-200">
            Shop Air Max
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
