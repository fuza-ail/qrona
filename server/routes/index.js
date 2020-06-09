const router = require('express').Router();
const routerAdmin = require('./routerAdmin');
const routerUser = require('./routerUser');
const errorHandler = require('../middlewares/ErrorHandler')

router.use(routerAdmin);
router.use(routerUser);
router.use(errorHandler)


module.exports = router