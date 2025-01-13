import Image from 'next/image'
import React from 'react'

const Dontmiss = () => {
  return (
    <div className='w-full py-4 px-4 md:px-10 md:py-8'>

    <div className='   pb-4 font-semibold  text-2xl'>
      <p>Don&apos;t Miss</p>
    </div>


    <div className='flex flex-col items-center gap-y-6  md:gap-y-5'>
  
      <div className="w-full max-w-[1200px]">
        <Image
          src={"/miss-img.png"}
          alt='miss-img'
          width={1200} 
          height={500}
          className="w-full h-auto "
        />
      </div>
      
      
      <h1 className="text-xl mt-6 sm:text-xl md:text-4xl font-semibold text-center leading-tight">
      FLIGHT ESSENTIALS
      </h1>

      <p className="text-lg text-center text-gray-600 leading-snug ">
      Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
      </p>
      

      <div className="flex items-center gap-y-4 gap-x-4 ">
        <button className="px-3 sm:px-5 py-2 sm:py-3 md:px-6 md:py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition">
        Shop
        </button>
      </div>
    </div>
  </div>
  )
}

export default Dontmiss