import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseQuantity,
  removeFromCart,
  selectCartItems,
  selectCartSubtotal,
} from "../features/cart/cartSlice";

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const subtotal = useSelector(selectCartSubtotal);

  return (
    <div className="cart-layout">
      <section>
        {cartItems.length === 0 && (
          <div className="empty-state compact">
            <h3>Cart is empty</h3>
            <p>Add products from the shop page to see them here.</p>
          </div>
        )}

        {cartItems.map((item) => (
          <article key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-main">
              <h3>{item.name}</h3>
              <p>{formatCurrency(item.price)} each</p>
              <div className="quantity-controls">
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(addToCart(item))}>+</button>
              </div>
            </div>
            <div className="cart-item-side">
              <p>{formatCurrency(item.price * item.quantity)}</p>
              <button
                className="link-button"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          </article>
        ))}
      </section>

      <aside className="summary-card">
        <h3>Order Summary</h3>
        <div className="summary-row">
          <span>Subtotal</span>
          <strong>{formatCurrency(subtotal)}</strong>
        </div>
        <p className="muted">Shipping and taxes are calculated at checkout.</p>

        <button className="btn btn-primary full">Proceed to Checkout</button>
        <button className="btn btn-secondary full" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </button>
      </aside>
    </div>
  );
}

export default Cart;
