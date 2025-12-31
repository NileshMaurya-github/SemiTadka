import { Recipe } from "./types";

export const dinnerRecipes: Recipe[] = [
  {
    id: "dinner-1",
    name: "Roti Sabzi",
    slug: "roti-sabzi",
    category: "dinner",
    moods: ["comfort", "light"],
    description: "Simple Indian flatbread with mixed vegetable curry",
    prepTime: 20,
    cookTime: 30,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "2 cups whole wheat flour",
      "Water for dough",
      "Mixed vegetables for sabzi",
      "1 onion, 2 tomatoes",
      "Basic spices",
      "Ghee"
    ],
    steps: [
      "Knead soft dough, rest 20 minutes.",
      "Prepare vegetable curry with onion-tomato base.",
      "Roll rotis thin and even.",
      "Cook on hot tawa until brown spots appear.",
      "Apply ghee and serve with curry."
    ],
    tips: ["Soft dough makes soft rotis"],
    servingSuggestions: ["Serve with pickle and curd"]
  },
  {
    id: "dinner-2",
    name: "Tandoori Roti with Paneer Curry",
    slug: "tandoori-roti-paneer-curry",
    category: "dinner",
    moods: ["comfort"],
    description: "Clay oven-style bread with rich paneer curry",
    prepTime: 30,
    cookTime: 40,
    servings: 4,
    difficulty: "medium",
    ingredients: [
      "2 cups wheat flour",
      "1/4 cup curd",
      "250g paneer",
      "Onion-tomato gravy base",
      "Cream, butter",
      "Garam masala"
    ],
    steps: [
      "Make dough with flour, curd, salt.",
      "Prepare paneer curry with rich gravy.",
      "Roll thick rotis.",
      "Cook on inverted tawa for charred effect.",
      "Serve hot with curry."
    ],
    tips: ["High heat gives tandoori effect at home"],
    servingSuggestions: ["Serve with onion rings and lemon"]
  },
  {
    id: "dinner-3",
    name: "Butter Naan with Dal Makhani",
    slug: "butter-naan-dal-makhani",
    category: "dinner",
    moods: ["comfort"],
    description: "Soft buttered naan with creamy black lentils",
    prepTime: 60,
    cookTime: 60,
    servings: 4,
    difficulty: "hard",
    ingredients: [
      "For naan: flour, yeast, curd, sugar",
      "For dal: whole urad dal, butter, cream",
      "Tomatoes, ginger-garlic",
      "Plenty of butter"
    ],
    steps: [
      "Make naan dough with yeast, let rise.",
      "Prepare dal makhani, simmer long.",
      "Roll naans, cook on tawa, finish on flame.",
      "Brush with butter.",
      "Serve dal topped with cream."
    ],
    tips: ["Dal improves overnight"],
    servingSuggestions: ["Restaurant-style dinner at home"]
  },
  {
    id: "dinner-4",
    name: "Veg Handi",
    slug: "veg-handi",
    category: "dinner",
    moods: ["comfort"],
    description: "Mixed vegetables cooked in clay pot style",
    prepTime: 25,
    cookTime: 35,
    servings: 4,
    difficulty: "medium",
    ingredients: [
      "Mixed vegetables",
      "1/2 cup cream",
      "1/4 cup cashew paste",
      "Onion-tomato gravy",
      "Garam masala, kasuri methi",
      "Butter"
    ],
    steps: [
      "Prepare onion-tomato gravy.",
      "Add cashew paste for richness.",
      "Add half-cooked vegetables.",
      "Simmer until done.",
      "Finish with cream, kasuri methi."
    ],
    tips: ["Cook covered for handi effect"],
    servingSuggestions: ["Serve in earthen pot for presentation"]
  },
  {
    id: "dinner-5",
    name: "Paneer Bhurji",
    slug: "paneer-bhurji",
    category: "dinner",
    moods: ["quick", "spicy"],
    description: "Scrambled cottage cheese with Indian spices",
    prepTime: 10,
    cookTime: 15,
    servings: 3,
    difficulty: "easy",
    ingredients: [
      "250g paneer, crumbled",
      "1 onion, chopped",
      "2 tomatoes, chopped",
      "2 green chilies",
      "1/2 tsp turmeric",
      "1/2 tsp garam masala",
      "Coriander leaves"
    ],
    steps: [
      "Heat oil, sauté onions until golden.",
      "Add tomatoes, chilies, cook soft.",
      "Add turmeric, salt.",
      "Add crumbled paneer, mix well.",
      "Cook 5 minutes, add garam masala.",
      "Garnish with coriander."
    ],
    tips: ["Don't overcook paneer"],
    servingSuggestions: ["Serve with hot chapatis"]
  },
  {
    id: "dinner-6",
    name: "Aloo Matar Curry",
    slug: "aloo-matar-curry",
    category: "dinner",
    moods: ["comfort", "quick"],
    description: "Potato and peas in tomato gravy",
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "3 potatoes, cubed",
      "1 cup peas",
      "2 tomatoes, pureed",
      "1 onion, chopped",
      "Ginger-garlic paste",
      "Basic curry spices"
    ],
    steps: [
      "Sauté onions until brown.",
      "Add ginger-garlic, spices.",
      "Add tomato puree, cook well.",
      "Add potatoes, peas, water.",
      "Simmer until tender."
    ],
    tips: ["Slightly mash some potatoes for thicker gravy"],
    servingSuggestions: ["Perfect with pooris"]
  },
  {
    id: "dinner-7",
    name: "Chole Bhature",
    slug: "chole-bhature",
    category: "dinner",
    moods: ["spicy", "comfort"],
    description: "Spicy chickpeas with fluffy fried bread",
    prepTime: 480,
    cookTime: 45,
    servings: 4,
    difficulty: "medium",
    ingredients: [
      "1 cup chickpeas, soaked",
      "Chole masala",
      "Tea bag for color",
      "For bhature: flour, curd, baking powder",
      "Oil for frying"
    ],
    steps: [
      "Cook chickpeas with tea bag until soft.",
      "Make spicy chole gravy.",
      "Prepare bhatura dough, rest 2 hours.",
      "Roll and deep fry until puffed.",
      "Serve chole topped with onions, chutney."
    ],
    tips: ["Dough should be soft for puffy bhaturas"],
    servingSuggestions: ["Serve with pickle and onion rings"]
  },
  {
    id: "dinner-8",
    name: "Pav Bhaji",
    slug: "pav-bhaji",
    category: "dinner",
    moods: ["comfort", "spicy"],
    description: "Mumbai street food - spiced mashed vegetables with bread",
    prepTime: 20,
    cookTime: 35,
    servings: 4,
    difficulty: "medium",
    ingredients: [
      "Mixed vegetables (potato, cauliflower, peas)",
      "1 capsicum, chopped",
      "2 onions, chopped",
      "3 tomatoes, chopped",
      "Pav bhaji masala",
      "Butter - lots",
      "Pav buns"
    ],
    steps: [
      "Boil and mash all vegetables.",
      "Sauté onions, capsicum in butter.",
      "Add tomatoes, pav bhaji masala.",
      "Add mashed vegetables, mix well.",
      "Mash more while cooking with butter.",
      "Toast pav in butter.",
      "Garnish bhaji with butter, onions, coriander."
    ],
    tips: ["Don't skimp on butter - it's the soul"],
    servingSuggestions: ["Serve with lemon wedges and extra butter"]
  },
  {
    id: "dinner-9",
    name: "Veg Korma",
    slug: "veg-korma",
    category: "dinner",
    moods: ["comfort"],
    description: "Vegetables in mild creamy cashew gravy",
    prepTime: 25,
    cookTime: 30,
    servings: 4,
    difficulty: "medium",
    ingredients: [
      "Mixed vegetables",
      "1/2 cup cashews",
      "1/2 cup coconut",
      "1 onion",
      "Whole spices",
      "1/2 cup cream"
    ],
    steps: [
      "Blend cashews, coconut, onion to paste.",
      "Fry whole spices in ghee.",
      "Add paste, cook until golden.",
      "Add vegetables, water.",
      "Simmer until done, add cream."
    ],
    tips: ["Roast cashews for deeper flavor"],
    servingSuggestions: ["Pairs well with biryani or pulao"]
  },
  {
    id: "dinner-10",
    name: "Mushroom Masala",
    slug: "mushroom-masala",
    category: "dinner",
    moods: ["comfort"],
    description: "Button mushrooms in spiced onion-tomato gravy",
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "300g mushrooms, sliced",
      "2 onions, pureed",
      "2 tomatoes, pureed",
      "Ginger-garlic paste",
      "Garam masala",
      "Cream for garnish"
    ],
    steps: [
      "Sauté mushrooms until water evaporates.",
      "Remove and set aside.",
      "Cook onion paste until brown.",
      "Add ginger-garlic, tomatoes, spices.",
      "Add mushrooms back, simmer.",
      "Finish with cream."
    ],
    tips: ["Don't wash mushrooms - just wipe clean"],
    servingSuggestions: ["Serve with naan or rice"]
  },
  {
    id: "dinner-11",
    name: "Veg Cutlet",
    slug: "veg-cutlet",
    category: "dinner",
    moods: ["quick"],
    description: "Crispy fried vegetable patties",
    prepTime: 25,
    cookTime: 20,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "2 potatoes, boiled mashed",
      "1 carrot, grated",
      "1/4 cup peas, mashed",
      "Bread crumbs",
      "Garam masala",
      "Oil for frying"
    ],
    steps: [
      "Mix all vegetables with spices.",
      "Shape into round patties.",
      "Dip in flour, then water, then crumbs.",
      "Shallow or deep fry until golden.",
      "Serve hot with chutney."
    ],
    tips: ["Chill patties before frying for better shape"],
    servingSuggestions: ["Serve with green chutney and ketchup"]
  },
  {
    id: "dinner-12",
    name: "Paneer Tikka (Tawa)",
    slug: "paneer-tikka-tawa",
    category: "dinner",
    moods: ["spicy"],
    description: "Marinated paneer grilled on flat pan",
    prepTime: 30,
    cookTime: 20,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "250g paneer, cubed",
      "1 cup thick curd",
      "1 tbsp tikka masala",
      "1 capsicum, cubed",
      "1 onion, cubed",
      "Butter, chaat masala"
    ],
    steps: [
      "Marinate paneer, vegetables in spiced curd.",
      "Rest for 30 minutes minimum.",
      "Cook on hot tawa with butter.",
      "Turn for even charring.",
      "Sprinkle chaat masala, lemon juice."
    ],
    tips: ["High heat gives smoky flavor"],
    servingSuggestions: ["Serve with mint chutney and onion rings"]
  },
  {
    id: "dinner-13",
    name: "Veg Frankie",
    slug: "veg-frankie",
    category: "dinner",
    moods: ["quick"],
    description: "Indian-style vegetable wrap",
    prepTime: 20,
    cookTime: 20,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "4 rotis or roomali roti",
      "Paneer or potato filling",
      "Onions, capsicum",
      "Green chutney",
      "Chaat masala",
      "Lemon juice"
    ],
    steps: [
      "Prepare spiced filling.",
      "Warm rotis, spread chutney.",
      "Add filling, onions, capsicum.",
      "Sprinkle chaat masala, lemon.",
      "Roll tightly, wrap bottom with paper.",
      "Serve immediately."
    ],
    tips: ["Wrap tightly to prevent falling apart"],
    servingSuggestions: ["Perfect street food dinner"]
  },
  {
    id: "dinner-14",
    name: "Stuffed Paratha",
    slug: "stuffed-paratha",
    category: "dinner",
    moods: ["comfort"],
    description: "Whole wheat bread stuffed with vegetables",
    prepTime: 30,
    cookTime: 25,
    servings: 4,
    difficulty: "medium",
    ingredients: [
      "2 cups wheat flour",
      "Choice of filling: aloo/gobhi/paneer",
      "Spices for filling",
      "Ghee for cooking"
    ],
    steps: [
      "Make soft dough, rest covered.",
      "Prepare chosen filling with spices.",
      "Roll dough, place filling, seal.",
      "Roll gently into paratha.",
      "Cook on tawa with ghee.",
      "Serve hot."
    ],
    tips: ["Seal edges well to prevent filling leaking"],
    servingSuggestions: ["Serve with curd, pickle, butter"]
  },
  {
    id: "dinner-15",
    name: "Tomato Soup",
    slug: "tomato-soup",
    category: "dinner",
    moods: ["light", "comfort"],
    description: "Classic creamy tomato soup",
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "6 ripe tomatoes",
      "1 onion, chopped",
      "2 garlic cloves",
      "1 tbsp butter",
      "1/4 cup cream",
      "Sugar, salt, pepper",
      "Fresh basil"
    ],
    steps: [
      "Roast tomatoes, onion, garlic.",
      "Blend to smooth puree.",
      "Heat butter, add puree.",
      "Season with sugar, salt, pepper.",
      "Simmer 15 minutes.",
      "Finish with cream, serve with croutons."
    ],
    tips: ["Roasting tomatoes adds depth"],
    servingSuggestions: ["Serve with garlic bread"]
  },
  {
    id: "dinner-16",
    name: "Sweet Corn Soup",
    slug: "sweet-corn-soup",
    category: "dinner",
    moods: ["light", "quick"],
    description: "Indo-Chinese style corn soup",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "1 cup sweet corn",
      "3 cups vegetable stock",
      "1 tbsp cornflour",
      "1 tsp soy sauce",
      "White pepper",
      "Spring onions"
    ],
    steps: [
      "Blend half the corn, keep rest whole.",
      "Boil stock, add all corn.",
      "Add soy sauce, pepper.",
      "Mix cornflour with water, add to soup.",
      "Stir until thickened.",
      "Garnish with spring onions."
    ],
    tips: ["Use fresh corn for best taste"],
    servingSuggestions: ["Serve with chili vinegar"]
  },
  {
    id: "dinner-17",
    name: "Veg Manchurian",
    slug: "veg-manchurian",
    category: "dinner",
    moods: ["spicy"],
    description: "Crispy vegetable balls in spicy sauce",
    prepTime: 25,
    cookTime: 25,
    servings: 4,
    difficulty: "medium",
    ingredients: [
      "1 cup cabbage, grated",
      "1 carrot, grated",
      "1/2 cup flour + cornflour",
      "For sauce: soy sauce, chili sauce",
      "Ginger-garlic, spring onions",
      "Oil for frying"
    ],
    steps: [
      "Mix vegetables with flour to make balls.",
      "Deep fry until golden, drain.",
      "Make sauce: sauté ginger-garlic.",
      "Add sauces, cornflour slurry.",
      "Add fried balls, toss well.",
      "Garnish with spring onions."
    ],
    tips: ["Drain balls well before adding to sauce"],
    servingSuggestions: ["Serve dry or with gravy over rice"]
  },
  {
    id: "dinner-18",
    name: "Chili Paneer",
    slug: "chili-paneer",
    category: "dinner",
    moods: ["spicy"],
    description: "Indo-Chinese spicy paneer stir-fry",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "250g paneer, cubed",
      "1 capsicum, cubed",
      "1 onion, cubed",
      "2 tbsp soy sauce",
      "1 tbsp chili sauce",
      "Cornflour for coating",
      "Spring onions"
    ],
    steps: [
      "Coat paneer in cornflour, shallow fry.",
      "Stir-fry capsicum, onion on high heat.",
      "Add ginger-garlic, sauces.",
      "Add fried paneer, toss well.",
      "Finish with spring onions."
    ],
    tips: ["High heat is essential for smoky flavor"],
    servingSuggestions: ["Serve as starter or with fried rice"]
  },
  {
    id: "dinner-19",
    name: "Veg Momos",
    slug: "veg-momos",
    category: "dinner",
    moods: ["light"],
    description: "Steamed Tibetan dumplings with vegetables",
    prepTime: 40,
    cookTime: 20,
    servings: 4,
    difficulty: "medium",
    ingredients: [
      "2 cups maida (all-purpose flour)",
      "2 cups cabbage, chopped fine",
      "1 carrot, grated",
      "Spring onions",
      "Soy sauce",
      "Ginger-garlic",
      "Salt, pepper"
    ],
    steps: [
      "Knead smooth dough, rest 30 minutes.",
      "Prepare filling: sauté vegetables with sauces.",
      "Roll small circles of dough.",
      "Place filling, pleat and seal.",
      "Steam for 10-12 minutes.",
      "Serve with spicy chutney."
    ],
    tips: ["Don't overfill or momos will burst"],
    servingSuggestions: ["Serve with fiery red chutney"]
  },
  {
    id: "dinner-20",
    name: "Vegetable Stew",
    slug: "vegetable-stew",
    category: "dinner",
    moods: ["light", "comfort"],
    description: "Kerala-style coconut milk vegetable stew",
    prepTime: 20,
    cookTime: 30,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "Mixed vegetables",
      "2 cups coconut milk",
      "1 onion, sliced",
      "2 green chilies, slit",
      "Few curry leaves",
      "Whole spices (cinnamon, cloves)",
      "1 inch ginger"
    ],
    steps: [
      "Boil vegetables until just tender.",
      "In another pan, sauté onion, ginger, chilies.",
      "Add whole spices, curry leaves.",
      "Add thin coconut milk and vegetables.",
      "Simmer 10 minutes.",
      "Add thick coconut milk, don't boil after."
    ],
    tips: ["Don't boil after adding thick coconut milk"],
    servingSuggestions: ["Serve with appam or bread"]
  },
  {
    id: "dinner-21",
    name: "Khichdi with Ghee",
    slug: "khichdi-with-ghee",
    category: "dinner",
    moods: ["comfort", "light"],
    description: "Simple rice and lentil comfort food",
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "1 cup rice",
      "1/2 cup moong dal",
      "1/2 tsp turmeric",
      "1 tsp cumin seeds",
      "3 tbsp ghee",
      "Salt to taste"
    ],
    steps: [
      "Wash rice and dal together.",
      "Heat ghee, add cumin.",
      "Add rice, dal, turmeric.",
      "Add 4 cups water, salt.",
      "Pressure cook until soft.",
      "Top generously with ghee."
    ],
    tips: ["More ghee = more comfort"],
    servingSuggestions: ["Serve with pickle and papad"]
  },
  {
    id: "dinner-22",
    name: "Dalia Khichdi",
    slug: "dalia-khichdi",
    category: "dinner",
    moods: ["light"],
    description: "Healthy broken wheat khichdi",
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "1 cup dalia (broken wheat)",
      "1/2 cup moong dal",
      "Mixed vegetables",
      "1 tsp cumin seeds",
      "2 tbsp ghee",
      "Salt to taste"
    ],
    steps: [
      "Roast dalia lightly.",
      "Heat ghee, add cumin.",
      "Add vegetables, sauté.",
      "Add dalia, dal, water.",
      "Pressure cook until done.",
      "Serve with curd."
    ],
    tips: ["Roasting adds nutty flavor"],
    servingSuggestions: ["Perfect light dinner option"]
  },
  {
    id: "dinner-23",
    name: "Veg Wraps",
    slug: "veg-wraps",
    category: "dinner",
    moods: ["quick"],
    description: "Quick vegetable and paneer wraps",
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "4 large rotis or tortillas",
      "Paneer tikka or grilled vegetables",
      "Lettuce, cucumber",
      "Mint chutney",
      "Hung curd dressing"
    ],
    steps: [
      "Prepare filling of choice.",
      "Warm wraps slightly.",
      "Spread chutney and dressing.",
      "Add filling and vegetables.",
      "Roll tightly, cut diagonally.",
      "Serve immediately."
    ],
    tips: ["Slightly warm wraps roll better"],
    servingSuggestions: ["Perfect quick dinner"]
  },
  {
    id: "dinner-24",
    name: "Tofu Stir Fry",
    slug: "tofu-stir-fry",
    category: "dinner",
    moods: ["light", "quick"],
    description: "Asian-style stir-fried tofu with vegetables",
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "300g firm tofu, cubed",
      "Mixed vegetables",
      "2 tbsp soy sauce",
      "1 tbsp hoisin sauce",
      "Ginger-garlic",
      "Sesame oil"
    ],
    steps: [
      "Press tofu, cut into cubes.",
      "Pan-fry tofu until golden.",
      "Stir-fry vegetables on high heat.",
      "Add ginger-garlic, sauces.",
      "Add tofu, toss well.",
      "Finish with sesame oil."
    ],
    tips: ["Press tofu well for better texture"],
    servingSuggestions: ["Serve with steamed rice"]
  },
  {
    id: "dinner-25",
    name: "Vegetable Pasta",
    slug: "vegetable-pasta",
    category: "dinner",
    moods: ["comfort", "quick"],
    description: "Italian-style pasta with vegetables",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "300g pasta",
      "Mixed vegetables",
      "1 cup tomato sauce",
      "2 garlic cloves",
      "Italian herbs",
      "Olive oil",
      "Parmesan"
    ],
    steps: [
      "Boil pasta al dente, reserve water.",
      "Sauté garlic in olive oil.",
      "Add vegetables, cook 3 minutes.",
      "Add tomato sauce, herbs.",
      "Toss pasta with sauce.",
      "Add pasta water if needed.",
      "Top with parmesan."
    ],
    tips: ["Pasta water helps sauce cling"],
    servingSuggestions: ["Serve with garlic bread"]
  }
];
