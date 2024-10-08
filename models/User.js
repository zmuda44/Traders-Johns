const {Model, DataTypes}= require('sequelize');
const bcrypt= require('bcrypt');
const sequelize= require('../config/connection');

class User extends Model {
    checkPassword(loginPW) {
        return bcrypt.compareSync(loginPW, this.password);
    }
};

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true,
            },
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1],
            },
          },

    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password= await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            beforeUpdate: async (newUserData) => {
                newUserData.password= await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports= User;



