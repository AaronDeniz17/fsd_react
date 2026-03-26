import { createSlice } from "@reduxjs/toolkit";
import products from "../../data/products";

const initialState = {
  items: products,
  searchQuery: "",
  selectedCategory: "All",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    clearFilters(state) {
      state.searchQuery = "";
      state.selectedCategory = "All";
    },
  },
});

export const { setSearchQuery, setSelectedCategory, clearFilters } =
  productsSlice.actions;

export const selectProducts = (state) => state.products.items;
export const selectSearchQuery = (state) => state.products.searchQuery;
export const selectSelectedCategory = (state) => state.products.selectedCategory;

export const selectCategories = (state) => {
  const categories = state.products.items.map((item) => item.category);
  return ["All", ...new Set(categories)];
};

export const selectFilteredProducts = (state) => {
  const query = state.products.searchQuery.trim().toLowerCase();
  const category = state.products.selectedCategory;

  return state.products.items.filter((item) => {
    const byCategory = category === "All" || item.category === category;
    const byQuery =
      query.length === 0 ||
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query);

    return byCategory && byQuery;
  });
};

export default productsSlice.reducer;
