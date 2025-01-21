import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full py-20 md:py-24">
    <div className="flex flex-col items-center justify-center space-y-[3px] bg-stone-300 py-1">
      <p className="font-medium text-sm sm:text-base md:text-lg">Hello Nike App</p>
      <p className="font-medium text-xs sm:text-sm md:text-base">Download the app to access everything Nike</p>
    </div>
  

      <div className="flex flex-col gap-y-6 sm:gap-y-12 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20">

        <div className="w-full max-w-[1200px]">
        <Image
            src="/hero-img.png"
            alt="hero-img"
            width={600}
            height={500}
            className="object-cover w-full h-auto"
            placeholder="blur"
            blurDataURL="/hero-img.png" 
            priority 
          />
        </div>

        <div className="text-center space-y-2 sm:space-y-3 md:space-y-4 px-4 sm:px-12 md:px-16 lg:px-20">
          <p className="text-xs sm:text-sm md:text-base font-medium">
            First Look
          </p>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide leading-tight">
            NIKE AIR MAX PULSE
          </h1>
          <p className="text-base sm:text-lg md:text-xl  text-gray-700 ">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse designed to push you past your limits and help you go to the
            max.
          </p>
        </div>

        <div className="flex flex-row items-center justify-center gap-y-4 sm:gap-y-0 gap-x-4 px-4 sm:px-0">
        <button className="px-3 py-2 sm:px-4 sm:py-2 md:px-8 md:py-4 hover:text-white hover:bg-black bg-text-white border-black border rounded-full font-medium  transition duration-200">
  Notify Me
</button>
<Link href={'/Allproducts'}>
  <button className="px-3 py-2 sm:px-4 sm:py-2 md:px-8 md:py-4 bg-white hover:text-white hover:bg-black bg-text-white border-black border rounded-full font-medium  transition duration-200">
    Shop Air Max
  </button>
</Link>

        </div>
      </div>
    </div>
  );
};

export default Hero;
