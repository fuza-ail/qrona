const routerAdmin = require('express').Router();
const controllerAdmin = require('../controllers/controllerAdmin');
const authentication = require('../middlewares/authentication');

routerAdmin.post('/loginadmin',controllerAdmin.loginAdmin);
routerAdmin.get('/users',authentication,controllerAdmin.getUsers);
routerAdmin.get('/users/:id',authentication,controllerAdmin.getUser);
routerAdmin.put('/users/:id',authentication,controllerAdmin.updateUserStatus);
routerAdmin.get('/reghotplace',authentication,controllerAdmin.getHotplaces);
routerAdmin.get('/reghotplace/:id',authentication,controllerAdmin.getHotplace);

module.exports = routerAdmin