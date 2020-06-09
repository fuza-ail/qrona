const routerUser = require('express').Router();
const ControllerUser = require('../controllers/controllerUser');
const authentication = require('../middlewares/authentication')

routerUser.post('/register',ControllerUser.register);
routerUser.post('/login',ControllerUser.login);
routerUser.get('/user',authentication, ControllerUser.getProfile);
routerUser.put('/user',authentication,ControllerUser.updateProfile);
routerUser.post('/hotplace',authentication,ControllerUser.addHotplace);
routerUser.get('/hotplace', authentication,ControllerUser.getHotplace);
routerUser.get('/hotplace/:id',authentication,ControllerUser.getBarcode);
routerUser.delete('/hotplace/:id',authentication,ControllerUser.deleteHotplace);
// routerUser.get('/download/:id',authentication,ControllerUser.downloadBarcode);
routerUser.post('/checkin',authentication,ControllerUser.checkIn)
routerUser.put('/checkout/:id',authentication,ControllerUser.checkOut)


module.exports = routerUser