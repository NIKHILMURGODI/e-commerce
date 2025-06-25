const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const productRoutes = require('./routes/product.routes');
const orderRoutes = require('./routes/order.routes');
const categoryRoutes = require('./routes/category.routes'); 

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/uploads', express.static('uploads'));
app.use('/categories', categoryRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('E-commerce API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);

  // Sequelize connection test
  const { sequelize } = require('./models');
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
