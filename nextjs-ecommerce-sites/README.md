# Next.js Dynamic E-Commerce Website

## Project Overview
This project is a modern, responsive, and scalable E-commerce Website built using Next.js 15+ App Router, TypeScript, and Tailwind CSS. It simulates a real online store frontend with dynamic product routes and slug-based product detail pages. The application is designed with industry-level frontend architecture and clean coding standards, making it suitable for assignment submission and portfolio presentation.

## Features
- **Dynamic Routing**: Implemented for product pages, allowing for clean URLs.
- **Slug-based Pages**: Each product has a unique URL based on its slug.
- **Responsive Design**: The website is fully responsive and works perfectly on mobile, tablet, laptop, and desktop devices using Tailwind CSS breakpoints.
- **Product Detail Pages**: Dedicated pages for each product with comprehensive details and specifications.
- **Tailwind CSS UI**: Modern, minimal, and premium user interface with clean spacing, rounded elements, soft shadows, and hover animations.
- **Reusable Components**: Developed with a focus on component reusability to avoid duplicated code and maintain a scalable structure.
- **Dummy Add to Cart Button**: Functional (dummy) "Add to Cart" buttons on product cards and detail pages.
- **Related Products Section**: Displays related products on the product detail page.
- **Clean Navigation**: Intuitive navigation with a sticky header.
- **404 Handling**: Custom error handling for invalid product slugs using `notFound()`.
- **Animations**: Smooth transitions and hover effects for buttons and cards.
- **SEO Ready**: Dynamic metadata for all pages, including titles, descriptions, and OpenGraph basics.

## Tech Stack
- Next.js 15+
- TypeScript
- Tailwind CSS
- App Router (`app/`)
- Lucide React Icons
- Local JSON/TypeScript array (for product data)

## Professional Folder Structure
```
src/
│
├── app/
│   ├── layout.tsx         # Main layout for the application
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── products/
│   │   ├── page.tsx       # Products listing page
│   │   └── [slug]/
│   │       └── page.tsx   # Dynamic product detail page
│   ├── about/
│   │   └── page.tsx       # About Us page
│   └── contact/
│       └── page.tsx       # Contact Us page
│
├── components/
│   ├── Navbar.tsx         # Navigation bar component
│   ├── Footer.tsx         # Footer component
│   ├── ProductCard.tsx    # Card component for individual product display
│   ├── ProductGrid.tsx    # Component to display a grid of product cards
│   ├── ProductBadge.tsx   # Badge component for categories or labels
│   └── AddToCartButton.tsx# Dummy Add to Cart button component
│
├── data/
│   └── products.ts        # Local TypeScript array for product data
│
├── types/
│   └── product.ts         # TypeScript interface for product data structure
│
├── lib/                   # Utility functions or helper files (currently empty)
│
└── public/
    └── images/            # Placeholder for product images
        ├── ... (product images)
```

## Installation Guide
Follow these steps to set up and run the project locally.

### 1. Clone Repository
```bash
git clone YOUR_GITHUB_REPO_LINK
```

### 2. Open Project
Navigate into the project directory:
```bash
cd nextjs-ecommerce-site
```

### 3. Install Dependencies
Install the required Node.js packages:
```bash
npm install
```

### 4. Run Development Server
Start the development server:
```bash
npm run dev
```

### 5. Open Browser
Open your web browser and visit:
```bash
http://localhost:3000
```

## Deployment Guide
This project can be easily deployed to Vercel, the creators of Next.js.

### Deploy to Vercel
1.  **Push your project to GitHub**: Ensure your project is hosted on a GitHub repository.
2.  **Open Vercel Dashboard**: Go to [Vercel](https://vercel.com/) and log in.
3.  **Import Repository**: From your Vercel dashboard, click "Add New..." -> "Project" and import your GitHub repository.
4.  **Configure and Deploy**: Vercel will automatically detect that it's a Next.js project. Review the settings and click "Deploy".

## GitHub Commands Section
A professional Git workflow for managing your project.
```bash
# Initialize a new Git repository (if not already initialized)
git init

# Add all changes to the staging area
git add .

# Commit your changes
git commit -m "Initial Commit"

# Set the default branch name to 'main'
git branch -M main

# Add your GitHub repository as a remote
git remote add origin YOUR_REPO_URL

# Push your changes to GitHub
git push -u origin main
```

## Live Demo
[Vercel deployment link here]

## Screenshots
(Add screenshots of the website here)

## Author
Developed by Sadiq Khan
