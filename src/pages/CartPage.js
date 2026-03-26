import Cart from "../components/Cart";

function CartPage() {
  return (
    <section className="page-wrap">
      <div className="page-header">
        <h2>Your Cart</h2>
        <p>Adjust quantity, review total, and continue to checkout.</p>
      </div>
      <Cart />
    </section>
  );
}

export default CartPage;
