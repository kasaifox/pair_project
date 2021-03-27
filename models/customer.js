'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    getUserName() {
      return `Hi! ${this.username}`
    }
    static associate(models) {
      // define association here
      Customer.belongsToMany(models.Product, {
        through: models.Cart,
        foreignKey: "CustomerId"
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
    modelName: 'Customer'
  });
  Customer.beforeCreate((instance, option) => {
    instance.password = hashPassword(instance.password)
  })
  return Customer;
};