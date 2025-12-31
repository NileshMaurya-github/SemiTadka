import { Recipe, categoryInfo, formatTime, getTotalTime } from "@/data/types";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";
import { getRecipeImage } from "@/data/recipe-images";

interface RecipeHeroProps {
  recipe: Recipe;
}

const difficultyColors = {
  easy: "bg-green-500/10 text-green-600 dark:text-green-400",
  medium: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  hard: "bg-red-500/10 text-red-600 dark:text-red-400",
};

const moodColors = {
  light: "bg-mood-light/20 text-mood-light",
  spicy: "bg-mood-spicy/20 text-mood-spicy",
  comfort: "bg-mood-comfort/20 text-mood-comfort",
  quick: "bg-mood-quick/20 text-mood-quick",
};

const moodLabels = {
  light: "Light & Healthy",
  spicy: "Spicy & Desi",
  comfort: "Comfort Food",
  quick: "Quick & Easy",
};

export const RecipeHero = ({ recipe }: RecipeHeroProps) => {
  const category = categoryInfo[recipe.category];
  const imageUrl = getRecipeImage(recipe.slug, recipe.category);

  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={recipe.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link
              to={`/category/${recipe.category}`}
              className="hover:text-primary transition-colors"
            >
              {category.title}
            </Link>
            <span>/</span>
            <span className="text-foreground">{recipe.name}</span>
          </nav>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary" className="gap-1">
              {category.emoji} {category.title}
            </Badge>
            {recipe.moods.map((mood) => (
              <Badge key={mood} className={moodColors[mood]}>
                {moodLabels[mood]}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            {recipe.name}
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
            {recipe.description}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 md:gap-6">
            <div className="flex items-center gap-3 bg-card/90 backdrop-blur-md rounded-2xl px-5 py-3 shadow-sm border border-border/10">
              <Clock className="w-5 h-5 text-primary mt-1" />
              <div className="flex gap-4">
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Prep</span>
                  <p className="font-bold text-foreground">{formatTime(recipe.prepTime)}</p>
                </div>
                <div className="w-px bg-border/50 h-auto my-1"></div>
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Cook</span>
                  <p className="font-bold text-foreground">{formatTime(recipe.cookTime)}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2">
              <ChefHat className="w-5 h-5 text-primary" />
              <div>
                <span className="text-sm text-muted-foreground">Difficulty</span>
                <p className={`font-semibold capitalize ${difficultyColors[recipe.difficulty].split(' ')[1]}`}>
                  {recipe.difficulty}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-card/90 backdrop-blur-md rounded-2xl px-5 py-3 shadow-sm border border-border/10">
              <ChefHat className="w-5 h-5 text-primary" />
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Difficulty</span>
                <p className={`font-bold capitalize ${difficultyColors[recipe.difficulty].split(' ')[1]}`}>
                  {recipe.difficulty}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-card/90 backdrop-blur-md rounded-2xl px-5 py-3 shadow-sm border border-border/10">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Servings</span>
                <p className="font-bold">{recipe.servings} people</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeHero;
