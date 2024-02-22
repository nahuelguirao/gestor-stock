const pool = require('../../db/pool')
const { nameValidator } = require('../validators/validators')

exports.getCategories = async (req, res) => {
    try {
        const query = 'SELECT * FROM categories'
        const result = await pool.query(query)
        res.json(result.rows)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error fecthing categories.' })
    }
}

exports.getSpecificCategory = async (req, res) => {
    try {
        const query = 'SELECT * FROM categories WHERE id = $1'
        const result = await pool.query(query, [req.params.id])

        if (result.rowCount == 0) {
            res.status(404).json({ message: 'Category not found.' })
            return
        }

        res.json(result.rows[0])

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error getting category.' })
    }
}

exports.createCategory = async (req, res) => {
    try {
        const { name } = req.body

        if (!nameValidator(name)) {
            res.status(400).json({ error: 'Name must be less than 100 characters long.' })
            return
        }

        const query = 'INSERT INTO categories (name) VALUES ($1)'
        const result = await pool.query(query, [name])

        if (result.rowCount == 0) {
            res.status(400).json({ error: 'Category cannot be created, check values and try again.' })
            return
        }

        res.json({ message: 'Category created.' })

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error creating category.' })
    }
}

exports.updateCategory = async (req, res) => {
    try {
        const { name } = req.body
        const query = 'UPDATE categories SET name = $1 WHERE id = $2'

        if (!nameValidator(name)) {
            res.status(400).json({ error: 'Name must be less than 100 characters long.' })
            return
        }

        const result = await pool.query(query, [name, req.params.id])

        if (result.rowCount == 0) {
            res.status(404).json({ message: 'Category not found' })
            return
        }

        res.json({ message: 'Category updated correctly.' })

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error updating category.' })
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const query = 'DELETE FROM categories WHERE id = $1'
        const result = await pool.query(query, [req.params.id])

        if (result.rowCount == 0) {
            res.status(404).json({ message: 'Category not found.' })
            return
        }

        res.json({ message: 'Category deleted.' })

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error deleting category.' })
    }
}