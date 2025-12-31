import { Recipe } from "./types";

export const snacksRecipes: Recipe[] = [
  {
    id: "snacks-1",
    name: "Samosa",
    slug: "samosa",
    category: "snacks",
    moods: ["spicy", "comfort"],
    description: "Crispy pastry filled with spiced potatoes",
    prepTime: 40,
    cookTime: 30,
    servings: 12,
    difficulty: "medium",
    ingredients: [
      "2 cups maida",
      "3 potatoes, boiled mashed",
      "1/2 cup peas",
      "1 tsp cumin seeds",
      "1 tsp garam masala",
      "Green chilies, coriander",
      "Oil for frying"
    ],
    steps: [
      "Make dough with maida, oil, salt.",
      "Prepare potato-pea filling with spices.",
      "Roll dough, cut into semicircles.",
      "Form cone, fill, seal with water.",
      "Deep fry on medium heat until golden.",
      "Serve hot with chutneys."
    ],
    tips: ["Medium heat ensures crispy layers"],
    servingSuggestions: ["Serve with tamarind and green chutney"]
  },
  {
    id: "snacks-2",
    name: "Kachori",
    slug: "kachori",
    category: "snacks",
    moods: ["spicy", "comfort"],
    description: "Flaky pastry with spiced lentil filling",
    prepTime: 45,
    cookTime: 30,
    servings: 10,
    difficulty: "medium",
    ingredients: [
      "2 cups maida",
      "1/2 cup urad dal, soaked",
      "1 tsp fennel seeds",
      "1 tsp red chili powder",
      "Asafoetida",
      "Oil for frying"
    ],
    steps: [
      "Make flaky dough with maida, oil.",
      "Grind dal coarsely for filling.",
      "Cook filling with spices.",
      "Stuff dough balls, flatten slightly.",
      "Deep fry on low heat until crispy."
    ],
    tips: ["Low heat gives flaky texture"],
    servingSuggestions: ["Serve with aloo sabzi and chutney"]
  },
  {
    id: "snacks-3",
    name: "Bread Pakora",
    slug: "bread-pakora",
    category: "snacks",
    moods: ["quick", "comfort"],
    description: "Bread slices dipped in batter and fried",
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "8 bread slices",
      "1 cup besan",
      "1/4 tsp turmeric",
      "1/2 tsp red chili powder",
      "Ajwain, salt",
      "Oil for frying"
    ],
    steps: [
      "Make thick batter with besan, spices.",
      "Cut bread into triangles.",
      "Dip in batter, coat well.",
      "Deep fry until golden.",
      "Serve hot with chutney."
    ],
    tips: ["Thick batter gives better coating"],
    servingSuggestions: ["Perfect with tea"]
  },
  {
    id: "snacks-4",
    name: "Aloo Pakora",
    slug: "aloo-pakora",
    category: "snacks",
    moods: ["quick", "comfort"],
    description: "Crispy potato fritters",
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "3 potatoes, sliced thin",
      "1 cup besan",
      "1/4 tsp turmeric",
      "Red chili powder",
      "Salt, ajwain",
      "Oil for frying"
    ],
    steps: [
      "Slice potatoes evenly.",
      "Make batter with besan, spices.",
      "Dip potato slices in batter.",
      "Deep fry until golden and crispy.",
      "Drain and serve hot."
    ],
    tips: ["Thin slices cook evenly"],
    servingSuggestions: ["Serve with mint chutney"]
  },
  {
    id: "snacks-5",
    name: "Onion Pakora",
    slug: "onion-pakora",
    category: "snacks",
    moods: ["quick", "spicy"],
    description: "Crunchy onion fritters",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "2 onions, sliced thin",
      "1 cup besan",
      "2 green chilies, chopped",
      "Coriander leaves",
      "Salt, red chili powder",
      "Oil for frying"
    ],
    steps: [
      "Mix sliced onions with besan, spices.",
      "Add just enough water to bind.",
      "Drop spoonfuls into hot oil.",
      "Fry until golden and crispy.",
      "Serve immediately."
    ],
    tips: ["Less water makes crispier pakoras"],
    servingSuggestions: ["Best enjoyed hot with chai"]
  },
  {
    id: "snacks-6",
    name: "Paneer Pakora",
    slug: "paneer-pakora",
    category: "snacks",
    moods: ["comfort"],
    description: "Crispy fried paneer fritters",
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "200g paneer, cubed",
      "1 cup besan",
      "1/4 tsp turmeric",
      "Red chili powder",
      "Chaat masala",
      "Oil for frying"
    ],
    steps: [
      "Cut paneer into thick cubes.",
      "Make batter with besan, spices.",
      "Dip paneer in batter.",
      "Deep fry until golden.",
      "Sprinkle chaat masala, serve."
    ],
    tips: ["Don't overcook or paneer hardens"],
    servingSuggestions: ["Serve with green chutney"]
  },
  {
    id: "snacks-7",
    name: "Veg Spring Rolls",
    slug: "veg-spring-rolls",
    category: "snacks",
    moods: ["light"],
    description: "Crispy rolls with vegetable filling",
    prepTime: 30,
    cookTime: 20,
    servings: 4,
    difficulty: "medium",
    ingredients: [
      "Spring roll sheets",
      "2 cups cabbage, shredded",
      "1 carrot, julienned",
      "Spring onions",
      "Soy sauce",
      "Oil for frying"
    ],
    steps: [
      "Stir-fry vegetables with soy sauce.",
      "Cool the filling completely.",
      "Place filling on sheet, roll tight.",
      "Seal with flour-water paste.",
      "Deep fry until golden and crispy."
    ],
    tips: ["Cool filling prevents soggy rolls"],
    servingSuggestions: ["Serve with sweet chili sauce"]
  },
  {
    id: "snacks-8",
    name: "Cheese Balls",
    slug: "cheese-balls",
    category: "snacks",
    moods: ["comfort"],
    description: "Crispy fried cheese-filled balls",
    prepTime: 25,
    cookTime: 15,
    servings: 4,
    difficulty: "medium",
    ingredients: [
      "2 potatoes, boiled mashed",
      "1/2 cup cheese, grated",
      "2 tbsp cornflour",
      "Bread crumbs",
      "Salt, pepper",
      "Oil for frying"
    ],
    steps: [
      "Mix potato, cheese, cornflour, seasonings.",
      "Shape into small balls.",
      "Roll in flour, dip in water, coat in crumbs.",
      "Freeze for 15 minutes.",
      "Deep fry until golden."
    ],
    tips: ["Freezing helps maintain shape"],
    servingSuggestions: ["Serve with ketchup"]
  },
  {
    id: "snacks-9",
    name: "Dhokla",
    slug: "dhokla",
    category: "snacks",
    moods: ["light"],
    description: "Steamed savory gram flour cake from Gujarat",
    prepTime: 15,
    cookTime: 20,
    servings: 6,
    difficulty: "easy",
    ingredients: [
      "1 cup besan",
      "1/2 cup curd",
      "1 tsp fruit salt (Eno)",
      "1 tsp mustard seeds",
      "Green chilies, curry leaves",
      "Sugar, salt"
    ],
    steps: [
      "Mix besan, curd, turmeric, salt, sugar.",
      "Add Eno just before steaming, mix quick.",
      "Pour in greased plate, steam 15 minutes.",
      "Make tadka with mustard, chilies, curry leaves.",
      "Pour tadka over dhokla, cut into pieces."
    ],
    tips: ["Add Eno and steam immediately"],
    servingSuggestions: ["Serve with green chutney"]
  },
  {
    id: "snacks-10",
    name: "Khandvi",
    slug: "khandvi",
    category: "snacks",
    moods: ["light"],
    description: "Rolled gram flour savory from Gujarat",
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    difficulty: "hard",
    ingredients: [
      "1 cup besan",
      "1.5 cups curd",
      "1/2 tsp turmeric",
      "1 tsp ginger-green chili paste",
      "Mustard seeds, curry leaves",
      "Coconut, coriander for garnish"
    ],
    steps: [
      "Mix besan, curd, turmeric, salt, ginger-chili.",
      "Cook on low heat, stirring continuously.",
      "When thick, spread thin on back of plates.",
      "Let cool, roll into tight rolls.",
      "Cut, make tadka, pour over.",
      "Garnish with coconut, coriander."
    ],
    tips: ["Continuous stirring is crucial"],
    servingSuggestions: ["Serve as appetizer"]
  },
  {
    id: "snacks-11",
    name: "Poha Chivda",
    slug: "poha-chivda",
    category: "snacks",
    moods: ["light", "quick"],
    description: "Crispy flattened rice snack mix",
    prepTime: 10,
    cookTime: 20,
    servings: 6,
    difficulty: "easy",
    ingredients: [
      "3 cups thin poha",
      "1/2 cup peanuts",
      "1/4 cup curry leaves",
      "2 tbsp raisins",
      "Green chilies",
      "Turmeric, salt, sugar",
      "Oil for frying"
    ],
    steps: [
      "Deep fry poha in batches until crispy.",
      "Fry peanuts, curry leaves, chilies separately.",
      "Mix all with turmeric, salt, sugar.",
      "Add raisins, mix well.",
      "Cool and store airtight."
    ],
    tips: ["Fry poha on medium heat"],
    servingSuggestions: ["Perfect tea-time snack"]
  },
  {
    id: "snacks-12",
    name: "Roasted Chana",
    slug: "roasted-chana",
    category: "snacks",
    moods: ["light", "quick"],
    description: "Spiced roasted chickpeas",
    prepTime: 5,
    cookTime: 20,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "1 cup roasted chana",
      "1 tsp chaat masala",
      "1/2 tsp red chili powder",
      "1/4 tsp black salt",
      "Lemon juice"
    ],
    steps: [
      "Heat chana slightly to crisp up.",
      "Toss with all masalas.",
      "Add lemon juice, mix well.",
      "Serve immediately."
    ],
    tips: ["Store bought roasted chana works well"],
    servingSuggestions: ["Healthy snacking option"]
  },
  {
    id: "snacks-13",
    name: "Bhel Puri",
    slug: "bhel-puri",
    category: "snacks",
    moods: ["light", "quick"],
    description: "Mumbai street-style puffed rice chaat",
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "3 cups puffed rice",
      "1 onion, chopped",
      "1 tomato, chopped",
      "1 potato, boiled cubed",
      "Sev, papdi",
      "Green and tamarind chutney",
      "Chaat masala"
    ],
    steps: [
      "Mix puffed rice with vegetables.",
      "Add chutneys as per taste.",
      "Add sev, papdi, chaat masala.",
      "Toss well, serve immediately."
    ],
    tips: ["Mix just before serving to keep crispy"],
    servingSuggestions: ["Best eaten fresh"]
  },
  {
    id: "snacks-14",
    name: "Sev Puri",
    slug: "sev-puri",
    category: "snacks",
    moods: ["quick"],
    description: "Crispy puris topped with chutneys and sev",
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "24 flat puris",
      "1 potato, boiled mashed",
      "1 onion, finely chopped",
      "Green and tamarind chutney",
      "Sev",
      "Chaat masala"
    ],
    steps: [
      "Arrange puris on plate.",
      "Top each with mashed potato.",
      "Add chopped onion.",
      "Drizzle both chutneys.",
      "Top with sev and chaat masala.",
      "Serve immediately."
    ],
    tips: ["Assemble just before serving"],
    servingSuggestions: ["Perfect party appetizer"]
  },
  {
    id: "snacks-15",
    name: "Pani Puri",
    slug: "pani-puri",
    category: "snacks",
    moods: ["spicy"],
    description: "Crispy shells with spicy mint water",
    prepTime: 30,
    cookTime: 0,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "Ready-made puris",
      "For pani: mint, coriander, green chili",
      "Tamarind, cumin, black salt",
      "Boiled potato, chickpeas",
      "Boondi"
    ],
    steps: [
      "Blend mint, coriander, chilies for green pani.",
      "Add tamarind, cumin, black salt, water.",
      "Mash potato with salt and cumin.",
      "Crack puris, add filling.",
      "Fill with chilled pani.",
      "Eat in one bite!"
    ],
    tips: ["Pani should be chilled"],
    servingSuggestions: ["The ultimate street food experience"]
  },
  {
    id: "snacks-16",
    name: "Corn Chaat",
    slug: "corn-chaat",
    category: "snacks",
    moods: ["light", "quick"],
    description: "Spiced sweet corn salad",
    prepTime: 10,
    cookTime: 10,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "2 cups sweet corn",
      "1 onion, chopped",
      "1 tomato, chopped",
      "Green chili, coriander",
      "Lemon juice",
      "Chaat masala"
    ],
    steps: [
      "Boil or roast corn.",
      "Mix with all vegetables.",
      "Add lemon juice, chaat masala.",
      "Toss well and serve."
    ],
    tips: ["Grilled corn adds smoky flavor"],
    servingSuggestions: ["Healthy snack option"]
  },
  {
    id: "snacks-17",
    name: "Fruit Chaat",
    slug: "fruit-chaat",
    category: "snacks",
    moods: ["light"],
    description: "Spiced mixed fruit salad",
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "Mixed fruits (apple, banana, pomegranate)",
      "Chaat masala",
      "Black salt",
      "Lemon juice",
      "Mint leaves"
    ],
    steps: [
      "Cut all fruits into bite-size pieces.",
      "Toss with chaat masala, black salt.",
      "Add lemon juice.",
      "Garnish with mint.",
      "Serve chilled."
    ],
    tips: ["Add masala just before serving"],
    servingSuggestions: ["Refreshing healthy snack"]
  },
  {
    id: "snacks-18",
    name: "Peanut Chaat",
    slug: "peanut-chaat",
    category: "snacks",
    moods: ["light", "quick"],
    description: "Spiced roasted peanut salad",
    prepTime: 10,
    cookTime: 5,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "1 cup roasted peanuts",
      "1 onion, chopped",
      "1 tomato, chopped",
      "Green chili, coriander",
      "Lemon juice",
      "Chaat masala"
    ],
    steps: [
      "Mix peanuts with vegetables.",
      "Add lemon juice, chaat masala.",
      "Toss well.",
      "Serve immediately."
    ],
    tips: ["Use freshly roasted peanuts"],
    servingSuggestions: ["Great protein snack"]
  },
  {
    id: "snacks-19",
    name: "Vegetable Cutlet",
    slug: "vegetable-cutlet",
    category: "snacks",
    moods: ["comfort"],
    description: "Crispy fried vegetable patties",
    prepTime: 30,
    cookTime: 20,
    servings: 6,
    difficulty: "easy",
    ingredients: [
      "2 potatoes, boiled",
      "1 carrot, grated",
      "1/4 cup peas",
      "1/4 cup beans, chopped",
      "Bread crumbs",
      "Garam masala"
    ],
    steps: [
      "Mash potatoes, mix with vegetables.",
      "Add spices, shape into patties.",
      "Coat in flour, water, bread crumbs.",
      "Shallow fry until golden.",
      "Serve with chutney."
    ],
    tips: ["Chill before frying for better shape"],
    servingSuggestions: ["Perfect tea-time snack"]
  },
  {
    id: "snacks-20",
    name: "Cheese Toast",
    slug: "cheese-toast",
    category: "snacks",
    moods: ["quick", "comfort"],
    description: "Grilled cheese bread with herbs",
    prepTime: 5,
    cookTime: 10,
    servings: 2,
    difficulty: "easy",
    ingredients: [
      "4 bread slices",
      "1 cup cheese, grated",
      "Oregano, chili flakes",
      "Butter"
    ],
    steps: [
      "Spread butter on bread.",
      "Top with cheese, herbs.",
      "Grill until cheese melts.",
      "Serve hot."
    ],
    tips: ["Use thick bread for better texture"],
    servingSuggestions: ["Quick snack with tea"]
  },
  {
    id: "snacks-21",
    name: "Masala Corn",
    slug: "masala-corn",
    category: "snacks",
    moods: ["quick", "spicy"],
    description: "Buttery spiced corn kernels",
    prepTime: 5,
    cookTime: 10,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "2 cups sweet corn",
      "2 tbsp butter",
      "1 tsp chaat masala",
      "Lemon juice",
      "Coriander"
    ],
    steps: [
      "Boil or steam corn.",
      "Toss with hot butter.",
      "Add chaat masala, lemon.",
      "Garnish with coriander."
    ],
    tips: ["Don't overcook corn"],
    servingSuggestions: ["Popular street food"]
  },
  {
    id: "snacks-22",
    name: "Veg Nachos",
    slug: "veg-nachos",
    category: "snacks",
    moods: ["comfort"],
    description: "Loaded nachos with vegetables and cheese",
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "Nachos chips",
      "1 cup beans, cooked",
      "1 tomato, chopped",
      "Cheese, shredded",
      "Jalapenos",
      "Sour cream"
    ],
    steps: [
      "Arrange nachos on baking tray.",
      "Top with beans, tomatoes.",
      "Add cheese generously.",
      "Bake until cheese melts.",
      "Top with jalapenos, sour cream."
    ],
    tips: ["Don't overcrowd for even melting"],
    servingSuggestions: ["Great party snack"]
  },
  {
    id: "snacks-23",
    name: "Makhana Roast",
    slug: "makhana-roast",
    category: "snacks",
    moods: ["light"],
    description: "Spiced roasted fox nuts",
    prepTime: 5,
    cookTime: 10,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "2 cups makhana",
      "1 tbsp ghee",
      "1/2 tsp turmeric",
      "Chaat masala",
      "Salt"
    ],
    steps: [
      "Dry roast makhana until crispy.",
      "Add ghee, turmeric, salt.",
      "Roast few more minutes.",
      "Cool, add chaat masala.",
      "Store in airtight container."
    ],
    tips: ["Low heat prevents burning"],
    servingSuggestions: ["Healthy snacking alternative"]
  },
  {
    id: "snacks-24",
    name: "Sweet Potato Chaat",
    slug: "sweet-potato-chaat",
    category: "snacks",
    moods: ["light"],
    description: "Spiced roasted sweet potato cubes",
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "2 sweet potatoes",
      "Chaat masala",
      "Lemon juice",
      "Onion, tomato",
      "Coriander"
    ],
    steps: [
      "Roast or boil sweet potatoes.",
      "Cube and add to bowl.",
      "Add chopped vegetables.",
      "Season with chaat masala, lemon.",
      "Toss and serve."
    ],
    tips: ["Roasting brings out sweetness"],
    servingSuggestions: ["Nutritious snack option"]
  },
  {
    id: "snacks-25",
    name: "Moong Dal Pakoda",
    slug: "moong-dal-pakoda",
    category: "snacks",
    moods: ["comfort"],
    description: "Crispy lentil fritters",
    prepTime: 240,
    cookTime: 20,
    servings: 4,
    difficulty: "medium",
    ingredients: [
      "1 cup moong dal, soaked",
      "2 green chilies",
      "1 inch ginger",
      "Onion, coriander",
      "Salt, asafoetida",
      "Oil for frying"
    ],
    steps: [
      "Soak dal for 4 hours.",
      "Grind coarsely with chilies, ginger.",
      "Add onion, coriander, salt.",
      "Drop spoonfuls in hot oil.",
      "Fry until golden and crispy."
    ],
    tips: ["Coarse grinding gives better texture"],
    servingSuggestions: ["Serve with coconut chutney"]
  },
  {
    id: "snacks-26",
    name: "Veg Nuggets",
    slug: "veg-nuggets",
    category: "snacks",
    moods: ["quick", "comfort"],
    description: "Crispy vegetable nuggets for kids",
    prepTime: 25,
    cookTime: 15,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      "1 cup mixed vegetables, grated",
      "1 potato, boiled mashed",
      "2 tbsp bread crumbs",
      "Cornflour for coating",
      "Salt, pepper"
    ],
    steps: [
      "Mix vegetables with potato, breadcrumbs.",
      "Season and shape into nuggets.",
      "Coat in cornflour, then breadcrumbs.",
      "Deep fry until golden.",
      "Serve with dips."
    ],
    tips: ["Freeze before frying for crispiness"],
    servingSuggestions: ["Kids love these with ketchup"]
  }
];
