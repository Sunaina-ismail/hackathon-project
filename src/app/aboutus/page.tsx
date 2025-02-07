import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <div className=" min-h-screen bg-red-300  flex flex-col items-center justify-center md:px-6 py-20">
      <div className="max-w-5xl flex flex-col lg:flex-row items-center  overflow-hidden">
        <div className="lg:w-1/2 p-6 md:p-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center lg:text-left">
            Elevate Your Game, Define Your Style
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Welcome to <span className="font-bold">Nike</span>, where we combine sports and innovation to help you perform your best. We are not just a brand – we are a family that believes in hard work, never giving up, and always aiming higher.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-600 mb-6">
            At <span className="font-bold">Nike</span>, we are all about sports and style. We create high-quality sportswear and lifestyle products to help you stay active and look great. Our goal is to inspire you to chase your dreams, be yourself, and achieve your goals – whether you&apos;re on the field or just living life.
          </p>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/nike-about.avif"
            alt="About Us"
            width={500}
            height={500}
         className="w-[500px] h-[500px]"
          />
        </div>
      </div>
      <div className="mt-10 text-center">
        <Link href={'/Allproducts'}><button className="bg-white border border-black rounded-full text-black px-6 py-3  hover:bg-black hover:text-white transition">
          View Shop
        </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;