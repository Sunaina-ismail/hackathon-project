
import Link from 'next/link';
import React from 'react';
import { FaGithub,  FaLinkedinIn } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-black w-full text-white py-10 px-6">
      <div className="container mx-auto lg:grid lg:grid-cols-4 lg:gap-8">
        <div className="mb-4 sm:mb-0">
          <h3 className="text-base font-semibold mb-4">FIND A STORE</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/Joinus" className="hover:underline">Become Link Member</Link></li>
            <li><Link href="/Login" className="hover:underline">Sign In for Email</Link></li>
          </ul>
        </div>
        <div className="mb-4 sm:mb-0">
          <h3 className="text-base font-semibold mb-4">LINKS</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/Allproducts" className="hover:underline">Shop</Link></li>
            <li><Link href="/aboutus" className="hover:underline">About</Link></li>
            <li><Link href="/Contact" className="hover:underline">Contact</Link></li>
      
          </ul>
        </div>

        <div className="mb-4 sm:mb-0">
          <h3 className="text-base font-semibold mb-4">HELP</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/delivery" className="hover:underline">Delivery</Link></li>
            <li><Link href="/returns" className="hover:underline">Returns</Link></li>
            <li><Link href="/paymentOptions" className="hover:underline">Payment Options</Link></li>
            <li><Link href="/privacyPolicy" className="hover:underline">Privacy policy</Link></li>
          </ul>
        </div>

       

        <div className="flex justify-start lg:justify-end items-start gap-4">
         
          <FaLinkedinIn className="text-lg cursor-pointer hover:text-gray-400" />
          <FaGithub className="text-lg cursor-pointer hover:text-gray-400" />
         
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-between items-center text-xs text-gray-400 lg:flex-nowrap lg:gap-4">
        <div className="flex items-center gap-2">
          <IoLocationOutline className="text-sm" />
          <p>Pakistan</p>
          <p>© 2023 Nike, Inc. All Rights Reserved</p>
        </div>

        <div className="flex flex-wrap gap-4 mt-4 lg:mt-0 lg:justify-end sm:justify-start">
          <Link href="#" className="hover:underline">Guides</Link>
          <Link href="#" className="hover:underline">Terms of Sale</Link>
          <Link href="#" className="hover:underline">Terms of Use</Link>
          <Link href="/privacyPolicy" className="hover:underline">Nike Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
