# How to Download the Source Code

This project is ready to download and use on your local machine.

## Option 1: Download from Replit

1. Click on the **three dots menu** (⋮) in the top left corner of the Replit interface
2. Select **Download as zip**
3. Save the file to your computer
4. Extract the zip file

## Option 2: Clone via Git (if available)

If you have Git access to this Replit, you can clone the repository:

```bash
git clone <your-replit-git-url>
```

## After Downloading

Once you have the source code on your local machine:

### 1. Install Dependencies

**Backend:**
```bash
npm install
```

**Frontend:**
```bash
cd frontend
npm install
cd ..
```

### 2. Set Up Your Local Database

Make sure PostgreSQL is installed on your machine, then:

1. Create a new database:
```bash
createdb products_db
```

2. Run the migration script:
```bash
psql products_db < server/migrations/001_create_products_table.sql
```

Or connect to your database and run the SQL manually from the migration file.

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/products_db
PORT=3000
```

Replace `username` and `password` with your PostgreSQL credentials.

### 4. Run the Application

**Start the Backend (Terminal 1):**
```bash
npm start
```

**Start the Frontend (Terminal 2):**
```bash
cd frontend
npm start
```

The application will be available at:
- Frontend: http://localhost:5000
- Backend API: http://localhost:3000

## Project Structure

```
product-crud-app/
├── frontend/              # Angular frontend
│   ├── src/
│   ├── package.json
│   └── angular.json
├── server/                # Node.js backend
│   ├── server.js
│   ├── db.js
│   └── migrations/
├── package.json           # Backend dependencies
└── README.md              # Full documentation
```

## What's Included

✅ Complete Angular frontend with components
✅ Node.js/Express REST API backend
✅ PostgreSQL database schema and migrations
✅ Full CRUD operations for products
✅ Form validation
✅ Responsive UI design
✅ Complete documentation

## Troubleshooting

**Port Already in Use:**
- Change the port in the `.env` file or start script
- Frontend: Modify port in `frontend/package.json` start script
- Backend: Modify port in `.env` or `server/server.js`

**Database Connection Error:**
- Verify PostgreSQL is running: `pg_isready`
- Check DATABASE_URL in `.env`
- Ensure database exists and user has permissions

**Dependencies Not Installing:**
- Make sure Node.js v20+ is installed: `node --version`
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`, then reinstall

## Need Help?

Refer to the README.md file for detailed information about:
- API endpoints
- Database schema
- Development workflow
- Feature list

Happy coding! 🚀
