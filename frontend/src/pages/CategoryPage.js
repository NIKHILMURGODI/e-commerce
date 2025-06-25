import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

export default function CategoryPage() {
  const { id } = useParams(); // 'all' or categoryId

  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  
  // ✅ Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/products');
        const allProducts = res.data;

        if (id === 'all') {
          setProducts(allProducts);
          setCategoryName('All Accessories & Supplies');
        } else {
          const filtered = allProducts.filter(p => p.categoryId === parseInt(id));
          setProducts(filtered);
        }
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
    };

    fetchProducts();
  }, [id]);

  // ✅ Fetch category name dynamically
  useEffect(() => {
    const fetchCategoryName = async () => {
      if (id === 'all') return;

      try {
        const res = await axios.get(`http://localhost:5000/categories/${id}`);
        setCategoryName(res.data.name);
      } catch (err) {
        console.error('Failed to fetch category name:', err);
        setCategoryName(`Category #${id}`);
      }
    };

    fetchCategoryName();
  }, [id]);

  return (
    <div className="container py-4">
      {/* Breadcrumbs */}
      <nav aria-label="breadcrumb" className="mb-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {categoryName || 'Loading...'}
          </li>
        </ol>
      </nav>

      {/* Heading */}
      <h2 className="mb-4 text-primary">
        Category: {categoryName || 'Loading...'}
      </h2>

      {/* Products Grid */}
      <div className="row g-4">
        {products.length > 0 ? (
          products.map(product => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-4">
              <div className="card h-100 shadow text-center p-3">
                <ProductCard product={product} />
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p className="text-center text-muted">No products found.</p>
          </div>
        )}
      </div>

    </div>
  );
}
