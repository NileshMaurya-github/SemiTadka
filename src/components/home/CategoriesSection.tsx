import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "Breakfast",
    emoji: "🍳",
    description: "Start your day with energizing and delicious morning meals",
    href: "/category/breakfast",
    dishCount: 25,
    colorClass: "from-breakfast/20 to-breakfast/5",
    categoryId: "breakfast",
  },
  {
    title: "Lunch",
    emoji: "☀️",
    description: "Hearty and satisfying midday meals to fuel your afternoon",
    href: "/category/lunch",
    dishCount: 30,
    colorClass: "from-lunch/20 to-lunch/5",
    categoryId: "lunch",
  },
  {
    title: "Dinner",
    emoji: "🌙",
    description: "Comforting evening dishes for the perfect end to your day",
    href: "/category/dinner",
    dishCount: 25,
    colorClass: "from-dinner/20 to-dinner/5",
    categoryId: "dinner",
  },
  {
    title: "Snacks",
    emoji: "☕",
    description: "Tasty bites and treats for tea time or anytime cravings",
    href: "/category/snacks",
    dishCount: 25,
    colorClass: "from-snacks/20 to-snacks/5",
    categoryId: "snacks",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-wide uppercase">
            Curated Collections
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Browse by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you're looking for a quick breakfast to start your day or a comforting dinner to end it,
            we have the perfect recipe for every occasion.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.title}
              {...category}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
