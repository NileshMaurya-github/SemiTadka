import { Recipe } from "@/data/types";
import { getRelatedRecipes } from "@/data/recipes";
import RecipeCard from "./RecipeCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface SimilarRecipesProps {
  recipe: Recipe;
}

export const SimilarRecipes = ({ recipe }: SimilarRecipesProps) => {
  const relatedRecipes = getRelatedRecipes(recipe, 8);

  if (relatedRecipes.length === 0) return null;

  return (
    <section className="py-12">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
        <span className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
          🍴
        </span>
        Similar Recipes You Might Like
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {relatedRecipes.map((relatedRecipe) => (
            <CarouselItem 
              key={relatedRecipe.id} 
              className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <RecipeCard recipe={relatedRecipe} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-4" />
        <CarouselNext className="hidden md:flex -right-4" />
      </Carousel>
    </section>
  );
};

export default SimilarRecipes;
