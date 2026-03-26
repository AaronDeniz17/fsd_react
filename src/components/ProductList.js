import { useContext } from "react";
import ProductCard from "./ProductCard";
import { UIContext } from "../context/UIContext";

function ProductList({ products }) {
  const { viewMode } = useContext(UIContext);

  return (
    <section className="products-panel">
      {products.length === 0 && (
        <div className="empty-state compact">
          <h3>No products found</h3>
          <p>Try changing your filters.</p>
        </div>
      )}

      <div className={`product-grid ${viewMode === "list" ? "list" : ""}`}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
