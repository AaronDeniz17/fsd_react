import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">FULL STACK DEV DEMO STORE</p>
          <h1>Build Better Shopping UX With React + Redux</h1>
          <p>
            Explore a modern front-end architecture with route-based pages,
            centralized state management, and delightful interactions.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/shop">
              Browse Products
            </Link>
            <Link className="btn btn-secondary" to="/cart">
              View Cart
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <h3>Concepts Included</h3>
          <ul>
            <li>Client-side routing with protected navigation flow style</li>
            <li>Redux Toolkit slices and selectors</li>
            <li>Reusable UI components and responsive layout</li>
            <li>Derived totals and filtered product catalog</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
