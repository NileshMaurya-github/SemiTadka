import { Link } from "react-router-dom";
import { Clock, ChefHat } from "lucide-react";
import { Recipe, formatTime, getTotalTime } from "@/data/types";
import { Badge } from "@/components/ui/badge";
import FavoriteButton from "@/components/favorites/FavoriteButton";
import { getRecipeImage } from "@/data/recipe-images";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const moodColors: Record<string, string> = {
    light: "bg-mood-light/20 text-mood-light",
    spicy: "bg-mood-spicy/20 text-mood-spicy",
    comfort: "bg-mood-comfort/20 text-mood-comfort",
    quick: "bg-mood-quick/20 text-mood-quick",
  };

  const imageUrl = getRecipeImage(recipe.slug, recipe.category);

  return (
    <Link to={`/recipe/${recipe.slug}`} className="group block">
      <div className="rounded-2xl overflow-hidden bg-card border border-border card-hover">
        {/* Image */}
        <div className="relative aspect-[4/3] bg-gradient-to-br from-secondary to-muted overflow-hidden">
          <img 
            src={imageUrl} 
            alt={recipe.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Favorite Button */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <FavoriteButton recipeId={recipe.id} />
          </div>
          
          <div className="absolute bottom-3 left-3 right-3">
            <div className="flex gap-1 flex-wrap">
              {recipe.moods.slice(0, 2).map((mood) => (
                <Badge key={mood} variant="secondary" className={`text-xs ${moodColors[mood]}`}>
                  {mood === "light" && "🌞"}
                  {mood === "spicy" && "🔥"}
                  {mood === "comfort" && "😌"}
                  {mood === "quick" && "⚡"}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
            {recipe.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {recipe.description}
          </p>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{formatTime(getTotalTime(recipe))}</span>
            </div>
            <div className="flex items-center gap-1">
              <ChefHat className="h-4 w-4" />
              <span className="capitalize">{recipe.difficulty}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
