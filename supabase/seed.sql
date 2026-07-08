-- Run this once in the Supabase SQL Editor, AFTER schema.sql.
-- Populates menu_items with today's real menu so the admin page starts
-- pre-filled instead of empty. Safe to re-run (upsert on id).

insert into menu_items (id, page, category, category_label, name, price, sort_order, is_custom, is_deleted)
values
-- drinks / Freshly Squeezed Juices
('drinks-fresh-juices-1', 'drinks', 'fresh-juices', 'Freshly Squeezed Juices', 'Orange Juice', '€6.00', 1, false, false),
('drinks-fresh-juices-2', 'drinks', 'fresh-juices', 'Freshly Squeezed Juices', 'Grapefruit Juice', '€6.00', 2, false, false),

-- drinks / Aperitifs
('drinks-aperitifs-1', 'drinks', 'aperitifs', 'Aperitifs', 'Non-Alcoholic (Sanbitter, Crodino, Gingerino)', '€4.00', 1, false, false),
('drinks-aperitifs-2', 'drinks', 'aperitifs', 'Aperitifs', 'Spritz (Aperol, Campari, Select, Cynar)', '€5.00', 2, false, false),
('drinks-aperitifs-3', 'drinks', 'aperitifs', 'Aperitifs', 'Spritz Bastardo', '€5.50', 3, false, false),
('drinks-aperitifs-4', 'drinks', 'aperitifs', 'Aperitifs', 'Spritz Limoncello', '€6.00', 4, false, false),
('drinks-aperitifs-5', 'drinks', 'aperitifs', 'Aperitifs', 'Bitter Campari & Soda', '€5.50', 5, false, false),
('drinks-aperitifs-6', 'drinks', 'aperitifs', 'Aperitifs', 'Campari Soda (Bottle)', '€4.50', 6, false, false),
('drinks-aperitifs-7', 'drinks', 'aperitifs', 'Aperitifs', 'Bellini', '€6.00', 7, false, false),
('drinks-aperitifs-8', 'drinks', 'aperitifs', 'Aperitifs', 'Hugo', '€6.00', 8, false, false),
('drinks-aperitifs-9', 'drinks', 'aperitifs', 'Aperitifs', 'Martini Bianco (White)', '€6.00', 9, false, false),
('drinks-aperitifs-10', 'drinks', 'aperitifs', 'Aperitifs', 'Martini Rosso (Red)', '€6.00', 10, false, false),

-- drinks / Soft Drinks
('drinks-soft-drinks-1', 'drinks', 'soft-drinks', 'Soft Drinks', 'Coca Cola / Zero', '€4.00', 1, false, false),
('drinks-soft-drinks-2', 'drinks', 'soft-drinks', 'Soft Drinks', 'Fanta / Sprite / Chinotto', '€4.00', 2, false, false),
('drinks-soft-drinks-3', 'drinks', 'soft-drinks', 'Soft Drinks', 'Ice Tea (Lemon or Peach)', '€4.00', 3, false, false),
('drinks-soft-drinks-4', 'drinks', 'soft-drinks', 'Soft Drinks', 'Aranciata Amara / Cedrata Tassoni', '€4.00', 4, false, false),
('drinks-soft-drinks-5', 'drinks', 'soft-drinks', 'Soft Drinks', 'Schweppes Tonic / Lemon', '€4.00', 5, false, false),
('drinks-soft-drinks-6', 'drinks', 'soft-drinks', 'Soft Drinks', 'Lemon Soda', '€4.00', 6, false, false),
('drinks-soft-drinks-7', 'drinks', 'soft-drinks', 'Soft Drinks', 'Fruit Juices', '€4.00', 7, false, false),
('drinks-soft-drinks-8', 'drinks', 'soft-drinks', 'Soft Drinks', 'Mineral Water (Flat or Sparkling) 1/2 LT', '€3.00', 8, false, false),

