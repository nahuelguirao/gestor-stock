const pool = require('../../db/pool')
const { productTitleValidator } = require('../validators/validators')

exports.getProducts = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products')
        res.json(result.rows)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error fetching products.' })
    }
}

exports.getSpecificProduct = async (req, res) => {
    try {
        const paramID = req.params.id
        const query = 'SELECT * FROM products WHERE id = $1'
        const result = await pool.query(query, [paramID])

        if (result.rowCount == 0) {
            return res.status(404).json({ message: 'Product not found' })
        }

        res.json(result.rows[0])

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error getting product info.' })
    }
}

exports.createProduct = async (req, res) => {
    try {
        const { title, short_description, stock, price } = req.body
        const query = 'INSERT INTO products (title, short_description, stock, price) VALUES ($1, $2, $3, $4)'
        const values = [title, short_description, stock, price]

        if (!productTitleValidator(title)) {
            res.status(400).json({ error: 'Product title must be less than 255 characters.' })
            return
        }

        const result = await pool.query(query, values)

        if (result.rowCount == 0) {
            res.status(400).json({ error: 'Product cannot be created, check values and try again' })
            return
        }

        res.json({ message: 'Product created.' })

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error creating the product, check values and try again.' })
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const { title, short_description, stock, price } = req.body
        const values = [title, short_description, stock, price, req.params.id]
        const query = 'UPDATE products SET title = $1, short_description = $2, stock = $3, price = $4 WHERE id = $5'

        if (!productTitleValidator(title)) {
            res.status(400).json({ error: 'Product title must be less than 255 characters.' })
            return
        }

        const result = await pool.query(query, values)

        if (result.rowCount == 0) {
            return res.status(404).json({ message: 'Product not found.' })
        }

        res.json({ message: 'Product updated correctly!' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error updating product' })
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const paramID = req.params.id
        const query = 'DELETE FROM products WHERE id = $1'
        await pool.query(query, [paramID])
        res.json({ message: 'Product Deleted.' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error deleting product.' })
    }
}