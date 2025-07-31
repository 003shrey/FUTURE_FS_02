// src/data/products.js

// Hinglish comment: Yeh hamara product data hai.
// Har product ek object hai jismein saari details hain.
// Abhi ke liye hum isse use karenge, baad mein database se connect karenge.

export const products = [
  {
    id: 'terra-01',
    name: 'Bamboo Cutlery Set',
    price: 1299,
    image: '/images/products/bamboo-cutlery.jpg', // Hum images ko /public/images/products/ mein rakhenge
    category: 'Kitchen',
    sustainability_feature: 'Zero Waste',
    description: 'A complete set of reusable bamboo cutlery, perfect for on-the-go meals. Includes a fork, knife, spoon, and chopsticks in a convenient travel pouch.',
    in_stock: true,
  },
  {
    id: 'terra-02',
    name: 'Solid Shampoo Bar',
    price: 850,
    image: '/images/products/shampoo-bar.jpg',
    category: 'Personal Care',
    sustainability_feature: 'Plastic-Free',
    description: 'Ditch the plastic bottle with our nourishing solid shampoo bar. Lasts up to 80 washes and is made with all-natural ingredients.',
    in_stock: true,
  },
  {
    id: 'terra-03',
    name: 'Recycled Paper Notebook',
    price: 600,
    image: '/images/products/recycled-notebook.jpg',
    category: 'Stationery',
    sustainability_feature: 'Recycled',
    description: 'A beautiful A5 notebook made from 100% recycled paper. Perfect for notes, sketches, and journaling your sustainable journey.',
    in_stock: true,
  },
  {
    id: 'terra-04',
    name: 'Beeswax Food Wraps',
    price: 950,
    image: '/images/products/beeswax-wraps.jpg',
    category: 'Kitchen',
    sustainability_feature: 'Zero Waste',
    description: 'A set of 3 reusable beeswax food wraps. A natural and beautiful alternative to plastic wrap for keeping your food fresh.',
    in_stock: true,
  },
  {
    id: 'terra-05',
    name: 'Bamboo Toothbrush',
    price: 250,
    image: '/images/products/bamboo-toothbrush.jpg',
    category: 'Personal Care',
    sustainability_feature: 'Plastic-Free',
    description: 'Make a simple switch with our biodegradable bamboo toothbrush. Medium bristles for an effective clean.',
    in_stock: false,
  },
    {
    id: 'terra-06',
    name: 'Mesh Produce Bags',
    price: 799,
    image: '/images/products/mesh-bags.jpg',
    category: 'Kitchen',
    sustainability_feature: 'Zero Waste',
    description: 'A set of 5 washable and reusable mesh bags for your fruits and vegetables. Say goodbye to single-use plastic produce bags at the grocery store.',
    in_stock: true,
  }
];