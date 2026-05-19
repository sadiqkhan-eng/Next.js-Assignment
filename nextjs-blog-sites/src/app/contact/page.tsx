import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us - MyBlog',
  description: 'Get in touch with MyBlog. Send us a message or find our social links.',
};

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">Contact Us</h1>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Contact Form */}
        <section className="lg:w-2/3 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="your@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Social Links Section */}
        <section className="lg:w-1/3 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Connect With Us</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-600" size={28} />
              <div>
                <h3 className="text-xl font-medium text-gray-800">Email</h3>
                <p className="text-gray-600">info@myblog.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-blue-600" size={28} />
              <div>
                <h3 className="text-xl font-medium text-gray-800">Phone</h3>
                <p className="text-gray-600">+1 (123) 456-7890</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-600" size={28} />
              <div>
                <h3 className="text-xl font-medium text-gray-800">Address</h3>
                <p className="text-gray-600">123 Blog Street, Tech City, World</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                Facebook
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                Twitter
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                LinkedIn
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                Instagram
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