-- drinks / Long Drinks & Cocktails
('drinks-long-drinks-1', 'drinks', 'long-drinks', 'Long Drinks & Cocktails', 'Campari Orange / Bloody Mary / Cuba Libre', '€9.00', 1, false, false),
('drinks-long-drinks-2', 'drinks', 'long-drinks', 'Long Drinks & Cocktails', 'Gin Tonic / Gin Lemon', '€10.00 - €12.00', 2, false, false),
('drinks-long-drinks-3', 'drinks', 'long-drinks', 'Long Drinks & Cocktails', 'Vodka (Lemon / Tonic / Orange)', '€10.00', 3, false, false),
('drinks-long-drinks-4', 'drinks', 'long-drinks', 'Long Drinks & Cocktails', 'Mimosa / Mojito / Whisky Cola / Tequila Sunrise', '€10.00', 4, false, false),
('drinks-long-drinks-5', 'drinks', 'long-drinks', 'Long Drinks & Cocktails', 'Americano', '€8.50', 5, false, false),
('drinks-long-drinks-6', 'drinks', 'long-drinks', 'Long Drinks & Cocktails', 'Negroni', '€9.50', 6, false, false),
('drinks-long-drinks-7', 'drinks', 'long-drinks', 'Long Drinks & Cocktails', 'Negroni Sbagliato', '€9.00', 7, false, false),

-- drinks / Beers (bottled only; draft-beer card stays static)
('drinks-beers-1', 'drinks', 'beers', 'Beers', 'Moretti Radler', '€6.00', 1, false, false),
('drinks-beers-2', 'drinks', 'beers', 'Beers', 'Moretti La Rossa', '€6.00', 2, false, false),
('drinks-beers-3', 'drinks', 'beers', 'Beers', 'Ceres', '€6.00', 3, false, false),
('drinks-beers-4', 'drinks', 'beers', 'Beers', 'Moretti Zero (Non-Alcoholic)', '€5.50', 4, false, false),
('drinks-beers-5', 'drinks', 'beers', 'Beers', 'Nastro Azzurro', '€5.00', 5, false, false),
('drinks-beers-6', 'drinks', 'beers', 'Beers', 'Heineken', '€5.00', 6, false, false),
('drinks-beers-7', 'drinks', 'beers', 'Beers', 'Corona', '€5.00', 7, false, false),
('drinks-beers-8', 'drinks', 'beers', 'Beers', 'Beck''s 33cl', '€4.50', 8, false, false),
('drinks-beers-9', 'drinks', 'beers', 'Beers', 'Beggia 33cl', '€6.50', 9, false, false),

-- drinks / House Wine (Vino della Casa)
('drinks-house-wine-1', 'drinks', 'house-wine', 'House Wine (Vino della Casa)', 'By the Glass (Calice)', '€3.00', 1, false, false),
('drinks-house-wine-2', 'drinks', 'house-wine', 'House Wine (Vino della Casa)', '1/4 Litre', '€7.00', 2, false, false),
('drinks-house-wine-3', 'drinks', 'house-wine', 'House Wine (Vino della Casa)', '1/2 Litre', '€9.00', 3, false, false),
('drinks-house-wine-4', 'drinks', 'house-wine', 'House Wine (Vino della Casa)', '1 Litre', '€13.00', 4, false, false),

-- drinks / Liqueurs & Bitters
('drinks-liqueurs-bitters-1', 'drinks', 'liqueurs-bitters', 'Liqueurs & Bitters', 'National Bitters & Liqueurs (Amari)', '€4.50 - €5.00', 1, false, false),
('drinks-liqueurs-bitters-2', 'drinks', 'liqueurs-bitters', 'Liqueurs & Bitters', 'Grappe', '€4.50 - €6.00', 2, false, false),
('drinks-liqueurs-bitters-3', 'drinks', 'liqueurs-bitters', 'Liqueurs & Bitters', 'Whisky', '€6.00 - €7.00', 3, false, false),

-- foods / Panini & Sandwiches
('foods-panini-sandwiches-1', 'foods', 'panini-sandwiches', 'Panini & Sandwiches', 'Salami & Mozzarella / Ham & Mozzarella', '€7.00', 1, false, false),
('foods-panini-sandwiches-2', 'foods', 'panini-sandwiches', 'Panini & Sandwiches', 'Crudo & Mozzarella (Parma Ham)', '€7.50', 2, false, false),
('foods-panini-sandwiches-3', 'foods', 'panini-sandwiches', 'Panini & Sandwiches', 'Porcellone', '€7.50', 3, false, false),
('foods-panini-sandwiches-4', 'foods', 'panini-sandwiches', 'Panini & Sandwiches', 'Inferno (Spicy)', '€7.00', 4, false, false),
('foods-panini-sandwiches-5', 'foods', 'panini-sandwiches', 'Panini & Sandwiches', 'Tricolore (Vegetarian)', '€6.50', 5, false, false),
('foods-panini-sandwiches-6', 'foods', 'panini-sandwiches', 'Panini & Sandwiches', 'Bufalino', '€7.50', 6, false, false),
('foods-panini-sandwiches-7', 'foods', 'panini-sandwiches', 'Panini & Sandwiches', 'Vegetariano', '€7.00', 7, false, false),
('foods-panini-sandwiches-8', 'foods', 'panini-sandwiches', 'Panini & Sandwiches', 'Nostromo', '€7.50', 8, false, false),
('foods-panini-sandwiches-9', 'foods', 'panini-sandwiches', 'Panini & Sandwiches', 'Classic Toast (Ham & Cheese)', '€4.50', 9, false, false),
('foods-panini-sandwiches-10', 'foods', 'panini-sandwiches', 'Panini & Sandwiches', 'Filled Toast (Toast Farcito)', '€5.50 - €6.50', 10, false, false),

