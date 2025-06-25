import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { clearCart } from '../redux/cart/cartSlice';

export default function CheckoutPage() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', email: '', address: '', mobile: '' });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = async () => {
    if (cartItems.length === 0) {
      alert("🛒 Your cart is empty!");
      return;
    }

    const order = {
      customerName: form.name,
      customerEmail: form.email,
      customerAddress: form.address,
      mobileNumber: form.mobile,
      items: cartItems.map(item => ({
        productId: item.id,
        quantity: item.quantity,
        name: item.name,
        price: item.discountPrice,
        image: item.image
      }))
    };

    try {
      await axios.post('http://localhost:5000/orders', order);
      setOrderDetails({ ...order });
      setOrderPlaced(true);
      dispatch(clearCart());
    } catch (error) {
      alert('❌ Order failed. Please try again.');
      console.error(error);
    }
  };

  const getImageSrc = (path) =>
    path?.startsWith('http') ? path : `http://localhost:5000${path}`;

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 mx-auto" style={{ maxWidth: '600px' }}>
        <h2 className="text-center mb-4">📜 Checkout</h2>

        {!orderPlaced ? (
          <>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Your Email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="mobile"
                placeholder="Mobile Number"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="address"
                placeholder="Delivery Address"
                onChange={handleChange}
              />
            </div>

            <div className="bg-light p-3 rounded mb-3">
              <h5>🛒 Order Summary</h5>
              {cartItems.length === 0 ? (
                <p className="text-muted">No items in cart.</p>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} className="d-flex align-items-center mb-2">
                    <img
                      src={getImageSrc(item.image)}
                      alt={item.name}
                      className="me-2 rounded"
                      style={{ width: 60, height: 60, objectFit: 'cover' }}
                    />
                    <span>{item.name} × {item.quantity} = ${item.quantity * item.discountPrice}</span>
                  </div>
                ))
              )}
            </div>

            <button className="btn btn-success w-100" onClick={placeOrder}>
              ✅ Place Order
            </button>
          </>
        ) : (
          <>
            <h4 className="text-success text-center">🎉 Order Placed Successfully!</h4>
            <div className="mt-4">
              <p><strong>Name:</strong> {orderDetails.customerName}</p>
              <p><strong>Email:</strong> {orderDetails.customerEmail}</p>
              <p><strong>Mobile:</strong> {orderDetails.mobileNumber}</p>
              <p><strong>Address:</strong> {orderDetails.customerAddress}</p>

              <div className="bg-light p-3 rounded mt-3">
                <h5>🛒 Ordered Items</h5>
                {orderDetails.items.map((item, index) => (
                  <div key={index} className="d-flex align-items-center mb-2">
                    <img
                      src={getImageSrc(item.image)}
                      alt={item.name}
                      className="me-2 rounded"
                      style={{ width: 60, height: 60, objectFit: 'cover' }}
                    />
                    <span>{item.name} × {item.quantity} = ${item.quantity * item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
