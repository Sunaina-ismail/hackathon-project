'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';  
import { AllProducts } from '@/sanity/types/type';

export const gearUpQuery = `*[_type == "product" && "Gear Up" in tags]{
  _id,
  productName,
  price,
  category,
  slug,
  color,
  "imageUrl": image.asset->url
}`;

export default function GearUp() {
  const [gearUpProducts, setGearUpProducts] = useState<AllProducts[]>([]);

  useEffect(() => {
    const fetchGearUpProducts = async () => {
      try {
        const result = await client.fetch(gearUpQuery);
        const formattedProducts = result.map((product: any) => ({
          ProductName: product.productName,
          category: product.category,
          price: product.price.toString(),
          image: product.imageUrl,
          slug: product.slug?.current,  
        }));

        setGearUpProducts(formattedProducts);
      } catch (error) {
        console.error('Error fetching Gear Up products:', error);
      }
    };

    fetchGearUpProducts();
  }, []);

  return (
    <section className="my-16 md:my-24 px-4 sm:px-6 lg:px-10">
      <div className="mb-2">
        <h2 className="text-xl md:text-3xl font-bold">Gear Up</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {gearUpProducts.length > 0 ? (
          gearUpProducts.map((product, index) => (
            <div key={index} className="p-2 group">
              <Link href={`/product/${product.slug}`}>
                <div className="py-2 flex items-center justify-center cursor-pointer overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.slug}
                    width={400}
                    height={400}
                    className="rounded-md transition-transform duration-300 group-hover:scale-105"
                    placeholder="blur"
                    blurDataURL={product.image}
                    loading="lazy"
                  />
                </div>
                <h3 className="font-medium text-lg mt-2 transition-colors duration-300 group-hover:text-blue-600">
                  {product.productName}
                </h3>
                <span className="block text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-700">
                  {product.category}
                </span>
                <p className="font-bold text-gray-800 transition-colors duration-300 group-hover:text-black">
                  Rs.{product.price}
                </p>
              </Link>
            </div>
          ))
        ) : (
          <p>Loading Gear Up products...</p>
        )}
      </div>
    </section>
  );
}