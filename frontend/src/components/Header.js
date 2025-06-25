import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function Header() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const [showDropdown, setShowDropdown] = useState(false);
  const [categories, setCategories] = useState([]);

  // 🟢 Fetch categories from backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get('http://localhost:5000/categories');
        setCategories([{ id: 'all', name: 'All Accessories & Supplies' }, ...res.data]);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <header className="shadow-sm border-bottom">
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="https://cdn.bbopokertables.com/template/common/images/2020/logo.png"
              alt="Site Logo"
              height="40"
            />
          </Link>

          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/">Home</Link>
              </li>

              <li
                className="nav-item dropdown"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <span
                  className="nav-link dropdown-toggle fw-semibold"
                  role="button"
                  style={{ cursor: 'pointer' }}
                >
                  Category
                </span>
                <ul className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
                  {categories.map(cat => (
                    <li key={cat.id}>
                      <Link
                        className="dropdown-item"
                        to={`/category/${cat.id}`}
                      >
                        {cat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/info">Info</Link>
              </li>

              <li className="nav-item position-relative">
                <Link className="nav-link fw-semibold" to="/cart">
                  🛒
                  {getTotalItems() > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {getTotalItems()}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
