import Layout from "@/components/layout/Layout";
import { Utensils, Heart, Users, Sparkles } from "lucide-react";

const About = () => {
    return (
        <Layout>
            <div className="container py-16 sm:py-24">
                {/* Hero */}
                <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
                    <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6 text-foreground">
                        About SemiTadka
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Celebrating the art of Indian vegetarian cooking, one recipe at a time.
                        We bring authentic flavors from our kitchen to yours.
                    </p>
                </div>

                {/* Mission Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-card border border-border/50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                            <Utensils className="h-6 w-6" />
                        </div>
                        <h3 className="font-display text-xl font-bold mb-3">Authentic Recipes</h3>
                        <p className="text-muted-foreground">
                            Tried and tested recipes that stay true to traditional Indian cooking methods and flavors.
                        </p>
                    </div>
                    <div className="bg-card border border-border/50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500">
                            <Heart className="h-6 w-6" />
                        </div>
                        <h3 className="font-display text-xl font-bold mb-3">Made with Love</h3>
                        <p className="text-muted-foreground">
                            Every dish is curated with passion, ensuring you get the best culinary experience.
                        </p>
                    </div>
                    <div className="bg-card border border-border/50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500">
                            <Users className="h-6 w-6" />
                        </div>
                        <h3 className="font-display text-xl font-bold mb-3">Community First</h3>
                        <p className="text-muted-foreground">
                            Building a community of food lovers who share a passion for vegetarian cuisine.
                        </p>
                    </div>
                </div>

                {/* Story Section */}
                <div className="bg-secondary/30 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <h2 className="font-display text-3xl font-bold">Our Story</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            SemiTadka started with a simple idea: to make Indian vegetarian cooking accessible and enjoyable for everyone.
                            Whether you're a beginner or an experienced cook, our goal is to provide you with detailed, easy-to-follow recipes
                            that yield delicious results every time.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            We believe that food is not just about sustenance; it's about culture, tradition, and bringing people together.
                            Explore our diverse collection of recipes ranging from quick snacks to elaborate festive meals.
                        </p>
                    </div>
                    <div className="flex-1 relative">
                        <div className="aspect-square rounded-2xl overflow-hidden shadow-xl rotate-3 hover:rotate-0 transition-all duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?w=800&auto=format&fit=crop"
                                alt="Cooking Together"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default About;
