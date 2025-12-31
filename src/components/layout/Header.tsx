import { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Utensils, Search, Heart, Menu, X, Sparkles, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { useFavorites } from "@/hooks/use-favorites";
import SearchDialog from "@/components/search/SearchDialog";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { count } = useFavorites();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
        <div className="container flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
              <Utensils className="h-6 w-6" />
            </div>
            <span className="font-display text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
              SemiTadka
            </span>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/category/breakfast"
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform duration-200"
            >
              Breakfast
            </Link>
            <Link
              to="/category/lunch"
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform duration-200"
            >
              Lunch
            </Link>
            <Link
              to="/category/dinner"
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform duration-200"
            >
              Dinner
            </Link>
            <Link
              to="/category/snacks"
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform duration-200"
            >
              Snacks
            </Link>

            {/* Minute Dishes Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors outline-none group data-[state=open]:text-primary">
                Minute Dishes
                <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-background/95 backdrop-blur-md border-border/50">
                {[10, 20, 30, 40, 50, 60].map((time) => (
                  <DropdownMenuItem key={time} asChild>
                    <Link
                      to={`/quick-recipes?time=${time}`}
                      className="w-full cursor-pointer font-medium"
                    >
                      Under {time} Minutes
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem asChild className="border-t border-border/50 mt-1 pt-2">
                  <Link to="/quick-recipes" className="w-full cursor-pointer font-bold text-primary">
                    View All
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              to="/about"
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform duration-200"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(true)}
              className="hover:bg-primary/10 hover:text-primary transition-colors rounded-full w-10 h-10"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/favorites">
              <Button variant="ghost" size="icon" className="relative hover:bg-primary/10 hover:text-primary transition-colors rounded-full w-10 h-10">
                <Heart className="h-5 w-5" />
                {count > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-sm">
                    {count > 9 ? "9+" : count}
                  </span>
                )}
              </Button>
            </Link>
            <Link to="/random">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 hover:text-primary transition-colors rounded-full w-10 h-10"
                title="Surprise Recipe"
              >
                <Sparkles className="h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-primary/10 hover:text-primary transition-colors rounded-full w-10 h-10"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden rounded-full w-10 h-10"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-border bg-background animate-in slide-in-from-top-5 fade-in duration-200">
            <div className="container py-6 flex flex-col gap-2">
              <Link
                to="/category/breakfast"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-4 rounded-xl text-base font-semibold text-foreground hover:bg-muted transition-colors flex items-center gap-3"
              >
                🍳 Breakfast
              </Link>
              <Link
                to="/category/lunch"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-4 rounded-xl text-base font-semibold text-foreground hover:bg-muted transition-colors flex items-center gap-3"
              >
                ☀️ Lunch
              </Link>
              <Link
                to="/category/dinner"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-4 rounded-xl text-base font-semibold text-foreground hover:bg-muted transition-colors flex items-center gap-3"
              >
                🌙 Dinner
              </Link>
              <Link
                to="/category/snacks"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-4 rounded-xl text-base font-semibold text-foreground hover:bg-muted transition-colors flex items-center gap-3"
              >
                ☕ Snacks
              </Link>
              <Link
                to="/quick-recipes"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-4 rounded-xl text-base font-semibold text-foreground hover:bg-muted transition-colors flex items-center gap-3"
              >
                ⚡ Quick Recipes
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-4 rounded-xl text-base font-semibold text-foreground hover:bg-muted transition-colors flex items-center gap-3"
              >
                👥 About
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-4 rounded-xl text-base font-semibold text-foreground hover:bg-muted transition-colors flex items-center gap-3"
              >
                📞 Contact
              </Link>
              <Link
                to="/favorites"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-4 rounded-xl text-base font-semibold text-foreground hover:bg-muted transition-colors flex items-center gap-3"
              >
                ❤️ Favorites
              </Link>
              <Link
                to="/random"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-4 rounded-xl text-base font-semibold text-foreground hover:bg-muted transition-colors flex items-center gap-3"
              >
                ✨ Surprise Recipe
              </Link>
            </div>
          </nav>
        )}
      </header>

      {/* Search Dialog */}
      <SearchDialog isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

export default Header;
