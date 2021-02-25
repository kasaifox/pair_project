'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.belongsToMany(model.Product, {
        through: models.Cart,
        foreignKey: "ProductId"
      })
    }
  };
  Customer.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Username cannot leave empty"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Email cannot leave empty"
        }
      }},
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Password is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};