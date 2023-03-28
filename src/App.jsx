import "./scss/style.scss";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import CardProduct from "./pages/CardProduct/CardProduct";
import LoginPage from "./pages/LoginPage/LoginPage";
import Profile from "./pages/Profile/Profile";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<CardProduct />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
