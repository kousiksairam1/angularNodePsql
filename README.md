# Product Management CRUD Application

A full-stack CRUD (Create, Read, Update, Delete) application for managing products built with Angular, Node.js, Express, and PostgreSQL.

## Features

- **Product Listing**: View all products in a clean, organized table
- **Add New Product**: Create new products with name, description, price, and quantity
- **Edit Product**: Update existing product information
- **Delete Product**: Remove products with confirmation dialog
- **Form Validation**: Client-side and server-side validation
- **Responsive Design**: Works on desktop and mobile devices
- **RESTful API**: Clean API endpoints for all CRUD operations

## Technology Stack

### Frontend
- **Angular 18**: Modern TypeScript-based frontend framework
- **Reactive Forms**: Form handling and validation
- **HttpClient**: API communication
- **Router**: Navigation between pages

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **PostgreSQL**: Relational database
- **CORS**: Cross-origin resource sharing

## Project Structure

```
.
├── frontend/                   # Angular frontend application
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── product-list/       # Product listing component
│   │   │   │   └── product-form/       # Product form component
│   │   │   ├── models/
│   │   │   │   └── product.model.ts    # Product interface
│   │   │   ├── services/
│   │   │   │   └── product.service.ts  # Product API service
│   │   │   ├── app.component.ts        # Root component
│   │   │   └── app.routes.ts           # Application routes
│   │   ├── index.html                  # Main HTML file
│   │   ├── main.ts                     # Application entry point
│   │   └── styles.css                  # Global styles
│   ├── angular.json                    # Angular configuration
│   ├── package.json                    # Frontend dependencies
│   └── proxy.conf.json                 # Development proxy config
│
├── server/                     # Node.js backend
│   ├── db.js                   # Database connection
│   └── server.js               # Express server and API routes
│
└── package.json                # Backend dependencies
```

## API Endpoints

### Products

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a single product by ID
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

### Request/Response Examples

**Create Product (POST /api/products)**
```json
{
  "name": "Laptop",
  "description": "High-performance laptop",
  "price": 1299.99,
  "quantity": 15
}
```

**Response**
```json
{
  "id": 1,
  "name": "Laptop",
  "description": "High-performance laptop",
  "price": 1299.99,
  "quantity": 15,
  "created_at": "2025-11-05T12:00:00.000Z",
  "updated_at": "2025-11-05T12:00:00.000Z"
}
```

## Database Schema

### Products Table

| Column | Type | Description |
|--------|------|-------------|
| id | SERIAL | Primary key |
| name | VARCHAR(255) | Product name (required) |
| description | TEXT | Product description |
| price | DECIMAL(10,2) | Product price (required) |
| quantity | INTEGER | Stock quantity (default: 0) |
| created_at | TIMESTAMP | Creation timestamp |
| updated_at | TIMESTAMP | Last update timestamp |

## Installation & Setup

### Prerequisites
- Node.js (v20 or higher)
- PostgreSQL database
- npm or yarn

### Steps

1. **Install Backend Dependencies**
```bash
npm install
```

2. **Install Frontend Dependencies**
```bash
cd frontend
npm install
cd ..
```

3. **Set Up Environment Variables**

Create a `.env` file in the root directory or ensure these environment variables are set:
```
DATABASE_URL=postgresql://username:password@host:port/database
```

4. **Create Database Table**

Connect to your PostgreSQL database and run:
```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  quantity INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

5. **Start the Backend Server**
```bash
npm start
```
The backend will run on `http://localhost:3000`

6. **Start the Frontend Development Server**
```bash
cd frontend
npm start
```
The frontend will run on `http://localhost:5000`

## Usage

1. Open your browser and navigate to `http://localhost:5000`
2. You'll see the Product Management System dashboard
3. Click "Add New Product" to create a new product
4. Fill in the product details and click "Create Product"
5. View all products in the table
6. Click "Edit" to modify a product
7. Click "Delete" to remove a product (with confirmation)

## Development

### Backend Development
- The backend server runs on port 3000
- API routes are defined in `server/server.js`
- Database queries use the `pg` PostgreSQL client
- CORS is enabled for cross-origin requests

### Frontend Development
- The Angular app runs on port 5000
- Components are standalone (no NgModule required)
- Uses Angular Reactive Forms for form handling
- HTTP requests are proxied to the backend via `proxy.conf.json`

## Features to Add (Future Enhancements)

- Product search and filtering
- Pagination for large datasets
- Product image upload
- Product categories
- Export to CSV/Excel
- User authentication and authorization
- Inventory tracking and alerts
- Product history/audit trail

## License

MIT License - feel free to use this project for learning or commercial purposes.

## Author

Created as a demonstration of full-stack CRUD application development with Angular, Node.js, and PostgreSQL.
