# MyBlog - Professional Next.js Blog Website

A modern, responsive, and professional blog website built with Next.js 15+, TypeScript, and Tailwind CSS. This project focuses on clean UI/UX, dynamic routing, reusable components, and best development practices.

## 🚀 Features

*   **Responsive Navbar & Footer:** Modern, sticky navbar and a clean footer.
*   **Dynamic Blog Routing:** SEO-friendly URLs for each blog post (e.g., `/blogs/getting-started-with-nextjs`).
*   **Reusable Components:** Modular and scalable component architecture.
*   **Search Functionality:** Client-side search by blog title with real-time filtering.
*   **Category Filtering:** Filter blog posts by predefined categories.
*   **Modern Styling:** Clean UI/UX with Tailwind CSS, including subtle animations and hover effects.
*   **SEO-Friendly Layout:** Dynamic metadata for all pages for better search engine visibility.
*   **404 Handling:** Custom 404 page using `notFound()` for missing blog posts.
*   **Local Dummy Data:** All content managed via local TypeScript array. No backend or database required.

## 🛠 Tech Stack

*   [**Next.js 15+**](https://nextjs.org/) - React framework for production
*   [**TypeScript**](https://www.typescriptlang.org/) - Strongly typed JavaScript
*   [**Tailwind CSS**](https://tailwindcss.com/) - Utility-first CSS framework
*   [**App Router**](https://nextjs.org/docs/app) - Next.js new routing paradigm
*   [**Lucide React Icons**](https://lucide.dev/) - Beautifully simple and consistent icons
*   Local dummy data only
*   No Backend
*   No Database

## 📁 Folder Structure

```
src/
│
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # Root layout with Navbar and Footer
│   ├── globals.css       # Global styles (Tailwind CSS imports)
│   ├── about/page.tsx    # About page
│   ├── contact/page.tsx  # Contact page
│   ├── blogs/
│   │   ├── page.tsx      # Blog listing page with search and filter
│   │   └── [slug]/
│   │       └── page.tsx  # Dynamic blog detail page
│
├── components/           # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── BlogCard.tsx
│   ├── SearchBar.tsx
│   ├── CategoryFilter.tsx
│
├── data/                 # Local data files
│   └── blogs.ts          # Dummy blog post data
│
├── types/                # TypeScript type definitions
│   └── blog.ts           # Blog post interface
│
└── lib/                  # Utility functions (currently empty, but ready for use)
│
└── public/               # Static assets (images, favicon, etc.)
    └── images/           # Placeholder images for blogs and about page
```

## ⚙️ Installation Steps

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v18.x or higher)
*   npm or yarn

### Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/myblog.git
    cd myblog
    ```
    (Note: Replace `https://github.com/your-username/myblog.git` with your actual repository URL if you push this to GitHub.)

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  **Open in your browser:**
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/), the creators of Next.js.

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform from the creators of Next.js](https://vercel.com/new?utm_medium=appdir-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 🤝 Contributing

Feel free to fork the repository, open issues, or submit pull requests.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information. (Note: A `LICENSE` file would need to be added separately.)
