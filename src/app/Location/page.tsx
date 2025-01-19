'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Location() {
  const [stores] = useState([
    {
      name: "Nike Store - Karachi Saddar",
      address: "Block 9, Saddar, Karachi, Pakistan",
      status: "Open",
      opensAt: "10:00 AM",
    },
    {
      name: "Nike Store - Karachi Korangi",
      address: "Korangi, Karachi, Pakistan",
      status: "Closed",
      opensAt: "11:00 AM",
    },
    {
      name: "Nike Store - Karachi Gulshan-e-Iqbal",
      address: "Gulshan-e-Iqbal, Karachi, Pakistan",
      status: "Open",
      opensAt: "10:30 AM",
    },
    {
      name: "Nike Store - Karachi DHA",
      address: "DHA Phase 5, Karachi, Pakistan",
      status: "Closed",
      opensAt: "9:30 AM",
    },
    {
      name: "Nike Store - Karachi Karachi Airport",
      address: "Jinnah International Airport, Karachi, Pakistan",
      status: "Open",
      opensAt: "24/7",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStores, setFilteredStores] = useState(stores);

  const handleSearch = () => {
    const filtered = stores.filter(store =>
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.address.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredStores(filtered.length > 0 ? filtered : [{ name: 'No service available here', address: '', status: '', opensAt: '' }]);
  };

  return (
    <div className="pt-16 md:pt-24 bg-gray-100 grid md:grid-cols-4">
      <div className="col-span-1 border-r px-6 py-4 border-gray-300 bg-white">
        <h1 className="text-2xl font-bold mb-6">Find a Nike Store</h1>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search Location"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <button 
            onClick={handleSearch}
            className="w-full border border-gray-300 rounded-lg p-3 flex items-center justify-center bg-gray-100 hover:bg-gray-200">
            <span className="mr-2">Search</span>
          </button>
        </div>

        <div className="h-80 overflow-y-auto snap-y snap-mandatory">
          <ul className="space-y-10">
            {filteredStores.map((store, index) => (
              <li key={index} className="snap-start">
                <h2 className="text-lg font-bold">{store.name}</h2>
                <p className="text-sm text-gray-500">{store.address}</p>
                <p className="text-sm">
                  {store.name === 'No service available here' ? (
                    <span className="font-medium text-red-500">{store.name}</span>
                  ) : (
                    <>
                      <span className={`font-medium ${store.status === "Open" ? "text-green-500" : "text-red-500"}`}>
                        {store.status}
                      </span>{" "}
                      &bull; Opens at {store.opensAt}
                    </>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="col-span-3 relative bg-gray-100">
        <Image
          src="/map.webp"
          width={100}
          height={100}
          alt="map"
          className="h-full w-full border-0"
          loading="lazy"
        />
      </div>
    </div>
  );
}
