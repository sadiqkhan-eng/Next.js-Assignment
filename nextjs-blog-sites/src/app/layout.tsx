import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Changed from Geist to Inter for simplicity and common usage
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] }); // Initialized Inter font

export const metadata: Metadata = {
  title: "MyBlog - Professional Blog Website",
  description: "A modern, responsive, and professional blog website built with Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased text-gray-800`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
