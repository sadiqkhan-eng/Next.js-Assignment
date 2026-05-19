import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - NextShop",
  description: "Learn more about NextShop and our mission.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">About NextShop</h1>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Welcome to NextShop, your ultimate destination for high-quality electronics, fashionable apparel, and essential accessories.
        We are committed to providing an exceptional shopping experience with carefully curated products that meet your needs and exceed your expectations.
        Our mission is to bring you the latest trends and most reliable products at competitive prices, all while ensuring outstanding customer service.
      </p>
      <div className="mt-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-lg text-gray-600 max-w-2xl mx-auto space-y-2">
          <li>Customer Satisfaction: Your happiness is our priority.</li>
          <li>Quality Products: We source only the best for you.</li>
          <li>Innovation: Staying ahead with the latest in technology and fashion.</li>
          <li>Integrity: Honest and transparent dealings always.</li>
        </ul>
      </div>
    </div>
  );
}
