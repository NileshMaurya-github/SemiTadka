import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getCategoryImage } from "@/data/recipe-images";

interface CategoryCardProps {
  title: string;
  emoji: string;
  description: string;
  href: string;
  dishCount: number;
  colorClass: string;
  delay?: number;
  categoryId: string;
}

const CategoryCard = ({
  title,
  emoji,
  description,
  href,
  dishCount,
  colorClass,
  delay = 0,
  categoryId,
}: CategoryCardProps) => {
  const imageUrl = getCategoryImage(categoryId);

  return (
    <Link
      to={href}
      className="group block animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl card-hover h-64 sm:h-72",
          "border border-border/50"
        )}
      >
        {/* Background Image */}
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Content */}
        {/* Content */}
        <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
          <h3 className="font-display text-3xl font-bold mb-3 text-white tracking-tight drop-shadow-md">
            {title}
          </h3>
          <p className="text-white/90 text-sm mb-6 font-medium leading-relaxed max-w-[90%] drop-shadow-sm">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-xs font-semibold text-white">
              {dishCount} Recipes
            </span>
            <span className="flex items-center gap-2 text-sm font-bold text-white group-hover:translate-x-1 transition-transform duration-300">
              Explore
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
