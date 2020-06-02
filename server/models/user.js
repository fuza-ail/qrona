'use strict';
const {hashPassword} = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;
  class User extends Model {}

  User.init({
    no_ktp: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    password: {
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
    status: DataTypes.STRING,
    phone: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    type: DataTypes.STRING
  },{
    sequelize,
    hooks: {
      beforeCreate: (user,action)=>{
        user.status = 'negatif'
        user.password = hashPassword(user.password)
      }
    }
  })

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Hotplace)
    User.hasMany(models.UserBarcode)
    User.belongsToMany(models.Barcode, {through:models.UserBarcode,foreignKey: 'UserId'})
  };
  return User;
};