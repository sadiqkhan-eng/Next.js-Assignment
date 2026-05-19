interface ProductBadgeProps {
  text: string;
  className?: string;
}

const ProductBadge: React.FC<ProductBadgeProps> = ({ text, className }) => {
  return (
    <span className={`inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full ${className}`}>
      {text}
    </span>
  );
};

export default ProductBadge;
