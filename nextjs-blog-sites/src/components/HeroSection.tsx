import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-20 md:py-32"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
          NextWave Blog Platform
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in-up">
          A modern and responsive blog website built with Next.js 15, TypeScript, and Tailwind CSS featuring dynamic blog routing, category filtering, search functionality, and a clean user experience.
        </p>
        <Link
          href="/blogs"
          className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out inline-block"
        >
          Explore All Articles
        </Link>
      </div>
      <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay for gradient effect */}
      {/* Subtle animations for visual appeal */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute w-64 h-64 bg-white opacity-5 rounded-full -top-16 -left-16 animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-white opacity-5 rounded-full -bottom-24 -right-24 animate-pulse-slow delay-1000"></div>
      </div>
    </section>
  );
};

export default HeroSection;

