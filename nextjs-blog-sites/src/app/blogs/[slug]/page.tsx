import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogs } from '../../../../src/data/blogs';
import { Blog } from '../../../../src/types/blog';
import BlogCard from '../../../../src/components/BlogCard';

interface BlogDetailPageProps {
  params: { slug: string };
}

// Generate static params for all blog posts at build time
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Generate dynamic metadata for each blog post
export async function generateMetadata({ params }: BlogDetailPageProps) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return {
      title: 'Blog Post Not Found - MyBlog',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${blog.title} - MyBlog`,
    description: blog.description,
    openGraph: {
      title: `${blog.title} - MyBlog`,
      description: blog.description,
      images: [{ url: blog.image }],
    },
  };
}

const BlogDetailPage = ({ params }: BlogDetailPageProps) => {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound(); // Handle 404 if blog not found
  }

  // Get related blogs (excluding the current one, same category if possible)
  const relatedBlogs = blogs
    .filter((b) => b.slug !== blog.slug && b.category === blog.category)
    .slice(0, 3); // Take up to 3 related blogs

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>

        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center">
          {blog.title}
        </h1>

        <div className="flex justify-center items-center text-gray-600 mb-8 space-x-4">
          <span className="text-lg font-medium">{blog.author}</span>
          <span className="text-lg">•</span>
          <span className="text-lg">{blog.publishedAt}</span>
          <span className="text-lg">•</span>
          <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-semibold">
            {blog.category}
          </span>
        </div>

        <div
          className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>

      {relatedBlogs.length > 0 && (
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Related Blogs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedBlogs.map((relatedBlog) => (
              <BlogCard key={relatedBlog.id} blog={relatedBlog} />
            ))}
          </div>
        </section>
      )}

      <div className="text-center mt-12">
        <Link href="/blogs" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md">
          Back to All Blogs
        </Link>
      </div>
    </div>
  );
};

export default BlogDetailPage;
