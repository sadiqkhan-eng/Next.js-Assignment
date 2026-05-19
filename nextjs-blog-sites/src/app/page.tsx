import HeroSection from "../components/HeroSection";
import { blogs } from "../data/blogs";
import BlogCard from "../components/BlogCard";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const featuredBlogs = blogs.slice(0, 3);
  const latestBlogs = blogs.slice(3, 6);

  const categories = Array.from(new Set(blogs.map(blog => blog.category)));

  return (
    <div>
      <HeroSection />

      {/* Featured Blogs Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">Spotlight: Our Featured Reads</h2>
        <p className="text-xl text-gray-600 text-center mb-10 max-w-3xl mx-auto">
          Handpicked for you! Dive into our most popular and impactful articles that resonate with our community.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBlogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/blogs" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md">
            View All Blogs
          </Link>
        </div>
      </section>

      {/* Latest Blogs Grid */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">Fresh Off the Press: Latest Articles</h2>
          <p className="text-xl text-gray-600 text-center mb-10 max-w-3xl mx-auto">
            Stay ahead of the curve with our newest publications, covering the latest trends and essential topics.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestBlogs.map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/blogs" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md">
              Discover More
            </Link>
          </div>
        </div>
      </section>

      {/* Categories/Tags Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">Explore Topics That Matter</h2>
        <p className="text-xl text-gray-600 text-center mb-10 max-w-3xl mx-auto">
          Browse our diverse range of categories to find exactly what you're passionate about.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map(category => (
            <Link key={category} href={`/blogs?category=${category}`} className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full text-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300 shadow-sm">
              {category}
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated! Join Our Community</h2>
          <p className="text-xl mb-8">
            Never miss an update. Subscribe to our newsletter and get the latest articles, exclusive tips, and insights delivered straight to your inbox.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
