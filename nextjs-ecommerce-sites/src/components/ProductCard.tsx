import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import AddToCartButton from './AddToCartButton';
import ProductBadge from './ProductBadge';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
      <Link href={`/products/${product.slug}`}>
        <div className="relative w-full h-48 sm:h-64 overflow-hidden rounded-t-xl">
          <Image
            src={product.image}
            alt={product.title}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <ProductBadge text={product.category} />
          <div className="flex items-center text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                stroke={i < Math.floor(product.rating) ? 'currentColor' : 'gray'}
              />
            ))}
            <span className="text-gray-600 text-sm ml-1">{product.rating.toFixed(1)}</span>
          </div>
        </div>
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2">
            {product.title}
          </h3>
        </Link>
        <p className="text-gray-900 font-bold text-lg mb-4">${product.price.toFixed(2)}</p>
        <div className="flex flex-col sm:flex-row gap-2">
          <Link href={`/products/${product.slug}`} className="flex-1">
            <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
              View Details
            </button>
          </Link>
          <div className="flex-1">
            <AddToCartButton productId={product.id} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
