'use client'
import { useState } from 'react';
import Image from 'next/image';

export default function Allproduct() {
  const products = [
    {
      tag: 'Just In',
      name: "Nike Air Force 1 Mid '07",
      category: "Men's Shoes",
      price: '₹ 10,795.00',
      image: '/shoe-1.png',
    },
    {
      tag: 'Just In',
      name: 'Nike Court Vision Low Next Nature',
      category: "Men's Shoes",
      price: '₹ 4,995.00',
      image: '/shoe-2.png',
    },
   
    {
      tag: 'Just In',
      name: 'Nike Court Vision Low Next Nature',
      category: "Men's Shoes",
      price: '₹ 4,995.00',
      image: '/shoe-3.png',
    },
   
    {
      tag: 'Just In',
      name: 'Nike Court Vision Low Next Nature',
      category: "Men's Shoes",
      price: '₹ 4,995.00',
      image: '/shoe-4.png',
    },
   
    {
      tag: 'Just In',
      name: 'Nike Court Vision Low Next Nature',
      category: "Men's Shoes",
      price: '₹ 4,995.00',
      image: '/shoe-5.png',
    },
   
    {
      tag: 'Just In',
      name: 'Nike Court Vision Low Next Nature',
      category: "Men's Shoes",
      price: '₹ 4,995.00',
      image: '/shoe-6.png',
    },
   
    {
      tag: 'Just In',
      name: 'Nike Court Vision Low Next Nature',
      category: "Men's Shoes",
      price: '₹ 4,995.00',
      image: '/shoe-7.png',
    },
   
    {
      tag: 'Just In',
      name: 'Nike Court Vision Low Next Nature',
      category: "Men's Shoes",
      price: '₹ 4,995.00',
      image: '/shoe-8.png',
    },
   
    {
      tag: 'Just In',
      name: 'Nike Court Vision Low Next Nature',
      category: "Men's Shoes",
      price: '₹ 4,995.00',
      image: '/shoe-9.png',
    },
   
    {
      tag: 'Just In',
      name: 'Nike Court Vision Low Next Nature',
      category: "Men's Shoes",
      price: '₹ 4,995.00',
      image: '/shoe-10.png',
    },
   
    {
      tag: 'Just In',
      name: 'Nike Court Vision Low Next Nature',
      category: "Men's Shoes",
      price: '₹ 4,995.00',
      image: '/shoe-11.png',
    },
   
    {
      tag: 'Just In',
      name: 'Nike Court Vision Low Next Nature',
      category: "Men's Shoes",
      price: '₹ 4,995.00',
      image: '/shoe-12.png',
    },
   
    {
      tag: 'Just In',
      name: 'Nike Court Vision Low Next Nature',
      category: "Men's Shoes",
      price: '₹ 4,995.00',
      image: '/shoe-13.png',
    },
   
    {
      tag: 'Just In',
      name: 'Nike Court Vision Low Next Nature',
      category: "Men's Shoes",
      price: '₹ 4,995.00',
      image: '/shoe-14.png',
    },
   
    {
      tag: 'Just In',
      name: 'Nike Court Vision Low Next Nature',
      category: "Men's Shoes",
      price: '₹ 4,995.00',
      image: '/shoe-15.png',
    },
   
    {
      tag: 'Just In',
      name: 'Nike Court Vision Low Next Nature',
      category: "Men's Shoes",
      price: '₹ 4,995.00',
      image: '/shoe-16.png',
    },
   
    {
      tag: 'Just In',
      name: 'Nike Court Vision Low Next Nature',
      category: "Men's Shoes",
      price: '₹ 4,995.00',
      image: '/shoe-17.png',
    },
   
    {
      tag: 'Just In',
      name: 'Nike Court Vision Low Next Nature',
      category: "Men's Shoes",
      price: '₹ 4,995.00',
      image: '/shoe-18.png',
    },
   
    {
      tag: 'Just In',
      name: 'Nike Court Vision Low Next Nature',
      category: "Men's Shoes",
      price: '₹ 4,995.00',
      image: '/shoe-19.png',
    },
   
    {
      tag: 'Just In',
      name: 'Nike Court Vision Low Next Nature',
      category: "Men's Shoes",
      price: '₹ 4,995.00',
      image: '/shoe-20.png',
    },
   
    {
      tag: 'Just In',
      name: 'Nike Court Vision Low Next Nature',
      category: "Men's Shoes",
      price: '₹ 4,995.00',
      image: '/shoe-21.png',
    },
   
    {
      tag: 'Just In',
      name: 'Nike Court Vision Low Next Nature',
      category: "Men's Shoes",
      price: '₹ 4,995.00',
      image: '/shoe-22.png',
    },
   
    {
      tag: 'Just In',
      name: 'Nike Court Vision Low Next Nature',
      category: "Men's Shoes",
      price: '₹ 4,995.00',
      image: '/shoe-23.png',
    },
   
    {
      tag: 'Just In',
      name: 'Nike Court Vision Low Next Nature',
      category: "Men's Shoes",
      price: '₹ 4,995.00',
      image: '/shoe-24.png',
    },
   
    {
      tag: 'Just In',
      name: 'Nike Court Vision Low Next Nature',
      category: "Men's Shoes",
      price: '₹ 4,995.00',
      image: '/shoe-25.png',
    },
    {
      tag: 'Just In',
      name: 'Nike Court Vision Low Next Nature',
      category: "Men's Shoes",
      price: '₹ 4,995.00',
      image: '/shoe-26.png',
    },
    {
      tag: 'Just In',
      name: 'Nike Court Vision Low Next Nature',
      category: "Men's Shoes",
      price: '₹ 4,995.00',
      image: '/shoe-27.png',
    },
    {
      tag: 'Just In',
      name: 'Nike Court Vision Low Next Nature',
      category: "Men's Shoes",
      price: '₹ 4,995.00',
      image: '/rectangle (28).png',
    },
    {
      tag: 'Just In',
      name: 'Nike Court Vision Low Next Nature',
      category: "Men's Shoes",
      price: '₹ 4,995.00',
      image: '/rectangle (29).png',
    },
    {
      tag: 'Just In',
      name: 'Nike Court Vision Low Next Nature',
      category: "Men's Shoes",
      price: '₹ 4,995.00',
      image: '/rectangle (30).png',
    },
   
   
  ];

  const categories = [
    'Shoes',
    'Sports Bras',
    'Tops & T-Shirts',
    'Hoodies & Sweatshirts',
    'Jackets',
    'Trousers & Tights',
    'Shorts',
    'Tracksuits',
    'Jumpsuits & Rompers',
    'Skirts & Dresses',
    'Socks',
    'Accessories & Equipment',
  ];

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isGenderOpen, setGenderOpen] = useState(true);
  const [isKidsOpen, setKidsOpen] = useState(true);
  const [isPriceOpen, setPriceOpen] = useState(true);

  return (
    <div className="min-h-screen py-32 flex flex-col">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-4 border-b border-gray-300">
        <h1 className="text-lg font-bold">New (500)</h1>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <button
            className="text-sm text-gray-500 hover:underline sm:hidden"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? 'Hide Filters' : 'Show Filters'}
          </button>
          <select className="border rounded p-1 text-sm">
            <option>Sort By</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest Arrivals</option>
          </select>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-1 relative">
        {/* Sidebar */}
        <aside
          className={`fixed md:static bg-white z-20 w-3/4 md:w-1/4 p-4 border-r border-gray-300 transition-transform duration-300 ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0`}
        >
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li key={index} className="cursor-pointer hover:underline">
                {category}
              </li>
            ))}
          </ul>
          <hr className="my-4" />
          <div>
            <h3
              className="font-semibold flex justify-between items-center cursor-pointer"
              onClick={() => setGenderOpen(!isGenderOpen)}
            >
              Gender <span>{isGenderOpen ? '▲' : '▼'}</span>
            </h3>
            {isGenderOpen && (
              <ul className="mt-2 space-y-2">
                <li>
                  <input type="checkbox" id="men" /> <label htmlFor="men">Men</label>
                </li>
                <li>
                  <input type="checkbox" id="women" />{' '}
                  <label htmlFor="women">Women</label>
                </li>
                <li>
                  <input type="checkbox" id="unisex" />{' '}
                  <label htmlFor="unisex">Unisex</label>
                </li>
              </ul>
            )}
          </div>
          <hr className="my-4" />
          <div>
            <h3
              className="font-semibold flex justify-between items-center cursor-pointer"
              onClick={() => setKidsOpen(!isKidsOpen)}
            >
              Kids <span>{isKidsOpen ? '▲' : '▼'}</span>
            </h3>
            {isKidsOpen && (
              <ul className="mt-2 space-y-2">
                <li>
                  <input type="checkbox" id="boys" /> <label htmlFor="boys">Boys</label>
                </li>
                <li>
                  <input type="checkbox" id="girls" />{' '}
                  <label htmlFor="girls">Girls</label>
                </li>
              </ul>
            )}
          </div>
          <hr className="my-4" />
          <div>
            <h3
              className="font-semibold flex justify-between items-center cursor-pointer"
              onClick={() => setPriceOpen(!isPriceOpen)}
            >
              Shop By Price <span>{isPriceOpen ? '▲' : '▼'}</span>
            </h3>
            {isPriceOpen && (
              <ul className="mt-2 space-y-2">
                <li>
                  <input type="checkbox" id="under-2500" />{' '}
                  <label htmlFor="under-2500">Under ₹ 2,500.00</label>
                </li>
                <li>
                  <input type="checkbox" id="2500-5000" />{' '}
                  <label htmlFor="2500-5000">₹ 2,501.00 - ₹ 5,000.00</label>
                </li>
              </ul>
            )}
          </div>
        </aside>

        {/* Products Section */}
        <main className="w-full md:w-3/4 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, index) => (
              <div
                key={index}
                className=" p-4 text-center  "
              >
                {/* Product Image */}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className=" mb-2"
                />
                {/* Tag */}
                <span className="block text-sm font-bold text-yellow-600 mb-2">
                  {product.tag}
                </span>
                {/* Product Name */}
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                {/* Category */}
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                {/* Price */}
                <p className="font-bold text-gray-800">{product.price}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
