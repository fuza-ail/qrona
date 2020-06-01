const { User, Hotplace, Barcode, UserBarcode } = require('../models')
const jwt = require('jsonwebtoken')
const { checkPassword } = require('../helpers/bcrypt');
require('dotenv').config();
const { Op } = require('sequelize');

class ControllerAdmin{
  
  static loginAdmin(req,res,next){
    const inputData = req.body
    User.findOne({
      where: {
        [Op.and]:[
          {type: 'admin'},
          {email: inputData.email}
        ]
      }
    })
    .then(admin=>{
      if(admin){
        if(checkPassword(inputData.password,admin.password)){
          let token = jwt.sign({
            userId: admin.id,
            userEmail: admin.email
          }, process.env.TOKEN_KEY)
          res.status(200).json({
            access_token: token
          })
        }else{
          throw {
            status: 400,
            message: 'wrong password'
          }
        }
      }else{
        throw {
          status: 404,
          message: 'admin not found'
        }
      }
    })
    .catch(error=>next(error))
  }

  static getUsers(req,res,next){
    User.findAll({
      attributes:['id','no_ktp','name','email','address','status','phone']
    })
    .then(users=>{
      res.status(200).json(users)
    })
    .catch(error=> next(error))
  }

  static getUser(req,res,next){
    const userId = req.params.id
    User.findByPk(userId,{
      attributes:['no_ktp','name','email','address','status','phone'],
      include: {
        model: UserBarcode,
        attributes: ['checkin','checkout'],
        include:{
          model: Barcode,
          attributes:['name','barcode_url'],
          include: {
            model: Hotplace,
            attributes: ['name','type','address','phone']
          }
        }
      }
    })
    .then(user=>{
      res.status(200).json(user)
    })
    .catch(error=>next(error))
  }

  static updateUserStatus(req,res,next){
    
  }

  static getHotplaces(req,res,next){
    
  }

  static getHotplace(req,res,next){
    
  }
}

module.exports = ControllerAdmin