import { Recipe } from "@/data/types";
import { Clock } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface RecipeStepsProps {
  recipe: Recipe;
}

export const RecipeSteps = ({ recipe }: RecipeStepsProps) => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const toggleStep = (index: number) => {
    if (completedSteps.includes(index)) {
      setCompletedSteps(prev => prev.filter(i => i !== index));
    } else {
      setCompletedSteps(prev => [...prev, index]);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-3xl font-bold text-foreground">
          Instructions
        </h2>
        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-full">
          <Clock className="h-4 w-4" />
          <span>{recipe.steps.length} Steps</span>
        </div>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-border/50 hidden md:block" />

        <div className="space-y-6">
          {recipe.steps.map((step, index) => {
            const isCompleted = completedSteps.includes(index);

            return (
              <div
                key={index}
                onClick={() => toggleStep(index)}
                className={cn(
                  "relative pl-12 md:pl-16 p-4 rounded-2xl border transition-all duration-300 cursor-pointer group",
                  isCompleted
                    ? "bg-secondary/20 border-border/50 opacity-60"
                    : "bg-card border-border shadow-sm hover:shadow-md hover:border-primary/20"
                )}
              >
                {/* Step Number Circle */}
                <div className={cn(
                  "absolute left-0 md:left-2 top-4 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all z-10",
                  isCompleted
                    ? "bg-primary text-primary-foreground border-primary scale-90"
                    : "bg-background text-foreground border-primary/20 group-hover:border-primary"
                )}>
                  {index + 1}
                </div>

                {/* Content */}
                <p className={cn(
                  "text-lg leading-relaxed transition-colors",
                  isCompleted ? "text-muted-foreground line-through decoration-primary/30" : "text-foreground"
                )}>
                  {step}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Completion Message */}
      {completedSteps.length === recipe.steps.length && (
        <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 p-6 rounded-2xl text-center animate-in fade-in zoom-in duration-300">
          <p className="font-display text-xl font-bold text-green-600 dark:text-green-400 mb-1">
            🎉 All steps completed!
          </p>
          <p className="text-muted-foreground">
            Enjoy your delicious {recipe.name}!
          </p>
        </div>
      )}
    </div>
  );
};

export default RecipeSteps;
