import Image from 'next/image';
import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Bestair = () => {
  const shoes = [
    { id: 1, src: "/bestair-1.png", name: "Nike Max Air Pulse", price: "₹ 13 995", description: "Womens shoes" },
    { id: 2, src: "/bestair-1.png", name: "Nike Max Air Pulse", price: "₹ 14 999", description: "Mens shoes" },
    { id: 3, src: "/bestair-1.png", name: "Nike Max Air Pulse", price: "₹ 11 495", description: "Mens shoes" },
    { id: 4, src: "/bestair-2.png", name: "Nike Max Air Pulse", price: "₹ 9 995", description: "Mens shoes" },
  ];

  return (
    <section className="mx-auto sm:space-y-4 md:space-y-5 lg:space-y-6 py-6">
      {/* Header Section */}
      <div className="flex justify-between items-end md:w-full px-4 md:px-8 mb-4 md:mb-6">
        <div className="flex justify-between items-start gap-x-4 w-[60%] sm:w-[70%] md:w-[50%]">
          <div className="flex flex-col justify-between px-4 space-y-2 md:space-y-4">
            <h2 className="font-medium text-base sm:text-2xl md:text-xl">Best of Air Max</h2>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="flex items-center justify-between px-4 md:space-x-2">
          <p>Shop</p>
          <span className="bg-gray-100 p-2 rounded-full">
            <MdKeyboardArrowRight className="text-base sm:text-lg md:text-xl" />
          </span>
          <span className="bg-[#F5F5F5] p-2 rounded-full">
            <MdKeyboardArrowLeft className="text-base sm:text-lg md:text-xl" />
          </span>
        </div>
      </div>

      
      <div className="flex flex-row flex-wrap gap-4 px-4 md:px-6 sm:px-8 lg:px-4 mt-2">
        {shoes.map((shoe) => (
          <div 
            key={shoe.id} 
            className="flex flex-col sm:w-[47%] md:w-[30%] lg:w-[23%] w-full">
            {/* Shoe */}
            <div className="rounded-md flex items-center justify-center h-[250px] sm:h-[300px] md:h-[350px] w-full">
              <Image 
                src={shoe.src} 
                alt={`${shoe.name}`} 
                width={250} 
                height={250} 
                className="object-contain" 
              />
            </div>
            
            <div className="flex items-center gap-x-8 sm:gap-x-12 md:gap-x-16 mt-2 px-8 sm:px-0">
              <p className="text-sm sm:text-sm md:text-base text-gray-800">{shoe.name}</p>
              <span className="text-sm sm:text-sm md:text-base text-gray-800">{shoe.price}</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-sm md:text-base px-8 sm:px-0">{shoe.description}</p>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Bestair;
