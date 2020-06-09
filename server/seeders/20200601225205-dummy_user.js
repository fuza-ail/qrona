'use strict';
const { hashPassword } = require('../helpers/bcrypt')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        no_ktp: '11111',
        name: 'ali',
        email:'ali@mail.com',
        password: hashPassword('rahasia'),
        address: 'jakarta',
        status : 'negatif',
        phone: '0811111111',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        no_ktp: '11112',
        name: 'budi',
        email:'budi@mail.com',
        password: hashPassword('rahasia'),
        address: 'jakarta',
        status : 'negatif',
        phone: '0811111111',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        no_ktp: '11113',
        name: 'randy',
        email:'randy@mail.com',
        password: hashPassword('rahasia'),
        address: 'jakarta',
        status : 'negatif',
        phone: '0811111111',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        no_ktp: '11114',
        name: 'setiawan',
        email:'setiawan@mail.com',
        password: hashPassword('rahasia'),
        address: 'jakarta',
        status : 'negatif',
        phone: '0811111111',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        no_ktp: '11115',
        name: 'adam',
        email:'adam@mail.com',
        password: hashPassword('rahasia'),
        address: 'jakarta',
        status : 'negatif',
        phone: '0811111111',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        no_ktp: '11116',
        name: 'lisa',
        email:'lisa@mail.com',
        password: hashPassword('rahasia'),
        address: 'jakarta',
        status : 'negatif',
        phone: '0811111111',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        no_ktp: '11117',
        name: 'mona',
        email:'mona@mail.com',
        password: hashPassword('rahasia'),
        address: 'jakarta',
        status : 'negatif',
        phone: '0811111111',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        no_ktp: '11118',
        name: 'tuti',
        email:'tuti@mail.com',
        password: hashPassword('rahasia'),
        address: 'jakarta',
        status : 'negatif',
        phone: '0811111111',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        no_ktp: '11119',
        name: 'siti',
        email:'siti@mail.com',
        password: hashPassword('rahasia'),
        address: 'jakarta',
        status : 'negatif',
        phone: '0811111111',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        no_ktp: '11120',
        name: 'megawati',
        email:'megawati@mail.com',
        password: hashPassword('rahasia'),
        address: 'jakarta',
        status : 'negatif',
        phone: '0811111111',
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
