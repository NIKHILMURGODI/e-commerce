import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">🛍️ All Products</h2>
      
      <div className="row g-4">
        
        {products.map(product => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-4">
            <div className="product-card-wrapper">
              <ProductCard product={product} />
            </div>
          </div>
        ))}

        {products.length === 0 && (
          <div className="col-12">
            <p className="text-center text-muted">No products available.</p>
          </div>
        )}
      </div>
    </div>
  );
}

