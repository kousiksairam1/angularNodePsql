# Product Management CRUD Application

## Project Overview
Full-stack CRUD application for managing products built with Angular (frontend), Node.js/Express (backend), and PostgreSQL (database).

## Current State
- **Status**: Complete and running
- **Backend**: Running on port 3000
- **Frontend**: Running on port 5000 (webview)
- **Database**: PostgreSQL with products table

## Recent Changes
- 2025-11-05: Initial project setup and implementation
  - Created Angular 18 frontend with standalone components
  - Built Node.js/Express REST API backend
  - Set up PostgreSQL database with products table
  - Implemented full CRUD operations
  - Configured workflows for both frontend and backend
  - Added sample product data

## Project Architecture

### Backend (Node.js/Express)
- **Location**: `/server/`
- **Entry Point**: `server/server.js`
- **Database**: `server/db.js` (PostgreSQL connection)
- **API Endpoints**: RESTful API for products
- **Port**: 3000
- **Dependencies**: express, pg, cors, body-parser

### Frontend (Angular)
- **Location**: `/frontend/`
- **Framework**: Angular 18 (standalone components)
- **Components**:
  - Product List: Display all products in a table
  - Product Form: Create and edit products
- **Services**: ProductService for API calls
- **Port**: 5000
- **Proxy**: Configured to proxy `/api/*` to backend on port 3000

### Database (PostgreSQL)
- **Table**: products
- **Fields**: id, name, description, price, quantity, created_at, updated_at
- **Sample Data**: 3 sample products included

## Key Features
1. View all products in a table
2. Add new products with form validation
3. Edit existing products
4. Delete products with confirmation
5. Responsive UI design
6. RESTful API architecture
7. Error handling and user feedback

## Workflows
- **backend**: Runs Node.js server on port 3000
- **frontend**: Runs Angular dev server on port 5000 with webview

## How to Use
1. The application is already running and accessible via the webview
2. Click "Add New Product" to create new products
3. Use "Edit" and "Delete" buttons in the table to manage products
4. All changes are persisted in the PostgreSQL database

## Dependencies
See `package.json` files in root and frontend directories for complete dependency lists.

## Environment Variables
- DATABASE_URL: PostgreSQL connection string
- PGHOST, PGPORT, PGUSER, PGPASSWORD, PGDATABASE: Database credentials
- SESSION_SECRET: Session management

## User Preferences
None specified yet.
