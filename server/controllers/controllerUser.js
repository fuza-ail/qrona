const { User, Hotplace, Barcode, UserBarcode } = require('../models')
const jwt = require('jsonwebtoken')
const { checkPassword } = require('../helpers/bcrypt');
require('dotenv').config();
const { Op } = require('sequelize');


class ControllerUser {
  static register(req, res, next) {
    const inputData = req.body;
    User.create({
      no_ktp: inputData.no_ktp,
      name: inputData.name,
      email: inputData.email,
      address: inputData.address,
      phone: inputData.phone,
      password: inputData.password
    })
      .then(user => {
        let token = jwt.sign({
          userId: user.id,
          userEmail: user.email
        }, process.env.TOKEN_KEY)
        res.status(201).json({
          access_token: token
        })
      })
      .catch(error => next(error))
  }

  static login(req, res, next) {
    const inputData = req.body;
    User.findOne({ where: { email: inputData.email } })
      .then(user => {
        if (user) {
          if (checkPassword(inputData.password, user.password)) {
            let token = jwt.sign({
              userId: user.id,
              userEmail: user.email
            }, process.env.TOKEN_KEY)
            res.status(200).json({
              access_token: token
            })
          } else {
            throw {
              status: 400,
              message: 'wrong password'
            }
          }
        } else {
          throw {
            status: 404,
            message: 'email not found'
          }
        }
      })
      .catch(error => next(error))
  }

  static getProfile(req, res, next) {
    User.findByPk(req.user.userId, {
      attributes: ['no_ktp', 'name', 'email', 'address', 'status', 'phone']
    })
      .then(user => {
        res.status(200).json(user)
      })
      .catch(error => next(error))
  }

  static updateProfile(req, res, next) {
    const inputData = req.body
    User.findByPk(req.user.userId)
      .then(user => {
        return User.update({
          name: inputData.name,
          address: inputData.address,
          phone: inputData.phone
        }, { where: { id: user.id } })
      })
      .then(() => {
        res.status(200).json({
          message: 'profile has been updated'
        })
      })
      .catch(error => next(error))
  }

  static addHotplace(req, res, next) {
    const inputData = req.body
    Hotplace.create({
      name: inputData.name,
      type: inputData.type,
      address: inputData.address,
      phone: inputData.phone,
      UserId: req.user.userId
    })
      .then(hotplace => {
        return Barcode.create({
          name: hotplace.name,
          barcode_url: inputData.barcode_url,
          HotplaceId: hotplace.id
        })
      })
      .then(barcode => {
        res.status(201).json(barcode)
      })
      .catch(error => next(error))
  }

  static getHotplace(req, res, next) {
    Hotplace.findAll({
      where: {
        UserId: req.user.userId
      },
      attributes: ['id', 'name', 'type', 'address', 'phone']
    })
      .then(hotplaces => {
        res.status(200).json(hotplaces)
      })
      .catch(error => next(error))
  }

  static getBarcode(req, res, next) {
    const hotplaceId = req.params.id
    Hotplace.findOne({
      where: {
        id: hotplaceId
      }
    })
      .then(hotplace => {
        console.log(hotplace)
        return Barcode.findOne({
          where: {
            HotplaceId: hotplaceId
          }
        })
      })
      .then(barcode => {
        res.status(200).json(barcode)
      })
      .catch(error => next(error))
  }

  static deleteHotplace(req, res, next) {
    const hotplaceId = req.params.id
    Hotplace.findByPk(hotplaceId)
      .then(hotplace => {
        if (hotplace) {
          return Hotplace.destroy({
            where: {
              id: hotplace.id
            }
          })
        } else {
          throw {
            status: 404,
            message: 'hotplace not found'
          }
        }
      })
      .then(barcode => {
        console.log('herre')
        if (barcode) {
          return Barcode.findOne({
            where: {
              HotplaceId: hotplaceId
            }
          })
        } else {
          throw {
            status: 404,
            message: 'barcode not found'
          }
        }
      })
      .then(barcode => {
        Barcode.destroy({
          where: {
            HotplaceId: hotplaceId
          }
        })
      })
      .then(() => {
        res.status(200).json({
          message: 'hotplace has been deleted'
        })
      })
      .catch(error => next(error))
  }

  static downloadBarcode(req, res, next) {
    const hotplaceId = req.params.id
    Hotplace.findOne({
      where: {
        id: hotplaceId
      }
    })
      .then(hotplace => {
        console.log(hotplace)
        return Barcode.findOne({
          where: {
            HotplaceId: hotplaceId
          }
        })
      })
      .then(barcode => {
        res.status(200).json(barcode)
      })
      .catch(error => next(error))
  }

  static checkIn(req, res, next) {
    const barcodeId = req.body.id
    UserBarcode.create({
      checkin: Date.now(),
      checkout: Date.now(),
      BarcodeId: barcodeId,
      UserId: req.user.userId
    })
      .then(userbarcode => {
        res.status(201).json(userbarcode)
      })
      .catch(error => next(error))
  }

  static checkOut(req, res, next) {
    const barcodeId = req.params.id
    UserBarcode.findOne({
      where: {
        [Op.and]: [
          { BarcodeId: barcodeId },
          { UserId: req.user.userId }
        ]
      }
    })
      .then(userbarcode => {
        if (userbarcode) {
          return UserBarcode.update({
            checkout: Date.now()
          },
          {where:{
            id: userbarcode.id
          }})
        } else {
          throw {
            status: 404,
            message: `you haven't checked in`
          }
        }
      })
      .then(userBarcode => {
        return UserBarcode.findOne({
          where: {
            [Op.and]:[
              {BarcodeId: barcodeId},
              {UserId: req.user.userId}
            ]
          }
        })
      })
      .then(checkout=>{
        res.status(200).json(checkout)
      })
      .catch(error => next(error))
  }
}

module.exports = ControllerUser