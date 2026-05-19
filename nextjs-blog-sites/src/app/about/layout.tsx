import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - MyBlog',
  description: 'Learn more about MyBlog, our mission, and the technologies we use.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
