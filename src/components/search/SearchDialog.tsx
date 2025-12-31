import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { searchRecipes } from "@/data/recipes";
import { Recipe, formatTime, getTotalTime } from "@/data/types";

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchDialog = ({ isOpen, onClose }: SearchDialogProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Recipe[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length >= 2) {
      const searchResults = searchRecipes(query);
      setResults(searchResults.slice(0, 8));
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleResultClick = (slug: string) => {
    navigate(`/recipe/${slug}`);
    onClose();
    setQuery("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="relative z-10 max-w-2xl mx-auto mt-20 px-4">
        <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden animate-scale-in">
          {/* Search Input */}
          <div className="flex items-center gap-3 p-4 border-b border-border">
            <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <Input
              ref={inputRef}
              type="text"
              placeholder="Search recipes by name or ingredient..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border-0 focus-visible:ring-0 text-lg p-0 h-auto"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="flex-shrink-0"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Results */}
          {results.length > 0 && (
            <div className="max-h-96 overflow-y-auto p-2">
              {results.map((recipe) => (
                <button
                  key={recipe.id}
                  onClick={() => handleResultClick(recipe.slug)}
                  className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors text-left"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl flex-shrink-0">
                    {recipe.category === "breakfast" && "🍳"}
                    {recipe.category === "lunch" && "🍛"}
                    {recipe.category === "dinner" && "🌙"}
                    {recipe.category === "snacks" && "☕"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground truncate">
                      {recipe.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {formatTime(getTotalTime(recipe))} • {recipe.difficulty}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* No results */}
          {query.length >= 2 && results.length === 0 && (
            <div className="p-8 text-center text-muted-foreground">
              <p>No recipes found for "{query}"</p>
              <p className="text-sm mt-1">Try searching for different ingredients</p>
            </div>
          )}

          {/* Initial state */}
          {query.length < 2 && (
            <div className="p-6 text-center text-muted-foreground">
              <p className="text-sm">Type at least 2 characters to search</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchDialog;
