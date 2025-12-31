import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getRandomRecipe } from "@/data/recipes";

const Random = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const recipe = getRandomRecipe();
    navigate(`/recipe/${recipe.slug}`, { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center animate-pulse">
        <div className="text-6xl mb-4">🎲</div>
        <p className="text-muted-foreground">Finding a recipe for you...</p>
      </div>
    </div>
  );
};

export default Random;
