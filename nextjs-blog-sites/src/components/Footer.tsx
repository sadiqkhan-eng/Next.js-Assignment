const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">MyBlog</p>
          <p className="text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">LinkedIn</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;