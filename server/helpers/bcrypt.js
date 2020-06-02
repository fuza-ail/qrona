const bcrypt = require('bcryptjs');

function hashPassword(password){
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash
}

function checkPassword(inputPassword, hash){
  return bcrypt.compareSync(inputPassword, hash);
}

module.exports = {hashPassword,checkPassword}