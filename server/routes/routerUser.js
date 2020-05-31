const routerUser = require('express').Router();
const ControllerUser = require('../controllers/controllerUser');
const authentication = require('../middlewares/authenticationUser')

routerUser.post('/register',ControllerUser.register);
routerUser.post('/login',ControllerUser.login);
routerUser.get('/user',authentication, ControllerUser.getProfile);
routerUser.put('/user',authentication,ControllerUser.updateProfile);
routerUser.post('/hotplace',authentication,ControllerUser.addHotplace);
routerUser.get('/hotplace', authentication,ControllerUser.getHotplace);


module.exports = routerUser