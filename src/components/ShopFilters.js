function ShopFilters({
  searchText,
  selectedCategory,
  categories,
  onSearchChange,
  onCategoryChange,
  onReset,
}) {
  return (
    <section className="filters-card">
      <div className="input-group">
        <label htmlFor="search">Search</label>
        <input
          id="search"
          type="text"
          value={searchText}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search by product name"
        />
      </div>

      <div className="input-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(event) => onCategoryChange(event.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <button className="btn btn-secondary" onClick={onReset}>
        Reset
      </button>
    </section>
  );
}

export default ShopFilters;
