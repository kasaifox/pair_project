'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Carts', 'CustomerId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Customers',
        key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Carts', 'CustomerId')
  }
};
