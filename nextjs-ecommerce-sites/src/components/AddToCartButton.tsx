'use client';

interface AddToCartButtonProps {
  productId: number;
  className?: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ productId, className }) => {
  const handleAddToCart = () => {
    alert(`Product ${productId} added to cart! (Dummy action)`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 ${className}`}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
