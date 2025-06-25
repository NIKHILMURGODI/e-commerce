import React from 'react';

export default function InfoPage() {
  return (
    <div className="container my-5">
      <div className="card shadow p-4">
        <h1 className="text-primary mb-1">🧑‍💻 Developer Assessment Task</h1>
        <p className="text-muted mb-4">Basic E-commerce Application</p>

        <section className="mb-4">
          <h2>📝 Requirements</h2>
          <p>Build a basic e-commerce web application using:</p>
          <ul>
            <li><strong>Frontend:</strong> React <em>(Redux)</em></li>
            <li><strong>Backend:</strong> Node.js with Sequelize ORM</li>
            <li><strong>Database:</strong> PostgreSQL or MySQL</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2>🗃️ Backend Tasks</h2>
          <h5>1. Category Seeder</h5>
          <ul>
            <li>Use Sequelize to seed 4–5 categories (no raw SQL).</li>
          </ul>

          <h5>2. Product APIs</h5>
          <ul>
            <li>Add Product</li>
            <li>Edit Product</li>
            <li>Delete Product</li>
            <li>View All Products</li>
            <li>View Product Details</li>
          </ul>

          <h5>3. Order Management</h5>
          <ul>
            <li>API to place an order.</li>
            <li>Store customer details and cart items.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2>💻 Frontend Tasks (React)</h2>
          <h5>1. Product Listing by Category</h5>
          <ul>
            <li>Show all products grouped by category.</li>
            <li>Display:
              <ul>
                <li>Image</li>
                <li>Name</li>
                <li>Price</li>
                <li>Discounted Price</li>
                <li>"Add to Cart" button</li>
              </ul>
            </li>
          </ul>

          <h5>2. Product Detail Page</h5>
          <ul>
            <li>Full product info</li>
            <li>“Add to Cart” & “Buy Now” buttons</li>
          </ul>

          <h5>3. Cart Functionality</h5>
          <ul>
            <li>Show all added items</li>
            <li>Options to:
              <ul>
                <li>Remove items</li>
                <li>Update quantity</li>
              </ul>
            </li>
          </ul>

          <h5>4. Order Placement</h5>
          <ul>
            <li>Customer details form</li>
            <li>Send to backend on submission</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2>✨ Bonus (Nice to Have)</h2>
          <ul>
            <li>Add screenshots/video of working app in <code>docs/</code> or in <code>README.md</code></li>
            <li>Use Tailwind CSS or Bootstrap for UI</li>
            <li>Provide detailed <code>README.md</code> with:
              <ul>
                <li>Setup instructions (frontend + backend)</li>
                <li>API usage guide</li>
                <li>Tech stack info</li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h2>📤 Submission Instructions</h2>
          <ul>
            <li>Upload full project to GitHub</li>
            <li>Share public repository link after completion</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
