const router = require('express').Router();
const Controller = require('../controllers')

router.get('/', Controller.homePage)
router.get('/register', Controller.register)
router.post('/register', Controller.registerPost)
router.get('/login', Controller.login)
router.post('/login', Controller.loginPOST)
router.get('/logout', Controller.logout)

module.exports = router;