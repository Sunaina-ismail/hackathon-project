'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { AllProducts } from '@/sanity/types/type';

export const NewArrival = `*[_type == "product" && "New Arrivals" in tags]{
  _id,
  productName,
  price,
  category,
  slug,
  color,
  "imageUrl": image.asset->url
}`;

export default function NewArrivals() {
  const [newArrivalProducts, setNewArrivalProducts] = useState<AllProducts[]>([]);

  useEffect(() => {
    const fetchNewArrivalProducts = async () => {
      try {
        const result = await client.fetch(NewArrival);
        const formattedProducts = result.map((product: any) => ({
          productName: product.productName,
          category: product.category,
          price: product.price.toString(),
          image: product.imageUrl,
          slug: product.slug?.current,
        }));

        setNewArrivalProducts(formattedProducts);
      } catch (error) {
        console.error('Error fetching New Arrivals products:', error);
      }
    };

    fetchNewArrivalProducts();
  }, []);

  return (
    <section className="my-16 md:my-24 px-4 sm:px-6 lg:px-10">
      <div className="mb-2">
        <h2 className="text-xl md:text-3xl font-bold">New Arrivals</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {newArrivalProducts.length > 0 ? (
          newArrivalProducts.map((product, index) => (
            <div key={index} className="p-2">
              <Link href={`/product/${product.slug}`}>
                <div className="py-2 flex items-center justify-center cursor-pointer">
                  <Image
                    src={product.image}
                    alt={product.slug}
                    width={400}
                    height={400}
                    className="rounded-md"
                    placeholder="blur"
                    blurDataURL={product.image}
                    loading="lazy"
                  />
                </div>
                <h3 className="font-medium text-lg">{product.productName}</h3>
                <span className="block text-sm text-gray-500">{product.category}</span>
                <p className="font-bold text-gray-800">Rs.{product.price}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>Loading New Arrivals products...</p>
        )}
      </div>
    </section>
  );
}