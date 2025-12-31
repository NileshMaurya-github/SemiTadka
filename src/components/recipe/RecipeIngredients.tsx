import { useState } from "react";
import { Recipe } from "@/data/types";
import { Check, Minus, Plus, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getRecipeImage } from "@/data/recipe-images";

interface RecipeIngredientsProps {
  recipe: Recipe;
}

export const RecipeIngredients = ({ recipe }: RecipeIngredientsProps) => {
  const [servings, setServings] = useState(recipe.servings);
  const ingredientImage = getRecipeImage(recipe.slug, recipe.category);

  const handleIncrement = () => setServings((prev) => prev + 1);
  const handleDecrement = () => setServings((prev) => (prev > 1 ? prev - 1 : 1));

  const scaleIngredient = (ingredient: string) => {
    // Basic regex to find numbers at the start of the string (integers, decimals, fractions)
    const numberRegex = /^(\d+(?:\.\d+)?|\d+\/\d+)(?=\s)/;
    const match = ingredient.match(numberRegex);

    if (match) {
      const originalAmountStr = match[0];
      let originalAmount = 0;

      if (originalAmountStr.includes('/')) {
        const [num, den] = originalAmountStr.split('/').map(Number);
        originalAmount = num / den;
      } else {
        originalAmount = parseFloat(originalAmountStr);
      }

      // Calculate scaled amount
      const scaledAmount = (originalAmount * servings) / recipe.servings;

      // Format pretty number (e.g. 0.5 -> 1/2, 1.5 -> 1.5 or 1 1/2)
      // For simplicity, let's round decimals to 2 places if not integer
      const formattedAmount = Number.isInteger(scaledAmount)
        ? scaledAmount.toString()
        : scaledAmount.toFixed(1).replace(/\.0$/, '');

      return ingredient.replace(numberRegex, formattedAmount);
    }

    return ingredient;
  };

  return (
    <div className="bg-card rounded-3xl border border-border/50 overflow-hidden shadow-lg">
      {/* Header with servings control */}
      <div className="bg-secondary/30 p-6 border-b border-border/50">
        <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-primary/20 overflow-hidden shadow-sm flex-shrink-0">
            <img
              src={ingredientImage}
              alt={recipe.name}
              className="w-full h-full object-cover"
            />
          </div>
          Ingredients
        </h2>

        <div className="flex items-center justify-between bg-background rounded-xl p-3 border border-border/50 shadow-sm">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="font-semibold text-sm">Servings:</span>
          </div>

          <div className="flex items-center gap-3 bg-secondary/50 rounded-lg p-0.5">
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-sm hover:bg-background shadow-sm transition-all"
              onClick={handleDecrement}
              disabled={servings <= 1}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="font-bold w-6 text-center text-sm">{servings}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-sm hover:bg-background shadow-sm transition-all"
              onClick={handleIncrement}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>

      {/* Ingredients List */}
      <div className="p-6">
        <ul className="space-y-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li
              key={index}
              className="flex items-start gap-4 group cursor-pointer hover:bg-secondary/20 p-2 rounded-lg transition-colors"
            >
              <div className="mt-1 w-5 h-5 rounded-full border-2 border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary transition-colors bg-background">
                <Check className="w-3 h-3 text-transparent group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="text-foreground/80 font-medium leading-relaxed group-hover:text-foreground transition-colors">
                {scaleIngredient(ingredient)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeIngredients;
