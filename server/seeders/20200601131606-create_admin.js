'use strict';
const {hashPassword} = require('../helpers/bcrypt')
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        no_ktp: '12345678',
        name: 'admin',
        email: 'admin@mail.com',
        password: hashPassword('rahasia'),
        phone: '0122233333',
        type: 'admin',
        address: 'jakarta',
        status: 'negatif',
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
    return queryInterface.bulkDelete('Users', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
};
