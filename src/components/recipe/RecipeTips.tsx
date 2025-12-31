import { Recipe } from "@/data/types";
import { Lightbulb, Sparkles, UtensilsCrossed, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RecipeTipsProps {
  recipe: Recipe;
}

export const RecipeTips = ({ recipe }: RecipeTipsProps) => {
  const hasTips = recipe.tips && recipe.tips.length > 0;
  const hasVariations = recipe.variations && recipe.variations.length > 0;
  const hasServingSuggestions = recipe.servingSuggestions && recipe.servingSuggestions.length > 0;


  if (!hasTips && !hasVariations && !hasServingSuggestions) {
    return (
      <div className="flex justify-center">
        <Button
          asChild
          size="lg"
          className="bg-red-600 hover:bg-red-700 text-white gap-2"
        >
          <a href="https://www.youtube.com/@semitadka" target="_blank" rel="noopener noreferrer">
            <Youtube className="w-5 h-5" />
            Watch on YouTube
          </a>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Tips */}
      {hasTips && (
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 rounded-2xl p-6 md:p-8 border border-yellow-200/50 dark:border-yellow-800/30">
          <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-3">
            <Lightbulb className="w-6 h-6 text-yellow-500" />
            Pro Tips
          </h2>
          <ul className="space-y-3">
            {recipe.tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-yellow-500 mt-0.5">💡</span>
                <span className="text-foreground/80">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Watch on YouTube Button - after Pro Tips */}
      <div className="flex justify-center py-2">
        <Button
          asChild
          size="lg"
          className="bg-red-600 hover:bg-red-700 text-white gap-2 shadow-lg"
        >
          <a href="https://www.youtube.com/@semitadka" target="_blank" rel="noopener noreferrer">
            <Youtube className="w-5 h-5" />
            Watch on YouTube
          </a>
        </Button>
      </div>

      {/* Variations */}
      {hasVariations && (
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl p-6 md:p-8 border border-purple-200/50 dark:border-purple-800/30">
          <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-purple-500" />
            Variations
          </h2>
          <ul className="space-y-3">
            {recipe.variations!.map((variation, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-purple-500 mt-0.5">✨</span>
                <span className="text-foreground/80">{variation}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Serving Suggestions */}
      {hasServingSuggestions && (
        <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 rounded-2xl p-6 md:p-8 border border-green-200/50 dark:border-green-800/30">
          <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-3">
            <UtensilsCrossed className="w-6 h-6 text-green-500" />
            Serving Suggestions
          </h2>
          <ul className="space-y-3">
            {recipe.servingSuggestions!.map((suggestion, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-green-500 mt-0.5">🍽️</span>
                <span className="text-foreground/80">{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RecipeTips;
