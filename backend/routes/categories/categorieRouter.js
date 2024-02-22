const express = require('express')
const router = express.Router()
const { getCategories, getSpecificCategorie, createCategorie, updateCategorie, deleteCategorie } = require('./categorieControllers')

router.get('/', getCategories)

router.get('/:id', getSpecificCategorie)

router.post('/', createCategorie)

router.put('/:id', updateCategorie)

router.delete('/:id', deleteCategorie)

module.exports = router