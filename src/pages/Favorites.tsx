import { Link } from "react-router-dom";
import { Heart, ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";
import RecipeCard from "@/components/recipe/RecipeCard";
import { Button } from "@/components/ui/button";
import { useFavorites } from "@/hooks/use-favorites";
import { allRecipes } from "@/data/recipes";

const Favorites = () => {
  const { favorites } = useFavorites();
  
  const favoriteRecipes = allRecipes.filter((recipe) => 
    favorites.includes(recipe.id)
  );

  return (
    <Layout>
      <div className="container py-8 sm:py-12">
        {/* Header */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" size="sm" className="mb-4 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-red-100 dark:bg-red-950 rounded-2xl flex items-center justify-center">
              <Heart className="w-7 h-7 text-red-500" />
            </div>
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                My Favorites
              </h1>
              <p className="text-muted-foreground">
                {favoriteRecipes.length} saved recipe{favoriteRecipes.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        {favoriteRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoriteRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-muted-foreground" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              No favorites yet
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Start exploring recipes and tap the heart icon to save your favorites here.
            </p>
            <Link to="/category/lunch">
              <Button size="lg">Browse Recipes</Button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Favorites;
