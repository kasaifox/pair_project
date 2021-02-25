const express = require('express')
const app = express()
const PORT = 3000
const router = require('./routes');


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use('/', router)

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
})