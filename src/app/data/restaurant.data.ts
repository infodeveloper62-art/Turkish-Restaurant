import { MenuItem, Review, GalleryItem } from '../models/restaurant.model';

export const SPECIAL_DISHES: MenuItem[] = [
  {
    id: 'special-1',
    name: "Sultan's Adana Kebab",
    turkishName: 'Zırh Kebabı',
    category: 'mains',
    description: 'Hand-minced prime lamb seasoned with Turkish sweet red peppers, hand-skewered and flame-kissed over hot natural charcoal. Served with sumac onion salad and warm lavash.',
    price: 1850,
    image: '/assets/images/adana_kebab_dish_1790096867999.jpg',
    isPopular: true,
    isChefSpecial: true,
    isSpicy: true,
    preparationTime: '20 mins'
  },
  {
    id: 'special-2',
    name: 'Traditional Turkish Pide',
    turkishName: 'Taş Fırın Kıymalı Pidesi',
    category: 'pizza',
    description: 'Authentic stone-oven boat flatbread stuffed with tender spiced minced lamb, sweet peppers, sun-ripened tomatoes, and melted golden Kaşar cheese.',
    price: 1450,
    image: '/assets/images/turkish_pide_dish_1790096886195.jpg',
    isPopular: true,
    isChefSpecial: true,
    preparationTime: '15 mins'
  },
  {
    id: 'special-3',
    name: 'Ottoman Mixed Grill Platter',
    turkishName: 'Osmanlı Karışık Izgara',
    category: 'mains',
    description: 'Grand royal banquet of marinated lamb cutlets (pirzola), saffron chicken shish, spiced kofte, and Urfa skewers served on a bed of toasted bulgur pilaf with charred chilies.',
    price: 3650,
    image: '/assets/images/turkish_mixed_grill_1790096918490.jpg',
    isPopular: true,
    isChefSpecial: true,
    preparationTime: '25 mins'
  },
  {
    id: 'special-4',
    name: 'Wood-Fired Crispy Lahmacun',
    turkishName: 'Taş Fırın Lahmacun',
    category: 'pizza',
    description: 'Ultra-thin, crispy Turkish artisan flatbread topped with finely minced spiced lamb, sweet peppers, fresh herbs, rolled with red sumac onions and fresh lemon.',
    price: 850,
    image: '/assets/images/turkish_lahmacun_dish_1790096978040.jpg',
    isPopular: true,
    isSpicy: true,
    preparationTime: '12 mins'
  },
  {
    id: 'special-5',
    name: 'Turkish Doner Shawarma Platter',
    turkishName: 'Et Döner Tabağı',
    category: 'mains',
    description: 'Succulent shaved seasoned beef and lamb roasted slowly on vertical rotisserie spit, served with freshly baked lavash, charred Turkish peppers, and creamy garlic yogurt.',
    price: 1650,
    image: '/assets/images/turkish_shawarma_doner_1790096996061.jpg',
    isPopular: true,
    preparationTime: '15 mins'
  },
  {
    id: 'special-6',
    name: 'Antep Pistachio Baklava & Tea',
    turkishName: 'Fıstıklı Baklava & Çay',
    category: 'desserts',
    description: '40 whisper-thin layers of hand-rolled phyllo pastry filled with bright green Gaziantep pistachios and pure honey syrup, paired with authentic steaming Turkish cay.',
    price: 950,
    image: '/assets/images/baklava_turkish_tea_1790096903069.jpg',
    isPopular: true,
    isChefSpecial: true,
    isVegetarian: true,
    preparationTime: 'Ready'
  }
];

