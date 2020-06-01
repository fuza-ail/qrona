const { User } = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config()

function authentication(req, res, next) {
  try {
    const token = req.headers.access_token;
    if (token) {
      jwt.verify(token, process.env.TOKEN_KEY, function (err, decoded) {
        if (err) {
          throw {
            status: 400,
            message: 'Access token invalid'
          }
        }

        User.findOne({ where: { id: decoded.userId } })
          .then(data => {
            if (data) {
              req.user = decoded
              next()
            } else {
              throw {
                status: 404,
                message: 'User not found'
              }
            }
          })
          .catch(error => {
            next(error)
          })
      })
    } else {
      throw {
        status: 404,
        message: 'Access token not found'
      }
    }
  } catch (error) {
    next(error)
  }
}

module.exports = authentication