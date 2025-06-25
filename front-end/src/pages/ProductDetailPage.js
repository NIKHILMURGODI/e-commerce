import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addToCart } from '../redux/cart/cartSlice';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [categoryName, setCategoryName] = useState('');

  // ✅ Fetch product by ID
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then(res => {
        setProduct(res.data);

        // Fetch category name after product is loaded
        return axios.get(`http://localhost:5000/categories/${res.data.categoryId}`);
      })
      .then(categoryRes => {
        setCategoryName(categoryRes.data.name);
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleBuyNow = () => {
    dispatch(addToCart({ ...product, quantity }));
    navigate('/checkout');
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  if (!product) {
    return <p className="text-center mt-5 text-muted">Loading...</p>;
  }

  const imageSrc = product.image?.startsWith('http')
    ? product.image
    : `http://localhost:5000${product.image}`;

  return (
    <div className="container my-4">
      {/* Breadcrumb */}
      <nav className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none text-primary">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link
              to={`/category/${product.categoryId}`}
              className="text-decoration-none text-primary"
            >
              {categoryName || 'Category'}
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {product.name}
          </li>
        </ol>
      </nav>

      {/* Product Section */}
      <div className="card shadow p-4">
        <div className="row g-4 align-items-start">
          <div className="col-md-5 text-center">
            <img
              src={imageSrc}
              alt={product.name}
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
          </div>
          <div className="col-md-7">
            <h2 className="mb-2">{product.name}</h2>
            <p className="text-muted">
              {product.description || 'Unzip It, Unroll It And PARTY!'}
            </p>

            <div className="mb-3">
              <span className="text-muted text-decoration-line-through me-2">${product.price}</span>
              <span className="text-success fw-bold fs-4">${product.discountPrice}</span>
            </div>

            <div className="mb-3">
              <label htmlFor="quantity" className="form-label fw-semibold">Quantity:</label>
              <select
                id="quantity"
                className="form-select w-auto"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              >
                {[...Array(10).keys()].map(num => (
                  <option key={num + 1} value={num + 1}>{num + 1}</option>
                ))}
              </select>
            </div>

            <div className="d-flex gap-2">
              <button className="btn btn-primary" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <button className="btn btn-warning" onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
