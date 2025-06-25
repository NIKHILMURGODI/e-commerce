const express = require('express');
const router = express.Router();
const { Order, OrderItem } = require('../models');

router.post('/', async (req, res) => {
  const { customerName, customerEmail, customerAddress, mobileNumber, items } = req.body;

  try {
    const order = await Order.create({ customerName, customerEmail, customerAddress, mobileNumber});

    const orderItems = items.map(item => ({
      orderId: order.id,
      productId: item.productId,
      quantity: item.quantity,
    }));

    await OrderItem.bulkCreate(orderItems);
    res.json({ message: 'Order placed', orderId: order.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
