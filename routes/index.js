const router = require('express').Router();
const Controller = require('../controllers')

router.get('/', Controller.homePage)

module.exports = router;