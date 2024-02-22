const express = require('express')
const router = express.Router()
const { getCategories, getSpecificCategory, createCategory, updateCategory, deleteCategory } = require('./categorieControllers')

router.get('/', getCategories)

router.get('/:id', getSpecificCategory)

router.post('/', createCategory)

router.put('/:id', updateCategory)

router.delete('/:id', deleteCategory)

module.exports = router