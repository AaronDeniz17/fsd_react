import { useContext, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import ProductList from "../components/ProductList";
import ShopFilters from "../components/ShopFilters";
import { selectProducts } from "../features/products/productsSlice";
import { UIContext } from "../context/UIContext";

function ShopPage() {
  const allProducts = useSelector(selectProducts);
  const { showTips, setShowTips } = useContext(UIContext);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    return ["All", ...new Set(allProducts.map((item) => item.category))];
  }, [allProducts]);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = searchText.trim().toLowerCase();

    return allProducts.filter((item) => {
      const categoryMatch =
        selectedCategory === "All" || item.category === selectedCategory;
      const textMatch =
        normalizedQuery.length === 0 ||
        item.name.toLowerCase().includes(normalizedQuery) ||
        item.description.toLowerCase().includes(normalizedQuery);

      return categoryMatch && textMatch;
    });
  }, [allProducts, searchText, selectedCategory]);

  useEffect(() => {
    document.title = `Shop (${filteredProducts.length})`;
  }, [filteredProducts.length]);

  const handleReset = () => {
    setSearchText("");
    setSelectedCategory("All");
  };

  return (
    <section className="page-wrap">
      <div className="page-header">
        <h2>Shop</h2>
        <p>Browse products, filter quickly, and add items to your cart.</p>
      </div>

      {showTips && (
        <section className="tips-card">
          <p>
            Tip: use category + search together for faster filtering.
          </p>
          <button className="link-button" onClick={() => setShowTips(false)}>
            Hide tips
          </button>
        </section>
      )}

      <div className="shop-layout">
        <ShopFilters
          searchText={searchText}
          selectedCategory={selectedCategory}
          categories={categories}
          onSearchChange={setSearchText}
          onCategoryChange={setSelectedCategory}
          onReset={handleReset}
        />
        <ProductList products={filteredProducts} />
      </div>
    </section>
  );
}

export default ShopPage;
