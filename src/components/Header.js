import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { selectCartCount } from "../features/cart/cartSlice";
import { UIContext } from "../context/UIContext";

function Header() {
  const cartCount = useSelector(selectCartCount);
  const { viewMode, setViewMode } = useContext(UIContext);

  const handleViewToggle = () => {
    setViewMode(viewMode === "grid" ? "list" : "grid");
  };

  return (
    <header className="topbar">
      <div className="brand">
        <span className="brand-dot" />
        <h1>NovaCart</h1>
      </div>

      <nav className="nav-links" aria-label="Primary">
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/cart" className="cart-link">
          Cart <span className="cart-badge">{cartCount}</span>
        </NavLink>
      </nav>

      <button className="icon-btn" onClick={handleViewToggle}>
        {viewMode === "grid" ? "List view" : "Grid view"}
      </button>
    </header>
  );
}

export default Header;
