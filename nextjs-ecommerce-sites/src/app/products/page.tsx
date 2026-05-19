import { products } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Products - NextShop',
  description: 'Browse all products available at NextShop. Find shoes, electronics, accessories, and more.',
};

const ProductsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Products</h1>
      <ProductGrid products={products} />
    </div>
  );
};

export default ProductsPage;
