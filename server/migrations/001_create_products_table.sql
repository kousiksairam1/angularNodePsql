-- Migration: Create products table
-- Description: Creates the products table with all necessary fields for the CRUD application
-- Date: 2025-11-05

CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  quantity INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Optional: Insert sample data
INSERT INTO products (name, description, price, quantity) VALUES 
  ('Laptop', 'High-performance laptop for business and gaming', 1299.99, 15),
  ('Smartphone', 'Latest model smartphone with advanced features', 799.99, 30),
  ('Headphones', 'Noise-canceling wireless headphones', 249.99, 50)
ON CONFLICT DO NOTHING;
