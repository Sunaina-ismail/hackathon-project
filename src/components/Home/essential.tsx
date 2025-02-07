import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Essential = () => {
  const images = [
    { id: 1, src: "/essential-1.png", alt: "Image 1" },
    { id: 2, src: "/essential-2.png", alt: "Image 2" },
    { id: 3, src: "/essential-3.png", alt: "Image 3" },
  ];
  
  return (
    <div className="py-10">
    <div className="md:px-8 px-10 mb-4 font-bold text-xl md:text-3xl">
      <h2>The Essentials</h2>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 px-10">
        {images.map((image) => (
          <div key={image.id} className="relative flex items-center justify-center group">
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={600}
              className="object-cover w-[100%] h-auto sm:w-[350px] md:w-[400px] transition-transform duration-300 group-hover:scale-105"
            />
            
            
        <Link href={'/Allproducts'}><button className="absolute bottom-6 left-6 bg-white text-black px-4 py-2 rounded-full hover:bg-black hover:text-white text-sm sm:text-base md:text-lg lg:text-xl">
                Shop Now
              </button>
              </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Essential;
