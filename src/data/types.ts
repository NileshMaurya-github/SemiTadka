export type Category = "breakfast" | "lunch" | "dinner" | "snacks";

export type Mood = "light" | "spicy" | "comfort" | "quick";

export type Difficulty = "easy" | "medium" | "hard";

export interface Recipe {
  id: string;
  name: string;
  slug: string;
  category: Category;
  moods: Mood[];
  description: string;
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  servings: number;
  difficulty: Difficulty;
  ingredients: string[];
  steps: string[];
  tips: string[];
  variations?: string[];
  servingSuggestions?: string[];
}

export interface MoodInfo {
  id: Mood;
  label: string;
  emoji: string;
  color: string;
}

export const moods: MoodInfo[] = [
  { id: "light", label: "Light & Healthy", emoji: "🌞", color: "mood-light" },
  { id: "spicy", label: "Spicy & Desi", emoji: "🔥", color: "mood-spicy" },
  { id: "comfort", label: "Comfort Food", emoji: "😌", color: "mood-comfort" },
  { id: "quick", label: "Quick & Easy", emoji: "⚡", color: "mood-quick" },
];

export const categoryInfo: Record<Category, { title: string; emoji: string; description: string }> = {
  breakfast: {
    title: "Breakfast",
    emoji: "🍳",
    description: "Start your day with energizing and delicious morning meals",
  },
  lunch: {
    title: "Lunch",
    emoji: "☀️",
    description: "Hearty and satisfying midday meals to fuel your afternoon",
  },
  dinner: {
    title: "Dinner",
    emoji: "🌙",
    description: "Comforting evening dishes for the perfect end to your day",
  },
  snacks: {
    title: "Snacks",
    emoji: "☕",
    description: "Tasty bites and treats for tea time or anytime cravings",
  },
};

// Helper to generate slug from name
export const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

// Helper to get total time
export const getTotalTime = (recipe: Recipe): number => {
  return recipe.prepTime + recipe.cookTime;
};

// Helper to format time
export const formatTime = (minutes: number): string => {
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
};
