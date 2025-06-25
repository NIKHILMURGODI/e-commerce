'use strict';
const {
  Model
} = require('sequelize');
// models/order.js
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    customerName: DataTypes.STRING,
    customerEmail: DataTypes.STRING,
    customerAddress: DataTypes.STRING,
    mobileNumber: DataTypes.STRING,
  });

  Order.associate = function(models) {
    Order.hasMany(models.OrderItem, { foreignKey: 'orderId' });
  };

  return Order;
};
