
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";

import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  productName: string;
  slug: {
    current: string;
  };
}

const query = `*[_type == "product"]{
  _id,
  productName,
  "slug": slug.current
}`;

const SearchComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await client.fetch(query);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsDropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = products.filter((product) =>
        product.productName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
      setIsDropdownVisible(true);
    } else {
      setFilteredProducts([]);
      setIsDropdownVisible(false);
    }
  }, [searchQuery, products]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="relative flex items-center justify-center w-full px-2" ref={searchRef}>
      <div className=" flex items-center w-full max-w-lg">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          aria-label="Search Products"
          className="w-full p-1 md:p-2 bg-stone-200 border rounded-full focus:ring-2 focus:ring-gray-400 focus:outline-none sm:text-sm"
        />
        {/* <span className="absolute right-3 text-gray-500">
          <HiMiniMagnifyingGlass size={20} />
        </span> */}
        {searchQuery && (
          <button
            aria-label="Clear Search"
            onClick={() => setSearchQuery("")}
            className="absolute right-3 text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        )}
        {isDropdownVisible && (
          <div className="absolute left-0 right-0 top-full mt-2 bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Link
                  key={product._id}
                  href={`/product/${product.slug}`}
                  className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-50 block"
                  onClick={() => setIsDropdownVisible(false)}
                >
                  {product.productName}
                </Link>
              ))
            ) : (
              <div className="cursor-default select-none relative py-2 pl-3 pr-9 text-gray-500">
                No products found
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;