import { useParams, Navigate } from "react-router-dom";
import { getRecipeBySlug } from "@/data/recipes";
import Layout from "@/components/layout/Layout";
import RecipeHero from "@/components/recipe/RecipeHero";
import RecipeIngredients from "@/components/recipe/RecipeIngredients";
import RecipeSteps from "@/components/recipe/RecipeSteps";
import RecipeTips from "@/components/recipe/RecipeTips";
import SimilarRecipes from "@/components/recipe/SimilarRecipes";
import FavoriteButton from "@/components/favorites/FavoriteButton";
import { formatTime } from "@/data/types";
import SEO from "@/components/SEO";
import { getRecipeImage } from "@/data/recipe-images";

const Recipe = () => {
  const { slug } = useParams<{ slug: string }>();
  const recipe = slug ? getRecipeBySlug(slug) : undefined;

  const imageUrl = recipe ? getRecipeImage(recipe.slug, recipe.category) : "";

  if (!recipe) {
    return <Navigate to="/404" replace />;
  }

  return (
    <Layout>
      {/* SEO & Structured Data */}
      <SEO
        title={recipe.name}
        description={recipe.description}
        image={imageUrl}
        type="article"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Recipe",
          "name": recipe.name,
          "image": imageUrl,
          "description": recipe.description,
          "author": {
            "@type": "Organization",
            "name": "SemiTadka"
          },
          "datePublished": "2024-01-01",
          "prepTime": `PT${recipe.prepTime}M`,
          "cookTime": `PT${recipe.cookTime}M`,
          "totalTime": `PT${recipe.prepTime + recipe.cookTime}M`,
          "recipeYield": `${recipe.servings} servings`,
          "recipeCategory": recipe.category,
          "recipeCuisine": "Indian",
          "recipeIngredient": recipe.ingredients,
          "recipeInstructions": recipe.steps.map((step, index) => ({
            "@type": "HowToStep",
            "text": step
          }))
        })}
      </script>

      {/* Hero Section */}
      <RecipeHero recipe={recipe} />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Save Button */}
        <div className="flex justify-end mb-6">
          <FavoriteButton recipeId={recipe.id} variant="button" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar - Ingredients */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-6 max-h-[calc(100vh-8rem)] overflow-y-auto pb-4 pr-1 scrollbar-hide">
              <RecipeIngredients recipe={recipe} />

              {/* Time Details Card */}
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <h3 className="font-display font-bold text-lg mb-4">Time Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Prep Time</span>
                    <span className="font-semibold">{formatTime(recipe.prepTime)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Cook Time</span>
                    <span className="font-semibold">{formatTime(recipe.cookTime)}</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between items-center">
                    <span className="text-muted-foreground font-medium">Total</span>
                    <span className="font-bold text-primary">
                      {formatTime(recipe.prepTime + recipe.cookTime)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Steps & Tips */}
          <div className="lg:col-span-2 space-y-8">
            <RecipeSteps recipe={recipe} />
            <RecipeTips recipe={recipe} />
          </div>
        </div>

        {/* Similar Recipes Carousel */}
        <SimilarRecipes recipe={recipe} />
      </div>
    </Layout>
  );
};

export default Recipe;
