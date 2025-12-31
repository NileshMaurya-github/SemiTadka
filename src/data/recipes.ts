import { Recipe, Category } from "./types";
import { breakfastRecipes } from "./breakfast-recipes";
import { lunchRecipes } from "./lunch-recipes";
import { dinnerRecipes } from "./dinner-recipes";
import { snacksRecipes } from "./snacks-recipes";

// Combine all recipes
export const allRecipes: Recipe[] = [
  ...breakfastRecipes,
  ...lunchRecipes,
  ...dinnerRecipes,
  ...snacksRecipes,
];

// Get recipes by category
export const getRecipesByCategory = (category: Category): Recipe[] => {
  return allRecipes.filter((recipe) => recipe.category === category);
};

// Get recipe by slug
export const getRecipeBySlug = (slug: string): Recipe | undefined => {
  return allRecipes.find((recipe) => recipe.slug === slug);
};

// Get related recipes (same category, different recipe)
export const getRelatedRecipes = (recipe: Recipe, limit: number = 4): Recipe[] => {
  return allRecipes
    .filter((r) => r.category === recipe.category && r.id !== recipe.id)
    .slice(0, limit);
};

// Get random recipe
export const getRandomRecipe = (): Recipe => {
  return allRecipes[Math.floor(Math.random() * allRecipes.length)];
};

// Search recipes
export const searchRecipes = (query: string): Recipe[] => {
  const lowerQuery = query.toLowerCase();
  return allRecipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(lowerQuery) ||
      recipe.description.toLowerCase().includes(lowerQuery) ||
      recipe.ingredients.some((ing) => ing.toLowerCase().includes(lowerQuery))
  );
};

// Export individual category recipes for direct access
export { breakfastRecipes, lunchRecipes, dinnerRecipes, snacksRecipes };
