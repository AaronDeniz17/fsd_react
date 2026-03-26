import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-content">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <div>
            <p className="price">{formatCurrency(product.price)}</p>
            <p className="rating">{product.rating} / 5.0</p>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(addToCart(product))}
          >
            Add
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
