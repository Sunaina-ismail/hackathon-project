"use client";
import Link from "next/link";

import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { SiNike } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";

import { useState } from "react";
import Image from "next/image";
import CartIcon from "./Cart-Icon";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" fixed w-full z-50">
      <div className="relative bg-stone-200  py-1 px-4 md:p-1 text-black w-full ">
        <div className="max-w-6xl mx-auto  flex items-center justify-between">
          <Link href={"/"}>
            <Image src={"/jumpman.png"} alt={""} width={24} height={24} />
          </Link>

          <p className="hidden md:block bg-white p-1 md:p-1 absolute left-1/2 transform -translate-x-1/2 text-xs sm:text-sm md:text-md">
            <Link href="/"> Skip to Main Content </Link>
          </p>

          <div className="flex  items-center space-x-1 text-sm">
            <Link href={"/Location"}>Find a store</Link>
            <span>|</span>
            <Link href="/Contact">Help</Link>
            <span>|</span>
            <Link href={"/Joinus"}>Join us</Link>
            <span>|</span>
            <Link href={"/Login"}>Sign In</Link>
          </div>
        </div>
      </div>

      <div className="flex items-center  bg-white justify-between py-1 md:py-3 px-4  md:px-8 ">
        <div className="flex items-center z-50 gap-2">
          <button
            className="md:hidden focus:outline-none "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <IoClose className="text-3xl text-black" />
            ) : (
              <GiHamburgerMenu size={25} className="text-black z-50" />
            )}
          </button>
          <Link href="/" className="md:block hidden ">
            <SiNike size={40} />
          </Link>
        </div>

        <div className="hidden md:flex flex-row items-center">
          <ul className="flex  items-center  gap-6">
            <li className="hover:underline">
              <Link href={"/Allproducts"}> News & Featured </Link>
            </li>
            <li className="hover:underline">
              <Link href="/">Mens</Link>
            </li>
            <li className="hover:underline">
              <Link href="/">Women</Link>
            </li>
            <li className="hover:underline">
              <Link href="/">Kids</Link>
            </li>
            <li className="hover:underline">
              <Link href="/">Sales</Link>
            </li>
            <li className="hover:underline">
              <Link href="/">SNKRS</Link>
            </li>
          </ul>
        </div>

        <div className=" flex items-center space-x-2">
          <div className="relative  flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="text-sm p-1 md:p-2 bg-stone-200 border rounded-full focus:ring-2 focus:ring-gray-400 focus:outline-none w-40"
            />
            <span className="absolute right-3 text-gray-500">
              <HiMiniMagnifyingGlass size={20} />
            </span>
          </div>

          <span>
            <Link href="/Cart">
              <CartIcon />
            </Link>
          </span>

          <div></div>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col gap-y-4 px-4 py-6">
            <li>
              <Link href="/Allproducts">News & Featured</Link>
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
              <Link href="/">SNKRS</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
