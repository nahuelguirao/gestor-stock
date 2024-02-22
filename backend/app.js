//Modules imports
const express = require('express')
const morgan = require('morgan')

//Routers imports
const productsRouter = require('./routes/products/productRouter')
const categoriesRouter = require('./routes/categories/categorieRouter')
const addCategoryRouter = require('./routes/relations/relationRouter')

//Main app initialized
const app = express()

//Middlewares
app.use(morgan('dev'))
app.use(express.json())

//Routes
app.use('/products', productsRouter)
app.use('/categories', categoriesRouter)
app.use('/product-categories', addCategoryRouter)

//App listener
app.listen(3000, () => console.log('App running on port 3000.'))