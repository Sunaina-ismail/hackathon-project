
import Image from 'next/image';
import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const GearUp = () => {
  const menProducts = [
    {
      img: '/gearup-1.png',
      name: 'Nike Dri-FIT TechKnit Ultra',
      price: '₹ 3 895',
      desc: "Men's Short-Sleeve Running Top",
    },
    {
      img: '/gearup-2.png',
      name: 'Nike Dri-FIT Challenger',
      price: '₹ 2 495',
      desc: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
    },
  ];

  const womenProducts = [
    {
      img: '/gearup-3.png',
      name: 'Nike Dri-FIT ADV Run Division',
      price: '₹ 5 295',
      desc: "Women's Long-Sleeve Running Top",
    },
    {
      img: '/gearup-4.png',
      name: 'Nike Fast',
      price: '₹ 3 795',
      desc: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
    },
  ];

  return (
    <section className="my-16 md:my-24 px-4 sm:px-6 lg:px-10">
    
      <div className="mb-2">
        <h4 className="text-2xl  font-semibold">Gear Up</h4>
      </div>

  
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-10">
   
        <div>
       
       
             <div className='text-primary flex justify-end items-center mb-4 gap-x-1'>
               Shop Men&apos;s {""}
               <span className="bg-gray-300 md:p-2 rounded-full text-xl cursor-pointer">
                 <IoIosArrowBack />
               </span>
               <span className="bg-gray-300 md:p-2 rounded-full text-xl cursor-pointer">
                 <IoIosArrowForward />
               </span>
             </div>

    
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4">
            {menProducts.map((product, index) => (
              <div key={index} className="w-full px-2">
               
                  <div className="py-2 flex  items-center justify-center group">
                             <Image
                               src={product.img}
                               alt={product.name}
                               width={400}
                               height={350}
                               className="object-contain transition-transform duration-300 group-hover:scale-105"
                             />
                           </div>
                
                <div className="py-2">
                  <div className="flex items-center justify-between text-sm md:text-base font-medium">
                    <h4 className="text-base leading-tight">{product.name}</h4>
                    <span>{product.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-snug">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

   
        <div className="">
          {/* Navigation */}
        
              <div className='text-primary flex justify-end items-center mb-4 gap-x-1'>
                Shop Women&apos;s {""}
                <span className="bg-gray-300 md:p-2 rounded-full text-xl cursor-pointer">
                  <IoIosArrowBack />
                </span>
                <span className="bg-gray-300 md:p-2 rounded-full text-xl cursor-pointer">
                  <IoIosArrowForward />
                </span>
              </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4">
            {womenProducts.map((product, index) => (
              <div key={index} className="w-full px-2 ">
                {/* Product Image */}
                <div className="py-2 flex  items-center justify-center group">
                             <Image
                               src={product.img}
                               alt={product.name}
                               width={400}
                               height={350}
                               className="object-contain transition-transform duration-300 group-hover:scale-105"
                             />
                           </div>
                {/* Product Details */}
                <div className="py-2">
                  <div className="flex items-center justify-between text-sm md:text-base font-medium">
                    <h4 className="leading-tight">{product.name}</h4>
                    <span>{product.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-tight">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GearUp;
