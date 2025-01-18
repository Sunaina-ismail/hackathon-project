'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { AllProducts } from '@/sanity/types/type';
import Link from 'next/link';

export const allProductsQuery = `*[_type == "product"]{
  _id,
  productName,
  price,
  "slug": slug.current,
  category,
  status,
  "imageUrl": image.asset->url
}`;

export default function Allproduct() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isGenderOpen, setGenderOpen] = useState(true);
  const [products, setProducts] = useState<AllProducts[]>([]); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await client.fetch(allProductsQuery);
        const formattedProducts = result.map((product: any) => ({
          name: product.productName, 
          category: product.category,
          price: product.price.toString(), 
          image: product.imageUrl,
          slug:product.slug, 
          status: product.status, 
        }));

        console.log(formattedProducts);
        setProducts(formattedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  
  const categories = [
    'Shoes',
    'Sports Bras',
    'Top',
    'Hoodies & Sweatshirts',
    'Jackets',
    'Trousers & Tights',
    'Jersey',
    'Tracksuits',   
    
  ];

  return (
    <div className="min-h-screen py-32 flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-4 border-b border-gray-300">
        <h1 className="text-lg font-bold">New Products</h1>
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
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row flex-1 relative">
        <aside
          className={`absolute sm:fixed md:static bg-white z-40 w-3/4 md:w-1/4 p-4 border-r border-gray-300 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
        >
          <div className="h-64 overflow-y-auto">
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index} className="cursor-pointer hover:underline">
                  {category}
                </li>
              ))}
            </ul>
          </div>

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
                  <input type="checkbox" id="women" /> <label htmlFor="women">Women</label>
                </li>
                <li>
                  <input type="checkbox" id="unisex" /> <label htmlFor="unisex">Unisex</label>
                </li>
              </ul>
            )}
          </div>

         
        </aside>

        <main className="w-full md:w-3/4 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {products.length > 0 ? (
              products.map((product: AllProducts, index: number) => (
                <div key={index} className="p-2 border rounded shadow-sm">
                <Link href={`/product/${product.slug}`}>
                    <Image
                      src={product.image}
                      alt={product.productName}
                      width={700}
                      height={700}
                      className="mb-2 object-cover"
                    />
                    </Link>
                 

                  <span className="text-sm font-medium text-yellow-600 ">{product.status}</span>
                  <h3 className="font-semibold text-lg mb-1">{product.productName}</h3>
                  <span className="block text-sm text-gray-500 mb-2">
                    {product.category}
                  </span>

                
                  <p className="font-bold text-gray-800">$ {product.price}</p>
                </div>
              ))
            ) : (
              <p>Loading products...</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
