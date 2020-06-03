'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;
  class Barcode extends Model {}

  Barcode.init({
    name: DataTypes.STRING,
    barcode_url: DataTypes.STRING,
    HotplaceId: DataTypes.INTEGER
  },{sequelize})

  Barcode.associate = function(models) {
    // associations can be defined here
    Barcode.belongsTo(models.Hotplace,{foreignKey:'HotplaceId'})
    Barcode.belongsToMany(models.User,{through:models.UserBarcode,foreignKey:'BarcodeId'})
    Barcode.hasMany(models.UserBarcode)
  };
  return Barcode;
};