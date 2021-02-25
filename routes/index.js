const router = require('express').Router();
const Controller = require('../controllers')

const isLoggin = (req, res, next) => {
    if (req.session.custId) {
        console.log(req.session.username + 'login')
        next()
    } else {
        res.redirect('/login?error=Please login first')
    }
}

router.get('/', Controller.homePage)
router.get('/register', Controller.register)
router.post('/register', Controller.registerPost)
router.get('/login', Controller.login)
router.post('/login', Controller.loginPOST)
router.get('/logout', Controller.logout)
router.get('/buy/:id', Controller.productDetail)
router.post('/buy/:id', isLoggin, Controller.buyProduct)
router.get('/cart', isLoggin, Controller.cartCustomer)
router.get('/cancel/:id_product', isLoggin, Controller.cancel)

module.exports = router;