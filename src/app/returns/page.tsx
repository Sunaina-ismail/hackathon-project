import Link from 'next/link';
import React from 'react';

const Returns = () => {
  return (
    <div className="min-h-screen  py-20 md:px-6">
      <div className="max-w-4xl mx-auto  p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Returns & Exchanges</h1>
        <p className="mb-4 text-gray-700">
          We want you to be completely satisfied with your purchase. If you&apos;re not happy, here&apos;s how you can return or exchange your items.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">How to Return an Item</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Returns are accepted within 30 days of delivery.</li>
          <li>The item must be in its original condition (unused, unworn, unwashed, and with original tags attached).</li>
          <li>Visit our <Link href="/Contact" className="text-blue-600 hover:underline">Contact Us</Link> page to initiate a return request.</li>
        </ul>

      


        <h2 className="text-xl font-semibold mt-6 mb-4">Return Shipping</h2>
        <p className="text-gray-700">
          Customers are responsible for return shipping costs unless the return is due to a defective or incorrect item.
        </p>

      </div>
    </div>
  );
};

export default Returns;
