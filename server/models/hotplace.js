'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;
  class Hotplace extends Model {}

  Hotplace.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    type: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    address: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    UserId: DataTypes.INTEGER
  },{sequelize})


  Hotplace.associate = function(models) {
    // associations can be defined here
  };
  return Hotplace;
};