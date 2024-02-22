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

exports.getSpecificCategorie = async (req, res) => {
    try {
        const query = 'SELECT * FROM categories WHERE id = $1'
        const result = await pool.query(query, [req.params.id])

        if (result.rowCount == 0) {
            res.status(404).json({ message: 'Categorie not found.' })
            return
        }

        res.json(result.rows[0])

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error getting categorie.' })
    }
}

exports.createCategorie = async (req, res) => {
    try {
        const { name } = req.body

        if (!nameValidator(name)) {
            res.status(400).json({ error: 'Name must be less than 100 characters long.' })
            return
        }

        const query = 'INSERT INTO categories (name) VALUES ($1)'
        const result = await pool.query(query, [name])

        if (result.rowCount == 0) {
            res.status(400).json({ error: 'Categorie cannot be created, check values and try again.' })
            return
        }

        res.json({ message: 'Categorie created.' })

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error creating categorie.' })
    }
}

exports.updateCategorie = async (req, res) => {
    try {
        const { name } = req.body
        const query = 'UPDATE categories SET name = $1 WHERE id = $2'

        if (!nameValidator(name)) {
            res.status(400).json({ error: 'Name must be less than 100 characters long.' })
            return
        }

        const result = await pool.query(query, [name, req.params.id])

        if (result.rowCount == 0) {
            res.status(404).json({ message: 'Categorie not found' })
            return
        }

        res.json({ message: 'Categorie updated correctly.' })

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error updating categorie.' })
    }
}

exports.deleteCategorie = async (req, res) => {
    try {
        const query = 'DELETE FROM categories WHERE id = $1'
        const result = await pool.query(query, [req.params.id])

        if (result.rowCount == 0) {
            res.status(404).json({ message: 'Categorie not found.' })
            return
        }

        res.json({ message: 'Product deleted.' })

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error deleting categorie.' })
    }
}