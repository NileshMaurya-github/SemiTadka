import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import RecipeCard from "@/components/recipe/RecipeCard";
import { allRecipes } from "@/data/recipes";
import { getTotalTime } from "@/data/types";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TimeBasedRecipes = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const timeParam = searchParams.get("time");

    // Default to 'all' if no param, otherwise use the param value
    const [activeFilter, setActiveFilter] = useState<string>(timeParam || "all");

    useEffect(() => {
        if (timeParam) {
            setActiveFilter(timeParam);
        } else {
            setActiveFilter("all");
        }
    }, [timeParam]);

    const handleFilterChange = (id: string) => {
        setActiveFilter(id);
        if (id === "all") {
            setSearchParams({});
        } else {
            // If it's one of our standard presets or a custom number
            setSearchParams({ time: id });
        }
    };

    const filters = [
        { id: "all", label: "All Recipes" },
        { id: "10", label: "Under 10 Mins" },
        { id: "15", label: "Under 15 Mins" },
        { id: "20", label: "Under 20 Mins" },
        { id: "30", label: "Under 30 Mins" },
        { id: "40", label: "Under 40 Mins" },
        { id: "50", label: "Under 50 Mins" },
        { id: "60", label: "Under 60 Mins" },
    ];

    const filteredRecipes = useMemo(() => {
        return allRecipes.filter(recipe => {
            const totalTime = getTotalTime(recipe);

            if (activeFilter === "all") return true;

            const maxTime = parseInt(activeFilter);
            if (!isNaN(maxTime)) {
                return totalTime <= maxTime;
            }

            return true;
        });
    }, [activeFilter]);

    return (
        <Layout>
            <div className="bg-gradient-to-b from-secondary/50 to-background py-16">
                <div className="container">
                    <div className="text-center mb-12 animate-fade-in">
                        <span className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 text-primary">
                            <Clock className="h-8 w-8" />
                        </span>
                        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
                            Minute Dishes
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Find the perfect recipe that fits your schedule, from quick bites to leisurely weekend meals.
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 overflow-x-auto pb-4 px-4 scrollbar-hide">
                        {filters.map((filter) => (
                            <Button
                                key={filter.id}
                                variant={activeFilter === filter.id ? "default" : "outline"}
                                onClick={() => handleFilterChange(filter.id)}
                                className={cn(
                                    "rounded-full transition-all duration-300 min-w-max",
                                    activeFilter === filter.id ? "scale-105 shadow-md" : "hover:border-primary/50"
                                )}
                            >
                                {filter.label}
                            </Button>
                        ))}
                    </div>

                    <div className="text-center mb-8 text-muted-foreground font-medium">
                        Found {filteredRecipes.length} recipes {activeFilter !== "all" && `ready in under ${activeFilter} mins`}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredRecipes.length > 0 ? (
                            filteredRecipes.map((recipe) => (
                                <RecipeCard key={recipe.id} recipe={recipe} />
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20">
                                <p className="text-lg text-muted-foreground">No recipes found within this time limit.</p>
                                <Button
                                    variant="link"
                                    onClick={() => handleFilterChange("all")}
                                    className="mt-2 text-primary"
                                >
                                    View all recipes
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default TimeBasedRecipes;