export const FULL_MENU: MenuItem[] = [
  // Starters
  {
    id: 'start-1',
    name: 'Royal Mezze Platter',
    turkishName: 'Meze Tabağı',
    category: 'starters',
    description: 'Trio of velvety Hummus with extra virgin olive oil, creamy Babaganoush, and Haydari mint strained yoghurt served with freshly baked balloon bread.',
    price: 1150,
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 'start-2',
    name: 'Muhammara & Walnut Dip',
    turkishName: 'Cevizli Muhammara',
    category: 'starters',
    description: 'Roasted red bell peppers blended with Aleppo pepper paste, crushed walnuts, garlic, and pomegranate molasses.',
    price: 750,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
    isSpicy: true
  },
  {
    id: 'start-3',
    name: 'Crispy Sigara Börek',
    turkishName: 'Sigara Böreği',
    category: 'starters',
    description: 'Cigar-shaped rolled yufka pastry rolls filled with Turkish feta, fresh parsley, and dill, flash-fried until golden and crunchy.',
    price: 680,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true
  },
  {
    id: 'start-4',
    name: 'Spiced Lentil Soup',
    turkishName: 'Mercimek Çorbası',
    category: 'starters',
    description: 'Traditional silky red lentil soup simmered with sweet onions, cumin, and finished with mint-infused sizzling paprika butter and fresh lemon wedges.',
    price: 550,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true
  },

  // Main Course
  {
    id: 'main-1',
    name: "Sultan's Adana Kebab",
    turkishName: 'Zırh Kebabı',
    category: 'mains',
    description: 'Hand-minced prime lamb seasoned with Turkish sweet red peppers, hand-skewered and flame-kissed over hot natural charcoal. Served with sumac onion salad and warm lavash.',
    price: 1850,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
    isChefSpecial: true,
    isSpicy: true
  },
  {
    id: 'main-2',
    name: 'Iskender Kebab Supreme',
    turkishName: 'Hakiki İskender',
    category: 'mains',
    description: 'Tender shaved roast meat layered over buttery toasted pide croutons, glazed with rich roasted tomato sauce and poured over with bubbling melted village butter.',
    price: 2150,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
    isChefSpecial: true
  },
  {
    id: 'main-3',
    name: 'Beyti Sarma Kebab',
    turkishName: 'Sarma Beyti',
    category: 'mains',
    description: 'Charcoal-grilled seasoned ground lamb gently wrapped in paper-thin lavash, sliced into medallions and topped with velvety tomato butter reduction & cold garlic yoghurt.',
    price: 1950,
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80',
    isPopular: true
  },
  {
    id: 'main-4',
    name: 'Tavuk Shish Kebab',
    turkishName: 'Tavuk Şiş',
    category: 'mains',
    description: 'Juicy chicken breast cubes marinated for 24 hours in Turkish yoghurt, garlic, sweet paprika, and oregano, char-grilled to golden tenderness.',
    price: 1550,
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'main-5',
    name: 'Ottoman Mixed Grill Platter',
    turkishName: 'Osmanlı Karışık Izgara',
    category: 'mains',
    description: 'Grand royal banquet of marinated lamb cutlets (pirzola), saffron chicken shish, spiced kofte, and Urfa skewers served on a bed of toasted bulgur pilaf with charred chilies.',
    price: 3650,
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
    isChefSpecial: true
  },
  {
    id: 'main-6',
    name: 'Lamb Shank Kleftiko',
    turkishName: 'Kuzu İncik',
    category: 'mains',
    description: 'Slow-braised tender lamb shank cooked for 6 hours until fall-off-the-bone tender with baby shallots, rosemary, root vegetables, and natural pan jus.',
    price: 2650,
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
    isChefSpecial: true
  },

  // Burgers
  {
    id: 'burger-1',
    name: 'Ottoman Spiced Lamb Burger',
    turkishName: 'Osmanlı Kuzu Burger',
    category: 'burgers',
    description: '200g succulent charcoal-seared spiced lamb patty, smoked provolone cheese, caramelized sumac onions, arugula, and tzatziki aioli on a toasted brioche bun.',
    price: 1250,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    isPopular: true
  },
  {
    id: 'burger-2',
    name: 'Bosphorus Smoked Beef Burger',
    turkishName: 'Boğaziçi Füme Burger',
    category: 'burgers',
    description: 'Double Angus beef patties smashed with aged cheddar, beef bacon jam, crispy fried onion strings, and house-made pomegranate glaze sauce.',
    price: 1350,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
    isChefSpecial: true
  },
  {
    id: 'burger-3',
    name: 'Peri-Peri Char-Grilled Chicken Burger',
    turkishName: 'Izgara Tavuk Burger',
    category: 'burgers',
    description: 'Marinated chicken breast flame-grilled with Turkish spices, melted mozzarella, garlic herb mayonnaise, and fresh crisp lettuce.',
    price: 1050,
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80'
  },

  // Pizza / Pide
  {
    id: 'pizza-1',
    name: 'Traditional Kusbasili Pide',
    turkishName: 'Kuşbaşılı Pide',
    category: 'pizza',
    description: 'Classic Turkish boat-shaped artisan flatbread loaded with hand-diced tenderloin beef, sweet red peppers, tomatoes, and melted Kaşar cheese.',
    price: 1450,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    isPopular: true
  },
  {
    id: 'pizza-2',
    name: 'Sucuk & Kaşar Turkish Pizza',
    turkishName: 'Sucuklu Pizza',
    category: 'pizza',
    description: 'Stone-baked thin crust pizza layered with spicy dry Turkish garlic beef sausage (Sucuk), green peppers, oregano, and generous melted cheese.',
    price: 1350,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
    isSpicy: true
  },
  {
    id: 'pizza-3',
    name: 'Crispy Artisan Lahmacun (2 Pcs)',
    turkishName: 'Taş Fırın Lahmacun',
    category: 'pizza',
    description: 'Ultra-thin, crispy round flatbread baked with finely minced lamb, onions, parsley, and Anatolian spices. Served with lemon wedges and fresh sumac mint.',
    price: 990,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
    isPopular: true
  },
  {
    id: 'pizza-4',
    name: 'Quattro Formaggi White Pide',
    turkishName: 'Dört Peynirli Pide',
    category: 'pizza',
    description: 'Artisan boat pide filled with rich Turkish feta, melting Kaşar, ricotta, and mozzarella topped with roasted sesame and black nigella seeds.',
    price: 1250,
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true
  },

  // Desserts
  {
    id: 'dessert-1',
    name: 'Antep Pistachio Baklava',
    turkishName: 'Fıstıklı Baklava',
    category: 'desserts',
    description: '40 whisper-thin layers of hand-rolled phyllo pastry generously filled with bright green Gaziantep pistachios, baked golden and steeped in gentle honey syrup.',
    price: 950,
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
    isChefSpecial: true,
    isVegetarian: true
  },
  {
    id: 'dessert-2',
    name: 'Sizzling Hot Hatay Künefe',
    turkishName: 'Hatay Künefesi',
    category: 'desserts',
    description: 'Shredded crispy kadayıf dough filled with stretchy unsalted melting cheese, pan-fried in butter, soaked in warm syrup, and crowned with clotted cream (Kaymak) & ground pistachios.',
    price: 1150,
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
    isVegetarian: true
  },
  {
    id: 'dessert-3',
    name: 'Caramelized Sütlaç (Baked Rice Pudding)',
    turkishName: 'Fırın Sütlaç',
    category: 'desserts',
    description: 'Slow-cooked creamy milk pudding with vanilla bean and short grain rice, oven-broiled in clay pots until caramelized on top with crushed hazelnuts.',
    price: 650,
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true
  },

  // Drinks
  {
    id: 'drink-1',
    name: 'Traditional Rize Turkish Tea',
    turkishName: 'Taze Demleme Çay',
    category: 'drinks',
    description: 'Double-kettle slow-brewed aromatic black tea from the Rize Black Sea mountains, served in authentic curved glass with sugar cubes.',
    price: 180,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    isPopular: true
  },
  {
    id: 'drink-2',
    name: 'Frothy Village Ayran',
    turkishName: 'Yayık Ayranı',
    category: 'drinks',
    description: 'Chilled hand-churned fresh yoghurt drink with a hint of sea salt and dried wild mountain mint, served in traditional hammered copper mugs.',
    price: 320,
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'drink-3',
    name: 'Authentic Turkish Sand Coffee',
    turkishName: 'Kumda Türk Kahvesi',
    category: 'drinks',
    description: 'Finely ground Ottoman coffee beans slow-simmered in heated golden sand in copper cezve pots. Served with artisanal Turkish delight (Lokum).',
    price: 450,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    isPopular: true
  },
  {
    id: 'drink-4',
    name: 'Bosphorus Mint Pomegranate Fizz',
    turkishName: 'Nar & Nane Şerbeti',
    category: 'drinks',
    description: 'Refreshing sparkling cooler crafted with pure ruby red pomegranate juice, fresh crushed mint leaves, lime juice, and wild floral honey.',
    price: 490,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Authentic Charcoal Adana Kebab',
    category: 'Grill Master',
    imageUrl: '/assets/images/adana_kebab_dish_1790096867999.jpg',
    description: 'Our master ustas grilling seasoned lamb skewers over glowing oak coals.'
  },
  {
    id: 'gal-2',
    title: 'Stone-Baked Turkish Pide',
    category: 'Stone Oven',
    imageUrl: '/assets/images/turkish_pide_dish_1790096886195.jpg',
    description: 'Crispy artisan boat pide bubbling with Turkish Kaşar and savory spiced meats.'
  },
  {
    id: 'gal-3',
    title: 'Gaziantep Pistachio Baklava & Tea',
    category: 'Pastry & Tea',
    imageUrl: '/assets/images/baklava_turkish_tea_1790096903069.jpg',
    description: 'Crisp hand-rolled phyllo steeped in honey syrup, served with traditional steaming çay.'
  },
  {
    id: 'gal-4',
    title: 'Grand Sultan Mixed Grill',
    category: 'Chef Signature',
    imageUrl: '/assets/images/turkish_mixed_grill_1790096918490.jpg',
    description: 'A lavish feast of lamb chops, tender shish, kofte, and charred vegetables on golden bulgur.'
  },
  {
    id: 'gal-5',
    title: 'Wood-Fired Crispy Lahmacun',
    category: 'Artisan Bakery',
    imageUrl: '/assets/images/turkish_lahmacun_dish_1790096978040.jpg',
    description: 'Crisp stone-baked flatbread with spiced minced lamb, sumac onions, and fresh lemon.'
  },
  {
    id: 'gal-6',
    title: 'Rotisserie Turkish Doner Shawarma',
    category: 'Rotisserie',
    imageUrl: '/assets/images/turkish_shawarma_doner_1790096996061.jpg',
    description: 'Succulent shaved beef and lamb roasted slowly and served with warm lavash.'
  },
  {
    id: 'gal-7',
    title: 'Imperial Ottoman Banquet Feast',
    category: 'Ottoman Feast',
    imageUrl: '/assets/images/turkish_hero_feast_1790096845716.jpg',
    description: 'A grand royal spread of sizzling kebabs, fresh pide, and traditional mezze.'
  },
  {
    id: 'gal-8',
    title: 'Opulent Ottoman Dining Hall',
    category: 'Ambiance',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    description: 'Warm ambient lighting, intricate mosaic lanterns, and welcoming hospitality in Nishatabad, Faisalabad.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    customerName: 'Hamza Tariq',
    roleOrLocation: 'Faisalabad Food Critic & Foodie',
    rating: 5,
    comment: 'Undoubtedly the most authentic Turkish dining experience in Faisalabad! The Adana kebab is tender, deeply smoky, and spiced to perfection. The Turkish tea served at the end was the perfect touch.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    date: 'September 2026',
    dishRecommended: "Sultan's Adana Kebab"
  },
  {
    id: 'rev-2',
    customerName: 'Dr. Ayesha Malik',
    roleOrLocation: 'Frequent Family Diner, Faisalabad',
    rating: 5,
    comment: 'The ambiance is pure Ottoman royalty opposite Imtiaz Mart near Misaq ul Mall. We hosted a family celebration for 14 guests and everyone was raving about the Mixed Grill Platter and hot Künefe. Exceptional hospitality!',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    date: 'August 2026',
    dishRecommended: 'Hatay Künefe & Mixed Platter'
  },
  {
    id: 'rev-3',
    customerName: 'Zubair Ahmed',
    roleOrLocation: 'Travel & Lifestyle Vlogger',
    rating: 5,
    comment: 'From the warm balloon bread with garlic dip to the sizzling butter on the Iskender, Turkish Restaurant sets the gold standard. Feels like dining along the Bosphorus in Istanbul right here in Nishatabad!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    date: 'August 2026',
    dishRecommended: 'Iskender Kebab Supreme'
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 'feat-1',
    title: 'Fresh Ingredients',
    icon: 'eco',
    description: 'Hand-selected farm-fresh herbs, prime 100% Halal grass-fed meats, and pure cold-pressed olive oils imported directly from Mediterranean groves.'
  },
  {
    id: 'feat-2',
    title: 'Expert Chefs',
    icon: 'outdoor_grill',
    description: 'Master Turkish pitmasters with decades of seasoned experience perfecting ancient Anatolian wood-fire grilling and hand-stretched pide dough.'
  },
  {
    id: 'feat-3',
    title: 'Fast Service',
    icon: 'bolt',
    description: 'Attentive, hospitable Turkish service ensuring your sizzling platters arrive hot, fragrant, and promptly at your table without delay.'
  },
  {
    id: 'feat-4',
    title: 'Cozy Atmosphere',
    icon: 'deck',
    description: 'Opulent Ottoman-inspired interior, intimate amber lighting, private family dining chambers, and soothing traditional Turkish melodies.'
  }
];

export const RESTAURANT_INFO = {
  name: 'TURKISH RESTAURANT',
  subtitle: 'Authentic Ottoman & Anatolian Cuisine in Faisalabad',
  city: 'Faisalabad, Pakistan',
  address: 'Lahore - Sheikhupura - Faisalabad Rd, near Misaq ul Mall, opposite Imtiaz Mart, Nishatabad, Faisalabad, 38000, Pakistan',
  phone: '+92 41 876 5432',
  phoneSecondary: '+92 300 786 5555',
  email: 'reservations@turkishrestaurant.pk',
  openingHours: 'Monday - Sunday: 12:30 PM – 01:30 AM',
  googleMapsUrl: 'https://maps.google.com/?q=Lahore+-+Sheikhupura+-+Faisalabad+Rd,+near+Misaq+ul+Mall,+opposite+Imtiaz+Mart,+Nishatabad,+Faisalabad,+Pakistan',
  socials: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    whatsapp: 'https://wa.me/923007865555',
    tiktok: 'https://tiktok.com'
  }
};
