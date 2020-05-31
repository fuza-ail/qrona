'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;
  class UserBarcode extends Model {}

  UserBarcode.init({
    checkin: DataTypes.DATE,
    checkout: DataTypes.DATE,
    BarcodeId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  },{sequelize})


  UserBarcode.associate = function(models) {
    // associations can be defined here
  };
  return UserBarcode;
};