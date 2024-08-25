// src/pages/SearchResults.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './DogSupplies.css';
import './CatSupplies.css';
import './SearchResults.css';

const SearchResults = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const location = useLocation();

  const items = [
    //Dog Products
    // Food Section
    {
      id: 1,
      name: 'Premium Dry Food',
      description: 'High-quality dry food with balanced nutrients for all life stages.',
      category: 'Food',
      image: 'https://media.istockphoto.com/id/1498237967/photo/dry-kibble-pet-food-dog-or-cat-food-on-old-table.jpg?s=1024x1024&w=is&k=20&c=hIx7VrpRdozhjB7TolYNC3nzzvwH7TbCxtF-RaO6200='
    },
    {
      id: 2,
      name: 'Grain-Free Wet Food',
      description: 'Delicious grain-free wet food to support healthy digestion.',
      category: 'Food',
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      name: 'Organic Treats',
      description: 'Organic treats made with natural ingredients for your dog\'s enjoyment.',
      category: 'Food',
      image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  
    // Toys Section
    {
      id: 4,
      name: 'Chew Toys',
      description: 'Durable chew toys to keep your dog entertained and promote dental health.',
      category: 'Toys',
      image: 'https://img.freepik.com/free-photo/close-up-pet-accessories_23-2150960004.jpg?w=740&t=st=1718011560~exp=1718012160~hmac=ead4217a0a665f3f44d9e3ad0c0317a811dce8026dc946e7e1fdc5d732abe372'
    },
    {
      id: 5,
      name: 'Fetch Toys',
      description: 'Perfect toys for interactive fetch games to keep your dog active.',
      category: 'Toys',
      image: 'https://img.freepik.com/free-photo/adorable-white-dog-isolated-yellow_23-2148985983.jpg?w=826&t=st=1718011684~exp=1718012284~hmac=4ddf7e3cb2ea8351c0ab3d203ce7300d457f21ce43b24e878ae74d4097a21afd'
    },
    {
      id: 6,
      name: 'Puzzle Toys',
      description: 'Engaging puzzle toys to stimulate your dog\'s mind and prevent boredom.',
      category: 'Toys',
      image: 'https://img.freepik.com/free-photo/close-up-bingo-game-elements_23-2149181796.jpg?t=st=1718011791~exp=1718015391~hmac=72fae2a0cfa64c686696291e563c70c73ede01f3fe03f2f75bdb10c1f0da60b9&w=740'
    },
  
    // Grooming Products Section
    {
      id: 7,
      name: 'Shampoos',
      description: 'Gentle and effective shampoos for all coat types.',
      category: 'Grooming Products',
      image: 'https://img.freepik.com/free-photo/washing-pet-dog-home_23-2149627227.jpg?t=st=1718011958~exp=1718015558~hmac=c2f6c923bd0677cdf9d3533a7e1ff81bebb04380e127696c6fac780d7f34cf75&w=740'
    },
    {
      id: 8,
      name: 'Brushes & Combs',
      description: 'High-quality brushes and combs to keep your dog\'s coat healthy and shiny.',
      category: 'Grooming Products',
      image: 'https://img.freepik.com/free-vector/i-love-my-pet-elements_23-2147536770.jpg?t=st=1718012082~exp=1718015682~hmac=bb6e17e07372c14b1ad6e26703dd641ccf7979fea5104cef5a84991f8e65f29b&w=740'
    },
    {
      id: 9,
      name: 'Nail Clippers',
      description: 'Safe and easy-to-use nail clippers for at-home grooming.',
      category: 'Grooming Products',
      image: 'https://www.shutterstock.com/shutterstock/photos/2342816629/display_1500/stock-photo-a-veterinarian-trimming-a-dog-s-long-nails-with-a-special-tool-2342816629.jpg'
    },
  
    // Accessories Section
    {
      id: 10,
      name: 'Leashes & Collars',
      description: 'Stylish and durable leashes and collars for daily walks.',
      category: 'Accessories',
      image: 'https://img.freepik.com/free-photo/view-cute-dog-enjoying-time-nature-park_23-2150407365.jpg?t=st=1718012324~exp=1718015924~hmac=7ec6461a2978cb66749411c8c2d34d0876842945060b2ddb97f42341c8227ea5&w=740'
    },
    {
      id: 11,
      name: 'Beds',
      description: 'Comfortable and cozy beds for a good night\'s sleep.',
      category: 'Accessories',
      image: 'https://img.freepik.com/free-photo/adorable-white-little-puppy_23-2148985894.jpg?t=st=1718012388~exp=1718015988~hmac=d5de4d6c71a48e4e2f709059a9f2227cc34275585367aa34b2feb1d502b958b9&w=740'
    },
    {
      id: 12,
      name: 'Bowls & Feeders',
      description: 'Functional and stylish bowls and feeders for mealtime.',
      category: 'Accessories',
      image: 'https://img.freepik.com/free-photo/bowl-with-tasty-cereal-table_23-2148318424.jpg?t=st=1718012519~exp=1718016119~hmac=07789da2075c3d335a59892b775acc156f480b71739079927961fa21f9065eef&w=740'
    },
  
    // Healthcare Section
    {
      id: 13,
      name: 'Vitamins & Supplements',
      description: 'Essential vitamins and supplements to support your dog\'s health.',
      category: 'Healthcare',
      image: 'https://img.freepik.com/free-photo/brain-booster-pills-still-life_23-2150769459.jpg?t=st=1718012647~exp=1718016247~hmac=0d1134dcaae8be68dc65eb588cd512193d38957cbca4b15ba5e7915ecbfcdb2f&w=740'
    },
    {
      id: 14,
      name: 'Flea & Tick Control',
      description: 'Effective flea and tick control products to keep your dog pest-free.',
      category: 'Healthcare',
      image: 'https://img.freepik.com/free-photo/adorable-little-dog-playing-with-his-owner_23-2148576969.jpg?t=st=1718012731~exp=1718016331~hmac=e3693246b1e581b28deb25f341ff497a7294b38f6c9ad281427ec6af86e3fb54&w=740'
    },
    {
      id: 15,
      name: 'First Aid Kits',
      description: 'Comprehensive first aid kits for emergencies.',
      category: 'Healthcare',
      image: 'https://img.freepik.com/free-vector/first-aid-background_23-2147929005.jpg?t=st=1718012827~exp=1718016427~hmac=b19f7cbf3d322f9d624724666561319c06096d8bc0669f80121a639f2af3a766&w=740'
    },
    {
        id: 16,
        name: 'Premium Dry Food',
        description: 'High-quality dry food with essential nutrients for all life stages.',
        category: 'Food',
        image: 'https://img.freepik.com/free-photo/still-life-pet-food-arrangement_23-2148982354.jpg?t=st=1718038050~exp=1718041650~hmac=244655af8fd8a7bf369d8023094eccb88291402f070114d45dacee4051026ecd&w=740'
      },
      {
        id: 17,
        name: 'Grain-Free Wet Food',
        description: 'Delicious grain-free wet food to support healthy digestion.',
        category: 'Food',
        image: 'https://img.freepik.com/free-photo/still-life-pet-food-composition_23-2148982345.jpg?t=st=1718037982~exp=1718041582~hmac=0014e2e2c2a5c7d9b28fce3bc9d0762f5dd916e2aca6fcbf8772b7f7e3caa705&w=740'
      },
      {
        id: 18,
        name: 'Organic Treats',
        description: 'Organic treats made with natural ingredients for your cat\'s enjoyment.',
        category: 'Food',
        image: 'https://www.shutterstock.com/shutterstock/photos/2419602245/display_1500/stock-vector-a-tin-can-of-cat-food-a-closed-preserves-of-fish-food-for-pets-a-pet-care-item-a-flat-vector-2419602245.jpg'
      },
      {
        id: 19,
        name: 'Interactive Toys',
        description: 'Engaging interactive toys to stimulate your cat\'s mind and keep them active.',
        category: 'Toys',
        image: 'https://img.freepik.com/free-photo/cute-scottish-straight-gray-cat-hunting-playing_574295-452.jpg?t=st=1718038171~exp=1718041771~hmac=e7d53ac0cacf645bb9c5683e8f2c5bc792cfc82d2e2acf8475b5cf7b98e8e525&w=740'
      },
      {
        id: 20,
        name: 'Chew Toys',
        description: 'Durable chew toys to keep your cat entertained and promote dental health.',
        category: 'Toys',
        image: 'https://www.shutterstock.com/shutterstock/photos/1795896631/display_1500/stock-photo-cat-with-toy-dinosaur-in-mouth-and-between-the-front-paws-while-lying-sideways-playful-kitty-1795896631.jpg'
      },
      {
        id: 21,
        name: 'Catnip Toys',
        description: 'Fun and stimulating catnip toys to encourage playful behavior.',
        category: 'Toys',
        image: 'https://img.freepik.com/free-photo/adorable-kitty-being-playful_23-2149167102.jpg?t=st=1718038413~exp=1718042013~hmac=80687eaf4a56b48dc147e930a6d617ba93245694acf17614599accc5d9013f00&w=740'
      },
      {
        id: 22,
        name: 'Shampoos',
        description: 'Gentle and effective shampoos for all coat types.',
        category: 'Grooming Products',
        image: 'https://www.shutterstock.com/shutterstock/photos/2312628721/display_1500/stock-vector-dog-shampoo-label-design-cat-shampoo-label-design-pet-care-products-label-design-packaging-2312628721.jpg'
      },
      {
        id: 23,
        name: 'Brushes & Combs',
        description: 'High-quality brushes and combs to keep your cat\'s coat healthy and shiny.',
        category: 'Grooming Products',
        image: 'https://img.freepik.com/free-photo/owner-brushing-cute-cat-side-view_23-2150139681.jpg?t=st=1718038612~exp=1718042212~hmac=fb78d63bb81cf170851aeee98b0b18d895f887857c1910a7729f4c50763b6907&w=740'
      },
      {
        id: 24,
        name: 'Nail Clippers',
        description: 'Safe and easy-to-use nail clippers for at-home grooming.',
        category: 'Grooming Products',
        image: 'https://img.freepik.com/free-photo/white-fluffy-cat-veterinarian-with-cats-animals-couch_1157-46552.jpg?t=st=1718038687~exp=1718042287~hmac=eedc699eed6e6cdbcfb158ca2fd9d9aec819ef633cc859427f6faf81fb4c9f7b&w=740'
      },
      {
        id: 25,
        name: 'Collars & Leashes',
        description: 'Stylish and durable collars and leashes for daily walks and adventures.',
        category: 'Accessories',
        image: 'https://img.freepik.com/free-photo/top-view-pet-accessories_23-2150930394.jpg?t=st=1718038886~exp=1718042486~hmac=8fdfe84d873e2da551ab55bc07f6a8520a606247bf67d4736d581b371f3c5fe5&w=740'
      },
      {
        id: 26,
        name: 'Beds',
        description: 'Comfortable and cozy beds for a good night\'s sleep.',
        category: 'Accessories',
        image: 'https://img.freepik.com/free-photo/adorable-cat-relaxing-indoors_23-2150692742.jpg?t=st=1718038966~exp=1718042566~hmac=c63c883102728a6d7afd6ccb19e5df2097fe8b96db64e1effda879561aa76b91&w=740'
      },
      {
        id: 27,
        name: 'Bowls & Feeders',
        description: 'Functional and stylish bowls and feeders for mealtime.',
        category: 'Accessories',
        image: 'https://img.freepik.com/free-photo/smart-feeder-pets-still-life_23-2151310846.jpg?t=st=1718039040~exp=1718042640~hmac=23a3b819d748951550061ddc133135d9b4a9efae584f78bcd6733609113e5863&w=740'
      },
      {
        id: 28,
        name: 'Vitamins & Supplements',
        description: 'Essential vitamins and supplements to support your cat\'s health.',
        category: 'Healthcare',
        image: 'https://img.freepik.com/free-photo/cute-cats-eating-together-outdoors_23-2148683022.jpg?t=st=1718039163~exp=1718042763~hmac=dba9f3a4ef0ff328745e31f7281ac1ad7ee60cd742cb253a62d76457915a271b&w=740'
      },
      {
        id: 29,
        name: 'Flea & Tick Control',
        description: 'Effective flea and tick control products to keep your cat pest-free.',
        category: 'Healthcare',
        image: 'https://img.freepik.com/free-photo/beautiful-cat-home_23-2149304107.jpg?t=st=1718039283~exp=1718042883~hmac=6de45aad3d24c60e0079f2aef94008ef1f59faf148c61e018681b1b78eeccfd9&w=740'
      },
      {
        id: 30,
        name: 'First Aid Kits',
        description: 'Comprehensive first aid kits for emergencies.',
        category: 'Healthcare',
        image: 'https://www.shutterstock.com/shutterstock/photos/1297600720/display_1500/stock-photo-first-aid-kit-and-cute-cat-on-white-background-animal-care-1297600720.jpg'
      },
      {
        id: 31,
        name: 'Seed Mixes',
        description: 'Balanced seed mixes for all types of birds.',
        category: 'Food',
        image: 'https://img.freepik.com/free-photo/close-up-hands-holding-animal-food_23-2148990381.jpg?t=st=1718040751~exp=1718044351~hmac=16452fff97d678ed46e9efb5137b90fda8bb5c1d67ef61360f26e853d08b91d9&w=740'
      },
      {
        id: 32,
        name: 'Pellets',
        description: 'Nutrient-rich pellets for optimal health.',
        category: 'Food',
        image: 'https://img.freepik.com/free-photo/pile-uncooked-buckwheat-gray-cloth_114579-79235.jpg?t=st=1718040860~exp=1718044460~hmac=3522e7b384ff71fb04a99c89a086fc25d48bf5362f6a9bd702bce18dd16d3e2e&w=740'
      },
      {
        id: 33,
        name: 'Treats',
        description: 'Delicious treats to reward your birds.',
        category: 'Food',
        image: 'https://www.shutterstock.com/shutterstock/photos/1724173459/display_1500/stock-photo-food-for-rodents-from-oats-grass-pellets-animal-feed-corn-wheat-isolated-on-a-white-background-1724173459.jpg'
      },
      {
        id: 34,
        name: 'Chew Toys',
        description: 'Durable chew toys to keep your birds entertained.',
        category: 'Toys',
        image: 'https://www.shutterstock.com/shutterstock/photos/1354948919/display_1500/stock-photo-close-up-of-blue-quaker-parrot-pet-bird-chewing-on-a-metal-bell-not-recommended-for-such-birds-1354948919.jpg'
      },
      {
        id: 35,
        name: 'Swings',
        description: 'Fun swings for your birds to enjoy.',
        category: 'Toys',
        image: 'https://img.freepik.com/free-photo/close-up-various-bait-hanging-fishing-line_23-2147894150.jpg?t=st=1718041224~exp=1718044824~hmac=093d6672aaeb588b2893ead5221e11aef28ea10471a5d706e555b02ce6f5ec51&w=740'
      },
      {
        id: 36,
        name: 'Activity Centers',
        description: 'Engaging activity centers to stimulate your birds.',
        category: 'Toys',
        image: 'https://img.freepik.com/free-photo/colorful-bird-house-outdoors_23-2150304172.jpg?t=st=1718041304~exp=1718044904~hmac=f4127a6f9284aecec51075be36d5549b231e75734f34635f4e1487375e1aa75d&w=740'
      },
      {
        id: 37,
        name: 'Small Bird Cages',
        description: 'Comfortable cages for small birds.',
        category: 'Cages',
        image: 'https://img.freepik.com/free-photo/front-view-hand-held-bird-cage-with-flowers_23-2148385835.jpg?t=st=1718041427~exp=1718045027~hmac=214401c18e07347a4fc9c43c42b4b79309048e3f03825c65f359a34938516ec3&w=360'
      },
      {
        id: 38,
        name: 'Large Bird Cages',
        description: 'Spacious cages for larger birds.',
        category: 'Cages',
        image: 'https://www.shutterstock.com/shutterstock/photos/2221410477/display_1500/stock-photo--large-outdoor-bird-cage-in-the-garden-2221410477.jpg'
      },
      {
        id: 39,
        name: 'Travel Cages',
        description: 'Portable travel cages for on-the-go comfort.',
        category: 'Cages',
        image: 'https://www.shutterstock.com/shutterstock/photos/2453269495/display_1500/stock-photo-leces-probolinggo-east-java-april-very-beautiful-and-nice-caged-bird-2453269495.jpg'
      },
      {
        id: 40,
        name: 'Perches',
        description: 'Comfortable perches for your birds to rest on.',
        category: 'Accessories',
        image: 'https://img.freepik.com/free-photo/closeup-shot-eurasian-blue-tit_181624-50440.jpg?t=st=1718041795~exp=1718045395~hmac=dd6afccef31faa63cf340f4501b40d4ae960174c80dad85d6a5cfac699fe0e39&w=740'
      },
      {
        id: 41,
        name: 'Feeders & Waterers',
        description: 'Efficient feeders and waterers for daily needs.',
        category: 'Accessories',
        image: 'https://www.shutterstock.com/shutterstock/photos/1432098653/display_1500/stock-photo-thirsty-hummingbird-around-a-water-feeder-1432098653.jpg'
      },
      {
        id: 42,
        name: 'Bird Baths',
        description: 'Refreshing bird baths for hygiene and fun.',
        category: 'Accessories',
        image: 'https://img.freepik.com/free-photo/vividly-colored-hummingbird-nature_23-2151495278.jpg?t=st=1718041951~exp=1718045551~hmac=3d232f07ec0e6442b8161716fd47db7234dcc754ff53789bcab3e7695faba2e4&w=826'
      },
      {
        id: 43,
        name: 'Vitamins & Supplements',
        description: 'Essential vitamins and supplements for optimal health.',
        category: 'Healthcare',
        image: 'https://img.freepik.com/free-photo/close-up-adorable-parrot-eating_23-2151182869.jpg?t=st=1718042050~exp=1718045650~hmac=2b360a0ab6726702573acf8a732de2642a1be560d6b3ec4d2b1cfa9921b8d03d&w=740'
      },
      {
        id: 44,
        name: 'Pest Control',
        description: 'Effective pest control solutions for a healthy environment.',
        category: 'Healthcare',
        image: 'https://img.freepik.com/free-vector/garden-pests-abstract-concept-vector-illustration-garden-maintenance-plant-insects-spray-insecticide-natural-pesticides-harvest-damage-viral-disease-natural-pest-control-abstract-metaphor_335657-1662.jpg?t=st=1718042161~exp=1718045761~hmac=753b208684ee643984e7818cfb82d51c4694952104ccd715868559b4af37ad6f&w=740'
      },
      {
        id: 45,
        name: 'First Aid Kits',
        description: 'Comprehensive first aid kits for emergencies.',
        category: 'Healthcare',
        image: 'https://www.shutterstock.com/shutterstock/photos/1058306867/display_1500/stock-photo--d-render-of-a-funny-cartoon-penguin-character-dressed-for-winter-holding-a-first-aid-kit-1058306867.jpg'
      },
      {
        id: 46,
        name: 'Glass Tanks',
        description: 'High-quality glass tanks in various sizes.',
        category: 'Aquariums',
        image: 'https://img.freepik.com/free-vector/cave-inside-aquarium_1308-10992.jpg?t=st=1718042463~exp=1718046063~hmac=cdbf59e724c6d64467551b4249ee13514609ff41f8b0f724c498f5ab7089dfce&w=740'
      },
      {
        id: 47,
        name: 'Acrylic Tanks',
        description: 'Durable acrylic tanks for a crystal-clear view.',
        category: 'Aquariums',
        image: 'https://img.freepik.com/free-vector/room-interior-composition-with-realistic-aquarium-chest-drawers-wall-lamp-illustration_1284-62894.jpg?t=st=1718042541~exp=1718046141~hmac=211783823f02e42a3174397391614b15551240305271ff57bd96ea54bb306d45&w=740'
      },
      {
        id: 48,
        name: 'Nano Tanks',
        description: 'Compact nano tanks for small spaces.',
        category: 'Aquariums',
        image: 'https://www.shutterstock.com/shutterstock/photos/683041222/display_1500/stock-photo-nano-coral-reef-aquarium-683041222.jpg'
      },
      {
        id: 49,
        name: 'Flakes',
        description: 'Nutritious flakes for everyday feeding.',
        category: 'Fish Food',
        image: 'https://img.freepik.com/free-photo/bowl-baked-beans-blue-table_114579-89910.jpg?t=st=1718042769~exp=1718046369~hmac=4a8ed4b358f845c07b544c69a3e9f992558cfc3428aa48780bbfeb15991e8f7e&w=740'
      },
      {
        id: 50,
        name: 'Pellets',
        description: 'Sinking pellets for bottom-feeders.',
        category: 'Fish Food',
        image: 'https://www.shutterstock.com/shutterstock/photos/1606018960/display_1500/stock-photo-green-pellets-fish-food-texture-background-close-up-top-view-1606018960.jpg'
      },
      {
        id: 51,
        name: 'Freeze-Dried',
        description: 'Freeze-dried treats for variety and nutrition.',
        category: 'Fish Food',
        image: 'https://img.freepik.com/free-photo/russian-cookies-blue-platter-marble_114579-46400.jpg?t=st=1718042913~exp=1718046513~hmac=de11f7d1a8f6e14eecdd09f14a871e4887be0d7005926dac8e35ae13b23275db&w=740'
      },
      {
        id: 52,
        name: 'Ornaments',
        description: 'Colorful ornaments to enhance your aquarium\'s beauty.',
        category: 'Decorations',
        image: 'https://img.freepik.com/free-vector/realistic-set-with-empty-aquarium-goldfish-plant-bottle-decoration-equipment-isolated-white-background-vector-illustration_1284-70664.jpg?t=st=1718043027~exp=1718046627~hmac=164a3fed2a0b1250ec226b013393ac2749021ebe2d11741055c78caef894b964&w=740'
      },
      {
        id: 53,
        name: 'Plants',
        description: 'Artificial plants for natural-looking underwater landscapes.',
        category: 'Decorations',
        image: 'https://img.freepik.com/free-vector/cute-glass-terrariums-with-succulents-white-backround_1308-98584.jpg?t=st=1718043082~exp=1718046682~hmac=453a0205ffdcebb9e78b7d67669e942209c177874a99f16547770c7bc5f14ce3&w=740'
      },
      {
        id: 54,
        name: 'Rocks & Driftwood',
        description: 'Authentic rocks and driftwood for a realistic aquatic habitat.',
        category: 'Decorations',
        image: 'https://img.freepik.com/free-photo/rocks-with-sea-moss_1160-752.jpg?t=st=1718043145~exp=1718046745~hmac=352952e3ec62da1e3143ddb3e8fbf4f8fc568c4f3420d7f6d6be385e66eed110&w=740'
      },
      {
        id: 55,
        name: 'Rocks & Driftwood',
        description: 'Authentic rocks and driftwood for a realistic aquatic habitat.',
        category: 'Decorations',
        image: 'https://img.freepik.com/free-photo/rocks-with-sea-moss_1160-752.jpg?t=st=1718043145~exp=1718046745~hmac=352952e3ec62da1e3143ddb3e8fbf4f8fc568c4f3420d7f6d6be385e66eed110&w=740'
      },
  ];
  

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('query');
    setSearchQuery(query);
    if (query) {
      const filtered = items.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems(items);
    }
  }, [location.search]);

  return (
    <div className="container">
      <h1>Search Results</h1>
      <br /><br />
      <div className="row">
        {filteredItems.map(item => (
          <div className="card col-md-4" key={item.id}>
            <img src={item.image} className="card-img-top" alt={item.name} />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
