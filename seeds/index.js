const seedProducts = require('./product-seeds');
const seedCategories = require('./category-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedCategories();
  console.log('\n---- CATEGORY SEEDED');
  
  await seedProducts();
  console.log('\n----- PRODUCT SEEDED -----\n');
  

  process.exit(0);
};

seedAll();