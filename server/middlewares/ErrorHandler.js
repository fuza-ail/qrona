function errorHandler(err, req, res, next) {
  console.log(err)
  if (err.name) {
    switch (err.name) {
      case 'SequelizeValidationError':
        if(err.errors[0].validatorKey === 'notEmpty'){
          res.status(400).json({
            message: `${err.errors[0].path} can not be emtpy!`
          })
        }
      case 'SequelizeUniqueConstraintError':
        res.status(400).json({
          message: `${err.errors[0].value} already exist!`
        })
        break;
    }
  } else if (err.message) {
    res.status(err.status).json({
      message: err.message
    })
  }
  res.status(500).json({
    message: 'Internal server error!'
  })
}

module.exports = errorHandler