'use client';

import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">About MyBlog</h1>

      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Our Mission</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At MyBlog, our mission is to empower developers and tech enthusiasts with high-quality, accessible,
              and engaging content. We believe in sharing knowledge that not only educates but also inspires
              creativity and innovation in the ever-evolving world of technology.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We strive to be a reliable resource for learning new skills, understanding complex concepts,
              and staying updated with the latest trends in web development, programming languages, and
              software architecture.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/mission.jpg" // Placeholder image
              alt="Our Mission"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="mb-16 bg-gray-50 p-8 rounded-lg shadow-sm">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Blog Purpose</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          This blog serves as a platform to share in-depth tutorials, practical guides, opinion pieces,
          and insights across a wide range of topics including Next.js, React, Tailwind CSS, TypeScript,
          and general JavaScript best practices. Our goal is to foster a community of learners and
          practitioners who are passionate about building the future of the web.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Technologies Used</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <span className="tech-badge">Next.js 15+</span>
          <span className="tech-badge">TypeScript</span>
          <span className="tech-badge">Tailwind CSS</span>
          <span className="tech-badge">App Router</span>
          <span className="tech-badge">Lucide React Icons</span>
        </div>
        <style jsx>{`
          .tech-badge {
            @apply bg-blue-100 text-blue-800 text-lg px-5 py-2 rounded-full font-medium shadow-md transition-transform duration-200 hover:scale-105;
          }
        `}</style>
      </section>

      <section>
        <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Meet the Author</h2>
        <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-lg shadow-lg">
          <div className="md:w-1/3 flex justify-center">
            <Image
              src="/images/author.jpg" // Placeholder image for author
              alt="Author John Doe"
              width={200}
              height={200}
              className="rounded-full border-4 border-blue-200 shadow-md"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">John Doe</h3>
            <p className="text-xl text-gray-600 mb-4">Senior Full-Stack Developer & UI/UX Enthusiast</p>
            <p className="text-lg text-gray-700 leading-relaxed">
              John is a seasoned software engineer with over 10 years of experience in building scalable
              and user-friendly web applications. He specializes in modern JavaScript frameworks
              like Next.js and React, and has a keen eye for elegant UI/UX design. When he's not coding,
              John enjoys exploring new technologies and contributing to open-source projects.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
