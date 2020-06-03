const { User, Hotplace, Barcode, UserBarcode } = require('../models')
const jwt = require('jsonwebtoken')
const { checkPassword } = require('../helpers/bcrypt');
require('dotenv').config();
const { Op } = require('sequelize');
const Moment = require('moment');
const { extendMoment } = require('moment-range');
let moment = extendMoment(Moment)

class ControllerAdmin {

  static loginAdmin(req, res, next) {
    const inputData = req.body
    User.findOne({
      where: {
        [Op.and]: [
          { type: 'admin' },
          { email: inputData.email }
        ]
      }
    })
      .then(admin => {
        if (admin) {
          if (checkPassword(inputData.password, admin.password)) {
            let token = jwt.sign({
              userId: admin.id,
              userEmail: admin.email
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
            message: 'admin not found'
          }
        }
      })
      .catch(error => next(error))
  }

  static getUsers(req, res, next) {
    User.findAll({
      attributes: ['id', 'no_ktp', 'name', 'email', 'address', 'status', 'phone']
    })
      .then(users => {
        res.status(200).json(users)
      })
      .catch(error => next(error))
  }

  static getUser(req, res, next) {
    const userId = req.params.id
    User.findByPk(userId, {
      attributes: ['id', 'no_ktp', 'name', 'email', 'address', 'status', 'phone'],
      include: {
        model: UserBarcode,
        attributes: ['id', 'checkin', 'checkout'],
        include: {
          model: Barcode,
          attributes: ['id', 'name', 'barcode_url'],
          include: {
            model: Hotplace,
            attributes: ['id', 'name', 'type', 'address', 'phone']
          }
        }
      }
    })
      .then(user => {
        if (user) {
          res.status(200).json(user)
        } else {
          throw {
            status: 404,
            message: 'user not found'
          }
        }
      })
      .catch(error => next(error))
  }

  static updateUserStatus(req, res, next) {
    const inputData = req.body
    const userId = req.params.id
    let suspectUser
    const suspectHotplaces = []
    const sameHotplaceUser = []
    const contactedUser = []
    if (inputData.status == 'positif') {
      User.findByPk(userId)
        .then(user => {
          if (user) {
            return User.update({
              status: inputData.status
            }, {
              where: { id: user.id }
            })
          } else {
            throw {
              status: 404,
              message: 'user not found'
            }
          }
        })
        .then(data => {
          return User.findByPk(userId, {
            attributes: ['id', 'no_ktp', 'name'],
            include: {
              model: UserBarcode,
              attributes: ['checkin', 'checkout'],
              include: {
                model: Barcode,
                attributes: ['id', 'name', 'barcode_url']
              }
            }
          })
        })
        .then(userData => {
          userData.UserBarcodes.forEach(el => {
            suspectHotplaces.push({
              barcodeId: el.Barcode.id,
              checkIn: el.checkin,
              checkOut: el.checkout
            })
          })
          let promises = []
          suspectHotplaces.forEach(el => {
            promises.push(
              Barcode.findOne({
                where: {
                  id: el.barcodeId
                },
                include: {
                  model: UserBarcode
                }
              })
            )
          })
          return Promise.all(promises)

        })
        .then(data => {
          data.forEach(el => {
            let suspect = {}
            suspect.otherUser = []
            el.UserBarcodes.forEach(element => {
              if (element.UserId == Number(userId)) {
                suspect.checkIn = element.checkin
                suspect.checkOut = element.checkout
              } else {
                suspect.otherUser.push({
                  userId: element.UserId,
                  checkIn: element.checkin,
                  checkOut: element.checkout,
                })
              }
            })
            sameHotplaceUser.push(suspect)
          })
          // console.log(data)
          sameHotplaceUser.forEach(el => {
            let suspectRange = moment.range(el.checkIn, el.checkOut)
            el.otherUser.forEach(element => {
              let userRange = moment.range(element.checkIn, element.checkOut)
              if (suspectRange.overlaps(userRange)) {
                contactedUser.push(element.userId)
              }
            })
          })
          // console.log(JSON.stringify(sameHotplaceUser))
          let lastPromise = []
          contactedUser.forEach(el => {
            lastPromise.push(
              User.findOne({
                where: {
                  [Op.and]: [
                    { id: el },
                    { status: 'negatif' }
                  ]
                },
                attributes: ['id', 'name', 'notification_token']
              })
            )
          })
          return Promise.all(lastPromise)
          // res.status(200).json(contactedUser)
        })
        .then(data => {
          const updatePromise = []
          data.forEach(el => {
            if(el){
              updatePromise.push(
                User.update({
                  status: 'OTG'
                }, {
                  where: {
                    [Op.and]: [
                      { id: Number(el.id) },
                      { status: 'negatif' }
                    ]
                  }
                })
              )
              // push notification
              if(el.notification_token){
                updatePromise.push(
                  fetch('https://exp.host/--/api/v2/push/send', {
                    method: 'POST',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      to: el.notification_token,
                      sound: 'default',
                      title: 'Status Update',
                      body: 'You have been in contact with a person who tested positive, your status has been updated'
                    })
                  })
                )
              }
            }
          })
          if(updatePromise.length !== 0){
            return Promise.all(updatePromise)
          }else{
            return
          }
        })
        .then(data=>{
          res.status(200).json({
            message: 'all status has been updated'
          })
        })
        .catch(error => next(error))
    } else {
      User.findByPk(userId)
        .then(user => {
          if (user) {
            return User.update({
              status: inputData.status
            }, {
              where: { id: user.id }
            })
          } else {
            throw {
              status: 404,
              message: 'user not found'
            }
          }
        })
        .then(data => {
          res.status(200).json({
            message: 'status has been updated'
          })
        })
        .catch(error => next(error))
    }
  }

  static getHotplaces(req, res, next) {
    Hotplace.findAll({
      attributes: ['id', 'name', 'type', 'address', 'phone'],
      include: {
        model: User,
        attributes: ['id', 'name', 'email', 'address', 'phone']
      }
    })
      .then(hotplaces => {
        res.status(200).json(hotplaces)
      })
      .catch(error => next(error))
  }

  static getHotplace(req, res, next) {
    const hotplaceId = req.params.id
    Hotplace.findByPk(hotplaceId, {
      attributes: ['id', 'name', 'type', 'address', 'phone'],
      include: {
        model: Barcode,
        attributes: ['name', 'barcode_url'],
        include: {
          model: UserBarcode,
          attributes: ['checkin', 'checkout'],
          include: {
            model: User,
            attributes: ['id', 'name', 'email', 'address', 'phone', 'no_ktp']
          }
        }
      }
    })
      .then(hotplace => {
        if (hotplace) {
          res.status(200).json(hotplace)
        } else {
          throw {
            status: 404,
            message: 'hotplace not found'
          }
        }
      })
      .catch(error => next(error))
  }
}

module.exports = ControllerAdmin