-- foods / Gourmet Burgers
('foods-gourmet-burgers-1', 'foods', 'gourmet-burgers', 'Gourmet Burgers', 'Classico', '€7.00', 1, false, false),
('foods-gourmet-burgers-2', 'foods', 'gourmet-burgers', 'Gourmet Burgers', 'Cheeseburger', '€8.00', 2, false, false),
('foods-gourmet-burgers-3', 'foods', 'gourmet-burgers', 'Gourmet Burgers', 'Kingburger', '€9.00', 3, false, false),
('foods-gourmet-burgers-4', 'foods', 'gourmet-burgers', 'Gourmet Burgers', 'Energetico', '€8.50', 4, false, false),

-- foods / Pizzas
('foods-pizzas-1', 'foods', 'pizzas', 'Pizzas', 'Margherita', '€7.50', 1, false, false),
('foods-pizzas-2', 'foods', 'pizzas', 'Pizzas', 'Vegetables', '€8.50', 2, false, false),
('foods-pizzas-3', 'foods', 'pizzas', 'Pizzas', 'Capricciosa', '€9.00', 3, false, false),
('foods-pizzas-4', 'foods', 'pizzas', 'Pizzas', 'Diavola (Spicy)', '€9.00', 4, false, false),
('foods-pizzas-5', 'foods', 'pizzas', 'Pizzas', 'Principe', '€9.50', 5, false, false),
('foods-pizzas-6', 'foods', 'pizzas', 'Pizzas', 'Mushrooms', '€9.00', 6, false, false),
('foods-pizzas-7', 'foods', 'pizzas', 'Pizzas', 'Porcellona', '€9.50', 7, false, false),
('foods-pizzas-8', 'foods', 'pizzas', 'Pizzas', 'Four Cheeses', '€9.50', 8, false, false),
('foods-pizzas-9', 'foods', 'pizzas', 'Pizzas', 'Tuna', '€9.00', 9, false, false),

-- foods / Hot Pasta Dishes
('foods-hot-pasta-1', 'foods', 'hot-pasta', 'Hot Pasta Dishes', 'Baked Lasagna', '€9.00', 1, false, false),
('foods-hot-pasta-2', 'foods', 'hot-pasta', 'Hot Pasta Dishes', 'Vegetarian Lasagna', '€9.00', 2, false, false),
('foods-hot-pasta-3', 'foods', 'hot-pasta', 'Hot Pasta Dishes', 'Spaghetti Carbonara', '€10.00', 3, false, false),
('foods-hot-pasta-4', 'foods', 'hot-pasta', 'Hot Pasta Dishes', 'Spaghetti with Tomato Sauce', '€9.00', 4, false, false),
('foods-hot-pasta-5', 'foods', 'hot-pasta', 'Hot Pasta Dishes', 'Ravioli with Tomato & Basil', '€10.00', 5, false, false),

-- foods / Fresh Salads
('foods-fresh-salads-1', 'foods', 'fresh-salads', 'Fresh Salads', 'Caprese Salad', '€8.50', 1, false, false),
('foods-fresh-salads-2', 'foods', 'fresh-salads', 'Fresh Salads', 'Buffalo Caprese', '€9.50', 2, false, false),
('foods-fresh-salads-3', 'foods', 'fresh-salads', 'Fresh Salads', 'Parma Ham & Melon', '€13.00', 3, false, false),
('foods-fresh-salads-4', 'foods', 'fresh-salads', 'Fresh Salads', 'Mixed Salad', '€8.00', 4, false, false),
('foods-fresh-salads-5', 'foods', 'fresh-salads', 'Fresh Salads', 'Mimosa Salad', '€9.00', 5, false, false),
('foods-fresh-salads-6', 'foods', 'fresh-salads', 'Fresh Salads', 'Tuna Salad', '€9.50', 6, false, false),
('foods-fresh-salads-7', 'foods', 'fresh-salads', 'Fresh Salads', 'Extra Bread', '€1.00', 7, false, false),

