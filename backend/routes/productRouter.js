const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('All products')
})

router.get('/:id', (req, res) => {
    res.send(`Product ${req.params.id}`)
})

router.post('/', (req, res) => {
    const newProduct = req.body
    res.send('Create product')
})

router.put('/:id', (req, res) => {
    const editedProduct = req.body
    res.send(`Updating product ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    res.send(`Deleting product ${req.params.id}`)
})

module.exports = router