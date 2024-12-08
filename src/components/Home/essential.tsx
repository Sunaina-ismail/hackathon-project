import Image from 'next/image';
import React from 'react';

const Essential = () => {
  const images = [
    { id: 1, src: "/essential-1.png", alt: "Image 1" },
    { id: 2, src: "/essential-2.png", alt: "Image 2" },
    { id: 3, src: "/essential-3.png", alt: "Image 3" },
  ];
  
  return (
    <div className="py-6">
      {/* Heading Section */}
      <div className="px-4 md:px-8 py-2 text-lg font-medium sm:text-xl md:text-2xl">
        <p>The Essentials</p>
      </div>

      {/* Parent Flexbox Wrapper with responsiveness */}
      <div className="flex flex-col sm:flex-row gap-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative flex items-center justify-center"
          >
            {/* Responsive Image with dynamic sizes */}
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={600}
              className="object-cover w-[90%] h-auto sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px]"
            />
            {/* Render button */}
            <button className="absolute bottom-6 left-6 bg-white text-black px-4 py-2 rounded-full hover:bg-black hover:text-white text-sm sm:text-base md:text-lg lg:text-xl">
              Shop Now
            </button>
          </div>
        ))}
      <div className="flex justify-center">
    </div>
      
     </div>
     </div>
    
  )
};
export default Essential
