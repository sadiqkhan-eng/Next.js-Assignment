# Next.js Assignment - Two Projects

This repository contains two distinct Next.js projects, a Blog Site and an E-commerce Site, developed as part of an assignment to demonstrate proficiency with Next.js, TypeScript, and Tailwind CSS. Both projects are built using the Next.js App Router and follow modern frontend development best practices.

## Assignment Requirements Recap

The assignment required building and deploying two Next.js projects, each with specific focuses:

**1. Blog Site:**
*   **Pages:** Home, About, Contact, Blog List, Blog Detail.
*   **Data:** Uses dummy data (no backend needed).
*   **Focus:** Responsive layout, clean design.
*   **Bonus:** Categories/tags and search functionality implemented.

**2. E-commerce Site:**
*   **Pages:** `/products` (product listing) and `/products/[slug]` (dynamic product detail).
*   **Data:** Uses a local JSON/TypeScript array for product data.
*   **Features:** Product cards, dynamic linking to detail pages via slugs, dummy "Add to Cart" button.
*   **Focus:** Dynamic routing and slug-based page generation.

**Deliverables:**
*   GitHub repository for each project (within this monorepo structure).
*   Vercel live link for each project.
*   `README.md` with setup steps for each project (located within their respective directories). This root `README.md` serves as an overarching guide.

## Project Structure

This repository is organized into two main project directories:

```
D:\Next-SMIT\New folder
├── nextjs-blog-site/
│   ├── ... (Blog Site project files)
│   └── README.md
├── nextjs-ecommerce-site/
│   ├── ... (E-commerce Site project files)
│   └── README.md
└── README.md (This file)
```

## 1. Next.js Blog Site

A responsive and modern blog platform featuring various articles, categories, and search functionality.

**Key Features:**
*   **Core Pages:** Home, About, Contact, Blog List, Blog Detail pages.
*   **Responsive Layout:** Optimized for various screen sizes using Tailwind CSS.
*   **Clean Design:** Modern and intuitive user interface.
*   **Dummy Data:** Blog posts are managed via a local TypeScript array.
*   **Categories & Search:** Allows users to filter blog posts by category and search by keywords.
*   **Dynamic Routing:** Blog detail pages are dynamically generated based on slugs.

For detailed setup instructions and project specifics, please refer to:
[./nextjs-blog-site/README.md](./nextjs-blog-site/README.md)

## 2. Next.js E-commerce Site

A professional e-commerce storefront showcasing products with dynamic routing for product details.

**Key Features:**
*   **Dynamic Product Routes:** `/products` for listing and `/products/[slug]` for individual product pages.
*   **Product Cards:** Displays product image, title, category, price, rating, and action buttons.
*   **Dynamic Detail Pages:** Each product has a dedicated page with detailed information, specifications, and related products.
*   **Dummy Add to Cart:** A placeholder "Add to Cart" button for user interaction simulation.
*   **Local Product Data:** All product information is sourced from a local TypeScript array.
*   **Modern UI/UX:** Clean, minimal, and premium design with smooth animations and transitions.

For detailed setup instructions and project specifics, please refer to:
[./nextjs-ecommerce-site/README.md](./nextjs-ecommerce-site/README.md)

## Setup and Run Guide (Both Projects)

To get either of these projects running on your local machine, follow these general steps. Replace `[project-directory]` with either `nextjs-blog-site` or `nextjs-ecommerce-site`.

### 1. Clone the Repository

First, clone this entire repository to your local machine:

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the Project Directory

Choose the project you wish to run and navigate into its directory:

```bash
cd D:\user\Next-SMIT\\[project-directory]
# Example: cd nextjs-blog-site
# Example: cd nextjs-ecommerce-site
```

### 3. Install Dependencies

Install all the necessary Node.js packages for the selected project:

```bash
npm install
```

### 4. Run the Development Server

Start the development server for the project:

```bash
npm run dev
```

### 5. Open in Browser

Open your web browser and visit `http://localhost:3000`. If you run both projects simultaneously, they might need to be configured to run on different ports (e.g., `npm run dev -- -p 3001` for the second project).

## Deployment Guide (Both Projects)

Both projects are configured for easy deployment to Vercel. Each project will require its own separate Vercel deployment.

### Deploy to Vercel

1.  **Push to GitHub:** Ensure both `nextjs-blog-site` and `nextjs-ecommerce-site` are part of a GitHub repository (this entire repository should be pushed).
2.  **Open Vercel Dashboard:** Go to [Vercel](https://vercel.com/) and log in.
3.  **Add New Project:** From your Vercel dashboard, click "Add New..." -> "Project".
4.  **Import Repository:** Select the GitHub repository where your projects are hosted.
5.  **Configure Root Directory:** When importing, Vercel will ask for the "Root Directory".
    *   For the **Blog Site**, set the Root Directory to `nextjs-blog-site`.
    *   For the **E-commerce Site**, set the Root Directory to `nextjs-ecommerce-site`.
6.  **Deploy:** Review the settings and click "Deploy". Vercel will automatically detect the Next.js framework and build your project.

## GitHub Commands

Standard Git workflow for managing this repository:

```bash
# Initialize a new Git repository (if not already done for the parent folder)
git init

# Add all changes to the staging area
git add .

# Commit your changes
git commit -m "Initial commit of Next.js projects"

# Set the default branch name to 'main'
git branch -M main

# Add your GitHub repository as a remote (replace YOUR_REPOSITORY_URL)
git remote add origin YOUR_REPOSITORY_URL

# Push your changes to GitHub
git push -u origin main
```

## Live Demos

*   **Next.js Blog Site:** [[Vercel Deployment Link for Blog Site Here](https://blog-sites-eight.vercel.app/)]
*   **Next.js E-commerce Site:** [[Vercel Deployment Link for E-commerce Site Here](https://ecommerce-sites-tau.vercel.app/)]

## Screenshots

(Add screenshots of both websites here for a visual overview)

## Author

Developed by Sadiq Khan
