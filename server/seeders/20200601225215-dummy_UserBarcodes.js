'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserBarcodes', [
      {
        checkin: new Date('2020-06-02 07:00:00.189297+07'),
        checkout: new Date('2020-06-02 10:00:00.189297+07'),
        BarcodeId: 1,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        checkin: new Date('2020-06-02 06:00:00.189297+07'),
        checkout: new Date('2020-06-02 08:00:00.189297+07'),
        BarcodeId: 1,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        checkin: new Date('2020-06-02 05:00:00.811333+07'),
        checkout: new Date('2020-06-02 06:00:00.811333+07'),
        BarcodeId: 1,
        UserId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        checkin: new Date('2020-06-02 11:00:00.811333+07'),
        checkout: new Date('2020-06-02 12:00:00.811333+07'),
        BarcodeId: 2,
        UserId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        checkin: new Date('2020-06-02 07:00:00.811333+07'),
        checkout: new Date('2020-06-02 08:00:00.811333+07'),
        BarcodeId: 2,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        checkin: new Date('2020-06-02 11:30:00.811333+07'),
        checkout: new Date('2020-06-02 11:30:00.811333+07'),
        BarcodeId: 2,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        checkin: new Date('2020-06-02 08:00:00.811333+07'),
        checkout: new Date('2020-06-02 09:00:00.811333+07'),
        BarcodeId: 2,
        UserId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        checkin: new Date('2020-06-02 09:00:00.811333+07'),
        checkout: new Date('2020-06-02 11:00:00.811333+07'),
        BarcodeId: 1,
        UserId: 7,
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
    return queryInterface.bulkDelete('UserBarcodes', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
};
