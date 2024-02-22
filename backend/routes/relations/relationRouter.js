const express = require('express')
const router = express.Router()
const { addCategory, deleteCategory, getProductCategories, getAllProductsFromCategory } = require('./relationControllers')

router.post('/:productId/add-category/:categoryId', addCategory)

router.delete('/:productId/delete-category/:categoryId', deleteCategory)

router.get('/:productId/get-categories', getProductCategories)

router.get('/:categoryId/get-products', getAllProductsFromCategory)


module.exports = router