import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/shop" replace />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<Navigate to="/shop" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
