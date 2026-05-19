import { Blog } from '../types/blog';

export const blogs: Blog[] = [
  {
    id: 1,
    title: 'Getting Started with Next.js 15',
    slug: 'getting-started-with-nextjs-15',
    description: 'Learn the basics of Next.js 15 and how to set up your first project with the App Router.',
    content: `
      <h2>Introduction to Next.js 15</h2>
      <p>Next.js 15 brings exciting new features and improvements, especially around the App Router. This guide will help you get started with a new project.</p>
      <h3>Setting up your project</h3>
      <p>To create a new Next.js project, you can use:</p>
      <pre><code>npx create-next-app@latest my-blog --typescript --tailwind --app</code></pre>
      <p>This command will set up a new project with TypeScript, Tailwind CSS, and the App Router configured.</p>
      <h3>App Router Basics</h3>
      <p>The App Router introduces a new way to handle routing and data fetching. All routes are defined within the <code>app</code> directory.</p>
      <p>Each folder inside <code>app</code> represents a route segment. A <code>page.tsx</code> file within a route segment makes it publicly accessible.</p>
    `,
    image: '/images/nextjs-cover.jpg',
    category: 'Next.js',
    author: 'John Doe',
    publishedAt: '2023-10-26',
  },
  {
    id: 2,
    title: 'Mastering Tailwind CSS for Responsive Design',
    slug: 'mastering-tailwind-css-responsive-design',
    description: 'Dive deep into Tailwind CSS utility-first approach to build stunning and responsive user interfaces.',
    content: `
      <h2>The Power of Tailwind CSS</h2>
      <p>Tailwind CSS is a utility-first CSS framework that allows you to build custom designs directly in your markup.</p>
      <h3>Responsive Utilities</h3>
      <p>Tailwind makes responsive design incredibly easy with its responsive prefixes. For example, to make an element <code>w-full</code> on mobile and <code>w-1/2</code> on large screens, you'd write <code>w-full lg:w-1/2</code>.</p>
      <h3>Customizing Tailwind</h3>
      <p>You can easily customize Tailwind's configuration to match your project's design system. The <code>tailwind.config.js</code> file is your go-to for extending themes, adding plugins, and more.</p>
    `,
    image: '/images/tailwind-cover.jpg',
    category: 'Tailwind CSS',
    author: 'Jane Smith',
    publishedAt: '2023-11-15',
  },
  {
    id: 3,
    title: 'Effective State Management in React',
    slug: 'effective-state-management-in-react',
    description: 'Explore various patterns and libraries for managing state in your React applications, from useState to Context API and beyond.',
    content: `
      <h2>Understanding State in React</h2>
      <p>State is at the heart of every interactive React application. Managing it effectively is crucial for performance and maintainability.</p>
      <h3>useState Hook</h3>
      <p>For local component state, the <code>useState</code> hook is your primary tool. It's simple, efficient, and perfect for managing UI-specific data.</p>
      <h3>Context API</h3>
      <p>When you need to share state across many components without prop drilling, React's Context API provides a powerful solution. It's great for themes, user authentication status, or global configurations.</p>
      <h3>Third-party Libraries</h3>
      <p>For more complex state management needs, libraries like Redux, Zustand, or Jotai offer advanced features suchs as middleware, devtools, and optimized re-renders.</p>
    `,
    image: '/images/react-cover.jpg',
    category: 'React',
    author: 'Alice Johnson',
    publishedAt: '2023-12-01',
  },
  {
    id: 4,
    title: 'TypeScript for Beginners: A Gentle Introduction',
    slug: 'typescript-for-beginners',
    description: 'Start your journey with TypeScript and understand how it brings type safety to your JavaScript projects.',
    content: `
      <h2>Why TypeScript?</h2>
      <p>TypeScript is a superset of JavaScript that adds static typing. This means you can catch errors during development, leading to more robust and maintainable code.</p>
      <h3>Basic Types</h3>
      <p>TypeScript introduces basic types like <code>number</code>, <code>string</code>, <code>boolean</code>, <code>Array</code>, and <code>any</code>. You can declare variables with these types:</p>
      <pre><code>let age: number = 30;
let name: string = "Alice";
let isActive: boolean = true;</code></pre>
      <h3>Interfaces and Types</h3>
      <p>Interfaces and type aliases are powerful features for defining the shape of objects. They help enforce consistency across your codebase.</p>
    `,
    image: '/images/typescript-cover.jpg',
    category: 'TypeScript',
    author: 'Bob Williams',
    publishedAt: '2024-01-10',
  },
  {
    id: 5,
    title: 'Optimizing Next.js Performance',
    slug: 'optimizing-nextjs-performance',
    description: 'Tips and tricks to make your Next.js applications blazing fast and provide a great user experience.',
    content: `
      <h2>Performance is Key</h2>
      <p>A fast website not only improves user experience but also has a positive impact on SEO. Next.js provides many built-in optimizations.</p>
      <h3>Image Optimization</h3>
      <p>The <code>next/image</code> component automatically optimizes images, serving them in modern formats like WebP and resizing them for different screen sizes.</p>
      <h3>Code Splitting</h3>
      <p>Next.js automatically performs code splitting, ensuring that only the necessary JavaScript is loaded for each page. You can further optimize this with dynamic imports.</p>
      <h3>Data Fetching Strategies</h3>
      <p>Choose the right data fetching strategy for your needs: Static Site Generation (SSG), Server-Side Rendering (SSR), or Client-Side Rendering (CSR). Each has its performance implications.</p>
    `,
    image: '/images/nextjs-perf.jpg',
    category: 'Next.js',
    author: 'Charlie Green',
    publishedAt: '2024-02-20',
  },
  {
    id: 6,
    title: 'Building Reusable Components in React',
    slug: 'building-reusable-components-in-react',
    description: 'Learn how to design and build highly reusable and modular React components for scalable applications.',
    content: `
      <h2>The Essence of Reusability</h2>
      <p>Reusable components are the backbone of efficient and scalable React applications. They promote consistency and reduce development time.</p>
      <h3>Props and Children</h3>
      <p>Pass data and content to your components using props and the <code>children</code> prop. This makes components flexible and adaptable to different contexts.</p>
      <h3>Composition vs. Inheritance</h3>
      <p>In React, prefer composition over inheritance for sharing code between components. This leads to more flexible and less coupled codebases.</p>
      <h3>Storybook for Component Development</h3>
      <p>Tools like Storybook can greatly assist in developing, documenting, and testing your reusable components in isolation.</p>
    `,
    image: '/images/react-components.jpg',
    category: 'React',
    author: 'David Brown',
    publishedAt: '2024-03-05',
  },
  {
    id: 7,
    title: 'Introduction to JavaScript ESNext Features',
    slug: 'introduction-to-javascript-esnext',
    description: 'A quick tour of the latest and upcoming features in JavaScript (ES2023, ES2024, etc.) to write more modern code.',
    content: `
      <h2>Keeping Up with JavaScript</h2>
      <p>JavaScript is constantly evolving. Understanding ESNext features helps you write more efficient and expressive code.</p>
      <h3>Optional Chaining (?. )</h3>
      <p>Optional chaining allows you to safely access properties of an object that might be null or undefined without throwing an error.</p>
      <pre><code>const user = { name: "Alice", address: { street: "123 Main St" } };
console.log(user?.address?.street); // "123 Main St"
console.log(user?.contact?.email); // undefined</code></pre>
      <h3>Nullish Coalescing (?? )</h3>
      <p>The nullish coalescing operator provides a way to define a default value for a variable that is <code>null</code> or <code>undefined</code>.</p>
      <pre><code>const foo = null ?? 'default string'; // 'default string'
const bar = 0 ?? 42; // 0</code></pre>
    `,
    image: '/images/javascript-esnext.jpg',
    category: 'JavaScript',
    author: 'Eve White',
    publishedAt: '2024-04-12',
  },
  {
    id: 8,
    title: 'Styling Next.js with Tailwind CSS',
    slug: 'styling-nextjs-with-tailwind-css',
    description: 'Integrate Tailwind CSS seamlessly into your Next.js project for efficient and scalable styling.',
    content: `
      <h2>Seamless Integration</h2>
      <p>Combining Next.js with Tailwind CSS offers a powerful and efficient way to style your applications. The setup is straightforward.</p>
      <h3>Configuration</h3>
      <p>After installing Tailwind, you'll typically have a <code>tailwind.config.js</code> and <code>postcss.config.js</code>. Ensure your CSS file imports Tailwind's base, components, and utilities.</p>
      <pre><code>/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;</code></pre>
      <h3>Using Utility Classes</h3>
      <p>Apply Tailwind's utility classes directly in your JSX. This approach speeds up development and keeps your styles localized with your components.</p>
    `,
    image: '/images/tailwind-nextjs.jpg',
    category: 'Tailwind CSS',
    author: 'Frank Black',
    publishedAt: '2024-05-01',
  },
  {
    id: 9,
    title: 'Advanced TypeScript Patterns',
    slug: 'advanced-typescript-patterns',
    description: 'Explore sophisticated TypeScript techniques like conditional types, mapped types, and declaration merging.',
    content: `
      <h2>Beyond the Basics</h2>
      <p>Once you're comfortable with TypeScript's fundamentals, advanced patterns can unlock even more powerful type-safe coding.</p>
      <h3>Conditional Types</h3>
      <p>Conditional types allow you to define types based on conditions, often used with the <code>extends</code> keyword to check type compatibility.</p>
      <pre><code>type IsString&lt;T&gt; = T extends string ? "Yes" : "No";
type A = IsString&lt;string&gt;; // "Yes"
type B = IsString&lt;number&gt;; // "No"</code></pre>
      <h3>Mapped Types</h3>
      <p>Mapped types let you transform existing types by iterating over their properties, useful for creating new types from old ones.</p>
      <pre><code>type Readonly&lt;T&gt; = {
  readonly [P in keyof T]: T[P];
};
interface User {
  id: number;
  name: string;
}
type ReadonlyUser = Readonly&lt;User&gt;; // { readonly id: number; readonly name: string; }</code></pre>
    `,
    image: '/images/typescript-advanced.jpg',
    category: 'TypeScript',
    author: 'Grace Blue',
    publishedAt: '2024-05-10',
  },
];
