import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFavorites } from "@/hooks/use-favorites";
import { cn } from "@/lib/utils";

interface FavoriteButtonProps {
  recipeId: string;
  variant?: "icon" | "button";
  className?: string;
}

const FavoriteButton = ({ recipeId, variant = "icon", className }: FavoriteButtonProps) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(recipeId);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(recipeId);
  };

  if (variant === "button") {
    return (
      <Button
        variant={favorited ? "default" : "outline"}
        onClick={handleClick}
        className={cn("gap-2", className)}
      >
        <Heart className={cn("w-4 h-4", favorited && "fill-current")} />
        {favorited ? "Saved" : "Save Recipe"}
      </Button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        "p-2 rounded-full transition-all",
        favorited 
          ? "bg-red-500 text-white" 
          : "bg-background/80 text-foreground hover:bg-red-100 dark:hover:bg-red-950",
        className
      )}
    >
      <Heart className={cn("w-5 h-5", favorited && "fill-current")} />
    </button>
  );
};

export default FavoriteButton;
