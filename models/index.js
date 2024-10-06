const Product = require('./Product');
const Category = require('./Category');
const User = require('./User')

Category.hasMany(Product, {
  onDelete: 'CASCADE'
});

Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

User.hasMany(Product, {
  onDelete: 'CASCADE'
});

Product.belongsTo(User, {
  onDelete: 'CASCADE'
})



// Define many-to-many relationships using join tables
User.belongsToMany(Product, {
  through: 'UserWatchedProducts',
  as: 'watched_products',
  foreignKey: 'user_id',
});

User.belongsToMany(Product, {
  through: 'UserPurchasedProducts',
  as: 'purchased_products',
  foreignKey: 'user_id',
});

Product.belongsToMany(User, {
  through: 'UserWatchedProducts',
  as: 'users_watching',
  foreignKey: 'product_id',
});

Product.belongsToMany(User, {
  through: 'UserPurchasedProducts',
  as: 'users_purchasing',
  foreignKey: 'product_id',
});

module.exports = { 
  Product,
  Category,
  User,
};