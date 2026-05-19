import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Blogs - MyBlog',
  description: 'Explore all blog posts on various topics.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
