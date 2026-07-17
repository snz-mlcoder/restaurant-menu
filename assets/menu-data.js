// Single source of truth for all translated menu content (English/Italiano/
// Español/Français/Deutsch/中文). Prices here are the fallback shown until
// assets/menu-live.js overlays the live Supabase price for items that have
// an `id` (matching admin-edited items) -- keep prices language-neutral (no
// baked-in words) so the same value is correct no matter which language
// page renders it.
window.MENU_DATA = {

"coffee-croissants": {
  title: { en: "Coffee & Croissants", it: "Caffetteria & Cornetti", es: "Café y Cruasanes", fr: "Café & Croissants", de: "Kaffee & Croissants", zh: "咖啡与羊角面包" },
  menuBoxLabel: { en: "Coffee & Croissants", it: "Caffetteria & Cornetti", es: "Cafetería y Cruasanes", fr: "Café & Croissants", de: "Kaffee & Croissants", zh: "咖啡与羊角面包" },
  categories: [
    {
      id: "sweet-pastry",
      title: { en: "Sweet Pastry (Pasticceria)", it: "Pasticceria", es: "Bollería Dulce", fr: "Viennoiseries Sucrées", de: "Süßgebäck", zh: "甜点" },
      type: "grid",
      items: [
        {
          id: "coffee-croissants-sweet-pastry-1",
          name: { en: "Filled Croissants", it: "Cornetti Farciti", es: "Cruasanes Rellenos", fr: "Croissants Fourrés", de: "Gefüllte Croissants", zh: "夹心羊角面包" },
          desc: {
            en: "Available fillings: Chocolate, Cream, Jam, Pistachio, or Plain (Empty)",
            it: "Farciture disponibili: Cioccolato, Crema, Marmellata, Pistacchio o Vuoto",
            es: "Rellenos disponibles: Chocolate, Crema, Mermelada, Pistacho, o Natural (Vacío)",
            fr: "Garnitures disponibles : Chocolat, Crème, Confiture, Pistache, ou Nature (Vide)",
            de: "Verfügbare Füllungen: Schokolade, Sahne, Marmelade, Pistazie oder Pur (ohne Füllung)",
            zh: "可选口味：巧克力、奶油、果酱、开心果或原味（无夹心）",
          },
          note: {
            en: "Available until they run out",
            it: "Disponibili fino a esaurimento",
            es: "Disponible hasta agotar existencias",
            fr: "Disponible jusqu'à épuisement des stocks",
            de: "Erhältlich, bis der Vorrat reicht",
            zh: "数量有限，售完为止",
          },
          price: "€3.00",
        },
      ],
    },
    {
      id: "cafeteria-coffee",
      title: { en: "Cafeteria & Coffee", it: "Caffetteria", es: "Cafetería y Café", fr: "Cafétéria & Café", de: "Café & Kaffee", zh: "咖啡吧" },
      type: "grid",
      items: [
        { id: "coffee-croissants-cafeteria-coffee-1", name: { en: "Espresso Coffee", it: "Caffè Espresso", es: "Café Espresso", fr: "Café Espresso", de: "Espresso", zh: "浓缩咖啡" }, price: "€2.50" },
        { id: "coffee-croissants-cafeteria-coffee-2", name: { en: "Marocchino Coffee", it: "Caffè Marocchino", es: "Café Marocchino", fr: "Café Marocchino", de: "Marocchino Kaffee", zh: "摩洛哥咖啡" }, price: "€2.50" },
        { id: "coffee-croissants-cafeteria-coffee-3", name: { en: "Americano Coffee", it: "Caffè Americano", es: "Café Americano", fr: "Café Americano", de: "Caffè Americano", zh: "美式咖啡" }, price: "€2.50" },
        { id: "coffee-croissants-cafeteria-coffee-4", name: { en: "Decaf Espresso", it: "Espresso Decaffeinato", es: "Espresso Descafeinado", fr: "Espresso Décaféiné", de: "Espresso Entkoffeiniert", zh: "无咖啡因浓缩咖啡" }, price: "€2.50" },
        { id: "coffee-croissants-cafeteria-coffee-5", name: { en: "Decaf Americano", it: "Americano Decaffeinato", es: "Americano Descafeinado", fr: "Americano Décaféiné", de: "Americano Entkoffeiniert", zh: "无咖啡因美式咖啡" }, price: "€2.80" },
        { id: "coffee-croissants-cafeteria-coffee-6", name: { en: "Cappuccino / Decaf Cappuccino", it: "Cappuccino / Cappuccino Decaffeinato", es: "Capuchino / Capuchino Descafeinado", fr: "Cappuccino / Cappuccino Décaféiné", de: "Cappuccino / Cappuccino Entkoffeiniert", zh: "卡布奇诺 / 无咖啡因卡布奇诺" }, price: "€3.00" },
        { id: "coffee-croissants-cafeteria-coffee-7", name: { en: "Caffelatte (Coffee with Milk)", it: "Caffellatte", es: "Café con Leche (Caffellatte)", fr: "Café au Lait (Caffellatte)", de: "Caffelatte (Kaffee mit Milch)", zh: "拿铁咖啡" }, price: "€4.00" },
        {
          id: "coffee-croissants-cafeteria-coffee-8",
          name: { en: "Hot Tea", it: "Tè Caldo", es: "Té Caliente", fr: "Thé Chaud", de: "Heißer Tee", zh: "热茶" },
          desc: {
            en: "Flavors: Earl Grey, English Breakfast, Camomile, Mint, Forest Fruit, Green Tea",
            it: "Gusti: Earl Grey, English Breakfast, Camomilla, Menta, Frutti di Bosco, Tè Verde",
            es: "Sabores: Earl Grey, Desayuno Inglés, Manzanilla, Menta, Frutos del Bosque, Té Verde",
            fr: "Parfums : Earl Grey, Petit-déjeuner anglais, Camomille, Menthe, Fruits des bois, Thé vert",
            de: "Sorten: Earl Grey, English Breakfast, Kamille, Minze, Waldfrucht, Grüner Tee",
            zh: "口味：伯爵红茶、英式早餐茶、洋甘菊、薄荷、莓果茶、绿茶",
          },
          descVariant: "options-list",
          price: "€3.50",
        },
        { id: "coffee-croissants-cafeteria-coffee-9", name: { en: "Hot Chocolate", it: "Cioccolata Calda", es: "Chocolate Caliente", fr: "Chocolat Chaud", de: "Heiße Schokolade", zh: "热巧克力" }, price: "€5.00" },
        {
          id: "coffee-croissants-cafeteria-coffee-10",
          name: { en: "Caffè Frappé", it: "Caffè Frappé", es: "Café Frappé", fr: "Caffè Frappé", de: "Caffè Frappé", zh: "冰咖啡" },
          desc: {
            en: "Cold Coffee: milk, coffee, ice, and sugar optional.",
            it: "Caffè freddo: latte, caffè, ghiaccio, zucchero facoltativo.",
            es: "Café frío: leche, café, hielo y azúcar opcional.",
            fr: "Café froid : lait, café, glace, sucre en option.",
            de: "Kalter Kaffee: Milch, Kaffee, Eis, Zucker optional.",
            zh: "冰咖啡：牛奶、咖啡、冰块，糖可选。",
          },
          descVariant: "options-list",
          price: "€5.50",
        },
        { id: "coffee-croissants-cafeteria-coffee-11", name: { en: "With Soy Milk option", it: "Opzione Latte di Soia", es: "Opción con Leche de Soja", fr: "Option Lait de Soja", de: "Mit Sojamilch", zh: "豆奶选项" }, price: "+€0.50", variant: "font-sub" },
        { id: "coffee-croissants-cafeteria-coffee-12", name: { en: "Banana Smoothie", it: "Frullato alla Banana", es: "Batido de Plátano", fr: "Smoothie à la Banane", de: "Bananen-Smoothie", zh: "香蕉奶昔" }, price: "€6.00" },
      ],
    },
  ],
},

"drinks": {
  title: { en: "Drinks & Wine", it: "Bevande & Vini", es: "Bebidas y Vinos", fr: "Boissons & Vins", de: "Getränke & Wein", zh: "饮品与葡萄酒" },
  menuBoxLabel: { en: "Drinks & Wine", it: "Bevande & Vini", es: "Bebidas y Vinos", fr: "Boissons & Vins", de: "Getränke & Wein", zh: "饮品与葡萄酒" },
  categories: [
    {
      id: "fresh-juices",
      title: { en: "Freshly Squeezed Juices", it: "Succhi di Frutta Freschi", es: "Zumos Naturales", fr: "Jus de Fruits Frais", de: "Frisch Gepresste Säfte", zh: "鲜榨果汁" },
      type: "grid",
      items: [
        { id: "drinks-fresh-juices-1", name: { en: "Freshly Squeezed Orange Juice", it: "Spremuta d'Arancia", es: "Zumo de Naranja Natural", fr: "Jus d'Orange Pressé", de: "Frisch Gepresster Orangensaft", zh: "鲜榨橙汁" }, price: "€6.00" },
        { id: "drinks-fresh-juices-2", name: { en: "Freshly Squeezed Grapefruit Juice", it: "Spremuta di Pompelmo", es: "Zumo de Pomelo Natural", fr: "Jus de Pamplemousse Pressé", de: "Frisch Gepresster Grapefruitsaft", zh: "鲜榨西柚汁" }, price: "€6.00" },
      ],
    },
    {
      id: "aperitifs",
      title: { en: "Aperitifs", it: "Aperitivi", es: "Aperitivos", fr: "Apéritifs", de: "Aperitifs", zh: "开胃酒" },
      type: "grid",
      items: [
        { id: "drinks-aperitifs-1", name: { en: "Non-Alcoholic (Sanbitter, Crodino, Gingerino)", it: "Analcolici (Sanbittèr, Crodino, Gingerino)", es: "Sin Alcohol (Sanbitter, Crodino, Gingerino)", fr: "Sans Alcool (Sanbitter, Crodino, Gingerino)", de: "Alkoholfrei (Sanbitter, Crodino, Gingerino)", zh: "无酒精（Sanbitter、Crodino、Gingerino）" }, price: "€4.00" },
        { id: "drinks-aperitifs-2", name: { en: "Spritz (Aperol, Campari, Select, Cynar)", it: "Spritz (Aperol, Campari, Select, Cynar)", es: "Spritz (Aperol, Campari, Select, Cynar)", fr: "Spritz (Aperol, Campari, Select, Cynar)", de: "Spritz (Aperol, Campari, Select, Cynar)", zh: "Spritz（阿佩罗、金巴利、Select、Cynar）" }, price: "€5.00" },
        { id: "drinks-aperitifs-3", name: { en: "Spritz Bastardo", it: "Spritz Bastardo", es: "Spritz Bastardo", fr: "Spritz Bastardo", de: "Spritz Bastardo", zh: "Spritz Bastardo" }, price: "€5.50" },
        { id: "drinks-aperitifs-4", name: { en: "Spritz Limoncello", it: "Spritz Limoncello", es: "Spritz Limoncello", fr: "Spritz Limoncello", de: "Spritz Limoncello", zh: "Spritz 柠檬" }, price: "€6.00" },
        { id: "drinks-aperitifs-5", name: { en: "Bitter Campari & Soda", it: "Bitter Campari e Soda", es: "Bitter Campari con Soda", fr: "Bitter Campari & Soda", de: "Bitter Campari & Soda", zh: "金巴利苦味酒配苏打水" }, price: "€5.50" },
        { id: "drinks-aperitifs-6", name: { en: "Campari Soda (Bottle)", it: "Campari Soda (Bottiglia)", es: "Campari Soda (Botella)", fr: "Campari Soda (Bouteille)", de: "Campari Soda (Flasche)", zh: "金巴利苏打水（瓶装）" }, price: "€4.50" },
        { id: "drinks-aperitifs-7", name: { en: "Bellini", it: "Bellini", es: "Bellini", fr: "Bellini", de: "Bellini", zh: "贝里尼" }, price: "€6.00" },
        { id: "drinks-aperitifs-8", name: { en: "Hugo", it: "Hugo", es: "Hugo", fr: "Hugo", de: "Hugo", zh: "雨果鸡尾酒" }, price: "€6.00" },
        { id: "drinks-aperitifs-9", name: { en: "Martini Bianco (White)", it: "Martini Bianco", es: "Martini Bianco (Blanco)", fr: "Martini Bianco (Blanc)", de: "Martini Bianco (Weiß)", zh: "马天尼比昂科（白）" }, price: "€6.00" },
        { id: "drinks-aperitifs-10", name: { en: "Martini Rosso (Red)", it: "Martini Rosso", es: "Martini Rosso (Rojo)", fr: "Martini Rosso (Rouge)", de: "Martini Rosso (Rot)", zh: "马天尼罗素（红）" }, price: "€6.00" },
      ],
    },
    {
      id: "soft-drinks",
      title: { en: "Soft Drinks", it: "Bibite", es: "Refrescos", fr: "Sodas", de: "Softdrinks", zh: "软饮" },
      type: "grid",
      items: [
        { id: "drinks-soft-drinks-1", name: { en: "Coca Cola / Zero", it: "Coca Cola / Zero", es: "Coca Cola / Zero", fr: "Coca Cola / Zero", de: "Coca Cola / Zero", zh: "可口可乐 / 零度可乐" }, price: "€4.00" },
        { id: "drinks-soft-drinks-2", name: { en: "Fanta / Sprite / Chinotto", it: "Fanta / Sprite / Chinotto", es: "Fanta / Sprite / Chinotto", fr: "Fanta / Sprite / Chinotto", de: "Fanta / Sprite / Chinotto", zh: "芬达 / 雪碧 / Chinotto" }, price: "€4.00" },
        { id: "drinks-soft-drinks-3", name: { en: "Ice Tea (Lemon or Peach)", it: "Tè Freddo (Limone o Pesca)", es: "Té Helado (Limón o Melocotón)", fr: "Thé Glacé (Citron ou Pêche)", de: "Eistee (Zitrone oder Pfirsich)", zh: "冰茶（柠檬或桃子）" }, price: "€4.00" },
        { id: "drinks-soft-drinks-4", name: { en: "Aranciata Amara / Cedrata Tassoni", it: "Aranciata Amara / Cedrata Tassoni", es: "Aranciata Amara / Cedrata Tassoni", fr: "Aranciata Amara / Cedrata Tassoni", de: "Aranciata Amara / Cedrata Tassoni", zh: "苦橙汽水 / Cedrata Tassoni" }, price: "€4.00" },
        { id: "drinks-soft-drinks-5", name: { en: "Schweppes Tonic / Lemon", it: "Schweppes Tonica / Limone", es: "Schweppes Tónica / Limón", fr: "Schweppes Tonic / Citron", de: "Schweppes Tonic / Zitrone", zh: "怡泉汤力 / 柠檬" }, price: "€4.00" },
        { id: "drinks-soft-drinks-6", name: { en: "Lemon Soda", it: "Lemon Soda", es: "Lemon Soda", fr: "Lemon Soda", de: "Lemon Soda", zh: "柠檬苏打水" }, price: "€4.00" },
        {
          id: "drinks-soft-drinks-7",
          name: { en: "Fruit Juices", it: "Succhi di Frutta", es: "Zumos de Fruta", fr: "Jus de Fruits", de: "Fruchtsäfte", zh: "果汁" },
          desc: {
            en: "Flavors: Apricot, Pineapple, Orange, Green Apple, Blueberry, Pear, Peach, Tomato, Grapefruit",
            it: "Gusti: Albicocca, Ananas, Arancia, Mela Verde, Mirtillo, Pera, Pesca, Pomodoro, Pompelmo",
            es: "Sabores: Albaricoque, Piña, Naranja, Manzana Verde, Arándano, Pera, Melocotón, Tomate, Pomelo",
            fr: "Parfums : Abricot, Ananas, Orange, Pomme Verte, Myrtille, Poire, Pêche, Tomate, Pamplemousse",
            de: "Sorten: Aprikose, Ananas, Orange, Grüner Apfel, Heidelbeere, Birne, Pfirsich, Tomate, Grapefruit",
            zh: "口味：杏子、菠萝、橙子、青苹果、蓝莓、梨、桃子、番茄、西柚",
          },
          descVariant: "options-list",
          price: "€4.00",
        },
        { id: "drinks-soft-drinks-8", name: { en: "Mineral Water (Flat or Sparkling) 1/2 LT", it: "Acqua Minerale (Naturale o Frizzante) 1/2 LT", es: "Agua Mineral (Con o Sin Gas) 1/2 LT", fr: "Eau Minérale (Plate ou Gazeuse) 1/2 LT", de: "Mineralwasser (Still oder mit Kohlensäure) 1/2 LT", zh: "矿泉水（无气或有气）1/2 升" }, price: "€3.00" },
      ],
    },
    {
      id: "long-drinks",
      title: { en: "Long Drinks & Cocktails", it: "Cocktail e Long Drink", es: "Cócteles y Long Drinks", fr: "Long Drinks & Cocktails", de: "Longdrinks & Cocktails", zh: "长饮与鸡尾酒" },
      type: "grid",
      items: [
        { id: "drinks-long-drinks-1", name: { en: "Campari Orange / Bloody Mary / Cuba Libre", it: "Campari Orange / Bloody Mary / Cuba Libre", es: "Campari Orange / Bloody Mary / Cuba Libre", fr: "Campari Orange / Bloody Mary / Cuba Libre", de: "Campari Orange / Bloody Mary / Cuba Libre", zh: "金巴利橙汁 / 血腥玛丽 / 自由古巴" }, price: "€9.00" },
        { id: "drinks-long-drinks-2", name: { en: "Gin Tonic / Gin Lemon", it: "Gin Tonic / Gin Lemon", es: "Gin Tonic / Gin Lemon", fr: "Gin Tonic / Gin Lemon", de: "Gin Tonic / Gin Lemon", zh: "金汤力 / 金柠檬" }, price: "€10.00 - €12.00" },
        { id: "drinks-long-drinks-3", name: { en: "Vodka (Lemon / Tonic / Orange)", it: "Vodka (Limone / Tonica / Arancia)", es: "Vodka (Limón / Tónica / Naranja)", fr: "Vodka (Citron / Tonic / Orange)", de: "Vodka (Zitrone / Tonic / Orange)", zh: "伏特加（柠檬 / 汤力 / 橙汁）" }, price: "€10.00" },
        { id: "drinks-long-drinks-4", name: { en: "Mimosa / Mojito / Whisky Cola / Tequila Sunrise", it: "Mimosa / Mojito / Whisky Cola / Tequila Sunrise", es: "Mimosa / Mojito / Whisky Cola / Tequila Sunrise", fr: "Mimosa / Mojito / Whisky Cola / Tequila Sunrise", de: "Mimosa / Mojito / Whisky Cola / Tequila Sunrise", zh: "含羞草 / 莫吉托 / 威士忌可乐 / 龙舌兰日出" }, price: "€10.00" },
        { id: "drinks-long-drinks-5", name: { en: "Americano", it: "Americano", es: "Americano", fr: "Americano", de: "Americano", zh: "美国佬" }, price: "€8.50" },
        { id: "drinks-long-drinks-6", name: { en: "Negroni", it: "Negroni", es: "Negroni", fr: "Negroni", de: "Negroni", zh: "内格罗尼" }, price: "€9.50" },
        { id: "drinks-long-drinks-7", name: { en: "Negroni Sbagliato", it: "Negroni Sbagliato", es: "Negroni Sbagliato", fr: "Negroni Sbagliato", de: "Negroni Sbagliato", zh: "错误内格罗尼" }, price: "€9.00" },
      ],
    },
    {
      id: "beers",
      title: { en: "Beers", it: "Birre", es: "Cervezas", fr: "Bières", de: "Biere", zh: "啤酒" },
      type: "grid",
      items: [
        {
          variant: "highlighted",
          name: { en: "Moretti Draft Beer (Alla Spina)", it: "Birra Moretti alla Spina", es: "Cerveza Moretti de Barril (Alla Spina)", fr: "Bière Moretti Pression (Alla Spina)", de: "Moretti Fassbier (Alla Spina)", zh: "莫雷蒂生啤" },
          sizes: [
            { label: { en: "Small (20cl)", it: "Piccola (20cl)", es: "Pequeña (20cl)", fr: "Petite (20cl)", de: "Klein (20cl)", zh: "小杯 (20cl)" }, price: "€4.00" },
            { label: { en: "Medium (40cl)", it: "Media (40cl)", es: "Mediana (40cl)", fr: "Moyenne (40cl)", de: "Mittel (40cl)", zh: "中杯 (40cl)" }, price: "€7.00" },
            { label: { en: "Large (100cl)", it: "Grande (100cl)", es: "Grande (100cl)", fr: "Grande (100cl)", de: "Groß (100cl)", zh: "大杯 (100cl)" }, price: "€15.00" },
          ],
        },
        { id: "drinks-beers-1", name: { en: "Moretti Radler", it: "Moretti Radler", es: "Moretti Radler", fr: "Moretti Radler", de: "Moretti Radler", zh: "莫雷蒂 Radler" }, desc: { en: "Bottled 33cl", it: "Bottiglia 33cl", es: "Botella 33cl", fr: "Bouteille 33cl", de: "Flasche 33cl", zh: "瓶装 33cl" }, price: "€6.00" },
        { id: "drinks-beers-2", name: { en: "Moretti La Rossa", it: "Moretti La Rossa", es: "Moretti La Rossa", fr: "Moretti La Rossa", de: "Moretti La Rossa", zh: "莫雷蒂红啤" }, desc: { en: "Bottled 33cl", it: "Bottiglia 33cl", es: "Botella 33cl", fr: "Bouteille 33cl", de: "Flasche 33cl", zh: "瓶装 33cl" }, price: "€6.00" },
        { id: "drinks-beers-3", name: { en: "Ceres", it: "Ceres", es: "Ceres", fr: "Ceres", de: "Ceres", zh: "Ceres" }, desc: { en: "Bottled 33cl", it: "Bottiglia 33cl", es: "Botella 33cl", fr: "Bouteille 33cl", de: "Flasche 33cl", zh: "瓶装 33cl" }, price: "€6.00" },
        { id: "drinks-beers-4", name: { en: "Moretti Zero (Non-Alcoholic)", it: "Moretti Zero (Analcolica)", es: "Moretti Zero (Sin Alcohol)", fr: "Moretti Zero (Sans Alcool)", de: "Moretti Zero (Alkoholfrei)", zh: "莫雷蒂零度（无酒精）" }, desc: { en: "Bottled 33cl", it: "Bottiglia 33cl", es: "Botella 33cl", fr: "Bouteille 33cl", de: "Flasche 33cl", zh: "瓶装 33cl" }, price: "€5.50" },
        { id: "drinks-beers-5", name: { en: "Nastro Azzurro", it: "Nastro Azzurro", es: "Nastro Azzurro", fr: "Nastro Azzurro", de: "Nastro Azzurro", zh: "蓝丝带" }, desc: { en: "Bottled 33cl", it: "Bottiglia 33cl", es: "Botella 33cl", fr: "Bouteille 33cl", de: "Flasche 33cl", zh: "瓶装 33cl" }, price: "€5.00" },
        { id: "drinks-beers-6", name: { en: "Heineken", it: "Heineken", es: "Heineken", fr: "Heineken", de: "Heineken", zh: "喜力" }, desc: { en: "Bottled 33cl", it: "Bottiglia 33cl", es: "Botella 33cl", fr: "Bouteille 33cl", de: "Flasche 33cl", zh: "瓶装 33cl" }, price: "€5.00" },
        { id: "drinks-beers-7", name: { en: "Corona", it: "Corona", es: "Corona", fr: "Corona", de: "Corona", zh: "科罗娜" }, desc: { en: "Bottled 33cl", it: "Bottiglia 33cl", es: "Botella 33cl", fr: "Bouteille 33cl", de: "Flasche 33cl", zh: "瓶装 33cl" }, price: "€5.00" },
        { id: "drinks-beers-8", name: { en: "Beck's 33cl", it: "Beck's 33cl", es: "Beck's 33cl", fr: "Beck's 33cl", de: "Beck's 33cl", zh: "贝克啤酒 33cl" }, price: "€4.50" },
        { id: "drinks-beers-9", name: { en: "Beggia 33cl", it: "Beggia 33cl", es: "Beggia 33cl", fr: "Beggia 33cl", de: "Beggia 33cl", zh: "Beggia 33cl" }, price: "€6.50" },
      ],
    },
    {
      id: "house-wine",
      title: { en: "House Wine (Vino della Casa)", it: "Vino della Casa", es: "Vino de la Casa", fr: "Vin de la Maison (Vino della Casa)", de: "Hauswein (Vino della Casa)", zh: "招牌葡萄酒" },
      type: "grid",
      items: [
        { id: "drinks-house-wine-1", name: { en: "By the Glass (Calice)", it: "Al Calice", es: "Copa", fr: "Au Verre (Calice)", de: "Im Glas (Calice)", zh: "单杯" }, price: "€3.00" },
        { id: "drinks-house-wine-2", name: { en: "1/4 Litre", it: "1/4 Litro", es: "1/4 Litro", fr: "1/4 Litre", de: "1/4 Liter", zh: "1/4 升" }, price: "€7.00" },
        { id: "drinks-house-wine-3", name: { en: "1/2 Litre", it: "1/2 Litro", es: "1/2 Litro", fr: "1/2 Litre", de: "1/2 Liter", zh: "1/2 升" }, price: "€9.00" },
        { id: "drinks-house-wine-4", name: { en: "1 Litre", it: "1 Litro", es: "1 Litro", fr: "1 Litre", de: "1 Liter", zh: "1 升" }, price: "€13.00" },
      ],
    },
    {
      title: { en: "Wine List (Vini in Bottiglia)", it: "Vini in Bottiglia", es: "Carta de Vinos", fr: "Carte des Vins (Vini in Bottiglia)", de: "Weinkarte (Vini in Bottiglia)", zh: "葡萄酒单" },
      type: "subgroups",
      subgroups: [
        {
          title: { en: "White Wines", it: "Vini Bianchi", es: "Vinos Blancos", fr: "Vins Blancs", de: "Weißweine", zh: "白葡萄酒" },
          items: [
            { name: { en: "Pinot Grigio / Chardonnay / Soave / Sauvignon / Lugana", it: "Pinot Grigio / Chardonnay / Soave / Sauvignon / Lugana", es: "Pinot Grigio / Chardonnay / Soave / Sauvignon / Lugana", fr: "Pinot Grigio / Chardonnay / Soave / Sauvignon / Lugana", de: "Pinot Grigio / Chardonnay / Soave / Sauvignon / Lugana", zh: "灰皮诺 / 霞多丽 / Soave / 长相思 / Lugana" }, sizes: [{ label: { en: "Glass", it: "Calice", es: "Copa", fr: "Verre", de: "Glas", zh: "杯" }, price: "€4.50" }, { label: { en: "Bottle", it: "Bottiglia", es: "Botella", fr: "Bouteille", de: "Flasche", zh: "瓶" }, price: "€25.00" }] },
            { name: { en: "Vermentino IGP Salento", it: "Vermentino IGP Salento", es: "Vermentino IGP Salento", fr: "Vermentino IGP Salento", de: "Vermentino IGP Salento", zh: "Vermentino IGP Salento" }, sizes: [{ label: { en: "Glass", it: "Calice", es: "Copa", fr: "Verre", de: "Glas", zh: "杯" }, price: "€6.00" }, { label: { en: "Bottle", it: "Bottiglia", es: "Botella", fr: "Bouteille", de: "Flasche", zh: "瓶" }, price: "€28.00" }] },
          ],
        },
        {
          title: { en: "Red Wines", it: "Vini Rossi", es: "Vinos Tintos", fr: "Vins Rouges", de: "Rotweine", zh: "红葡萄酒" },
          items: [
            { name: { en: "Cabernet Franc / Cabernet Sauvignon / Chianti DOCG", it: "Cabernet Franc / Cabernet Sauvignon / Chianti DOCG", es: "Cabernet Franc / Cabernet Sauvignon / Chianti DOCG", fr: "Cabernet Franc / Cabernet Sauvignon / Chianti DOCG", de: "Cabernet Franc / Cabernet Sauvignon / Chianti DOCG", zh: "品丽珠 / 赤霞珠 / 基安蒂 DOCG" }, sizes: [{ label: { en: "Glass", it: "Calice", es: "Copa", fr: "Verre", de: "Glas", zh: "杯" }, price: "€4.50 - €5.00" }, { label: { en: "Bottle", it: "Bottiglia", es: "Botella", fr: "Bouteille", de: "Flasche", zh: "瓶" }, price: "€25.00" }] },
            { name: { en: "Valpolicella Ripasso", it: "Valpolicella Ripasso", es: "Valpolicella Ripasso", fr: "Valpolicella Ripasso", de: "Valpolicella Ripasso", zh: "Valpolicella Ripasso" }, sizes: [{ label: { en: "Glass", it: "Calice", es: "Copa", fr: "Verre", de: "Glas", zh: "杯" }, price: "€6.00" }, { label: { en: "Bottle", it: "Bottiglia", es: "Botella", fr: "Bouteille", de: "Flasche", zh: "瓶" }, price: "€27.00" }] },
          ],
        },
        {
          title: { en: "Rosé & Sparkling Wines", it: "Vini Rosé e Spumanti", es: "Vinos Rosados y Espumosos", fr: "Vins Rosés & Effervescents", de: "Roséweine & Schaumweine", zh: "桃红与起泡酒" },
          items: [
            { name: { en: "Rosato / Prosecco DOC / Moscato", it: "Rosato / Prosecco DOC / Moscato", es: "Rosato / Prosecco DOC / Moscato", fr: "Rosato / Prosecco DOC / Moscato", de: "Rosato / Prosecco DOC / Moscato", zh: "桃红 / DOC 普罗塞克 / 麝香葡萄酒" }, sizes: [{ label: { en: "Glass", it: "Calice", es: "Copa", fr: "Verre", de: "Glas", zh: "杯" }, price: "€4.50" }, { label: { en: "Bottle", it: "Bottiglia", es: "Botella", fr: "Bouteille", de: "Flasche", zh: "瓶" }, price: "€25.00" }] },
            { name: { en: "Prosecco Superiore di Valdobbiadene DOCG", it: "Prosecco Superiore di Valdobbiadene DOCG", es: "Prosecco Superiore di Valdobbiadene DOCG", fr: "Prosecco Superiore di Valdobbiadene DOCG", de: "Prosecco Superiore di Valdobbiadene DOCG", zh: "瓦尔多比亚德内高级普罗塞克 DOCG" }, sizes: [{ label: { en: "Glass", it: "Calice", es: "Copa", fr: "Verre", de: "Glas", zh: "杯" }, price: "€5.00" }, { label: { en: "Bottle", it: "Bottiglia", es: "Botella", fr: "Bouteille", de: "Flasche", zh: "瓶" }, price: "€28.00" }] },
          ],
        },
      ],
    },
    {
      id: "liqueurs-bitters",
      title: { en: "Liqueurs & Bitters", it: "Liquori e Amari", es: "Licores y Amargos", fr: "Liqueurs & Amers", de: "Liköre & Bitter", zh: "利口酒与苦酒" },
      type: "grid",
      items: [
        { id: "drinks-liqueurs-bitters-1", name: { en: "National Bitters & Liqueurs (Amari)", it: "Amari e Liquori Nazionali", es: "Amargos y Licores Nacionales", fr: "Amers & Liqueurs Nationaux (Amari)", de: "Nationale Bitter & Liköre (Amari)", zh: "本地苦酒与利口酒（Amari）" }, price: "€4.50 - €5.00" },
        { id: "drinks-liqueurs-bitters-2", name: { en: "Grappa", it: "Grappa", es: "Grappa", fr: "Grappa", de: "Grappa", zh: "格拉帕酒" }, price: "€4.50 - €6.00" },
        { id: "drinks-liqueurs-bitters-3", name: { en: "Whisky", it: "Whisky", es: "Whisky", fr: "Whisky", de: "Whisky", zh: "威士忌" }, price: "€6.00 - €7.00" },
      ],
    },
  ],
},

"foods": {
  title: { en: "Food & Pizza", it: "Cucina & Pizza", es: "Comida y Pizza", fr: "Cuisine & Pizza", de: "Speisen & Pizza", zh: "美食与披萨" },
  menuBoxLabel: { en: "Food & Pizza", it: "Cucina & Pizza", es: "Comida y Pizza", fr: "Cuisine & Pizza", de: "Speisen & Pizza", zh: "美食与披萨" },
  categories: [
    {
      id: "panini-sandwiches",
      title: { en: "Panini & Sandwiches", it: "Panini e Toast", es: "Panini y Sándwiches", fr: "Panini & Sandwichs", de: "Panini & Sandwiches", zh: "帕尼尼与三明治" },
      type: "grid",
      items: [
        { id: "foods-panini-sandwiches-1", name: { en: "Salami & Mozzarella", it: "Salame e Mozzarella", es: "Salami y Mozzarella", fr: "Salami & Mozzarella", de: "Salami & Mozzarella", zh: "萨拉米香肠 & 马苏里拉芝士" }, price: "€7.00" },
        { id: "foods-panini-sandwiches-11", name: { en: "Cooked Ham & Mozzarella", it: "Prosciutto Cotto e Mozzarella", es: "Jamón Cocido y Mozzarella", fr: "Jambon Cuit & Mozzarella", de: "Gekochter Schinken & Mozzarella", zh: "熟火腿 & 马苏里拉芝士" }, price: "€7.00" },
        { id: "foods-panini-sandwiches-2", name: { en: "Crudo & Mozzarella", it: "Crudo e Mozzarella", es: "Crudo y Mozzarella", fr: "Crudo & Mozzarella", de: "Crudo & Mozzarella", zh: "生火腿 & 马苏里拉芝士" }, desc: { en: "Parma ham and mozzarella", fr: "Jambon de Parme et mozzarella", de: "Parmaschinken und Mozzarella", zh: "帕尔马火腿和马苏里拉芝士" }, price: "€7.50" },
        { id: "foods-panini-sandwiches-3", name: { en: "Porcellone", it: "Porcellone", es: "Porcellone", fr: "Porcellone", de: "Porcellone", zh: "Porcellone" }, desc: { en: "Roast pork (porchetta), brie cheese, and garden rocket", it: "Porchetta, brie e rucola", es: "Cerdo asado (porchetta), queso brie y rúcula", fr: "Porc rôti (porchetta), brie et roquette", de: "Gebratenes Schweinefleisch (Porchetta), Brie und Rucola", zh: "烤猪肉（Porchetta）、布里芝士和芝麻菜" }, price: "€7.50" },
        { id: "foods-panini-sandwiches-4", name: { en: "Inferno (Spicy)", it: "Inferno (Piccante)", es: "Inferno (Picante)", fr: "Inferno (Piquant)", de: "Inferno (Scharf)", zh: "Inferno（辣味）" }, desc: { en: "Spicy salami, garden rocket, chili pepper, and provola cheese", it: "Salame piccante, rucola, peperoncino e provola", es: "Salami picante, rúcula, chile y queso provola", fr: "Salami piquant, roquette, piment et provola", de: "Scharfe Salami, Rucola, Chili und Provola-Käse", zh: "辣萨拉米、芝麻菜、辣椒和普罗沃拉芝士" }, price: "€7.00" },
        { id: "foods-panini-sandwiches-5", name: { en: "Tricolore (Vegetarian)", it: "Tricolore (Vegetariano)", es: "Tricolore (Vegetariano)", fr: "Tricolore (Végétarien)", de: "Tricolore (Vegetarisch)", zh: "Tricolore（素食）" }, desc: { en: "Mozzarella, tomato, and lettuce", it: "Mozzarella, pomodoro e lattuga", es: "Mozzarella, tomate y lechuga", fr: "Mozzarella, tomate et laitue", de: "Mozzarella, Tomate und Salat", zh: "马苏里拉芝士、番茄和生菜" }, price: "€6.50" },
        { id: "foods-panini-sandwiches-6", name: { en: "Bufalino", it: "Bufalino", es: "Bufalino", fr: "Bufalino", de: "Bufalino", zh: "Bufalino" }, desc: { en: "Bufala cheese, lettuce, tomato, and oregano", it: "Mozzarella di bufala, lattuga, pomodoro e origano", es: "Queso búfala, lechuga, tomate y orégano", fr: "Fromage de bufflonne, laitue, tomate et origan", de: "Büffelkäse, Salat, Tomate und Oregano", zh: "水牛芝士、生菜、番茄和牛至" }, price: "€7.50" },
        { id: "foods-panini-sandwiches-7", name: { en: "Vegetariano", it: "Vegetariano", es: "Vegetariano", fr: "Vegetariano", de: "Vegetariano", zh: "Vegetariano" }, desc: { en: "Grilled vegetables and cheese", it: "Verdure grigliate e formaggio", es: "Verduras a la parrilla y queso", fr: "Légumes grillés et fromage", de: "Gegrilltes Gemüse und Käse", zh: "烤蔬菜和芝士" }, price: "€7.00" },
        { id: "foods-panini-sandwiches-8", name: { en: "Nostromo", it: "Nostromo", es: "Nostromo", fr: "Nostromo", de: "Nostromo", zh: "Nostromo" }, desc: { en: "Tuna, tomato, cheese, and lettuce", it: "Tonno, pomodoro, formaggio e lattuga", es: "Atún, tomate, queso y lechuga", fr: "Thon, tomate, fromage et laitue", de: "Thunfisch, Tomate, Käse und Salat", zh: "金枪鱼、番茄、芝士和生菜" }, price: "€7.50" },
        { id: "foods-panini-sandwiches-9", name: { en: "Classic Toast (Ham & Cheese)", it: "Toast Classico (Prosciutto e Formaggio)", es: "Tostada Clásica (Jamón y Queso)", fr: "Toast Classique (Jambon & Fromage)", de: "Klassischer Toast (Schinken & Käse)", zh: "经典三明治（火腿 & 芝士）" }, price: "€4.50" },
        { id: "foods-panini-sandwiches-10", name: { en: "Filled Toast (Toast Farcito)", it: "Toast Farcito", es: "Tostada Rellena (Toast Farcito)", fr: "Toast Farci", de: "Gefüllter Toast (Toast Farcito)", zh: "夹心三明治" }, desc: { en: "Extra fillings: +€0.50 to +€2.00", it: "Farciture extra: da +€0,50 a +€2,00", es: "Rellenos extra: +€0.50 a +€2.00", fr: "Garnitures supplémentaires : +€0,50 à +€2,00", de: "Zusätzliche Füllungen: +€0,50 bis +€2,00", zh: "额外夹心：+€0.50 至 +€2.00" }, price: "€5.50 - €6.50" },
      ],
    },
    {
      id: "piadine",
      title: { en: "Italian Piadine (Wraps)", it: "Piadine", es: "Piadinas Italianas (Wraps)", fr: "Piadine Italiennes (Wraps)", de: "Italienische Piadine (Wraps)", zh: "意大利夹饼（Piadine）" },
      type: "flat",
      banner: { en: "All Piadine: €8.00", it: "Tutte le Piadine: €8.00", es: "Todas las Piadinas: €8.00", fr: "Toutes les Piadine : €8,00", de: "Alle Piadine: €8,00", zh: "所有夹饼：€8.00" },
      flatItems: [
        { label: { en: "N.1:", it: "N.1:", es: "N.1:", fr: "N.1 :", de: "N.1:", zh: "N.1：" }, text: { en: "Grilled vegetables and fontina cheese", it: "Verdure grigliate e fontina", es: "Verduras a la parrilla y queso fontina", fr: "Légumes grillés et fontina", de: "Gegrilltes Gemüse und Fontina-Käse", zh: "烤蔬菜和芳提娜芝士" } },
        { label: { en: "N.2:", it: "N.2:", es: "N.2:", fr: "N.2 :", de: "N.2:", zh: "N.2：" }, text: { en: "Courgettes (zucchini), ham, and brie", it: "Zucchine, cotto e brie", es: "Calabacín, jamón cocido y brie", fr: "Courgettes, jambon cuit et brie", de: "Zucchini, gekochter Schinken und Brie", zh: "西葫芦、熟火腿和布里芝士" } },
        { label: { en: "N.3:", it: "N.3:", es: "N.3:", fr: "N.3 :", de: "N.3:", zh: "N.3：" }, text: { en: "Parma ham, rocket, and tomato", it: "Crudo, rucola e pomodoro", es: "Jamón de Parma, rúcula y tomate", fr: "Jambon de Parme, roquette et tomate", de: "Parmaschinken, Rucola und Tomate", zh: "帕尔马火腿、芝麻菜和番茄" } },
        { label: { en: "N.4:", it: "N.4:", es: "N.4:", fr: "N.4 :", de: "N.4:", zh: "N.4：" }, text: { en: "Parma ham", it: "Prosciutto crudo", es: "Jamón de Parma", fr: "Jambon de Parme", de: "Parmaschinken", zh: "帕尔马火腿" } },
        { label: { en: "N.5:", it: "N.5:", es: "N.5:", fr: "N.5 :", de: "N.5:", zh: "N.5：" }, text: { en: "Pork, aubergine, and brie cheese", it: "Porchetta, melanzane e brie", es: "Cerdo asado, berenjena y brie", fr: "Porc rôti, aubergine et brie", de: "Gebratenes Schweinefleisch, Aubergine und Brie", zh: "烤猪肉、茄子和布里芝士" } },
        { label: { en: "Diavoletta:", it: "Diavoletta:", es: "Diavoletta:", fr: "Diavoletta :", de: "Diavoletta:", zh: "Diavoletta：" }, text: { en: "Spicy salami, chili, and grilled peppers", it: "Salame piccante, peperoncino e peperoni", es: "Salami picante, chile y pimientos asados", fr: "Salami piquant, piment et poivrons grillés", de: "Scharfe Salami, Chili und gegrillte Paprika", zh: "辣萨拉米、辣椒和烤甜椒" } },
      ],
    },
    {
      id: "gourmet-burgers",
      title: { en: "Burgers*", it: "Hamburger*", es: "Hamburguesas*", fr: "Burgers*", de: "Burger*", zh: "汉堡*" },
      type: "grid",
      footnote: { en: "Ketchup or mayonnaise sauce +€0.50 · *Frozen food", it: "Salsa ketchup o maionese +€0,50 · *Alimento surgelato", es: "Salsa ketchup o mayonesa +€0.50 · *Alimento congelado", fr: "Sauce ketchup ou mayonnaise +€0,50 · *Produit surgelé", de: "Ketchup oder Mayonnaise +€0,50 · *Tiefkühlprodukt", zh: "番茄酱或蛋黄酱 +€0.50 · *冷冻食品" },
      items: [
        { id: "foods-gourmet-burgers-1", name: { en: "Classico", it: "Classico", es: "Classico", fr: "Classico", de: "Classico", zh: "Classico" }, desc: { en: "Beef patty and lettuce", it: "Hamburger di manzo e lattuga", es: "Carne de res y lechuga", fr: "Steak haché de bœuf et laitue", de: "Rinderpatty und Salat", zh: "牛肉饼和生菜" }, price: "€7.00" },
        { id: "foods-gourmet-burgers-2", name: { en: "Cheeseburger", it: "Cheeseburger", es: "Cheeseburger", fr: "Cheeseburger", de: "Cheeseburger", zh: "芝士汉堡" }, desc: { en: "Beef patty and cheese", it: "Hamburger di manzo e formaggio", es: "Carne de res y queso", fr: "Steak haché de bœuf et fromage", de: "Rinderpatty und Käse", zh: "牛肉饼和芝士" }, price: "€8.00" },
        { id: "foods-gourmet-burgers-3", name: { en: "Kingburger", it: "Kingburger", es: "Kingburger", fr: "Kingburger", de: "Kingburger", zh: "Kingburger" }, desc: { en: "Beef patty, cheese, pancetta, lettuce, and tomato", it: "Hamburger di manzo, formaggio, pancetta, lattuga e pomodoro", es: "Carne de res, queso, panceta, lechuga y tomate", fr: "Steak haché, fromage, pancetta, laitue et tomate", de: "Rinderpatty, Käse, Pancetta, Salat und Tomate", zh: "牛肉饼、芝士、培根、生菜和番茄" }, price: "€9.00" },
        { id: "foods-gourmet-burgers-4", name: { en: "Energetico", it: "Energetico", es: "Energetico", fr: "Energetico", de: "Energetico", zh: "Energetico" }, desc: { en: "Chicken cutlet, tomato, cheese, and lettuce", it: "Cotoletta di pollo, pomodoro, formaggio e lattuga", es: "Milanesa de pollo, tomate, queso y lechuga", fr: "Escalope de poulet, tomate, fromage et laitue", de: "Hähnchenschnitzel, Tomate, Käse und Salat", zh: "鸡排、番茄、芝士和生菜" }, price: "€8.50" },
      ],
    },
    {
      id: "pizzas",
      title: { en: "Pizzas", it: "Pizze", es: "Pizzas", fr: "Pizzas", de: "Pizza", zh: "披萨" },
      type: "grid",
      footnote: { en: "*Pizza's base is frozen food", it: "*La base delle pizze è alimento surgelato", es: "*La masa de la pizza es congelada", fr: "*La pâte à pizza est surgelée", de: "*Der Pizzateig ist ein Tiefkühlprodukt", zh: "*披萨饼底为冷冻食品" },
      items: [
        { id: "foods-pizzas-1", name: { en: "Margherita", it: "Margherita", es: "Margherita", fr: "Margherita", de: "Margherita", zh: "玛格丽特" }, desc: { en: "Tomato sauce and mozzarella", it: "Pomodoro e mozzarella", es: "Salsa de tomate y mozzarella", fr: "Sauce tomate et mozzarella", de: "Tomatensauce und Mozzarella", zh: "番茄酱和马苏里拉芝士" }, price: "€7.50" },
        { id: "foods-pizzas-2", name: { en: "Vegetables", it: "Verdure", es: "Vegetales", fr: "Végétarienne", de: "Gemüse", zh: "蔬菜" }, desc: { en: "Tomato sauce, mozzarella, and grilled vegetables", it: "Pomodoro, mozzarella e verdure grigliate", es: "Salsa de tomate, mozzarella y verduras a la parrilla", fr: "Sauce tomate, mozzarella et légumes grillés", de: "Tomatensauce, Mozzarella und gegrilltes Gemüse", zh: "番茄酱、马苏里拉芝士和烤蔬菜" }, price: "€9.50" },
        { id: "foods-pizzas-3", name: { en: "Capricciosa", it: "Capricciosa", es: "Capricciosa", fr: "Capricciosa", de: "Capricciosa", zh: "Capricciosa" }, desc: { en: "Tomato sauce, mozzarella, ham, and mushrooms", it: "Pomodoro, mozzarella, prosciutto cotto e funghi", es: "Salsa de tomate, mozzarella, jamón y champiñones", fr: "Sauce tomate, mozzarella, jambon et champignons", de: "Tomatensauce, Mozzarella, Schinken und Pilze", zh: "番茄酱、马苏里拉芝士、火腿和蘑菇" }, price: "€11.00" },
        { id: "foods-pizzas-4", name: { en: "Diavola (Spicy)", it: "Diavola (Piccante)", es: "Diavola (Picante)", fr: "Diavola (Piquante)", de: "Diavola (Scharf)", zh: "Diavola（辣味）" }, desc: { en: "Tomato sauce, mozzarella, and spicy salami", it: "Pomodoro, mozzarella e salame piccante", es: "Salsa de tomate, mozzarella y salami picante", fr: "Sauce tomate, mozzarella et salami piquant", de: "Tomatensauce, Mozzarella und scharfe Salami", zh: "番茄酱、马苏里拉芝士和辣萨拉米" }, price: "€11.00" },
        { id: "foods-pizzas-5", name: { en: "Principe", it: "Principe", es: "Principe", fr: "Principe", de: "Principe", zh: "Principe" }, desc: { en: "Tomato sauce, mozzarella, cured raw ham (Crudo), and rocket salad", it: "Pomodoro, mozzarella, prosciutto crudo e rucola", es: "Salsa de tomate, mozzarella, jamón crudo y rúcula", fr: "Sauce tomate, mozzarella, jambon cru et roquette", de: "Tomatensauce, Mozzarella, Parmaschinken und Rucola", zh: "番茄酱、马苏里拉芝士、生火腿和芝麻菜" }, price: "€11.00" },
        { id: "foods-pizzas-6", name: { en: "Mushrooms", it: "Funghi", es: "Champiñones", fr: "Champignons", de: "Pilze", zh: "蘑菇" }, desc: { en: "Tomato sauce, mozzarella, and mushrooms", it: "Pomodoro, mozzarella e funghi", es: "Salsa de tomate, mozzarella y champiñones", fr: "Sauce tomate, mozzarella et champignons", de: "Tomatensauce, Mozzarella und Pilze", zh: "番茄酱、马苏里拉芝士和蘑菇" }, price: "€10.00" },
        { id: "foods-pizzas-7", name: { en: "Porcellona", it: "Porcellona", es: "Porcellona", fr: "Porcellona", de: "Porcellona", zh: "Porcellona" }, desc: { en: "Tomato sauce, mozzarella, porchetta (roast pork), and mushrooms", it: "Pomodoro, mozzarella, porchetta e funghi", es: "Salsa de tomate, mozzarella, cerdo asado y champiñones", fr: "Sauce tomate, mozzarella, porc rôti et champignons", de: "Tomatensauce, Mozzarella, gebratenes Schweinefleisch und Pilze", zh: "番茄酱、马苏里拉芝士、烤猪肉和蘑菇" }, price: "€11.00" },
        { id: "foods-pizzas-8", name: { en: "Four Cheeses", it: "Quattro Formaggi", es: "Cuatro Quesos", fr: "Quatre Fromages", de: "Vier Käse", zh: "四种芝士" }, desc: { en: "Tomato sauce, mozzarella, fontina, brie, and gorgonzola", it: "Pomodoro, mozzarella, fontina, brie e gorgonzola", es: "Salsa de tomate, mozzarella, fontina, brie y gorgonzola", fr: "Sauce tomate, mozzarella, fontina, brie et gorgonzola", de: "Tomatensauce, Mozzarella, Fontina, Brie und Gorgonzola", zh: "番茄酱、马苏里拉芝士、芳提娜、布里和戈贡佐拉芝士" }, price: "€12.00" },
        { id: "foods-pizzas-9", name: { en: "Tuna", it: "Tonno", es: "Atún", fr: "Thon", de: "Thunfisch", zh: "金枪鱼" }, desc: { en: "Tomato sauce, mozzarella, and tuna", it: "Pomodoro, mozzarella e tonno", es: "Salsa de tomate, mozzarella y atún", fr: "Sauce tomate, mozzarella et thon", de: "Tomatensauce, Mozzarella und Thunfisch", zh: "番茄酱、马苏里拉芝士和金枪鱼" }, price: "€11.00" },
      ],
    },
    {
      id: "hot-pasta",
      title: { en: "Hot Pasta Dishes*", it: "Primi Piatti*", es: "Platos de Pasta Caliente*", fr: "Plats de Pâtes Chaudes*", de: "Warme Pastagerichte*", zh: "热意面*" },
      type: "grid",
      footnote: { en: "*Frozen food", it: "*Alimento surgelato", es: "*Alimento congelado", fr: "*Produit surgelé", de: "*Tiefkühlprodukt", zh: "*冷冻食品" },
      items: [
        { id: "foods-hot-pasta-1", name: { en: "Baked Lasagna", it: "Lasagne al Forno", es: "Lasaña al Horno", fr: "Lasagnes au Four", de: "Lasagne aus dem Ofen", zh: "烤千层面" }, price: "€10.00" },
        { id: "foods-hot-pasta-2", name: { en: "Vegetarian Lasagna", it: "Lasagne Vegetariane", es: "Lasaña Vegetariana", fr: "Lasagnes Végétariennes", de: "Vegetarische Lasagne", zh: "素食千层面" }, price: "€10.00" },
        { id: "foods-hot-pasta-3", name: { en: "Spaghetti Carbonara", it: "Spaghetti Carbonara", es: "Espagueti a la Carbonara", fr: "Spaghetti Carbonara", de: "Spaghetti Carbonara", zh: "培根蛋酱意面" }, price: "€12.00" },
        { id: "foods-hot-pasta-4", name: { en: "Spaghetti with Tomato Sauce", it: "Spaghetti al Pomodoro", es: "Espagueti con Salsa de Tomate", fr: "Spaghetti Sauce Tomate", de: "Spaghetti mit Tomatensauce", zh: "番茄酱意面" }, price: "€10.00" },
        { id: "foods-hot-pasta-5", name: { en: "Ravioli with Tomato & Basil", it: "Ravioli al Pomodoro e Basilico", es: "Ravioles con Tomate y Albahaca", fr: "Ravioles Tomate et Basilic", de: "Ravioli mit Tomate & Basilikum", zh: "番茄罗勒饺子" }, price: "€12.00" },
      ],
    },
    {
      id: "fresh-salads",
      title: { en: "Fresh Salads", it: "Insalate", es: "Ensaladas Frescas", fr: "Salades Fraîches", de: "Frische Salate", zh: "新鲜沙拉" },
      type: "grid",
      items: [
        { id: "foods-fresh-salads-1", name: { en: "Caprese Salad", it: "Insalata Caprese", es: "Ensalada Caprese", fr: "Salade Caprese", de: "Caprese-Salat", zh: "卡普里沙拉" }, desc: { en: "Tomato and fresh mozzarella", it: "Pomodoro e mozzarella fior di latte", es: "Tomate y mozzarella fresca", fr: "Tomate et mozzarella fraîche", de: "Tomate und frischer Mozzarella", zh: "番茄和新鲜马苏里拉芝士" }, price: "€8.50" },
        { id: "foods-fresh-salads-2", name: { en: "Buffalo Caprese", it: "Caprese di Bufala", es: "Caprese de Búfala", fr: "Caprese di Bufala", de: "Büffel-Caprese", zh: "水牛卡普里沙拉" }, desc: { en: "With buffalo mozzarella", it: "Con mozzarella di bufala", es: "Con mozzarella de búfala", fr: "Avec mozzarella de bufflonne", de: "Mit Büffelmozzarella", zh: "配水牛芝士" }, price: "€9.50" },
        { id: "foods-fresh-salads-3", name: { en: "Parma Ham & Melon", it: "Prosciutto di Parma e Melone", es: "Jamón de Parma y Melón", fr: "Jambon de Parme et Melon", de: "Parmaschinken & Melone", zh: "帕尔马火腿配蜜瓜" }, price: "€13.00" },
        { id: "foods-fresh-salads-4", name: { en: "Mixed Salad", it: "Insalata Mista", es: "Ensalada Mixta", fr: "Salade Mixte", de: "Gemischter Salat", zh: "什锦沙拉" }, desc: { en: "Mixed salad, corn, cherry tomatoes, mozzarella, olives", it: "Insalata mista, mais, pomodorini, mozzarella, olive", es: "Ensalada mixta, maíz, tomates cherry, mozzarella, aceitunas", fr: "Salade mixte, maïs, tomates cerises, mozzarella, olives", de: "Gemischter Salat, Mais, Kirschtomaten, Mozzarella, Oliven", zh: "什锦沙拉、玉米、小番茄、马苏里拉芝士、橄榄" }, price: "€8.00" },
        { id: "foods-fresh-salads-5", name: { en: "Mimosa Salad", it: "Insalata Mimosa", es: "Ensalada Mimosa", fr: "Salade Mimosa", de: "Mimosa-Salat", zh: "含羞草沙拉" }, desc: { en: "Mixed salad, corn, cherry tomatoes, mozzarella, boiled eggs, olives", it: "Insalata mista, mais, pomodorini, mozzarella, uova sode, olive", es: "Ensalada mixta, maíz, tomates cherry, mozzarella, huevo cocido, aceitunas", fr: "Salade mixte, maïs, tomates cerises, mozzarella, œufs durs, olives", de: "Gemischter Salat, Mais, Kirschtomaten, Mozzarella, gekochte Eier, Oliven", zh: "什锦沙拉、玉米、小番茄、马苏里拉芝士、水煮蛋、橄榄" }, price: "€10.00" },
        { id: "foods-fresh-salads-6", name: { en: "Tuna Salad", it: "Insalata di Tonno", es: "Ensalada de Atún", fr: "Salade au Thon", de: "Thunfischsalat", zh: "金枪鱼沙拉" }, desc: { en: "Mixed salad, cherry tomatoes, mozzarella, corn, and tuna", it: "Insalata mista, pomodorini, mozzarella, mais e tonno", es: "Ensalada mixta, tomates cherry, mozzarella, maíz y atún", fr: "Salade mixte, tomates cerises, mozzarella, maïs et thon", de: "Gemischter Salat, Kirschtomaten, Mozzarella, Mais und Thunfisch", zh: "什锦沙拉、小番茄、马苏里拉芝士、玉米和金枪鱼" }, price: "€10.00" },
        { id: "foods-fresh-salads-7", name: { en: "Extra Bread", it: "Pane Extra", es: "Pan Extra", fr: "Pain Supplémentaire", de: "Extra Brot", zh: "加点面包" }, price: "€1.00" },
      ],
    },
  ],
},

"snacks": {
  title: { en: "Snacks & Venetian Cicchetti", it: "Snack & Cicchetti Veneziani", es: "Snacks y Cicchetti Venecianos", fr: "Snacks & Cicchetti Vénitiens", de: "Snacks & Venezianische Cicchetti", zh: "小吃与威尼斯小食（Cicchetti）" },
  menuBoxLabel: { en: "Snacks & Cicchetti", it: "Snack & Cicchetti", es: "Snacks y Cicchetti", fr: "Snacks & Cicchetti", de: "Snacks & Cicchetti", zh: "小吃与Cicchetti" },
  pageNote: {
    en: "Come take a look inside · Available until they run out",
    it: "Fatevi un giro dentro · Disponibili fino a esaurimento",
    es: "Échale un vistazo dentro · Disponible hasta agotar existencias",
    fr: "Venez jeter un œil à l'intérieur · Disponible jusqu'à épuisement des stocks",
    de: "Schauen Sie sich drinnen um · Erhältlich, bis der Vorrat reicht",
    zh: "欢迎进店内看看 · 数量有限，售完为止",
  },
  categories: [
    {
      id: "cicchetti",
      title: { en: "Typical Venetian Tapas (Cicchetti)", it: "Cicchetti Veneziani", es: "Cicchetti Venecianos Típicos", fr: "Tapas Vénitiennes Typiques (Cicchetti)", de: "Typische Venezianische Tapas (Cicchetti)", zh: "经典威尼斯小食（Cicchetti）" },
      type: "grid",
      items: [
        {
          id: "snacks-cicchetti-1",
          name: { en: "Traditional Cicchetti (Per Piece)", it: "Cicchetti Tradizionali (al pezzo)", es: "Cicchetti Tradicional (Por Pieza)", fr: "Cicchetti Traditionnel (à la pièce)", de: "Traditionelle Cicchetti (Pro Stück)", zh: "传统Cicchetti（单个）" },
          desc: {
            en: "Available toppings: Creamed Cod (Baccalà), Crab, Tuna, Octopus, Sardines, Prawns, Grilled Vegetables, Gorgonzola & Walnuts, Fig Jam, Mortadella, Pancetta, Porchetta.",
            it: "Guarnizioni disponibili: Baccalà mantecato, Granchio, Tonno, Polpo, Sarde, Gamberi, Verdure grigliate, Gorgonzola e Noci, Marmellata di fichi, Mortadella, Pancetta, Porchetta.",
            es: "Coberturas disponibles: Bacalao Cremoso (Baccalà), Cangrejo, Atún, Pulpo, Sardinas, Gambas, Verduras a la Parrilla, Gorgonzola y Nueces, Mermelada de Higo, Mortadela, Panceta, Porchetta.",
            fr: "Garnitures disponibles : Morue Crémeuse (Baccalà), Crabe, Thon, Poulpe, Sardines, Crevettes, Légumes Grillés, Gorgonzola & Noix, Confiture de Figues, Mortadelle, Pancetta, Porchetta.",
            de: "Verfügbare Beläge: Cremiger Kabeljau (Baccalà), Krabbe, Thunfisch, Oktopus, Sardinen, Garnelen, gegrilltes Gemüse, Gorgonzola & Walnüsse, Feigenmarmelade, Mortadella, Pancetta, Porchetta.",
            zh: "可选配料：奶油鳕鱼（Baccalà）、蟹肉、金枪鱼、章鱼、沙丁鱼、虾、烤蔬菜、戈贡佐拉芝士配核桃、无花果酱、摩泰台拉香肠、培根、烤猪肉。",
          },
          price: "€2.50",
        },
        {
          id: "snacks-cicchetti-2",
          name: { en: "Polpette (Meatballs / Veggie Balls, Per Piece)*", it: "Polpette (Carne o Verdure, al pezzo)*", es: "Polpette (Albóndigas / Bolitas Vegetarianas, por pieza)*", fr: "Polpette (Boulettes de Viande / Légumes, à la pièce)*", de: "Polpette (Fleischbällchen / Gemüsebällchen, pro Stück)*", zh: "肉丸/蔬菜丸（单个）*" },
          desc: {
            en: "Traditional Italian fried balls. Choose between Meat or Vegetables.",
            it: "Tradizionali polpette fritte italiane. A scelta di Carne o Verdure.",
            es: "Bolitas fritas tradicionales italianas. Elige entre Carne o Verduras.",
            fr: "Boulettes frites traditionnelles italiennes. Choix entre Viande ou Légumes.",
            de: "Traditionelle italienische frittierte Bällchen. Wahlweise Fleisch oder Gemüse.",
            zh: "传统意式炸丸子，可选肉类或蔬菜。",
          },
          price: "€3.00",
        },
      ],
    },
    {
      title: { en: "Tramezzini Sandwiches", it: "Tramezzini", es: "Tramezzini", fr: "Tramezzini", de: "Tramezzini", zh: "三明治（Tramezzini）" },
      type: "flat",
      banner: { en: "All Tramezzini: €3.00", it: "Tutti i Tramezzini: €3.00", es: "Todos los Tramezzini: €3.00", fr: "Tous les Tramezzini : €3,00", de: "Alle Tramezzini: €3,00", zh: "所有三明治：€3.00" },
      flatItems: [
        { label: { en: "Crab:", it: "Granchio:", es: "Cangrejo:", fr: "Crabe :", de: "Krabbe:", zh: "蟹肉：" }, text: { en: "Crab & Guacamole / Crab & Eggs", it: "Granchio e Guacamole / Granchio e Uova", es: "Cangrejo y Guacamole / Cangrejo y Huevo", fr: "Crabe & Guacamole / Crabe & Œufs", de: "Krabbe & Guacamole / Krabbe & Ei", zh: "蟹肉配鳄梨酱 / 蟹肉配鸡蛋" } },
        { label: { en: "Tuna:", it: "Tonno:", es: "Atún:", fr: "Thon :", de: "Thunfisch:", zh: "金枪鱼：" }, text: { en: "Tuna & Eggs / Tuna & Tomato / Tuna & Black Olives / Tuna & Onion / Tuna & Rocket", it: "Tonno e Uova / Tonno e Pomodoro / Tonno e Olive Nere / Tonno e Cipolla / Tonno e Rucola", es: "Atún y Huevo / Atún y Tomate / Atún y Aceitunas Negras / Atún y Cebolla / Atún y Rúcula", fr: "Thon & Œufs / Thon & Tomate / Thon & Olives Noires / Thon & Oignon / Thon & Roquette", de: "Thunfisch & Ei / Thunfisch & Tomate / Thunfisch & Schwarze Oliven / Thunfisch & Zwiebel / Thunfisch & Rucola", zh: "金枪鱼配鸡蛋 / 金枪鱼配番茄 / 金枪鱼配黑橄榄 / 金枪鱼配洋葱 / 金枪鱼配芝麻菜" } },
        { label: { en: "Porchetta:", it: "Porchetta:", es: "Porchetta:", fr: "Porchetta :", de: "Porchetta:", zh: "烤猪肉：" }, text: { en: "Porchetta & Mushrooms / Porchetta & Radicchio sauce", it: "Porchetta e Funghi / Porchetta e salsa al Radicchio", es: "Porchetta y Champiñones / Porchetta y salsa de Radicchio", fr: "Porchetta & Champignons / Porchetta & sauce au Radicchio", de: "Porchetta & Pilze / Porchetta & Radicchio-Sauce", zh: "烤猪肉配蘑菇 / 烤猪肉配意大利菊苣酱" } },
        { label: { en: "Ham:", it: "Prosciutto Cotto:", es: "Jamón:", fr: "Jambon :", de: "Schinken:", zh: "火腿：" }, text: { en: "Ham & Mushrooms / Ham & Artichokes", it: "Prosciutto e Funghi / Prosciutto e Carciofi", es: "Jamón y Champiñones / Jamón y Alcachofas", fr: "Jambon & Champignons / Jambon & Artichauts", de: "Schinken & Pilze / Schinken & Artischocken", zh: "火腿配蘑菇 / 火腿配朝鲜蓟" } },
        { label: { en: "Vegetarian:", it: "Vegetariano:", es: "Vegetariano:", fr: "Végétarien :", de: "Vegetarisch:", zh: "素食：" }, text: { en: "Caprese (tomato, lettuce, cheese) / Grilled vegetables (eggplant, zucchini, peppers)", it: "Caprese (pomodoro, lattuga, formaggio) / Verdure grigliate (melanzane, zucchine, peperoni)", es: "Caprese (tomate, lechuga, queso) / Verduras a la parrilla (berenjena, calabacín, pimientos)", fr: "Caprese (tomate, laitue, fromage) / Légumes grillés (aubergine, courgette, poivrons)", de: "Caprese (Tomate, Salat, Käse) / Gegrilltes Gemüse (Aubergine, Zucchini, Paprika)", zh: "卡普里（番茄、生菜、芝士）/ 烤蔬菜（茄子、西葫芦、甜椒）" } },
        { boldOnly: true, text: { en: "Spicy Option Available", it: "Disponibile versione piccante", es: "Opción picante disponible", fr: "Option Piquante Disponible", de: "Scharfe Option Verfügbar", zh: "可选辣味" } },
      ],
    },
    {
      id: "quick-snacks",
      title: { en: "Other Quick Snacks", it: "Altri Snack Veloci", es: "Otros Snacks Rápidos", fr: "Autres Snacks Rapides", de: "Weitere Schnelle Snacks", zh: "其他快捷小吃" },
      type: "grid",
      footnote: { en: "*Frozen food", it: "*Alimento surgelato", es: "*Alimento congelado", fr: "*Produit surgelé", de: "*Tiefkühlprodukt", zh: "*冷冻食品" },
      items: [
        {
          id: "snacks-quick-snacks-1",
          name: { en: "Mozzarella in Carrozza (Per Piece)*", it: "Mozzarella in Carrozza (al pezzo)*", es: "Mozzarella in Carrozza (por pieza)*", fr: "Mozzarella in Carrozza (à la pièce)*", de: "Mozzarella in Carrozza (pro Stück)*", zh: "炸马苏里拉三明治（单个）*" },
          desc: { en: "Fried mozzarella sandwich with Anchovies or Cooked Ham", it: "Sandwich di mozzarella fritta con Acciughe o Prosciutto Cotto", es: "Sándwich de mozzarella frita con Anchoas o Jamón Cocido", fr: "Sandwich de mozzarella frite avec Anchois ou Jambon Cuit", de: "Frittiertes Mozzarella-Sandwich mit Sardellen oder gekochtem Schinken", zh: "炸马苏里拉芝士三明治，配凤尾鱼或熟火腿" },
          price: "€3.00",
        },
        {
          id: "snacks-quick-snacks-2",
          name: { en: "Small Sandwich (Paninetto)", it: "Paninetto", es: "Sándwich Pequeño (Paninetto)", fr: "Petit Sandwich (Paninetto)", de: "Kleines Sandwich (Paninetto)", zh: "小三明治" },
          desc: { en: "With Vegetables or Salami", it: "Con Verdure o Salame", es: "Con Verduras o Salami", fr: "Avec Légumes ou Salami", de: "Mit Gemüse oder Salami", zh: "配蔬菜或萨拉米香肠" },
          price: "€3.00",
        },
        {
          id: "snacks-quick-snacks-3",
          name: { en: "Savory Croissant", it: "Cornetto Salato", es: "Cruasán Salado", fr: "Croissant Salé", de: "Herzhaftes Croissant", zh: "咸味羊角面包" },
          desc: { en: "Filled with ham and cheese", it: "Farcito con prosciutto e formaggio", es: "Relleno de jamón y queso", fr: "Fourré au jambon et fromage", de: "Gefüllt mit Schinken und Käse", zh: "夹火腿和芝士" },
          price: "€3.00",
        },
      ],
    },
  ],
},

};
