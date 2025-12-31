import { Star, User } from "lucide-react";

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Priya Sharma",
            role: "Home Cook",
            content: "SemiTadka has completely changed how I cook dinner. The recipes are so easy to follow and always turn out delicious!",
            rating: 5,
        },
        {
            name: "Rahul Verma",
            role: "Food Blogger",
            content: "I love the authentic flavors and the variety. The step-by-step instructions are perfect for beginners.",
            rating: 5,
        },
        {
            name: "Anita Desai",
            role: "Mother of two",
            content: "Finally, vegetarian recipes that my kids actually eat! The snack section is a lifesaver.",
            rating: 4,
        }
    ];

    return (
        <section className="py-20 sm:py-24">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">What Our Community Says</h2>
                    <p className="text-muted-foreground text-lg">
                        Join thousands of happy home cooks who have found their culinary inspiration with us.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/20 transition-colors duration-300">
                            <div className="flex gap-1 mb-6 text-yellow-500">
                                {[...Array(5)].map((_, index) => (
                                    <Star key={index} className={`h-4 w-4 ${index < t.rating ? "fill-current" : "text-border fill-muted"}`} />
                                ))}
                            </div>

                            <blockquote className="text-lg font-medium leading-relaxed mb-6">
                                "{t.content}"
                            </blockquote>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                                    <User className="h-5 w-5 text-muted-foreground" />
                                </div>
                                <div>
                                    <div className="font-bold text-foreground">{t.name}</div>
                                    <div className="text-sm text-muted-foreground">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
