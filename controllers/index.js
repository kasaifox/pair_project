const { Product, Cart, Customer} = require('../models');

class Controller {
    static homePage (req, res) {
        Product.findAll()
        .then((data) => {
            res.render('homePage', {data})
        })
        .catch((err) => res.send(err))
    }
}

module.exports = Controller