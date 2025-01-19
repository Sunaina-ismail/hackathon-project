'use client';
import { useEffect, useState } from 'react';
import ProductCard from '@/components/Home/ProductCard';
import { fetchProducts } from '@/sanity/schemaTypes/data-fetch-utils';
import { AllProducts as Iproduct } from '@/sanity/types/type';
import FilterSidebar from '@/components/Home/FilterSidebar';
import PaginationComponent from '@/components/Home/Pagination';


export default function AllProducts() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [products, setProducts] = useState<Iproduct[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(''); 
  const [selectedSort, setSelectedSort] = useState<string>('default'); 
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 12;  

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

  const categories = [
    'Jersey',
    'Hoodies & Sweatshirts',
    'Jackets',
    'Trousers & Tights',
    'Top',
    'Tracksuits',
  ];

  const filteredProducts = products.filter(product =>
    selectedCategory ? product.category === selectedCategory : true
  );

  const sortedProducts = selectedSort === 'priceLowToHigh' 
    ? filteredProducts.sort((a, b) => a.price - b.price)
    : selectedSort === 'priceHighToLow'
    ? filteredProducts.sort((a, b) => b.price - a.price)
    : filteredProducts;

  // Pagination logic: Slice the sortedProducts to get the current page's products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);  // Calculate total pages

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen py-32 flex flex-col">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-4 border-b">
        <h1 className="text-lg font-bold">New Products</h1>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <button
            className="text-sm text-gray-500 hover:underline sm:hidden"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-1 relative">
        {/* Sidebar */}
        <FilterSidebar
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          isSidebarOpen={isSidebarOpen}
          setSidebarOpen={setSidebarOpen}
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
        />

        {/* Products Grid */}
        <main className="w-full md:w-3/4 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {currentProducts.length > 0 ? (
              currentProducts.map((product, index) => <ProductCard key={index} product={product} />)
            ) : selectedCategory && (
              <p className="text-center text-lg text-gray-500">
                No products available for {selectedCategory}
              </p>
            )}
            {!selectedCategory && products.length === 0 && (
              <p>Loading products...</p>
            )}
          </div>

          {/* Pagination Component */}
          <PaginationComponent 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange} 
          />
        </main>
      </div>
    </div>
  );
}
