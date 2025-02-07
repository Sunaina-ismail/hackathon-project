const ContactUs = () => {
  return (
    <div className="md:pt-12">
      <div className="min-h-screen flex py-20 md:py-24 items-center justify-center">
        <div className="flex flex-col lg:flex-row mx-auto max-w-5xl w-full">
          
          <div className="w-full lg:w-1/2 p-6 md:p-8">
            <h2 className="text-3xl font-bold text-black mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-700">Address</h3>
                <p className="text-gray-600">Nike Pakistan HQ, Gulberg III, Lahore, Punjab, Pakistan</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700">Phone</h3>
                <p className="text-gray-600">+92 21 35800001</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700">Email</h3>
                <p className="text-gray-600">support@nike.pk</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700">Working Hours</h3>
                <p className="text-gray-600">Mon - Fri: 10 AM - 6 PM</p>
                <p className="text-gray-600">Sat - Sun: Closed</p>
              </div>
             
            </div>
          </div>

          
          <div className="w-full lg:w-1/2 bg-gray-100 p-8">
            <h2 className="text-3xl font-bold text-black mb-6 text-center">Contact Us</h2>
            <form action="#" method="POST">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Full Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email Address"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your Phone Number"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full bg-white text-black border rounded-full  border-black  py-2  hover:bg-black hover:text-white transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
