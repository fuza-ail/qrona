'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Hotplaces', [
      {
        name: 'toko 1',
        type: 'store',
        address: 'jakarta',
        phone: '0811111',
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'toko 2',
        type: 'store',
        address: 'jakarta',
        phone: '0811111',
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Hotplaces', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
};
