const pool = require('../../db/pool')

exports.addCategory = async (req, res) => {
    try {
        const { productId, categoryId } = req.params

        //Verfies if the category id (req.body) is in a valid format
        if (!Number.isInteger(parseInt(productId)) || !Number.isInteger(parseInt(categoryId))) {
            res.status(400).json({ error: 'Invalid category ID format.' })
            return
        }

        //Verifies if the category exists
        const categoryCount = await pool.query('SELECT COUNT(*) FROM categories WHERE id = $1', [categoryId])

        if (categoryCount.rows[0].count === '0') {
            res.status(404).json({ error: 'Category not found' })
            return
        }

        //Creates relation
        const query = 'INSERT INTO product_categories (product_id, category_id) VALUES ($1, $2)'
        const result = await pool.query(query, [productId, categoryId])

        if (result.rowCount == 0) {
            res.status(500).json({ error: 'Failed to add category to product.' })
            return
        }

        res.json({ message: 'Category added!' })

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error.' })
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const { productId, categoryId } = req.params

        if (!Number.isInteger(parseInt(productId)) || !Number.isInteger(parseInt(categoryId))) {
            res.status(400).json({ error: 'Invalid product or category ID format.' })
            return
        }

        const query = 'DELETE FROM product_categories WHERE product_id = $1 AND category_id = $2'
        const result = await pool.query(query, [productId, categoryId])

        if (result.rowCount == 0) {
            res.status(404).json({ error: 'Relation not found.' })
            return
        }

        res.json({ message: 'Product - category relation removed.' })

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error deleting product category' })
    }
}

exports.getProductCategories = async (req, res) => {
    try {
        const productId = req.params.productId

        if (!Number.isInteger(parseInt(productId))) {
            res.status(400).json({ error: 'Invalid product ID format.' })
            return
        }

        const query =
            `SELECT c.*
            FROM categories c
            JOIN product_categories pc ON c.id = pc.category_id
            WHERE pc.product_id = $1 `

        const result = await pool.query(query, [productId])

        res.json(result.rows)

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error.' })
    }
}

exports.getAllProductsFromCategory = async (req, res) => {
    try {
        const categoryId = req.params.categoryId

        if (!Number.isInteger(parseInt(categoryId))) {
            res.status(400).json({ error: 'Invalid Category ID format.' })
            return
        }

        const query =
            `SELECT p.*
            FROM products p
            JOIN product_categories pc ON p.id = pc.product_id
            WHERE pc.category_id = $1`

        const result = await pool.query(query, [categoryId])

        if (result.rowCount == 0) {
            res.json([])
            return
        }

        res.json(result.rows)

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error.' })
    }
}