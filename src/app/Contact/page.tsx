import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMobileScreenButton } from 'react-icons/fa6';
import { MdTextsms } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';
import { GiParachute } from 'react-icons/gi';

const Contactpage = () => {
  return (
    <div className='flex flex-col items-center bg-gray-50 min-h-screen'>
      {/* Heading Section */}
      <h2 className='uppercase text-xl font-bold mt-8'>Get Help</h2>

     
      <div className="flex px-4 py-3 rounded-md w-[90%] md:w-[30%] border-2 border-text-secondary-gray mt-4 justify-between items-center">
        <input
          className="focus-visible:outline-none w-[64%] md:w-[70%]"
          type="text"
          placeholder="What can we help you with?"
        />
        <AiOutlineSearch className="text-gray-600 w-6 h-6" />
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 px-4 md:px-8 py-8  text-gray-800 w-full">
   
        <div className='col-span-12 md:col-span-9 border-r-[1.3px] md:border-r-0 pr-4 md:pr-8 border-text-secondary-gray'>
 
          <h2 className="text-xl md:text-2xl font-bold mb-4">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
          <p className="mb-4">
            We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
          </p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
            <li>
              If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.
            </li>
            <li>Apple Pay</li>
          </ul>

          {/* FAQs Section */}
          <h3 className="text-xl font-semibold mb-4">FAQs</h3>
          <div className="mb-6">
            <h4 className="text-lg font-bold mb-2">Does my card need international purchases enabled?</h4>
            <p>
              Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if
              international purchases need to be enabled.
            </p>
            <p className="mt-2 text-sm text-gray-600">Please note, some banks may charge a small transaction fee for international orders.</p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-bold mb-2">Can I pay for my order with multiple methods?</h4>
            <p>No, payment for Nike orders can't be split between multiple payment methods.</p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-bold mb-2">What payment method is accepted for SNKRS orders?</h4>
            <p>You can use any accepted credit card to pay for your SNKRS order.</p>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-bold mb-2">Why don't I see Apple Pay as an option?</h4>
            <p>
              To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the
              latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use
              Safari to use Apple Pay on Nike.com.
            </p>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="hidden md:block md:col-span-3 p-4  border-l md:border-none space-y-4">
          <h2 className="uppercase font-bold text-xl text-center">Contact Us</h2>
          <div className="flex flex-col items-center space-y-4 text-center">
            <FaMobileScreenButton className="text-gray-600 w-10 h-10" />
            <p className="font-semibold">000 800 919 0566</p>
            <p>Products & Orders: 24 hours a day, 7 days a week</p>
            <p>Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <MdTextsms className="text-gray-600 w-10 h-10" />
            <p>24 hours a day</p>
            <p>7 days a week</p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <TfiEmail className="text-gray-600 w-10 h-10" />
            <p>We&apos;ll reply within</p>
            <p>five business days</p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <GiParachute className="text-gray-600 w-10 h-10" />
            <p className="font-semibold">STORE LOCATOR</p>
            <p>Find Nike retail stores near you</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
