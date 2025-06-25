# 🛍️ E-Commerce Web Application

A full-stack e-commerce web app where users can browse categories and products, add items to the cart, and proceed to checkout. Built with React on the frontend and Node.js + Sequelize + MySQL on the backend.

---

## 🚀 Tech Stack

| Layer      | Tech                                 |
|------------|--------------------------------------|
| Frontend   | React, Redux Toolkit, Bootstrap 5    |
| Backend    | Node.js, Express.js, Sequelize ORM   |
| Database   | MySQL                                |
| Styling    | Bootstrap 5, Custom CSS              |

---

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (>= 18)
- npm 
- MySQL installed and running
- Sequelize CLI installed globally (optional for migrations/seeding)

---

## ⚙️ Backend Setup (Node.js + Express + Sequelize)

### Step 1: Navigate to Backend Folder

```bash
cd backend
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Configure Environment

Create a .env file:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=ecommerce
DB_DIALECT=mysql
```

### Step 4: Initialize Database

```bash
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
```

### Step 5: Run the Backend Server

```bash
npm run dev
```

Backend runs at: http://localhost:5000

---

## 🎨 Frontend Setup (React)

### Step 1: Navigate to Frontend Folder

```bash
cd ../frontend
```

### Step 2: Install Dependencies

```bash
npm install
```

 React-Redux:

```bash
npm install redux react-redux
```

 Redux Toolkit:
```bash
npm install @reduxjs/toolkit
```

### Step 3: Run the Frontend Server

```bash
npm start
```

Frontend runs at: http://localhost:3000

---

## 🔌 API Usage Guide

Base URL: http://localhost:5000

### 🔹 Categories

| Endpoint       | Method | Description             |
|----------------|--------|-------------------------|
| /categories    | GET    | List all categories     |
| /categories/:id| GET    | Get category by ID      |

### 🔹 Products

| Endpoint                    | Method | Description               |
|-----------------------------|--------|---------------------------|
| /products                   | GET    | List all products         |
| /products/:id               | GET    | Get product details       |
| /products/by-category/:id  | GET    | Products in a category    |

### 🔹 Orders

| Endpoint   | Method | Description         |
|------------|--------|---------------------|
| /orders    | POST   | Place a new order   |

---

## 🧪 Sample User Flow

1. Browse products via category listing.
2. Click a product to view details.
3. Select quantity, add to cart.
4. View cart, adjust quantities, and proceed to checkout.
5. Place order.

---

## 📂 Folder Structure

📁 backend  
├── config  
├── controllers  
├── models  
├── routes  
├── seeders  
├── migrations  
├── app.js  
├── .env  
└── package.json  

📁 frontend  
├── public  
├── src  
│   ├── components  
│   ├── pages  
│   ├── redux  
│   ├── App.js  
│   └── index.js  
├── .env  
└── package.json  

---

## ⚙️ Step-by-Step Development Guide

### 🛠️ Backend Setup

```bash
mkdir backend && cd backend
npm init -y
npm install express sequelize sequelize-cli mysql2 dotenv body-parser cors
npx sequelize init
```

### .env File

```env
DB_NAME=ecommerce
DB_USER=root
DB_PASS=password
DB_HOST=localhost
DB_DIALECT=mysql
```

### Sequelize config/config.js

```js
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
};
```

### Models & Migrations

```bash
npx sequelize model:generate --name Category --attributes name:string
npx sequelize model:generate --name Product --attributes name:string,image:string,price:float,discountPrice:float,categoryId:integer
npx sequelize model:generate --name Order --attributes customerName:string,customerEmail:string,customerAddress:string
npx sequelize model:generate --name OrderItem --attributes orderId:integer,productId:integer,quantity:integer
npx sequelize db:migrate
```

### Seeder

```bash
npx sequelize seed:generate --name seed-categories
npx sequelize db:seed:all
```

### Express Server (app.js)

Include bodyParser, CORS, and setup routes.

### APIs

- POST /products, PUT /products/:id, DELETE /products/:id
- GET /products, GET /products/:id
- POST /orders

### 🌐 Frontend Setup

```bash
npx create-react-app frontend
cd frontend
npm install redux react-redux redux-saga axios react-router-dom
```

### React Features

- Product Listing
- Product Details
- Cart Page (update/remove items)
- Order Form (Name, Email, Address)

---

## 🚧 Improvements

- Add authentication (JWT)
- Order history
- Payment integration
- Admin panel

---

## 👨‍💻 Author

Built by **Nikhil Shivkumar Murgodi**
GitHub: https://github.com/NIKHILMURGODI/e-commerce.git