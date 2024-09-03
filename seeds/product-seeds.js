const { Product } = require('../models');

const productData = [
  {
    product_name: 'Lettuce',
    image: 'lettuce',
    description: 'Organic head of lettuce',
    price: 3,
    category_id: 1
  },
  {
    product_name: 'Tomatoes',
    image: 'tomatoes',
    description: 'Organic tomatos',
    price: 2,
    category_id: 1
  },
  {
    product_name: 'Cucumbers',
    image: 'cucumber',
    description: 'Organic cucumbers',
    price: 6,
    category_id: 1
  },
  {
    product_name: 'Chicken Breast',
    image: 'chicken',
    description: '1 pound of fresh chicken breast.',
    price: 8,
    category_id: 2
  },
  {
    product_name: 'Ground Beef',
    image: 'beef',
    description: '1 pound a freshly ground beef.',
    price: 8,
    category_id: 2
  },
  {
    product_name: 'Tilapia',
    image: 'fish',
    description: 'Idividualy packaged tilapia fillets.',
    price: 15,
    category_id: 3
  },
  {
    product_name: 'Milk',
    image: 'milk',
    description: '1 gallon of 2% milk.',
    price: 4,
    category_id: 4
  },
  {
    product_name: 'Cheddar Cheese',
    image: 'cheese',
    description: 'A block of cheddar cheese.',
    price: 10,
    category_id: 4
  },
  {
    product_name: 'Potato Chips',
    image: 'chips',
    description: '1 bag of chips.',
    price: 4,
    category_id: 5
  },
  {
    product_name: 'Chocolate Cookies',
    image: 'cookies',
    description: '1 box of chocolate cookies.',
    price: 6,
    category_id: 5
  },
  {
    product_name: 'Spaghetti',
    image: 'spaghetti',
    description: '1 box of spaghetti.',
    price: 2,
    category_id: 6
  },
  {
    product_name: 'Rice',
    image: 'rice',
    description: '20 lb bag of rice.',
    price: 25,
    category_id: 6
  },
  {
    product_name: 'Sliced Tomatoes',
    image: 'sliced-tomatoes',
    description: '1 large can of sliced tomatoes.',
    price: 6,
    category_id: 7
  },
  {
    product_name: 'Ketchup',
    image: 'ketchup',
    description: '1 bottle of ketchup.',
    price: 4,
    category_id: 8
  },
  {
    product_name: 'Apple Pie',
    image: 'apple-pie',
    description: '1 freshly baked apple pie.',
    price: 5,
    category_id: 9
  },
  {
    product_name: 'Fruit Circles',
    image: 'frootloop',
    description: '1 box of colorful fruit rings',
    price: 5,
    category_id: 10
  },
  {
    product_name: 'Vanilla Ice-Cream',
    image: 'icecream',
    description: '1 tub of icecream',
    price: 5,
    category_id: 11
  },
]



const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
