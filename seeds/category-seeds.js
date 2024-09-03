const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Produce'
    },
    {
        category_name: 'Meat'
    },
    {
        category_name: 'Seafood'
    },
    {
        category_name: 'Dairy'
    },
    {
        category_name: 'Snacks'
    },
    {
        category_name: 'Dry-Goods'
    },
    {
        category_name: 'Canned-Goods'
    },
    {
        category_name: 'Condiments'
    },
    {
        category_name: 'Bakery'
    },
    {
        category_name: 'Cereal'
    },
    {
        category_name: 'Frozen-Goods'
    }
]

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;