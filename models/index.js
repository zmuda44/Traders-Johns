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

module.exports = { 
  Product,
  Category,
  User,
};