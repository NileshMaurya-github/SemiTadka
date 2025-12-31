import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users, ChefHat } from "lucide-react";
import { Recipe } from "@/data/types";
import { allRecipes } from "@/data/recipes";
import { getRecipeImage } from "@/data/recipe-images";

const FeaturedSection = () => {
    // Select 3 specifically good recipes to feature:
    // 1. Masala Dosa (Breakfast)
    // 2. Paneer Butter Masala (Lunch/Dinner)
    // 3. Pani Puri (Snack)
    const featuredSlugs = ['masala-dosa', 'paneer-butter-masala', 'pani-puri'];

    const featuredRecipes = allRecipes.filter(r => featuredSlugs.includes(r.slug));

    // Fallback if specific recipes aren't found (though they should be)
    const recipesDisplay = featuredRecipes.length === 3
        ? featuredRecipes
        : allRecipes.slice(0, 3);

    return (
        <section className="py-20 sm:py-24 bg-secondary/20">
            <div className="container">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
                            Chef's Specials
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                            Trending Recipes
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Our most loved dishes that you simply must try.
                            From crispy snacks to rich curries.
                        </p>
                    </div>
                    <Link to="/category/lunch" className="hidden md:flex">
                        <button className="group flex items-center gap-2 font-semibold text-primary hover:text-primary/80 transition-colors">
                            View All Recipes
                            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {recipesDisplay.map((recipe, index) => (
                        <Link
                            key={recipe.id}
                            to={`/recipe/${recipe.slug}`}
                            className="group bg-card rounded-3xl overflow-hidden border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                        >
                            {/* Image Container */}
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <img
                                    src={getRecipeImage(recipe.slug, recipe.category)}
                                    alt={recipe.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                                {/* Floating pill for difficulty */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-bold text-foreground shadow-sm uppercase tracking-wide">
                                        {recipe.difficulty}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 sm:p-8">
                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="h-4 w-4 text-primary" />
                                        <span>{recipe.prepTime + recipe.cookTime} min</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Users className="h-4 w-4 text-primary" />
                                        <span>{recipe.servings} servings</span>
                                    </div>
                                </div>

                                <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-1">
                                    {recipe.name}
                                </h3>

                                <p className="text-muted-foreground mb-6 line-clamp-2">
                                    {recipe.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-secondary flex items-center justify-center text-[10px] bg-indigo-50">
                                                <ChefHat className="w-4 h-4 text-primary/50" />
                                            </div>
                                        ))}
                                        <div className="w-8 h-8 rounded-full border-2 border-white bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">
                                            +10
                                        </div>
                                    </div>
                                    <span className="flex items-center gap-2 text-sm font-bold text-primary">
                                        Cook Now <ArrowRight className="h-4 w-4" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link to="/category/lunch">
                        <button className="w-full py-3 rounded-xl border border-border font-semibold text-foreground hover:bg-secondary transition-colors">
                            View All Recipes
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedSection;
