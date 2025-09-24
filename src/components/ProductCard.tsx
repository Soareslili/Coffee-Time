import { Star } from "lucide-react";

export interface ProductCardProps {
  image: string;
  title: string;
  subtitle: string;
  price: string;
  rating: number; 
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  subtitle,
  price,
  rating,
}) => {
  const renderStars = () =>
    Array.from({ length: 5 }, (_, i) => {
      const filled = i < Math.round(rating);
      return (
        <Star
          key={i}
          size={16}
          className={filled ? "text-amber-400" : "text-white/30"}
          fill={filled ? "currentColor" : "none"} 
        />
      );
    });

  return (
    <div className="w-full bg-neutral-900/60 rounded-2xl border border-white/10 p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out">
     
      <div className="relative mb-6 overflow-hidden rounded-full w-40 h-40 mx-auto ring-1 ring-white/10">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

   
      <div className="text-center space-y-3">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-white/70 text-sm">{subtitle}</p>

      
        <div className="flex items-center justify-center gap-1">
          {renderStars()}
          <span className="text-white/60 text-sm ml-1">{rating.toFixed(1)}</span>
        </div>

    
        <div className="text-2xl font-semibold text-amber-400">{price}</div>

     
        <div className="flex gap-3 pt-4">
          <button className="flex-1 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 transition">
            Adicionar
          </button>
          <button className="flex-1 rounded-lg border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-white font-semibold py-2 transition">
            Detalhes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
