# 🛍️ E-Commerce Web Application

A full-stack e-commerce app where users can browse categories and products, add items to the cart, and proceed to checkout.  
**Built with:**
- **Frontend:** React, Redux Toolkit, Bootstrap 5
- **Backend:** Node.js, Express, Sequelize, MySQL

---

## 📁 Folder Structure

```
ecommerce-app/
├── backend/        # Node.js + Express + Sequelize
└── frontend/       # React + Redux + Bootstrap
```

---

## ⚙️ Step-by-Step Setup Instructions

### ✅ 1. Clone the Repository
```bash
git clone https://github.com/NIKHILMURGODI/e-commerce.git
cd ecommerce-app
```

---

## 🚀 Backend Setup

### 🔹 Step 1: Move to the backend folder
```bash
cd backend
```

### 🔹 Step 2: Install dependencies
```bash
npm install
```

### 🔹 Step 3: Setup the database

Make sure MySQL is running and you’ve created a database in `.env`.

Then run:

```bash
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
```

These will:
- Create the database
- Run all schema migrations
- Seed sample data (products, categories, etc.)

### 🔹 Step 4: Start the backend server
```bash
node app.js
```

Your backend will start at:  
**http://localhost:5000**

---

## 💻 Frontend Setup

### 🔹 Step 1: Open a new terminal and move to the frontend folder
```bash
cd frontend
```

### 🔹 Step 2: Install dependencies
```bash
npm install
```

### 🔹 Step 3: Start the React app
```bash
npm start
```

Your frontend will run at:  
**http://localhost:3000**

---

## ✅ Ready!

Visit [http://localhost:3000](http://localhost:3000) to browse the app.  
Your frontend will communicate with the backend API running at [http://localhost:5000](http://localhost:5000).

---

## 🧪 Features

- View products by category
- Product details page
- Add to cart
- Checkout (basic)
- Dynamic category & product management (via Sequelize seeders)


## 👨‍💻 Author

Built by **Nikhil Shivkumar Murgodi**



