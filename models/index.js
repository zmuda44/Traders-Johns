const Product = require('./Product');
const Category = require('./Category');
const User = require('./User')
const PurchasedProduct = require('./PurchasedProduct')
const WatchedProduct = require('./WatchedProduct')



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
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})



//Define many-to-many relationships using join tables
User.belongsToMany(Product, {
  through: {model: WatchedProduct, unique: false},
  as: 'user_watched_products',
  foreignKey: 'user_id',
});

User.belongsToMany(Product, {
  through: {model: PurchasedProduct, unique: false},
  as: 'user_purchased_products',
  foreignKey: 'user_id',
});

Product.belongsToMany(User, {
  through: {model: WatchedProduct, unique: false},
  as: 'users_watching',
  foreignKey: 'product_id',
});

Product.belongsToMany(User, {
  through: {model: WatchedProduct, unique: false},
  as: 'users_purchasing',
  foreignKey: 'product_id',
});

module.exports = { 
  Product,
  Category,
  User,
  WatchedProduct,
  PurchasedProduct
};