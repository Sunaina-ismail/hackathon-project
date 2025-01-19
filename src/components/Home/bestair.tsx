


'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { AllProducts } from '@/sanity/types/type';
import Link from 'next/link';

export const bestAirQuery = `*[_type == "product" && "Best of Air Max" in tags]{
  _id,
  productName,
  price,
  category,
  slug,
  "imageUrl": image.asset->url
}`;

export default function Bestair() {
  const [bestAirProducts, setBestAirProducts] = useState<AllProducts[]>([]);

  useEffect(() => {
    const fetchBestAirProducts = async () => {
      try {
        const result = await client.fetch(bestAirQuery);
        console.log(result); 
  
        const formattedProducts = result.map((product: any) => ({
          ProductName: product.productName,
          category: product.category,
          price: product.price.toString(),
          color:product.color,
          image: product.imageUrl,
          slug: product.slug?.current || "", 
        }));
  
        setBestAirProducts(formattedProducts);
      } catch (error) {
        console.error('Error fetching Best of Air Max products:', error);
      }
    };
  
    fetchBestAirProducts();
  }, []);
  

  return (
    <section className="px-4 md:px-6">
    <div className="mb-4">
      <h4 className="text-2xl font-semibold">Best of Air Max</h4>
    </div>
  
   
    <div className="flex overflow-x-auto space-x-4 scrollbar-thumb-gray-500 scrollbar-track-gray-300 scrollbar-thin">
      {bestAirProducts.length > 0 ? (
        bestAirProducts.map((product, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 p-2 border rounded-md"
          >
            <Link href={`/product/${product.slug}`}>
              <div className="py-2 flex items-center  justify-center cursor-pointer">
                <Image
                  src={product.image}
                  alt={product.slug}
                  width={400}
                  height={400}
                  className="rounded-md"
                />
              </div>
              <h3 className="font-semibold text-lg">{product.productName}</h3>
              <span className="block text-sm text-gray-500">
                {product.category}
              </span>
              <p className="text-sm font-bold">Rs.{product.price}</p>
            </Link>
          </div>
        ))
      ) : (
        <p>Loading Best of Air Max products...</p>
      )}
    </div>
  </section>
  
  );
}
