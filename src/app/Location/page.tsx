'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Location() {
  const [stores] = useState([
    {
      name: "Nike Well Collective - Dundrum",
      address: "Unit 33 Level 1 Dundrum Town Centre, Sandyford Road, Dundrum, D16 E0E8, IE",
      status: "Closed",
      opensAt: "9:00 AM",
    },
    {
      name: "Nike Store - Grafton Street",
      address: "12 Grafton Street, Dublin, D02 XT96, IE",
      status: "Open",
      opensAt: "9:30 AM",
    },
    {
      name: "Nike Outlet - Blanchardstown",
      address: "Blanchardstown Centre, Dublin, D15 P290, IE",
      status: "Closed",
      opensAt: "10:00 AM",
    },
    {
      name: "Nike Store - Liffey Valley",
      address: "Liffey Valley Shopping Centre, Dublin, D22 X5N7, IE",
      status: "Open",
      opensAt: "9:00 AM",
    },
    {
      name: "Nike Outlet - Kildare Village",
      address: "Kildare Village, Nurney Road, Kildare, R51 R299, IE",
      status: "Closed",
      opensAt: "10:00 AM",
    },
  ]);

  return (
    <div className="pt-16 md:pt-24 bg-gray-100 grid md:grid-cols-4">
     
      <div className="col-span-1 border-r px-6 py-4 border-gray-300 bg-white">
        <h1 className="text-2xl font-bold mb-6">Find a Nike Store</h1>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search Location"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <button className="w-full border border-gray-300 rounded-lg p-3 flex items-center justify-center bg-gray-100 hover:bg-gray-200">
            <span className="mr-2">Filter</span>
            <span>&#9881;</span>
          </button>
        </div>

        
        <div className="h-80 overflow-y-auto snap-y snap-mandatory">
          <ul className="space-y-10">
            {stores.map((store, index) => (
              <li key={index} className="snap-start">
                <h2 className="text-lg font-bold">{store.name}</h2>
                <p className="text-sm text-gray-500">{store.address}</p>
                <p className="text-sm">
                  <span className={`font-medium ${store.status === "Open" ? "text-green-500" : "text-red-500"}`}>
                    {store.status}
                  </span>{" "}
                  &bull; Opens at {store.opensAt}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <button className="text-blue-500 underline mt-6 hover:text-blue-700">View All Stores</button>
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
