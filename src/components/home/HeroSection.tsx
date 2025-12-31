import { Link } from "react-router-dom";
import { Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background py-16 sm:py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-10 text-[200px] opacity-5 rotate-12">🥗</div>
        <div className="absolute -right-20 bottom-10 text-[200px] opacity-5 -rotate-12">🍲</div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            <span>🌱</span>
            <span>100% Vegetarian</span>
          </div>

          {/* Title */}
          <h1 
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            Discover Delicious{" "}
            <span className="text-primary">Vegetarian</span> Recipes
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            Explore 100+ authentic Indian vegetarian dishes. From quick breakfasts 
            to comforting dinners, find the perfect recipe for every mood.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            <Link to="/category/lunch">
              <Button size="lg" className="px-8 hover-scale">
                Browse Recipes
              </Button>
            </Link>
            <Link to="/random">
              <Button variant="outline" size="lg" className="px-8 hover-scale gap-2">
                <Shuffle className="h-4 w-4" />
                Surprise Me
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-8 max-w-md mx-auto mt-12 animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-foreground">100+</div>
              <div className="text-sm text-muted-foreground">Recipes</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-foreground">4</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-foreground">4</div>
              <div className="text-sm text-muted-foreground">Moods</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
