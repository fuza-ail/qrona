'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Barcodes', [
      {
        name: 'toko 1',
        barcode_url: 'google.com',
        HotplaceId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'toko 2',
        barcode_url: 'google.com',
        HotplaceId: 2,
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
    return queryInterface.bulkDelete('Barcodes', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
};
