import { Link } from "react-router-dom";
import { Utensils, Heart, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border/40 backdrop-blur-sm">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                <Utensils className="h-5 w-5" />
              </div>
              <span className="font-display text-xl font-bold">
                SemiTadka
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Discover authentic vegetarian recipes that bring joy to your table.
              From quick bites to elaborate feasts, we have it all.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors hover:scale-110 transform duration-200">
                <Github className="h-5 w-5" />
              </a>
              {/* Add more social icons if needed */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link to="/category/breakfast" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span>🍳</span> Breakfast
                </Link>
              </li>
              <li>
                <Link to="/category/lunch" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span>☀️</span> Lunch
                </Link>
              </li>
              <li>
                <Link to="/category/dinner" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span>🌙</span> Dinner
                </Link>
              </li>
              <li>
                <Link to="/category/snacks" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span>☕</span> Snacks
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="hover:text-primary transition-colors">
                  Favorites
                </Link>
              </li>
              <li>
                <Link to="/random" className="hover:text-primary transition-colors">
                  Surprise Recipe
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter (Visual Only) */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest recipes sent right to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-w-0 rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <button className="rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SemiTadka. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> for food lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
