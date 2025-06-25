import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart/cartSlice';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const imageSrc = product.image.startsWith('http')
    ? product.image
    : `http://localhost:5000${product.image}`;

  return (
    <div className="card shadow-sm border-0 rounded-3 h-100 d-flex flex-column align-items-center text-center">
      {/* ✅ Centered image container */}
      <div className="p-3 w-100 d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
        <img
          src={imageSrc}
          className="img-fluid"
          alt={product.name}
          style={{ maxHeight: '180px', objectFit: 'contain' }}
        />
      </div>

      {/* ✅ Card body */}
      <div className="card-body d-flex flex-column justify-content-between w-100">
        <h6 className="card-title mb-2" style={{ fontSize: '1.05rem' }}>{product.name}</h6>

        <p className="card-text fw-bold mb-2">
          ${product.discountPrice}{' '}
          <span className="text-muted text-decoration-line-through fs-6">${product.price}</span>
        </p>

        <div className="d-flex justify-content-center gap-2 mt-auto">
          <Link to={`/product/${product.id}`} className="btn btn-primary btn-sm">
            View
          </Link>
          <button
            className="btn btn-success btn-sm"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
