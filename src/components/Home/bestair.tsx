'use client'
import React from 'react';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';

const Bestair = () => {
  const shoes = [
    { id: 1, src: "/bestair-1.png", name: "Nike Max Air Pulse", price: "₹ 13 995", description: "Women's shoes" },
    { id: 2, src: "/bestair-1.png", name: "Nike Max Air Pulse", price: "₹ 14 999", description: "Men's shoes" },
    { id: 3, src: "/bestair-1.png", name: "Nike Max Air Pulse", price: "₹ 11 495", description: "Men's shoes" },
    { id: 4, src: "/bestair-2.png", name: "Nike Max Air Pulse", price: "₹ 9 995", description: "Men's shoes" },
  ];

  return (
    <section className=" px-6 md:px-10">
      
      <div className="flex justify-between items-center ">
        <h2 className="text-2xl font-semibold">Best of Air Max</h2>
      </div>

      <div className='text-primary flex  justify-end items-center gap-x-1'>
        Shop 
        <span className="bg-gray-300 md:p-2 rounded-full text-xl cursor-pointer">
          <IoIosArrowBack />
        </span>
        <span className="bg-gray-300 md:p-2 rounded-full text-xl cursor-pointer">
          <IoIosArrowForward />
        </span>
      </div>

   
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="flex flex-col items-center">
            <div className="py-2 flex  items-center justify-center  group">
                <Link href={"/Productdetails"}><Image
                src={shoe.src}
                alt={shoe.name}
                width={350}
                height={350}
                className="object-contain transition-transform duration-300 group-hover:scale-105 "
              /> </Link>
            </div>
            <div className="w-full ">
          
              <div className="flex justify-between ">
                <p className=" md:text-base font-semibold">{shoe.name}</p>
                <p className=" md:text-base font-semibold">{shoe.price}</p>
              </div>
             
              <div className="text-sm  text-gray-600">
                <p>{shoe.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bestair;
