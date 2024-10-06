const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class WatchedProduct extends Model {}

WatchedProduct.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    
    user_id: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: 'user',
      //   key: 'id',
      // }
    },
    product_id: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: 'product',
      //   key: 'id',
      // }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'watched_product',
  }
);

module.exports = WatchedProduct;