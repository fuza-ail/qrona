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
        user.status = 'normal'
        user.type = 'regular'
        user.password = hashPassword(user.password)
      }
    }
  })

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};