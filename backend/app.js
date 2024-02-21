const express = require('express')
const morgan = require('morgan')
const productsRouter = require('./routes/productRouter')

const app = express()

app.use(morgan('dev'))

app.use('/products', productsRouter)

app.listen(3000, () => console.log('App running on port 3000.'))