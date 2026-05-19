import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import AddToCartButton from '@/components/AddToCartButton';
import ProductBadge from '@/components/ProductBadge';
import ProductCard from '@/components/ProductCard'; // For related products
import { Metadata } from 'next';
import { Star } from 'lucide-react';

// Generate static params for all product slugs
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Generate dynamic metadata for each product page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: 'Product Not Found - NextShop',
      description: 'The product you are looking for does not exist.',
    };
  }

  return {
    title: `${product.title} - NextShop`,
    description: product.description,
    openGraph: {
      title: `${product.title} - NextShop`,
      description: product.description,
      images: [{ url: product.image, alt: product.title }],
    },
  };
}

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ params }) => {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  // Filter related products (e.g., by category, excluding current product)
  const relatedProducts = products.filter(
    (p) => p.category === product?.category && p.id !== product?.id
  ).slice(0, 4); // Limit to 4 related products

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-8 mb-12 lg:flex lg:items-start lg:space-x-8">
        <div className="lg:w-1/2 relative h-96 mb-6 lg:mb-0 rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>

        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">{product.title}</h1>
          <div className="flex items-center space-x-2 mb-4">
            <ProductBadge text={product.category} />
            <div className="flex items-center text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                  stroke={i < Math.floor(product.rating) ? 'currentColor' : 'gray'}
                />
              ))}
              <span className="text-gray-600 text-lg ml-2">{product.rating.toFixed(1)} Rating</span>
            </div>
          </div>
          <p className="text-gray-900 font-bold text-3xl mb-6">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">{product.description}</p>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Product Specifications</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Brand: {product.brand}</li>
              <li>Stock: {product.stock} available</li>
              <li>ID: {product.id}</li>
              {/* Add more specifications if available in product data */}
            </ul>
          </div>

          <AddToCartButton productId={product.id} className="w-full text-xl py-3" />
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
