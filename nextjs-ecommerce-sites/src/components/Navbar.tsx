import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-300">
          NextShop
        </Link>
        <div className="flex space-x-6">
          <Link href="/products" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
            Products
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
            Contact
          </Link>
          <button className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
            Cart (0)
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
