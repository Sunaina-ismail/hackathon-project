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
        <h4 className="text-2xl font-semibold">Gear Up</h4>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {gearUpProducts.length > 0 ? (
          gearUpProducts.map((product, index) => (
            <div key={index} className="p-2">
          
              <Link href={`/product/${product.slug}`}>
                <div className="py-2 flex items-center justify-center cursor-pointer">
                  <Image
                    src={product.image}
                    alt={product.slug}
                    width={500}
                    height={500}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="font-medium text-lg">{product.productName}</h3>
                <span className="block text-sm text-gray-500">{product.category}</span>
                <p className="font-bold text-gray-800">Rs.{product.price}</p>
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
