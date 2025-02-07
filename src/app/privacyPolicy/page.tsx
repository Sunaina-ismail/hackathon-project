import Link from 'next/link';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-6 py-24 md:py-26 space-y-8 text-custom-green">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Introduction</h2>
        <p>
          At <strong>NIKE</strong>, we are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website or make purchases on our platform.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Information We Collect</h2>
        <p>
          We may collect the following types of personal information when you use our website:
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li>Personal details like your name, email address, and phone number.</li>
          <li>Billing and shipping information (address, payment details, etc.)</li>
          <li>Transaction history, including purchase details and payment information.</li>
          <li>Data related to your browsing activity on our website, such as your IP address and device information.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
        <p>
          We use the information we collect to:
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li>Process and manage your orders.</li>
          <li>Provide customer support and respond to your queries.</li>
          <li>Improve our website and services based on user behavior.</li>
          <li>Communicate promotional offers, updates, and important information.</li>
          <li>Ensure the security of our website and prevent fraud.</li>
        </ul>
      </section>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How We Protect Your Information</h2>
        <p>
          We implement a variety of security measures to protect your personal information, including:
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li>Encryption to secure sensitive information.</li>
          <li>Secure payment processing systems.</li>
          <li>Access control to limit who can access your personal data.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Third-Party Disclosure</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties. However, we may share your data with trusted third-party service providers who help us operate our business and fulfill orders (such as payment processors, delivery services, etc.). These third parties are required to protect your information in line with this Privacy Policy.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Cookies</h2>
        <p>
          We use cookies to enhance your experience on our website. Cookies are small text files stored on your device that help us remember your preferences and improve website functionality. You can control cookie settings through your browser, but please note that disabling cookies may affect the functionality of certain features on our site.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information. If you would like to exercise these rights, please contact us using the information provided on our <a href="/contact" className="text-blue-600 hover:underline">Contact Us</a> page.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Changes to This Privacy Policy</h2>
        <p>
          We reserve the right to update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Please check this page regularly to stay informed about how we protect your personal information.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p>
          If you have any questions or concerns about our Privacy Policy, feel free to contact us via our <Link href="/Contact" className="text-blue-600 hover:underline">Contact Us</Link> page.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
