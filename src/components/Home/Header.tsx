'use client'
import Link from "next/link";

import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { SiNike } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    
    <header className="bg-stone-200 fixed w-full z-50 ">
        <div className="">
  <div className="relative flex items-center   text-black w-full px-4 sm:px-12 md:px-16 lg:px-20 xl:px-28 h-12">
  {/* Centered Content */}
  <Image src={'/jumpman.png'} alt={''} width={24} height={24}/>

  <p className=" bg-white p-2 absolute left-1/2 transform -translate-x-1/2 text-xs sm:text-sm md:text-md">
    Skip to Main Content
  </p>

  {/* Right-aligned Links */}
  <div className="hidden sm:absolute right-4 sm:flex items-center space-x-1 text-xs sm:text-sm">
    <Link href={"/Allproducts"}>Find a store</Link>
    <span>|</span>
    <Link href="/Contact">Help</Link>
    <span>|</span>
    <Link href={"/Joinus"}> <span>Join us</span></Link>
    
    <Link href={"/Login"}>sign In</Link>
  </div>
</div>
</div>

     
      <div className="flex items-center bg-white justify-between py-3 px-4 md:px-10 lg:px-20">
        {/* Logo */}
        <div className="text-4xl">
          <Link href="/">
            <SiNike />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex flex-row gap-x-40 items-center">
          <ul className="flex items-center gap-x-10">
            <li>
              <Link href="/">News & Featured</Link>
            </li>
            <li>
              <Link href="/">Mens</Link>
            </li>
            <li>
              <Link href="/">Women</Link>
            </li>
            <li>
              <Link href="/">Kids</Link>
            </li>
            <li>
              <Link href="/">Sales</Link>
            </li>
            <li>
              <Link href="/">SKNRS</Link>
            </li>
          </ul>

          {/* Search Bar */}
          <div className="relative flex items-center ">
            <span className="absolute left-3 text-gray-500">
              <HiMiniMagnifyingGlass className="text-xl" />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 bg-stone-200 border rounded-full focus:ring-2 focus:ring-gray-400 focus:outline-none w-40"
            />
          </div>
        </div>

        {/* Icons for Wishlist and Bag */}
        <div className=" hidden md:flex items-end space-x-2">
          <span>
            <Link href="/components/wishlist">
              <IoMdHeartEmpty className="text-2xl md:text-xl lg:text-2xl" />
            </Link>
          </span>
          <span>
            <Link href="/components/cart">
              <IoBagOutline className="text-2xl md:text-xl lg:text-2xl" />
            </Link>
          </span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <IoClose className="text-3xl" />
            ) : (
              <GiHamburgerMenu className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col gap-y-4 px-4 py-6">
            <li>
              <Link href="/">News & Featured</Link>
            </li>
            <li>
              <Link href="/">Mens</Link>
            </li>
            <li>
              <Link href="/">Women</Link>
            </li>
            <li>
              <Link href="/">Kids</Link>
            </li>
            <li>
              <Link href="/">Sales</Link>
            </li>
            <li>
              <Link href="/">SKNRS</Link>
            </li>
          </ul>
          <div className="px-4">
            <div className="relative flex items-center">
              <span className="absolute left-3 text-gray-500">
                <HiMiniMagnifyingGlass className="text-xl" />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 bg-stone-200 border rounded-full focus:ring-2 focus:ring-gray-400 focus:outline-none w-full"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
