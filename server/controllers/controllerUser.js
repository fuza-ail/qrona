const { User,Hotplace,Barcode } = require('../models')
const jwt = require('jsonwebtoken')
const { checkPassword } = require('../helpers/bcrypt')
require('dotenv').config()


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
              mesasge: 'wrong password'
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
    User.findByPk(req.user.userId,{
      attributes:['no_ktp','name','email','address','status','phone']
    })
    .then(user=>{
      res.status(200).json(user)
    })
    .catch(error=> next(error))
  }

  static updateProfile(req, res, next) {
    const inputData = req.body
    User.findByPk(req.user.userId)
    .then(user=>{
      return User.update({
        name: inputData.name,
        address: inputData.address,
        phone: inputData.phone
      },{where:{id:user.id}})
    })
    .then(()=>{
      res.status(200).json({
        message: 'profile has been updated'
      })
    })
    .catch(error=>next(error))
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
    .then(hotplace=>{
      return Barcode.create({
        name: hotplace.name,
        barcode_url: inputData.barcode_url,
        HotplaceId: hotplace.id
      })
    })
    .then(barcode=>{
      res.status(201).json(barcode)
    })
    .catch(error=>next(error))
  }

  static getHotplace(req, res, next) {

  }

  static s(req, res, next) {

  }

  static s(req, res, next) {

  }

  static s(req, res, next) {

  }

}

module.exports = ControllerUser