-- snacks / Typical Venetian Tapas (Cicchetti)
('snacks-cicchetti-1', 'snacks', 'cicchetti', 'Typical Venetian Tapas (Cicchetti)', 'Traditional Cicchetti (Per Piece)', 'one piece: €2.50', 1, false, false),
('snacks-cicchetti-2', 'snacks', 'cicchetti', 'Typical Venetian Tapas (Cicchetti)', 'Polpette (Meatballs / Veggie Balls)', 'one piece: €3.00', 2, false, false),

-- snacks / Other Quick Snacks
('snacks-quick-snacks-1', 'snacks', 'quick-snacks', 'Other Quick Snacks', 'Mozzarella in Carrozza', 'one piece: €3.00', 1, false, false),
('snacks-quick-snacks-2', 'snacks', 'quick-snacks', 'Other Quick Snacks', 'Small Roll (Paninetto)', '€3.00', 2, false, false),
('snacks-quick-snacks-3', 'snacks', 'quick-snacks', 'Other Quick Snacks', 'Savory Croissant', '€3.00', 3, false, false),

-- coffee-croissants / Sweet Pastry (Pasticceria)
('coffee-croissants-sweet-pastry-1', 'coffee-croissants', 'sweet-pastry', 'Sweet Pastry (Pasticceria)', 'Filled Croissants', '€3.00', 1, false, false),

-- coffee-croissants / Cafeteria & Coffee
('coffee-croissants-cafeteria-coffee-1', 'coffee-croissants', 'cafeteria-coffee', 'Cafeteria & Coffee', 'Espresso Coffee', '€2.50', 1, false, false),
('coffee-croissants-cafeteria-coffee-2', 'coffee-croissants', 'cafeteria-coffee', 'Cafeteria & Coffee', 'Marocchino Coffee', '€2.50', 2, false, false),
('coffee-croissants-cafeteria-coffee-3', 'coffee-croissants', 'cafeteria-coffee', 'Cafeteria & Coffee', 'Americano Coffee', '€2.50', 3, false, false),
('coffee-croissants-cafeteria-coffee-4', 'coffee-croissants', 'cafeteria-coffee', 'Cafeteria & Coffee', 'Decaf Espresso', '€2.50', 4, false, false),
('coffee-croissants-cafeteria-coffee-5', 'coffee-croissants', 'cafeteria-coffee', 'Cafeteria & Coffee', 'Decaf Americano', '€2.80', 5, false, false),
('coffee-croissants-cafeteria-coffee-6', 'coffee-croissants', 'cafeteria-coffee', 'Cafeteria & Coffee', 'Cappuccino / Decaf Cappuccino', '€3.00', 6, false, false),
('coffee-croissants-cafeteria-coffee-7', 'coffee-croissants', 'cafeteria-coffee', 'Cafeteria & Coffee', 'Caffelatte (Coffee with Milk)', '€4.00', 7, false, false),
('coffee-croissants-cafeteria-coffee-8', 'coffee-croissants', 'cafeteria-coffee', 'Cafeteria & Coffee', 'Hot Tea', '€3.50', 8, false, false),
('coffee-croissants-cafeteria-coffee-9', 'coffee-croissants', 'cafeteria-coffee', 'Cafeteria & Coffee', 'Hot Chocolate', '€5.00', 9, false, false),
('coffee-croissants-cafeteria-coffee-10', 'coffee-croissants', 'cafeteria-coffee', 'Cafeteria & Coffee', 'Caffè Frappé', '€5.50', 10, false, false),
('coffee-croissants-cafeteria-coffee-11', 'coffee-croissants', 'cafeteria-coffee', 'Cafeteria & Coffee', 'With Soy Milk option', '+€0.50', 11, false, false),
('coffee-croissants-cafeteria-coffee-12', 'coffee-croissants', 'cafeteria-coffee', 'Cafeteria & Coffee', 'Banana Smoothie', '€6.00', 12, false, false)

on conflict (id) do update set
  name = excluded.name,
  price = excluded.price,
  category_label = excluded.category_label,
  sort_order = excluded.sort_order;
