const dummyRestaurantsData = [
  {
    id: '0',
    name: 'Bolt Food',
    rating: 4.7,
    price: 3,
    distance: '0.85',
    delivery: '10-20',
    profileImage: 'https://x7d4c5z5.stackpathcdn.com/wp-content/uploads/tc/2021/03/og-img.jpg',
    about: 'Your go-to place for quick and tasty meals delivered right to your doorstep.',
    food: [
      {
        category: 'Combo Deals',
        meals: [
          {
            id: 1,
            name: 'Bolt Special Combo',
            price: 12.99,
            info: 'Includes one main item, one side, and one drink.',
            img: 'https://www.borenos.com/wp-content/uploads/2018/11/5-person-combo-1.png',
          },
          {
            id: 2,
            name: 'Family Feast',
            price: 24.99,
            info: 'Perfect for a family meal with a variety of items for everyone.',
            img: 'https://olo-images-live.imgix.net/f8/f8759c0fea82424a973f64402b26dcd2.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1536&h=512&fit=fill&fm=png32&bg=transparent&s=0f5507eba829e629624f13119ffee5d2',
          },
        ],
      },
      {
        category: 'Burgers',
        meals: [
          {
            id: 3,
            name: 'Classic Cheeseburger',
            price: 5.99,
            info: 'Juicy beef patty, melted cheese, lettuce, and special sauce.',
            img: 'https://goodysgroup.akamaized.net/images/882x648/files/Burgers_updated/4_Shadow_Classic_Cheese.png',
          },
          {
            id: 4,
            name: 'Veggie Delight Burger',
            price: 4.99,
            info: 'Grilled veggie patty, fresh veggies, and mayo.',
            img: 'https://www.mexicangoldenchicken.com/wp-content/uploads/2023/11/veg-delight.webp',
          },
        ],
      },
    ],
  },
  {
    id: '1',
    name: "Domino's Pizza",
    rating: 4.6,
    price: 3.5,
    distance: '1.2',
    delivery: '15-25',
    profileImage:
      'https://images.bolt.eu/store/2023/2023-05-25/ee4a8564-23c8-41aa-b7a6-a80e34b7328a.jpeg',
    about: 'The home of delicious pizzas with a wide range of toppings and crust options.',
    food: [
      {
        category: 'Pizza',
        meals: [
          {
            id: 1,
            name: 'Margherita',
            price: 9.99,
            info: 'Classic tomato sauce, mozzarella cheese, and fresh basil.',
            img: 'https://media.dominospizza.lt/__sized__/menu/product_osg_image_mobile/2022/05/05/5_cheeses_480%D1%85480-thumbnail-480x480.png',
          },
          {
            id: 2,
            name: 'Pepperoni Feast',
            price: 12.99,
            info: 'Tomato sauce, loads of pepperoni, and extra cheese.',
            img: 'https://cdn.sanity.io/images/djyy0r2z/production/5b56cc5d9a0262013c3b100e18b3b53d75fdf214-3156x3157.png?w=300&h=300&fit=crop&crop=focalpoint&auto=format',
          },
          {
            id: 3,
            name: 'Veggie Supreme',
            price: 11.99,
            info: 'Tomato sauce, mushrooms, green peppers, onions, black olives, and mozzarella cheese.',
            img: 'https://cdn.sanity.io/images/dycwrm08/production/0a35d24e40fe01acd5f3bf976a6966894531920c-3621x3602.png?w=300&h=300&fit=crop&crop=focalpoint&auto=format',
          },
        ],
      },
      {
        category: 'Sides',
        meals: [
          {
            id: 4,
            name: 'Garlic Breadsticks',
            price: 5.99,
            info: 'Warm and savory garlic breadsticks with marinara sauce.',
            img: 'https://media.dominospizza.lt/__sized__/menu/product_osg_image_mobile/2022/10/28/Cheesy_Bread_Bacon__Jalapeno_480%D1%85480-thumbnail-480x480.png',
          },
          {
            id: 5,
            name: 'Chicken Wings',
            price: 8.99,
            info: 'Spicy and crispy chicken wings with your choice of sauce.',
            img: 'https://media.dominospizza.lt/__sized__/menu/product_osg_image_mobile/2022/06/22/862A3E17-4B18-455E-9197-94A6BD764355-thumbnail-480x480.png',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Burger King',
    rating: 4.2,
    price: 2.5,
    distance: '0.9',
    delivery: '12-18',
    profileImage:
      'https://images.bolt.eu/store/2021/2021-04-22/b191a550-d09e-4c07-9a83-a34fc45d212e.jpeg',
    about: 'The home of flame-grilled burgers, crispy fries, and refreshing beverages.',
    food: [
      {
        category: 'Combo Meals',
        meals: [
          {
            id: 1,
            name: 'Whopper Meal',
            price: 8.99,
            info: 'Flame-grilled beef patty, lettuce, tomatoes, onions, pickles, mayo, and ketchup. Includes medium fries and a medium drink.',
            img: 'https://www.burgerking.lt/images/optimized/products/meals-dbl-whopper-cheese-desktop-1536db18131aa9f219c771f6783e4a53.png',
          },
          {
            id: 2,
            name: 'Chicken Royale Meal',
            price: 7.99,
            info: 'Crispy chicken fillet, lettuce, mayo, and a sesame seed bun. Includes medium fries and a medium drink.',
            img: 'https://burgerkingks.com/wp-content/uploads/2020/08/chickenroyale-new-meal.png',
          },
        ],
      },
      {
        category: 'Burgers',
        meals: [
          {
            id: 3,
            name: 'Whopper',
            price: 5.99,
            info: 'Flame-grilled beef patty, lettuce, tomatoes, onions, pickles, mayo, and ketchup on a sesame seed bun.',
            img: 'https://www.burgerking.lt/images/optimized/products/whopper-desktop-d8cee499661a700caa53bb89104c0e37.png',
          },
          {
            id: 4,
            name: 'Big King XL',
            price: 6.99,
            info: 'Two flame-grilled beef patties, American cheese, lettuce, onions, pickles, and special sauce on a sesame seed bun.',
            img: 'https://www.burgerking.lt/images/optimized/products/big-king-xxl-desktop-de9ffbcfa928a85a0002232259f39c1b.png',
          },
        ],
      },
      {
        category: 'Sides',
        meals: [
          {
            id: 5,
            name: 'Chicken Fries',
            price: 3.99,
            info: 'Crispy chicken strips in a fun fry shape. Perfect for dipping!',
            img: 'https://www.whopper.ie/wp-content/uploads/2021/04/Chicken_Fries_-1200x800_DE-1.png',
          },
          {
            id: 6,
            name: 'Onion Rings',
            price: 2.99,
            info: 'Crispy battered onion rings for a tasty side.',
            img: 'https://bk-latam-prod.s3.amazonaws.com/sites/burgerking.bs/files/HERO_0002_Onion_Rings.png',
          },
        ],
      },
    ],
  },
  {
    id: '3',
    name: 'Sushi Palace',
    rating: 4.5,
    price: 5.75,
    distance: '1.5y',
    delivery: '20-30',
    profileImage:
      'https://images.bolt.eu/store/2023/2023-06-15/fed1517f-efca-472b-bd09-f996f74c4539.jpeg',
    about: 'Experience the art of sushi with our premium selection of fresh and delicious rolls.',
    food: [
      {
        category: 'Sushi Rolls',
        meals: [
          {
            id: 1,
            name: 'Rainbow Roll',
            price: 14.99,
            info: 'Assorted sashimi on a California roll with avocado and cucumber.',
            img: 'https://d2j6dbq0eux0bg.cloudfront.net/images/64910856/2574034859.jpg',
          },
          {
            id: 2,
            name: 'Dragon Roll',
            price: 16.99,
            info: 'Eel, avocado, and cucumber topped with avocado slices and eel sauce.',
            img: 'https://stpierres.co.nz/cms/assets/b1233f41-5558-4192-b5cb-1d3d018c2f60',
          },
          {
            id: 3,
            name: 'Spicy Tuna Roll',
            price: 12.99,
            info: 'Spicy tuna, cucumber, and avocado with a spicy mayo sauce.',
            img: 'https://sushijunction.com/cdn/shop/products/SJWebsiteDevImages_1.png?v=1682335667',
          },
        ],
      },
      {
        category: 'Nigiri Sushi',
        meals: [
          {
            id: 4,
            name: 'Salmon Nigiri',
            price: 3.99,
            info: 'Fresh salmon atop a small bed of seasoned rice.',
            img: 'https://sushiexpress.lt/wp-content/uploads/2016/11/nigiri-su-lasisa-580x430.png',
          },
          {
            id: 5,
            name: 'Tuna Nigiri',
            price: 4.99,
            info: 'Sliced tuna served on a small portion of seasoned rice.',
            img: 'https://sushiexpress.lt/wp-content/uploads/2016/11/nigiri-su-tunu.png',
          },
        ],
      },
      {
        category: 'Sashimi Platters',
        meals: [
          {
            id: 6,
            name: 'Assorted Sashimi Platter',
            price: 18.99,
            info: 'A variety of fresh raw fish slices served with pickled ginger and wasabi.',
            img: 'https://static.vecteezy.com/system/resources/previews/030/768/111/original/sushi-platter-assorted-sushi-rolls-and-sashimi-on-a-platter-isolated-png.png',
          },
        ],
      },
    ],
  },
  {
    id: '4',
    name: 'Mexican Grill',
    rating: 4.0,
    price: 1.99,
    distance: '1.8',
    delivery: '25-35',
    profileImage:
      'https://images.bolt.eu/store/2019/2019-10-31/18db5c94-2865-4d36-8cc1-6bc70ebace5a.png',
    about: 'Savor the flavors of Mexico with our authentic and delicious grilled dishes.',
    food: [
      {
        category: 'Tacos',
        meals: [
          {
            id: 1,
            name: 'Carne Asada Tacos',
            price: 9.99,
            info: 'Grilled marinated steak with onions, cilantro, and salsa in soft corn tortillas.',
            img: 'https://138774178.cdn6.editmysite.com/uploads/1/3/8/7/138774178/s571394276799475958_p188_i1_w1200.png',
          },
          {
            id: 2,
            name: 'Vegetarian Tacos',
            price: 8.99,
            info: 'Grilled vegetables, black beans, lettuce, and cheese in soft corn tortillas.',
            img: 'https://tacotimenw.com/wp-content/uploads/2018/10/VEGGIE-Soft-Taco.png',
          },
        ],
      },
      {
        category: 'Burritos',
        meals: [
          {
            id: 3,
            name: 'Chicken Burrito',
            price: 10.99,
            info: 'Grilled chicken, rice, beans, cheese, and salsa wrapped in a flour tortilla.',
            img: 'https://cajjhieqsa.cloudimg.io/https://f004.backblazeb2.com/file/pepe-piri-piri/misc/dc41b724c65c43507c0020af5100ade6.png?w=500&org_if_sml=1',
          },
          {
            id: 4,
            name: 'Shrimp Burrito',
            price: 12.99,
            info: 'Grilled shrimp, guacamole, lettuce, and pico de gallo wrapped in a flour tortilla.',
            img: 'https://www.chronictacos.com/assets/media/menu/surf-burrito.png',
          },
        ],
      },
      {
        category: 'Guacamole & Chips',
        meals: [
          {
            id: 5,
            name: 'Classic Guacamole',
            price: 6.99,
            info: 'Freshly made guacamole with ripe avocados, tomatoes, onions, and cilantro.',
            img: 'https://www.santitas.com/sites/santitas.com/files/2023-03/guacamole-recipe.png',
          },
          {
            id: 6,
            name: 'Tortilla Chips',
            price: 3.99,
            info: 'Crispy tortilla chips served with a side of salsa.',
            img: 'https://www.gehls.com/Consumer1/Nachos.png',
          },
        ],
      },
    ],
  },
  {
    id: '5',
    name: 'Italian Bistro',
    rating: 4.8,
    price: 4.25,
    distance: '0.7',
    delivery: '15-25',
    profileImage:
      'https://images.bolt.eu/store/2022/2022-01-27/306715f3-84ff-4ed4-843b-16d4b23d354f.jpeg',
    about:
      'Indulge in the rich flavors of Italy with our handcrafted pasta, wood-fired pizzas, and exquisite wines.',
    food: [
      {
        category: 'Pasta',
        meals: [
          {
            id: 1,
            name: 'Spaghetti Carbonara',
            price: 14.99,
            info: 'Classic Roman pasta dish with eggs, cheese, pancetta, and black pepper.',
            img: 'https://vincenzos-wp.s3.amazonaws.com/wp-content/uploads/2022/10/Picatta.png',
          },
          {
            id: 2,
            name: 'Fettuccine Alfredo',
            price: 16.99,
            info: 'Creamy Alfredo sauce with fettuccine pasta and grated Parmesan cheese.',
            img: 'https://static.vecteezy.com/system/resources/previews/027/729/296/original/bowl-of-fettucini-alfredo-isolated-png.png',
          },
        ],
      },
      {
        category: 'Pizza',
        meals: [
          {
            id: 3,
            name: 'Margherita Pizza',
            price: 12.99,
            info: 'Tomato sauce, fresh mozzarella, basil, and a drizzle of olive oil on a thin crust.',
            img: 'https://www.table87.com/cdn/shop/files/Brian_Waters_Marg_Pizza_PNG_Drop.png?v=1651765098&width=2000',
          },
          {
            id: 4,
            name: 'Prosciutto and Arugula Pizza',
            price: 14.99,
            info: 'Tomato sauce, mozzarella, prosciutto, and fresh arugula on a crispy crust.',
            img: 'https://beefandpizza.ca/wp-content/uploads/2016/10/Prosciutto-and-arugula.png',
          },
        ],
      },
      {
        category: 'Desserts',
        meals: [
          {
            id: 5,
            name: 'Tiramisu',
            price: 8.99,
            info: 'Layered coffee-soaked ladyfingers with mascarpone cheese and cocoa.',
            img: 'https://vincenzos-wp.s3.amazonaws.com/wp-content/uploads/2022/10/Tiramisu.png',
          },
          {
            id: 6,
            name: 'Cannoli',
            price: 6.99,
            info: 'Crispy pastry tubes filled with sweet ricotta and chocolate chips.',
            img: 'https://zeroseimalta.com/wp-content/uploads/2020/06/zerosei-trattoria-romana-valletta-cannoli-siciliani.png',
          },
        ],
      },
    ],
  },
  {
    id: '6',
    name: 'Steakhouse Delight',
    rating: 4.6,
    price: 6.99,
    distance: '2.3',
    delivery: '30-40',
    profileImage:
      'https://images.financebuzz.com/filters:quality(75)/images/2023/10/13/chef-cutting-beef-steak-on-board.jpeg',
    about:
      'Experience the finest cuts of beef, expertly grilled to perfection, in an elegant and cozy atmosphere.',
    food: [
      {
        category: 'Steaks',
        meals: [
          {
            id: 1,
            name: 'Filet Mignon',
            price: 29.99,
            info: 'Tender and lean beef filet, seasoned and grilled to your liking.',
            img: 'https://qph.cf2.quoracdn.net/main-qimg-0cb94100643959fccc9134245e7191b1',
          },
          {
            id: 2,
            name: 'Ribeye Steak',
            price: 34.99,
            info: 'Juicy and marbled ribeye steak, char-grilled for a rich flavor.',
            img: 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-roasted-pork-ribs-png-image_13146554.png',
          },
        ],
      },
      {
        category: 'Sides',
        meals: [
          {
            id: 3,
            name: 'Loaded Baked Potato',
            price: 8.99,
            info: 'Baked potato topped with sour cream, chives, cheese, and bacon bits.',
            img: 'https://olo-images-live.imgix.net/d5/d55d56c4fb134942b56a9e078da8e15e.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=35b7915f13674ebe44aeae85f3b50cdd',
          },
          {
            id: 4,
            name: 'Grilled Asparagus',
            price: 10.99,
            info: 'Fresh asparagus spears lightly seasoned and grilled to perfection.',
            img: 'https://tostibanaan.nl/wp-content/uploads/2020/05/tostibanaan-asperges-serrano-ham-aardappel-ei.png',
          },
        ],
      },
      {
        category: 'Desserts',
        meals: [
          {
            id: 5,
            name: 'New York Cheesecake',
            price: 12.99,
            info: 'Classic New York-style cheesecake with a graham cracker crust.',
            img: 'https://dbakers.us/cdn/shop/products/INDIVIDUALDESSERTS-15.png?v=1677716889',
          },
          {
            id: 6,
            name: 'Chocolate Lava Cake',
            price: 14.99,
            info: 'Warm chocolate cake with a gooey, molten center, served with vanilla ice cream.',
            img: 'https://www.simplydifferent.in/cdn/shop/products/17_1200x1200.png?v=1597401066',
          },
        ],
      },
    ],
  },
  {
    id: '7',
    name: 'Vegetarian Haven',
    rating: 4.3,
    price: 3.75,
    distance: '1.0',
    delivery: '15-20',
    profileImage: 'https://images.happycow.net/venues/1024/32/37/hcmp3237_249528.jpeg',
    about:
      'Discover a haven of delicious vegetarian and vegan dishes made with fresh, plant-based ingredients.',
    food: [
      {
        category: 'Burgers',
        meals: [
          {
            id: 1,
            name: 'Veggie Burger Deluxe',
            price: 10.99,
            info: 'House-made veggie patty with lettuce, tomato, onion, and special sauce.',
            img: 'https://www.mcdonalds.be/_webdata/product-images/12201658-MCDO_BB-McVeggie_Kiosk_500x500px.png',
          },
          {
            id: 2,
            name: 'Quinoa Black Bean Burger',
            price: 12.99,
            info: 'Quinoa and black bean patty with avocado, sprouts, and vegan mayo.',
            img: 'https://actualveggies.com/cdn/shop/files/black-bg-new2.png?v=1689617845',
          },
        ],
      },
      {
        category: 'Salads',
        meals: [
          {
            id: 3,
            name: 'Mediterranean Salad',
            price: 13.99,
            info: 'Mixed greens, cherry tomatoes, cucumbers, olives, and feta cheese with balsamic vinaigrette.',
            img: 'https://jow.com/_next/image?url=https%3A%2F%2Fstatic.jow.fr%2F880x880%2Frecipes%2FV02mur0u8ujKSw.png&w=2560&q=100',
          },
          {
            id: 4,
            name: 'Asian Sesame Tofu Salad',
            price: 14.99,
            info: 'Crispy tofu, mixed greens, carrots, and sesame ginger dressing.',
            img: 'https://res.cloudinary.com/justsalad/image/upload/v1701367228/menuitems/OJS_IMG_Winter-Harvest-Salad.png',
          },
        ],
      },
      {
        category: 'Smoothie Bowls',
        meals: [
          {
            id: 5,
            name: 'Acai Berry Bliss Bowl',
            price: 9.99,
            info: 'Acai berries blended with banana and topped with granola, coconut, and fresh fruits.',
            img: 'https://dsznjaxrxc1vh.cloudfront.net/product-images/large/acai-original.png',
          },
          {
            id: 6,
            name: 'Green Goddess Smoothie Bowl',
            price: 10.99,
            info: 'Spinach, kale, pineapple, and banana blended and topped with chia seeds and sliced almonds.',
            img: 'https://web.ineons.com/sites/default/files/storage/product_images/bowls_peachygreengoodness_nopa_hero.png',
          },
        ],
      },
    ],
  },
];

export { dummyRestaurantsData };
