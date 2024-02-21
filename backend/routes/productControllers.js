const pool = require('../db/pool')

exports.getProducts = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products')
        res.json(result.rows)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error fetching products.' })
    }
}

