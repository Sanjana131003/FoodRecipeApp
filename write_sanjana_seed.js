const fs = require("fs");

const content = `const Recipes = require("../models/recipe");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const SANJANA_EMAIL = "sanjana@gmail.com";
const SANJANA_PASSWORD = "sanjana";
const SANJANA_NAME = "Sanjana";

const SEED_RECIPES = [
  {
    title: "Butter Paneer Masala",
    description: "Creamy and rich North Indian paneer curry cooked in a velvety tomato-butter sauce with aromatic spices.",
    ingredients: [
      "300g fresh paneer cubes",
      "3 tbsp butter",
      "2 tbsp oil",
      "2 large onions finely chopped",
      "3 ripe tomatoes pureed",
      "1 tbsp ginger garlic paste",
      "1/2 cup fresh cream",
      "1 tsp kashmiri red chili powder",
      "1 tsp garam masala",
      "1 tsp coriander powder",
      "1/2 tsp turmeric",
      "1 tsp kasuri methi",
      "Salt to taste",
      "Fresh coriander for garnish"
    ],
    instructions: "Heat butter and oil together in a heavy-bottomed pan over medium heat.\\nAdd chopped onions and saute until deep golden brown, about 10 minutes.\\nAdd ginger garlic paste and cook for 2 minutes until raw smell disappears.\\nAdd tomato puree and cook on medium heat until oil separates, about 8 minutes.\\nAdd kashmiri chili, coriander powder, turmeric, and garam masala. Mix well.\\nAdd 1/2 cup water and bring to a gentle simmer.\\nGently add paneer cubes and stir to coat with the masala.\\nPour in fresh cream and stir gently. Simmer for 5 minutes.\\nCrush kasuri methi between palms and sprinkle over the curry.\\nGarnish with fresh coriander and a swirl of cream. Serve hot with naan.",
    time: "35 mins",
    category: "Indian",
    difficulty: "Medium",
    rating: 4.9,
    isFavorite: true,
    coverImage: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80"
  },
  {
    title: "Margherita Pizza",
    description: "Classic cheesy Italian pizza with fresh basil, San Marzano tomatoes, and creamy mozzarella on a crispy crust.",
    ingredients: [
      "1 pizza dough ball (250g)",
      "1/2 cup San Marzano tomato sauce",
      "200g fresh buffalo mozzarella",
      "Fresh basil leaves",
      "3 tbsp extra virgin olive oil",
      "1 tsp dried oregano",
      "1/2 tsp garlic powder",
      "Sea salt and black pepper",
      "Semolina flour for dusting"
    ],
    instructions: "Place a pizza stone or baking tray in oven and preheat to 250C for 30 minutes.\\nStretch pizza dough on a semolina-dusted surface into a 12-inch round.\\nSpread tomato sauce evenly leaving a 1-inch border for the crust.\\nTear mozzarella into chunks and distribute evenly over the sauce.\\nDrizzle 2 tbsp olive oil over the top.\\nSeason with oregano, garlic powder, salt, and pepper.\\nCarefully slide pizza onto the hot stone using a pizza peel.\\nBake for 8-10 minutes until crust is golden and cheese is bubbling.\\nRemove from oven and immediately top with fresh basil leaves.\\nDrizzle remaining olive oil and slice into 8 pieces. Serve immediately.",
    time: "40 mins",
    category: "Italian",
    difficulty: "Medium",
    rating: 4.7,
    isFavorite: false,
    coverImage: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80"
  },
  {
    title: "Veg Hakka Noodles",
    description: "Street-style spicy Chinese noodles tossed with colorful vegetables in a savory soy-based sauce.",
    ingredients: [
      "250g hakka noodles",
      "2 tbsp sesame oil",
      "1 tbsp vegetable oil",
      "4 garlic cloves minced",
      "1 inch ginger grated",
      "1 cup cabbage shredded",
      "1 carrot julienned",
      "1 bell pepper sliced",
      "4 spring onions chopped",
      "2 tbsp soy sauce",
      "1 tbsp chili sauce",
      "1 tbsp vinegar",
      "1 tsp black pepper",
      "Salt to taste"
    ],
    instructions: "Boil noodles in salted water until just cooked. Drain and toss with 1 tbsp sesame oil to prevent sticking.\\nHeat vegetable oil in a large wok over high heat until smoking.\\nAdd garlic and ginger, stir-fry for 30 seconds until fragrant.\\nAdd carrots and stir-fry for 2 minutes on high heat.\\nAdd cabbage and bell pepper, toss continuously for 2 minutes.\\nPush vegetables to the side and add noodles to the center.\\nPour soy sauce, chili sauce, and vinegar over the noodles.\\nToss everything together vigorously on high heat for 2 minutes.\\nAdd remaining sesame oil, black pepper, and salt. Toss well.\\nGarnish with spring onion greens and serve immediately.",
    time: "20 mins",
    category: "Chinese",
    difficulty: "Easy",
    rating: 4.5,
    isFavorite: true,
    coverImage: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600&q=80"
  },
  {
    title: "Chicken Biryani",
    description: "Flavorful layered rice dish with tender chicken, fragrant basmati rice, and whole spices — a royal feast.",
    ingredients: [
      "500g chicken pieces",
      "2 cups basmati rice soaked 30 mins",
      "2 large onions thinly sliced",
      "1 cup yogurt",
      "2 tbsp biryani masala",
      "1 tsp turmeric",
      "1 tbsp ginger garlic paste",
      "4 tbsp ghee",
      "Whole spices: 2 bay leaves, 4 cloves, 2 cardamom, 1 cinnamon stick",
      "Saffron soaked in 3 tbsp warm milk",
      "Fresh mint and coriander",
      "2 tbsp fried onions",
      "Salt to taste",
      "Juice of 1 lemon"
    ],
    instructions: "Marinate chicken with yogurt, biryani masala, turmeric, ginger garlic paste, lemon juice, and salt for 2 hours.\\nFry sliced onions in ghee until deep golden and crispy. Set aside half for garnish.\\nIn the same ghee, add whole spices and fry for 30 seconds.\\nAdd marinated chicken and cook on medium heat for 15 minutes until 80% done.\\nParboil rice with whole spices and salt until 70% cooked. Drain.\\nLayer half the rice over the chicken in the pot.\\nSprinkle mint, coriander, fried onions, and saffron milk.\\nAdd remaining rice and top with more garnishes and ghee.\\nSeal the pot with foil and a tight lid. Cook on dum (low heat) for 25 minutes.\\nGently mix from the bottom and serve hot with raita.",
    time: "90 mins",
    category: "Indian",
    difficulty: "Hard",
    rating: 4.9,
    isFavorite: true,
    coverImage: "https://images.unsplash.com/photo-1563379091339-03246963d29a?w=600&q=80"
  },
  {
    title: "Chocolate Brownie",
    description: "Rich and fudgy chocolate dessert with a crackly top, dense center, and intense cocoa flavor.",
    ingredients: [
      "200g dark chocolate (70% cocoa)",
      "150g unsalted butter",
      "200g caster sugar",
      "3 large eggs",
      "1 tsp vanilla extract",
      "100g all-purpose flour",
      "30g cocoa powder",
      "1/2 tsp salt",
      "100g chocolate chips",
      "Powdered sugar for dusting"
    ],
    instructions: "Preheat oven to 180C. Line a 20x20cm baking tin with parchment paper.\\nMelt dark chocolate and butter together in a heatproof bowl over simmering water. Stir until smooth.\\nRemove from heat and let cool for 5 minutes.\\nWhisk sugar into the chocolate mixture until combined.\\nAdd eggs one at a time, whisking well after each addition.\\nStir in vanilla extract.\\nSift flour, cocoa powder, and salt into the mixture. Fold gently until just combined.\\nFold in chocolate chips.\\nPour batter into prepared tin and spread evenly.\\nBake for 22-25 minutes until top is set but center is still slightly wobbly.\\nCool completely in tin before cutting into squares. Dust with powdered sugar.",
    time: "45 mins",
    category: "Dessert",
    difficulty: "Easy",
    rating: 4.8,
    isFavorite: true,
    coverImage: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80"
  },
  {
    title: "Caesar Salad",
    description: "Healthy salad with crisp romaine lettuce, homemade creamy Caesar dressing, crunchy croutons, and Parmesan.",
    ingredients: [
      "1 large head romaine lettuce",
      "1 cup homemade croutons",
      "80g Parmesan cheese shaved",
      "3 tbsp mayonnaise",
      "1 tbsp Dijon mustard",
      "2 garlic cloves minced",
      "2 tbsp fresh lemon juice",
      "1 tsp Worcestershire sauce",
      "1 tsp anchovy paste",
      "2 tbsp olive oil",
      "Salt and freshly cracked black pepper"
    ],
    instructions: "Make croutons: cube bread, toss with olive oil and garlic, bake at 180C for 12 minutes until golden.\\nWhisk together mayonnaise, Dijon mustard, minced garlic, lemon juice, Worcestershire sauce, and anchovy paste.\\nSlowly drizzle in olive oil while whisking to emulsify the dressing.\\nSeason dressing generously with salt and black pepper. Taste and adjust.\\nWash and dry romaine leaves thoroughly. Tear into bite-sized pieces.\\nPlace romaine in a large chilled bowl.\\nDrizzle dressing over lettuce and toss until every leaf is coated.\\nAdd croutons and half the Parmesan, toss gently.\\nPlate and top with remaining Parmesan shavings.\\nFinish with extra black pepper and serve immediately.",
    time: "20 mins",
    category: "Healthy",
    difficulty: "Easy",
    rating: 4.4,
    isFavorite: false,
    coverImage: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&q=80"
  },
  {
    title: "Mango Smoothie",
    description: "Refreshing summer mango drink blended with yogurt and honey — thick, creamy, and bursting with tropical flavor.",
    ingredients: [
      "2 large ripe Alphonso mangoes peeled and cubed",
      "1 cup chilled yogurt",
      "1/2 cup cold milk",
      "2 tbsp honey",
      "1/4 tsp cardamom powder",
      "6-8 ice cubes",
      "Pinch of saffron soaked in 1 tbsp warm milk",
      "Fresh mint for garnish",
      "Mango slices for garnish"
    ],
    instructions: "Peel and cube the ripe mangoes, removing the seed.\\nAdd mango cubes to a blender.\\nAdd chilled yogurt, cold milk, and honey.\\nAdd cardamom powder and saffron milk.\\nBlend on high speed for 60 seconds until completely smooth.\\nAdd ice cubes and blend again for 30 seconds.\\nTaste and adjust sweetness with more honey if needed.\\nPour into tall chilled glasses.\\nGarnish with a mango slice on the rim and fresh mint sprig.\\nServe immediately with a straw.",
    time: "10 mins",
    category: "Beverage",
    difficulty: "Easy",
    rating: 4.6,
    isFavorite: true,
    coverImage: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&q=80"
  },
  {
    title: "Mexican Tacos",
    description: "Crispy tacos filled with spiced veggies, fresh salsa, guacamole, and tangy sour cream.",
    ingredients: [
      "8 small corn tortillas",
      "1 cup black beans drained",
      "1 cup corn kernels",
      "1 red bell pepper diced",
      "1 yellow bell pepper diced",
      "1 red onion diced",
      "2 tbsp taco seasoning",
      "2 ripe avocados",
      "2 tomatoes diced",
      "1 jalapeno finely chopped",
      "Juice of 2 limes",
      "1/2 cup sour cream",
      "1 cup shredded cheese",
      "Fresh cilantro",
      "Salt to taste"
    ],
    instructions: "Make guacamole: mash avocados with lime juice, diced tomato, jalapeno, cilantro, and salt. Set aside.\\nHeat oil in a pan over medium-high heat.\\nAdd diced onions and bell peppers, saute for 3 minutes.\\nAdd black beans and corn, stir to combine.\\nSprinkle taco seasoning and 2 tbsp water. Toss well and cook 3 minutes.\\nWarm tortillas directly over a gas flame for 20 seconds each side, or in a dry pan.\\nSpread a spoonful of guacamole on each tortilla.\\nTop with the veggie and bean mixture.\\nAdd shredded cheese, sour cream, and fresh salsa.\\nGarnish with cilantro and a squeeze of lime. Serve immediately.",
    time: "25 mins",
    category: "Mexican",
    difficulty: "Easy",
    rating: 4.6,
    isFavorite: false,
    coverImage: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=600&q=80"
  },
  {
    title: "Fluffy Pancakes",
    description: "Soft breakfast pancakes with a golden exterior and cloud-like interior, served with maple syrup and fresh berries.",
    ingredients: [
      "1.5 cups all-purpose flour",
      "2 tbsp sugar",
      "2 tsp baking powder",
      "1/2 tsp baking soda",
      "1/4 tsp salt",
      "1 cup buttermilk",
      "1/2 cup milk",
      "2 large eggs separated",
      "3 tbsp melted butter",
      "1 tsp vanilla extract",
      "Butter for cooking",
      "Maple syrup to serve",
      "Fresh berries to serve",
      "Powdered sugar to dust"
    ],
    instructions: "Separate eggs. Whisk egg yolks with buttermilk, milk, melted butter, and vanilla.\\nIn a large bowl, whisk flour, sugar, baking powder, baking soda, and salt.\\nPour wet ingredients into dry ingredients and stir until just combined. Do not overmix — lumps are fine.\\nIn a clean bowl, beat egg whites with a pinch of salt until stiff peaks form.\\nGently fold egg whites into the batter in two additions to keep it fluffy.\\nHeat a non-stick pan over medium-low heat. Add a small knob of butter.\\nPour 1/4 cup batter per pancake. Cook until bubbles form on surface and edges look set, about 2-3 minutes.\\nFlip carefully and cook 1-2 minutes until golden.\\nStack pancakes on a warm plate.\\nServe with maple syrup, fresh berries, and a dusting of powdered sugar.",
    time: "25 mins",
    category: "Breakfast",
    difficulty: "Easy",
    rating: 4.7,
    isFavorite: true,
    coverImage: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&q=80"
  },
  {
    title: "Sushi Rolls",
    description: "Japanese sushi rolls with fresh fillings of cucumber, avocado, and crab, wrapped in seasoned rice and nori.",
    ingredients: [
      "2 cups Japanese short-grain rice",
      "3 tbsp rice vinegar",
      "1 tbsp sugar",
      "1 tsp salt",
      "4 nori sheets",
      "1 avocado sliced",
      "1 cucumber julienned",
      "200g imitation crab sticks",
      "2 tbsp cream cheese",
      "2 tbsp Japanese mayonnaise",
      "Soy sauce for dipping",
      "Pickled ginger",
      "Wasabi paste",
      "Sesame seeds"
    ],
    instructions: "Cook rice according to package instructions. Mix rice vinegar, sugar, and salt until dissolved.\\nSpread hot rice on a flat tray and fold in the vinegar mixture using a wooden spatula. Fan to cool.\\nPlace a nori sheet shiny-side down on a bamboo rolling mat.\\nWith wet hands, spread a thin even layer of rice over the nori, leaving 1 inch at the top edge.\\nArrange cucumber, avocado, crab, and cream cheese in a line across the center.\\nLift the mat and roll tightly away from you, pressing firmly.\\nSeal the edge with a little water. Press the roll gently to shape.\\nWith a sharp wet knife, cut roll into 8 pieces using a sawing motion.\\nArrange on a plate and sprinkle with sesame seeds.\\nServe with soy sauce, pickled ginger, and wasabi.",
    time: "60 mins",
    category: "Japanese",
    difficulty: "Hard",
    rating: 4.8,
    isFavorite: true,
    coverImage: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80"
  }
];

const seedSanjanaRecipes = async (req, res) => {
  try {
    // 1. Find or create Sanjana's account
    let sanjana = await User.findOne({ email: SANJANA_EMAIL });
    if (!sanjana) {
      const hashed = await bcrypt.hash(SANJANA_PASSWORD, 10);
      sanjana = await User.create({
        name: SANJANA_NAME,
        email: SANJANA_EMAIL,
        password: hashed
      });
      console.log("Created user:", SANJANA_EMAIL);
    } else {
      console.log("User already exists:", SANJANA_EMAIL);
    }

    // 2. Check for existing recipes
    const existing = await Recipes.countDocuments({ createdBy: sanjana._id });
    if (existing >= SEED_RECIPES.length) {
      return res.json({
        message: "Sanjana's recipes already exist in the database",
        count: existing,
        alreadySeeded: true,
        user: { email: sanjana.email, name: sanjana.name, id: sanjana._id }
      });
    }

    // 3. Remove old seeds and insert fresh
    await Recipes.deleteMany({ createdBy: sanjana._id });
    const toInsert = SEED_RECIPES.map(r => ({ ...r, createdBy: sanjana._id }));
    const inserted = await Recipes.insertMany(toInsert);

    return res.json({
      message: inserted.length + " recipes added for Sanjana successfully!",
      count: inserted.length,
      alreadySeeded: false,
      user: { email: sanjana.email, name: sanjana.name, id: sanjana._id },
      recipes: inserted.map(r => ({ id: r._id, title: r.title, category: r.category }))
    });
  } catch (err) {
    console.error("Seed error:", err);
    return res.status(500).json({ message: "Seed failed", error: err.message });
  }
};

// Keep old demo seed for backward compat
const seedRecipes = seedSanjanaRecipes;

module.exports = { seedRecipes, seedSanjanaRecipes };
`;

fs.writeFileSync("foodRecipe/backend/controller/seed.js", content, "utf8");
console.log("seed.js written, size:", content.length);
