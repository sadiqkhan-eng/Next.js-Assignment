'use client';

import React, { useState, useMemo } from 'react';
import { Blog } from '@/types/blog';
import { blogs as allBlogs } from '@/data/blogs';
import BlogCard from '@/components/BlogCard';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';

const BlogsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>('All');

  const categories = useMemo(() => {
    const uniqueCategories = new Set(allBlogs.map((blog) => blog.category));
    return Array.from(uniqueCategories);
  }, []);

  const filteredBlogs = useMemo(() => {
    let filtered = allBlogs;

    if (selectedCategory && selectedCategory !== 'All') {
      filtered = filtered.filter((blog) => blog.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter((blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">Our Blogs</h1>

      <SearchBar onSearch={setSearchQuery} />
      <CategoryFilter
        categories={categories}
        onSelectCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

      {filteredBlogs.length === 0 ? (
        <p className="text-center text-gray-600 text-xl">No blogs found matching your criteria.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogsPage;

