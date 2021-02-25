const { Product, Cart, Customer} = require('../models');
const bcrypt = require('bcrypt')

class Controller {
    static homePage (req, res) {
        Product.findAll()
        .then((data) => {
            res.render('homePage', {data})
        })
        .catch((err) => res.send(err))
    }

    static register(req, res) {
        let errorMessage = ''
        if (req.query.error) errorMessage = req.query.error

        res.render("register", { errorMessage })
    }

    static registerPost(req, res) {
        const { username, email, password } = req.body
        const newData = { username, email, password }

        Customer.create(newData)
            .then((data) => res.redirect("/login"))
            .catch((err) => {
                if (err.name == "SequelizeValidationError") {
                    const errors = err.errors.map(e => e.message)
                    res.send(errors)
                } else {
                    res.send(err)
                }
            })
    }

    static login(req, res) {
        let errorMessage = ''
        if (req.query.error) errorMessage = req.query.error

        res.render('login', { errorMessage })
    }

    static loginPOST(req, res) {
        const { username, password } = req.body
        // console.log(req.body)

        Customer.findOne({ where: { username } })
            .then(cust => {
                if (cust) {
                    const isValidPassword = bcrypt.compareSync(password, cust.password)
                    // console.log(isValidPassword)

                    if (isValidPassword) {
                        req.session.custId = cust.id
                        req.session.username = cust.username
                        req.session.custEmail = cust.email

                        res.redirect('/')
                    } else {
                        res.redirect('/register?error=username dan password invalid, please register')
                    }
                } else {
                    res.redirect('/register?error=username dan password invalid, please register')
                }
            })
            .catch((err) => res.send(err))
    }

    static logout(req, res) {
        req.session.destroy()

        res.redirect('login?error=You are logged out.')
    }

    static productDetail(req, res) {
        const id = req.params.id
        Product.findByPk(id)
        .then((data) => {
            res.render('product-buy', {data})
        })
        .catch((err) => res.send(err))
    }

    static buyProduct(req, res) {
        const id = req.params.id
        const order = {
            ProductId : +id,
            CustomerId : req.session.custId,
            quantity : +req.body.quantity,
            status : false
        }
        Cart.create(order)
        .then(() => res.redirect('/'))
        .catch((err) => res.send(err))
    }

    static cartCustomer(req,res) {
        let custId = req.session.custId
        Customer.findOne({where: {id:custId}})
        .then((data) => {
            res.render('cart', {data})
        })
        .catch((err) => res.send(err))
    }

    static cancel(req, res) {
        let id = req.params.id
        Cart.destroy({where:{id}})
        .then(() => res.redirect('/cart'))
    }
}

module.exports = Controller