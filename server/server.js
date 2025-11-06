require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();

app.use(cors());
app.use(express.json());

// request logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  if (req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE') console.log('Body:', req.body);
  next();
});

app.get('/api/products', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM products');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/products', async (req, res) => {
  const { name, description, price, quantity } = req.body;
  if (!name || price === undefined || price === null) {
    return res.status(400).json({ error: 'name and price are required' });
  }
  const parsedPrice = Number(price);
  const parsedQuantity = quantity === undefined ? 0 : parseInt(quantity, 10);
  if (Number.isNaN(parsedPrice) || Number.isNaN(parsedQuantity)) {
    return res.status(400).json({ error: 'Invalid price or quantity' });
  }
  try {
    const insertQuery = `
      INSERT INTO products (name, description, price, quantity)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const { rows } = await db.query(insertQuery, [name, description || null, parsedPrice, parsedQuantity]);
    return res.status(201).json(rows[0]);
  } catch (err) {
    console.error('Error creating product:', err);
    return res.status(500).json({ error: 'Internal server error', details: err.message });
  }
});

app.delete('/api/products/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid product id' });

  try {
    const { rows } = await db.query('DELETE FROM products WHERE id = $1 RETURNING *;', [id]);
    if (!rows || rows.length === 0) return res.status(404).json({ error: 'Product not found' });
    return res.json({ message: 'Product deleted', product: rows[0] });
  } catch (err) {
    console.error('Error deleting product:', err);
    return res.status(500).json({ error: 'Internal server error', details: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
