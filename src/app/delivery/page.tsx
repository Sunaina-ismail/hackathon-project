import Link from 'next/link';
import React from 'react';

const Delivery = () => {
  return (
    <div className="min-h-screen py-20 md:px-6">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Delivery Information</h1>
        <p className="mb-4 text-gray-700">
          Learn more about our delivery services, times, and options to make sure your order reaches you at your convenience.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Delivery Options</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Standard Delivery: Delivered within 5-7 business days.</li>
          <li>Express Delivery: Delivered within 1-2 business days.</li>
          <li>Free Delivery: Available on orders above $100.</li>
        </ul>

       
        <h2 className="text-xl font-semibold mt-6 mb-4">Delivery Charges</h2>
        <p className="text-gray-700">
          Delivery charges vary based on your location and delivery option selected at checkout. Final charges will be displayed before completing the payment.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-700">
          If you have any queries regarding delivery, visit our <Link href="/Contact" className="text-blue-600 hover:underline">Contact Us</Link> page to get in touch with our support team.
        </p>
      </div>
    </div>
  );
};

export default Delivery;
