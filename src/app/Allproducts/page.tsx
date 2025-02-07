
'use client';
import { useEffect, useState, useMemo } from 'react';
import ProductCard from '@/components/Home/ProductCard';
import { fetchProducts } from '@/sanity/schemaTypes/data-fetch-utils';
import { AllProducts as Iproduct } from '@/sanity/types/type';
import FilterSidebar from '@/components/Home/FilterSidebar';
import PaginationComponent from '@/components/Home/Pagination';
import { MdOutlineSearchOff } from 'react-icons/md';

export default function AllProducts() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [products, setProducts] = useState<Iproduct[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(''); 
  const [selectedSort, setSelectedSort] = useState<string>('default'); 
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 25;

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadProducts();
  }, []);

  const categories = useMemo(
    () => ['Shoes', 'Jersey', 'Hoodies & Sweatshirts', 'Jackets', 'Trousers & Tights', 'Top', 'Tracksuits', 'Accessories'],
    []
  );

  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      selectedCategory ? product.category === selectedCategory : true
    );
  }, [products, selectedCategory]);

  const sortedProducts = useMemo(() => {
    return selectedSort === 'priceLowToHigh'
      ? [...filteredProducts].sort((a, b) => a.price - b.price)
      : selectedSort === 'priceHighToLow'
      ? [...filteredProducts].sort((a, b) => b.price - a.price)
      : filteredProducts;
  }, [filteredProducts, selectedSort]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = useMemo(() => {
    return sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  }, [sortedProducts, indexOfFirstProduct, indexOfLastProduct]);

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen py-32 flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-4 border-b">
        <h1 className="text-lg font-bold">Categories</h1>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <button
            className="text-sm text-gray-500 hover:underline sm:hidden"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row flex-1">
        <FilterSidebar
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          isSidebarOpen={isSidebarOpen}
          setSidebarOpen={setSidebarOpen}
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
        />
        <main className="min-h-screen md:w-3/4  p-4 relative">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {currentProducts.length > 0 ? (
              currentProducts.map((product, index) => (
                <ProductCard key={product.slug || index} product={product} />
              ))
            ) : selectedCategory ? (
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                <MdOutlineSearchOff className="text-5xl text-gray-400" />
                <p className="text-lg text-gray-500">No products found</p>
              </div>
            ) : (
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                <p className="text-lg text-gray-500">Loading products...</p>
              </div>
            )}
          </div>
          {currentProducts.length > 0 && (
            <PaginationComponent
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </main>
      </div>
    </div>
  );
}
