'use client';
import { useEffect, useState, useMemo } from 'react';
import ProductCard from '@/components/Home/ProductCard';
import { fetchProducts } from '@/sanity/schemaTypes/data-fetch-utils';
import { AllProducts as Iproduct } from '@/sanity/types/type';

export default function SNKRS() {
  const [products, setProducts] = useState<Iproduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Use useMemo to memoize the filtered products (shoes) to avoid recalculating on every render
  const shoes = useMemo(() => {
    return products.filter((product) => product.category === 'Shoes');
  }, [products]); // Only re-run when products array changes

  return (
    <div className="min-h-screen py-32 md:px-6 flex flex-col">
      <h1 className="text-center text-2xl font-bold mb-8">SNKRS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 px-4">
        {loading ? (
          <p>Loading shoes...</p>
        ) : shoes.length > 0 ? (
          shoes.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        ) : (
          <p className="text-center text-lg text-gray-500">No shoes available</p>
        )}
      </div>
    </div>
  );
}
