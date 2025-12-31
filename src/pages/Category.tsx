import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import RecipeCard from "@/components/recipe/RecipeCard";
import MoodFilter from "@/components/recipe/MoodFilter";
import { getRecipesByCategory } from "@/data/recipes";
import { categoryInfo, Category, Mood } from "@/data/types";

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);

  const category = categoryInfo[categoryId as Category] || categoryInfo.breakfast;
  const allCategoryRecipes = useMemo(
    () => getRecipesByCategory(categoryId as Category),
    [categoryId]
  );

  const filteredRecipes = useMemo(() => {
    if (!selectedMood) return allCategoryRecipes;
    return allCategoryRecipes.filter((recipe) => recipe.moods.includes(selectedMood));
  }, [allCategoryRecipes, selectedMood]);

  return (
    <Layout>
      {/* Header */}
      <div className="bg-gradient-to-b from-secondary/50 to-background py-8 sm:py-12">
        <div className="container">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground mb-4">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="text-center">
            <span className="text-5xl mb-4 block">{category.emoji}</span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
              {category.title} Recipes
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              {category.description}
            </p>
            <p className="text-sm text-primary mt-2 font-medium">
              {filteredRecipes.length} recipes
            </p>
          </div>
        </div>
      </div>

      {/* Mood Filter */}
      <MoodFilter selectedMood={selectedMood} onMoodChange={setSelectedMood} />

      {/* Recipe Grid */}
      <div className="container py-8">
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No recipes found for this mood.</p>
            <Button variant="outline" onClick={() => setSelectedMood(null)} className="mt-4">
              Show All Recipes
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
