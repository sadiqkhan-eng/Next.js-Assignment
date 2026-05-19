import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Blog } from '../types/blog';

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <Link href={`/blogs/${blog.slug}`}>
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            style={{ objectFit: 'cover' }}
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold mb-2">
            {blog.category}
          </span>
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
            {blog.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {blog.description}
          </p>
          <div className="flex items-center text-gray-500 text-xs">
            <span>By {blog.author}</span>
            <span className="mx-2">•</span>
            <span>{blog.publishedAt}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
