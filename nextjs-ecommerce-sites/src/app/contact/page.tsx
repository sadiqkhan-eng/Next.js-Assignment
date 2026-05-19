import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - NextShop",
  description: "Get in touch with NextShop customer support.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        We'd love to hear from you! Whether you have a question about our products, need assistance with an order, or just want to provide feedback,
        our team is ready to help. Please reach out to us using the information below.
      </p>
      <div className="mt-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Contact Details</h2>
        <div className="text-lg text-gray-600 space-y-2">
          <p>Email: <a href="mailto:support@nextshop.com" className="text-indigo-600 hover:underline">support@nextshop.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="text-indigo-600 hover:underline">+1 (234) 567-890</a></p>
          <p>Address: 123 E-Commerce St, Suite 100, Shopville, ST 90210</p>
        </div>
      </div>
    </div>
  );
}
