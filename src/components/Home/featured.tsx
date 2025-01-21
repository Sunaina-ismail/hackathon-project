import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const Featured = () => {
  return (
    <div className="py-10 px-4 md:px-10 md:mt-10">
    <div className="py-4 font-semibold text-xl md:text-2xl">
      <h2>Featured</h2>
      </div>

     
      <div className='flex flex-col items-center gap-y-6 sm:gap-y-8 md:gap-y-8'>
      
        <div className="w-full max-w-[1200px]">
          <Image
            src={"/feature-img.png"}
            alt='feature-img'
            width={1200} 
            height={500}
            className="w-full h-auto sm:max-w-[1000px] md:max-w-[1200px]"
          />
        </div>
        
        
        <h1 className="text-lg sm:text-xl md:text-4xl font-semibold text-center leading-tight">
          STEP INTO WHAT FEELS GOOD
        </h1>

        <p className="text-lg text-center text-gray-600 leading-snug w-4/5 sm:w-3/5 md:w-2/5">
          Cause everyone should know the feeling of running in that perfect pair.
        </p>
        
  
        <div className="flex items-center gap-y-4 gap-x-4 ">
          <Link href={'/Snkrs'}><button className="px-3 sm:px-5 py-2 sm:py-3 md:px-6 md:py-3 hover:text-white bg-white hover:bg-black bg-text-white border-black border  rounded-full font-medium  transition">
            Find Your Shoe
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Featured
