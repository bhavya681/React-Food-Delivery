const FoodData = [
  {
    id: 1,
    img: "https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5",
    name: "Onion Pizza",
    price: 150,
    desc: "A delicious pizza topped with fresh onions for a delightful flavor combination. This pizza is perfect for onion lovers and offers a unique twist on the classic pizza experience. Enjoy the perfect blend of cheesy goodness and the sharp taste of onions in every bite. Whether you're sharing with friends or enjoying it all to yourself, this Onion Pizza is sure to satisfy your pizza cravings.",
    category: "Lunch",
    rating: 5,
    emotions: "😊",
    diet:"Veg"
  },
  {
    id: 2,
    img: "https://w7.pngwing.com/pngs/339/55/png-transparent-pizza-margherita-italian-cuisine-hot-dog-pizza-cheese-pizza-thumbnail.png",
    name: "Margherita Pizza",
    price: 130,
    desc: "A classic Italian pizza topped with fresh tomatoes, mozzarella cheese, basil leaves, and a drizzle of olive oil. Simple yet bursting with flavors, this Margherita Pizza is a timeless favorite that captures the essence of Italian cuisine.",
    category: "Lunch",
    rating: 4,
    emotions: "😢",
    diet:"Non Veg"
  },
  {
    id: 3,
    img: "https://w7.pngwing.com/pngs/21/55/png-transparent-pepperoni-pizza-margarita-pizza-margherita-italian-cuisine-tomato-pizza-food-cheese-recipe-thumbnail.png",
    name: "Pepperoni Pizza",
    price: 160,
    desc: "Indulge in the savory delight of this Pepperoni Pizza, loaded with slices of spicy pepperoni, melted cheese, and a tangy tomato sauce. A popular choice that's perfect for satisfying your pizza cravings.",
    category: "Lunch",
    rating: 4,
    emotions: "😡",
    diet:"Veg"
  },
  {
    id: 4,
    img: "https://w7.pngwing.com/pngs/569/109/png-transparent-pizza-with-vegetables-and-mushroom-toppings-sicilian-pizza-california-style-pizza-pizza-margherita-vegetarian-cuisine-pizza-food-recipe-gourmet-thumbnail.png",
    name: "Mushroom and Spinach Pizza",
    price: 140,
    desc: "Experience the earthy flavors of mushrooms combined with the freshness of spinach on this delightful pizza. Topped with a blend of cheeses, this Mushroom and Spinach Pizza offers a balanced and satisfying taste.",
    category: "Lunch",
    rating: 4,
    emotions: "😎",
    diet:"Non Veg"
  },
  {
    id: 5,
    img: "https://w7.pngwing.com/pngs/843/171/png-transparent-pizza-73-restaurant-catupiry-chicken-as-food-pizza-baked-goods-food-recipe-thumbnail.png",
    name: "BBQ Chicken Pizza",
    price: 170,
    desc: "Savor the smoky goodness of this BBQ Chicken Pizza, featuring tender pieces of chicken marinated in barbecue sauce, red onions, and a medley of cheeses. A fusion of flavors that's sure to delight your taste buds.",
    category: "Lunch",
    rating: 5,
    emotions: "😍",
    diet:"Veg"
  },
  {
    id: 6,
    img: "https://w7.pngwing.com/pngs/133/54/png-transparent-pancakes-served-on-plate-banana-pancakes-scrambled-eggs-breakfast-ihop-pancake-food-recipe-eating-thumbnail.png",
    name: "Classic Pancakes",
    price: 80,
    desc: "Start your day with a stack of fluffy pancakes served with maple syrup and a dollop of butter. A timeless breakfast favorite that's sure to satisfy your morning cravings.",
    category: "Breakfast",
    rating: 5,
    emotions: "😍",
    diet:"Veg"
  },
  {
    id: 7,
    img: "https://w7.pngwing.com/pngs/645/475/png-transparent-croissant-bread-croissant-muffin-brunch-bacon-egg-and-cheese-sandwich-bread-croissants-baked-goods-food-baking-thumbnail.png",
    name: "Egg and Bacon Croissant",
    price: 110,
    desc: "Indulge in a buttery croissant filled with scrambled eggs, crispy bacon, and melted cheese. A savory and satisfying breakfast option that's perfect for on-the-go mornings.",
    category: "Breakfast",
    rating: 4,
    emotions: "😂",
    diet:"Non Veg"
  },
  {
    id: 8,
    img: "https://w7.pngwing.com/pngs/683/103/png-transparent-frozen-yogurt-parfait-breakfast-yoghurt-fruit-salad-yogurt-frutti-di-bosco-food-breakfast-thumbnail.png",
    name: "Greek Yogurt Parfait",
    price: 95,
    desc: "Enjoy a healthy and refreshing breakfast with layers of creamy Greek yogurt, fresh berries, honey, and granola. A balanced option that provides a burst of flavors and energy.",
    category: "Breakfast",
    rating: 4,
    emotions: "😊",
    diet:"Veg"
  },
  {
    id: 9,
    img: "https://w7.pngwing.com/pngs/400/603/png-transparent-toast-tostytosty-la-tosteria-menu-food-dish-avocado-toast-food-toast-avocado-toast-thumbnail.png",
    name: "Avocado Toast",
    price: 120,
    desc: "Savor the creaminess of mashed avocado on toasted whole grain bread, topped with a sprinkle of sea salt and red pepper flakes. A trendy and nutritious breakfast choice.",
    category: "Breakfast",
    rating: 5,
    emotions: "😎",
    diet:"Non Veg"
  },
  {
    id: 10,
    img: "https://w7.pngwing.com/pngs/20/725/png-transparent-grain-bowl-breakfast-cereal-muesli-corn-flakes-bowl-granola-food-breakfast-recipe-thumbnail.png",
    name: "Fruit and Nut Oatmeal",
    price: 85,
    desc: "Warm up with a bowl of hearty oatmeal packed with mixed fruits, nuts, and a drizzle of honey. A wholesome breakfast that provides a satisfying start to your day.",
    category: "Breakfast",
    rating: 5,
    emotions: "😡",
    diet:"Veg"
  },
  {
    id: 11,
    img: "https://w7.pngwing.com/pngs/875/111/png-transparent-north-fish-seafood-dish-smoked-salmon-restaurant-grilled-fish-hd-soup-food-seafood-thumbnail.png",
    name: "Grilled Salmon",
    price: 190,
    desc: "Delight in a perfectly grilled salmon fillet seasoned with herbs and served with a side of roasted vegetables. A healthy and flavorful dinner option that's rich in omega-3 fatty acids.",
    category: "Dinner",
    rating: 5,
    emotions: "😍",
    diet:"Non Veg"
  },
  {
    id: 12,
    img: "https://w7.pngwing.com/pngs/756/828/png-transparent-taglierini-carbonara-fettuccine-alfredo-chicken-pasta-chicken-fillet-thumbnail.png",
    name: "Chicken Alfredo Pasta",
    price: 160,
    desc: "Indulge in creamy fettuccine Alfredo pasta with tender pieces of grilled chicken. This comforting dinner dish is a blend of pasta, rich Alfredo sauce, and savory chicken.",
    category: "Dinner",
    rating: 4,
    emotions: "😎",
    diet:"Veg"
  },
  {
    id: 13,
    img: "https://w7.pngwing.com/pngs/651/721/png-transparent-veggie-burger-vegetable-food-recipe-stir-frying-vegetables-frying-pan-frozen-vegetables-fruit-thumbnail.png",
    name: "Vegetable Stir-Fry",
    price: 130,
    desc: "Enjoy a medley of colorful vegetables stir-fried in a flavorful sauce, served over steamed rice. A light and nutritious dinner that's both satisfying and wholesome.",
    category: "Dinner",
    rating: 5,
    emotions: "😢",
    diet:"Non Veg"
  },
  {
    id: 14,
    img: "https://w7.pngwing.com/pngs/575/331/png-transparent-burrito-taco-bell-mexican-cuisine-chipotle-mexican-grill-menu-thumbnail.png",
    name: "Grilled Chicken Burrito Bowl",
    price: 160,
    desc: "Savor the flavors of a delicious burrito bowl with tender grilled chicken, black beans, rice, sautéed peppers and onions, shredded cheese, and a drizzle of zesty cilantro-lime dressing. A hearty and satisfying chicken dinner option.",
    category: "Dinner",
    rating: 4,
    emotions: "😡",
    diet:"Veg"
  },
  {
    id: 15,
    img: "https://w7.pngwing.com/pngs/47/171/png-transparent-chinese-noodles-hot-and-sour-soup-risotto-lomi-lamian-slippery-mushrooms-risotto-dusi-soup-food-recipe-thumbnail.png",
    name: "Mushroom Risotto",
    price: 175,
    desc: "Indulge in creamy and flavorful mushroom risotto, made with Arborio rice, sautéed mushrooms, and a touch of Parmesan cheese. A comforting and sophisticated dinner choice.",
    category: "Dinner",
    rating: 2,
    emotions: "😂",
    diet:"Non Veg"
  },
  {
    id: 16,
    img: "https://w7.pngwing.com/pngs/47/171/png-transparent-chinese-noodles-hot-and-sour-soup-risotto-lomi-lamian-slippery-mushrooms-risotto-dusi-soup-food-recipe-thumbnail.png",
    name: "Cheese and Crackers Platter",
    price: 120,
    desc: "Enjoy a variety of artisan cheeses, paired with an assortment of crispy crackers and complemented by fresh fruits and nuts. A delightful snack option for sharing or indulging in on your own.",
    category: "Snacks",
    rating: 3,
    emotions: "😡",
    diet:"Veg"
  },
  {
    id: 17,
    img: "https://w7.pngwing.com/pngs/204/32/png-transparent-crispy-fried-chicken-karaage-chicken-nugget-chicken-fingers-buffalo-wing-carrot-chilli-thumbnail.png",
    name: "Crispy Chicken Wings",
    price: 130,
    desc: "Savor the satisfying crunch of crispy chicken wings seasoned to perfection. Choose your favorite sauce, from tangy BBQ to spicy buffalo, for a flavorful snacking experience.",
    category: "Snacks",
    rating: 4,
    emotions: "😎",
    diet:"Veg"
  },
  {
    id: 18,
    img: "https://w7.pngwing.com/pngs/816/163/png-transparent-grilled-skewered-meat-bakery-paneer-tikka-indian-cuisine-vegetarian-cuisine-cake-food-baking-cake-decorating-thumbnail.png",
    name: "Paneer Tikka Skewers",
    price: 130,
    desc: "Enjoy succulent pieces of marinated paneer (Indian cottage cheese) skewered and grilled to perfection. Served with mint chutney, these paneer tikka skewers offer a flavorful and aromatic Indian snack experience.",
    category: "Snacks",
    rating: 5,
    emotions: "😡",
    diet:"Veg"
  },
  {
    id: 19,
    img: "https://w7.pngwing.com/pngs/356/675/png-transparent-falafel-lebanese-cuisine-take-out-mediterranean-cuisine-hummus-bed-miscellaneous-furniture-food-thumbnail.png",
    name: "Hummus and Veggie Platter",
    price: 90,
    desc: "Relish the smooth and flavorful hummus accompanied by a variety of fresh vegetable sticks and pita bread. A nutritious and satisfying option for a light and refreshing snack.",
    category: "Snacks",
    rating: 4,
    emotions: "😢",
    diet:"Non Veg"
  },
  {
    id: 20,
    img: "https://w7.pngwing.com/pngs/435/847/png-transparent-pincho-canape-skewer-fruit-others-thumbnail.png",
    name: "Fruit Skewers",
    price: 70,
    desc: "Indulge in a colorful assortment of fruit skewers featuring juicy chunks of melon, berries, pineapple, and more. A sweet and refreshing snack that's both delicious and visually appealing.",
    category: "Snacks",
    rating: 2,
    emotions: "😍",
    diet:"Non Veg"
  },
  {
    id: 21,
    img: "https://media.istockphoto.com/id/1398630614/photo/bacon-cheeseburger-on-a-toasted-bun.webp?b=1&s=170667a&w=0&k=20&c=Aq7Dg29n3DDE3gqgT2cWSh9LYxZnr-8SFu0crRQxArA=",
    name: "French Fries and Burger",
    price: 210,
    desc: "Burgers and French fries are commonly served together because they complement each other in taste and texture. The savory, juicy flavor of a burger pairs well with the crispy, salty taste of French fries.",
    category: "Breakfast",
    rating: 3,
    emotions: "😢",
    diet:"Veg"
  },
  {
    id: 22,
    img: "https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4=",
    name: "Chickhen Briyani",
    price: 300,
    desc: "Biryani is a celebratory rice and meat dish cherished in the Indian sub-continent. A traditional biryani consists of fluffy basmati rice layered over tender & succulent pieces of meat, accompanied with the mesmerizing aromas of spices, herbs & caramelized onions.",
    category: "Dinner",
    rating: 5,
    emotions: "😊",
    diet:"Non Veg"
  },
  {
    id: 23,
    img: "https://media.istockphoto.com/id/148349643/photo/plate-of-delicious-looking-french-fries.jpg?s=612x612&w=0&k=20&c=NPOBoHI2MMST54tc1GwpFcXOaCEECRrtht1vlzXs3FE=",
    name: "French Fries",
    price: 70,
    desc: "french fries, side dish or snack typically made from deep-fried potatoes that have been cut into various shapes, especially thin strips. Fries are often salted and served with other items, including ketchup, mayonnaise, or vinegar.",
    category: "Breakfast",
    rating: 4,
    emotions: "😎",
    diet:"Veg"
  },
  {
    id: 24,
    img: "https://media.istockphoto.com/id/1133151212/photo/japanese-dumplings-gyoza-with-pork-meat-and-vegetables.jpg?s=612x612&w=0&k=20&c=vC6GTUDGK6dD5_QHvY1V7fVUdPx-z4TG73DUACR_L5s=",
    name: "Momos",
    price: 140,
    desc: "Momos is a dumpling made of all-purpose flour and filled with either meat or vegetables.",
    category: "Breakfast",
    rating: 4,
    emotions: "😂",
    diet:"Non Veg"
  },
  {
    id: 25,
    img: "https://media.istockphoto.com/id/1194530915/photo/freshly-cooked-indian-popular-famous-snacks-samosa.jpg?s=612x612&w=0&k=20&c=9m8f3N8jP2fQvUmINSPl7pBmHHjc9wfsdA9FIjZqhp8=",
    name: "Samosas",
    price: 80,
    desc: "The samosa has a spicy aloo stuffing with peanuts and peas, but you will be amazed to know that Samosa was initially made by stuffing meat, nuts, pistachios, spices and herbs inside a dough pocket, which was deep fried and served with dips and sauces.",
    category: "Snacks",
    rating: 3,
    emotions: "😢",
    diet:"Non Veg"
  },
  {
    id: 26,
    img: "https://media.istockphoto.com/id/1292633339/photo/famous-south-indian-food-onion-uttapam-or-ooththappam-is-a-dosa-like-dish-made-by-dosa-batter.jpg?s=612x612&w=0&k=20&c=aL59oIfPFQXNk3sre_JUKx87zSnRw526j1mmek6wqRg=",
    name: "Uttapam ",
    price: 110,
    desc: "Traditionally made with toppings such as tomatoes, onion, chillies, capsicum and coriander; other common choices are coconut, grated carrots and beets.",
    category: "Breakfast",
    rating: 4,
    emotions: "😍",
    diet:"Non Veg"
  },
  {
    id: 27,
    img: "https://media.istockphoto.com/id/1158577344/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=612x612&w=0&k=20&c=QfB9yirz9xHrIvzgXjGOcvayUOnxVxnbWTmwYBG_eBY=",
    name: "Veg Special Thali",
    price: 300,
    desc: "A thali consists of: a grain: rice or flatbread made with wheat, millet, etc. lentils: dal or sambar. vegetables: a seasonal preparation. chutney: a condiment made with fruit, herbs, spices, and even vegetables.",
    category: "Lunch",
    rating: 5,
    emotions: "😊",
    diet:"Veg"
  },
  {
    id: 28,
    img: "https://media.istockphoto.com/id/1201003624/photo/chicken-tikka-masala-spicy-curry-meat-food-in-pot-with-rice-and-naan-bread-indian-food.jpg?s=2048x2048&w=is&k=20&c=BJ8_3CnKSHxTO_rZcHQzm3LcNGsT5KQbfRxiqhl-aN4=",
    name: "Chikhen Tikka",
    price: 240,
    desc: "Chicken tikka masala spicy curry meat food in pot with rice and naan bread. Indian chicken tikka masala",
    category: "Lunch",
    rating: 4,
    emotions: "😂",
    diet:"Non Veg"
  },
  {
    id: 29,
    img: "https://media.istockphoto.com/id/673858790/photo/butter-chicken-curry-with-tender-chicken-breast-cream-butter-honey.jpg?s=2048x2048&w=is&k=20&c=1fejREV0k6LKqMNo1pgD4LJjWRNrC5qF9FEsrLhQ6R4=",
    name: "Butter Chickhen",
    price: 160,
    desc: "Butter chicken curry with tender chicken breast, cream, butter & honey.",
    category: "Dinner",
    rating: 2,
    emotions: "😊",
    diet:"Veg"
  },
  {
    id: 30,
    img: "https://media.istockphoto.com/id/1180279133/photo/homemade-turkey-sub-sandwich.jpg?s=2048x2048&w=is&k=20&c=n4Voz0EEAlVMJF85LvgWDUmyXdxXLl9kf7RO6npSIbg=",
    name: "Ultimate Turkey Sandwich",
    price: 140,
    desc: "Turkey Sub Sandwich with Salami Lettuce and Tomato.",
    category: "Snacks",
    rating: 1,
    emotions: "😂",
    diet:"Veg"
  },
];
export default FoodData;