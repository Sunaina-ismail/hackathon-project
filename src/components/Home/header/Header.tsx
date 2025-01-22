"use client";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { SiNike } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Image from "next/image";
import CartIcon from "./Cart-Icon";
import SearchComponent from "./seacrhbar";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50">
      {/* Top Bar */}
      <div className="relative bg-stone-200 py-1 px-4 md:p-1 text-black w-full">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href={""} aria-label="Go to Home">
            <Image src={"/jumpman.png"} alt="Jumpman Logo" width={24} height={24} />
          </Link>

          <p className="hidden md:block bg-white p-1 md:p-1 absolute left-1/2 transform -translate-x-1/2 text-xs sm:text-sm md:text-md">
            <Link href="/" aria-label="Skip to Main Content"> Skip to Main Content </Link>
          </p>

          <div className="flex items-center space-x-1 text-sm">
            <Link href={"/Location"} aria-label="Find a store">Find a store</Link>
            <span>|</span>
            <Link href="/Contact" aria-label="Get help or support">Help</Link>
            <span>|</span>
            <Link href={"/Joinus"} aria-label="Join us now">Join us</Link>
            <span>|</span>
            <Link href={"/Login"} aria-label="Sign in to your account">Sign In</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex items-center bg-white justify-between py-1 md:py-3 px-4 md:px-8">
        <div className="flex items-center z-50 gap-2">
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          >
            {menuOpen ? (
              <IoClose className="text-3xl text-black" />
            ) : (
              <GiHamburgerMenu size={25} className="text-black z-50" />
            )}
          </button>
          <Link href="/" className="md:block hidden" aria-label="Nike logo - Go to Home">
            <SiNike size={40} />
          </Link>
        </div>

        <div className="hidden md:flex flex-row items-center">
          <ul className="flex items-center gap-6">
            <li className="hover:underline">
              <Link href={"/"} aria-label="Go to Home Page"> Home </Link>
            </li>
            <li className="hover:underline">
              <Link href={"/Allproducts"} aria-label="Shop all products"> Shop </Link>
            </li>
            <li className="hover:underline">
              <Link href="/Snkrs" aria-label="Explore SNKRS">SNKRS</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-2">
          <SearchComponent />
          <span>
            <Link href="/Cart" aria-label="View your shopping cart">
              <CartIcon />
            </Link>
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col gap-y-4 px-4 py-6">
            <li className="hover:underline">
              <Link href={"/"} aria-label="Go to Home Page"> Home </Link>
            </li>
            <li className="hover:underline">
              <Link href={"/Allproducts"} aria-label="Shop all products"> Shop </Link>
            </li>
            <li className="hover:underline">
              <Link href="/Snkrs" aria-label="Explore SNKRS">SNKRS</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
