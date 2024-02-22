const express = require('express')
const router = express.Router()
const { getProducts, getSpecificProduct, createProduct, deleteProduct, updateProduct } = require('./productControllers')

router.get('/', getProducts)

router.get('/:id', getSpecificProduct)

router.post('/', createProduct)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)

module.exports = router