'use client';

import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
  selectedCategory: string | null;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, onSelectCategory, selectedCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      <button
        onClick={() => onSelectCategory('All')}
        className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
          selectedCategory === 'All'
            ? 'bg-blue-600 text-white shadow-md'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
            selectedCategory === category
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
