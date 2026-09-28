import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home.jsx";
import Product from "./Product.jsx";
import Order from "./Order.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Product page */}
        <Route path="/product/:id" element={<Product />} />

        {/* Order page */}
        <Route path="/order/:id" element={<Order />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;