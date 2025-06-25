import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updateQuantity } from '../redux/cart/cartSlice';

export default function CartPage() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const getImageSrc = (imgPath) =>
    imgPath.startsWith('http') ? imgPath : `http://localhost:5000${imgPath}`;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.discountPrice * item.quantity,
    0
  );

  return (
    <div className="container my-5 p-4 bg-white rounded shadow-sm">
      <h2 className="mb-4 border-bottom pb-3">
        <i className="bi bi-cart-fill me-2"></i>Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="fs-5 text-muted">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="d-flex justify-content-between align-items-center bg-light rounded p-3 mb-3 shadow-sm">
              <div className="d-flex align-items-center gap-3">
                <img
                  src={getImageSrc(item.image)}
                  alt={item.name}
                  className="rounded"
                  style={{ width: 60, height: 60, objectFit: 'cover' }}
                />
                <div>
                  <div className="fw-semibold">{item.name}</div>
                  <div className="text-muted">
                    ${item.discountPrice} × {item.quantity} = ${item.discountPrice * item.quantity}
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() =>
                    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                  }
                >
                  +
                </button>
                {item.quantity > 1 && (
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() =>
                      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                    }
                  >
                    −
                  </button>
                )}
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Subtotal and Checkout Row */}
          <div className="d-flex justify-content-between align-items-center mt-4">
            <div className="fw-bold fs-5">Subtotal: ${subtotal}</div>
            <Link to="/checkout">
              <button className="btn btn-success fw-bold px-4">Proceed to Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
